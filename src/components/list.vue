<template>
	<div id="list">
		<my-header></my-header>
		这是list页面
		<ul>
			<li> 
				<img src="../../static/images/2.jpg"/>
				<span >
					<mt-button type="primary" @click="reduce">-</mt-button>
					<span v-html="$store.state.count"></span>
					<mt-button type="primary" @click="add">+</mt-button>
					<span >购买者:{{$store.state.user}}</span>
				</span>
				<router-link to="/shopping">去购物车页面</router-link> 
			
			</li>
		</ul>
		<my-footer></my-footer>
	</div>
</template>

<script>
	import Vue from 'vue'
	import Footer from './common/footer'
	import {mapState} from 'vuex'
	
	export default {
		data(){
			return{
				
			}
		},
		computed:{
//			...mapState({count:'count'})
		},
		methods:{
			add(){
//				console.log('add事件',this.count)
//				this.count++
			},
			reduce(){
				
			}
		}
	}
	
	
	
	
</script>

<style lang="scss" scoped>
	ul{
		li{
			img{
				width: 50px;
			}
		}
	}
</style>