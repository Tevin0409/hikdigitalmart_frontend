import { a as script$1$1 } from './index-BjfqnR8d.mjs';
import { B as BaseStyle } from './server.mjs';
import { openBlock, createElementBlock, mergeProps, renderSlot, createCommentVNode, createElementVNode } from 'vue';

var theme = function theme2(_ref) {
  var dt = _ref.dt;
  return "\n.p-card {\n    background: ".concat(dt("card.background"), ";\n    color: ").concat(dt("card.color"), ";\n    box-shadow: ").concat(dt("card.shadow"), ";\n    border-radius: ").concat(dt("card.border.radius"), ";\n    display: flex;\n    flex-direction: column;\n}\n\n.p-card-caption {\n    display: flex;\n    flex-direction: column;\n    gap: ").concat(dt("card.caption.gap"), ";\n}\n\n.p-card-body {\n    padding: ").concat(dt("card.body.padding"), ";\n    display: flex;\n    flex-direction: column;\n    gap: ").concat(dt("card.body.gap"), ";\n}\n\n.p-card-title {\n    font-size: ").concat(dt("card.title.font.size"), ";\n    font-weight: ").concat(dt("card.title.font.weight"), ";\n}\n\n.p-card-subtitle {\n    color: ").concat(dt("card.subtitle.color"), ";\n}\n");
};
var classes = {
  root: "p-card p-component",
  header: "p-card-header",
  body: "p-card-body",
  caption: "p-card-caption",
  title: "p-card-title",
  subtitle: "p-card-subtitle",
  content: "p-card-content",
  footer: "p-card-footer"
};
var CardStyle = BaseStyle.extend({
  name: "card",
  theme,
  classes
});
var script$1 = {
  name: "BaseCard",
  "extends": script$1$1,
  style: CardStyle,
  provide: function provide() {
    return {
      $pcCard: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "Card",
  "extends": script$1,
  inheritAttrs: false
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [_ctx.$slots.header ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    "class": _ctx.cx("header")
  }, _ctx.ptm("header")), [renderSlot(_ctx.$slots, "header")], 16)) : createCommentVNode("", true), createElementVNode("div", mergeProps({
    "class": _ctx.cx("body")
  }, _ctx.ptm("body")), [_ctx.$slots.title || _ctx.$slots.subtitle ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    "class": _ctx.cx("caption")
  }, _ctx.ptm("caption")), [_ctx.$slots.title ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    "class": _ctx.cx("title")
  }, _ctx.ptm("title")), [renderSlot(_ctx.$slots, "title")], 16)) : createCommentVNode("", true), _ctx.$slots.subtitle ? (openBlock(), createElementBlock("div", mergeProps({
    key: 1,
    "class": _ctx.cx("subtitle")
  }, _ctx.ptm("subtitle")), [renderSlot(_ctx.$slots, "subtitle")], 16)) : createCommentVNode("", true)], 16)) : createCommentVNode("", true), createElementVNode("div", mergeProps({
    "class": _ctx.cx("content")
  }, _ctx.ptm("content")), [renderSlot(_ctx.$slots, "content")], 16), _ctx.$slots.footer ? (openBlock(), createElementBlock("div", mergeProps({
    key: 1,
    "class": _ctx.cx("footer")
  }, _ctx.ptm("footer")), [renderSlot(_ctx.$slots, "footer")], 16)) : createCommentVNode("", true)], 16)], 16);
}
script.render = render;

export { script as s };
//# sourceMappingURL=index-DR30ug9d.mjs.map
