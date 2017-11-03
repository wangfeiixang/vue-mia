<template>
	<div id="footer">
		<ul>
			<li><router-link to='/main'>main页面</router-link></li>
			<li><router-link to='/detail'>detail页面</router-link></li>
			<li><router-link to='/list'>list页面</router-link></li>
			<li><router-link to='/shopping'>shopping页面</router-link></li>
			<li><router-link to='/mine'>mine页面</router-link></li>
			<li><router-link to='/mine/login/1'>login页面</router-link></li>
			<li><router-link to='/mine/register'>register页面</router-link></li>
			<li><router-link to='/pull_down'>pull_down页面</router-link></li>
			<li><router-link to='/infinite'>无限滚动页面</router-link></li>
			<li><router-link to='/ajax'>axios请求数据页面</router-link></li>
			<li><router-link to='/filter'>filter自定义过滤页面</router-link></li>
			
		</ul>
	</div>
</template>

<script>
	import Vue from 'vue'
	
	const Footer = Vue.extend({
		name :'footer'
	})
	
	Vue.component('my-footer',Footer)
	
	export default Footer
	
</script>

<style lang="scss" scoped>

</style>