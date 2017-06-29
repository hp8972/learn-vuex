import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
   state:{
   	count:5,
   	msg:'hello'
   },
   mutations:{
   	change(state){
   		state.msg="hi,welcome to  vuex"
   	},
   	//数据更改
   	addState(state,n){
   		state.count+=n
   	},
   	reduceState(state){
   		state.count--
   	}
   }
})

export default store