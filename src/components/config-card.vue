<template>
  <a-card title="配置 Configs" class="card">
    <ConfigCell type="container" />
    <ConfigCell v-for="(item, index) in configs.items" :key="index" type="item" :index="index" />
    <a-button icon="plus" type="dashed" size="large" block @click="handleAddItem">Add New Item</a-button>
  </a-card>
</template>

<script>
import ConfigCell from "@/components/config-cell";
export default {
  name: "ConfigCard",
  components: { ConfigCell },
  computed: {
    configs() {
      return this.$store.state.configs;
    }
  },
  methods: {
    handleAddItem() {
      this.$store.commit("addItem");
    }
  }
};
</script>