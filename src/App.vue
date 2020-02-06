<template>
  <div id="app">
    <a-back-top />
    <DisplayCard />
    <ConfigCard />
    <CodeCard />
    <FooterArea />
  </div>
</template>

<script>
import DisplayCard from "@/components/DisplayCard";
import ConfigCard from "@/components/ConfigCard";
import CodeCard from "@/components/CodeCard";
import FooterArea from "@/components/FooterArea";
export default {
  name: "App",
  components: { DisplayCard, ConfigCard, CodeCard, FooterArea }
};
</script>

<style lang="less">
* {
  font-family: Arial, Helvetica, sans-serif;
}
body {
  background-color: rgb(236, 236, 236) !important;
}
#app {
  margin: 24px;
  .card {
    margin-bottom: 24px;
  }
}
.ant-card-wider-padding .ant-card-body,
.ant-card-body {
  padding: 0px !important;
}
.ant-card-grid {
  padding: 16px !important;
}
.ant-divider-horizontal {
  margin: 12px 0 !important;
}
.ant-form-item {
  margin-bottom: 0px !important;
}
.ant-form-item-label,
.ant-form-item-control {
  line-height: 2em !important;
}
</style>
