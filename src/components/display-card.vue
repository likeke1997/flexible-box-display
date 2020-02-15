<template>
  <a-card title="展示 Display" class="card">
    <div id="display-container" class="container" :style="configs.container">
      <div
        v-for="(item, index) in configs.items"
        :key="index"
        :id="`display-item-${index+1}`"
        class="item"
        :style="item"
      >
        <a-popover trigger="click" autoAdjustOverflow destroyTooltipOnHide>
          <template slot="content">
            <ConfigCell isPopover type="item" :index="index" />
          </template>
          <div class="item-text">
            <a-button type="dashed" shape="circle" ghost size="small">{{index+1}}</a-button>
          </div>
        </a-popover>
      </div>
      <div class="author">
        <a-button
          :loading="like.isLoading"
          icon="like"
          type="dashed"
          ghost
          size="small"
          @click="addLikeCount"
        >LIKE（{{like.count}}）</a-button>
      </div>
    </div>
  </a-card>
</template>

<script>
import { getLikeCount, addLikeCount } from "@/services";
import ConfigCell from "@/components/config-cell";
export default {
  name: "DisplayCard",
  components: { ConfigCell },
  data() {
    return {
      like: {
        isLoading: true,
        count: 0
      }
    };
  },
  computed: {
    configs() {
      return this.$store.state.configs;
    }
  },
  created() {
    this.getLikeCount();
  },
  methods: {
    async getLikeCount() {
      try {
        let res = await getLikeCount();
        this.like.count = res.count;
        this.like.isLoading = false;
      } catch (err) {
        this.$message.error(err.message);
      }
    },
    async addLikeCount() {
      try {
        await addLikeCount();
        this.like.count += 1;
        this.$message.success("非常感谢您的喜欢~");
      } catch (err) {
        this.$message.error(err.message);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  position: relative;
  box-sizing: content-box;
  background-color: tomato;
  transition: 0.33s linear all;
  display: flex;
  .item {
    position: relative;
    box-sizing: border-box;
    border: 1px solid white;
    background-color: royalblue;
    transition: 0.33s linear all;
    &:hover {
      background-color: blueviolet;
    }
    .item-text {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      color: white;
    }
  }
  .author {
    position: absolute;
    bottom: 8px;
    right: 16px;
  }
}
</style>