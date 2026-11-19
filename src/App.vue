<!--.vue:单文件组件，一个vue文件就是一个组件-->
<!--组件模板-->
<template>
  <h1>你好!{{msg}}</h1>
  <!--使用组件-->
  <!--驼峰命名-->
<!--  <MyFirst/>-->
<!--  短横线方式-->
  <my-first></my-first>
  <hr>
  <VText/>
  <hr>
  <VHtml/>
  <hr>
  <VOn/>
  <hr>
  <VShow/>
</template>
<!--组件对象-->
<script>
//导入外部组件
import MyFirst from "@/components/MyFirst.vue";
import VText from "@/components/VText.vue";
import VHtml from "@/components/VHtml.vue";
import VOn from "@/components/VOn.vue";
import VShow from "@/components/VShow.vue";
export default {
  //组件名称，如果不定义名称，组件名称默认为文件名称
  name: "App",
  //组件注册：局部组件注册，在当前组件注册外部组件
  components: {
    MyFirst: MyFirst,VText,VHtml,VOn,VShow
    //MyFirst: MyFirst=MyFirst,注册名和组件名相同
  },

  //数据属性
  data(){
    return {
      msg:'hello'
    }
  }
  //方法属性
  //......
}
</script>

<!--组件样式-->
<style scoped></style>
