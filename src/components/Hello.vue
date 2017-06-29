<template>
  <div class="hello">
  	<button @click="change">
  		<h1>{{ msg }}</h1> 		
  	</button>
    
    <h2>Essential Links</h2>
    <button @click="add">+</button>
    <span>{{count}}</span>
    <button @click="reduce">-</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  methods:{
  	change(){
  		this.$store.commit('change')
  	},
  	add(){
  		this.$store.commit("addState",10)
  	},
  	reduce(){
  		this.$store.commit("reduceState")
  	}
  },
  computed:{
  	count:function(){
  		return this.$store.state.count
  	},
  	msg:function(){
  		return this.$store.state.msg
  	}
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}


</style>
