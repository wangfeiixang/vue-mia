<template>
	<div id="ajax">
		<mt-badge size="large" type="primary" > <span @click="toast">toast提示框</span> </mt-badge>
		<button class="mint-badge is-primary is-size-large" v-on:click="confirm">toast提示框</button>
	</div>
	
</template>

<script>
	import Vue from 'vue'
	
	//提示信息
	import { Toast } from 'mint-ui';
	
	//获取信息
	import { myGet,myPost } from '../server/axios'
	
	export default {
		data(){
			return{
				
			}
		},
		methods:{
			confirm(){
				console.log(111)
			},
			toast(){
				console.log('这是toast方法',myGet())
				myGet('/01.json').then((res) => {
			        if (res.code === ERR_OK) {
			          console.log(res.data)
			        }
			      }, (err) => {
			        console.log(err)
			      })
				Toast({
				  message: 'hello world',
				  position: 'center',
				  duration: 1000,
				  iconClass: 'mintui mintui-weiwanchengyanzheng'
				});
				
			}
		}
	}
	
	
	
</script>

<style lang="scss" scoped>



</style>