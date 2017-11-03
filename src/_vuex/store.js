
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import actions from './action'

//引用mint
import { MessageBox } from 'mint-ui';



const state = {
	count:1,
	user:null
}

const mutations = {
	add(state,obj){
//		console.log(state,obj)
		state.user = obj.name
		state.count++;
		console.log( state.count,state.user )
	},
	reduce(state,message){
//		console.log(state,message)
		if ( state.count<=1 ) {
			MessageBox.confirm('确定执行此操作?').then(action => {
				state.count = 0;
			},action => {
				
			})
		} else{
			state.count--
		}
	}
}

const store = new Vuex.Store({
	state,
	mutations,
	actions
})

export default store
