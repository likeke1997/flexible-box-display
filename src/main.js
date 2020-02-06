import Vue from "vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
Vue.use(Antd);

import App from "./App";
import store from "@/store";

new Vue({
  render: h => h(App),
  store
}).$mount("#app");
