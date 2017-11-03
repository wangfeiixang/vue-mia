<template>
  <div>
     <div class="title">
     	  <div class="left"></div>
     	  <div class="right">
     	  	 <strong>130万</strong>达人妈妈都在团
     	  </div>
     </div>
     <div class="pin swiper-container">
        <div class="swiper-wrapper">
		    		<div class="swiper-slide" v-for="list in lists">
		    			   <div class="img-box">
		    			   	  <img :src="list.picture" alt="" />
		    			   	  <span class="person">2人团</span>
		    			   </div>
		    			   <p v-text="list.name"></p>
	    			   	  <div class="sp">
	    			   	  	 拼团价<span>¥{{list.market_price}}</span>
	    			   	  </div>
	    			   	  <div class="mp">
	    			   	  	 市场价<span>¥{{list.sale_price}}</span>
	    			   	  </div>
		    		</div>
    	  </div>
     </div>
     <a href=""class="btn-more">
     	  <span>更多火爆商品 进入拼团首页<i class="iconfont icon-gengduo"></i></span>
     </a>
  </div>
</template>

<script>
	import axios from 'axios'
	export default{
	  name:"main-pin",
	  swiper:null,
	  data(){
	  	return{
	  		 lists:[]
	  	}
	  },
		methods:{
			getData(url){
				var that = this;
				axios.get(url)
				.then(function(res){
					 var data = res.data.data_list
//					 console.log(data)
					 for(var i=0;i<data.length;i++){
					 	  data[i].market_price = data[i].market_price*100/1000
//					 	  data[i].sale_price = data[i].sale_price*100/1000
              	that.lists.push(data[i])
					 }
				})
		  }
		},
		mounted(){
			this.getData("https://m.mia.com/instant/groupon/common_list/1/0/")
			this.getData("https://m.mia.com/instant/groupon/common_list/2/0/")
			this.$options.swiper=new Swiper(".pin",{
			  		slidesPerView : 'auto',
			  		slidesPerColumn: 2,
			  		spaceBetween:15
	  	})
		},
		watch:{
		    lists(val){
		  		let that = this
		  		setTimeout(()=>{
		  			that.$options.swiper.update()
		  		},0) 		
		  	}
		}
	}
</script>

<style scoped lang="scss">
	.title{
		  padding: 0 10px;
	    height: 40px;
	    font-size: 16px;
	    display:flex;
	    justify-content:space-between;
	    align-items:center;
	    .left{
	    	  width: 4.1333rem;
			    height: .5333rem;
			    background: url(//img.miyabaobei.com/d1/p5/2017/05/31/fe/10/fe101a9f87e24c1af0784f7a9d28b430244043045.png) no-repeat;
			    background-size: 4.1333rem auto;

	    }
	    .right{
	    	 font-size: .3467rem;
	    	 strong{color: #ff4a4a;}
	    }
	}
	
	.pin{
		 padding-left: .2667rem;
		 .swiper-slide{
 	        margin-right: .1333rem;
			    width: 2.2rem;
			    white-space: normal;
			    font-size: .32rem;
		 	}
		 .img-box{
		 	   width:2.2rem;
		 	   height:2.2rem;
		 	   position:relative;
		 	   img{width:100%;height:100%;}
		 	   span{
 	   	        position: absolute;
					    bottom: 0;
					    left: 0;
					    border: 1px solid #ff4a4a;
					    background: rgba(250,250,250,.86);
					    padding: 0 .0667rem;
					    border-radius: .0933rem;
					    line-height: 1.4;
					    font-size: .2933rem;
					    color: #ff4a4a;
		 	   }
		 }
		 p{
		 	    font-size: .32rem;
			    line-height: 1.35;
			    height: .864rem;
			    overflow: hidden;
			    margin-top: .1067rem;
		 }
		 .sp{
		 	    line-height: 1.3;
			    font-size: .2933rem;
			    color: #ff4a4a;
			    span{
			    	  margin-left: .0667rem;
					    font-size: .3733rem;
					    font-weight: 700;
			    }
		 }
		 .mp{
		 	    line-height: 1.3;
			    font-size: .2667rem;
			    color: #999;
			    span{
			    	 margin-left: .0367rem;
			    	 text-decoration:line-through;
			    }
		 }
	}
	
	.btn-more{
		  display: block;
	    margin: .2667rem auto 0;
	    width: 8.8667rem;
	    height: .96rem;
	    line-height: .96rem;
	    border-radius: .6667rem;
	    background-color: #ff4a4a;
	    text-align: center;
	    font-size: .4rem;
	    color: #fff;
	    i{
	    	font-size:0.1rem;
	      margin-left:0.1rem;
	    }
	}
</style>