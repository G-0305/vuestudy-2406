<template>
<h3>v-text指令：代替innerText</h3>
  <h3>学校名称：{{name}}</h3>
  <h3 v-text="name"></h3>
</template>

<script>
export default {
  name: "VText",
  data(){
    return{
      name:'沧州交通学院'
    }
  }
}
</script>


<style scoped>

</style>