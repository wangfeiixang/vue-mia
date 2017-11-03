<template>
	<div id="detail">
		<my-header></my-header>
		这是detail页面
		<ul>
			<li> 
				<img src="../../static/img/shopping01.jpg"/>
				<span>
					<mt-button type="primary" @click="reduce">-</mt-button>
					<span v-html="count"></span>
					<mt-button type="primary" @click="add">+</mt-button>
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
	
	//vuex
	import {mapState} from 'vuex'
	
	export default {
		
		data(){
			return{
				
			}
		},
		computed:{
			...mapState({count:'count'})
		},
		methods:{
			add(){
//				console.log('add事件',this.count)
//				this.count++
				this.$store.dispatch("add",'数量增加')
				/*this.$axios.get('01.json')
				.then((data)=>{
	            	console.log( data.data )
	            })
				.catch((error)=>{
					console.log('数据发送失败')
				})*/
			},
			reduce(){
				
				this.$store.dispatch("reduce",'数量减少')
				/*console.log('reduce事件')
				let that = this;
				if ( this.count<=1 ) {
					MessageBox.confirm('确定执行此操作?').then(action => {
//			        	state.goods.splice(i,1)
						that.count = 0;

					},action => {
						
					})
				} else{
					this.count--
				}*/
			}
		}
		
	}
	
	
	
</script>

<style lang="scss" scoped>
	

</style>