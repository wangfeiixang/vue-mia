<template>
	<div id="filter">
		<h3>这是filter页面</h3>
		<ul>
			<li v-for="item in list">{{ item | sum }}</li>
		</ul>
		<p>{{ evenNumbers | evenNumbers  }}</p>
		<p>{{ capitalize | capitalize  }}</p>
		<ul>
			<li v-for="item in filterlist">{{ item }}</li>
		</ul>
	</div>
</template>

<script>
	import Vue from 'vue'
	import Footer from './common/footer'
	import {mapState} from 'vuex'
	
	export default {
		data(){
			return{
				list:[1,2,3,4,5],
				capitalize: 'papitalize',
				evenNumbers: [1, 2, 3, 4, 5, 6]
			}
		},
		computed:{
			filterlist(){
				let _list = this.list;
//				Vue.filter('change').add( this.list )
				return Vue.filter('change').add( this.list )
		    }
//			...mapState({count:'count'})
		},
		methods:{
			
		},
		mounted(){
//			console.log( Vue.filter('change').add )
		},
		watch:{
			/*data:{
		      deep:true,
		      handler(newVal){
		        //console.log(this.data,'正在监听')
		      }
		    }*/
		}
	}
	
	
	
	
</script>

<style lang="scss" scoped>
	#filter{
		text-align: center;
		padding: 10px;
		color: #fff;
		h3{
			margin-bottom: 5px;
			color:#000000;			
		}
		p{
			margin-top: 5px;
			background: #5495d8;
		}
	}
	
	ul{
		text-align: center;
		padding: 10px;
		li{
			list-style: none;
			padding: 10px;
			background: #aa009d;
			margin-bottom: 5px;
		}
	}
</style>