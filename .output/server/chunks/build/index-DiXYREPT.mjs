import { isVisible, getWidth, getHeight, findSingle, focus, isAndroid, getFirstFocusableElement, getLastFocusableElement, addStyle, relativePosition, getOuterWidth, absolutePosition, isTouchDevice, getFocusableElements, getScrollableParents } from '@primeuix/utils/dom';
import { resolveFieldData, isPrintableCharacter, isNotEmpty, equals, findLastIndex } from '@primeuix/utils/object';
import { ZIndex } from '@primeuix/utils/zindex';
import { B as BaseStyle, F as FilterService } from './server.mjs';
import { uuid } from '@primeuix/utils/uuid';
import { s as script$8, a as script$1$6 } from './index-BjfqnR8d.mjs';
import { mergeProps, openBlock, createElementBlock, createElementVNode, renderSlot, resolveComponent, Fragment, renderList, createCommentVNode, createVNode, resolveDirective, createTextVNode, toDisplayString, normalizeClass, createBlock, resolveDynamicComponent, withCtx, Transition, normalizeProps, createSlots, withDirectives } from 'vue';
import { s as script$3$2, c as script$1$5, a as script$2$1 } from './index-CPSBx0zQ.mjs';
import { s as script$9 } from './index-B0KNiV_3.mjs';
import { b as script$3$1 } from './index-CI0zemKa.mjs';
import { s as script$a } from './index-DWifVPgv.mjs';
import { EventBus } from '@primeuix/utils/eventbus';
import { R as Ripple } from './index-5ckDHAkT.mjs';

var theme$3 = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-inputtext {\n    font-family: inherit;\n    font-feature-settings: inherit;\n    font-size: 1rem;\n    color: ".concat(dt("inputtext.color"), ";\n    background: ").concat(dt("inputtext.background"), ";\n    padding-block: ").concat(dt("inputtext.padding.y"), ";\n    padding-inline: ").concat(dt("inputtext.padding.x"), ";\n    border: 1px solid ").concat(dt("inputtext.border.color"), ";\n    transition: background ").concat(dt("inputtext.transition.duration"), ", color ").concat(dt("inputtext.transition.duration"), ", border-color ").concat(dt("inputtext.transition.duration"), ", outline-color ").concat(dt("inputtext.transition.duration"), ", box-shadow ").concat(dt("inputtext.transition.duration"), ";\n    appearance: none;\n    border-radius: ").concat(dt("inputtext.border.radius"), ";\n    outline-color: transparent;\n    box-shadow: ").concat(dt("inputtext.shadow"), ";\n}\n\n.p-inputtext:enabled:hover {\n    border-color: ").concat(dt("inputtext.hover.border.color"), ";\n}\n\n.p-inputtext:enabled:focus {\n    border-color: ").concat(dt("inputtext.focus.border.color"), ";\n    box-shadow: ").concat(dt("inputtext.focus.ring.shadow"), ";\n    outline: ").concat(dt("inputtext.focus.ring.width"), " ").concat(dt("inputtext.focus.ring.style"), " ").concat(dt("inputtext.focus.ring.color"), ";\n    outline-offset: ").concat(dt("inputtext.focus.ring.offset"), ";\n}\n\n.p-inputtext.p-invalid {\n    border-color: ").concat(dt("inputtext.invalid.border.color"), ";\n}\n\n.p-inputtext.p-variant-filled {\n    background: ").concat(dt("inputtext.filled.background"), ";\n}\n\n.p-inputtext.p-variant-filled:enabled:hover {\n    background: ").concat(dt("inputtext.filled.hover.background"), ";\n}\n\n.p-inputtext.p-variant-filled:enabled:focus {\n    background: ").concat(dt("inputtext.filled.focus.background"), ";\n}\n\n.p-inputtext:disabled {\n    opacity: 1;\n    background: ").concat(dt("inputtext.disabled.background"), ";\n    color: ").concat(dt("inputtext.disabled.color"), ";\n}\n\n.p-inputtext::placeholder {\n    color: ").concat(dt("inputtext.placeholder.color"), ";\n}\n\n.p-inputtext.p-invalid::placeholder {\n    color: ").concat(dt("inputtext.invalid.placeholder.color"), ";\n}\n\n.p-inputtext-sm {\n    font-size: ").concat(dt("inputtext.sm.font.size"), ";\n    padding-block: ").concat(dt("inputtext.sm.padding.y"), ";\n    padding-inline: ").concat(dt("inputtext.sm.padding.x"), ";\n}\n\n.p-inputtext-lg {\n    font-size: ").concat(dt("inputtext.lg.font.size"), ";\n    padding-block: ").concat(dt("inputtext.lg.padding.y"), ";\n    padding-inline: ").concat(dt("inputtext.lg.padding.x"), ";\n}\n\n.p-inputtext-fluid {\n    width: 100%;\n}\n");
};
var classes$3 = {
  root: function root(_ref2) {
    var instance = _ref2.instance, props = _ref2.props;
    return ["p-inputtext p-component", {
      "p-filled": instance.$filled,
      "p-inputtext-sm p-inputfield-sm": props.size === "small",
      "p-inputtext-lg p-inputfield-lg": props.size === "large",
      "p-invalid": instance.$invalid,
      "p-variant-filled": instance.$variant === "filled",
      "p-inputtext-fluid": instance.$fluid
    }];
  }
};
var InputTextStyle = BaseStyle.extend({
  name: "inputtext",
  theme: theme$3,
  classes: classes$3
});
var script$1$4 = {
  name: "BaseInputText",
  "extends": script$a,
  style: InputTextStyle,
  provide: function provide() {
    return {
      $pcInputText: this,
      $parentInstance: this
    };
  }
};
var script$7 = {
  name: "InputText",
  "extends": script$1$4,
  inheritAttrs: false,
  methods: {
    onInput: function onInput(event) {
      this.writeValue(event.target.value, event);
    }
  },
  computed: {
    attrs: function attrs() {
      return mergeProps(this.ptmi("root", {
        context: {
          filled: this.$filled,
          disabled: this.disabled
        }
      }), this.formField);
    }
  }
};
var _hoisted_1$2 = ["value", "disabled", "aria-invalid"];
function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("input", mergeProps({
    type: "text",
    "class": _ctx.cx("root"),
    value: _ctx.d_value,
    disabled: _ctx.disabled,
    "aria-invalid": _ctx.$invalid || void 0,
    onInput: _cache[0] || (_cache[0] = function() {
      return $options.onInput && $options.onInput.apply($options, arguments);
    })
  }, $options.attrs), null, 16, _hoisted_1$2);
}
script$7.render = render$6;
function _typeof$1$1(o) {
  "@babel/helpers - typeof";
  return _typeof$1$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$1$1(o);
}
function _classCallCheck$1(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties$1(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey$1$1(o.key), o);
  }
}
function _createClass$1(e, r, t) {
  return r && _defineProperties$1(e.prototype, r), Object.defineProperty(e, "prototype", { writable: false }), e;
}
function _toPropertyKey$1$1(t) {
  var i = _toPrimitive$1$1(t, "string");
  return "symbol" == _typeof$1$1(i) ? i : i + "";
}
function _toPrimitive$1$1(t, r) {
  if ("object" != _typeof$1$1(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$1$1(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var ConnectedOverlayScrollHandler = /* @__PURE__ */ function() {
  function ConnectedOverlayScrollHandler2(element) {
    var listener = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function() {
    };
    _classCallCheck$1(this, ConnectedOverlayScrollHandler2);
    this.element = element;
    this.listener = listener;
  }
  return _createClass$1(ConnectedOverlayScrollHandler2, [{
    key: "bindScrollListener",
    value: function bindScrollListener2() {
      this.scrollableParents = getScrollableParents(this.element);
      for (var i = 0; i < this.scrollableParents.length; i++) {
        this.scrollableParents[i].addEventListener("scroll", this.listener);
      }
    }
  }, {
    key: "unbindScrollListener",
    value: function unbindScrollListener2() {
      if (this.scrollableParents) {
        for (var i = 0; i < this.scrollableParents.length; i++) {
          this.scrollableParents[i].removeEventListener("scroll", this.listener);
        }
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.unbindScrollListener();
      this.element = null;
      this.listener = null;
      this.scrollableParents = null;
    }
  }]);
}();
function UniqueComponentId() {
  var prefix = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "pv_id_";
  return uuid(prefix);
}
var script$6 = {
  name: "BlankIcon",
  "extends": script$8
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
  "extends": script$8
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
var theme$2 = function theme2(_ref) {
  var dt = _ref.dt;
  return "\n.p-iconfield {\n    position: relative;\n}\n\n.p-inputicon {\n    position: absolute;\n    top: 50%;\n    margin-top: calc(-1 * (".concat(dt("icon.size"), " / 2));\n    color: ").concat(dt("iconfield.icon.color"), ";\n    line-height: 1;\n}\n\n.p-iconfield .p-inputicon:first-child {\n    inset-inline-start: ").concat(dt("form.field.padding.x"), ";\n}\n\n.p-iconfield .p-inputicon:last-child {\n    inset-inline-end: ").concat(dt("form.field.padding.x"), ";\n}\n\n.p-iconfield .p-inputtext:not(:first-child) {\n    padding-inline-start: calc((").concat(dt("form.field.padding.x"), " * 2) + ").concat(dt("icon.size"), ");\n}\n\n.p-iconfield .p-inputtext:not(:last-child) {\n    padding-inline-end: calc((").concat(dt("form.field.padding.x"), " * 2) + ").concat(dt("icon.size"), ");\n}\n\n.p-iconfield:has(.p-inputfield-sm) .p-inputicon {\n    font-size: ").concat(dt("form.field.sm.font.size"), ";\n    width: ").concat(dt("form.field.sm.font.size"), ";\n    height: ").concat(dt("form.field.sm.font.size"), ";\n    margin-top: calc(-1 * (").concat(dt("form.field.sm.font.size"), " / 2));\n}\n\n.p-iconfield:has(.p-inputfield-lg) .p-inputicon {\n    font-size: ").concat(dt("form.field.lg.font.size"), ";\n    width: ").concat(dt("form.field.lg.font.size"), ";\n    height: ").concat(dt("form.field.lg.font.size"), ";\n    margin-top: calc(-1 * (").concat(dt("form.field.lg.font.size"), " / 2));\n}\n");
};
var classes$2 = {
  root: "p-iconfield"
};
var IconFieldStyle = BaseStyle.extend({
  name: "iconfield",
  theme: theme$2,
  classes: classes$2
});
var script$1$3 = {
  name: "BaseIconField",
  "extends": script$1$6,
  style: IconFieldStyle,
  provide: function provide2() {
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
var classes$1 = {
  root: "p-inputicon"
};
var InputIconStyle = BaseStyle.extend({
  name: "inputicon",
  classes: classes$1
});
var script$1$2 = {
  name: "BaseInputIcon",
  "extends": script$1$6,
  style: InputIconStyle,
  props: {
    "class": null
  },
  provide: function provide3() {
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
var OverlayEventBus = EventBus();
var theme$1 = function theme3(_ref) {
  var dt = _ref.dt;
  return "\n.p-virtualscroller-loader {\n    background: ".concat(dt("virtualscroller.loader.mask.background"), ";\n    color: ").concat(dt("virtualscroller.loader.mask.color"), ";\n}\n\n.p-virtualscroller-loading-icon {\n    font-size: ").concat(dt("virtualscroller.loader.icon.size"), ";\n    width: ").concat(dt("virtualscroller.loader.icon.size"), ";\n    height: ").concat(dt("virtualscroller.loader.icon.size"), ";\n}\n");
};
var css = "\n.p-virtualscroller {\n    position: relative;\n    overflow: auto;\n    contain: strict;\n    transform: translateZ(0);\n    will-change: scroll-position;\n    outline: 0 none;\n}\n\n.p-virtualscroller-content {\n    position: absolute;\n    top: 0;\n    left: 0;\n    min-height: 100%;\n    min-width: 100%;\n    will-change: transform;\n}\n\n.p-virtualscroller-spacer {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 1px;\n    width: 1px;\n    transform-origin: 0 0;\n    pointer-events: none;\n}\n\n.p-virtualscroller-loader {\n    position: sticky;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n\n.p-virtualscroller-loader-mask {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.p-virtualscroller-horizontal > .p-virtualscroller-content {\n    display: flex;\n}\n\n.p-virtualscroller-inline .p-virtualscroller-content {\n    position: static;\n}\n";
var VirtualScrollerStyle = BaseStyle.extend({
  name: "virtualscroller",
  css,
  theme: theme$1
});
var script$1$1 = {
  name: "BaseVirtualScroller",
  "extends": script$1$6,
  props: {
    id: {
      type: String,
      "default": null
    },
    style: null,
    "class": null,
    items: {
      type: Array,
      "default": null
    },
    itemSize: {
      type: [Number, Array],
      "default": 0
    },
    scrollHeight: null,
    scrollWidth: null,
    orientation: {
      type: String,
      "default": "vertical"
    },
    numToleratedItems: {
      type: Number,
      "default": null
    },
    delay: {
      type: Number,
      "default": 0
    },
    resizeDelay: {
      type: Number,
      "default": 10
    },
    lazy: {
      type: Boolean,
      "default": false
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    loaderDisabled: {
      type: Boolean,
      "default": false
    },
    columns: {
      type: Array,
      "default": null
    },
    loading: {
      type: Boolean,
      "default": false
    },
    showSpacer: {
      type: Boolean,
      "default": true
    },
    showLoader: {
      type: Boolean,
      "default": false
    },
    tabindex: {
      type: Number,
      "default": 0
    },
    inline: {
      type: Boolean,
      "default": false
    },
    step: {
      type: Number,
      "default": 0
    },
    appendOnly: {
      type: Boolean,
      "default": false
    },
    autoSize: {
      type: Boolean,
      "default": false
    }
  },
  style: VirtualScrollerStyle,
  provide: function provide4() {
    return {
      $pcVirtualScroller: this,
      $parentInstance: this
    };
  },
  beforeMount: function beforeMount() {
    var _this$$primevueConfig;
    VirtualScrollerStyle.loadCSS({
      nonce: (_this$$primevueConfig = this.$primevueConfig) === null || _this$$primevueConfig === void 0 || (_this$$primevueConfig = _this$$primevueConfig.csp) === null || _this$$primevueConfig === void 0 ? void 0 : _this$$primevueConfig.nonce
    });
  }
};
function _typeof$1(o) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$1(o);
}
function ownKeys$1(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$1(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$1(Object(t), true).forEach(function(r2) {
      _defineProperty$1(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$1(e, r, t) {
  return (r = _toPropertyKey$1(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey$1(t) {
  var i = _toPrimitive$1(t, "string");
  return "symbol" == _typeof$1(i) ? i : i + "";
}
function _toPrimitive$1(t, r) {
  if ("object" != _typeof$1(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof$1(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var script$2 = {
  name: "VirtualScroller",
  "extends": script$1$1,
  inheritAttrs: false,
  emits: ["update:numToleratedItems", "scroll", "scroll-index-change", "lazy-load"],
  data: function data() {
    var both = this.isBoth();
    return {
      first: both ? {
        rows: 0,
        cols: 0
      } : 0,
      last: both ? {
        rows: 0,
        cols: 0
      } : 0,
      page: both ? {
        rows: 0,
        cols: 0
      } : 0,
      numItemsInViewport: both ? {
        rows: 0,
        cols: 0
      } : 0,
      lastScrollPos: both ? {
        top: 0,
        left: 0
      } : 0,
      d_numToleratedItems: this.numToleratedItems,
      d_loading: this.loading,
      loaderArr: [],
      spacerStyle: {},
      contentStyle: {}
    };
  },
  element: null,
  content: null,
  lastScrollPos: null,
  scrollTimeout: null,
  resizeTimeout: null,
  defaultWidth: 0,
  defaultHeight: 0,
  defaultContentWidth: 0,
  defaultContentHeight: 0,
  isRangeChanged: false,
  lazyLoadState: {},
  resizeListener: null,
  initialized: false,
  watch: {
    numToleratedItems: function numToleratedItems(newValue) {
      this.d_numToleratedItems = newValue;
    },
    loading: function loading(newValue, oldValue) {
      if (this.lazy && newValue !== oldValue && newValue !== this.d_loading) {
        this.d_loading = newValue;
      }
    },
    items: function items(newValue, oldValue) {
      if (!oldValue || oldValue.length !== (newValue || []).length) {
        this.init();
        this.calculateAutoSize();
      }
    },
    itemSize: function itemSize() {
      this.init();
      this.calculateAutoSize();
    },
    orientation: function orientation() {
      this.lastScrollPos = this.isBoth() ? {
        top: 0,
        left: 0
      } : 0;
    },
    scrollHeight: function scrollHeight() {
      this.init();
      this.calculateAutoSize();
    },
    scrollWidth: function scrollWidth() {
      this.init();
      this.calculateAutoSize();
    }
  },
  mounted: function mounted() {
    this.viewInit();
    this.lastScrollPos = this.isBoth() ? {
      top: 0,
      left: 0
    } : 0;
    this.lazyLoadState = this.lazyLoadState || {};
  },
  updated: function updated() {
    !this.initialized && this.viewInit();
  },
  unmounted: function unmounted() {
    this.unbindResizeListener();
    this.initialized = false;
  },
  methods: {
    viewInit: function viewInit() {
      if (isVisible(this.element)) {
        this.setContentEl(this.content);
        this.init();
        this.calculateAutoSize();
        this.bindResizeListener();
        this.defaultWidth = getWidth(this.element);
        this.defaultHeight = getHeight(this.element);
        this.defaultContentWidth = getWidth(this.content);
        this.defaultContentHeight = getHeight(this.content);
        this.initialized = true;
      }
    },
    init: function init() {
      if (!this.disabled) {
        this.setSize();
        this.calculateOptions();
        this.setSpacerSize();
      }
    },
    isVertical: function isVertical() {
      return this.orientation === "vertical";
    },
    isHorizontal: function isHorizontal() {
      return this.orientation === "horizontal";
    },
    isBoth: function isBoth() {
      return this.orientation === "both";
    },
    scrollTo: function scrollTo(options2) {
      this.element && this.element.scrollTo(options2);
    },
    scrollToIndex: function scrollToIndex(index) {
      var _this = this;
      var behavior = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "auto";
      var both = this.isBoth();
      var horizontal = this.isHorizontal();
      var valid = both ? index.every(function(i) {
        return i > -1;
      }) : index > -1;
      if (valid) {
        var first = this.first;
        var _this$element = this.element, _this$element$scrollT = _this$element.scrollTop, scrollTop = _this$element$scrollT === void 0 ? 0 : _this$element$scrollT, _this$element$scrollL = _this$element.scrollLeft, scrollLeft = _this$element$scrollL === void 0 ? 0 : _this$element$scrollL;
        var _this$calculateNumIte = this.calculateNumItems(), numToleratedItems2 = _this$calculateNumIte.numToleratedItems;
        var contentPos = this.getContentPosition();
        var itemSize2 = this.itemSize;
        var calculateFirst = function calculateFirst2() {
          var _index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
          var _numT = arguments.length > 1 ? arguments[1] : void 0;
          return _index <= _numT ? 0 : _index;
        };
        var calculateCoord = function calculateCoord2(_first, _size, _cpos) {
          return _first * _size + _cpos;
        };
        var scrollTo2 = function scrollTo3() {
          var left = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
          var top = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          return _this.scrollTo({
            left,
            top,
            behavior
          });
        };
        var newFirst = both ? {
          rows: 0,
          cols: 0
        } : 0;
        var isRangeChanged = false, isScrollChanged = false;
        if (both) {
          newFirst = {
            rows: calculateFirst(index[0], numToleratedItems2[0]),
            cols: calculateFirst(index[1], numToleratedItems2[1])
          };
          scrollTo2(calculateCoord(newFirst.cols, itemSize2[1], contentPos.left), calculateCoord(newFirst.rows, itemSize2[0], contentPos.top));
          isScrollChanged = this.lastScrollPos.top !== scrollTop || this.lastScrollPos.left !== scrollLeft;
          isRangeChanged = newFirst.rows !== first.rows || newFirst.cols !== first.cols;
        } else {
          newFirst = calculateFirst(index, numToleratedItems2);
          horizontal ? scrollTo2(calculateCoord(newFirst, itemSize2, contentPos.left), scrollTop) : scrollTo2(scrollLeft, calculateCoord(newFirst, itemSize2, contentPos.top));
          isScrollChanged = this.lastScrollPos !== (horizontal ? scrollLeft : scrollTop);
          isRangeChanged = newFirst !== first;
        }
        this.isRangeChanged = isRangeChanged;
        isScrollChanged && (this.first = newFirst);
      }
    },
    scrollInView: function scrollInView(index, to) {
      var _this2 = this;
      var behavior = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "auto";
      if (to) {
        var both = this.isBoth();
        var horizontal = this.isHorizontal();
        var valid = both ? index.every(function(i) {
          return i > -1;
        }) : index > -1;
        if (valid) {
          var _this$getRenderedRang = this.getRenderedRange(), first = _this$getRenderedRang.first, viewport = _this$getRenderedRang.viewport;
          var scrollTo2 = function scrollTo3() {
            var left = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
            var top = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
            return _this2.scrollTo({
              left,
              top,
              behavior
            });
          };
          var isToStart = to === "to-start";
          var isToEnd = to === "to-end";
          if (isToStart) {
            if (both) {
              if (viewport.first.rows - first.rows > index[0]) {
                scrollTo2(viewport.first.cols * this.itemSize[1], (viewport.first.rows - 1) * this.itemSize[0]);
              } else if (viewport.first.cols - first.cols > index[1]) {
                scrollTo2((viewport.first.cols - 1) * this.itemSize[1], viewport.first.rows * this.itemSize[0]);
              }
            } else {
              if (viewport.first - first > index) {
                var pos = (viewport.first - 1) * this.itemSize;
                horizontal ? scrollTo2(pos, 0) : scrollTo2(0, pos);
              }
            }
          } else if (isToEnd) {
            if (both) {
              if (viewport.last.rows - first.rows <= index[0] + 1) {
                scrollTo2(viewport.first.cols * this.itemSize[1], (viewport.first.rows + 1) * this.itemSize[0]);
              } else if (viewport.last.cols - first.cols <= index[1] + 1) {
                scrollTo2((viewport.first.cols + 1) * this.itemSize[1], viewport.first.rows * this.itemSize[0]);
              }
            } else {
              if (viewport.last - first <= index + 1) {
                var _pos2 = (viewport.first + 1) * this.itemSize;
                horizontal ? scrollTo2(_pos2, 0) : scrollTo2(0, _pos2);
              }
            }
          }
        }
      } else {
        this.scrollToIndex(index, behavior);
      }
    },
    getRenderedRange: function getRenderedRange() {
      var calculateFirstInViewport = function calculateFirstInViewport2(_pos, _size) {
        return Math.floor(_pos / (_size || _pos));
      };
      var firstInViewport = this.first;
      var lastInViewport = 0;
      if (this.element) {
        var both = this.isBoth();
        var horizontal = this.isHorizontal();
        var _this$element2 = this.element, scrollTop = _this$element2.scrollTop, scrollLeft = _this$element2.scrollLeft;
        if (both) {
          firstInViewport = {
            rows: calculateFirstInViewport(scrollTop, this.itemSize[0]),
            cols: calculateFirstInViewport(scrollLeft, this.itemSize[1])
          };
          lastInViewport = {
            rows: firstInViewport.rows + this.numItemsInViewport.rows,
            cols: firstInViewport.cols + this.numItemsInViewport.cols
          };
        } else {
          var scrollPos = horizontal ? scrollLeft : scrollTop;
          firstInViewport = calculateFirstInViewport(scrollPos, this.itemSize);
          lastInViewport = firstInViewport + this.numItemsInViewport;
        }
      }
      return {
        first: this.first,
        last: this.last,
        viewport: {
          first: firstInViewport,
          last: lastInViewport
        }
      };
    },
    calculateNumItems: function calculateNumItems() {
      var both = this.isBoth();
      var horizontal = this.isHorizontal();
      var itemSize2 = this.itemSize;
      var contentPos = this.getContentPosition();
      var contentWidth = this.element ? this.element.offsetWidth - contentPos.left : 0;
      var contentHeight = this.element ? this.element.offsetHeight - contentPos.top : 0;
      var calculateNumItemsInViewport = function calculateNumItemsInViewport2(_contentSize, _itemSize) {
        return Math.ceil(_contentSize / (_itemSize || _contentSize));
      };
      var calculateNumToleratedItems = function calculateNumToleratedItems2(_numItems) {
        return Math.ceil(_numItems / 2);
      };
      var numItemsInViewport = both ? {
        rows: calculateNumItemsInViewport(contentHeight, itemSize2[0]),
        cols: calculateNumItemsInViewport(contentWidth, itemSize2[1])
      } : calculateNumItemsInViewport(horizontal ? contentWidth : contentHeight, itemSize2);
      var numToleratedItems2 = this.d_numToleratedItems || (both ? [calculateNumToleratedItems(numItemsInViewport.rows), calculateNumToleratedItems(numItemsInViewport.cols)] : calculateNumToleratedItems(numItemsInViewport));
      return {
        numItemsInViewport,
        numToleratedItems: numToleratedItems2
      };
    },
    calculateOptions: function calculateOptions() {
      var _this3 = this;
      var both = this.isBoth();
      var first = this.first;
      var _this$calculateNumIte2 = this.calculateNumItems(), numItemsInViewport = _this$calculateNumIte2.numItemsInViewport, numToleratedItems2 = _this$calculateNumIte2.numToleratedItems;
      var calculateLast = function calculateLast2(_first, _num, _numT) {
        var _isCols = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
        return _this3.getLast(_first + _num + (_first < _numT ? 2 : 3) * _numT, _isCols);
      };
      var last = both ? {
        rows: calculateLast(first.rows, numItemsInViewport.rows, numToleratedItems2[0]),
        cols: calculateLast(first.cols, numItemsInViewport.cols, numToleratedItems2[1], true)
      } : calculateLast(first, numItemsInViewport, numToleratedItems2);
      this.last = last;
      this.numItemsInViewport = numItemsInViewport;
      this.d_numToleratedItems = numToleratedItems2;
      this.$emit("update:numToleratedItems", this.d_numToleratedItems);
      if (this.showLoader) {
        this.loaderArr = both ? Array.from({
          length: numItemsInViewport.rows
        }).map(function() {
          return Array.from({
            length: numItemsInViewport.cols
          });
        }) : Array.from({
          length: numItemsInViewport
        });
      }
      if (this.lazy) {
        Promise.resolve().then(function() {
          var _this3$items;
          _this3.lazyLoadState = {
            first: _this3.step ? both ? {
              rows: 0,
              cols: first.cols
            } : 0 : first,
            last: Math.min(_this3.step ? _this3.step : last, ((_this3$items = _this3.items) === null || _this3$items === void 0 ? void 0 : _this3$items.length) || 0)
          };
          _this3.$emit("lazy-load", _this3.lazyLoadState);
        });
      }
    },
    calculateAutoSize: function calculateAutoSize() {
      var _this4 = this;
      if (this.autoSize && !this.d_loading) {
        Promise.resolve().then(function() {
          if (_this4.content) {
            var both = _this4.isBoth();
            var horizontal = _this4.isHorizontal();
            var vertical = _this4.isVertical();
            _this4.content.style.minHeight = _this4.content.style.minWidth = "auto";
            _this4.content.style.position = "relative";
            _this4.element.style.contain = "none";
            var _ref = [getWidth(_this4.element), getHeight(_this4.element)], width = _ref[0], height = _ref[1];
            (both || horizontal) && (_this4.element.style.width = width < _this4.defaultWidth ? width + "px" : _this4.scrollWidth || _this4.defaultWidth + "px");
            (both || vertical) && (_this4.element.style.height = height < _this4.defaultHeight ? height + "px" : _this4.scrollHeight || _this4.defaultHeight + "px");
            _this4.content.style.minHeight = _this4.content.style.minWidth = "";
            _this4.content.style.position = "";
            _this4.element.style.contain = "";
          }
        });
      }
    },
    getLast: function getLast() {
      var _ref2, _this$items;
      var last = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var isCols = arguments.length > 1 ? arguments[1] : void 0;
      return this.items ? Math.min(isCols ? ((_ref2 = this.columns || this.items[0]) === null || _ref2 === void 0 ? void 0 : _ref2.length) || 0 : ((_this$items = this.items) === null || _this$items === void 0 ? void 0 : _this$items.length) || 0, last) : 0;
    },
    getContentPosition: function getContentPosition() {
      if (this.content) {
        var style = getComputedStyle(this.content);
        var left = parseFloat(style.paddingLeft) + Math.max(parseFloat(style.left) || 0, 0);
        var right = parseFloat(style.paddingRight) + Math.max(parseFloat(style.right) || 0, 0);
        var top = parseFloat(style.paddingTop) + Math.max(parseFloat(style.top) || 0, 0);
        var bottom = parseFloat(style.paddingBottom) + Math.max(parseFloat(style.bottom) || 0, 0);
        return {
          left,
          right,
          top,
          bottom,
          x: left + right,
          y: top + bottom
        };
      }
      return {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        x: 0,
        y: 0
      };
    },
    setSize: function setSize() {
      var _this5 = this;
      if (this.element) {
        var both = this.isBoth();
        var horizontal = this.isHorizontal();
        var parentElement = this.element.parentElement;
        var width = this.scrollWidth || "".concat(this.element.offsetWidth || parentElement.offsetWidth, "px");
        var height = this.scrollHeight || "".concat(this.element.offsetHeight || parentElement.offsetHeight, "px");
        var setProp = function setProp2(_name, _value) {
          return _this5.element.style[_name] = _value;
        };
        if (both || horizontal) {
          setProp("height", height);
          setProp("width", width);
        } else {
          setProp("height", height);
        }
      }
    },
    setSpacerSize: function setSpacerSize() {
      var _this6 = this;
      var items2 = this.items;
      if (items2) {
        var both = this.isBoth();
        var horizontal = this.isHorizontal();
        var contentPos = this.getContentPosition();
        var setProp = function setProp2(_name, _value, _size) {
          var _cpos = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
          return _this6.spacerStyle = _objectSpread$1(_objectSpread$1({}, _this6.spacerStyle), _defineProperty$1({}, "".concat(_name), (_value || []).length * _size + _cpos + "px"));
        };
        if (both) {
          setProp("height", items2, this.itemSize[0], contentPos.y);
          setProp("width", this.columns || items2[1], this.itemSize[1], contentPos.x);
        } else {
          horizontal ? setProp("width", this.columns || items2, this.itemSize, contentPos.x) : setProp("height", items2, this.itemSize, contentPos.y);
        }
      }
    },
    setContentPosition: function setContentPosition(pos) {
      var _this7 = this;
      if (this.content && !this.appendOnly) {
        var both = this.isBoth();
        var horizontal = this.isHorizontal();
        var first = pos ? pos.first : this.first;
        var calculateTranslateVal = function calculateTranslateVal2(_first, _size) {
          return _first * _size;
        };
        var setTransform = function setTransform2() {
          var _x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
          var _y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          return _this7.contentStyle = _objectSpread$1(_objectSpread$1({}, _this7.contentStyle), {
            transform: "translate3d(".concat(_x, "px, ").concat(_y, "px, 0)")
          });
        };
        if (both) {
          setTransform(calculateTranslateVal(first.cols, this.itemSize[1]), calculateTranslateVal(first.rows, this.itemSize[0]));
        } else {
          var translateVal = calculateTranslateVal(first, this.itemSize);
          horizontal ? setTransform(translateVal, 0) : setTransform(0, translateVal);
        }
      }
    },
    onScrollPositionChange: function onScrollPositionChange(event) {
      var _this8 = this;
      var target = event.target;
      var both = this.isBoth();
      var horizontal = this.isHorizontal();
      var contentPos = this.getContentPosition();
      var calculateScrollPos = function calculateScrollPos2(_pos, _cpos) {
        return _pos ? _pos > _cpos ? _pos - _cpos : _pos : 0;
      };
      var calculateCurrentIndex = function calculateCurrentIndex2(_pos, _size) {
        return Math.floor(_pos / (_size || _pos));
      };
      var calculateTriggerIndex = function calculateTriggerIndex2(_currentIndex, _first, _last, _num, _numT, _isScrollDownOrRight) {
        return _currentIndex <= _numT ? _numT : _isScrollDownOrRight ? _last - _num - _numT : _first + _numT - 1;
      };
      var calculateFirst = function calculateFirst2(_currentIndex, _triggerIndex, _first, _last, _num, _numT, _isScrollDownOrRight) {
        if (_currentIndex <= _numT) return 0;
        else return Math.max(0, _isScrollDownOrRight ? _currentIndex < _triggerIndex ? _first : _currentIndex - _numT : _currentIndex > _triggerIndex ? _first : _currentIndex - 2 * _numT);
      };
      var calculateLast = function calculateLast2(_currentIndex, _first, _last, _num, _numT, _isCols) {
        var lastValue = _first + _num + 2 * _numT;
        if (_currentIndex >= _numT) {
          lastValue += _numT + 1;
        }
        return _this8.getLast(lastValue, _isCols);
      };
      var scrollTop = calculateScrollPos(target.scrollTop, contentPos.top);
      var scrollLeft = calculateScrollPos(target.scrollLeft, contentPos.left);
      var newFirst = both ? {
        rows: 0,
        cols: 0
      } : 0;
      var newLast = this.last;
      var isRangeChanged = false;
      var newScrollPos = this.lastScrollPos;
      if (both) {
        var isScrollDown = this.lastScrollPos.top <= scrollTop;
        var isScrollRight = this.lastScrollPos.left <= scrollLeft;
        if (!this.appendOnly || this.appendOnly && (isScrollDown || isScrollRight)) {
          var currentIndex = {
            rows: calculateCurrentIndex(scrollTop, this.itemSize[0]),
            cols: calculateCurrentIndex(scrollLeft, this.itemSize[1])
          };
          var triggerIndex = {
            rows: calculateTriggerIndex(currentIndex.rows, this.first.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0], isScrollDown),
            cols: calculateTriggerIndex(currentIndex.cols, this.first.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], isScrollRight)
          };
          newFirst = {
            rows: calculateFirst(currentIndex.rows, triggerIndex.rows, this.first.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0], isScrollDown),
            cols: calculateFirst(currentIndex.cols, triggerIndex.cols, this.first.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], isScrollRight)
          };
          newLast = {
            rows: calculateLast(currentIndex.rows, newFirst.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0]),
            cols: calculateLast(currentIndex.cols, newFirst.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], true)
          };
          isRangeChanged = newFirst.rows !== this.first.rows || newLast.rows !== this.last.rows || newFirst.cols !== this.first.cols || newLast.cols !== this.last.cols || this.isRangeChanged;
          newScrollPos = {
            top: scrollTop,
            left: scrollLeft
          };
        }
      } else {
        var scrollPos = horizontal ? scrollLeft : scrollTop;
        var isScrollDownOrRight = this.lastScrollPos <= scrollPos;
        if (!this.appendOnly || this.appendOnly && isScrollDownOrRight) {
          var _currentIndex2 = calculateCurrentIndex(scrollPos, this.itemSize);
          var _triggerIndex2 = calculateTriggerIndex(_currentIndex2, this.first, this.last, this.numItemsInViewport, this.d_numToleratedItems, isScrollDownOrRight);
          newFirst = calculateFirst(_currentIndex2, _triggerIndex2, this.first, this.last, this.numItemsInViewport, this.d_numToleratedItems, isScrollDownOrRight);
          newLast = calculateLast(_currentIndex2, newFirst, this.last, this.numItemsInViewport, this.d_numToleratedItems);
          isRangeChanged = newFirst !== this.first || newLast !== this.last || this.isRangeChanged;
          newScrollPos = scrollPos;
        }
      }
      return {
        first: newFirst,
        last: newLast,
        isRangeChanged,
        scrollPos: newScrollPos
      };
    },
    onScrollChange: function onScrollChange(event) {
      var _this$onScrollPositio = this.onScrollPositionChange(event), first = _this$onScrollPositio.first, last = _this$onScrollPositio.last, isRangeChanged = _this$onScrollPositio.isRangeChanged, scrollPos = _this$onScrollPositio.scrollPos;
      if (isRangeChanged) {
        var newState = {
          first,
          last
        };
        this.setContentPosition(newState);
        this.first = first;
        this.last = last;
        this.lastScrollPos = scrollPos;
        this.$emit("scroll-index-change", newState);
        if (this.lazy && this.isPageChanged(first)) {
          var _this$items2, _this$items3;
          var lazyLoadState = {
            first: this.step ? Math.min(this.getPageByFirst(first) * this.step, (((_this$items2 = this.items) === null || _this$items2 === void 0 ? void 0 : _this$items2.length) || 0) - this.step) : first,
            last: Math.min(this.step ? (this.getPageByFirst(first) + 1) * this.step : last, ((_this$items3 = this.items) === null || _this$items3 === void 0 ? void 0 : _this$items3.length) || 0)
          };
          var isLazyStateChanged = this.lazyLoadState.first !== lazyLoadState.first || this.lazyLoadState.last !== lazyLoadState.last;
          isLazyStateChanged && this.$emit("lazy-load", lazyLoadState);
          this.lazyLoadState = lazyLoadState;
        }
      }
    },
    onScroll: function onScroll(event) {
      var _this9 = this;
      this.$emit("scroll", event);
      if (this.delay) {
        if (this.scrollTimeout) {
          clearTimeout(this.scrollTimeout);
        }
        if (this.isPageChanged()) {
          if (!this.d_loading && this.showLoader) {
            var _this$onScrollPositio2 = this.onScrollPositionChange(event), isRangeChanged = _this$onScrollPositio2.isRangeChanged;
            var changed = isRangeChanged || (this.step ? this.isPageChanged() : false);
            changed && (this.d_loading = true);
          }
          this.scrollTimeout = setTimeout(function() {
            _this9.onScrollChange(event);
            if (_this9.d_loading && _this9.showLoader && (!_this9.lazy || _this9.loading === void 0)) {
              _this9.d_loading = false;
              _this9.page = _this9.getPageByFirst();
            }
          }, this.delay);
        }
      } else {
        this.onScrollChange(event);
      }
    },
    onResize: function onResize() {
      var _this10 = this;
      if (this.resizeTimeout) {
        clearTimeout(this.resizeTimeout);
      }
      this.resizeTimeout = setTimeout(function() {
        if (isVisible(_this10.element)) {
          var both = _this10.isBoth();
          var vertical = _this10.isVertical();
          var horizontal = _this10.isHorizontal();
          var _ref3 = [getWidth(_this10.element), getHeight(_this10.element)], width = _ref3[0], height = _ref3[1];
          var isDiffWidth = width !== _this10.defaultWidth, isDiffHeight = height !== _this10.defaultHeight;
          var reinit = both ? isDiffWidth || isDiffHeight : horizontal ? isDiffWidth : vertical ? isDiffHeight : false;
          if (reinit) {
            _this10.d_numToleratedItems = _this10.numToleratedItems;
            _this10.defaultWidth = width;
            _this10.defaultHeight = height;
            _this10.defaultContentWidth = getWidth(_this10.content);
            _this10.defaultContentHeight = getHeight(_this10.content);
            _this10.init();
          }
        }
      }, this.resizeDelay);
    },
    bindResizeListener: function bindResizeListener() {
      if (!this.resizeListener) {
        this.resizeListener = this.onResize.bind(this);
        (void 0).addEventListener("resize", this.resizeListener);
        (void 0).addEventListener("orientationchange", this.resizeListener);
      }
    },
    unbindResizeListener: function unbindResizeListener() {
      if (this.resizeListener) {
        (void 0).removeEventListener("resize", this.resizeListener);
        (void 0).removeEventListener("orientationchange", this.resizeListener);
        this.resizeListener = null;
      }
    },
    getOptions: function getOptions(renderedIndex) {
      var count = (this.items || []).length;
      var index = this.isBoth() ? this.first.rows + renderedIndex : this.first + renderedIndex;
      return {
        index,
        count,
        first: index === 0,
        last: index === count - 1,
        even: index % 2 === 0,
        odd: index % 2 !== 0
      };
    },
    getLoaderOptions: function getLoaderOptions(index, extOptions) {
      var count = this.loaderArr.length;
      return _objectSpread$1({
        index,
        count,
        first: index === 0,
        last: index === count - 1,
        even: index % 2 === 0,
        odd: index % 2 !== 0
      }, extOptions);
    },
    getPageByFirst: function getPageByFirst(first) {
      return Math.floor(((first !== null && first !== void 0 ? first : this.first) + this.d_numToleratedItems * 4) / (this.step || 1));
    },
    isPageChanged: function isPageChanged(first) {
      return this.step && !this.lazy ? this.page !== this.getPageByFirst(first !== null && first !== void 0 ? first : this.first) : true;
    },
    setContentEl: function setContentEl(el) {
      this.content = el || this.content || findSingle(this.element, '[data-pc-section="content"]');
    },
    elementRef: function elementRef(el) {
      this.element = el;
    },
    contentRef: function contentRef(el) {
      this.content = el;
    }
  },
  computed: {
    containerClass: function containerClass2() {
      return ["p-virtualscroller", this["class"], {
        "p-virtualscroller-inline": this.inline,
        "p-virtualscroller-both p-both-scroll": this.isBoth(),
        "p-virtualscroller-horizontal p-horizontal-scroll": this.isHorizontal()
      }];
    },
    contentClass: function contentClass() {
      return ["p-virtualscroller-content", {
        "p-virtualscroller-loading": this.d_loading
      }];
    },
    loaderClass: function loaderClass() {
      return ["p-virtualscroller-loader", {
        "p-virtualscroller-loader-mask": !this.$slots.loader
      }];
    },
    loadedItems: function loadedItems() {
      var _this11 = this;
      if (this.items && !this.d_loading) {
        if (this.isBoth()) return this.items.slice(this.appendOnly ? 0 : this.first.rows, this.last.rows).map(function(item) {
          return _this11.columns ? item : item.slice(_this11.appendOnly ? 0 : _this11.first.cols, _this11.last.cols);
        });
        else if (this.isHorizontal() && this.columns) return this.items;
        else return this.items.slice(this.appendOnly ? 0 : this.first, this.last);
      }
      return [];
    },
    loadedRows: function loadedRows() {
      return this.d_loading ? this.loaderDisabled ? this.loaderArr : [] : this.loadedItems;
    },
    loadedColumns: function loadedColumns() {
      if (this.columns) {
        var both = this.isBoth();
        var horizontal = this.isHorizontal();
        if (both || horizontal) {
          return this.d_loading && this.loaderDisabled ? both ? this.loaderArr[0] : this.loaderArr : this.columns.slice(both ? this.first.cols : this.first, both ? this.last.cols : this.last);
        }
      }
      return this.columns;
    }
  },
  components: {
    SpinnerIcon: script$3$1
  }
};
var _hoisted_1$1 = ["tabindex"];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SpinnerIcon = resolveComponent("SpinnerIcon");
  return !_ctx.disabled ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    ref: $options.elementRef,
    "class": $options.containerClass,
    tabindex: _ctx.tabindex,
    style: _ctx.style,
    onScroll: _cache[0] || (_cache[0] = function() {
      return $options.onScroll && $options.onScroll.apply($options, arguments);
    })
  }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "content", {
    styleClass: $options.contentClass,
    items: $options.loadedItems,
    getItemOptions: $options.getOptions,
    loading: $data.d_loading,
    getLoaderOptions: $options.getLoaderOptions,
    itemSize: _ctx.itemSize,
    rows: $options.loadedRows,
    columns: $options.loadedColumns,
    contentRef: $options.contentRef,
    spacerStyle: $data.spacerStyle,
    contentStyle: $data.contentStyle,
    vertical: $options.isVertical(),
    horizontal: $options.isHorizontal(),
    both: $options.isBoth()
  }, function() {
    return [createElementVNode("div", mergeProps({
      ref: $options.contentRef,
      "class": $options.contentClass,
      style: $data.contentStyle
    }, _ctx.ptm("content")), [(openBlock(true), createElementBlock(Fragment, null, renderList($options.loadedItems, function(item, index) {
      return renderSlot(_ctx.$slots, "item", {
        key: index,
        item,
        options: $options.getOptions(index)
      });
    }), 128))], 16)];
  }), _ctx.showSpacer ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    "class": "p-virtualscroller-spacer",
    style: $data.spacerStyle
  }, _ctx.ptm("spacer")), null, 16)) : createCommentVNode("", true), !_ctx.loaderDisabled && _ctx.showLoader && $data.d_loading ? (openBlock(), createElementBlock("div", mergeProps({
    key: 1,
    "class": $options.loaderClass
  }, _ctx.ptm("loader")), [_ctx.$slots && _ctx.$slots.loader ? (openBlock(true), createElementBlock(Fragment, {
    key: 0
  }, renderList($data.loaderArr, function(_, index) {
    return renderSlot(_ctx.$slots, "loader", {
      key: index,
      options: $options.getLoaderOptions(index, $options.isBoth() && {
        numCols: _ctx.d_numItemsInViewport.cols
      })
    });
  }), 128)) : createCommentVNode("", true), renderSlot(_ctx.$slots, "loadingicon", {}, function() {
    return [createVNode(_component_SpinnerIcon, mergeProps({
      spin: "",
      "class": "p-virtualscroller-loading-icon"
    }, _ctx.ptm("loadingIcon")), null, 16)];
  })], 16)) : createCommentVNode("", true)], 16, _hoisted_1$1)) : (openBlock(), createElementBlock(Fragment, {
    key: 1
  }, [renderSlot(_ctx.$slots, "default"), renderSlot(_ctx.$slots, "content", {
    items: _ctx.items,
    rows: _ctx.items,
    columns: $options.loadedColumns
  })], 64));
}
script$2.render = render$1;
var theme4 = function theme5(_ref) {
  var dt = _ref.dt;
  return "\n.p-select {\n    display: inline-flex;\n    cursor: pointer;\n    position: relative;\n    user-select: none;\n    background: ".concat(dt("select.background"), ";\n    border: 1px solid ").concat(dt("select.border.color"), ";\n    transition: background ").concat(dt("select.transition.duration"), ", color ").concat(dt("select.transition.duration"), ", border-color ").concat(dt("select.transition.duration"), ",\n        outline-color ").concat(dt("select.transition.duration"), ", box-shadow ").concat(dt("select.transition.duration"), ";\n    border-radius: ").concat(dt("select.border.radius"), ";\n    outline-color: transparent;\n    box-shadow: ").concat(dt("select.shadow"), ";\n}\n\n.p-select:not(.p-disabled):hover {\n    border-color: ").concat(dt("select.hover.border.color"), ";\n}\n\n.p-select:not(.p-disabled).p-focus {\n    border-color: ").concat(dt("select.focus.border.color"), ";\n    box-shadow: ").concat(dt("select.focus.ring.shadow"), ";\n    outline: ").concat(dt("select.focus.ring.width"), " ").concat(dt("select.focus.ring.style"), " ").concat(dt("select.focus.ring.color"), ";\n    outline-offset: ").concat(dt("select.focus.ring.offset"), ";\n}\n\n.p-select.p-variant-filled {\n    background: ").concat(dt("select.filled.background"), ";\n}\n\n.p-select.p-variant-filled:not(.p-disabled):hover {\n    background: ").concat(dt("select.filled.hover.background"), ";\n}\n\n.p-select.p-variant-filled:not(.p-disabled).p-focus {\n    background: ").concat(dt("select.filled.focus.background"), ";\n}\n\n.p-select.p-invalid {\n    border-color: ").concat(dt("select.invalid.border.color"), ";\n}\n\n.p-select.p-disabled {\n    opacity: 1;\n    background: ").concat(dt("select.disabled.background"), ";\n}\n\n.p-select-clear-icon {\n    position: absolute;\n    top: 50%;\n    margin-top: -0.5rem;\n    color: ").concat(dt("select.clear.icon.color"), ";\n    inset-inline-end: ").concat(dt("select.dropdown.width"), ";\n}\n\n.p-select-dropdown {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 0;\n    background: transparent;\n    color: ").concat(dt("select.dropdown.color"), ";\n    width: ").concat(dt("select.dropdown.width"), ";\n    border-start-end-radius: ").concat(dt("select.border.radius"), ";\n    border-end-end-radius: ").concat(dt("select.border.radius"), ";\n}\n\n.p-select-label {\n    display: block;\n    white-space: nowrap;\n    overflow: hidden;\n    flex: 1 1 auto;\n    width: 1%;\n    padding: ").concat(dt("select.padding.y"), " ").concat(dt("select.padding.x"), ";\n    text-overflow: ellipsis;\n    cursor: pointer;\n    color: ").concat(dt("select.color"), ";\n    background: transparent;\n    border: 0 none;\n    outline: 0 none;\n}\n\n.p-select-label.p-placeholder {\n    color: ").concat(dt("select.placeholder.color"), ";\n}\n\n.p-select.p-invalid .p-select-label.p-placeholder {\n    color: ").concat(dt("select.invalid.placeholder.color"), ";\n}\n\n.p-select:has(.p-select-clear-icon) .p-select-label {\n    padding-inline-end: calc(1rem + ").concat(dt("select.padding.x"), ");\n}\n\n.p-select.p-disabled .p-select-label {\n    color: ").concat(dt("select.disabled.color"), ";\n}\n\n.p-select-label-empty {\n    overflow: hidden;\n    opacity: 0;\n}\n\ninput.p-select-label {\n    cursor: default;\n}\n\n.p-select .p-select-overlay {\n    min-width: 100%;\n}\n\n.p-select-overlay {\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: ").concat(dt("select.overlay.background"), ";\n    color: ").concat(dt("select.overlay.color"), ";\n    border: 1px solid ").concat(dt("select.overlay.border.color"), ";\n    border-radius: ").concat(dt("select.overlay.border.radius"), ";\n    box-shadow: ").concat(dt("select.overlay.shadow"), ";\n}\n\n.p-select-header {\n    padding: ").concat(dt("select.list.header.padding"), ";\n}\n\n.p-select-filter {\n    width: 100%;\n}\n\n.p-select-list-container {\n    overflow: auto;\n}\n\n.p-select-option-group {\n    cursor: auto;\n    margin: 0;\n    padding: ").concat(dt("select.option.group.padding"), ";\n    background: ").concat(dt("select.option.group.background"), ";\n    color: ").concat(dt("select.option.group.color"), ";\n    font-weight: ").concat(dt("select.option.group.font.weight"), ";\n}\n\n.p-select-list {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n    padding: ").concat(dt("select.list.padding"), ";\n    gap: ").concat(dt("select.list.gap"), ";\n    display: flex;\n    flex-direction: column;\n}\n\n.p-select-option {\n    cursor: pointer;\n    font-weight: normal;\n    white-space: nowrap;\n    position: relative;\n    overflow: hidden;\n    display: flex;\n    align-items: center;\n    padding: ").concat(dt("select.option.padding"), ";\n    border: 0 none;\n    color: ").concat(dt("select.option.color"), ";\n    background: transparent;\n    transition: background ").concat(dt("select.transition.duration"), ", color ").concat(dt("select.transition.duration"), ", border-color ").concat(dt("select.transition.duration"), ",\n            box-shadow ").concat(dt("select.transition.duration"), ", outline-color ").concat(dt("select.transition.duration"), ";\n    border-radius: ").concat(dt("select.option.border.radius"), ";\n}\n\n.p-select-option:not(.p-select-option-selected):not(.p-disabled).p-focus {\n    background: ").concat(dt("select.option.focus.background"), ";\n    color: ").concat(dt("select.option.focus.color"), ";\n}\n\n.p-select-option.p-select-option-selected {\n    background: ").concat(dt("select.option.selected.background"), ";\n    color: ").concat(dt("select.option.selected.color"), ";\n}\n\n.p-select-option.p-select-option-selected.p-focus {\n    background: ").concat(dt("select.option.selected.focus.background"), ";\n    color: ").concat(dt("select.option.selected.focus.color"), ";\n}\n\n.p-select-option-check-icon {\n    position: relative;\n    margin-inline-start: ").concat(dt("select.checkmark.gutter.start"), ";\n    margin-inline-end: ").concat(dt("select.checkmark.gutter.end"), ";\n    color: ").concat(dt("select.checkmark.color"), ";\n}\n\n.p-select-empty-message {\n    padding: ").concat(dt("select.empty.message.padding"), ";\n}\n\n.p-select-fluid {\n    display: flex;\n    width: 100%;\n}\n\n.p-select-sm .p-select-label {\n    font-size: ").concat(dt("select.sm.font.size"), ";\n    padding-block: ").concat(dt("select.sm.padding.y"), ";\n    padding-inline: ").concat(dt("select.sm.padding.x"), ";\n}\n\n.p-select-sm .p-select-dropdown .p-icon {\n    font-size: ").concat(dt("select.sm.font.size"), ";\n    width: ").concat(dt("select.sm.font.size"), ";\n    height: ").concat(dt("select.sm.font.size"), ";\n}\n\n.p-select-lg .p-select-label {\n    font-size: ").concat(dt("select.lg.font.size"), ";\n    padding-block: ").concat(dt("select.lg.padding.y"), ";\n    padding-inline: ").concat(dt("select.lg.padding.x"), ";\n}\n\n.p-select-lg .p-select-dropdown .p-icon {\n    font-size: ").concat(dt("select.lg.font.size"), ";\n    width: ").concat(dt("select.lg.font.size"), ";\n    height: ").concat(dt("select.lg.font.size"), ";\n}\n");
};
var classes = {
  root: function root2(_ref2) {
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
  theme: theme4,
  classes
});
var script$1 = {
  name: "BaseSelect",
  "extends": script$a,
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
  provide: function provide5() {
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
var script = {
  name: "Select",
  "extends": script$1,
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
  data: function data2() {
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
  mounted: function mounted2() {
    this.id = this.id || UniqueComponentId();
    this.autoUpdateModel();
    this.bindLabelClickListener();
  },
  updated: function updated2() {
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
    bindResizeListener: function bindResizeListener2() {
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
    unbindResizeListener: function unbindResizeListener2() {
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
    scrollInView: function scrollInView2() {
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
    listRef: function listRef(el, contentRef2) {
      this.list = el;
      contentRef2 && contentRef2(el);
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
    InputText: script$7,
    VirtualScroller: script$2,
    Portal: script$3$2,
    InputIcon: script$3,
    IconField: script$4,
    TimesIcon: script$1$5,
    ChevronDownIcon: script$9,
    SpinnerIcon: script$3$1,
    SearchIcon: script$5,
    CheckIcon: script$2$1,
    BlankIcon: script$6
  }
};
var _hoisted_1 = ["id"];
var _hoisted_2 = ["id", "value", "placeholder", "tabindex", "disabled", "aria-label", "aria-labelledby", "aria-expanded", "aria-controls", "aria-activedescendant", "aria-invalid"];
var _hoisted_3 = ["id", "tabindex", "aria-label", "aria-labelledby", "aria-expanded", "aria-controls", "aria-activedescendant", "aria-disabled"];
var _hoisted_4 = ["id"];
var _hoisted_5 = ["id"];
var _hoisted_6 = ["id", "aria-label", "aria-selected", "aria-disabled", "aria-setsize", "aria-posinset", "onClick", "onMousemove", "data-p-selected", "data-p-focused", "data-p-disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
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
  }, _ctx.ptm("label")), null, 16, _hoisted_2)) : (openBlock(), createElementBlock("span", mergeProps({
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
              var styleClass = _ref.styleClass, contentRef2 = _ref.contentRef, items2 = _ref.items, getItemOptions = _ref.getItemOptions, contentStyle = _ref.contentStyle, itemSize2 = _ref.itemSize;
              return [createElementVNode("ul", mergeProps({
                ref: function ref(el) {
                  return $options.listRef(el, contentRef2);
                },
                id: $data.id + "_list",
                "class": [_ctx.cx("list"), styleClass],
                style: contentStyle,
                role: "listbox"
              }, _ctx.ptm("list")), [(openBlock(true), createElementBlock(Fragment, null, renderList(items2, function(option2, i) {
                return openBlock(), createElementBlock(Fragment, {
                  key: $options.getOptionRenderKey(option2, $options.getOptionIndex(i, getItemOptions))
                }, [$options.isOptionGroup(option2) ? (openBlock(), createElementBlock("li", mergeProps({
                  key: 0,
                  id: $data.id + "_" + $options.getOptionIndex(i, getItemOptions),
                  style: {
                    height: itemSize2 ? itemSize2 + "px" : void 0
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
                    height: itemSize2 ? itemSize2 + "px" : void 0
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
              }), 128)), $data.filterValue && (!items2 || items2 && items2.length === 0) ? (openBlock(), createElementBlock("li", mergeProps({
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
  }, 8, ["appendTo"])], 16, _hoisted_1);
}
script.render = render;

export { ConnectedOverlayScrollHandler as C, OverlayEventBus as O, UniqueComponentId as U, script as a, script$2 as b, script$7 as s };
//# sourceMappingURL=index-DiXYREPT.mjs.map
