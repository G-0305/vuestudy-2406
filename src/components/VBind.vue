<template>
  <h3>v-bind:动态绑定HTML属性值</h3>
  <img
    v-bind:src="imgUrl"
    v-bind:title="imgTitle"
    width="600" height="80"/>
  <h3>v-bind指令简写：使用冒号（:）代替v-bind</h3>
  <img
    :src="imgUrl"
    :title="imgTitle"
    width="600" height="80"/>
  <h3>v-bind绑定布尔属性：isShow为true时才渲染disabled</h3>
  <button v-bind:disabled="isShow">提交</button>
</template>

<script>
export default {
  name: "VBind",
  data(){
    return {
      imgUrl:'https://computer.czjtu.edu.cn/images/jsjlogo.png',
      imgTitle:'沧州交通学院',
      isShow:true
    }
  }
}
</script>



<style scoped>

</style>
