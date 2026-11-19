<template>
<h3>v-html:innerHtml</h3>
  <h3 v-text="name"></h3>
</template>

<script>
export default {
  name: "VHtml",
  data(){
    return {
      name:"<a href='#'>沧州交通学院</a>",
    }
  }
}
</script>


<style scoped>

</style>