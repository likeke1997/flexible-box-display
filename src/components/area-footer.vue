<template>
  <div class="footer">
    <div>
      <strong>{{APP.name}}</strong>
    </div>
    <div>
      <a-button type="link" @click="handleToAuthorWebsite">By {{AUTHOR.name}}</a-button>
    </div>
  </div>
</template>

<script>
import { APP, AUTHOR } from "@/const";
export default {
  name: "AreaFooter",
  data() {
    return {
      APP,
      AUTHOR,
    };
  },
  methods: {
    handleToAuthorWebsite() {
      window.open(this.AUTHOR.website);
    },
  },
};
</script>

<style lang="less" scoped>
.footer {
  text-align: center;
}
</style>