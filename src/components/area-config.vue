<template>
  <a-card title="配置 | Configs" class="card">
    <div class="flex-container">
      <CellConfig class="flex-item" type="container" />
      <CellConfig
        v-for="(item, index) in configs.items"
        :key="index"
        type="item"
        :index="index"
        class="flex-item"
      />
    </div>
    <a-button icon="plus" type="dashed" size="large" block @click="handleAddItem">Add A New Item</a-button>
  </a-card>
</template>

<script>
import CellConfig from "@/components/cell-config";
export default {
  name: "AreaConfig",
  components: { CellConfig },
  computed: {
    configs() {
      return this.$store.state.configs;
    },
  },
  methods: {
    handleAddItem() {
      this.$store.commit("addItem");
    },
  },
};
</script>

<style lang="less" scoped>
.flex-container {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  .flex-item {
    width: 240px;
    flex: 1 1 auto;
  }
}
</style>