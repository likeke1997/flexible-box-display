export default {
  // 改变容器配置
  changeContainerConfig(state, payload) {
    let { config } = payload;
    state.configs.container = config;
  },
  // 添加项目
  addItem(state) {
    state.configs.items.push({});
  },
  // 删除项目
  deleteItem(state, payload) {
    let { index } = payload;
    state.configs.items.splice(index, 1);
  },
  // 改变项目配置
  changeItemConfig(state, payload) {
    let { index, config } = payload;
    state.configs.items.splice(index, 1, config);
  },
  // 复制项目配置
  copyItemConfig(state, payload) {
    let { config } = payload;
    state.configs.duplicate = config;
  },
  // 粘贴项目配置
  pasteItemConfig(state, payload) {
    let { index } = payload;
    state.configs.items.splice(index, 1, { ...state.configs.duplicate });
  },
};
