<template>
   <div class="new">
      <div class="new_user_pic">
         <img src="https://img.miyabaobei.com/d1/p5/2017/07/04/b1/ff/b1ffcfc9e86c81509fc0626cf3098540580555678.jpg" alt="" />
      </div>
      <div class="title">
      	 今日特卖
      	 <small>每日十点上新</small>
      </div>
      <div class="list"	
      v-infinite-scroll="getGoods"
	  infinite-scroll-disabled="notLoad"
	  infinite-scroll-distance="10">
	      <section v-for="good in goods">
	      	  <div class="big">
	      	  	 <a href="">
	      	  	 	<img :src="good.outletPic" alt="" />
	      	  	 </a>
	      	  </div>
	      	  <div class="small">
	      	  	  <div class="small-wrap swiper-container">
			       	  <div class="swiper-wrapper">
			    		<div class="swiper-slide" v-for="item in good.outletsItems">
			    		   <a href="">
			    		   	  <div><img :src="item.itemPic" alt="" /></div>
			    		   	  <p class="name" v-text="item.name"></p>
			    		   	  <p class="price">
			    		   	  	  ¥{{item.sale_price}}
			    		   	  	  <span>¥{{item.market_price}}</span>
			    		   	  </p>
			    		   </a>
			    		</div>
	    	         </div>
	             </div>
	      	  </div>
	      </section>
      </div>
   </div>
</template>

<script>
	import axios from 'axios'
	export default{
		name:"main-new",
		swiper:null,
		page:1,
		data(){
			return{
				goods:[],
				notLoad:false
			}
		},
		methods:{
			getGoods(){
				var that = this;
				axios.get('https://m.mia.com/instant/welcome/ajaxGetIndexOutlets',{
					params:{
						count:2,
						page:that.$options.page
					}
				})
			     .then(function(res){
		     	    var data = res.data.res;
		     	    if(data.length==0){
					   that.notLoad=true
					   return
			     	}
		     	    data.forEach((item,i)=>{
		     	    	that.goods.push(item)
		     	    })
		     	    setTimeout(function(){
			     	    that.$options.swiper=new Swiper(".small-wrap",{
				  				slidesPerView : 'auto'
		  	            })
		     	    },0)
		     	    that.$options.page+=1
			     })
			}
		}
	}
</script>

<style scoped lang="scss">
      .new_user_pic{
      	   margin: 10px 0;
      	   img{
      	   	 width:100%;
      	   	 height:3.73rem;
      	   }
      }
      .title{
      	padding: 0 10px;
	    height: 40px;
	    line-height: 40px;
	    font-size: 16px;
	    &:before{
	    	display: inline-block;
		    vertical-align: middle;
		    position: relative;
		    top: -2px;
		    content: '';
		    margin-right: 3px;
		    width: 20px;
		    height: 20px;
		    background: url(https://img.miyabaobei.com/d1/p4/2016/09/23/5e/ff/5eff7c11f9747793520ee91ae1591d53134191891.png) no-repeat;
		    background-size: auto 20px;
		    background-position: -50px 0;
	    }
	    small{
	    	margin-left: 7px;
		    font-size: 12px;
		    color: #666;
	    }
      }
      .big{
		    display: block;
		    height: 4.66667rem;
		    background-color: #f0f0f0;
		    a{display:block;width:100%;height:100%;img{width:100%;height:100%;}}
		   
      }
      .small{
		  padding: .26667rem 0;
		  background:#fff;
		 
		  .small-wrap{
		  	  padding-left:.4rem;
		  	   .swiper-slide{
		  	   	    width: 2.26667rem;
				    min-width: 2.26667rem;
				    margin-right: .26667rem;
				    text-align: center;
		  	   }
		  	   a{
		  	     display: block;
		  	     div{
	  	     	    border: 1px solid #e5e5e5;
				    min-height: 2.26667rem;
				    img{width:2.213rem;height:2.213rem;}
		  	     }
		  	     .name{
		  	     	    overflow: hidden;
					    min-height: 30px;
					    margin-top: 7px;
					    line-height: 1.3;
					    color: #333;
					    font-size: 12px;
					    display: -webkit-box;
					    display: box;
					    -webkit-line-clamp: 2;
					    line-clamp: 2;
					    -webkit-box-orient: vertical;
					    box-orient: vertical;
		  	     }
		  	     .price{
		  	     	padding-top:0.1rem;
		  	     	font-size: 14px;
    				color: #fa4b9b;
    				span{
    					font-size:9px;
    					color: #999;
    					text-decoration:line-through;
    				}
		  	     }
		       }
		  }
		 
      }
</style>