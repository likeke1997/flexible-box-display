<template>
  <div class="footer">
    <div>
      <strong>{{commons.project.name}}</strong>
    </div>
    <div>
      <a-button icon="github" type="link" @click="jumpToAuthorWebsite">By {{commons.author.name}}</a-button>
    </div>
  </div>
</template>

<script>
import { commons } from "@/const";
export default {
  name: "FooterArea",
  data() {
    return {
      commons
    };
  },
  methods: {
    jumpToAuthorWebsite() {
      window.open(this.commons.project.website);
    }
  }
};
</script>

<style lang="less" scoped>
.footer {
  text-align: center;
}
</style>