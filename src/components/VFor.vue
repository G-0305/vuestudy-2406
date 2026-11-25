<template>
  <h3>v-for:根据指定的数据生成列表解构</h3>
  <table border="1" width="600" align="center">
  <tr>
    <td>序号</td>
    <td>id</td>
    <td>名称</td>
  </tr>
  <tr v-for="(clazz,index) in list">
    <td>{{index+1}}</td>
    <td v-text="clazz.id"></td>
    <td v-html="clazz.name"></td>
  </tr>
  </table>
</template>

<script>
export default {
  name: "VFor",
  data(){
    return {
      list:[
        {
          id: 2405,
          name:'软件2405'
        },
        {
          id: 2406,
          name:'软件2406'
        },
        {
          id: 2407,
          name:'软件2407'
        },
        {
          id: 2408,
          name:'软件2408'
        }
      ]
    }
  }
}
</script>



<style scoped>

</style>