<template>
  <div class="shopping">
    <my-header :isPath="isPath">购物车</my-header>
    <div class="header-box" @click="handleclick"></div>
    <div class="content">
      <label class="mint-checklist-label"><span class="mint-checkbox"><input type="checkbox" class="mint-checkbox-input" value="蜜芽自营"> <span class="mint-checkbox-core"></span></span>蜜芽自营</label>
      <p class="plummet"><i>直降</i><span class="faddish">爆款直降</span><span class="iconfont">&#xe63d;</span></p>
      <div class="items">
          <div class="items-label" v-for="item in items">
               <label class="mint-checklist-label"><span class="mint-checkbox"><input type="checkbox" :checked="item.isChecked" @click="item.isChecked=!item.isChecked" class="mint-checkbox-input" value=""> <span class="mint-checkbox-core" ></span></span></label>
               <a  class="img">
                  <img  :src="item.pic" alt="">
               </a>
               <div class="right">
                 <h5><p>{{item.name}}</p> <span><i>￥</i>{{item.price}}</span></h5>
                 <p class="require">无规格</p>
                 <p class="goShopping">
                    <span class="reduce" @click="reduce(item)">-</span>
                    <input type="text" :value="item.num">
                    <span class="add" @click="add(item)">+</span>
                 </p>
               </div>
            </div>
            <div class="del">
                <a @click="shan"><i class="iconfont">&#xe605;</i><span>删除选中商品</span></a>
            </div>  
        </div>
    </div>
    <div class="bottom">
        <label class="mint-checklist-label"><span class="mint-checkbox"><input type="checkbox" :checked="allcheck" @click="haha" class="mint-checkbox-input" value=""> <span class="mint-checkbox-core"></span></span>全选</label>
        <div class="bottom-center">
          <p><span class="total">总计</span><span><i>￥</i>{{money}}</span></p>
          <p>不含运费和进口税</p>
        </div>
        <div class="footer" :class="nums>0?'active':''">结算<span>({{nums}})</span></div>
    </div>
    <public-footer></public-footer>
  </div>
</template>

<script>
import axios from  'axios';
import {mapState,mapGetters,mapActions} from 'vuex'
import Footer from './Footer'
export default {
  name: 'shopping',
  data () {
    return {
      isPath:''
    }
  },
  methods:{
  	handleclick(){//返回上一个页面
      this.$router.go(-1)
    },
    add(item){//增加商品
			this.$store.dispatch("addGoods",item)
			this.$store.dispatch("getNum")
    },
    reduce(item){//减少商品
    	this.$store.commit("reduceGoods",item)
    	this.$store.commit("getNum")
    },
    shan(){//删除选中商品
    	this.$store.dispatch("shan")
    },
    haha(){//点击全选按钮，商品列表相应的checkbox改变
    	this.$store.dispatch("check")
    }
    
  },
  computed:{ 	
  	...mapState({items:'goods',nums:'totalnum',money:'tmoney',allcheck:'allCheck'})
  },
  mounted(){
//	console.log(this.items)
	  this.$store.dispatch("getNum")
   /*axios.get('https://m.mia.com/instant/seckill/seckillPromotionItem/43328')
    .then((res)=>{
      console.log(res.data)
    })
    .catch((res)=>{
      console.log('错误')
    })*/
  },
  watch:{
  	items:{//检测商品数据变化，重新计算总价钱和总数量，因为每一项都有isChecked，所以也可以检测全选按钮变化
  		 handler:function(val){
  		 	 this.$store.dispatch("getNum");
  		 	 this.$store.dispatch("allChecked")
  		 },
  		 deep:true
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
   .shopping{
        height: 100%;
        position: relative;
        header{
          position: fixed;
        }
  }

  .header-box{
    position: fixed;
    left:0;
    top:0;
    width:46px;
    height:44px;
    z-index: 19999;
  }

  .mint-checkbox-input:checked + .mint-checkbox-core {
    background-color: #fa4b9b;
    border-color: #fa4b9b;
  } 

  .content{
    height: 100%;
    overflow-y: scroll;
    position: relative;
    width:100%;
    label.mint-checklist-label{
        display: block;
        padding: .25rem .45rem;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
        border-bottom: 1px solid #e2e2e2;
        font-size: 20px;
        color: #666;
        span.mint-checkbox-core{
          margin-right:0.3rem;
          width:15px;
          height:15px;
        }
        span.mint-checkbox-core:after{
            top: 0px;
            left: 3px;
        }
    }
    p.plummet{
      padding: .2rem .25rem;
      color: #fca4c8;
      margin-top: 0.1rem;
      background-color: #fff6fa;
      cursor: pointer;
      i{
        border-radius: 2px;
        display: inline-block;
        margin-right: 3px;
        padding: 0 .1rem;
        min-width: .25rem;
        line-height: .45rem;
        background-color: #fb5b71;
        text-align: center;
        color: #fff;
        font-style:normal;
      }
      span.faddish{
        padding: .2rem .1rem .2rem 0.2rem;
        color: #fca4c8;
        cursor: pointer;
      }
      span.iconfont{
        color: #fca4c8;
        cursor: pointer;
        display: inline-block;
        font-size:20px;
        vertical-align: middle;
      }
    }
    div.items{
      margin-top: 0.2rem;
      overflow-y: scroll;
      background:#f5f5f5;
      margin-bottom: 4rem;
    }
    div.del{
      margin:0.5rem 0;
      background:#fff;
      text-align: center;
      padding:0.3rem 0;
      i,span{
        display: inline-block;
        vertical-align: middle;
      }
      i.iconfont{
        color:#fa4b9b;
        margin-right: 5px;
      }
      span{
        
      }
    }
    div.items-label{
      background:#fff;
      padding-bottom: 0.5rem;
       overflow: hidden;
       label.mint-checklist-label{
        float: left;
        border-bottom: 0px;
        margin-top: 0.3rem;
      }
      a.img{
        margin:0  0.3rem 0 -0.3rem;
        float: left;
        width: 1.55rem;
        height: 1.55rem;
        img{
          width:100%;
        }
      }
      div.right{
        float: left;
        h5{
          width: 100%;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          font-weight: 400;
          p{
            float: left;
            width: 5rem;
            overflow: hidden;
            white-space: nowrap;
                color: #333;
            text-overflow: ellipsis;
          }
          span{
            float: right;
                color: #f34fa1;
            i{
              font-style: normal;
            }
          }
        }
        p.require{
          color: #999;
         margin: 0.15rem 0;
        }
        p.goShopping{
          width:3.2rem;
          border: 1px solid #ddd;
          overflow: hidden;
          span.reduce,span.add{
            display: inline-block;
            width: 0.9rem;
            font-size:0.5rem;
            color: #ccc;
            text-align: center;
          }
          input{
            padding: .15rem 0;
            width: 1.1rem;
            border: 1px solid #ddd;
            border-width: 0 1px;
            text-align: center;
          }
          span.add{
            color: #666;
          }
        }
      }
    }
  }

  .bottom{
    position: fixed;
    left:0;
    bottom:44px;
    width: 100%;
    height: 2rem;
    z-index: 999;
    font-size: .6rem;
    color: #8a8a8a;
    background-color: #fff;
    label.mint-checklist-label{
      display: inline-block;
      font-size:16px;
      float: left;
        line-height: 2rem;
    }
    div.bottom-center{
      float: left;
      text-align: right;
      color: #999;
      font-size: 16px;
      margin-top: 0.5rem;
      padding-left: 19%;
      p{
        margin-bottom: 0.3rem;
        .total{
          color:#333;
        }
        i{
          font-style:normal;
          color: #f34fa1;
        }
        span{
          color: #f34fa1;
        }
      }
    }
    .footer{
      float: right;
      background: #858585;
       color:#fff;
      text-align: center;
       line-height: 2rem;
       font-size:14px;
      height:100%;
      padding:0 0.3rem;
    }
    .active{
    	 background-color:#fa4b9b;
    }
  }

</style>
