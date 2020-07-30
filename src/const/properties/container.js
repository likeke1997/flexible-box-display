import options from "./options";

const Width = {
  label: "width",
  default: "100%",
  info: "容器的宽度",
  options: options.text,
};
const Height = {
  label: "height",
  default: "320px",
  info: "容器的高度",
  options: options.text,
};
const FlexDirection = {
  label: "flex-direction",
  default: "row",
  info: "主轴的方向",
  options: [
    {
      value: "row",
      info: "水平方向，起点在左端",
    },
    {
      value: "row-reverse",
      info: "水平方向，起点在右端",
    },
    {
      value: "column",
      info: "垂直方向，起点在上沿",
    },
    {
      value: "column-reverse",
      info: "垂直方向，起点在下沿",
    },
  ],
};
const FlexWrap = {
  label: "flex-wrap",
  default: "nowrap",
  info: "项目在主轴上的换行方式",
  options: [
    {
      value: "nowrap",
      info: "不换行",
    },
    {
      value: "wrap",
      info: "正序换行",
    },
    {
      value: "wrap-reverse",
      info: "倒序换行",
    },
  ],
};
const JustifyContent = {
  label: "justify-content",
  default: "flex-start",
  info: "项目在主轴上的水平对齐方式",
  options: [
    {
      value: "flex-start",
      info: "起点对齐",
    },
    {
      value: "flex-end",
      info: "终点对齐",
    },
    {
      value: "center",
      info: "居中对齐",
    },
    {
      value: "space-between",
      info: "两端对齐，项目之间的间隔相等",
    },
    {
      value: "space-around",
      info: "项目两侧的空隙相等",
    },
  ],
};
const AlignItems = {
  label: "align-items",
  default: "stretch",
  info: "项目在主轴上的垂直对齐方式",
  options: [
    {
      value: "flex-start",
      info: "顶端对齐",
    },
    {
      value: "flex-end",
      info: "底端对齐",
    },
    {
      value: "center",
      info: "居中对齐",
    },
    {
      value: "baseline",
      info: "基线对齐",
    },
    {
      value: "stretch",
      info: "拉伸至同一长度",
    },
  ],
};
const AlignContent = {
  label: "align-content",
  default: "stretch",
  info: "项目在交叉轴上的水平对齐方式",
  options: [
    {
      value: "flex-start",
      info: "起点对齐",
    },
    {
      value: "flex-end",
      info: "终点对齐",
    },
    {
      value: "center",
      info: "居中对齐",
    },
    {
      value: "space-between",
      info: "两端对齐，项目之间的间隔相等",
    },
    {
      value: "space-around",
      info: "项目两侧的空隙相等",
    },
    {
      value: "stretch",
      info: "拉伸至同一长度",
    },
  ],
};

export default [
  Width,
  Height,
  FlexDirection,
  FlexWrap,
  JustifyContent,
  AlignItems,
  AlignContent,
];
