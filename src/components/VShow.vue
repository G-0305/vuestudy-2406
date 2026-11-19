<template>
<h3>v-show:通过一个条件表达式的真假，控制元素的显示或者隐藏</h3>
  <h3>实现原理：设置display的值</h3>
  <button @click="fn1()">显示或者隐藏</button>
  <h1 v-show="show">沧州交通学院</h1>
</template>

<script>
export default {
  name: "VShow",
  data(){
    return {
      show:true
    }
  },
  methods:{
    fn1:function(){
      this.show=!this.show
    }
  }
}
</script>

<style scoped>

</style>