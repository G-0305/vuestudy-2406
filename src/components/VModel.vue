<template>
  <h3>v-model:实现表单和data定义的响应式数据 双向绑定</h3>
  <table border="0" width="400" align="center">
    <tr>
      <td>
        账号
      </td>
      <td><input type="text" v-model="user.loginId">
      </td>
    </tr>
    <tr>
      <td>
        密码:
      </td>
      <td><input type="text" v-model="user.password">
      </td>
    </tr>
    <tr>
      <td align="center" colspan="2">
        <button @click="login()">登录</button>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "VModel",
  data(){
    return {
      user:{
      loginId:'admin',
      password:'123456',
      }
    }
  },
  methods:{
    login(){
      console.log(this.user.loginId,this.user.password);
    }
  }
}
</script>



<style scoped>

</style>