<template>
  <a-card title="代码 Code" class="card">
    <pre class="code code-html"><code>{{codeHtml}}</code></pre>
    <pre class="code code-css"><code>{{codeCss}}</code></pre>
  </a-card>
</template>

<script>
export default {
  name: "CodeCard",
  computed: {
    configs() {
      return this.$store.state.configs;
    },
    codeHtml() {
      let codes = `<div class="container">\n`;
      for (let i = 0; i < this.configs.items.length; i++) {
        codes += `    <div class="item item-${i + 1}"></div>\n`;
      }
      codes += `</div>`;
      return codes;
    },
    codeCss() {
      let codes = `.container {\n    display:flex;\n    background-color:tomato;\n`;
      Object.keys(this.configs.container).map(property => {
        codes += `    ${property}: ${this.configs.container[property]};\n`;
      });
      codes += `}\n`;
      codes += `.item {\n    background-color:royalblue;\n}\n`;
      this.configs.items.map((item, index) => {
        codes += `.item-${index + 1} {\n`;
        Object.keys(item).map(property => {
          codes += `    ${property}: ${item[property]};\n`;
        });
        codes += `}\n`;
      });
      return codes;
    }
  }
};
</script>

<style lang="less" scoped>
.code {
  position: relative;
  margin: 16px;
  border-width: 4px;
  border-style: solid;
  padding: 8px;
  line-height: 1.4em;
}
.code-html {
  border-color: rgb(255, 165, 0);
  background-color: rgba(255, 165, 0, 0.33);
}
.code-css {
  border-color: rgb(135, 206, 250);
  background-color: rgba(135, 206, 250, 0.33);
}
.code:after {
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
  padding: 4px 16px;
  font-weight: 800;
}
.code-html:after {
  content: "html";
  background-color: rgb(255, 165, 0);
}
.code-css:after {
  content: "css";
  background-color: rgb(135, 206, 250);
}
</style>