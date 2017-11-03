<template>
   <div class="swiper-container banner">
    	<div class="swiper-wrapper">
    		<div class="swiper-slide" v-for="banner in banners">
    			<img v-bind:src="banner.img_url"/>
    		</div>
    	</div>
    	<div class="swiper-pagination"></div>
    </div>
</template>

<script>
	import axios from 'axios'
	export default{
		name:'main-banner',
		swiper:null,
		data(){
			return{
				banners:[]
			}
		},
		methods:{
			getBanners(){
				var that = this;
				axios.get('../../../static/json/banner.json')
			     .then(function(res){
			     	that.banners = res.data;
//			     	console.log(that.banners)
                    setTimeout(function(){
						that.$options.swiper=new Swiper(".banner",{
						    pagination:'.swiper-pagination',
						    loop: true,
							autoplay:3000,
							autoplayDisableOnInteraction: false
				        })
			        },0)
			     })
			}
		},
		mounted(){
			this.getBanners();
		},
		watch:{
			banners(val){
				let that = this
				setTimeout(function(){
					that.$options.swiper.update()
				},0)
			}
		}
	}
</script>

<style scoped lang="scss">
   img{
   	 width:100%;
   	 height:5.01rem;
   }
</style>