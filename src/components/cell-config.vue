<template>
  <div class="grid" :is="isPopover?'div':'a-card-grid'">
    <!--grid-title-->
    <div class="title">
      <a :href="targetElement" class="title-link" :style="`color:${linkColor}`">
        <a-icon type="link" />
        {{linkText}}
      </a>
      <span class="title-extra">
        <span slot="extra">
          <span v-if="isContainer">
            <a-button size="small" disabled @click="handleRandomContainerConfig">random config</a-button>
          </span>
          <span v-if="isItem">
            <a-button-group size="small" style="margin-right:12px;">
              <a-button @click="handleCopyItemConfig">copy</a-button>
              <a-button @click="handlePasteItemConfig">paste</a-button>
            </a-button-group>
            <a-button
              type="danger"
              icon="delete"
              shape="circle"
              size="small"
              @click="handleDeleteItem"
            />
          </span>
        </span>
      </span>
    </div>
    <a-divider />
    <!--grid-body-->
    <div class="body">
      <a-form-item v-for="property in formProperties" :key="property.label" v-bind="LAYOUT">
        <span slot="label">
          <a-tooltip :title="property.info">{{property.label}}</a-tooltip>
        </span>
        <span v-if="property.options===OPTIONS.text">
          <a-input v-model="config[property.label]" size="small" class="body-text" />
        </span>
        <span v-else-if="property.options===OPTIONS.number">
          <a-input-number v-model="config[property.label]" size="small" class="body-number" />
        </span>
        <span v-else>
          <a-select v-model="config[property.label]" size="small" class="body-select">
            <a-select-option
              v-for="option in property.options"
              :key="option.value"
              :value="option.value"
            >
              <a-tooltip :title="option.info" placement="right">{{option.value}}</a-tooltip>
            </a-select-option>
          </a-select>
        </span>
      </a-form-item>
    </div>
  </div>
</template>

<script>
import { LAYOUT, OPTIONS, PROPERTIES } from "@/const";
export default {
  name: "CellConfig",
  props: {
    isPopover: {
      type: Boolean,
      default: false,
    },
    type: {
      required: true,
      type: String,
    },
    index: {
      type: Number,
      default: -1,
    },
  },
  data() {
    return {
      LAYOUT,
      OPTIONS,
      config: {},
    };
  },
  computed: {
    isContainer() {
      return this.type === "container";
    },
    isItem() {
      return this.type === "item";
    },
    linkColor() {
      return this.isContainer ? "tomato" : "royalblue";
    },
    linkText() {
      return this.isContainer ? "Container" : `Item - ${this.index + 1}`;
    },
    targetElement() {
      return this.isContainer
        ? "#display-container"
        : `#display-item-${this.index + 1}`;
    },
    formProperties() {
      return this.isContainer ? PROPERTIES.container : PROPERTIES.item;
    },
    stateConfig() {
      return this.isContainer
        ? this.$store.state.configs.container
        : this.$store.state.configs.items[this.index];
    },
    stateConfigs() {
      return this.isContainer
        ? this.$store.state.configs.container
        : this.$store.state.configs.items;
    },
  },
  watch: {
    config: {
      deep: true,
      handler() {
        this.isContainer
          ? this.changeContainerConfig()
          : this.changeItemConfig();
      },
    },
    stateConfigs: {
      deep: true,
      handler() {
        this.refreshConfig();
      },
    },
  },
  created() {
    this.isPopover ? this.refreshConfig() : this.initConfig();
  },
  methods: {
    initConfig() {
      for (let property of this.formProperties) {
        this.$set(this.config, property.label, property.default);
      }
    },
    refreshConfig() {
      const currentConfig = JSON.stringify(this.config),
        stateConfig = JSON.stringify(this.stateConfig);
      if (currentConfig !== stateConfig) {
        this.$set(this, "config", { ...this.stateConfig });
      }
    },
    changeContainerConfig() {
      this.$store.commit("changeContainerConfig", {
        config: this.config,
      });
    },
    changeItemConfig() {
      this.$store.commit("changeItemConfig", {
        index: this.index,
        config: this.config,
      });
    },
    // 待完成
    handleRandomContainerConfig() {
      /*
      this.$store.commit("randomContainerConfig", {
        index: this.index,
      });
      */
    },
    handleCopyItemConfig() {
      this.$store.commit("copyItemConfig", {
        config: this.config,
      });
    },
    handlePasteItemConfig() {
      this.$store.commit("pasteItemConfig", {
        index: this.index,
      });
    },
    handleDeleteItem() {
      this.$store.commit("deleteItem", {
        index: this.index,
      });
    },
  },
};
</script>

<style lang="less" scoped>
.grid {
  .title {
    display: flex;
    justify-content: space-between;
    font-weight: 800;
  }
  .body {
    .body-text,
    .body-number,
    .body-select {
      width: 100%;
    }
  }
}
</style>