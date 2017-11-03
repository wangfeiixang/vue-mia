<template>
  <div class="classify-header">
    <header>
      <div id="xbox">
      	<router-link to="/">
      	<span :class="['iconfont','icon-fanhuijian',msg.isShow?'active':'']" icon="back"></span>
      	</router-link>
      	<span :class="['iconfont','icon-iconquxiaohuodong01',msg.isShow?'':'active']" @click="msg.isShow=!msg.isShow;isSearch=false"></span>
      </div>
     
       <input type="text" placeholder="请输入关键字搜索" @click="focus" v-model="newData" @keyup.enter="addNew();search()"/>
     	<router-link to="/">
       <span class="iconfont icon-shouye"></span>
      </router-link>
      <section class="searchbox" v-if="isSearch" v-model="isSearch">
      	<ul>
      		<li v-for="item in searchData">{{item.name}}</li>
      	</ul>
      </section>
    </header>
  
		  <div :class="['search_history',msg.isShow?'':'show']">
				 <section class="shBox">
					
					<h3 class="search_history1">热门搜索</h3>
					
					<ul>
						<li><a>尤妮佳</a></li>
					  <li><a>牙胶</a></li>
					  <li><a>收纳柜</a></li>
					  <li><a>加州宝宝</a></li>
					  <li><a>安全座椅</a></li>
					  <li><a>隔尿垫</a></li>
					</ul>
				</section>
			  <div class="search_historyHr"></div>
			 <section class="shBox shBoxhistory">
					<h3 class="search_history2">最近搜索</h3>
					
				<ul>
					<li v-for="item in data" v-if="item" >
						<a class="color">{{item}}</a>
						
					</li>
				</ul>
				</section>
						<div class="btn-clear" v-on:click="Clear"><span class="iconfont icon-icon-del-copy" ></span>清空搜索历史</div>
			</div>
    	
    	
    	

   
  </div>
</template>

<script>
import Vue from "vue"
import 	axios from "axios"
export default {
  name: 'classify-header',
  props:["msg"],
  data () {
    return {
    	newData:"",
    	data:["奶粉"],
    	isSearch:false,
    	searchData:null
    	
    
    }
  },
  methods:{
  	focus(){
  	this.msg.isShow=false
  		
  	},
  	addNew(){
  		
  		this.data.push(this.newData)
  		
  	},
  	Clear(){
  	this.data=[]
  		
  	},
  	search(){
  		 this.isSearch=true;
  		 var that =this
        console.log(this.newData)
	      axios.get("https://m.mia.com/instant/welcome/ajaxProductWordName",
	     {params:{lenovoWord:that.newData}}).then(function(res){
	 
	     		that.searchData=res.data.data
	     	
  	    //that.searchData=res.data.data
		    //console.log(that.searchData)
		   //https://m.mia.com/special/module/index/20074/wap/
	     })
  	}
  	
  },
  mounted(){
//	//https://m.mia.com/instant/welcome/ajaxProductWordName?lenovoWord
//var that =this
//console.log(this.newData)
//	axios.get("https://m.mia.com/instant/welcome/ajaxProductWordName",
//	     {params:{lenovoWord:that.newData}}).then(function(res){
//		  console.log(res)
//		//https://m.mia.com/special/module/index/20074/wap/
	//})
   
  	
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 .classify-header{
 	width:100%;
 	background:#f2f2f2;
 	height: 28.4rem;
  overflow: hidden;
 
 	}
 header{
 	  position:fixed;
 	  
    padding: .175*0.625rem 0;
    height: 1.85*0.625rem;
    font-size: .7*0.625rem;
    background-color: #ff4d8e;
    z-index: 50;
    display: flex;
    justify-content: space-between;
    align-items:center;
    width: 100%;
    
    #xbox,a{flex-grow:1;
    text-align:center;
    line-height: 1.5*0.625rem;
    height: 100%;
    width: 10%;
    }
    input{flex-grow:4;
    height:100%;
    width: 80%;
    padding: 0 .4*0.625rem;
    border: none 0;
    border-radius: 5px;
    background:#FFFFFF;
    height: 1.5*0.625rem;
    line-height: 1.5*0.625rem;
    font-size: .7*0.625rem;
    color: #999;
    outline: 0;
           }
 }
 header .iconfont{
 	font-size: 1*0.625rem;
 	color: #fff;
 }
  header .icon-iconquxiaohuodong01{
  	font-size: 0.7*0.625rem;
  }
 header .icon-fanhui{
 display: none;
 }
 header #xbox{
 	position: relative;
 	top: 0;
 	text-align: center;
 	line-height: 1.5*0.625rem;
 	
 }
 header .icon-iconquxiaohuodong01,header .icon-fanhuijian{
 	display: inline-block;
 	position:absolute;
 	text-align: center;
 	top:0;
 	left:8px;
 	color: rgba(255,255,255,0.8);
 	display: none;
 }
 header span.active{display: block;}
 /*搜索历史*/
 .search_history{
   position: fixed;
 	 margin-top:1.85*0.625rem;
 	 background: #FFFFFF;
 	 padding-bottom: .5rem;
   width: 100%;
   background: #fff;
   display: none;
   
  h3{
 	  color: #999;
    font-size: .65*0.625rem;
    padding-left: .9*0.625rem;
    margin-bottom: .625*0.625rem;
    font-weight: 400;
    }
 	li {
    font-size: .6*0.625rem;
    color: #424242;
    margin-bottom: .5*0.625rem;
    display: inline-block;
    border: 1px solid #dad7d7;
    border-radius: .5*0.625rem;
    margin-left: .5*0.625rem;
    padding: .4*0.625rem .5*0.625rem;
    }
 }
 .search_history.show{display: block;}
 .search_historyHr {
    border-top: 1px solid #ddd;
}
.search_history>section.shBox {
    padding: .5*0.625rem .75*0.625rem;
    overflow: hidden;
}
.search_history1{background:url(../../assets/sx_b5.jpg) no-repeat left center/5%;}
.search_history2{background:url(../../assets/sx_b6.jpg) no-repeat left center/5%;}
.search_history .btn-clear {
    color: #8594a6;
    font-size: .65*0.625rem;
    margin: 0 auto;
    width: 100%;
    text-align:center;
}

.searchbox{width: 100%;
  height: 667px;
  background: #FFFFFF;
  position: absolute;
  top:1.85*0.625rem;
     }
.searchbox ul>li{color: #666;
    font-size: .7*0.625rem;
    background: url(../../assets/icon_search.png) no-repeat left center;
    padding-top: .75*0.625rem;
    padding-bottom: .75*0.625rem;
    margin-left: 0.625rem;
    padding-left: 1.675*0.625rem;
    border-bottom: 1px solid #f2f2f2;
    background-size: 9%;
    }
</style>
