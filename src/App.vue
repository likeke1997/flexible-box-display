<template>
  <div id="app">
    <a-back-top />
    <AreaDisplay />
    <AreaConfig />
    <AreaCode />
    <AreaFooter />
  </div>
</template>

<script>
import AreaDisplay from "@/components/area-display";
import AreaConfig from "@/components/area-config";
import AreaCode from "@/components/area-code";
import AreaFooter from "@/components/area-footer";
export default {
  name: "App",
  components: {
    AreaDisplay,
    AreaConfig,
    AreaCode,
    AreaFooter,
  },
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
