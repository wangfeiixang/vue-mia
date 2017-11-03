<template>
	<div class="main">
		<main-hide :scrolltop="scroll"></main-hide>
		<main-header></main-header>
		<main-banner></main-banner>
		<main-seckill></main-seckill>
		<main-baby></main-baby>
		<main-pin></main-pin>
		<main-new></main-new>
		<public-footer></public-footer>
	</div>
</template>

<script>
	import Footer from './Footer'
	import MainHeader from './Maincomponents/MainHeader'
	import MainBanner from './Maincomponents/MainBanner'
	import MainSeckill from './Maincomponents/MainSeckill'
	import MainBaby from './Maincomponents/MainBaby'
	import MainPin from './Maincomponents/MainPin'
	import MainNew from './Maincomponents/MainNew'
	import MainHide from './Maincomponents/MainHide'
	export default{
		name:"main",
		data(){
		  return{
		  	scroll:null
		  }
		},
		methods:{
			menu(){
				this.scroll = document.documentElement.scrollTop||document.body.scrollTop;
			}
		},
		mounted(){
			window.addEventListener('scroll', this.menu)
		},
		components:{
			MainHeader,
			MainBanner,
			MainSeckill,
			MainBaby,
			MainPin,
			MainNew,
			MainHide
		}
	}
</script>

<style scoped lang="scss">
  .main{
  	padding-bottom:44px;
  }
</style>