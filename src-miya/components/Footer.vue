<template>
	<footer>
		<router-link to="/main">
			<span class="iconfont icon-shouye"></span>
			<span>首页</span>
		</router-link>
		<router-link to="/classify">
			<span class="iconfont icon-tubiao03"></span>
			<span>分类</span>
		</router-link>
		<router-link to="shopping">
			<span class="iconfont icon-gouwuche"></span>
			<span>购物车</span>
		</router-link>
		<router-link to="sign">
			<span class="iconfont icon-dl"></span>
			<span>快速登录</span>
		</router-link>
	</footer>
</template>

<script>
	import Vue from 'vue'
	const Footer = Vue.extend({
		name:'footer'
	})
	Vue.component('public-footer',Footer)
	export default Footer
</script>

<style scoped lang="scss">
   footer{
   	    position: fixed;
   	    left:0;
	    bottom: 0;
	    width: 100%;
	    height: 44px;
	    background: #fafafa;
	    border-top: 1px solid #e6e6e6;
	    z-index: 999;
	    display:flex;
	    justify-content:center;
	    align-items:center;
	    a{
	    	flex:1;
	    	height:100%;
	    	display:flex;
	    	flex-direction:column;
	    	justify-content:space-around;
	    	align-items:center;
	    	&.router-link-active{
	    		color:#fc94c4;
	    	}
	    	span{
	    		&.iconfont{
	    			font-size:22px;
	    		}
	    	}
	    }
   }
</style>