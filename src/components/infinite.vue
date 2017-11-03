<template>
	<mt-loadmore  @top-status-change="handleTopChange" :top-method="loadTop"   ref="loadmore"  >
    <ul
	  v-infinite-scroll="loadMore"
	  infinite-scroll-disabled="loading"
	  infinite-scroll-distance="10">
	  <li v-for="item in img">
	  		<img v-lazy="item">
	  </li>
	  <span class="confirm" v-show="confirmBoolean">没有数据</span>
	  <span class="infite-box" v-show="infiniteBoolean">
	  	<mt-spinner :type="0" color="#26a2ff" :size="18"></mt-spinner>加载中...
	  </span>
	  
	</ul>
	<!--<transition :duration="{ enter: 500, leave: 800 }">-->
	    <div slot="top" class="mint-loadmore-top" >
		      <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">下拉加载</span>
		      <span class="mint-center" v-show="topStatus === 'loading'"><mt-spinner :type="0" color="#26a2ff" :size="18"></mt-spinner>加载中...</span>
	    </div>
	    
    <!--</transition>-->
  </mt-loadmore>
</template>

<script>
	import Vue from 'vue'
	import { Indicator } from 'mint-ui';
	
	//下拉刷新
	import { Loadmore } from 'mint-ui';
	Vue.component(Loadmore.name, Loadmore);
	
	//上拉加载，无限滚动
	import { InfiniteScroll } from 'mint-ui';
	Vue.use(InfiniteScroll);
	
	//图片懒加载
	import { Lazyload } from 'mint-ui';
	Vue.use(Lazyload);
	
	//加载动画
	import { Spinner } from 'mint-ui';
	Vue.component(Spinner.name, Spinner);
	
	export default {
	    data() {
	       return {
	      	confirmBoolean:false,
	      	infiniteBoolean:false,
	        topStatus: '',
	        list:[1,2,3,4,5,6,7,8,9,10,11],
	        img:['/static/images/2.jpg','/static/images/2.jpg','/static/images/2.jpg','/static/images/2.jpg','/static/images/2.jpg']
	      }
	    },
	    methods: {
		    handleTopChange(status) {
//		    	console.log( status )
		        this.topStatus = status;
		    },
		    loadTop() {// 加载更多数据
				  
				  setTimeout( ()=>{
				  	this.$refs.loadmore.onTopLoaded();
				  	this.img.splice(0,0,'/static/images/4.jpg')
				  },800)
				  
			},
			loadBottom() {// 加载更多数据
//			 	 this.allLoaded = true;// 若数据已全部获取完毕
			  	 this.$refs.loadmore.onBottomLoaded();
			},
			loadMore() {
			  this.loading = true;
			  setTimeout(() => {
			  	console.log( this.list.length )
			  	if ( this.img.length >4 ) {
			  		
			  		this.infiniteBoolean = true
			  		this.confirmBoolean = false
			  	} else{
			  		this.confirmBoolean = true
			  	}
			    this.img.splice(this.img.length,this.img.length-1,'/static/images/3.jpg')
			    this.loading = false;
//			    Indicator.close();
			  },500);
//			  Indicator.open('正在加载');
			  
			}
	    },
	    watch:{
	    	topStatus(_new,_old){
//	    		console.log(_new)
	    		/*if ( _new=='loading' ) {
	    			console.log('正在加载')
    				Indicator.open('正在加载');
	    		} else{
	    			console.log('加载完成')
	    			setTimeout(()=>{
	    				Indicator.close();
	    			},1000)
	    			
	    		}*/
	    	}
	    }
	  }
	
</script>

<style lang="scss" scoped>
	
	ul{
		padding:5px 10px;
		li{
			list-style: none;
			width:100%;
			
			color:#0000AA;
			height:150px;
			line-height: 150px;
			text-align: center;
			background: gold;
			margin-bottom: 5px;
			img{
				width: 150px;
	  			height:150px;
			}
		}
		span.infite-box{
			display: inline-block;
			width: 100%;
			text-align: center;
			margin: auto;
			margin-top: 5px;
			span{
				display: inline-block;
				vertical-align: -6px;
				margin-right: 3px;
			}
			
		}
		span.confirm{
			display: inline-block;
			width: 100%;
			text-align: center;
			margin: auto;
		}
	}
	
	.mint-loadmore-top{
		span{
			display: inline-block;
			/*margin: auto;*/
			text-align: center;
			
			span{
				display: inline-block;
				vertical-align: -6px;
				margin-right: 3px;
			}
		}
	}
	
	


</style>