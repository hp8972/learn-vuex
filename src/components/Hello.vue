<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <button @click="add">+</button>
    <span>{{count}}</span>
    <button @click="reduce">-</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
       
    }
  },
  methods:{
  	add(){
  		this.$store.commit("addState")
  	},
  	reduce(){
  		this.$store.commit("reduceState")
  	}
  },
  computed:{
  	count:function(){
  		return this.$store.state.count
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
