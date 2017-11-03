
const actions = {
	addGoods({commit},info){
		commit("addGoods",info)
	},
	addLists({commit},info){
		commit("addLists",info)
	},
	reduceGoods({commit},info){
		commit("reduceGoods",info)
	},
	getNum({commit}){
		commit("getNum")
	},
	shan({commit}){
		commit("remove")
	},
	allChecked({commit}){
		commit("allChecked")
	},
	check({commit}){
		commit("check")
	},	
}

export default actions