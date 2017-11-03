<template>
	<div id="main">
		<my-header></my-header>
		<my-content></my-content>
		这是main页面
		<my-footer></my-footer>
		<button v-on:click="getData">获取数据</button>
	</div>
</template>

<script>
	import Vue from 'vue'
	import Footer from './common/footer'
	
	export default {
		mounted(){
//			console.log(111)
//			console.log( this.$axios )
			
		},
		methods:{
			getData(){
				this.$axios.get('01.json')
				.then((json)=>{
	            	console.log( json.data )
	            })
			}
		}
		
	}
</script>

<style>
</style>