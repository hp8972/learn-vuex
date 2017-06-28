import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
   state:{
   	count:5
   },
   mutations:{
   	addState:function(state){
   		state.count++
   	},
   	reduceState:function(state){
   		state.count--
   	}
   }
})

export default store