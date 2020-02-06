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
            <a-button size="small" @click="randomContainerConfig" disabled>random config</a-button>
          </span>
          <span v-if="isItem">
            <a-button-group size="small" style="margin-right:12px;">
              <a-button @click="copyItemConfig">copy</a-button>
              <a-button @click="pasteItemConfig">paste</a-button>
            </a-button-group>
            <a-button icon="delete" shape="circle" size="small" type="danger" @click="deleteItem" />
          </span>
        </span>
      </span>
    </div>
    <a-divider />
    <!--grid-body-->
    <div class="body">
      <a-form-item v-for="property in properties" :key="property.label" v-bind="layout">
        <span slot="label">
          <a-tooltip :title="property.info">{{property.label}}</a-tooltip>
        </span>
        <span v-if="property.options===options.text">
          <a-input v-model="config[property.label]" size="small" class="body-text" />
        </span>
        <span v-else-if="property.options===options.number">
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
import { properties, layout } from "@/const";
export default {
  name: "ConfigCell",
  props: {
    isPopover: {
      type: Boolean,
      default: false
    },
    type: {
      required: true,
      type: String
    },
    index: {
      type: Number,
      default: -1
    }
  },
  data() {
    return {
      options: properties.options,
      layout,
      config: {}
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
    properties() {
      return this.isContainer ? properties.container : properties.item;
    },
    config_() {
      return this.isContainer
        ? this.$store.state.configs.container
        : this.$store.state.configs.items[this.index];
    },
    configs_() {
      return this.isContainer
        ? this.$store.state.configs.container
        : this.$store.state.configs.items;
    }
  },
  watch: {
    config: {
      deep: true,
      handler() {
        this.isContainer
          ? this.changeContainerConfig()
          : this.changeItemConfig();
      }
    },
    configs_: {
      deep: true,
      handler() {
        this.refreshConfig();
      }
    }
  },
  created() {
    this.isPopover ? this.refreshConfig() : this.initConfig();
  },
  methods: {
    initConfig() {
      this.properties.map(property => {
        this.$set(this.config, property.label, property.default);
      });
    },
    refreshConfig() {
      let config = JSON.stringify(this.config);
      let config_ = JSON.stringify(this.config_);
      if (config !== config_) {
        this.$set(this, "config", { ...this.config_ });
      }
    },
    changeContainerConfig() {
      this.$store.commit("changeContainerConfig", { config: this.config });
    },
    changeItemConfig() {
      this.$store.commit("changeItemConfig", {
        index: this.index,
        config: this.config
      });
    },
    randomContainerConfig() {
      this.$store.commit("randomContainerConfig", { index: this.index });
    },
    copyItemConfig() {
      this.$store.commit("copyItemConfig", { config: this.config });
    },
    pasteItemConfig() {
      this.$store.commit("pasteItemConfig", { index: this.index });
    },
    deleteItem() {
      this.$store.commit("deleteItem", { index: this.index });
    }
  }
};
</script>

<style lang="less" scoped>
.grid {
  min-width: 272px;
  max-width: 20%;
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