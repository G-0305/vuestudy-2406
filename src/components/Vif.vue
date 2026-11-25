<template>
  <h3>v-if:通过一个条件表达式的真假，控制元素的创建或者销毁</h3>
  <h3>实现原理：条件为假时元素从DOM中移除</h3>
  <button @click="fn1()">显示或者隐藏</button>
  <h1 v-if="show">沧州交通学院</h1>
  <hr>
  <h3>v-if / v-else-if / v-else:多条件判断，满足条件的元素才会创建</h3>
  <button @click="fn2()">切换成绩</button>
  <h1 v-if="score >= 90">优秀</h1>
  <h1 v-else-if="score >= 60">及格</h1>
  <h1 v-else>不及格</h1>
</template>

<script>
export default {
  name: "Vif",
  data(){
    return {
      show:true,
      score:95
    }
  },
  methods:{
    fn1:function(){
      this.show=!this.show
    },
    fn2:function(){
      if(this.score === 95){
        this.score = 75
      }else if(this.score === 75){
        this.score = 50
      }else{
        this.score = 95
      }
    }
  }
}
</script>



<style scoped>

</style>
