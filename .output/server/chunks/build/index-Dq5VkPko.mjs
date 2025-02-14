import { focus, isAndroid, getFirstFocusableElement, getLastFocusableElement, addStyle, relativePosition, getOuterWidth, absolutePosition, isTouchDevice, isVisible, getFocusableElements, findSingle } from '@primeuix/utils/dom';
import { resolveFieldData, isPrintableCharacter, isNotEmpty, equals, findLastIndex } from '@primeuix/utils/object';
import { ZIndex } from '@primeuix/utils/zindex';
import { B as BaseStyle, F as FilterService } from './server.mjs';
import { U as UniqueComponentId, O as OverlayEventBus, C as ConnectedOverlayScrollHandler, s as script$2$1, a as script$8 } from './index-BZ-8HqfV.mjs';
import { s as script$7 } from './index-BBqC3hNY.mjs';
import { openBlock, createElementBlock, mergeProps, createElementVNode, renderSlot, resolveComponent, resolveDirective, createTextVNode, toDisplayString, normalizeClass, createBlock, resolveDynamicComponent, createCommentVNode, createVNode, withCtx, Transition, normalizeProps, createSlots, Fragment, renderList, withDirectives } from 'vue';
import { a as script$a, s as script$1$4 } from './index-DSnb32Yv.mjs';
import { b as script$b, s as script$1$5 } from './index-XLr1qd4A.mjs';
import { b as script$3$1 } from './index-CHf7NZjU.mjs';
import { s as script$c } from './index-CBz_SNTb.mjs';
import { s as script$9 } from './index-zZrFrjQS.mjs';
import { R as Ripple } from './index-Dvqyfh34.mjs';

var script$6 = {
  name: "BlankIcon",
  "extends": script$7
};
function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _cache[0] || (_cache[0] = [createElementVNode("rect", {
    width: "1",
    height: "1",
    fill: "currentColor",
    "fill-opacity": "0"
  }, null, -1)]), 16);
}
script$6.render = render$5;
var script$5 = {
  name: "SearchIcon",
  "extends": script$7
};
function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _cache[0] || (_cache[0] = [createElementVNode("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M2.67602 11.0265C3.6661 11.688 4.83011 12.0411 6.02086 12.0411C6.81149 12.0411 7.59438 11.8854 8.32483 11.5828C8.87005 11.357 9.37808 11.0526 9.83317 10.6803L12.9769 13.8241C13.0323 13.8801 13.0983 13.9245 13.171 13.9548C13.2438 13.985 13.3219 14.0003 13.4007 14C13.4795 14.0003 13.5575 13.985 13.6303 13.9548C13.7031 13.9245 13.7691 13.8801 13.8244 13.8241C13.9367 13.7116 13.9998 13.5592 13.9998 13.4003C13.9998 13.2414 13.9367 13.089 13.8244 12.9765L10.6807 9.8328C11.053 9.37773 11.3573 8.86972 11.5831 8.32452C11.8857 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0268 2.67572C10.3652 1.68564 9.42494 0.913972 8.32483 0.45829C7.22472 0.00260857 6.01418 -0.116618 4.84631 0.115686C3.67844 0.34799 2.60568 0.921393 1.76369 1.76338C0.921698 2.60537 0.348296 3.67813 0.115991 4.84601C-0.116313 6.01388 0.00291375 7.22441 0.458595 8.32452C0.914277 9.42464 1.68595 10.3649 2.67602 11.0265ZM3.35565 2.0158C4.14456 1.48867 5.07206 1.20731 6.02086 1.20731C7.29317 1.20731 8.51338 1.71274 9.41304 2.6124C10.3127 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5368 7.88088 10.0096 8.66978C9.48251 9.45868 8.73328 10.0736 7.85669 10.4367C6.98011 10.7997 6.01554 10.8947 5.08496 10.7096C4.15439 10.5245 3.2996 10.0676 2.62869 9.39674C1.95778 8.72583 1.50089 7.87104 1.31579 6.94046C1.13068 6.00989 1.22568 5.04532 1.58878 4.16874C1.95187 3.29215 2.56675 2.54292 3.35565 2.0158Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
script$5.render = render$4;
var theme$2 = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-iconfield {\n    position: relative;\n}\n\n.p-inputicon {\n    position: absolute;\n    top: 50%;\n    margin-top: calc(-1 * (".concat(dt("icon.size"), " / 2));\n    color: ").concat(dt("iconfield.icon.color"), ";\n    line-height: 1;\n}\n\n.p-iconfield .p-inputicon:first-child {\n    inset-inline-start: ").concat(dt("form.field.padding.x"), ";\n}\n\n.p-iconfield .p-inputicon:last-child {\n    inset-inline-end: ").concat(dt("form.field.padding.x"), ";\n}\n\n.p-iconfield .p-inputtext:not(:first-child) {\n    padding-inline-start: calc((").concat(dt("form.field.padding.x"), " * 2) + ").concat(dt("icon.size"), ");\n}\n\n.p-iconfield .p-inputtext:not(:last-child) {\n    padding-inline-end: calc((").concat(dt("form.field.padding.x"), " * 2) + ").concat(dt("icon.size"), ");\n}\n\n.p-iconfield:has(.p-inputfield-sm) .p-inputicon {\n    font-size: ").concat(dt("form.field.sm.font.size"), ";\n    width: ").concat(dt("form.field.sm.font.size"), ";\n    height: ").concat(dt("form.field.sm.font.size"), ";\n    margin-top: calc(-1 * (").concat(dt("form.field.sm.font.size"), " / 2));\n}\n\n.p-iconfield:has(.p-inputfield-lg) .p-inputicon {\n    font-size: ").concat(dt("form.field.lg.font.size"), ";\n    width: ").concat(dt("form.field.lg.font.size"), ";\n    height: ").concat(dt("form.field.lg.font.size"), ";\n    margin-top: calc(-1 * (").concat(dt("form.field.lg.font.size"), " / 2));\n}\n");
};
var classes$3 = {
  root: "p-iconfield"
};
var IconFieldStyle = BaseStyle.extend({
  name: "iconfield",
  theme: theme$2,
  classes: classes$3
});
var script$1$3 = {
  name: "BaseIconField",
  "extends": script$c,
  style: IconFieldStyle,
  provide: function provide() {
    return {
      $pcIconField: this,
      $parentInstance: this
    };
  }
};
var script$4 = {
  name: "IconField",
  "extends": script$1$3,
  inheritAttrs: false
};
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "default")], 16);
}
script$4.render = render$3;
var classes$2 = {
  root: "p-inputicon"
};
var InputIconStyle = BaseStyle.extend({
  name: "inputicon",
  classes: classes$2
});
var script$1$2 = {
  name: "BaseInputIcon",
  "extends": script$c,
  style: InputIconStyle,
  props: {
    "class": null
  },
  provide: function provide2() {
    return {
      $pcInputIcon: this,
      $parentInstance: this
    };
  }
};
var script$3 = {
  name: "InputIcon",
  "extends": script$1$2,
  inheritAttrs: false,
  computed: {
    containerClass: function containerClass() {
      return [this.cx("root"), this["class"]];
    }
  }
};
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", mergeProps({
    "class": $options.containerClass
  }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "default")], 16);
}
script$3.render = render$2;
var theme$1 = function theme2(_ref) {
  var dt = _ref.dt;
  return "\n.p-select {\n    display: inline-flex;\n    cursor: pointer;\n    position: relative;\n    user-select: none;\n    background: ".concat(dt("select.background"), ";\n    border: 1px solid ").concat(dt("select.border.color"), ";\n    transition: background ").concat(dt("select.transition.duration"), ", color ").concat(dt("select.transition.duration"), ", border-color ").concat(dt("select.transition.duration"), ",\n        outline-color ").concat(dt("select.transition.duration"), ", box-shadow ").concat(dt("select.transition.duration"), ";\n    border-radius: ").concat(dt("select.border.radius"), ";\n    outline-color: transparent;\n    box-shadow: ").concat(dt("select.shadow"), ";\n}\n\n.p-select:not(.p-disabled):hover {\n    border-color: ").concat(dt("select.hover.border.color"), ";\n}\n\n.p-select:not(.p-disabled).p-focus {\n    border-color: ").concat(dt("select.focus.border.color"), ";\n    box-shadow: ").concat(dt("select.focus.ring.shadow"), ";\n    outline: ").concat(dt("select.focus.ring.width"), " ").concat(dt("select.focus.ring.style"), " ").concat(dt("select.focus.ring.color"), ";\n    outline-offset: ").concat(dt("select.focus.ring.offset"), ";\n}\n\n.p-select.p-variant-filled {\n    background: ").concat(dt("select.filled.background"), ";\n}\n\n.p-select.p-variant-filled:not(.p-disabled):hover {\n    background: ").concat(dt("select.filled.hover.background"), ";\n}\n\n.p-select.p-variant-filled:not(.p-disabled).p-focus {\n    background: ").concat(dt("select.filled.focus.background"), ";\n}\n\n.p-select.p-invalid {\n    border-color: ").concat(dt("select.invalid.border.color"), ";\n}\n\n.p-select.p-disabled {\n    opacity: 1;\n    background: ").concat(dt("select.disabled.background"), ";\n}\n\n.p-select-clear-icon {\n    position: absolute;\n    top: 50%;\n    margin-top: -0.5rem;\n    color: ").concat(dt("select.clear.icon.color"), ";\n    inset-inline-end: ").concat(dt("select.dropdown.width"), ";\n}\n\n.p-select-dropdown {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 0;\n    background: transparent;\n    color: ").concat(dt("select.dropdown.color"), ";\n    width: ").concat(dt("select.dropdown.width"), ";\n    border-start-end-radius: ").concat(dt("select.border.radius"), ";\n    border-end-end-radius: ").concat(dt("select.border.radius"), ";\n}\n\n.p-select-label {\n    display: block;\n    white-space: nowrap;\n    overflow: hidden;\n    flex: 1 1 auto;\n    width: 1%;\n    padding: ").concat(dt("select.padding.y"), " ").concat(dt("select.padding.x"), ";\n    text-overflow: ellipsis;\n    cursor: pointer;\n    color: ").concat(dt("select.color"), ";\n    background: transparent;\n    border: 0 none;\n    outline: 0 none;\n}\n\n.p-select-label.p-placeholder {\n    color: ").concat(dt("select.placeholder.color"), ";\n}\n\n.p-select.p-invalid .p-select-label.p-placeholder {\n    color: ").concat(dt("select.invalid.placeholder.color"), ";\n}\n\n.p-select:has(.p-select-clear-icon) .p-select-label {\n    padding-inline-end: calc(1rem + ").concat(dt("select.padding.x"), ");\n}\n\n.p-select.p-disabled .p-select-label {\n    color: ").concat(dt("select.disabled.color"), ";\n}\n\n.p-select-label-empty {\n    overflow: hidden;\n    opacity: 0;\n}\n\ninput.p-select-label {\n    cursor: default;\n}\n\n.p-select .p-select-overlay {\n    min-width: 100%;\n}\n\n.p-select-overlay {\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: ").concat(dt("select.overlay.background"), ";\n    color: ").concat(dt("select.overlay.color"), ";\n    border: 1px solid ").concat(dt("select.overlay.border.color"), ";\n    border-radius: ").concat(dt("select.overlay.border.radius"), ";\n    box-shadow: ").concat(dt("select.overlay.shadow"), ";\n}\n\n.p-select-header {\n    padding: ").concat(dt("select.list.header.padding"), ";\n}\n\n.p-select-filter {\n    width: 100%;\n}\n\n.p-select-list-container {\n    overflow: auto;\n}\n\n.p-select-option-group {\n    cursor: auto;\n    margin: 0;\n    padding: ").concat(dt("select.option.group.padding"), ";\n    background: ").concat(dt("select.option.group.background"), ";\n    color: ").concat(dt("select.option.group.color"), ";\n    font-weight: ").concat(dt("select.option.group.font.weight"), ";\n}\n\n.p-select-list {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n    padding: ").concat(dt("select.list.padding"), ";\n    gap: ").concat(dt("select.list.gap"), ";\n    display: flex;\n    flex-direction: column;\n}\n\n.p-select-option {\n    cursor: pointer;\n    font-weight: normal;\n    white-space: nowrap;\n    position: relative;\n    overflow: hidden;\n    display: flex;\n    align-items: center;\n    padding: ").concat(dt("select.option.padding"), ";\n    border: 0 none;\n    color: ").concat(dt("select.option.color"), ";\n    background: transparent;\n    transition: background ").concat(dt("select.transition.duration"), ", color ").concat(dt("select.transition.duration"), ", border-color ").concat(dt("select.transition.duration"), ",\n            box-shadow ").concat(dt("select.transition.duration"), ", outline-color ").concat(dt("select.transition.duration"), ";\n    border-radius: ").concat(dt("select.option.border.radius"), ";\n}\n\n.p-select-option:not(.p-select-option-selected):not(.p-disabled).p-focus {\n    background: ").concat(dt("select.option.focus.background"), ";\n    color: ").concat(dt("select.option.focus.color"), ";\n}\n\n.p-select-option.p-select-option-selected {\n    background: ").concat(dt("select.option.selected.background"), ";\n    color: ").concat(dt("select.option.selected.color"), ";\n}\n\n.p-select-option.p-select-option-selected.p-focus {\n    background: ").concat(dt("select.option.selected.focus.background"), ";\n    color: ").concat(dt("select.option.selected.focus.color"), ";\n}\n\n.p-select-option-check-icon {\n    position: relative;\n    margin-inline-start: ").concat(dt("select.checkmark.gutter.start"), ";\n    margin-inline-end: ").concat(dt("select.checkmark.gutter.end"), ";\n    color: ").concat(dt("select.checkmark.color"), ";\n}\n\n.p-select-empty-message {\n    padding: ").concat(dt("select.empty.message.padding"), ";\n}\n\n.p-select-fluid {\n    display: flex;\n    width: 100%;\n}\n\n.p-select-sm .p-select-label {\n    font-size: ").concat(dt("select.sm.font.size"), ";\n    padding-block: ").concat(dt("select.sm.padding.y"), ";\n    padding-inline: ").concat(dt("select.sm.padding.x"), ";\n}\n\n.p-select-sm .p-select-dropdown .p-icon {\n    font-size: ").concat(dt("select.sm.font.size"), ";\n    width: ").concat(dt("select.sm.font.size"), ";\n    height: ").concat(dt("select.sm.font.size"), ";\n}\n\n.p-select-lg .p-select-label {\n    font-size: ").concat(dt("select.lg.font.size"), ";\n    padding-block: ").concat(dt("select.lg.padding.y"), ";\n    padding-inline: ").concat(dt("select.lg.padding.x"), ";\n}\n\n.p-select-lg .p-select-dropdown .p-icon {\n    font-size: ").concat(dt("select.lg.font.size"), ";\n    width: ").concat(dt("select.lg.font.size"), ";\n    height: ").concat(dt("select.lg.font.size"), ";\n}\n");
};
var classes$1 = {
  root: function root(_ref2) {
    var instance = _ref2.instance, props = _ref2.props, state = _ref2.state;
    return ["p-select p-component p-inputwrapper", {
      "p-disabled": props.disabled,
      "p-invalid": instance.$invalid,
      "p-variant-filled": instance.$variant === "filled",
      "p-focus": state.focused,
      "p-inputwrapper-filled": instance.$filled,
      "p-inputwrapper-focus": state.focused || state.overlayVisible,
      "p-select-open": state.overlayVisible,
      "p-select-fluid": instance.$fluid,
      "p-select-sm p-inputfield-sm": props.size === "small",
      "p-select-lg p-inputfield-lg": props.size === "large"
    }];
  },
  label: function label(_ref3) {
    var instance = _ref3.instance, props = _ref3.props;
    return ["p-select-label", {
      "p-placeholder": !props.editable && instance.label === props.placeholder,
      "p-select-label-empty": !props.editable && !instance.$slots["value"] && (instance.label === "p-emptylabel" || instance.label.length === 0)
    }];
  },
  clearIcon: "p-select-clear-icon",
  dropdown: "p-select-dropdown",
  loadingicon: "p-select-loading-icon",
  dropdownIcon: "p-select-dropdown-icon",
  overlay: "p-select-overlay p-component",
  header: "p-select-header",
  pcFilter: "p-select-filter",
  listContainer: "p-select-list-container",
  list: "p-select-list",
  optionGroup: "p-select-option-group",
  optionGroupLabel: "p-select-option-group-label",
  option: function option(_ref4) {
    var instance = _ref4.instance, props = _ref4.props, state = _ref4.state, _option = _ref4.option, focusedOption = _ref4.focusedOption;
    return ["p-select-option", {
      "p-select-option-selected": instance.isSelected(_option) && props.highlightOnSelect,
      "p-focus": state.focusedOptionIndex === focusedOption,
      "p-disabled": instance.isOptionDisabled(_option)
    }];
  },
  optionLabel: "p-select-option-label",
  optionCheckIcon: "p-select-option-check-icon",
  optionBlankIcon: "p-select-option-blank-icon",
  emptyMessage: "p-select-empty-message"
};
var SelectStyle = BaseStyle.extend({
  name: "select",
  theme: theme$1,
  classes: classes$1
});
var script$1$1 = {
  name: "BaseSelect",
  "extends": script$1$5,
  props: {
    options: Array,
    optionLabel: [String, Function],
    optionValue: [String, Function],
    optionDisabled: [String, Function],
    optionGroupLabel: [String, Function],
    optionGroupChildren: [String, Function],
    scrollHeight: {
      type: String,
      "default": "14rem"
    },
    filter: Boolean,
    filterPlaceholder: String,
    filterLocale: String,
    filterMatchMode: {
      type: String,
      "default": "contains"
    },
    filterFields: {
      type: Array,
      "default": null
    },
    editable: Boolean,
    placeholder: {
      type: String,
      "default": null
    },
    dataKey: null,
    showClear: {
      type: Boolean,
      "default": false
    },
    inputId: {
      type: String,
      "default": null
    },
    inputClass: {
      type: [String, Object],
      "default": null
    },
    inputStyle: {
      type: Object,
      "default": null
    },
    labelId: {
      type: String,
      "default": null
    },
    labelClass: {
      type: [String, Object],
      "default": null
    },
    labelStyle: {
      type: Object,
      "default": null
    },
    panelClass: {
      type: [String, Object],
      "default": null
    },
    overlayStyle: {
      type: Object,
      "default": null
    },
    overlayClass: {
      type: [String, Object],
      "default": null
    },
    panelStyle: {
      type: Object,
      "default": null
    },
    appendTo: {
      type: [String, Object],
      "default": "body"
    },
    loading: {
      type: Boolean,
      "default": false
    },
    clearIcon: {
      type: String,
      "default": void 0
    },
    dropdownIcon: {
      type: String,
      "default": void 0
    },
    filterIcon: {
      type: String,
      "default": void 0
    },
    loadingIcon: {
      type: String,
      "default": void 0
    },
    resetFilterOnHide: {
      type: Boolean,
      "default": false
    },
    resetFilterOnClear: {
      type: Boolean,
      "default": false
    },
    virtualScrollerOptions: {
      type: Object,
      "default": null
    },
    autoOptionFocus: {
      type: Boolean,
      "default": false
    },
    autoFilterFocus: {
      type: Boolean,
      "default": false
    },
    selectOnFocus: {
      type: Boolean,
      "default": false
    },
    focusOnHover: {
      type: Boolean,
      "default": true
    },
    highlightOnSelect: {
      type: Boolean,
      "default": true
    },
    checkmark: {
      type: Boolean,
      "default": false
    },
    filterMessage: {
      type: String,
      "default": null
    },
    selectionMessage: {
      type: String,
      "default": null
    },
    emptySelectionMessage: {
      type: String,
      "default": null
    },
    emptyFilterMessage: {
      type: String,
      "default": null
    },
    emptyMessage: {
      type: String,
      "default": null
    },
    tabindex: {
      type: Number,
      "default": 0
    },
    ariaLabel: {
      type: String,
      "default": null
    },
    ariaLabelledby: {
      type: String,
      "default": null
    }
  },
  style: SelectStyle,
  provide: function provide3() {
    return {
      $pcSelect: this,
      $parentInstance: this
    };
  }
};
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var script$2 = {
  name: "Select",
  "extends": script$1$1,
  inheritAttrs: false,
  emits: ["change", "focus", "blur", "before-show", "before-hide", "show", "hide", "filter"],
  outsideClickListener: null,
  scrollHandler: null,
  resizeListener: null,
  labelClickListener: null,
  overlay: null,
  list: null,
  virtualScroller: null,
  searchTimeout: null,
  searchValue: null,
  isModelValueChanged: false,
  data: function data() {
    return {
      id: this.$attrs.id,
      clicked: false,
      focused: false,
      focusedOptionIndex: -1,
      filterValue: null,
      overlayVisible: false
    };
  },
  watch: {
    "$attrs.id": function $attrsId(newValue) {
      this.id = newValue || UniqueComponentId();
    },
    modelValue: function modelValue() {
      this.isModelValueChanged = true;
    },
    options: function options() {
      this.autoUpdateModel();
    }
  },
  mounted: function mounted() {
    this.id = this.id || UniqueComponentId();
    this.autoUpdateModel();
    this.bindLabelClickListener();
  },
  updated: function updated() {
    if (this.overlayVisible && this.isModelValueChanged) {
      this.scrollInView(this.findSelectedOptionIndex());
    }
    this.isModelValueChanged = false;
  },
  beforeUnmount: function beforeUnmount() {
    this.unbindOutsideClickListener();
    this.unbindResizeListener();
    this.unbindLabelClickListener();
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    if (this.overlay) {
      ZIndex.clear(this.overlay);
      this.overlay = null;
    }
  },
  methods: {
    getOptionIndex: function getOptionIndex(index, fn) {
      return this.virtualScrollerDisabled ? index : fn && fn(index)["index"];
    },
    getOptionLabel: function getOptionLabel(option2) {
      return this.optionLabel ? resolveFieldData(option2, this.optionLabel) : option2;
    },
    getOptionValue: function getOptionValue(option2) {
      return this.optionValue ? resolveFieldData(option2, this.optionValue) : option2;
    },
    getOptionRenderKey: function getOptionRenderKey(option2, index) {
      return (this.dataKey ? resolveFieldData(option2, this.dataKey) : this.getOptionLabel(option2)) + "_" + index;
    },
    getPTItemOptions: function getPTItemOptions(option2, itemOptions, index, key) {
      return this.ptm(key, {
        context: {
          option: option2,
          index,
          selected: this.isSelected(option2),
          focused: this.focusedOptionIndex === this.getOptionIndex(index, itemOptions),
          disabled: this.isOptionDisabled(option2)
        }
      });
    },
    isOptionDisabled: function isOptionDisabled(option2) {
      return this.optionDisabled ? resolveFieldData(option2, this.optionDisabled) : false;
    },
    isOptionGroup: function isOptionGroup(option2) {
      return this.optionGroupLabel && option2.optionGroup && option2.group;
    },
    getOptionGroupLabel: function getOptionGroupLabel(optionGroup) {
      return resolveFieldData(optionGroup, this.optionGroupLabel);
    },
    getOptionGroupChildren: function getOptionGroupChildren(optionGroup) {
      return resolveFieldData(optionGroup, this.optionGroupChildren);
    },
    getAriaPosInset: function getAriaPosInset(index) {
      var _this = this;
      return (this.optionGroupLabel ? index - this.visibleOptions.slice(0, index).filter(function(option2) {
        return _this.isOptionGroup(option2);
      }).length : index) + 1;
    },
    show: function show(isFocus) {
      this.$emit("before-show");
      this.overlayVisible = true;
      this.focusedOptionIndex = this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : this.editable ? -1 : this.findSelectedOptionIndex();
      isFocus && focus(this.$refs.focusInput);
    },
    hide: function hide(isFocus) {
      var _this2 = this;
      var _hide = function _hide2() {
        _this2.$emit("before-hide");
        _this2.overlayVisible = false;
        _this2.clicked = false;
        _this2.focusedOptionIndex = -1;
        _this2.searchValue = "";
        _this2.resetFilterOnHide && (_this2.filterValue = null);
        isFocus && focus(_this2.$refs.focusInput);
      };
      setTimeout(function() {
        _hide();
      }, 0);
    },
    onFocus: function onFocus(event) {
      if (this.disabled) {
        return;
      }
      this.focused = true;
      if (this.overlayVisible) {
        this.focusedOptionIndex = this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : this.editable ? -1 : this.findSelectedOptionIndex();
        this.scrollInView(this.focusedOptionIndex);
      }
      this.$emit("focus", event);
    },
    onBlur: function onBlur(event) {
      var _this$formField$onBlu, _this$formField;
      this.focused = false;
      this.focusedOptionIndex = -1;
      this.searchValue = "";
      this.$emit("blur", event);
      (_this$formField$onBlu = (_this$formField = this.formField).onBlur) === null || _this$formField$onBlu === void 0 || _this$formField$onBlu.call(_this$formField, event);
    },
    onKeyDown: function onKeyDown(event) {
      if (this.disabled || isAndroid()) {
        event.preventDefault();
        return;
      }
      var metaKey = event.metaKey || event.ctrlKey;
      switch (event.code) {
        case "ArrowDown":
          this.onArrowDownKey(event);
          break;
        case "ArrowUp":
          this.onArrowUpKey(event, this.editable);
          break;
        case "ArrowLeft":
        case "ArrowRight":
          this.onArrowLeftKey(event, this.editable);
          break;
        case "Home":
          this.onHomeKey(event, this.editable);
          break;
        case "End":
          this.onEndKey(event, this.editable);
          break;
        case "PageDown":
          this.onPageDownKey(event);
          break;
        case "PageUp":
          this.onPageUpKey(event);
          break;
        case "Space":
          this.onSpaceKey(event, this.editable);
          break;
        case "Enter":
        case "NumpadEnter":
          this.onEnterKey(event);
          break;
        case "Escape":
          this.onEscapeKey(event);
          break;
        case "Tab":
          this.onTabKey(event);
          break;
        case "Backspace":
          this.onBackspaceKey(event, this.editable);
          break;
        case "ShiftLeft":
        case "ShiftRight":
          break;
        default:
          if (!metaKey && isPrintableCharacter(event.key)) {
            !this.overlayVisible && this.show();
            !this.editable && this.searchOptions(event, event.key);
          }
          break;
      }
      this.clicked = false;
    },
    onEditableInput: function onEditableInput(event) {
      var value = event.target.value;
      this.searchValue = "";
      var matched = this.searchOptions(event, value);
      !matched && (this.focusedOptionIndex = -1);
      this.updateModel(event, value);
      !this.overlayVisible && isNotEmpty(value) && this.show();
    },
    onContainerClick: function onContainerClick(event) {
      if (this.disabled || this.loading) {
        return;
      }
      if (event.target.tagName === "INPUT" || event.target.getAttribute("data-pc-section") === "clearicon" || event.target.closest('[data-pc-section="clearicon"]')) {
        return;
      } else if (!this.overlay || !this.overlay.contains(event.target)) {
        this.overlayVisible ? this.hide(true) : this.show(true);
      }
      this.clicked = true;
    },
    onClearClick: function onClearClick(event) {
      this.updateModel(event, null);
      this.resetFilterOnClear && (this.filterValue = null);
    },
    onFirstHiddenFocus: function onFirstHiddenFocus(event) {
      var focusableEl = event.relatedTarget === this.$refs.focusInput ? getFirstFocusableElement(this.overlay, ':not([data-p-hidden-focusable="true"])') : this.$refs.focusInput;
      focus(focusableEl);
    },
    onLastHiddenFocus: function onLastHiddenFocus(event) {
      var focusableEl = event.relatedTarget === this.$refs.focusInput ? getLastFocusableElement(this.overlay, ':not([data-p-hidden-focusable="true"])') : this.$refs.focusInput;
      focus(focusableEl);
    },
    onOptionSelect: function onOptionSelect(event, option2) {
      var isHide = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
      var value = this.getOptionValue(option2);
      this.updateModel(event, value);
      isHide && this.hide(true);
    },
    onOptionMouseMove: function onOptionMouseMove(event, index) {
      if (this.focusOnHover) {
        this.changeFocusedOptionIndex(event, index);
      }
    },
    onFilterChange: function onFilterChange(event) {
      var value = event.target.value;
      this.filterValue = value;
      this.focusedOptionIndex = -1;
      this.$emit("filter", {
        originalEvent: event,
        value
      });
      !this.virtualScrollerDisabled && this.virtualScroller.scrollToIndex(0);
    },
    onFilterKeyDown: function onFilterKeyDown(event) {
      if (event.isComposing) return;
      switch (event.code) {
        case "ArrowDown":
          this.onArrowDownKey(event);
          break;
        case "ArrowUp":
          this.onArrowUpKey(event, true);
          break;
        case "ArrowLeft":
        case "ArrowRight":
          this.onArrowLeftKey(event, true);
          break;
        case "Home":
          this.onHomeKey(event, true);
          break;
        case "End":
          this.onEndKey(event, true);
          break;
        case "Enter":
        case "NumpadEnter":
          this.onEnterKey(event);
          break;
        case "Escape":
          this.onEscapeKey(event);
          break;
        case "Tab":
          this.onTabKey(event, true);
          break;
      }
    },
    onFilterBlur: function onFilterBlur() {
      this.focusedOptionIndex = -1;
    },
    onFilterUpdated: function onFilterUpdated() {
      if (this.overlayVisible) {
        this.alignOverlay();
      }
    },
    onOverlayClick: function onOverlayClick(event) {
      OverlayEventBus.emit("overlay-click", {
        originalEvent: event,
        target: this.$el
      });
    },
    onOverlayKeyDown: function onOverlayKeyDown(event) {
      switch (event.code) {
        case "Escape":
          this.onEscapeKey(event);
          break;
      }
    },
    onArrowDownKey: function onArrowDownKey(event) {
      if (!this.overlayVisible) {
        this.show();
        this.editable && this.changeFocusedOptionIndex(event, this.findSelectedOptionIndex());
      } else {
        var optionIndex = this.focusedOptionIndex !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex) : this.clicked ? this.findFirstOptionIndex() : this.findFirstFocusedOptionIndex();
        this.changeFocusedOptionIndex(event, optionIndex);
      }
      event.preventDefault();
    },
    onArrowUpKey: function onArrowUpKey(event) {
      var pressedInInputText = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      if (event.altKey && !pressedInInputText) {
        if (this.focusedOptionIndex !== -1) {
          this.onOptionSelect(event, this.visibleOptions[this.focusedOptionIndex]);
        }
        this.overlayVisible && this.hide();
        event.preventDefault();
      } else {
        var optionIndex = this.focusedOptionIndex !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex) : this.clicked ? this.findLastOptionIndex() : this.findLastFocusedOptionIndex();
        this.changeFocusedOptionIndex(event, optionIndex);
        !this.overlayVisible && this.show();
        event.preventDefault();
      }
    },
    onArrowLeftKey: function onArrowLeftKey(event) {
      var pressedInInputText = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      pressedInInputText && (this.focusedOptionIndex = -1);
    },
    onHomeKey: function onHomeKey(event) {
      var pressedInInputText = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      if (pressedInInputText) {
        var target = event.currentTarget;
        if (event.shiftKey) {
          target.setSelectionRange(0, event.target.selectionStart);
        } else {
          target.setSelectionRange(0, 0);
          this.focusedOptionIndex = -1;
        }
      } else {
        this.changeFocusedOptionIndex(event, this.findFirstOptionIndex());
        !this.overlayVisible && this.show();
      }
      event.preventDefault();
    },
    onEndKey: function onEndKey(event) {
      var pressedInInputText = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      if (pressedInInputText) {
        var target = event.currentTarget;
        if (event.shiftKey) {
          target.setSelectionRange(event.target.selectionStart, target.value.length);
        } else {
          var len = target.value.length;
          target.setSelectionRange(len, len);
          this.focusedOptionIndex = -1;
        }
      } else {
        this.changeFocusedOptionIndex(event, this.findLastOptionIndex());
        !this.overlayVisible && this.show();
      }
      event.preventDefault();
    },
    onPageUpKey: function onPageUpKey(event) {
      this.scrollInView(0);
      event.preventDefault();
    },
    onPageDownKey: function onPageDownKey(event) {
      this.scrollInView(this.visibleOptions.length - 1);
      event.preventDefault();
    },
    onEnterKey: function onEnterKey(event) {
      if (!this.overlayVisible) {
        this.focusedOptionIndex = -1;
        this.onArrowDownKey(event);
      } else {
        if (this.focusedOptionIndex !== -1) {
          this.onOptionSelect(event, this.visibleOptions[this.focusedOptionIndex]);
        }
        this.hide();
      }
      event.preventDefault();
    },
    onSpaceKey: function onSpaceKey(event) {
      var pressedInInputText = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      !pressedInInputText && this.onEnterKey(event);
    },
    onEscapeKey: function onEscapeKey(event) {
      this.overlayVisible && this.hide(true);
      event.preventDefault();
      event.stopPropagation();
    },
    onTabKey: function onTabKey(event) {
      var pressedInInputText = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      if (!pressedInInputText) {
        if (this.overlayVisible && this.hasFocusableElements()) {
          focus(this.$refs.firstHiddenFocusableElementOnOverlay);
          event.preventDefault();
        } else {
          if (this.focusedOptionIndex !== -1) {
            this.onOptionSelect(event, this.visibleOptions[this.focusedOptionIndex]);
          }
          this.overlayVisible && this.hide(this.filter);
        }
      }
    },
    onBackspaceKey: function onBackspaceKey(event) {
      var pressedInInputText = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      if (pressedInInputText) {
        !this.overlayVisible && this.show();
      }
    },
    onOverlayEnter: function onOverlayEnter(el) {
      var _this3 = this;
      ZIndex.set("overlay", el, this.$primevue.config.zIndex.overlay);
      addStyle(el, {
        position: "absolute",
        top: "0",
        left: "0"
      });
      this.alignOverlay();
      this.scrollInView();
      setTimeout(function() {
        _this3.autoFilterFocus && _this3.filter && focus(_this3.$refs.filterInput.$el);
      }, 1);
    },
    onOverlayAfterEnter: function onOverlayAfterEnter() {
      this.bindOutsideClickListener();
      this.bindScrollListener();
      this.bindResizeListener();
      this.$emit("show");
    },
    onOverlayLeave: function onOverlayLeave() {
      var _this4 = this;
      this.unbindOutsideClickListener();
      this.unbindScrollListener();
      this.unbindResizeListener();
      if (this.autoFilterFocus && this.filter && !this.editable) {
        this.$nextTick(function() {
          focus(_this4.$refs.filterInput.$el);
        });
      }
      this.$emit("hide");
      this.overlay = null;
    },
    onOverlayAfterLeave: function onOverlayAfterLeave(el) {
      ZIndex.clear(el);
    },
    alignOverlay: function alignOverlay() {
      if (this.appendTo === "self") {
        relativePosition(this.overlay, this.$el);
      } else {
        this.overlay.style.minWidth = getOuterWidth(this.$el) + "px";
        absolutePosition(this.overlay, this.$el);
      }
    },
    bindOutsideClickListener: function bindOutsideClickListener() {
      var _this5 = this;
      if (!this.outsideClickListener) {
        this.outsideClickListener = function(event) {
          if (_this5.overlayVisible && _this5.overlay && !_this5.$el.contains(event.target) && !_this5.overlay.contains(event.target)) {
            _this5.hide();
          }
        };
        (void 0).addEventListener("click", this.outsideClickListener);
      }
    },
    unbindOutsideClickListener: function unbindOutsideClickListener() {
      if (this.outsideClickListener) {
        (void 0).removeEventListener("click", this.outsideClickListener);
        this.outsideClickListener = null;
      }
    },
    bindScrollListener: function bindScrollListener() {
      var _this6 = this;
      if (!this.scrollHandler) {
        this.scrollHandler = new ConnectedOverlayScrollHandler(this.$refs.container, function() {
          if (_this6.overlayVisible) {
            _this6.hide();
          }
        });
      }
      this.scrollHandler.bindScrollListener();
    },
    unbindScrollListener: function unbindScrollListener() {
      if (this.scrollHandler) {
        this.scrollHandler.unbindScrollListener();
      }
    },
    bindResizeListener: function bindResizeListener() {
      var _this7 = this;
      if (!this.resizeListener) {
        this.resizeListener = function() {
          if (_this7.overlayVisible && !isTouchDevice()) {
            _this7.hide();
          }
        };
        (void 0).addEventListener("resize", this.resizeListener);
      }
    },
    unbindResizeListener: function unbindResizeListener() {
      if (this.resizeListener) {
        (void 0).removeEventListener("resize", this.resizeListener);
        this.resizeListener = null;
      }
    },
    bindLabelClickListener: function bindLabelClickListener() {
      var _this8 = this;
      if (!this.editable && !this.labelClickListener) {
        var label22 = (void 0).querySelector('label[for="'.concat(this.labelId, '"]'));
        if (label22 && isVisible(label22)) {
          this.labelClickListener = function() {
            focus(_this8.$refs.focusInput);
          };
          label22.addEventListener("click", this.labelClickListener);
        }
      }
    },
    unbindLabelClickListener: function unbindLabelClickListener() {
      if (this.labelClickListener) {
        var label22 = (void 0).querySelector('label[for="'.concat(this.labelId, '"]'));
        if (label22 && isVisible(label22)) {
          label22.removeEventListener("click", this.labelClickListener);
        }
      }
    },
    hasFocusableElements: function hasFocusableElements() {
      return getFocusableElements(this.overlay, ':not([data-p-hidden-focusable="true"])').length > 0;
    },
    isOptionMatched: function isOptionMatched(option2) {
      var _this$getOptionLabel;
      return this.isValidOption(option2) && typeof this.getOptionLabel(option2) === "string" && ((_this$getOptionLabel = this.getOptionLabel(option2)) === null || _this$getOptionLabel === void 0 ? void 0 : _this$getOptionLabel.toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)));
    },
    isValidOption: function isValidOption(option2) {
      return isNotEmpty(option2) && !(this.isOptionDisabled(option2) || this.isOptionGroup(option2));
    },
    isValidSelectedOption: function isValidSelectedOption(option2) {
      return this.isValidOption(option2) && this.isSelected(option2);
    },
    isSelected: function isSelected(option2) {
      return equals(this.d_value, this.getOptionValue(option2), this.equalityKey);
    },
    findFirstOptionIndex: function findFirstOptionIndex() {
      var _this9 = this;
      return this.visibleOptions.findIndex(function(option2) {
        return _this9.isValidOption(option2);
      });
    },
    findLastOptionIndex: function findLastOptionIndex() {
      var _this10 = this;
      return findLastIndex(this.visibleOptions, function(option2) {
        return _this10.isValidOption(option2);
      });
    },
    findNextOptionIndex: function findNextOptionIndex(index) {
      var _this11 = this;
      var matchedOptionIndex = index < this.visibleOptions.length - 1 ? this.visibleOptions.slice(index + 1).findIndex(function(option2) {
        return _this11.isValidOption(option2);
      }) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
    },
    findPrevOptionIndex: function findPrevOptionIndex(index) {
      var _this12 = this;
      var matchedOptionIndex = index > 0 ? findLastIndex(this.visibleOptions.slice(0, index), function(option2) {
        return _this12.isValidOption(option2);
      }) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex : index;
    },
    findSelectedOptionIndex: function findSelectedOptionIndex() {
      var _this13 = this;
      return this.$filled ? this.visibleOptions.findIndex(function(option2) {
        return _this13.isValidSelectedOption(option2);
      }) : -1;
    },
    findFirstFocusedOptionIndex: function findFirstFocusedOptionIndex() {
      var selectedIndex = this.findSelectedOptionIndex();
      return selectedIndex < 0 ? this.findFirstOptionIndex() : selectedIndex;
    },
    findLastFocusedOptionIndex: function findLastFocusedOptionIndex() {
      var selectedIndex = this.findSelectedOptionIndex();
      return selectedIndex < 0 ? this.findLastOptionIndex() : selectedIndex;
    },
    searchOptions: function searchOptions(event, _char) {
      var _this14 = this;
      this.searchValue = (this.searchValue || "") + _char;
      var optionIndex = -1;
      var matched = false;
      if (isNotEmpty(this.searchValue)) {
        if (this.focusedOptionIndex !== -1) {
          optionIndex = this.visibleOptions.slice(this.focusedOptionIndex).findIndex(function(option2) {
            return _this14.isOptionMatched(option2);
          });
          optionIndex = optionIndex === -1 ? this.visibleOptions.slice(0, this.focusedOptionIndex).findIndex(function(option2) {
            return _this14.isOptionMatched(option2);
          }) : optionIndex + this.focusedOptionIndex;
        } else {
          optionIndex = this.visibleOptions.findIndex(function(option2) {
            return _this14.isOptionMatched(option2);
          });
        }
        if (optionIndex !== -1) {
          matched = true;
        }
        if (optionIndex === -1 && this.focusedOptionIndex === -1) {
          optionIndex = this.findFirstFocusedOptionIndex();
        }
        if (optionIndex !== -1) {
          this.changeFocusedOptionIndex(event, optionIndex);
        }
      }
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }
      this.searchTimeout = setTimeout(function() {
        _this14.searchValue = "";
        _this14.searchTimeout = null;
      }, 500);
      return matched;
    },
    changeFocusedOptionIndex: function changeFocusedOptionIndex(event, index) {
      if (this.focusedOptionIndex !== index) {
        this.focusedOptionIndex = index;
        this.scrollInView();
        if (this.selectOnFocus) {
          this.onOptionSelect(event, this.visibleOptions[index], false);
        }
      }
    },
    scrollInView: function scrollInView() {
      var _this15 = this;
      var index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : -1;
      this.$nextTick(function() {
        var id = index !== -1 ? "".concat(_this15.id, "_").concat(index) : _this15.focusedOptionId;
        var element = findSingle(_this15.list, 'li[id="'.concat(id, '"]'));
        if (element) {
          element.scrollIntoView && element.scrollIntoView({
            block: "nearest",
            inline: "start"
          });
        } else if (!_this15.virtualScrollerDisabled) {
          _this15.virtualScroller && _this15.virtualScroller.scrollToIndex(index !== -1 ? index : _this15.focusedOptionIndex);
        }
      });
    },
    autoUpdateModel: function autoUpdateModel() {
      if (this.selectOnFocus && this.autoOptionFocus && !this.$filled) {
        this.focusedOptionIndex = this.findFirstFocusedOptionIndex();
        this.onOptionSelect(null, this.visibleOptions[this.focusedOptionIndex], false);
      }
    },
    updateModel: function updateModel(event, value) {
      this.writeValue(value, event);
      this.$emit("change", {
        originalEvent: event,
        value
      });
    },
    flatOptions: function flatOptions(options2) {
      var _this16 = this;
      return (options2 || []).reduce(function(result, option2, index) {
        result.push({
          optionGroup: option2,
          group: true,
          index
        });
        var optionGroupChildren = _this16.getOptionGroupChildren(option2);
        optionGroupChildren && optionGroupChildren.forEach(function(o) {
          return result.push(o);
        });
        return result;
      }, []);
    },
    overlayRef: function overlayRef(el) {
      this.overlay = el;
    },
    listRef: function listRef(el, contentRef) {
      this.list = el;
      contentRef && contentRef(el);
    },
    virtualScrollerRef: function virtualScrollerRef(el) {
      this.virtualScroller = el;
    }
  },
  computed: {
    visibleOptions: function visibleOptions() {
      var _this17 = this;
      var options2 = this.optionGroupLabel ? this.flatOptions(this.options) : this.options || [];
      if (this.filterValue) {
        var filteredOptions = FilterService.filter(options2, this.searchFields, this.filterValue, this.filterMatchMode, this.filterLocale);
        if (this.optionGroupLabel) {
          var optionGroups = this.options || [];
          var filtered = [];
          optionGroups.forEach(function(group) {
            var groupChildren = _this17.getOptionGroupChildren(group);
            var filteredItems = groupChildren.filter(function(item) {
              return filteredOptions.includes(item);
            });
            if (filteredItems.length > 0) filtered.push(_objectSpread(_objectSpread({}, group), {}, _defineProperty({}, typeof _this17.optionGroupChildren === "string" ? _this17.optionGroupChildren : "items", _toConsumableArray(filteredItems))));
          });
          return this.flatOptions(filtered);
        }
        return filteredOptions;
      }
      return options2;
    },
    // @deprecated use $filled instead
    hasSelectedOption: function hasSelectedOption() {
      return this.$filled;
    },
    label: function label2() {
      var selectedOptionIndex = this.findSelectedOptionIndex();
      return selectedOptionIndex !== -1 ? this.getOptionLabel(this.visibleOptions[selectedOptionIndex]) : this.placeholder || "p-emptylabel";
    },
    editableInputValue: function editableInputValue() {
      var selectedOptionIndex = this.findSelectedOptionIndex();
      return selectedOptionIndex !== -1 ? this.getOptionLabel(this.visibleOptions[selectedOptionIndex]) : this.d_value || "";
    },
    equalityKey: function equalityKey() {
      return this.optionValue ? null : this.dataKey;
    },
    searchFields: function searchFields() {
      return this.filterFields || [this.optionLabel];
    },
    filterResultMessageText: function filterResultMessageText() {
      return isNotEmpty(this.visibleOptions) ? this.filterMessageText.replaceAll("{0}", this.visibleOptions.length) : this.emptyFilterMessageText;
    },
    filterMessageText: function filterMessageText() {
      return this.filterMessage || this.$primevue.config.locale.searchMessage || "";
    },
    emptyFilterMessageText: function emptyFilterMessageText() {
      return this.emptyFilterMessage || this.$primevue.config.locale.emptySearchMessage || this.$primevue.config.locale.emptyFilterMessage || "";
    },
    emptyMessageText: function emptyMessageText() {
      return this.emptyMessage || this.$primevue.config.locale.emptyMessage || "";
    },
    selectionMessageText: function selectionMessageText() {
      return this.selectionMessage || this.$primevue.config.locale.selectionMessage || "";
    },
    emptySelectionMessageText: function emptySelectionMessageText() {
      return this.emptySelectionMessage || this.$primevue.config.locale.emptySelectionMessage || "";
    },
    selectedMessageText: function selectedMessageText() {
      return this.$filled ? this.selectionMessageText.replaceAll("{0}", "1") : this.emptySelectionMessageText;
    },
    focusedOptionId: function focusedOptionId() {
      return this.focusedOptionIndex !== -1 ? "".concat(this.id, "_").concat(this.focusedOptionIndex) : null;
    },
    ariaSetSize: function ariaSetSize() {
      var _this18 = this;
      return this.visibleOptions.filter(function(option2) {
        return !_this18.isOptionGroup(option2);
      }).length;
    },
    isClearIconVisible: function isClearIconVisible() {
      return this.showClear && this.d_value != null && isNotEmpty(this.options);
    },
    virtualScrollerDisabled: function virtualScrollerDisabled() {
      return !this.virtualScrollerOptions;
    }
  },
  directives: {
    ripple: Ripple
  },
  components: {
    InputText: script$2$1,
    VirtualScroller: script$8,
    Portal: script$9,
    InputIcon: script$3,
    IconField: script$4,
    TimesIcon: script$a,
    ChevronDownIcon: script$b,
    SpinnerIcon: script$3$1,
    SearchIcon: script$5,
    CheckIcon: script$1$4,
    BlankIcon: script$6
  }
};
var _hoisted_1$1 = ["id"];
var _hoisted_2$1 = ["id", "value", "placeholder", "tabindex", "disabled", "aria-label", "aria-labelledby", "aria-expanded", "aria-controls", "aria-activedescendant", "aria-invalid"];
var _hoisted_3 = ["id", "tabindex", "aria-label", "aria-labelledby", "aria-expanded", "aria-controls", "aria-activedescendant", "aria-disabled"];
var _hoisted_4 = ["id"];
var _hoisted_5 = ["id"];
var _hoisted_6 = ["id", "aria-label", "aria-selected", "aria-disabled", "aria-setsize", "aria-posinset", "onClick", "onMousemove", "data-p-selected", "data-p-focused", "data-p-disabled"];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SpinnerIcon = resolveComponent("SpinnerIcon");
  var _component_InputText = resolveComponent("InputText");
  var _component_SearchIcon = resolveComponent("SearchIcon");
  var _component_InputIcon = resolveComponent("InputIcon");
  var _component_IconField = resolveComponent("IconField");
  var _component_CheckIcon = resolveComponent("CheckIcon");
  var _component_BlankIcon = resolveComponent("BlankIcon");
  var _component_VirtualScroller = resolveComponent("VirtualScroller");
  var _component_Portal = resolveComponent("Portal");
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("div", mergeProps({
    ref: "container",
    id: $data.id,
    "class": _ctx.cx("root"),
    onClick: _cache[11] || (_cache[11] = function() {
      return $options.onContainerClick && $options.onContainerClick.apply($options, arguments);
    })
  }, _ctx.ptmi("root")), [_ctx.editable ? (openBlock(), createElementBlock("input", mergeProps({
    key: 0,
    ref: "focusInput",
    id: _ctx.labelId || _ctx.inputId,
    type: "text",
    "class": [_ctx.cx("label"), _ctx.inputClass, _ctx.labelClass],
    style: [_ctx.inputStyle, _ctx.labelStyle],
    value: $options.editableInputValue,
    placeholder: _ctx.placeholder,
    tabindex: !_ctx.disabled ? _ctx.tabindex : -1,
    disabled: _ctx.disabled,
    autocomplete: "off",
    role: "combobox",
    "aria-label": _ctx.ariaLabel,
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-haspopup": "listbox",
    "aria-expanded": $data.overlayVisible,
    "aria-controls": $data.id + "_list",
    "aria-activedescendant": $data.focused ? $options.focusedOptionId : void 0,
    "aria-invalid": _ctx.invalid || void 0,
    onFocus: _cache[0] || (_cache[0] = function() {
      return $options.onFocus && $options.onFocus.apply($options, arguments);
    }),
    onBlur: _cache[1] || (_cache[1] = function() {
      return $options.onBlur && $options.onBlur.apply($options, arguments);
    }),
    onKeydown: _cache[2] || (_cache[2] = function() {
      return $options.onKeyDown && $options.onKeyDown.apply($options, arguments);
    }),
    onInput: _cache[3] || (_cache[3] = function() {
      return $options.onEditableInput && $options.onEditableInput.apply($options, arguments);
    })
  }, _ctx.ptm("label")), null, 16, _hoisted_2$1)) : (openBlock(), createElementBlock("span", mergeProps({
    key: 1,
    ref: "focusInput",
    id: _ctx.labelId || _ctx.inputId,
    "class": [_ctx.cx("label"), _ctx.inputClass, _ctx.labelClass],
    style: [_ctx.inputStyle, _ctx.labelStyle],
    tabindex: !_ctx.disabled ? _ctx.tabindex : -1,
    role: "combobox",
    "aria-label": _ctx.ariaLabel || ($options.label === "p-emptylabel" ? void 0 : $options.label),
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-haspopup": "listbox",
    "aria-expanded": $data.overlayVisible,
    "aria-controls": $data.id + "_list",
    "aria-activedescendant": $data.focused ? $options.focusedOptionId : void 0,
    "aria-disabled": _ctx.disabled,
    onFocus: _cache[4] || (_cache[4] = function() {
      return $options.onFocus && $options.onFocus.apply($options, arguments);
    }),
    onBlur: _cache[5] || (_cache[5] = function() {
      return $options.onBlur && $options.onBlur.apply($options, arguments);
    }),
    onKeydown: _cache[6] || (_cache[6] = function() {
      return $options.onKeyDown && $options.onKeyDown.apply($options, arguments);
    })
  }, _ctx.ptm("label")), [renderSlot(_ctx.$slots, "value", {
    value: _ctx.d_value,
    placeholder: _ctx.placeholder
  }, function() {
    var _$options$label;
    return [createTextVNode(toDisplayString($options.label === "p-emptylabel" ? "\xA0" : (_$options$label = $options.label) !== null && _$options$label !== void 0 ? _$options$label : "empty"), 1)];
  })], 16, _hoisted_3)), $options.isClearIconVisible ? renderSlot(_ctx.$slots, "clearicon", {
    key: 2,
    "class": normalizeClass(_ctx.cx("clearIcon")),
    clearCallback: $options.onClearClick
  }, function() {
    return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.clearIcon ? "i" : "TimesIcon"), mergeProps({
      ref: "clearIcon",
      "class": [_ctx.cx("clearIcon"), _ctx.clearIcon],
      onClick: $options.onClearClick
    }, _ctx.ptm("clearIcon"), {
      "data-pc-section": "clearicon"
    }), null, 16, ["class", "onClick"]))];
  }) : createCommentVNode("", true), createElementVNode("div", mergeProps({
    "class": _ctx.cx("dropdown")
  }, _ctx.ptm("dropdown")), [_ctx.loading ? renderSlot(_ctx.$slots, "loadingicon", {
    key: 0,
    "class": normalizeClass(_ctx.cx("loadingIcon"))
  }, function() {
    return [_ctx.loadingIcon ? (openBlock(), createElementBlock("span", mergeProps({
      key: 0,
      "class": [_ctx.cx("loadingIcon"), "pi-spin", _ctx.loadingIcon],
      "aria-hidden": "true"
    }, _ctx.ptm("loadingIcon")), null, 16)) : (openBlock(), createBlock(_component_SpinnerIcon, mergeProps({
      key: 1,
      "class": _ctx.cx("loadingIcon"),
      spin: "",
      "aria-hidden": "true"
    }, _ctx.ptm("loadingIcon")), null, 16, ["class"]))];
  }) : renderSlot(_ctx.$slots, "dropdownicon", {
    key: 1,
    "class": normalizeClass(_ctx.cx("dropdownIcon"))
  }, function() {
    return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.dropdownIcon ? "span" : "ChevronDownIcon"), mergeProps({
      "class": [_ctx.cx("dropdownIcon"), _ctx.dropdownIcon],
      "aria-hidden": "true"
    }, _ctx.ptm("dropdownIcon")), null, 16, ["class"]))];
  })], 16), createVNode(_component_Portal, {
    appendTo: _ctx.appendTo
  }, {
    "default": withCtx(function() {
      return [createVNode(Transition, mergeProps({
        name: "p-connected-overlay",
        onEnter: $options.onOverlayEnter,
        onAfterEnter: $options.onOverlayAfterEnter,
        onLeave: $options.onOverlayLeave,
        onAfterLeave: $options.onOverlayAfterLeave
      }, _ctx.ptm("transition")), {
        "default": withCtx(function() {
          return [$data.overlayVisible ? (openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            ref: $options.overlayRef,
            "class": [_ctx.cx("overlay"), _ctx.panelClass, _ctx.overlayClass],
            style: [_ctx.panelStyle, _ctx.overlayStyle],
            onClick: _cache[9] || (_cache[9] = function() {
              return $options.onOverlayClick && $options.onOverlayClick.apply($options, arguments);
            }),
            onKeydown: _cache[10] || (_cache[10] = function() {
              return $options.onOverlayKeyDown && $options.onOverlayKeyDown.apply($options, arguments);
            })
          }, _ctx.ptm("overlay")), [createElementVNode("span", mergeProps({
            ref: "firstHiddenFocusableElementOnOverlay",
            role: "presentation",
            "aria-hidden": "true",
            "class": "p-hidden-accessible p-hidden-focusable",
            tabindex: 0,
            onFocus: _cache[7] || (_cache[7] = function() {
              return $options.onFirstHiddenFocus && $options.onFirstHiddenFocus.apply($options, arguments);
            })
          }, _ctx.ptm("hiddenFirstFocusableEl"), {
            "data-p-hidden-accessible": true,
            "data-p-hidden-focusable": true
          }), null, 16), renderSlot(_ctx.$slots, "header", {
            value: _ctx.d_value,
            options: $options.visibleOptions
          }), _ctx.filter ? (openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            "class": _ctx.cx("header")
          }, _ctx.ptm("header")), [createVNode(_component_IconField, {
            unstyled: _ctx.unstyled,
            pt: _ctx.ptm("pcFilterContainer")
          }, {
            "default": withCtx(function() {
              return [createVNode(_component_InputText, {
                ref: "filterInput",
                type: "text",
                value: $data.filterValue,
                onVnodeMounted: $options.onFilterUpdated,
                onVnodeUpdated: $options.onFilterUpdated,
                "class": normalizeClass(_ctx.cx("pcFilter")),
                placeholder: _ctx.filterPlaceholder,
                variant: _ctx.variant,
                unstyled: _ctx.unstyled,
                role: "searchbox",
                autocomplete: "off",
                "aria-owns": $data.id + "_list",
                "aria-activedescendant": $options.focusedOptionId,
                onKeydown: $options.onFilterKeyDown,
                onBlur: $options.onFilterBlur,
                onInput: $options.onFilterChange,
                pt: _ctx.ptm("pcFilter")
              }, null, 8, ["value", "onVnodeMounted", "onVnodeUpdated", "class", "placeholder", "variant", "unstyled", "aria-owns", "aria-activedescendant", "onKeydown", "onBlur", "onInput", "pt"]), createVNode(_component_InputIcon, {
                unstyled: _ctx.unstyled,
                pt: _ctx.ptm("pcFilterIconContainer")
              }, {
                "default": withCtx(function() {
                  return [renderSlot(_ctx.$slots, "filtericon", {}, function() {
                    return [_ctx.filterIcon ? (openBlock(), createElementBlock("span", mergeProps({
                      key: 0,
                      "class": _ctx.filterIcon
                    }, _ctx.ptm("filterIcon")), null, 16)) : (openBlock(), createBlock(_component_SearchIcon, normalizeProps(mergeProps({
                      key: 1
                    }, _ctx.ptm("filterIcon"))), null, 16))];
                  })];
                }),
                _: 3
              }, 8, ["unstyled", "pt"])];
            }),
            _: 3
          }, 8, ["unstyled", "pt"]), createElementVNode("span", mergeProps({
            role: "status",
            "aria-live": "polite",
            "class": "p-hidden-accessible"
          }, _ctx.ptm("hiddenFilterResult"), {
            "data-p-hidden-accessible": true
          }), toDisplayString($options.filterResultMessageText), 17)], 16)) : createCommentVNode("", true), createElementVNode("div", mergeProps({
            "class": _ctx.cx("listContainer"),
            style: {
              "max-height": $options.virtualScrollerDisabled ? _ctx.scrollHeight : ""
            }
          }, _ctx.ptm("listContainer")), [createVNode(_component_VirtualScroller, mergeProps({
            ref: $options.virtualScrollerRef
          }, _ctx.virtualScrollerOptions, {
            items: $options.visibleOptions,
            style: {
              height: _ctx.scrollHeight
            },
            tabindex: -1,
            disabled: $options.virtualScrollerDisabled,
            pt: _ctx.ptm("virtualScroller")
          }), createSlots({
            content: withCtx(function(_ref) {
              var styleClass = _ref.styleClass, contentRef = _ref.contentRef, items = _ref.items, getItemOptions = _ref.getItemOptions, contentStyle = _ref.contentStyle, itemSize = _ref.itemSize;
              return [createElementVNode("ul", mergeProps({
                ref: function ref(el) {
                  return $options.listRef(el, contentRef);
                },
                id: $data.id + "_list",
                "class": [_ctx.cx("list"), styleClass],
                style: contentStyle,
                role: "listbox"
              }, _ctx.ptm("list")), [(openBlock(true), createElementBlock(Fragment, null, renderList(items, function(option2, i) {
                return openBlock(), createElementBlock(Fragment, {
                  key: $options.getOptionRenderKey(option2, $options.getOptionIndex(i, getItemOptions))
                }, [$options.isOptionGroup(option2) ? (openBlock(), createElementBlock("li", mergeProps({
                  key: 0,
                  id: $data.id + "_" + $options.getOptionIndex(i, getItemOptions),
                  style: {
                    height: itemSize ? itemSize + "px" : void 0
                  },
                  "class": _ctx.cx("optionGroup"),
                  role: "option",
                  ref_for: true
                }, _ctx.ptm("optionGroup")), [renderSlot(_ctx.$slots, "optiongroup", {
                  option: option2.optionGroup,
                  index: $options.getOptionIndex(i, getItemOptions)
                }, function() {
                  return [createElementVNode("span", mergeProps({
                    "class": _ctx.cx("optionGroupLabel"),
                    ref_for: true
                  }, _ctx.ptm("optionGroupLabel")), toDisplayString($options.getOptionGroupLabel(option2.optionGroup)), 17)];
                })], 16, _hoisted_5)) : withDirectives((openBlock(), createElementBlock("li", mergeProps({
                  key: 1,
                  id: $data.id + "_" + $options.getOptionIndex(i, getItemOptions),
                  "class": _ctx.cx("option", {
                    option: option2,
                    focusedOption: $options.getOptionIndex(i, getItemOptions)
                  }),
                  style: {
                    height: itemSize ? itemSize + "px" : void 0
                  },
                  role: "option",
                  "aria-label": $options.getOptionLabel(option2),
                  "aria-selected": $options.isSelected(option2),
                  "aria-disabled": $options.isOptionDisabled(option2),
                  "aria-setsize": $options.ariaSetSize,
                  "aria-posinset": $options.getAriaPosInset($options.getOptionIndex(i, getItemOptions)),
                  onClick: function onClick($event) {
                    return $options.onOptionSelect($event, option2);
                  },
                  onMousemove: function onMousemove($event) {
                    return $options.onOptionMouseMove($event, $options.getOptionIndex(i, getItemOptions));
                  },
                  "data-p-selected": $options.isSelected(option2),
                  "data-p-focused": $data.focusedOptionIndex === $options.getOptionIndex(i, getItemOptions),
                  "data-p-disabled": $options.isOptionDisabled(option2),
                  ref_for: true
                }, $options.getPTItemOptions(option2, getItemOptions, i, "option")), [_ctx.checkmark ? (openBlock(), createElementBlock(Fragment, {
                  key: 0
                }, [$options.isSelected(option2) ? (openBlock(), createBlock(_component_CheckIcon, mergeProps({
                  key: 0,
                  "class": _ctx.cx("optionCheckIcon"),
                  ref_for: true
                }, _ctx.ptm("optionCheckIcon")), null, 16, ["class"])) : (openBlock(), createBlock(_component_BlankIcon, mergeProps({
                  key: 1,
                  "class": _ctx.cx("optionBlankIcon"),
                  ref_for: true
                }, _ctx.ptm("optionBlankIcon")), null, 16, ["class"]))], 64)) : createCommentVNode("", true), renderSlot(_ctx.$slots, "option", {
                  option: option2,
                  selected: $options.isSelected(option2),
                  index: $options.getOptionIndex(i, getItemOptions)
                }, function() {
                  return [createElementVNode("span", mergeProps({
                    "class": _ctx.cx("optionLabel"),
                    ref_for: true
                  }, _ctx.ptm("optionLabel")), toDisplayString($options.getOptionLabel(option2)), 17)];
                })], 16, _hoisted_6)), [[_directive_ripple]])], 64);
              }), 128)), $data.filterValue && (!items || items && items.length === 0) ? (openBlock(), createElementBlock("li", mergeProps({
                key: 0,
                "class": _ctx.cx("emptyMessage"),
                role: "option"
              }, _ctx.ptm("emptyMessage"), {
                "data-p-hidden-accessible": true
              }), [renderSlot(_ctx.$slots, "emptyfilter", {}, function() {
                return [createTextVNode(toDisplayString($options.emptyFilterMessageText), 1)];
              })], 16)) : !_ctx.options || _ctx.options && _ctx.options.length === 0 ? (openBlock(), createElementBlock("li", mergeProps({
                key: 1,
                "class": _ctx.cx("emptyMessage"),
                role: "option"
              }, _ctx.ptm("emptyMessage"), {
                "data-p-hidden-accessible": true
              }), [renderSlot(_ctx.$slots, "empty", {}, function() {
                return [createTextVNode(toDisplayString($options.emptyMessageText), 1)];
              })], 16)) : createCommentVNode("", true)], 16, _hoisted_4)];
            }),
            _: 2
          }, [_ctx.$slots.loader ? {
            name: "loader",
            fn: withCtx(function(_ref2) {
              var options2 = _ref2.options;
              return [renderSlot(_ctx.$slots, "loader", {
                options: options2
              })];
            }),
            key: "0"
          } : void 0]), 1040, ["items", "style", "disabled", "pt"])], 16), renderSlot(_ctx.$slots, "footer", {
            value: _ctx.d_value,
            options: $options.visibleOptions
          }), !_ctx.options || _ctx.options && _ctx.options.length === 0 ? (openBlock(), createElementBlock("span", mergeProps({
            key: 1,
            role: "status",
            "aria-live": "polite",
            "class": "p-hidden-accessible"
          }, _ctx.ptm("hiddenEmptyMessage"), {
            "data-p-hidden-accessible": true
          }), toDisplayString($options.emptyMessageText), 17)) : createCommentVNode("", true), createElementVNode("span", mergeProps({
            role: "status",
            "aria-live": "polite",
            "class": "p-hidden-accessible"
          }, _ctx.ptm("hiddenSelectedMessage"), {
            "data-p-hidden-accessible": true
          }), toDisplayString($options.selectedMessageText), 17), createElementVNode("span", mergeProps({
            ref: "lastHiddenFocusableElementOnOverlay",
            role: "presentation",
            "aria-hidden": "true",
            "class": "p-hidden-accessible p-hidden-focusable",
            tabindex: 0,
            onFocus: _cache[8] || (_cache[8] = function() {
              return $options.onLastHiddenFocus && $options.onLastHiddenFocus.apply($options, arguments);
            })
          }, _ctx.ptm("hiddenLastFocusableEl"), {
            "data-p-hidden-accessible": true,
            "data-p-hidden-focusable": true
          }), null, 16)], 16)) : createCommentVNode("", true)];
        }),
        _: 3
      }, 16, ["onEnter", "onAfterEnter", "onLeave", "onAfterLeave"])];
    }),
    _: 3
  }, 8, ["appendTo"])], 16, _hoisted_1$1);
}
script$2.render = render$1;
var theme3 = function theme4(_ref) {
  var dt = _ref.dt;
  return "\n.p-radiobutton {\n    position: relative;\n    display: inline-flex;\n    user-select: none;\n    vertical-align: bottom;\n    width: ".concat(dt("radiobutton.width"), ";\n    height: ").concat(dt("radiobutton.height"), ";\n}\n\n.p-radiobutton-input {\n    cursor: pointer;\n    appearance: none;\n    position: absolute;\n    top: 0;\n    inset-inline-start: 0;\n    width: 100%;\n    height: 100%;\n    padding: 0;\n    margin: 0;\n    opacity: 0;\n    z-index: 1;\n    outline: 0 none;\n    border: 1px solid transparent;\n    border-radius: 50%;\n}\n\n.p-radiobutton-box {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 50%;\n    border: 1px solid ").concat(dt("radiobutton.border.color"), ";\n    background: ").concat(dt("radiobutton.background"), ";\n    width: ").concat(dt("radiobutton.width"), ";\n    height: ").concat(dt("radiobutton.height"), ";\n    transition: background ").concat(dt("radiobutton.transition.duration"), ", color ").concat(dt("radiobutton.transition.duration"), ", border-color ").concat(dt("radiobutton.transition.duration"), ", box-shadow ").concat(dt("radiobutton.transition.duration"), ", outline-color ").concat(dt("radiobutton.transition.duration"), ";\n    outline-color: transparent;\n    box-shadow: ").concat(dt("radiobutton.shadow"), ";\n}\n\n.p-radiobutton-icon {\n    transition-duration: ").concat(dt("radiobutton.transition.duration"), ";\n    background: transparent;\n    font-size: ").concat(dt("radiobutton.icon.size"), ";\n    width: ").concat(dt("radiobutton.icon.size"), ";\n    height: ").concat(dt("radiobutton.icon.size"), ";\n    border-radius: 50%;\n    backface-visibility: hidden;\n    transform: translateZ(0) scale(0.1);\n}\n\n.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {\n    border-color: ").concat(dt("radiobutton.hover.border.color"), ";\n}\n\n.p-radiobutton-checked .p-radiobutton-box {\n    border-color: ").concat(dt("radiobutton.checked.border.color"), ";\n    background: ").concat(dt("radiobutton.checked.background"), ";\n}\n\n.p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {\n    background: ").concat(dt("radiobutton.icon.checked.color"), ";\n    transform: translateZ(0) scale(1, 1);\n    visibility: visible;\n}\n\n.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {\n    border-color: ").concat(dt("radiobutton.checked.hover.border.color"), ";\n    background: ").concat(dt("radiobutton.checked.hover.background"), ";\n}\n\n.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {\n    background: ").concat(dt("radiobutton.icon.checked.hover.color"), ";\n}\n\n.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {\n    border-color: ").concat(dt("radiobutton.focus.border.color"), ";\n    box-shadow: ").concat(dt("radiobutton.focus.ring.shadow"), ";\n    outline: ").concat(dt("radiobutton.focus.ring.width"), " ").concat(dt("radiobutton.focus.ring.style"), " ").concat(dt("radiobutton.focus.ring.color"), ";\n    outline-offset: ").concat(dt("radiobutton.focus.ring.offset"), ";\n}\n\n.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {\n    border-color: ").concat(dt("radiobutton.checked.focus.border.color"), ";\n}\n\n.p-radiobutton.p-invalid > .p-radiobutton-box {\n    border-color: ").concat(dt("radiobutton.invalid.border.color"), ";\n}\n\n.p-radiobutton.p-variant-filled .p-radiobutton-box {\n    background: ").concat(dt("radiobutton.filled.background"), ";\n}\n\n.p-radiobutton.p-variant-filled.p-radiobutton-checked .p-radiobutton-box {\n    background: ").concat(dt("radiobutton.checked.background"), ";\n}\n\n.p-radiobutton.p-variant-filled:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box {\n    background: ").concat(dt("radiobutton.checked.hover.background"), ";\n}\n\n.p-radiobutton.p-disabled {\n    opacity: 1;\n}\n\n.p-radiobutton.p-disabled .p-radiobutton-box {\n    background: ").concat(dt("radiobutton.disabled.background"), ";\n    border-color: ").concat(dt("radiobutton.checked.disabled.border.color"), ";\n}\n\n.p-radiobutton-checked.p-disabled .p-radiobutton-box .p-radiobutton-icon {\n    background: ").concat(dt("radiobutton.icon.disabled.color"), ";\n}\n\n.p-radiobutton-sm,\n.p-radiobutton-sm .p-radiobutton-box {\n    width: ").concat(dt("radiobutton.sm.width"), ";\n    height: ").concat(dt("radiobutton.sm.height"), ";\n}\n\n.p-radiobutton-sm .p-radiobutton-icon {\n    font-size: ").concat(dt("radiobutton.icon.sm.size"), ";\n    width: ").concat(dt("radiobutton.icon.sm.size"), ";\n    height: ").concat(dt("radiobutton.icon.sm.size"), ";\n}\n\n.p-radiobutton-lg,\n.p-radiobutton-lg .p-radiobutton-box {\n    width: ").concat(dt("radiobutton.lg.width"), ";\n    height: ").concat(dt("radiobutton.lg.height"), ";\n}\n\n.p-radiobutton-lg .p-radiobutton-icon {\n    font-size: ").concat(dt("radiobutton.icon.lg.size"), ";\n    width: ").concat(dt("radiobutton.icon.lg.size"), ";\n    height: ").concat(dt("radiobutton.icon.lg.size"), ";\n}\n");
};
var classes = {
  root: function root2(_ref2) {
    var instance = _ref2.instance, props = _ref2.props;
    return ["p-radiobutton p-component", {
      "p-radiobutton-checked": instance.checked,
      "p-disabled": props.disabled,
      "p-invalid": instance.$pcRadioButtonGroup ? instance.$pcRadioButtonGroup.$invalid : instance.$invalid,
      "p-variant-filled": instance.$variant === "filled",
      "p-radiobutton-sm p-inputfield-sm": props.size === "small",
      "p-radiobutton-lg p-inputfield-lg": props.size === "large"
    }];
  },
  box: "p-radiobutton-box",
  input: "p-radiobutton-input",
  icon: "p-radiobutton-icon"
};
var RadioButtonStyle = BaseStyle.extend({
  name: "radiobutton",
  theme: theme3,
  classes
});
var script$1 = {
  name: "BaseRadioButton",
  "extends": script$1$5,
  props: {
    value: null,
    binary: Boolean,
    readonly: {
      type: Boolean,
      "default": false
    },
    tabindex: {
      type: Number,
      "default": null
    },
    inputId: {
      type: String,
      "default": null
    },
    inputClass: {
      type: [String, Object],
      "default": null
    },
    inputStyle: {
      type: Object,
      "default": null
    },
    ariaLabelledby: {
      type: String,
      "default": null
    },
    ariaLabel: {
      type: String,
      "default": null
    }
  },
  style: RadioButtonStyle,
  provide: function provide4() {
    return {
      $pcRadioButton: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "RadioButton",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["change", "focus", "blur"],
  inject: {
    $pcRadioButtonGroup: {
      "default": void 0
    }
  },
  methods: {
    getPTOptions: function getPTOptions(key) {
      var _ptm = key === "root" ? this.ptmi : this.ptm;
      return _ptm(key, {
        context: {
          checked: this.checked,
          disabled: this.disabled
        }
      });
    },
    onChange: function onChange(event) {
      if (!this.disabled && !this.readonly) {
        var newModelValue = this.binary ? !this.checked : this.value;
        this.$pcRadioButtonGroup ? this.$pcRadioButtonGroup.writeValue(newModelValue, event) : this.writeValue(newModelValue, event);
        this.$emit("change", event);
      }
    },
    onFocus: function onFocus2(event) {
      this.$emit("focus", event);
    },
    onBlur: function onBlur2(event) {
      var _this$formField$onBlu, _this$formField;
      this.$emit("blur", event);
      (_this$formField$onBlu = (_this$formField = this.formField).onBlur) === null || _this$formField$onBlu === void 0 || _this$formField$onBlu.call(_this$formField, event);
    }
  },
  computed: {
    groupName: function groupName() {
      return this.$pcRadioButtonGroup ? this.$pcRadioButtonGroup.groupName : this.$formName;
    },
    checked: function checked() {
      var value = this.$pcRadioButtonGroup ? this.$pcRadioButtonGroup.d_value : this.d_value;
      return value != null && (this.binary ? !!value : equals(value, this.value));
    }
  }
};
var _hoisted_1 = ["data-p-checked", "data-p-disabled"];
var _hoisted_2 = ["id", "value", "name", "checked", "tabindex", "disabled", "readonly", "aria-labelledby", "aria-label", "aria-invalid"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, $options.getPTOptions("root"), {
    "data-p-checked": $options.checked,
    "data-p-disabled": _ctx.disabled
  }), [createElementVNode("input", mergeProps({
    id: _ctx.inputId,
    type: "radio",
    "class": [_ctx.cx("input"), _ctx.inputClass],
    style: _ctx.inputStyle,
    value: _ctx.value,
    name: $options.groupName,
    checked: $options.checked,
    tabindex: _ctx.tabindex,
    disabled: _ctx.disabled,
    readonly: _ctx.readonly,
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-label": _ctx.ariaLabel,
    "aria-invalid": _ctx.invalid || void 0,
    onFocus: _cache[0] || (_cache[0] = function() {
      return $options.onFocus && $options.onFocus.apply($options, arguments);
    }),
    onBlur: _cache[1] || (_cache[1] = function() {
      return $options.onBlur && $options.onBlur.apply($options, arguments);
    }),
    onChange: _cache[2] || (_cache[2] = function() {
      return $options.onChange && $options.onChange.apply($options, arguments);
    })
  }, $options.getPTOptions("input")), null, 16, _hoisted_2), createElementVNode("div", mergeProps({
    "class": _ctx.cx("box")
  }, $options.getPTOptions("box")), [createElementVNode("div", mergeProps({
    "class": _ctx.cx("icon")
  }, $options.getPTOptions("icon")), null, 16)], 16)], 16, _hoisted_1);
}
script.render = render;

export { script as a, script$2 as s };
//# sourceMappingURL=index-Dq5VkPko.mjs.map
