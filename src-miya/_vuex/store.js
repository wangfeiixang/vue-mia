import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import actions from './actions'
import { MessageBox } from 'mint-ui';
const state = {
	goods:[],
	totalnum:0,
	tmoney:0,
	allCheck:true
}
const mutations = {
	addGoods(state,info){//增加数量为1商品
	  if(state.goods){	  	
	  	for(var i = 0;i<state.goods.length;i++){
	  		 if(info.id==state.goods[i].id){
	  		 	state.goods[i].num++;
	  		 	return;
	  		 }
	  	}
	  }
      state.goods.push(info)
	},
	addLists(state,info){//增加数量不为1的商品
	  if(state.goods){	  	
	  	for(var i = 0;i<state.goods.length;i++){
	  		 if(info.id==state.goods[i].id){
	  		 	state.goods[i].num += info.num;
	  		 	return;
	  		 }
	  	}
	  }
      state.goods.push(info)
	},
	reduceGoods(state,info){//减少商品
	    for(var i = 0;i<state.goods.length;i++){
	  		 if(info.id==state.goods[i].id){
	  		 	if(state.goods[i].num>1){	  		 		
	  		 		state.goods[i].num--
	  		 	}else{
	  		 		MessageBox.confirm('确定执行此操作?').then(action => {
			        	state.goods.splice(i,1)
					},action => {
						
					})
	  		 		break;
//	  		 		if(confirm("确定要删除吗")){
//	  		 			state.goods.splice(i,1)
//	  		 		}
	  		 	}
	  		 }
	  	}
	},
	getNum(state){//计算总数量和总价钱
    	var data = state.goods
// 	 	console.log("计算价钱",data)
    	var num  = 0;
    	var money = 0;
    	for(var i=0;i<data.length;i++){
    		 if(data[i].isChecked==true){
    		 	 num += data[i].num
    		 	 money+=data[i].num*data[i].price
    		 }
    	}
    	state.totalnum = num;
    	state.tmoney = money;
    },
    remove(){//删除选中商品
    	var data = state.goods;
        var arr = [];
    	for(var i=0;i<data.length;i++){
    		 if(data[i].isChecked==false){
    		 	arr.push(data[i]);
    		 }
    	}
    	state.goods = arr;
    },
    allChecked(){//判断是否全选
    	var data = state.goods;    	
    	for(var i=0;i<data.length;i++){
    		 if(data[i].isChecked==false){ 
//  		 	console.log("没全选")
    		 	state.allCheck=false;
    		 	return;
    		 }
    	}
    	state.allCheck=true;
    },
    check(){//点击全选按钮，商品列表相应的checkbox改变
    	var data = state.goods;
    	state.allCheck = !state.allCheck;
    	if(state.allCheck==true){
    		for(var i=0;i<data.length;i++){
    		   data[i].isChecked=true;
    	    }
    	}else{
    		for(var i=0;i<data.length;i++){
    		   data[i].isChecked=false;
    	    }
    	}
    }
}

const store = new Vuex.Store({
	state,
	mutations,
	actions
	
})
export default store