//导入createAPP函数
import { createApp } from 'vue'
//导入自定义组件
import App from './App.vue'

//创建vue实例
//createApp()接收一个vue组件
//vue组件包含三个部分
//第一部分组件模板：<tamplate></tamplate>
//2组件对象：<script>{}</script>
//3.css:<style></style>
//createApp函数接收一个vue组件对象
const myapp = createApp(App)
//把vue实例挂载到div容器
myapp.mount('#app')