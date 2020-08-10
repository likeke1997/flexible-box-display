// 导入Vue
import Vue from "vue";

// 导入Antd
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
Vue.use(Antd);

// 导入store
import store from "@/store";

// 导入App
import App from "./App";

// 创建Vue实例
new Vue({
  render: (h) => h(App),
  store,
}).$mount("#app");
