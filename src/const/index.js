export const APP = {
  name: "Flexible Box Display",
  websit: "http://works.kexiaolong.top/flexible-box-display/",
  github: "https://github.com/likeke1997/flexible-box-display/",
};

export const AUTHOR = {
  name: "likeke1997",
  website: "http://kexiaolong.top/#/",
  github: "https://github.com/likeke1997/",
};

export const LAYOUT = {
  labelCol: { span: 9 },
  wrapperCol: { span: 15 },
  colon: false,
};

export const OPTIONS = {
  text: Symbol("text"),
  number: Symbol("number"),
};

export const PROPERTIES = {
  container: [
    {
      label: "width",
      info: "容器的宽度",
      default: "100%",
      options: OPTIONS.text,
    },
    {
      label: "height",
      info: "容器的高度",
      default: "320px",
      options: OPTIONS.text,
    },
    {
      label: "flex-direction",
      info: "主轴的方向",
      default: "row",
      options: [
        {
          value: "row",
          info: "主轴方向从左向右→",
        },
        {
          value: "row-reverse",
          info: "主轴方向从右向左←",
        },
        {
          value: "column",
          info: "主轴方向从上向下↓",
        },
        {
          value: "column-reverse",
          info: "主轴方向从下向上↑",
        },
      ],
    },
    {
      label: "flex-wrap",
      info: "侧轴的方向，进而决定项目的换行方向",
      default: "nowrap",
      options: [
        {
          value: "nowrap",
          info: "侧轴无方向，相当于不换行",
        },
        {
          value: "wrap",
          info:
            "主轴方向水平时，侧轴方向从上向下↓，主轴方向竖直时，侧轴方向从左向右→，相当于顺序换行",
        },
        {
          value: "wrap-reverse",
          info:
            "主轴方向水平时，侧轴方向从下向上↑，主轴方向竖直时，侧轴方向从右向左←，相当于逆序换行",
        },
      ],
    },
    {
      label: "justify-content",
      info: "项目沿主轴方向的对齐方式",
      default: "flex-start",
      options: [
        {
          value: "flex-start",
          info: "主轴方向上，起点对齐",
        },
        {
          value: "flex-end",
          info: "主轴方向上，终点对齐",
        },
        {
          value: "center",
          info: "主轴方向上，居中对齐",
        },
        {
          value: "space-between",
          info: "主轴方向上，项目之间空隙相等",
        },
        {
          value: "space-around",
          info: "主轴方向上，项目两侧空隙相等",
        },
      ],
    },
    {
      label: "align-content",
      info: "项目沿侧轴方向的对齐方式，如果项目只有一行，则该属性无效",
      default: "stretch",
      options: [
        {
          value: "stretch",
          info: "如果项目height未设置或为auto，项目拉伸至占满侧轴",
        },
        {
          value: "flex-start",
          info: "侧轴方向上，起点对齐",
        },
        {
          value: "flex-end",
          info: "侧轴方向上，终点对齐",
        },
        {
          value: "center",
          info: "侧轴方向上，居中对齐",
        },
        {
          value: "space-between",
          info: "侧轴方向上，项目之间空隙相等",
        },
        {
          value: "space-around",
          info: "侧轴方向上，项目两侧空隙相等",
        },
      ],
    },
    {
      label: "align-items",
      info: "同一行项目沿侧轴方向的对齐方式，即项目在主轴方向上的垂直对齐方式",
      default: "stretch",
      options: [
        {
          value: "stretch",
          info: "如果项目height未设置或为auto，则拉伸至占满该行",
        },
        {
          value: "flex-start",
          info: "侧轴方向上，起点对齐",
        },
        {
          value: "flex-end",
          info: "侧轴方向上，终点对齐",
        },
        {
          value: "center",
          info: "侧轴方向上，居中对齐",
        },
        {
          value: "baseline",
          info: "侧轴方向上，基线对齐",
        },
      ],
    },
  ],
  item: [
    {
      label: "width",
      info: "项目的宽度",
      default: "256px",
      options: OPTIONS.text,
    },
    {
      label: "height",
      info: "项目的高度",
      default: "128px",
      options: OPTIONS.text,
    },
    {
      label: "order",
      info: "项目沿主轴方向的排列顺序，数值越小，排列越靠前",
      default: 1,
      options: OPTIONS.number,
    },
    {
      label: "align-self",
      info: "覆盖容器的align-items属性",
      default: "auto",
      options: [
        {
          value: "auto",
          info: "继承容器的align-items属性",
        },
        {
          value: "stretch",
          info: "如果项目height未设置或为auto，则拉伸至占满该行",
        },
        {
          value: "flex-start",
          info: "侧轴方向上，起点对齐",
        },
        {
          value: "flex-end",
          info: "侧轴方向上，终点对齐",
        },
        {
          value: "center",
          info: "侧轴方向上，居中对齐",
        },
        {
          value: "baseline",
          info: "侧轴方向上，基线对齐",
        },
      ],
    },
    {
      label: "flex-basis",
      info:
        "主轴方向水平时，覆盖项目的width属性，主轴方向垂直时，覆盖项目的height属性",
      default: "auto",
      options: OPTIONS.text,
    },
    {
      label: "flex-grow",
      info: "项目沿主轴方向的伸长系数",
      default: 0,
      options: OPTIONS.number,
    },
    {
      label: "flex-shrink",
      info: "项目沿主轴方向的缩短系数",
      default: 1,
      options: OPTIONS.number,
    },
  ],
};
