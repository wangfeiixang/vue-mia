<template>
	<mt-loadmore  @top-status-change="handleTopChange" :top-method="loadTop"   ref="loadmore"  >
    <ul
	  v-infinite-scroll="loadMore"
	  infinite-scroll-disabled="loading"
	  infinite-scroll-distance="10">
	  <li v-for="item in list">{{ item }}</li>
	</ul>
    <div slot="top" class="mint-loadmore-top">
      <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
      <span v-show="topStatus === 'loading'">Loading...</span>
      <mt-spinner :type="0" color="#26a2ff"></mt-spinner>
    </div>
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
	        topStatus: '',
	        list:[1,2,3,4,5,6,7,8,9,10,11,12]
	      }
	    },
	    methods: {
		    handleTopChange(status) {
//		    	console.log( status )
		        this.topStatus = status;
		    },
		    loadTop() {// 加载更多数据
				  this.$refs.loadmore.onTopLoaded();
				  this.list.splice(0,0,this.list.length)
			},
			loadBottom() {// 加载更多数据
//			 	 this.allLoaded = true;// 若数据已全部获取完毕
			  	 this.$refs.loadmore.onBottomLoaded();
			},
			loadMore() {
			  this.loading = true;
			  setTimeout(() => {
			    this.list.splice(this.list.length,this.list.length-1,this.list.length+1)
			    this.loading = false;
			    Indicator.close();
			  }, 1000);
			  Indicator.open('正在加载');
			  
			}
	    },
	    watch:{
	    	topStatus(_new,_old){
//	    		console.log(_new)
	    		if ( _new=='loading' ) {
	    			console.log('正在加载')
    				Indicator.open('正在加载');
	    		} else{
	    			console.log('加载完成')
	    			setTimeout(()=>{
	    				Indicator.close();
	    			},1000)
	    			
	    		}
	    	}
	    }
	  }
	
</script>

<style lang="scss" scoped>
	
	ul{
		li{
			list-style: none;
			width:100%;
			color:#0000AA;
			height:50px;
			line-height: 50px;
			text-align: center;
			background: gold;
			margin-bottom: 5px;
		}
	}


</style>