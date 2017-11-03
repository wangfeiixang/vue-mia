
import Vue from 'vue'

const actions = {
	add({commit},message){
		Vue.prototype.$axios.get('01.json')
		.then((data)=>{
//      	console.log( data.data,message )
        	commit('add',data.data)
        })
		.catch((error)=>{
			console.log('数据发送失败')
		})
		
		
	},
	reduce({commit},message){
		commit('reduce',message)
	}
	
}

export default actions
