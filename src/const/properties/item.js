import options from "./options";

const Width = {
  label: "width",
  default: "256px",
  info: "项目的宽度",
  options: options.text
};
const Height = {
  label: "height",
  default: "128px",
  info: "项目的高度",
  options: options.text
};
const Order = {
  label: "order",
  default: 0,
  info: "该项目的排列顺序，数值越小，排列越靠前",
  options: options.number
};
const FlexGrow = {
  label: "flex-grow",
  default: 0,
  info: "该项目的放大比例权重",
  options: options.number
};
const FlexShrink = {
  label: "flex-shrink",
  default: 0,
  info: "该项目的缩小比例权重",
  options: options.number
};
const FlexBasis = {
  label: "flex-basis",
  default: "auto",
  info: "该项目占据的主轴空间",
  options: options.text
};
const AlignSelf = {
  label: "align-self",
  default: "stretch",
  info: "该项目在主轴上的垂直对齐方式，会覆盖align-items属性",
  options: [
    {
      value: "auto",
      info: "继承容器的align-items属性"
    },
    {
      value: "flex-start",
      info: "顶端对齐"
    },
    {
      value: "flex-end",
      info: "底端对齐"
    },
    {
      value: "center",
      info: "居中对齐"
    },
    {
      value: "baseline",
      info: "基线对齐"
    },
    {
      value: "stretch",
      info: "拉伸至同一长度"
    }
  ]
};

export default [
  Width,
  Height,
  Order,
  FlexGrow,
  FlexShrink,
  FlexBasis,
  AlignSelf
];
