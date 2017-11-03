<template>
	<div id="login">
		这是login页面
	</div>
</template>

<script>
	export default {
		data(){
		   return{
		   	
		   }
		},
		mounted(){
			console.log( 'login',this.$router.currentRoute.params.id,this )
		}
	}
</script>

<style>
</style>