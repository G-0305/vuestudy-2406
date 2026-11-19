<template>
<h3>v-on指令：绑定各种事件</h3>
  <button v-on:click="fn1"></button>
  <br>
  <h3>v-on简写--->@</h3>
  <button @click="fn1()">v-on简写@</button>
</template>

<script>
export default {
  name: "VOn",
  methods:{
    fn1:function(){
      alert('v-on指令')
    }
  }}

</script>


<style scoped>

</style>