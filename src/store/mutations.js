export default {
  changeContainerConfig(state, payload) {
    let { config } = payload;
    state.configs.container = config;
  },
  changeItemConfig(state, payload) {
    let { index, config } = payload;
    state.configs.items.splice(index, 1, config);
  },
  addItem(state) {
    state.configs.items.push({});
  },
  deleteItem(state, payload) {
    let { index } = payload;
    state.configs.items.splice(index, 1);
  },
  randomContainerConfig(state, payload) {
    let { config } = payload;
    state.configs.container = config;
  },
  copyItemConfig(state, payload) {
    let { config } = payload;
    state.configs.duplicate = config;
  },
  pasteItemConfig(state, payload) {
    let { index } = payload;
    state.configs.items.splice(index, 1, { ...state.configs.duplicate });
  }
};
