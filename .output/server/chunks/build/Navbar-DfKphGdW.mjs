import { b as buildAssetsURL } from '../nitro/nitro.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DpsmJg1c.mjs';
import { B as BaseDirective, R as Ripple } from './index-5ckDHAkT.mjs';
import { s as script$9, a as script$2$2, b as script$3$2 } from './index-CI0zemKa.mjs';
import { B as BaseStyle, b as useProductStore, u as useUserStore, a as useNuxtApp } from './server.mjs';
import { useSSRContext, ref, computed, mergeProps, withCtx, createVNode, toDisplayString, withDirectives, openBlock, createBlock, createCommentVNode, unref, createTextVNode, Fragment, renderList, resolveComponent, createElementBlock, renderSlot, resolveDirective, createElementVNode, resolveDynamicComponent, normalizeClass, Transition, normalizeStyle, createSlots } from 'vue';
import { a as script$a, U as UniqueComponentId, C as ConnectedOverlayScrollHandler, O as OverlayEventBus, s as script$7$1, b as script$2$3 } from './index-DiXYREPT.mjs';
import { focus, getFirstFocusableElement, getLastFocusableElement, isFocusableElement, createElement, find, findSingle, addStyle, absolutePosition, getOuterWidth, isTouchDevice, relativePosition, addClass, blockBodyScroll, unblockBodyScroll, setAttribute, getOuterHeight, getViewport } from '@primeuix/utils/dom';
import { ZIndex } from '@primeuix/utils/zindex';
import { s as script$3$1, b as script$b, c as script$1$7 } from './index-CPSBx0zQ.mjs';
import { a as script$1$6, s as script$f } from './index-BjfqnR8d.mjs';
import { isNotEmpty, resolve, resolveFieldData, isEmpty, equals, findLastIndex } from '@primeuix/utils/object';
import { s as script$c } from './index-B0KNiV_3.mjs';
import { s as script$e } from './index-DWifVPgv.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrGetDirectiveProps, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_0$1 } from './logoo-Bk06oiQl.mjs';
import { useRouter } from 'vue-router';
import { s as script$d } from './index-DW__Wuaq.mjs';

var theme$5 = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-overlaybadge {\n    position: relative;\n}\n\n.p-overlaybadge .p-badge {\n    position: absolute;\n    inset-block-start: 0;\n    inset-inline-end: 0;\n    transform: translate(50%, -50%);\n    transform-origin: 100% 0;\n    margin: 0;\n    outline-width: ".concat(dt("overlaybadge.outline.width"), ";\n    outline-style: solid;\n    outline-color: ").concat(dt("overlaybadge.outline.color"), ";\n}\n\n.p-overlaybadge .p-badge:dir(rtl) {\n    transform: translate(-50%, -50%);\n}\n");
};
var classes$5 = {
  root: "p-overlaybadge"
};
var OverlayBadgeStyle = BaseStyle.extend({
  name: "overlaybadge",
  theme: theme$5,
  classes: classes$5
});
var script$1$5 = {
  name: "OverlayBadge",
  "extends": script$2$2,
  style: OverlayBadgeStyle,
  provide: function provide() {
    return {
      $pcOverlayBadge: this,
      $parentInstance: this
    };
  }
};
var script$8 = {
  name: "OverlayBadge",
  "extends": script$1$5,
  inheritAttrs: false,
  components: {
    Badge: script$2$2
  }
};
function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Badge = resolveComponent("Badge");
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "default"), createVNode(_component_Badge, mergeProps(_ctx.$props, {
    pt: _ctx.ptm("pcBadge")
  }), null, 16, ["pt"])], 16);
}
script$8.render = render$7;
var theme$4 = function theme2(_ref) {
  var dt = _ref.dt;
  return "\n.p-menu {\n    background: ".concat(dt("menu.background"), ";\n    color: ").concat(dt("menu.color"), ";\n    border: 1px solid ").concat(dt("menu.border.color"), ";\n    border-radius: ").concat(dt("menu.border.radius"), ";\n    min-width: 12.5rem;\n}\n\n.p-menu-list {\n    margin: 0;\n    padding: ").concat(dt("menu.list.padding"), ";\n    outline: 0 none;\n    list-style: none;\n    display: flex;\n    flex-direction: column;\n    gap: ").concat(dt("menu.list.gap"), ";\n}\n\n.p-menu-item-content {\n    transition: background ").concat(dt("menu.transition.duration"), ", color ").concat(dt("menu.transition.duration"), ";\n    border-radius: ").concat(dt("menu.item.border.radius"), ";\n    color: ").concat(dt("menu.item.color"), ";\n}\n\n.p-menu-item-link {\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    overflow: hidden;\n    position: relative;\n    color: inherit;\n    padding: ").concat(dt("menu.item.padding"), ";\n    gap: ").concat(dt("menu.item.gap"), ";\n    user-select: none;\n    outline: 0 none;\n}\n\n.p-menu-item-label {\n    line-height: 1;\n}\n\n.p-menu-item-icon {\n    color: ").concat(dt("menu.item.icon.color"), ";\n}\n\n.p-menu-item.p-focus .p-menu-item-content {\n    color: ").concat(dt("menu.item.focus.color"), ";\n    background: ").concat(dt("menu.item.focus.background"), ";\n}\n\n.p-menu-item.p-focus .p-menu-item-icon {\n    color: ").concat(dt("menu.item.icon.focus.color"), ";\n}\n\n.p-menu-item:not(.p-disabled) .p-menu-item-content:hover {\n    color: ").concat(dt("menu.item.focus.color"), ";\n    background: ").concat(dt("menu.item.focus.background"), ";\n}\n\n.p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-icon {\n    color: ").concat(dt("menu.item.icon.focus.color"), ";\n}\n\n.p-menu-overlay {\n    box-shadow: ").concat(dt("menu.shadow"), ";\n}\n\n.p-menu-submenu-label {\n    background: ").concat(dt("menu.submenu.label.background"), ";\n    padding: ").concat(dt("menu.submenu.label.padding"), ";\n    color: ").concat(dt("menu.submenu.label.color"), ";\n    font-weight: ").concat(dt("menu.submenu.label.font.weight"), ";\n}\n\n.p-menu-separator {\n    border-block-start: 1px solid ").concat(dt("menu.separator.border.color"), ";\n}\n");
};
var classes$4 = {
  root: function root(_ref2) {
    var props = _ref2.props;
    return ["p-menu p-component", {
      "p-menu-overlay": props.popup
    }];
  },
  start: "p-menu-start",
  list: "p-menu-list",
  submenuLabel: "p-menu-submenu-label",
  separator: "p-menu-separator",
  end: "p-menu-end",
  item: function item(_ref3) {
    var instance = _ref3.instance;
    return ["p-menu-item", {
      "p-focus": instance.id === instance.focusedOptionId,
      "p-disabled": instance.disabled()
    }];
  },
  itemContent: "p-menu-item-content",
  itemLink: "p-menu-item-link",
  itemIcon: "p-menu-item-icon",
  itemLabel: "p-menu-item-label"
};
var MenuStyle = BaseStyle.extend({
  name: "menu",
  theme: theme$4,
  classes: classes$4
});
var script$2$1 = {
  name: "BaseMenu",
  "extends": script$1$6,
  props: {
    popup: {
      type: Boolean,
      "default": false
    },
    model: {
      type: Array,
      "default": null
    },
    appendTo: {
      type: [String, Object],
      "default": "body"
    },
    autoZIndex: {
      type: Boolean,
      "default": true
    },
    baseZIndex: {
      type: Number,
      "default": 0
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
  style: MenuStyle,
  provide: function provide2() {
    return {
      $pcMenu: this,
      $parentInstance: this
    };
  }
};
var script$1$4 = {
  name: "Menuitem",
  hostName: "Menu",
  "extends": script$1$6,
  inheritAttrs: false,
  emits: ["item-click", "item-mousemove"],
  props: {
    item: null,
    templates: null,
    id: null,
    focusedOptionId: null,
    index: null
  },
  methods: {
    getItemProp: function getItemProp(processedItem, name) {
      return processedItem && processedItem.item ? resolve(processedItem.item[name]) : void 0;
    },
    getPTOptions: function getPTOptions(key) {
      return this.ptm(key, {
        context: {
          item: this.item,
          index: this.index,
          focused: this.isItemFocused(),
          disabled: this.disabled()
        }
      });
    },
    isItemFocused: function isItemFocused() {
      return this.focusedOptionId === this.id;
    },
    onItemClick: function onItemClick(event) {
      var command = this.getItemProp(this.item, "command");
      command && command({
        originalEvent: event,
        item: this.item.item
      });
      this.$emit("item-click", {
        originalEvent: event,
        item: this.item,
        id: this.id
      });
    },
    onItemMouseMove: function onItemMouseMove(event) {
      this.$emit("item-mousemove", {
        originalEvent: event,
        item: this.item,
        id: this.id
      });
    },
    visible: function visible() {
      return typeof this.item.visible === "function" ? this.item.visible() : this.item.visible !== false;
    },
    disabled: function disabled() {
      return typeof this.item.disabled === "function" ? this.item.disabled() : this.item.disabled;
    },
    label: function label() {
      return typeof this.item.label === "function" ? this.item.label() : this.item.label;
    },
    getMenuItemProps: function getMenuItemProps(item2) {
      return {
        action: mergeProps({
          "class": this.cx("itemLink"),
          tabindex: "-1"
        }, this.getPTOptions("itemLink")),
        icon: mergeProps({
          "class": [this.cx("itemIcon"), item2.icon]
        }, this.getPTOptions("itemIcon")),
        label: mergeProps({
          "class": this.cx("itemLabel")
        }, this.getPTOptions("itemLabel"))
      };
    }
  },
  directives: {
    ripple: Ripple
  }
};
var _hoisted_1$1$1 = ["id", "aria-label", "aria-disabled", "data-p-focused", "data-p-disabled"];
var _hoisted_2$1$1 = ["href", "target"];
function render$1$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_ripple = resolveDirective("ripple");
  return $options.visible() ? (openBlock(), createElementBlock("li", mergeProps({
    key: 0,
    id: $props.id,
    "class": [_ctx.cx("item"), $props.item["class"]],
    role: "menuitem",
    style: $props.item.style,
    "aria-label": $options.label(),
    "aria-disabled": $options.disabled()
  }, $options.getPTOptions("item"), {
    "data-p-focused": $options.isItemFocused(),
    "data-p-disabled": $options.disabled() || false
  }), [createElementVNode("div", mergeProps({
    "class": _ctx.cx("itemContent"),
    onClick: _cache[0] || (_cache[0] = function($event) {
      return $options.onItemClick($event);
    }),
    onMousemove: _cache[1] || (_cache[1] = function($event) {
      return $options.onItemMouseMove($event);
    })
  }, $options.getPTOptions("itemContent")), [!$props.templates.item ? withDirectives((openBlock(), createElementBlock("a", mergeProps({
    key: 0,
    href: $props.item.url,
    "class": _ctx.cx("itemLink"),
    target: $props.item.target,
    tabindex: "-1"
  }, $options.getPTOptions("itemLink")), [$props.templates.itemicon ? (openBlock(), createBlock(resolveDynamicComponent($props.templates.itemicon), {
    key: 0,
    item: $props.item,
    "class": normalizeClass(_ctx.cx("itemIcon"))
  }, null, 8, ["item", "class"])) : $props.item.icon ? (openBlock(), createElementBlock("span", mergeProps({
    key: 1,
    "class": [_ctx.cx("itemIcon"), $props.item.icon]
  }, $options.getPTOptions("itemIcon")), null, 16)) : createCommentVNode("", true), createElementVNode("span", mergeProps({
    "class": _ctx.cx("itemLabel")
  }, $options.getPTOptions("itemLabel")), toDisplayString($options.label()), 17)], 16, _hoisted_2$1$1)), [[_directive_ripple]]) : $props.templates.item ? (openBlock(), createBlock(resolveDynamicComponent($props.templates.item), {
    key: 1,
    item: $props.item,
    label: $options.label(),
    props: $options.getMenuItemProps($props.item)
  }, null, 8, ["item", "label", "props"])) : createCommentVNode("", true)], 16)], 16, _hoisted_1$1$1)) : createCommentVNode("", true);
}
script$1$4.render = render$1$1;
function _toConsumableArray$1(r) {
  return _arrayWithoutHoles$1(r) || _iterableToArray$1(r) || _unsupportedIterableToArray$1(r) || _nonIterableSpread$1();
}
function _nonIterableSpread$1() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$1(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray$1(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$1(r, a) : void 0;
  }
}
function _iterableToArray$1(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _arrayWithoutHoles$1(r) {
  if (Array.isArray(r)) return _arrayLikeToArray$1(r);
}
function _arrayLikeToArray$1(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
var script$7 = {
  name: "Menu",
  "extends": script$2$1,
  inheritAttrs: false,
  emits: ["show", "hide", "focus", "blur"],
  data: function data() {
    return {
      id: this.$attrs.id,
      overlayVisible: false,
      focused: false,
      focusedOptionIndex: -1,
      selectedOptionIndex: -1
    };
  },
  watch: {
    "$attrs.id": function $attrsId(newValue) {
      this.id = newValue || UniqueComponentId();
    }
  },
  target: null,
  outsideClickListener: null,
  scrollHandler: null,
  resizeListener: null,
  container: null,
  list: null,
  mounted: function mounted() {
    this.id = this.id || UniqueComponentId();
    if (!this.popup) {
      this.bindResizeListener();
      this.bindOutsideClickListener();
    }
  },
  beforeUnmount: function beforeUnmount() {
    this.unbindResizeListener();
    this.unbindOutsideClickListener();
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    this.target = null;
    if (this.container && this.autoZIndex) {
      ZIndex.clear(this.container);
    }
    this.container = null;
  },
  methods: {
    itemClick: function itemClick(event) {
      var item2 = event.item;
      if (this.disabled(item2)) {
        return;
      }
      if (item2.command) {
        item2.command(event);
      }
      if (this.overlayVisible) this.hide();
      if (!this.popup && this.focusedOptionIndex !== event.id) {
        this.focusedOptionIndex = event.id;
      }
    },
    itemMouseMove: function itemMouseMove(event) {
      if (this.focused) {
        this.focusedOptionIndex = event.id;
      }
    },
    onListFocus: function onListFocus(event) {
      this.focused = true;
      !this.popup && this.changeFocusedOptionIndex(0);
      this.$emit("focus", event);
    },
    onListBlur: function onListBlur(event) {
      this.focused = false;
      this.focusedOptionIndex = -1;
      this.$emit("blur", event);
    },
    onListKeyDown: function onListKeyDown(event) {
      switch (event.code) {
        case "ArrowDown":
          this.onArrowDownKey(event);
          break;
        case "ArrowUp":
          this.onArrowUpKey(event);
          break;
        case "Home":
          this.onHomeKey(event);
          break;
        case "End":
          this.onEndKey(event);
          break;
        case "Enter":
        case "NumpadEnter":
          this.onEnterKey(event);
          break;
        case "Space":
          this.onSpaceKey(event);
          break;
        case "Escape":
          if (this.popup) {
            focus(this.target);
            this.hide();
          }
        case "Tab":
          this.overlayVisible && this.hide();
          break;
      }
    },
    onArrowDownKey: function onArrowDownKey(event) {
      var optionIndex = this.findNextOptionIndex(this.focusedOptionIndex);
      this.changeFocusedOptionIndex(optionIndex);
      event.preventDefault();
    },
    onArrowUpKey: function onArrowUpKey(event) {
      if (event.altKey && this.popup) {
        focus(this.target);
        this.hide();
        event.preventDefault();
      } else {
        var optionIndex = this.findPrevOptionIndex(this.focusedOptionIndex);
        this.changeFocusedOptionIndex(optionIndex);
        event.preventDefault();
      }
    },
    onHomeKey: function onHomeKey(event) {
      this.changeFocusedOptionIndex(0);
      event.preventDefault();
    },
    onEndKey: function onEndKey(event) {
      this.changeFocusedOptionIndex(find(this.container, 'li[data-pc-section="item"][data-p-disabled="false"]').length - 1);
      event.preventDefault();
    },
    onEnterKey: function onEnterKey(event) {
      var element = findSingle(this.list, 'li[id="'.concat("".concat(this.focusedOptionIndex), '"]'));
      var anchorElement = element && findSingle(element, 'a[data-pc-section="itemlink"]');
      this.popup && focus(this.target);
      anchorElement ? anchorElement.click() : element && element.click();
      event.preventDefault();
    },
    onSpaceKey: function onSpaceKey(event) {
      this.onEnterKey(event);
    },
    findNextOptionIndex: function findNextOptionIndex(index) {
      var links = find(this.container, 'li[data-pc-section="item"][data-p-disabled="false"]');
      var matchedOptionIndex = _toConsumableArray$1(links).findIndex(function(link) {
        return link.id === index;
      });
      return matchedOptionIndex > -1 ? matchedOptionIndex + 1 : 0;
    },
    findPrevOptionIndex: function findPrevOptionIndex(index) {
      var links = find(this.container, 'li[data-pc-section="item"][data-p-disabled="false"]');
      var matchedOptionIndex = _toConsumableArray$1(links).findIndex(function(link) {
        return link.id === index;
      });
      return matchedOptionIndex > -1 ? matchedOptionIndex - 1 : 0;
    },
    changeFocusedOptionIndex: function changeFocusedOptionIndex(index) {
      var links = find(this.container, 'li[data-pc-section="item"][data-p-disabled="false"]');
      var order = index >= links.length ? links.length - 1 : index < 0 ? 0 : index;
      order > -1 && (this.focusedOptionIndex = links[order].getAttribute("id"));
    },
    toggle: function toggle(event) {
      if (this.overlayVisible) this.hide();
      else this.show(event);
    },
    show: function show(event) {
      this.overlayVisible = true;
      this.target = event.currentTarget;
    },
    hide: function hide() {
      this.overlayVisible = false;
      this.target = null;
    },
    onEnter: function onEnter(el) {
      addStyle(el, {
        position: "absolute",
        top: "0",
        left: "0"
      });
      this.alignOverlay();
      this.bindOutsideClickListener();
      this.bindResizeListener();
      this.bindScrollListener();
      if (this.autoZIndex) {
        ZIndex.set("menu", el, this.baseZIndex + this.$primevue.config.zIndex.menu);
      }
      if (this.popup) {
        focus(this.list);
      }
      this.$emit("show");
    },
    onLeave: function onLeave() {
      this.unbindOutsideClickListener();
      this.unbindResizeListener();
      this.unbindScrollListener();
      this.$emit("hide");
    },
    onAfterLeave: function onAfterLeave(el) {
      if (this.autoZIndex) {
        ZIndex.clear(el);
      }
    },
    alignOverlay: function alignOverlay() {
      absolutePosition(this.container, this.target);
      var targetWidth = getOuterWidth(this.target);
      if (targetWidth > getOuterWidth(this.container)) {
        this.container.style.minWidth = getOuterWidth(this.target) + "px";
      }
    },
    bindOutsideClickListener: function bindOutsideClickListener() {
      var _this = this;
      if (!this.outsideClickListener) {
        this.outsideClickListener = function(event) {
          var isOutsideContainer = _this.container && !_this.container.contains(event.target);
          var isOutsideTarget = !(_this.target && (_this.target === event.target || _this.target.contains(event.target)));
          if (_this.overlayVisible && isOutsideContainer && isOutsideTarget) {
            _this.hide();
          } else if (!_this.popup && isOutsideContainer && isOutsideTarget) {
            _this.focusedOptionIndex = -1;
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
      var _this2 = this;
      if (!this.scrollHandler) {
        this.scrollHandler = new ConnectedOverlayScrollHandler(this.target, function() {
          if (_this2.overlayVisible) {
            _this2.hide();
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
      var _this3 = this;
      if (!this.resizeListener) {
        this.resizeListener = function() {
          if (_this3.overlayVisible && !isTouchDevice()) {
            _this3.hide();
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
    visible: function visible2(item2) {
      return typeof item2.visible === "function" ? item2.visible() : item2.visible !== false;
    },
    disabled: function disabled2(item2) {
      return typeof item2.disabled === "function" ? item2.disabled() : item2.disabled;
    },
    label: function label2(item2) {
      return typeof item2.label === "function" ? item2.label() : item2.label;
    },
    onOverlayClick: function onOverlayClick(event) {
      OverlayEventBus.emit("overlay-click", {
        originalEvent: event,
        target: this.target
      });
    },
    containerRef: function containerRef(el) {
      this.container = el;
    },
    listRef: function listRef(el) {
      this.list = el;
    }
  },
  computed: {
    focusedOptionId: function focusedOptionId() {
      return this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : null;
    }
  },
  components: {
    PVMenuitem: script$1$4,
    Portal: script$3$1
  }
};
var _hoisted_1$4 = ["id"];
var _hoisted_2$4 = ["id", "tabindex", "aria-activedescendant", "aria-label", "aria-labelledby"];
var _hoisted_3$1 = ["id"];
function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_PVMenuitem = resolveComponent("PVMenuitem");
  var _component_Portal = resolveComponent("Portal");
  return openBlock(), createBlock(_component_Portal, {
    appendTo: _ctx.appendTo,
    disabled: !_ctx.popup
  }, {
    "default": withCtx(function() {
      return [createVNode(Transition, mergeProps({
        name: "p-connected-overlay",
        onEnter: $options.onEnter,
        onLeave: $options.onLeave,
        onAfterLeave: $options.onAfterLeave
      }, _ctx.ptm("transition")), {
        "default": withCtx(function() {
          return [(_ctx.popup ? $data.overlayVisible : true) ? (openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            ref: $options.containerRef,
            id: $data.id,
            "class": _ctx.cx("root"),
            onClick: _cache[3] || (_cache[3] = function() {
              return $options.onOverlayClick && $options.onOverlayClick.apply($options, arguments);
            })
          }, _ctx.ptmi("root")), [_ctx.$slots.start ? (openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            "class": _ctx.cx("start")
          }, _ctx.ptm("start")), [renderSlot(_ctx.$slots, "start")], 16)) : createCommentVNode("", true), createElementVNode("ul", mergeProps({
            ref: $options.listRef,
            id: $data.id + "_list",
            "class": _ctx.cx("list"),
            role: "menu",
            tabindex: _ctx.tabindex,
            "aria-activedescendant": $data.focused ? $options.focusedOptionId : void 0,
            "aria-label": _ctx.ariaLabel,
            "aria-labelledby": _ctx.ariaLabelledby,
            onFocus: _cache[0] || (_cache[0] = function() {
              return $options.onListFocus && $options.onListFocus.apply($options, arguments);
            }),
            onBlur: _cache[1] || (_cache[1] = function() {
              return $options.onListBlur && $options.onListBlur.apply($options, arguments);
            }),
            onKeydown: _cache[2] || (_cache[2] = function() {
              return $options.onListKeyDown && $options.onListKeyDown.apply($options, arguments);
            })
          }, _ctx.ptm("list")), [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model, function(item2, i) {
            return openBlock(), createElementBlock(Fragment, {
              key: $options.label(item2) + i.toString()
            }, [item2.items && $options.visible(item2) && !item2.separator ? (openBlock(), createElementBlock(Fragment, {
              key: 0
            }, [item2.items ? (openBlock(), createElementBlock("li", mergeProps({
              key: 0,
              id: $data.id + "_" + i,
              "class": [_ctx.cx("submenuLabel"), item2["class"]],
              role: "none",
              ref_for: true
            }, _ctx.ptm("submenuLabel")), [renderSlot(_ctx.$slots, _ctx.$slots.submenulabel ? "submenulabel" : "submenuheader", {
              item: item2
            }, function() {
              return [createTextVNode(toDisplayString($options.label(item2)), 1)];
            })], 16, _hoisted_3$1)) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(item2.items, function(child, j) {
              return openBlock(), createElementBlock(Fragment, {
                key: child.label + i + "_" + j
              }, [$options.visible(child) && !child.separator ? (openBlock(), createBlock(_component_PVMenuitem, {
                key: 0,
                id: $data.id + "_" + i + "_" + j,
                item: child,
                templates: _ctx.$slots,
                focusedOptionId: $options.focusedOptionId,
                unstyled: _ctx.unstyled,
                onItemClick: $options.itemClick,
                onItemMousemove: $options.itemMouseMove,
                pt: _ctx.pt
              }, null, 8, ["id", "item", "templates", "focusedOptionId", "unstyled", "onItemClick", "onItemMousemove", "pt"])) : $options.visible(child) && child.separator ? (openBlock(), createElementBlock("li", mergeProps({
                key: "separator" + i + j,
                "class": [_ctx.cx("separator"), item2["class"]],
                style: child.style,
                role: "separator",
                ref_for: true
              }, _ctx.ptm("separator")), null, 16)) : createCommentVNode("", true)], 64);
            }), 128))], 64)) : $options.visible(item2) && item2.separator ? (openBlock(), createElementBlock("li", mergeProps({
              key: "separator" + i.toString(),
              "class": [_ctx.cx("separator"), item2["class"]],
              style: item2.style,
              role: "separator",
              ref_for: true
            }, _ctx.ptm("separator")), null, 16)) : (openBlock(), createBlock(_component_PVMenuitem, {
              key: $options.label(item2) + i.toString(),
              id: $data.id + "_" + i,
              item: item2,
              index: i,
              templates: _ctx.$slots,
              focusedOptionId: $options.focusedOptionId,
              unstyled: _ctx.unstyled,
              onItemClick: $options.itemClick,
              onItemMousemove: $options.itemMouseMove,
              pt: _ctx.pt
            }, null, 8, ["id", "item", "index", "templates", "focusedOptionId", "unstyled", "onItemClick", "onItemMousemove", "pt"]))], 64);
          }), 128))], 16, _hoisted_2$4), _ctx.$slots.end ? (openBlock(), createElementBlock("div", mergeProps({
            key: 1,
            "class": _ctx.cx("end")
          }, _ctx.ptm("end")), [renderSlot(_ctx.$slots, "end")], 16)) : createCommentVNode("", true)], 16, _hoisted_1$4)) : createCommentVNode("", true)];
        }),
        _: 3
      }, 16, ["onEnter", "onLeave", "onAfterLeave"])];
    }),
    _: 3
  }, 8, ["appendTo", "disabled"]);
}
script$7.render = render$6;
var theme$3 = function theme3(_ref) {
  var dt = _ref.dt;
  return "\n.p-chip {\n    display: inline-flex;\n    align-items: center;\n    background: ".concat(dt("chip.background"), ";\n    color: ").concat(dt("chip.color"), ";\n    border-radius: ").concat(dt("chip.border.radius"), ";\n    padding-block: ").concat(dt("chip.padding.y"), ";\n    padding-inline: ").concat(dt("chip.padding.x"), ";\n    gap: ").concat(dt("chip.gap"), ";\n}\n\n.p-chip-icon {\n    color: ").concat(dt("chip.icon.color"), ";\n    font-size: ").concat(dt("chip.icon.font.size"), ";\n    width: ").concat(dt("chip.icon.size"), ";\n    height: ").concat(dt("chip.icon.size"), ";\n}\n\n.p-chip-image {\n    border-radius: 50%;\n    width: ").concat(dt("chip.image.width"), ";\n    height: ").concat(dt("chip.image.height"), ";\n    margin-inline-start: calc(-1 * ").concat(dt("chip.padding.y"), ");\n}\n\n.p-chip:has(.p-chip-remove-icon) {\n    padding-inline-end: ").concat(dt("chip.padding.y"), ";\n}\n\n.p-chip:has(.p-chip-image) {\n    padding-block-start: calc(").concat(dt("chip.padding.y"), " / 2);\n    padding-block-end: calc(").concat(dt("chip.padding.y"), " / 2);\n}\n\n.p-chip-remove-icon {\n    cursor: pointer;\n    font-size: ").concat(dt("chip.remove.icon.size"), ";\n    width: ").concat(dt("chip.remove.icon.size"), ";\n    height: ").concat(dt("chip.remove.icon.size"), ";\n    color: ").concat(dt("chip.remove.icon.color"), ";\n    border-radius: 50%;\n    transition: outline-color ").concat(dt("chip.transition.duration"), ", box-shadow ").concat(dt("chip.transition.duration"), ";\n    outline-color: transparent;\n}\n\n.p-chip-remove-icon:focus-visible {\n    box-shadow: ").concat(dt("chip.remove.icon.focus.ring.shadow"), ";\n    outline: ").concat(dt("chip.remove.icon.focus.ring.width"), " ").concat(dt("chip.remove.icon.focus.ring.style"), " ").concat(dt("chip.remove.icon.focus.ring.color"), ";\n    outline-offset: ").concat(dt("chip.remove.icon.focus.ring.offset"), ";\n}\n");
};
var classes$3 = {
  root: "p-chip p-component",
  image: "p-chip-image",
  icon: "p-chip-icon",
  label: "p-chip-label",
  removeIcon: "p-chip-remove-icon"
};
var ChipStyle = BaseStyle.extend({
  name: "chip",
  theme: theme$3,
  classes: classes$3
});
var script$1$3 = {
  name: "BaseChip",
  "extends": script$1$6,
  props: {
    label: {
      type: String,
      "default": null
    },
    icon: {
      type: String,
      "default": null
    },
    image: {
      type: String,
      "default": null
    },
    removable: {
      type: Boolean,
      "default": false
    },
    removeIcon: {
      type: String,
      "default": void 0
    }
  },
  style: ChipStyle,
  provide: function provide3() {
    return {
      $pcChip: this,
      $parentInstance: this
    };
  }
};
var script$6 = {
  name: "Chip",
  "extends": script$1$3,
  inheritAttrs: false,
  emits: ["remove"],
  data: function data2() {
    return {
      visible: true
    };
  },
  methods: {
    onKeydown: function onKeydown(event) {
      if (event.key === "Enter" || event.key === "Backspace") {
        this.close(event);
      }
    },
    close: function close(event) {
      this.visible = false;
      this.$emit("remove", event);
    }
  },
  components: {
    TimesCircleIcon: script$b
  }
};
var _hoisted_1$3 = ["aria-label"];
var _hoisted_2$3 = ["src"];
function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return $data.visible ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    "class": _ctx.cx("root"),
    "aria-label": _ctx.label
  }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "default", {}, function() {
    return [_ctx.image ? (openBlock(), createElementBlock("img", mergeProps({
      key: 0,
      src: _ctx.image
    }, _ctx.ptm("image"), {
      "class": _ctx.cx("image")
    }), null, 16, _hoisted_2$3)) : _ctx.$slots.icon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.icon), mergeProps({
      key: 1,
      "class": _ctx.cx("icon")
    }, _ctx.ptm("icon")), null, 16, ["class"])) : _ctx.icon ? (openBlock(), createElementBlock("span", mergeProps({
      key: 2,
      "class": [_ctx.cx("icon"), _ctx.icon]
    }, _ctx.ptm("icon")), null, 16)) : createCommentVNode("", true), _ctx.label ? (openBlock(), createElementBlock("div", mergeProps({
      key: 3,
      "class": _ctx.cx("label")
    }, _ctx.ptm("label")), toDisplayString(_ctx.label), 17)) : createCommentVNode("", true)];
  }), _ctx.removable ? renderSlot(_ctx.$slots, "removeicon", {
    key: 0,
    removeCallback: $options.close,
    keydownCallback: $options.onKeydown
  }, function() {
    return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.removeIcon ? "span" : "TimesCircleIcon"), mergeProps({
      "class": [_ctx.cx("removeIcon"), _ctx.removeIcon],
      onClick: $options.close,
      onKeydown: $options.onKeydown
    }, _ctx.ptm("removeIcon")), null, 16, ["class", "onClick", "onKeydown"]))];
  }) : createCommentVNode("", true)], 16, _hoisted_1$3)) : createCommentVNode("", true);
}
script$6.render = render$5;
var theme$2 = function theme4(_ref) {
  var dt = _ref.dt;
  return "\n.p-autocomplete {\n    display: inline-flex;\n}\n\n.p-autocomplete-loader {\n    position: absolute;\n    top: 50%;\n    margin-top: -0.5rem;\n    inset-inline-end: ".concat(dt("autocomplete.padding.x"), ";\n}\n\n.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-loader {\n    inset-inline-end: calc(").concat(dt("autocomplete.dropdown.width"), " + ").concat(dt("autocomplete.padding.x"), ");\n}\n\n.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input {\n    flex: 1 1 auto;\n    width: 1%;\n}\n\n.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input,\n.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input-multiple {\n    border-start-end-radius: 0;\n    border-end-end-radius: 0;\n}\n\n.p-autocomplete-dropdown {\n    cursor: pointer;\n    display: inline-flex;\n    user-select: none;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    position: relative;\n    width: ").concat(dt("autocomplete.dropdown.width"), ";\n    border-start-end-radius: ").concat(dt("autocomplete.dropdown.border.radius"), ";\n    border-end-end-radius: ").concat(dt("autocomplete.dropdown.border.radius"), ";\n    background: ").concat(dt("autocomplete.dropdown.background"), ";\n    border: 1px solid ").concat(dt("autocomplete.dropdown.border.color"), ";\n    border-inline-start: 0 none;\n    color: ").concat(dt("autocomplete.dropdown.color"), ";\n    transition: background ").concat(dt("autocomplete.transition.duration"), ", color ").concat(dt("autocomplete.transition.duration"), ", border-color ").concat(dt("autocomplete.transition.duration"), ", outline-color ").concat(dt("autocomplete.transition.duration"), ", box-shadow ").concat(dt("autocomplete.transition.duration"), ";\n    outline-color: transparent;\n}\n\n.p-autocomplete-dropdown:not(:disabled):hover {\n    background: ").concat(dt("autocomplete.dropdown.hover.background"), ";\n    border-color: ").concat(dt("autocomplete.dropdown.hover.border.color"), ";\n    color: ").concat(dt("autocomplete.dropdown.hover.color"), ";\n}\n\n.p-autocomplete-dropdown:not(:disabled):active {\n    background: ").concat(dt("autocomplete.dropdown.active.background"), ";\n    border-color: ").concat(dt("autocomplete.dropdown.active.border.color"), ";\n    color: ").concat(dt("autocomplete.dropdown.active.color"), ";\n}\n\n.p-autocomplete-dropdown:focus-visible {\n    box-shadow: ").concat(dt("autocomplete.dropdown.focus.ring.shadow"), ";\n    outline: ").concat(dt("autocomplete.dropdown.focus.ring.width"), " ").concat(dt("autocomplete.dropdown.focus.ring.style"), " ").concat(dt("autocomplete.dropdown.focus.ring.color"), ";\n    outline-offset: ").concat(dt("autocomplete.dropdown.focus.ring.offset"), ";\n}\n\n.p-autocomplete .p-autocomplete-overlay {\n    min-width: 100%;\n}\n\n.p-autocomplete-overlay {\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: ").concat(dt("autocomplete.overlay.background"), ";\n    color: ").concat(dt("autocomplete.overlay.color"), ";\n    border: 1px solid ").concat(dt("autocomplete.overlay.border.color"), ";\n    border-radius: ").concat(dt("autocomplete.overlay.border.radius"), ";\n    box-shadow: ").concat(dt("autocomplete.overlay.shadow"), ";\n}\n\n.p-autocomplete-list-container {\n    overflow: auto;\n}\n\n.p-autocomplete-list {\n    margin: 0;\n    list-style-type: none;\n    display: flex;\n    flex-direction: column;\n    gap: ").concat(dt("autocomplete.list.gap"), ";\n    padding: ").concat(dt("autocomplete.list.padding"), ";\n}\n\n.p-autocomplete-option {\n    cursor: pointer;\n    white-space: nowrap;\n    position: relative;\n    overflow: hidden;\n    display: flex;\n    align-items: center;\n    padding: ").concat(dt("autocomplete.option.padding"), ";\n    border: 0 none;\n    color: ").concat(dt("autocomplete.option.color"), ";\n    background: transparent;\n    transition: background ").concat(dt("autocomplete.transition.duration"), ", color ").concat(dt("autocomplete.transition.duration"), ", border-color ").concat(dt("autocomplete.transition.duration"), ";\n    border-radius: ").concat(dt("autocomplete.option.border.radius"), ";\n}\n\n.p-autocomplete-option:not(.p-autocomplete-option-selected):not(.p-disabled).p-focus {\n    background: ").concat(dt("autocomplete.option.focus.background"), ";\n    color: ").concat(dt("autocomplete.option.focus.color"), ";\n}\n\n.p-autocomplete-option-selected {\n    background: ").concat(dt("autocomplete.option.selected.background"), ";\n    color: ").concat(dt("autocomplete.option.selected.color"), ";\n}\n\n.p-autocomplete-option-selected.p-focus {\n    background: ").concat(dt("autocomplete.option.selected.focus.background"), ";\n    color: ").concat(dt("autocomplete.option.selected.focus.color"), ";\n}\n\n.p-autocomplete-option-group {\n    margin: 0;\n    padding: ").concat(dt("autocomplete.option.group.padding"), ";\n    color: ").concat(dt("autocomplete.option.group.color"), ";\n    background: ").concat(dt("autocomplete.option.group.background"), ";\n    font-weight: ").concat(dt("autocomplete.option.group.font.weight"), ";\n}\n\n.p-autocomplete-input-multiple {\n    margin: 0;\n    list-style-type: none;\n    cursor: text;\n    overflow: hidden;\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n    padding: calc(").concat(dt("autocomplete.padding.y"), " / 2) ").concat(dt("autocomplete.padding.x"), ";\n    gap: calc(").concat(dt("autocomplete.padding.y"), " / 2);\n    color: ").concat(dt("autocomplete.color"), ";\n    background: ").concat(dt("autocomplete.background"), ";\n    border: 1px solid ").concat(dt("autocomplete.border.color"), ";\n    border-radius: ").concat(dt("autocomplete.border.radius"), ";\n    width: 100%;\n    transition: background ").concat(dt("autocomplete.transition.duration"), ", color ").concat(dt("autocomplete.transition.duration"), ", border-color ").concat(dt("autocomplete.transition.duration"), ", outline-color ").concat(dt("autocomplete.transition.duration"), ", box-shadow ").concat(dt("autocomplete.transition.duration"), ";\n    outline-color: transparent;\n    box-shadow: ").concat(dt("autocomplete.shadow"), ";\n}\n\n.p-autocomplete:not(.p-disabled):hover .p-autocomplete-input-multiple {\n    border-color: ").concat(dt("autocomplete.hover.border.color"), ";\n}\n\n.p-autocomplete:not(.p-disabled).p-focus .p-autocomplete-input-multiple {\n    border-color: ").concat(dt("autocomplete.focus.border.color"), ";\n    box-shadow: ").concat(dt("autocomplete.focus.ring.shadow"), ";\n    outline: ").concat(dt("autocomplete.focus.ring.width"), " ").concat(dt("autocomplete.focus.ring.style"), " ").concat(dt("autocomplete.focus.ring.color"), ";\n    outline-offset: ").concat(dt("autocomplete.focus.ring.offset"), ";\n}\n\n.p-autocomplete.p-invalid .p-autocomplete-input-multiple {\n    border-color: ").concat(dt("autocomplete.invalid.border.color"), ";\n}\n\n.p-variant-filled.p-autocomplete-input-multiple {\n    background: ").concat(dt("autocomplete.filled.background"), ";\n}\n\n.p-autocomplete:not(.p-disabled):hover .p-variant-filled.p-autocomplete-input-multiple {\n    background: ").concat(dt("autocomplete.filled.hover.background"), ";\n}\n\n.p-autocomplete:not(.p-disabled).p-focus .p-variant-filled.p-autocomplete-input-multiple  {\n    background: ").concat(dt("autocomplete.filled.focus.background"), ";\n}\n\n.p-autocomplete.p-disabled .p-autocomplete-input-multiple {\n    opacity: 1;\n    background: ").concat(dt("autocomplete.disabled.background"), ";\n    color: ").concat(dt("autocomplete.disabled.color"), ";\n}\n\n.p-autocomplete-chip.p-chip {\n    padding-block-start: calc(").concat(dt("autocomplete.padding.y"), " / 2);\n    padding-block-end: calc(").concat(dt("autocomplete.padding.y"), " / 2);\n    border-radius: ").concat(dt("autocomplete.chip.border.radius"), ";\n}\n\n.p-autocomplete-input-multiple:has(.p-autocomplete-chip) {\n    padding-inline-start: calc(").concat(dt("autocomplete.padding.y"), " / 2);\n    padding-inline-end: calc(").concat(dt("autocomplete.padding.y"), " / 2);\n}\n\n.p-autocomplete-chip-item.p-focus .p-autocomplete-chip {\n    background: ").concat(dt("autocomplete.chip.focus.background"), ";\n    color: ").concat(dt("autocomplete.chip.focus.color"), ";\n}\n\n.p-autocomplete-input-chip {\n    flex: 1 1 auto;\n    display: inline-flex;\n    padding-block-start: calc(").concat(dt("autocomplete.padding.y"), " / 2);\n    padding-block-end: calc(").concat(dt("autocomplete.padding.y"), " / 2);\n}\n\n.p-autocomplete-input-chip input {\n    border: 0 none;\n    outline: 0 none;\n    background: transparent;\n    margin: 0;\n    padding: 0;\n    box-shadow: none;\n    border-radius: 0;\n    width: 100%;\n    font-family: inherit;\n    font-feature-settings: inherit;\n    font-size: 1rem;\n    color: inherit;\n}\n\n.p-autocomplete-input-chip input::placeholder {\n    color: ").concat(dt("autocomplete.placeholder.color"), ";\n}\n\n.p-autocomplete.p-invalid .p-autocomplete-input-chip input::placeholder {\n    color: ").concat(dt("autocomplete.invalid.placeholder.color"), ";\n}\n\n.p-autocomplete-empty-message {\n    padding: ").concat(dt("autocomplete.empty.message.padding"), ";\n}\n\n.p-autocomplete-fluid {\n    display: flex;\n}\n\n.p-autocomplete-fluid:has(.p-autocomplete-dropdown) .p-autocomplete-input {\n    width: 1%;\n}\n\n.p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown {\n    width: ").concat(dt("autocomplete.dropdown.sm.width"), ";\n}\n\n.p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown .p-icon {\n    font-size: ").concat(dt("form.field.sm.font.size"), ";\n    width: ").concat(dt("form.field.sm.font.size"), ";\n    height: ").concat(dt("form.field.sm.font.size"), ";\n}\n\n.p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown {\n    width: ").concat(dt("autocomplete.dropdown.lg.width"), ";\n}\n\n.p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown .p-icon {\n    font-size: ").concat(dt("form.field.lg.font.size"), ";\n    width: ").concat(dt("form.field.lg.font.size"), ";\n    height: ").concat(dt("form.field.lg.font.size"), ";\n}\n");
};
var inlineStyles$1 = {
  root: {
    position: "relative"
  }
};
var classes$2 = {
  root: function root2(_ref2) {
    var instance = _ref2.instance, props = _ref2.props;
    return ["p-autocomplete p-component p-inputwrapper", {
      "p-disabled": props.disabled,
      "p-invalid": instance.$invalid,
      "p-focus": instance.focused,
      "p-inputwrapper-filled": instance.$filled || isNotEmpty(instance.inputValue),
      "p-inputwrapper-focus": instance.focused,
      "p-autocomplete-open": instance.overlayVisible,
      "p-autocomplete-fluid": instance.$fluid
    }];
  },
  pcInputText: "p-autocomplete-input",
  inputMultiple: function inputMultiple(_ref3) {
    _ref3.props;
    var instance = _ref3.instance;
    return ["p-autocomplete-input-multiple", {
      "p-variant-filled": instance.$variant === "filled"
    }];
  },
  chipItem: function chipItem(_ref4) {
    var instance = _ref4.instance, i = _ref4.i;
    return ["p-autocomplete-chip-item", {
      "p-focus": instance.focusedMultipleOptionIndex === i
    }];
  },
  pcChip: "p-autocomplete-chip",
  chipIcon: "p-autocomplete-chip-icon",
  inputChip: "p-autocomplete-input-chip",
  loader: "p-autocomplete-loader",
  dropdown: "p-autocomplete-dropdown",
  overlay: "p-autocomplete-overlay p-component",
  listContainer: "p-autocomplete-list-container",
  list: "p-autocomplete-list",
  optionGroup: "p-autocomplete-option-group",
  option: function option(_ref5) {
    var instance = _ref5.instance, _option = _ref5.option, i = _ref5.i, getItemOptions = _ref5.getItemOptions;
    return ["p-autocomplete-option", {
      "p-autocomplete-option-selected": instance.isSelected(_option),
      "p-focus": instance.focusedOptionIndex === instance.getOptionIndex(i, getItemOptions),
      "p-disabled": instance.isOptionDisabled(_option)
    }];
  },
  emptyMessage: "p-autocomplete-empty-message"
};
var AutoCompleteStyle = BaseStyle.extend({
  name: "autocomplete",
  theme: theme$2,
  classes: classes$2,
  inlineStyles: inlineStyles$1
});
var script$1$2 = {
  name: "BaseAutoComplete",
  "extends": script$e,
  props: {
    suggestions: {
      type: Array,
      "default": null
    },
    optionLabel: null,
    optionDisabled: null,
    optionGroupLabel: null,
    optionGroupChildren: null,
    scrollHeight: {
      type: String,
      "default": "14rem"
    },
    dropdown: {
      type: Boolean,
      "default": false
    },
    dropdownMode: {
      type: String,
      "default": "blank"
    },
    multiple: {
      type: Boolean,
      "default": false
    },
    loading: {
      type: Boolean,
      "default": false
    },
    placeholder: {
      type: String,
      "default": null
    },
    dataKey: {
      type: String,
      "default": null
    },
    minLength: {
      type: Number,
      "default": 1
    },
    delay: {
      type: Number,
      "default": 300
    },
    appendTo: {
      type: [String, Object],
      "default": "body"
    },
    forceSelection: {
      type: Boolean,
      "default": false
    },
    completeOnFocus: {
      type: Boolean,
      "default": false
    },
    inputId: {
      type: String,
      "default": null
    },
    inputStyle: {
      type: Object,
      "default": null
    },
    inputClass: {
      type: [String, Object],
      "default": null
    },
    panelStyle: {
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
    dropdownIcon: {
      type: String,
      "default": null
    },
    dropdownClass: {
      type: [String, Object],
      "default": null
    },
    loader: {
      type: String,
      "default": null
    },
    loadingIcon: {
      type: String,
      "default": null
    },
    removeTokenIcon: {
      type: String,
      "default": null
    },
    chipIcon: {
      type: String,
      "default": null
    },
    virtualScrollerOptions: {
      type: Object,
      "default": null
    },
    autoOptionFocus: {
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
    searchLocale: {
      type: String,
      "default": void 0
    },
    searchMessage: {
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
    emptySearchMessage: {
      type: String,
      "default": null
    },
    showEmptyMessage: {
      type: Boolean,
      "default": true
    },
    tabindex: {
      type: Number,
      "default": 0
    },
    typeahead: {
      type: Boolean,
      "default": true
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
  style: AutoCompleteStyle,
  provide: function provide4() {
    return {
      $pcAutoComplete: this,
      $parentInstance: this
    };
  }
};
function _typeof$1$1(o) {
  "@babel/helpers - typeof";
  return _typeof$1$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$1$1(o);
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
var script$5 = {
  name: "AutoComplete",
  "extends": script$1$2,
  inheritAttrs: false,
  emits: ["change", "focus", "blur", "item-select", "item-unselect", "option-select", "option-unselect", "dropdown-click", "clear", "complete", "before-show", "before-hide", "show", "hide"],
  inject: {
    $pcFluid: {
      "default": null
    }
  },
  outsideClickListener: null,
  resizeListener: null,
  scrollHandler: null,
  overlay: null,
  virtualScroller: null,
  searchTimeout: null,
  dirty: false,
  data: function data3() {
    return {
      id: this.$attrs.id,
      clicked: false,
      focused: false,
      focusedOptionIndex: -1,
      focusedMultipleOptionIndex: -1,
      overlayVisible: false,
      searching: false
    };
  },
  watch: {
    "$attrs.id": function $attrsId2(newValue) {
      this.id = newValue || UniqueComponentId();
    },
    suggestions: function suggestions() {
      if (this.searching) {
        this.show();
        this.focusedOptionIndex = this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
        this.searching = false;
        !this.showEmptyMessage && this.visibleOptions.length === 0 && this.hide();
      }
      this.autoUpdateModel();
    }
  },
  mounted: function mounted2() {
    this.id = this.id || UniqueComponentId();
    this.autoUpdateModel();
  },
  updated: function updated() {
    if (this.overlayVisible) {
      this.alignOverlay();
    }
  },
  beforeUnmount: function beforeUnmount2() {
    this.unbindOutsideClickListener();
    this.unbindResizeListener();
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
      return option2;
    },
    getOptionRenderKey: function getOptionRenderKey(option2, index) {
      return (this.dataKey ? resolveFieldData(option2, this.dataKey) : this.getOptionLabel(option2)) + "_" + index;
    },
    getPTOptions: function getPTOptions2(option2, itemOptions, index, key) {
      return this.ptm(key, {
        context: {
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
    show: function show2(isFocus) {
      this.$emit("before-show");
      this.dirty = true;
      this.overlayVisible = true;
      this.focusedOptionIndex = this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
      isFocus && focus(this.multiple ? this.$refs.focusInput : this.$refs.focusInput.$el);
    },
    hide: function hide2(isFocus) {
      var _this2 = this;
      var _hide = function _hide2() {
        var _this2$$refs$focusInp;
        _this2.$emit("before-hide");
        _this2.dirty = isFocus;
        _this2.overlayVisible = false;
        _this2.clicked = false;
        _this2.focusedOptionIndex = -1;
        isFocus && focus(_this2.multiple ? _this2.$refs.focusInput : (_this2$$refs$focusInp = _this2.$refs.focusInput) === null || _this2$$refs$focusInp === void 0 ? void 0 : _this2$$refs$focusInp.$el);
      };
      setTimeout(function() {
        _hide();
      }, 0);
    },
    onFocus: function onFocus(event) {
      if (this.disabled) {
        return;
      }
      if (!this.dirty && this.completeOnFocus) {
        this.search(event, event.target.value, "focus");
      }
      this.dirty = true;
      this.focused = true;
      if (this.overlayVisible) {
        this.focusedOptionIndex = this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
        this.scrollInView(this.focusedOptionIndex);
      }
      this.$emit("focus", event);
    },
    onBlur: function onBlur(event) {
      var _this$formField$onBlu, _this$formField;
      this.dirty = false;
      this.focused = false;
      this.focusedOptionIndex = -1;
      this.$emit("blur", event);
      (_this$formField$onBlu = (_this$formField = this.formField).onBlur) === null || _this$formField$onBlu === void 0 || _this$formField$onBlu.call(_this$formField);
    },
    onKeyDown: function onKeyDown(event) {
      if (this.disabled) {
        event.preventDefault();
        return;
      }
      switch (event.code) {
        case "ArrowDown":
          this.onArrowDownKey(event);
          break;
        case "ArrowUp":
          this.onArrowUpKey(event);
          break;
        case "ArrowLeft":
          this.onArrowLeftKey(event);
          break;
        case "ArrowRight":
          this.onArrowRightKey(event);
          break;
        case "Home":
          this.onHomeKey(event);
          break;
        case "End":
          this.onEndKey(event);
          break;
        case "PageDown":
          this.onPageDownKey(event);
          break;
        case "PageUp":
          this.onPageUpKey(event);
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
          this.onBackspaceKey(event);
          break;
      }
      this.clicked = false;
    },
    onInput: function onInput(event) {
      var _this3 = this;
      if (this.typeahead) {
        if (this.searchTimeout) {
          clearTimeout(this.searchTimeout);
        }
        var query = event.target.value;
        if (!this.multiple) {
          this.updateModel(event, query);
        }
        if (query.length === 0) {
          this.hide();
          this.$emit("clear");
        } else {
          if (query.length >= this.minLength) {
            this.focusedOptionIndex = -1;
            this.searchTimeout = setTimeout(function() {
              _this3.search(event, query, "input");
            }, this.delay);
          } else {
            this.hide();
          }
        }
      }
    },
    onChange: function onChange(event) {
      var _this4 = this;
      if (this.forceSelection) {
        var valid = false;
        if (this.visibleOptions && !this.multiple) {
          var value = this.multiple ? this.$refs.focusInput.value : this.$refs.focusInput.$el.value;
          var matchedValue = this.visibleOptions.find(function(option2) {
            return _this4.isOptionMatched(option2, value || "");
          });
          if (matchedValue !== void 0) {
            valid = true;
            !this.isSelected(matchedValue) && this.onOptionSelect(event, matchedValue);
          }
        }
        if (!valid) {
          if (this.multiple) this.$refs.focusInput.value = "";
          else this.$refs.focusInput.$el.value = "";
          this.$emit("clear");
          !this.multiple && this.updateModel(event, null);
        }
      }
    },
    onMultipleContainerFocus: function onMultipleContainerFocus() {
      if (this.disabled) {
        return;
      }
      this.focused = true;
    },
    onMultipleContainerBlur: function onMultipleContainerBlur() {
      this.focusedMultipleOptionIndex = -1;
      this.focused = false;
    },
    onMultipleContainerKeyDown: function onMultipleContainerKeyDown(event) {
      if (this.disabled) {
        event.preventDefault();
        return;
      }
      switch (event.code) {
        case "ArrowLeft":
          this.onArrowLeftKeyOnMultiple(event);
          break;
        case "ArrowRight":
          this.onArrowRightKeyOnMultiple(event);
          break;
        case "Backspace":
          this.onBackspaceKeyOnMultiple(event);
          break;
      }
    },
    onContainerClick: function onContainerClick(event) {
      this.clicked = true;
      if (this.disabled || this.searching || this.loading || this.isDropdownClicked(event)) {
        return;
      }
      if (!this.overlay || !this.overlay.contains(event.target)) {
        focus(this.multiple ? this.$refs.focusInput : this.$refs.focusInput.$el);
      }
    },
    onDropdownClick: function onDropdownClick(event) {
      var query = void 0;
      if (this.overlayVisible) {
        this.hide(true);
      } else {
        var target = this.multiple ? this.$refs.focusInput : this.$refs.focusInput.$el;
        focus(target);
        query = target.value;
        if (this.dropdownMode === "blank") this.search(event, "", "dropdown");
        else if (this.dropdownMode === "current") this.search(event, query, "dropdown");
      }
      this.$emit("dropdown-click", {
        originalEvent: event,
        query
      });
    },
    onOptionSelect: function onOptionSelect(event, option2) {
      var isHide = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
      var value = this.getOptionValue(option2);
      if (this.multiple) {
        this.$refs.focusInput.value = "";
        if (!this.isSelected(option2)) {
          this.updateModel(event, [].concat(_toConsumableArray(this.d_value || []), [value]));
        }
      } else {
        this.updateModel(event, value);
      }
      this.$emit("item-select", {
        originalEvent: event,
        value: option2
      });
      this.$emit("option-select", {
        originalEvent: event,
        value: option2
      });
      isHide && this.hide(true);
    },
    onOptionMouseMove: function onOptionMouseMove(event, index) {
      if (this.focusOnHover) {
        this.changeFocusedOptionIndex(event, index);
      }
    },
    onOverlayClick: function onOverlayClick2(event) {
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
    onArrowDownKey: function onArrowDownKey2(event) {
      if (!this.overlayVisible) {
        return;
      }
      var optionIndex = this.focusedOptionIndex !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex) : this.clicked ? this.findFirstOptionIndex() : this.findFirstFocusedOptionIndex();
      this.changeFocusedOptionIndex(event, optionIndex);
      event.preventDefault();
    },
    onArrowUpKey: function onArrowUpKey2(event) {
      if (!this.overlayVisible) {
        return;
      }
      if (event.altKey) {
        if (this.focusedOptionIndex !== -1) {
          this.onOptionSelect(event, this.visibleOptions[this.focusedOptionIndex]);
        }
        this.overlayVisible && this.hide();
        event.preventDefault();
      } else {
        var optionIndex = this.focusedOptionIndex !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex) : this.clicked ? this.findLastOptionIndex() : this.findLastFocusedOptionIndex();
        this.changeFocusedOptionIndex(event, optionIndex);
        event.preventDefault();
      }
    },
    onArrowLeftKey: function onArrowLeftKey(event) {
      var target = event.currentTarget;
      this.focusedOptionIndex = -1;
      if (this.multiple) {
        if (isEmpty(target.value) && this.$filled) {
          focus(this.$refs.multiContainer);
          this.focusedMultipleOptionIndex = this.d_value.length;
        } else {
          event.stopPropagation();
        }
      }
    },
    onArrowRightKey: function onArrowRightKey(event) {
      this.focusedOptionIndex = -1;
      this.multiple && event.stopPropagation();
    },
    onHomeKey: function onHomeKey2(event) {
      var currentTarget = event.currentTarget;
      var len = currentTarget.value.length;
      currentTarget.setSelectionRange(0, event.shiftKey ? len : 0);
      this.focusedOptionIndex = -1;
      event.preventDefault();
    },
    onEndKey: function onEndKey2(event) {
      var currentTarget = event.currentTarget;
      var len = currentTarget.value.length;
      currentTarget.setSelectionRange(event.shiftKey ? 0 : len, len);
      this.focusedOptionIndex = -1;
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
    onEnterKey: function onEnterKey2(event) {
      if (!this.typeahead) {
        if (this.multiple) {
          this.updateModel(event, [].concat(_toConsumableArray(this.d_value || []), [event.target.value]));
          this.$refs.focusInput.value = "";
        }
      } else {
        if (!this.overlayVisible) {
          this.focusedOptionIndex = -1;
          this.onArrowDownKey(event);
        } else {
          if (this.focusedOptionIndex !== -1) {
            this.onOptionSelect(event, this.visibleOptions[this.focusedOptionIndex]);
          }
          this.hide();
        }
      }
      event.preventDefault();
    },
    onEscapeKey: function onEscapeKey(event) {
      this.overlayVisible && this.hide(true);
      event.preventDefault();
    },
    onTabKey: function onTabKey(event) {
      if (this.focusedOptionIndex !== -1) {
        this.onOptionSelect(event, this.visibleOptions[this.focusedOptionIndex]);
      }
      this.overlayVisible && this.hide();
    },
    onBackspaceKey: function onBackspaceKey(event) {
      if (this.multiple) {
        if (isNotEmpty(this.d_value) && !this.$refs.focusInput.value) {
          var removedValue = this.d_value[this.d_value.length - 1];
          var newValue = this.d_value.slice(0, -1);
          this.writeValue(newValue, event);
          this.$emit("item-unselect", {
            originalEvent: event,
            value: removedValue
          });
          this.$emit("option-unselect", {
            originalEvent: event,
            value: removedValue
          });
        }
        event.stopPropagation();
      }
    },
    onArrowLeftKeyOnMultiple: function onArrowLeftKeyOnMultiple() {
      this.focusedMultipleOptionIndex = this.focusedMultipleOptionIndex < 1 ? 0 : this.focusedMultipleOptionIndex - 1;
    },
    onArrowRightKeyOnMultiple: function onArrowRightKeyOnMultiple() {
      this.focusedMultipleOptionIndex++;
      if (this.focusedMultipleOptionIndex > this.d_value.length - 1) {
        this.focusedMultipleOptionIndex = -1;
        focus(this.$refs.focusInput);
      }
    },
    onBackspaceKeyOnMultiple: function onBackspaceKeyOnMultiple(event) {
      if (this.focusedMultipleOptionIndex !== -1) {
        this.removeOption(event, this.focusedMultipleOptionIndex);
      }
    },
    onOverlayEnter: function onOverlayEnter(el) {
      ZIndex.set("overlay", el, this.$primevue.config.zIndex.overlay);
      addStyle(el, {
        position: "absolute",
        top: "0",
        left: "0"
      });
      this.alignOverlay();
    },
    onOverlayAfterEnter: function onOverlayAfterEnter() {
      this.bindOutsideClickListener();
      this.bindScrollListener();
      this.bindResizeListener();
      this.$emit("show");
    },
    onOverlayLeave: function onOverlayLeave() {
      this.unbindOutsideClickListener();
      this.unbindScrollListener();
      this.unbindResizeListener();
      this.$emit("hide");
      this.overlay = null;
    },
    onOverlayAfterLeave: function onOverlayAfterLeave(el) {
      ZIndex.clear(el);
    },
    alignOverlay: function alignOverlay2() {
      var target = this.multiple ? this.$refs.multiContainer : this.$refs.focusInput.$el;
      if (this.appendTo === "self") {
        relativePosition(this.overlay, target);
      } else {
        this.overlay.style.minWidth = getOuterWidth(target) + "px";
        absolutePosition(this.overlay, target);
      }
    },
    bindOutsideClickListener: function bindOutsideClickListener2() {
      var _this5 = this;
      if (!this.outsideClickListener) {
        this.outsideClickListener = function(event) {
          if (_this5.overlayVisible && _this5.overlay && _this5.isOutsideClicked(event)) {
            _this5.hide();
          }
        };
        (void 0).addEventListener("click", this.outsideClickListener);
      }
    },
    unbindOutsideClickListener: function unbindOutsideClickListener2() {
      if (this.outsideClickListener) {
        (void 0).removeEventListener("click", this.outsideClickListener);
        this.outsideClickListener = null;
      }
    },
    bindScrollListener: function bindScrollListener2() {
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
    unbindScrollListener: function unbindScrollListener2() {
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
    isOutsideClicked: function isOutsideClicked(event) {
      return !this.overlay.contains(event.target) && !this.isInputClicked(event) && !this.isDropdownClicked(event);
    },
    isInputClicked: function isInputClicked(event) {
      if (this.multiple) return event.target === this.$refs.multiContainer || this.$refs.multiContainer.contains(event.target);
      else return event.target === this.$refs.focusInput.$el;
    },
    isDropdownClicked: function isDropdownClicked(event) {
      return this.$refs.dropdownButton ? event.target === this.$refs.dropdownButton || this.$refs.dropdownButton.contains(event.target) : false;
    },
    isOptionMatched: function isOptionMatched(option2, value) {
      var _this$getOptionLabel;
      return this.isValidOption(option2) && ((_this$getOptionLabel = this.getOptionLabel(option2)) === null || _this$getOptionLabel === void 0 ? void 0 : _this$getOptionLabel.toLocaleLowerCase(this.searchLocale)) === value.toLocaleLowerCase(this.searchLocale);
    },
    isValidOption: function isValidOption(option2) {
      return isNotEmpty(option2) && !(this.isOptionDisabled(option2) || this.isOptionGroup(option2));
    },
    isValidSelectedOption: function isValidSelectedOption(option2) {
      return this.isValidOption(option2) && this.isSelected(option2);
    },
    isEquals: function isEquals(value1, value2) {
      return equals(value1, value2, this.equalityKey);
    },
    isSelected: function isSelected(option2) {
      var _this8 = this;
      var optionValue = this.getOptionValue(option2);
      return this.multiple ? (this.d_value || []).some(function(value) {
        return _this8.isEquals(value, optionValue);
      }) : this.isEquals(this.d_value, this.getOptionValue(option2));
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
    findNextOptionIndex: function findNextOptionIndex2(index) {
      var _this11 = this;
      var matchedOptionIndex = index < this.visibleOptions.length - 1 ? this.visibleOptions.slice(index + 1).findIndex(function(option2) {
        return _this11.isValidOption(option2);
      }) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
    },
    findPrevOptionIndex: function findPrevOptionIndex2(index) {
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
    search: function search(event, query, source) {
      if (query === void 0 || query === null) {
        return;
      }
      if (source === "input" && query.trim().length === 0) {
        return;
      }
      this.searching = true;
      this.$emit("complete", {
        originalEvent: event,
        query
      });
    },
    removeOption: function removeOption(event, index) {
      var _this14 = this;
      var removedOption = this.d_value[index];
      var value = this.d_value.filter(function(_, i) {
        return i !== index;
      }).map(function(option2) {
        return _this14.getOptionValue(option2);
      });
      this.updateModel(event, value);
      this.$emit("item-unselect", {
        originalEvent: event,
        value: removedOption
      });
      this.$emit("option-unselect", {
        originalEvent: event,
        value: removedOption
      });
      this.dirty = true;
      focus(this.multiple ? this.$refs.focusInput : this.$refs.focusInput.$el);
    },
    changeFocusedOptionIndex: function changeFocusedOptionIndex2(event, index) {
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
    flatOptions: function flatOptions(options) {
      var _this16 = this;
      return (options || []).reduce(function(result, option2, index) {
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
    listRef: function listRef2(el, contentRef2) {
      this.list = el;
      contentRef2 && contentRef2(el);
    },
    virtualScrollerRef: function virtualScrollerRef(el) {
      this.virtualScroller = el;
    }
  },
  computed: {
    visibleOptions: function visibleOptions() {
      return this.optionGroupLabel ? this.flatOptions(this.suggestions) : this.suggestions || [];
    },
    inputValue: function inputValue() {
      if (this.$filled) {
        if (_typeof$1$1(this.d_value) === "object") {
          var label3 = this.getOptionLabel(this.d_value);
          return label3 != null ? label3 : this.d_value;
        } else {
          return this.d_value;
        }
      } else {
        return "";
      }
    },
    // @deprecated use $filled instead.
    hasSelectedOption: function hasSelectedOption() {
      return this.$filled;
    },
    equalityKey: function equalityKey() {
      return this.dataKey;
    },
    searchResultMessageText: function searchResultMessageText() {
      return isNotEmpty(this.visibleOptions) && this.overlayVisible ? this.searchMessageText.replaceAll("{0}", this.visibleOptions.length) : this.emptySearchMessageText;
    },
    searchMessageText: function searchMessageText() {
      return this.searchMessage || this.$primevue.config.locale.searchMessage || "";
    },
    emptySearchMessageText: function emptySearchMessageText() {
      return this.emptySearchMessage || this.$primevue.config.locale.emptySearchMessage || "";
    },
    selectionMessageText: function selectionMessageText() {
      return this.selectionMessage || this.$primevue.config.locale.selectionMessage || "";
    },
    emptySelectionMessageText: function emptySelectionMessageText() {
      return this.emptySelectionMessage || this.$primevue.config.locale.emptySelectionMessage || "";
    },
    selectedMessageText: function selectedMessageText() {
      return this.$filled ? this.selectionMessageText.replaceAll("{0}", this.multiple ? this.d_value.length : "1") : this.emptySelectionMessageText;
    },
    listAriaLabel: function listAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.listLabel : void 0;
    },
    focusedOptionId: function focusedOptionId2() {
      return this.focusedOptionIndex !== -1 ? "".concat(this.id, "_").concat(this.focusedOptionIndex) : null;
    },
    focusedMultipleOptionId: function focusedMultipleOptionId() {
      return this.focusedMultipleOptionIndex !== -1 ? "".concat(this.id, "_multiple_option_").concat(this.focusedMultipleOptionIndex) : null;
    },
    ariaSetSize: function ariaSetSize() {
      var _this17 = this;
      return this.visibleOptions.filter(function(option2) {
        return !_this17.isOptionGroup(option2);
      }).length;
    },
    virtualScrollerDisabled: function virtualScrollerDisabled() {
      return !this.virtualScrollerOptions;
    },
    panelId: function panelId() {
      return this.id + "_panel";
    }
  },
  components: {
    InputText: script$7$1,
    VirtualScroller: script$2$3,
    Portal: script$3$1,
    ChevronDownIcon: script$c,
    SpinnerIcon: script$3$2,
    Chip: script$6
  },
  directives: {
    ripple: Ripple
  }
};
function _typeof$2(o) {
  "@babel/helpers - typeof";
  return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$2(o);
}
function ownKeys$2(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$2(Object(t), true).forEach(function(r2) {
      _defineProperty$2(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$2(e, r, t) {
  return (r = _toPropertyKey$2(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey$2(t) {
  var i = _toPrimitive$2(t, "string");
  return "symbol" == _typeof$2(i) ? i : i + "";
}
function _toPrimitive$2(t, r) {
  if ("object" != _typeof$2(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof$2(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var _hoisted_1$2 = ["aria-activedescendant"];
var _hoisted_2$2 = ["id", "aria-label", "aria-setsize", "aria-posinset"];
var _hoisted_3 = ["id", "placeholder", "tabindex", "disabled", "aria-label", "aria-labelledby", "aria-expanded", "aria-controls", "aria-activedescendant", "aria-invalid"];
var _hoisted_4 = ["disabled", "aria-expanded", "aria-controls"];
var _hoisted_5 = ["id"];
var _hoisted_6 = ["id", "aria-label"];
var _hoisted_7 = ["id"];
var _hoisted_8 = ["id", "aria-label", "aria-selected", "aria-disabled", "aria-setsize", "aria-posinset", "onClick", "onMousemove", "data-p-selected", "data-p-focus", "data-p-disabled"];
function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_InputText = resolveComponent("InputText");
  var _component_Chip = resolveComponent("Chip");
  var _component_SpinnerIcon = resolveComponent("SpinnerIcon");
  var _component_VirtualScroller = resolveComponent("VirtualScroller");
  var _component_Portal = resolveComponent("Portal");
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("div", mergeProps({
    ref: "container",
    "class": _ctx.cx("root"),
    style: _ctx.sx("root"),
    onClick: _cache[11] || (_cache[11] = function() {
      return $options.onContainerClick && $options.onContainerClick.apply($options, arguments);
    })
  }, _ctx.ptmi("root")), [!_ctx.multiple ? (openBlock(), createBlock(_component_InputText, {
    key: 0,
    ref: "focusInput",
    id: _ctx.inputId,
    type: "text",
    name: _ctx.$formName,
    "class": normalizeClass([_ctx.cx("pcInputText"), _ctx.inputClass]),
    style: normalizeStyle(_ctx.inputStyle),
    value: $options.inputValue,
    placeholder: _ctx.placeholder,
    tabindex: !_ctx.disabled ? _ctx.tabindex : -1,
    fluid: _ctx.$fluid,
    disabled: _ctx.disabled,
    size: _ctx.size,
    invalid: _ctx.invalid,
    variant: _ctx.variant,
    autocomplete: "off",
    role: "combobox",
    "aria-label": _ctx.ariaLabel,
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-haspopup": "listbox",
    "aria-autocomplete": "list",
    "aria-expanded": $data.overlayVisible,
    "aria-controls": $options.panelId,
    "aria-activedescendant": $data.focused ? $options.focusedOptionId : void 0,
    onFocus: $options.onFocus,
    onBlur: $options.onBlur,
    onKeydown: $options.onKeyDown,
    onInput: $options.onInput,
    onChange: $options.onChange,
    unstyled: _ctx.unstyled,
    pt: _ctx.ptm("pcInputText")
  }, null, 8, ["id", "name", "class", "style", "value", "placeholder", "tabindex", "fluid", "disabled", "size", "invalid", "variant", "aria-label", "aria-labelledby", "aria-expanded", "aria-controls", "aria-activedescendant", "onFocus", "onBlur", "onKeydown", "onInput", "onChange", "unstyled", "pt"])) : createCommentVNode("", true), _ctx.multiple ? (openBlock(), createElementBlock("ul", mergeProps({
    key: 1,
    ref: "multiContainer",
    "class": _ctx.cx("inputMultiple"),
    tabindex: "-1",
    role: "listbox",
    "aria-orientation": "horizontal",
    "aria-activedescendant": $data.focused ? $options.focusedMultipleOptionId : void 0,
    onFocus: _cache[5] || (_cache[5] = function() {
      return $options.onMultipleContainerFocus && $options.onMultipleContainerFocus.apply($options, arguments);
    }),
    onBlur: _cache[6] || (_cache[6] = function() {
      return $options.onMultipleContainerBlur && $options.onMultipleContainerBlur.apply($options, arguments);
    }),
    onKeydown: _cache[7] || (_cache[7] = function() {
      return $options.onMultipleContainerKeyDown && $options.onMultipleContainerKeyDown.apply($options, arguments);
    })
  }, _ctx.ptm("inputMultiple")), [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.d_value, function(option2, i) {
    return openBlock(), createElementBlock("li", mergeProps({
      key: "".concat(i, "_").concat($options.getOptionLabel(option2)),
      id: $data.id + "_multiple_option_" + i,
      "class": _ctx.cx("chipItem", {
        i
      }),
      role: "option",
      "aria-label": $options.getOptionLabel(option2),
      "aria-selected": true,
      "aria-setsize": _ctx.d_value.length,
      "aria-posinset": i + 1,
      ref_for: true
    }, _ctx.ptm("chipItem")), [renderSlot(_ctx.$slots, "chip", mergeProps({
      "class": _ctx.cx("pcChip"),
      value: option2,
      index: i,
      removeCallback: function removeCallback(event) {
        return $options.removeOption(event, i);
      },
      ref_for: true
    }, _ctx.ptm("pcChip")), function() {
      return [createVNode(_component_Chip, {
        "class": normalizeClass(_ctx.cx("pcChip")),
        label: $options.getOptionLabel(option2),
        removeIcon: _ctx.chipIcon || _ctx.removeTokenIcon,
        removable: "",
        unstyled: _ctx.unstyled,
        onRemove: function onRemove($event) {
          return $options.removeOption($event, i);
        },
        pt: _ctx.ptm("pcChip")
      }, {
        removeicon: withCtx(function() {
          return [renderSlot(_ctx.$slots, _ctx.$slots.chipicon ? "chipicon" : "removetokenicon", {
            "class": normalizeClass(_ctx.cx("chipIcon")),
            index: i,
            removeCallback: function removeCallback(event) {
              return $options.removeOption(event, i);
            }
          })];
        }),
        _: 2
      }, 1032, ["class", "label", "removeIcon", "unstyled", "onRemove", "pt"])];
    })], 16, _hoisted_2$2);
  }), 128)), createElementVNode("li", mergeProps({
    "class": _ctx.cx("inputChip"),
    role: "option"
  }, _ctx.ptm("inputChip")), [createElementVNode("input", mergeProps({
    ref: "focusInput",
    id: _ctx.inputId,
    type: "text",
    style: _ctx.inputStyle,
    "class": _ctx.inputClass,
    placeholder: _ctx.placeholder,
    tabindex: !_ctx.disabled ? _ctx.tabindex : -1,
    disabled: _ctx.disabled,
    autocomplete: "off",
    role: "combobox",
    "aria-label": _ctx.ariaLabel,
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-haspopup": "listbox",
    "aria-autocomplete": "list",
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
      return $options.onInput && $options.onInput.apply($options, arguments);
    }),
    onChange: _cache[4] || (_cache[4] = function() {
      return $options.onChange && $options.onChange.apply($options, arguments);
    })
  }, _ctx.ptm("input")), null, 16, _hoisted_3)], 16)], 16, _hoisted_1$2)) : createCommentVNode("", true), $data.searching || _ctx.loading ? renderSlot(_ctx.$slots, _ctx.$slots.loader ? "loader" : "loadingicon", {
    key: 2,
    "class": normalizeClass(_ctx.cx("loader"))
  }, function() {
    return [_ctx.loader || _ctx.loadingIcon ? (openBlock(), createElementBlock("i", mergeProps({
      key: 0,
      "class": ["pi-spin", _ctx.cx("loader"), _ctx.loader, _ctx.loadingIcon],
      "aria-hidden": "true"
    }, _ctx.ptm("loader")), null, 16)) : (openBlock(), createBlock(_component_SpinnerIcon, mergeProps({
      key: 1,
      "class": _ctx.cx("loader"),
      spin: "",
      "aria-hidden": "true"
    }, _ctx.ptm("loader")), null, 16, ["class"]))];
  }) : createCommentVNode("", true), renderSlot(_ctx.$slots, _ctx.$slots.dropdown ? "dropdown" : "dropdownbutton", {
    toggleCallback: function toggleCallback(event) {
      return $options.onDropdownClick(event);
    }
  }, function() {
    return [_ctx.dropdown ? (openBlock(), createElementBlock("button", mergeProps({
      key: 0,
      ref: "dropdownButton",
      type: "button",
      "class": [_ctx.cx("dropdown"), _ctx.dropdownClass],
      disabled: _ctx.disabled,
      "aria-haspopup": "listbox",
      "aria-expanded": $data.overlayVisible,
      "aria-controls": $options.panelId,
      onClick: _cache[8] || (_cache[8] = function() {
        return $options.onDropdownClick && $options.onDropdownClick.apply($options, arguments);
      })
    }, _ctx.ptm("dropdown")), [renderSlot(_ctx.$slots, "dropdownicon", {
      "class": normalizeClass(_ctx.dropdownIcon)
    }, function() {
      return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.dropdownIcon ? "span" : "ChevronDownIcon"), mergeProps({
        "class": _ctx.dropdownIcon
      }, _ctx.ptm("dropdownIcon")), null, 16, ["class"]))];
    })], 16, _hoisted_4)) : createCommentVNode("", true)];
  }), createElementVNode("span", mergeProps({
    role: "status",
    "aria-live": "polite",
    "class": "p-hidden-accessible"
  }, _ctx.ptm("hiddenSearchResult"), {
    "data-p-hidden-accessible": true
  }), toDisplayString($options.searchResultMessageText), 17), createVNode(_component_Portal, {
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
            id: $options.panelId,
            "class": [_ctx.cx("overlay"), _ctx.panelClass, _ctx.overlayClass],
            style: _objectSpread$2(_objectSpread$2({}, _ctx.panelStyle), _ctx.overlayStyle),
            onClick: _cache[9] || (_cache[9] = function() {
              return $options.onOverlayClick && $options.onOverlayClick.apply($options, arguments);
            }),
            onKeydown: _cache[10] || (_cache[10] = function() {
              return $options.onOverlayKeyDown && $options.onOverlayKeyDown.apply($options, arguments);
            })
          }, _ctx.ptm("overlay")), [renderSlot(_ctx.$slots, "header", {
            value: _ctx.d_value,
            suggestions: $options.visibleOptions
          }), createElementVNode("div", mergeProps({
            "class": _ctx.cx("listContainer"),
            style: {
              "max-height": $options.virtualScrollerDisabled ? _ctx.scrollHeight : ""
            }
          }, _ctx.ptm("listContainer")), [createVNode(_component_VirtualScroller, mergeProps({
            ref: $options.virtualScrollerRef
          }, _ctx.virtualScrollerOptions, {
            style: {
              height: _ctx.scrollHeight
            },
            items: $options.visibleOptions,
            tabindex: -1,
            disabled: $options.virtualScrollerDisabled,
            pt: _ctx.ptm("virtualScroller")
          }), createSlots({
            content: withCtx(function(_ref) {
              var styleClass = _ref.styleClass, contentRef2 = _ref.contentRef, items = _ref.items, getItemOptions = _ref.getItemOptions, contentStyle = _ref.contentStyle, itemSize = _ref.itemSize;
              return [createElementVNode("ul", mergeProps({
                ref: function ref2(el) {
                  return $options.listRef(el, contentRef2);
                },
                id: $data.id + "_list",
                "class": [_ctx.cx("list"), styleClass],
                style: contentStyle,
                role: "listbox",
                "aria-label": $options.listAriaLabel
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
                  return [createTextVNode(toDisplayString($options.getOptionGroupLabel(option2.optionGroup)), 1)];
                })], 16, _hoisted_7)) : withDirectives((openBlock(), createElementBlock("li", mergeProps({
                  key: 1,
                  id: $data.id + "_" + $options.getOptionIndex(i, getItemOptions),
                  style: {
                    height: itemSize ? itemSize + "px" : void 0
                  },
                  "class": _ctx.cx("option", {
                    option: option2,
                    i,
                    getItemOptions
                  }),
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
                  "data-p-focus": $data.focusedOptionIndex === $options.getOptionIndex(i, getItemOptions),
                  "data-p-disabled": $options.isOptionDisabled(option2),
                  ref_for: true
                }, $options.getPTOptions(option2, getItemOptions, i, "option")), [renderSlot(_ctx.$slots, "option", {
                  option: option2,
                  index: $options.getOptionIndex(i, getItemOptions)
                }, function() {
                  return [createTextVNode(toDisplayString($options.getOptionLabel(option2)), 1)];
                })], 16, _hoisted_8)), [[_directive_ripple]])], 64);
              }), 128)), _ctx.showEmptyMessage && (!items || items && items.length === 0) ? (openBlock(), createElementBlock("li", mergeProps({
                key: 0,
                "class": _ctx.cx("emptyMessage"),
                role: "option"
              }, _ctx.ptm("emptyMessage")), [renderSlot(_ctx.$slots, "empty", {}, function() {
                return [createTextVNode(toDisplayString($options.searchResultMessageText), 1)];
              })], 16)) : createCommentVNode("", true)], 16, _hoisted_6)];
            }),
            _: 2
          }, [_ctx.$slots.loader ? {
            name: "loader",
            fn: withCtx(function(_ref2) {
              var options = _ref2.options;
              return [renderSlot(_ctx.$slots, "loader", {
                options
              })];
            }),
            key: "0"
          } : void 0]), 1040, ["style", "items", "disabled", "pt"])], 16), renderSlot(_ctx.$slots, "footer", {
            value: _ctx.d_value,
            suggestions: $options.visibleOptions
          }), createElementVNode("span", mergeProps({
            role: "status",
            "aria-live": "polite",
            "class": "p-hidden-accessible"
          }, _ctx.ptm("hiddenSelectedMessage"), {
            "data-p-hidden-accessible": true
          }), toDisplayString($options.selectedMessageText), 17)], 16, _hoisted_5)) : createCommentVNode("", true)];
        }),
        _: 3
      }, 16, ["onEnter", "onAfterEnter", "onLeave", "onAfterLeave"])];
    }),
    _: 3
  }, 8, ["appendTo"])], 16);
}
script$5.render = render$4;
var theme$1 = function theme5(_ref) {
  var dt = _ref.dt;
  return "\n.p-avatar {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: ".concat(dt("avatar.width"), ";\n    height: ").concat(dt("avatar.height"), ";\n    font-size: ").concat(dt("avatar.font.size"), ";\n    background: ").concat(dt("avatar.background"), ";\n    color: ").concat(dt("avatar.color"), ";\n    border-radius: ").concat(dt("avatar.border.radius"), ";\n}\n\n.p-avatar-image {\n    background: transparent;\n}\n\n.p-avatar-circle {\n    border-radius: 50%;\n}\n\n.p-avatar-circle img {\n    border-radius: 50%;\n}\n\n.p-avatar-icon {\n    font-size: ").concat(dt("avatar.icon.size"), ";\n    width: ").concat(dt("avatar.icon.size"), ";\n    height: ").concat(dt("avatar.icon.size"), ";\n}\n\n.p-avatar img {\n    width: 100%;\n    height: 100%;\n}\n\n.p-avatar-lg {\n    width: ").concat(dt("avatar.lg.width"), ";\n    height: ").concat(dt("avatar.lg.width"), ";\n    font-size: ").concat(dt("avatar.lg.font.size"), ";\n}\n\n.p-avatar-lg .p-avatar-icon {\n    font-size: ").concat(dt("avatar.lg.icon.size"), ";\n    width: ").concat(dt("avatar.lg.icon.size"), ";\n    height: ").concat(dt("avatar.lg.icon.size"), ";\n}\n\n.p-avatar-xl {\n    width: ").concat(dt("avatar.xl.width"), ";\n    height: ").concat(dt("avatar.xl.width"), ";\n    font-size: ").concat(dt("avatar.xl.font.size"), ";\n}\n\n.p-avatar-xl .p-avatar-icon {\n    font-size: ").concat(dt("avatar.xl.icon.size"), ";\n    width: ").concat(dt("avatar.xl.icon.size"), ";\n    height: ").concat(dt("avatar.xl.icon.size"), ";\n}\n\n.p-avatar-group {\n    display: flex;\n    align-items: center;\n}\n\n.p-avatar-group .p-avatar + .p-avatar {\n    margin-inline-start: ").concat(dt("avatar.group.offset"), ";\n}\n\n.p-avatar-group .p-avatar {\n    border: 2px solid ").concat(dt("avatar.group.border.color"), ";\n}\n\n.p-avatar-group .p-avatar-lg + .p-avatar-lg {\n    margin-inline-start: ").concat(dt("avatar.lg.group.offset"), ";\n}\n\n.p-avatar-group .p-avatar-xl + .p-avatar-xl {\n    margin-inline-start: ").concat(dt("avatar.xl.group.offset"), ";\n}\n");
};
var classes$1 = {
  root: function root3(_ref2) {
    var props = _ref2.props;
    return ["p-avatar p-component", {
      "p-avatar-image": props.image != null,
      "p-avatar-circle": props.shape === "circle",
      "p-avatar-lg": props.size === "large",
      "p-avatar-xl": props.size === "xlarge"
    }];
  },
  label: "p-avatar-label",
  icon: "p-avatar-icon"
};
var AvatarStyle = BaseStyle.extend({
  name: "avatar",
  theme: theme$1,
  classes: classes$1
});
var script$1$1 = {
  name: "BaseAvatar",
  "extends": script$1$6,
  props: {
    label: {
      type: String,
      "default": null
    },
    icon: {
      type: String,
      "default": null
    },
    image: {
      type: String,
      "default": null
    },
    size: {
      type: String,
      "default": "normal"
    },
    shape: {
      type: String,
      "default": "square"
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
  style: AvatarStyle,
  provide: function provide5() {
    return {
      $pcAvatar: this,
      $parentInstance: this
    };
  }
};
var script$4 = {
  name: "Avatar",
  "extends": script$1$1,
  inheritAttrs: false,
  emits: ["error"],
  methods: {
    onError: function onError(event) {
      this.$emit("error", event);
    }
  }
};
var _hoisted_1$1 = ["aria-labelledby", "aria-label"];
var _hoisted_2$1 = ["src", "alt"];
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root"),
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-label": _ctx.ariaLabel
  }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "default", {}, function() {
    return [_ctx.label ? (openBlock(), createElementBlock("span", mergeProps({
      key: 0,
      "class": _ctx.cx("label")
    }, _ctx.ptm("label")), toDisplayString(_ctx.label), 17)) : _ctx.$slots.icon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.icon), {
      key: 1,
      "class": normalizeClass(_ctx.cx("icon"))
    }, null, 8, ["class"])) : _ctx.icon ? (openBlock(), createElementBlock("span", mergeProps({
      key: 2,
      "class": [_ctx.cx("icon"), _ctx.icon]
    }, _ctx.ptm("icon")), null, 16)) : _ctx.image ? (openBlock(), createElementBlock("img", mergeProps({
      key: 3,
      src: _ctx.image,
      alt: _ctx.ariaLabel,
      onError: _cache[0] || (_cache[0] = function() {
        return $options.onError && $options.onError.apply($options, arguments);
      })
    }, _ctx.ptm("image")), null, 16, _hoisted_2$1)) : createCommentVNode("", true)];
  })], 16, _hoisted_1$1);
}
script$4.render = render$3;
var script$3 = {
  name: "WindowMaximizeIcon",
  "extends": script$f
};
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _cache[0] || (_cache[0] = [createElementVNode("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
script$3.render = render$2;
var script$2 = {
  name: "WindowMinimizeIcon",
  "extends": script$f
};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _cache[0] || (_cache[0] = [createElementVNode("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
script$2.render = render$1;
var FocusTrapStyle = BaseStyle.extend({
  name: "focustrap-directive"
});
var BaseFocusTrap = BaseDirective.extend({
  style: FocusTrapStyle
});
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
var FocusTrap = BaseFocusTrap.extend("focustrap", {
  mounted: function mounted3(el, binding) {
    var _ref = binding.value || {}, disabled3 = _ref.disabled;
    if (!disabled3) {
      this.createHiddenFocusableElements(el, binding);
      this.bind(el, binding);
      this.autoElementFocus(el, binding);
    }
    el.setAttribute("data-pd-focustrap", true);
    this.$el = el;
  },
  updated: function updated2(el, binding) {
    var _ref2 = binding.value || {}, disabled3 = _ref2.disabled;
    disabled3 && this.unbind(el);
  },
  unmounted: function unmounted(el) {
    this.unbind(el);
  },
  methods: {
    getComputedSelector: function getComputedSelector(selector) {
      return ':not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])'.concat(selector !== null && selector !== void 0 ? selector : "");
    },
    bind: function bind(el, binding) {
      var _this = this;
      var _ref3 = binding.value || {}, onFocusIn = _ref3.onFocusIn, onFocusOut = _ref3.onFocusOut;
      el.$_pfocustrap_mutationobserver = new MutationObserver(function(mutationList) {
        mutationList.forEach(function(mutation) {
          if (mutation.type === "childList" && !el.contains((void 0).activeElement)) {
            var _findNextFocusableElement = function findNextFocusableElement(_el) {
              var focusableElement = isFocusableElement(_el) ? isFocusableElement(_el, _this.getComputedSelector(el.$_pfocustrap_focusableselector)) ? _el : getFirstFocusableElement(el, _this.getComputedSelector(el.$_pfocustrap_focusableselector)) : getFirstFocusableElement(_el);
              return isNotEmpty(focusableElement) ? focusableElement : _el.nextSibling && _findNextFocusableElement(_el.nextSibling);
            };
            focus(_findNextFocusableElement(mutation.nextSibling));
          }
        });
      });
      el.$_pfocustrap_mutationobserver.disconnect();
      el.$_pfocustrap_mutationobserver.observe(el, {
        childList: true
      });
      el.$_pfocustrap_focusinlistener = function(event) {
        return onFocusIn && onFocusIn(event);
      };
      el.$_pfocustrap_focusoutlistener = function(event) {
        return onFocusOut && onFocusOut(event);
      };
      el.addEventListener("focusin", el.$_pfocustrap_focusinlistener);
      el.addEventListener("focusout", el.$_pfocustrap_focusoutlistener);
    },
    unbind: function unbind(el) {
      el.$_pfocustrap_mutationobserver && el.$_pfocustrap_mutationobserver.disconnect();
      el.$_pfocustrap_focusinlistener && el.removeEventListener("focusin", el.$_pfocustrap_focusinlistener) && (el.$_pfocustrap_focusinlistener = null);
      el.$_pfocustrap_focusoutlistener && el.removeEventListener("focusout", el.$_pfocustrap_focusoutlistener) && (el.$_pfocustrap_focusoutlistener = null);
    },
    autoFocus: function autoFocus(options) {
      this.autoElementFocus(this.$el, {
        value: _objectSpread$1(_objectSpread$1({}, options), {}, {
          autoFocus: true
        })
      });
    },
    autoElementFocus: function autoElementFocus(el, binding) {
      var _ref4 = binding.value || {}, _ref4$autoFocusSelect = _ref4.autoFocusSelector, autoFocusSelector = _ref4$autoFocusSelect === void 0 ? "" : _ref4$autoFocusSelect, _ref4$firstFocusableS = _ref4.firstFocusableSelector, firstFocusableSelector = _ref4$firstFocusableS === void 0 ? "" : _ref4$firstFocusableS, _ref4$autoFocus = _ref4.autoFocus, autoFocus2 = _ref4$autoFocus === void 0 ? false : _ref4$autoFocus;
      var focusableElement = getFirstFocusableElement(el, "[autofocus]".concat(this.getComputedSelector(autoFocusSelector)));
      autoFocus2 && !focusableElement && (focusableElement = getFirstFocusableElement(el, this.getComputedSelector(firstFocusableSelector)));
      focus(focusableElement);
    },
    onFirstHiddenElementFocus: function onFirstHiddenElementFocus(event) {
      var _this$$el;
      var currentTarget = event.currentTarget, relatedTarget = event.relatedTarget;
      var focusableElement = relatedTarget === currentTarget.$_pfocustrap_lasthiddenfocusableelement || !((_this$$el = this.$el) !== null && _this$$el !== void 0 && _this$$el.contains(relatedTarget)) ? getFirstFocusableElement(currentTarget.parentElement, this.getComputedSelector(currentTarget.$_pfocustrap_focusableselector)) : currentTarget.$_pfocustrap_lasthiddenfocusableelement;
      focus(focusableElement);
    },
    onLastHiddenElementFocus: function onLastHiddenElementFocus(event) {
      var _this$$el2;
      var currentTarget = event.currentTarget, relatedTarget = event.relatedTarget;
      var focusableElement = relatedTarget === currentTarget.$_pfocustrap_firsthiddenfocusableelement || !((_this$$el2 = this.$el) !== null && _this$$el2 !== void 0 && _this$$el2.contains(relatedTarget)) ? getLastFocusableElement(currentTarget.parentElement, this.getComputedSelector(currentTarget.$_pfocustrap_focusableselector)) : currentTarget.$_pfocustrap_firsthiddenfocusableelement;
      focus(focusableElement);
    },
    createHiddenFocusableElements: function createHiddenFocusableElements(el, binding) {
      var _this2 = this;
      var _ref5 = binding.value || {}, _ref5$tabIndex = _ref5.tabIndex, tabIndex = _ref5$tabIndex === void 0 ? 0 : _ref5$tabIndex, _ref5$firstFocusableS = _ref5.firstFocusableSelector, firstFocusableSelector = _ref5$firstFocusableS === void 0 ? "" : _ref5$firstFocusableS, _ref5$lastFocusableSe = _ref5.lastFocusableSelector, lastFocusableSelector = _ref5$lastFocusableSe === void 0 ? "" : _ref5$lastFocusableSe;
      var createFocusableElement = function createFocusableElement2(onFocus2) {
        return createElement("span", {
          "class": "p-hidden-accessible p-hidden-focusable",
          tabIndex,
          role: "presentation",
          "aria-hidden": true,
          "data-p-hidden-accessible": true,
          "data-p-hidden-focusable": true,
          onFocus: onFocus2 === null || onFocus2 === void 0 ? void 0 : onFocus2.bind(_this2)
        });
      };
      var firstFocusableElement = createFocusableElement(this.onFirstHiddenElementFocus);
      var lastFocusableElement = createFocusableElement(this.onLastHiddenElementFocus);
      firstFocusableElement.$_pfocustrap_lasthiddenfocusableelement = lastFocusableElement;
      firstFocusableElement.$_pfocustrap_focusableselector = firstFocusableSelector;
      firstFocusableElement.setAttribute("data-pc-section", "firstfocusableelement");
      lastFocusableElement.$_pfocustrap_firsthiddenfocusableelement = firstFocusableElement;
      lastFocusableElement.$_pfocustrap_focusableselector = lastFocusableSelector;
      lastFocusableElement.setAttribute("data-pc-section", "lastfocusableelement");
      el.prepend(firstFocusableElement);
      el.append(lastFocusableElement);
    }
  }
});
var theme6 = function theme7(_ref) {
  var dt = _ref.dt;
  return "\n.p-dialog {\n    max-height: 90%;\n    transform: scale(1);\n    border-radius: ".concat(dt("dialog.border.radius"), ";\n    box-shadow: ").concat(dt("dialog.shadow"), ";\n    background: ").concat(dt("dialog.background"), ";\n    border: 1px solid ").concat(dt("dialog.border.color"), ";\n    color: ").concat(dt("dialog.color"), ";\n}\n\n.p-dialog-content {\n    overflow-y: auto;\n    padding: ").concat(dt("dialog.content.padding"), ";\n}\n\n.p-dialog-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    flex-shrink: 0;\n    padding: ").concat(dt("dialog.header.padding"), ";\n}\n\n.p-dialog-title {\n    font-weight: ").concat(dt("dialog.title.font.weight"), ";\n    font-size: ").concat(dt("dialog.title.font.size"), ";\n}\n\n.p-dialog-footer {\n    flex-shrink: 0;\n    padding: ").concat(dt("dialog.footer.padding"), ";\n    display: flex;\n    justify-content: flex-end;\n    gap: ").concat(dt("dialog.footer.gap"), ";\n}\n\n.p-dialog-header-actions {\n    display: flex;\n    align-items: center;\n    gap: ").concat(dt("dialog.header.gap"), ";\n}\n\n.p-dialog-enter-active {\n    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.p-dialog-leave-active {\n    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.p-dialog-enter-from,\n.p-dialog-leave-to {\n    opacity: 0;\n    transform: scale(0.7);\n}\n\n.p-dialog-top .p-dialog,\n.p-dialog-bottom .p-dialog,\n.p-dialog-left .p-dialog,\n.p-dialog-right .p-dialog,\n.p-dialog-topleft .p-dialog,\n.p-dialog-topright .p-dialog,\n.p-dialog-bottomleft .p-dialog,\n.p-dialog-bottomright .p-dialog {\n    margin: 0.75rem;\n    transform: translate3d(0px, 0px, 0px);\n}\n\n.p-dialog-top .p-dialog-enter-active,\n.p-dialog-top .p-dialog-leave-active,\n.p-dialog-bottom .p-dialog-enter-active,\n.p-dialog-bottom .p-dialog-leave-active,\n.p-dialog-left .p-dialog-enter-active,\n.p-dialog-left .p-dialog-leave-active,\n.p-dialog-right .p-dialog-enter-active,\n.p-dialog-right .p-dialog-leave-active,\n.p-dialog-topleft .p-dialog-enter-active,\n.p-dialog-topleft .p-dialog-leave-active,\n.p-dialog-topright .p-dialog-enter-active,\n.p-dialog-topright .p-dialog-leave-active,\n.p-dialog-bottomleft .p-dialog-enter-active,\n.p-dialog-bottomleft .p-dialog-leave-active,\n.p-dialog-bottomright .p-dialog-enter-active,\n.p-dialog-bottomright .p-dialog-leave-active {\n    transition: all 0.3s ease-out;\n}\n\n.p-dialog-top .p-dialog-enter-from,\n.p-dialog-top .p-dialog-leave-to {\n    transform: translate3d(0px, -100%, 0px);\n}\n\n.p-dialog-bottom .p-dialog-enter-from,\n.p-dialog-bottom .p-dialog-leave-to {\n    transform: translate3d(0px, 100%, 0px);\n}\n\n.p-dialog-left .p-dialog-enter-from,\n.p-dialog-left .p-dialog-leave-to,\n.p-dialog-topleft .p-dialog-enter-from,\n.p-dialog-topleft .p-dialog-leave-to,\n.p-dialog-bottomleft .p-dialog-enter-from,\n.p-dialog-bottomleft .p-dialog-leave-to {\n    transform: translate3d(-100%, 0px, 0px);\n}\n\n.p-dialog-right .p-dialog-enter-from,\n.p-dialog-right .p-dialog-leave-to,\n.p-dialog-topright .p-dialog-enter-from,\n.p-dialog-topright .p-dialog-leave-to,\n.p-dialog-bottomright .p-dialog-enter-from,\n.p-dialog-bottomright .p-dialog-leave-to {\n    transform: translate3d(100%, 0px, 0px);\n}\n\n.p-dialog-left:dir(rtl) .p-dialog-enter-from,\n.p-dialog-left:dir(rtl) .p-dialog-leave-to,\n.p-dialog-topleft:dir(rtl) .p-dialog-enter-from,\n.p-dialog-topleft:dir(rtl) .p-dialog-leave-to,\n.p-dialog-bottomleft:dir(rtl) .p-dialog-enter-from,\n.p-dialog-bottomleft:dir(rtl) .p-dialog-leave-to {\n    transform: translate3d(100%, 0px, 0px);\n}\n\n.p-dialog-right:dir(rtl) .p-dialog-enter-from,\n.p-dialog-right:dir(rtl) .p-dialog-leave-to,\n.p-dialog-topright:dir(rtl) .p-dialog-enter-from,\n.p-dialog-topright:dir(rtl) .p-dialog-leave-to,\n.p-dialog-bottomright:dir(rtl) .p-dialog-enter-from,\n.p-dialog-bottomright:dir(rtl) .p-dialog-leave-to {\n    transform: translate3d(-100%, 0px, 0px);\n}\n\n.p-dialog-maximized {\n    width: 100vw !important;\n    height: 100vh !important;\n    top: 0px !important;\n    left: 0px !important;\n    max-height: 100%;\n    height: 100%;\n    border-radius: 0;\n}\n\n.p-dialog-maximized .p-dialog-content {\n    flex-grow: 1;\n}\n");
};
var inlineStyles = {
  mask: function mask(_ref2) {
    var position = _ref2.position, modal = _ref2.modal;
    return {
      position: "fixed",
      height: "100%",
      width: "100%",
      left: 0,
      top: 0,
      display: "flex",
      justifyContent: position === "left" || position === "topleft" || position === "bottomleft" ? "flex-start" : position === "right" || position === "topright" || position === "bottomright" ? "flex-end" : "center",
      alignItems: position === "top" || position === "topleft" || position === "topright" ? "flex-start" : position === "bottom" || position === "bottomleft" || position === "bottomright" ? "flex-end" : "center",
      pointerEvents: modal ? "auto" : "none"
    };
  },
  root: {
    display: "flex",
    flexDirection: "column",
    pointerEvents: "auto"
  }
};
var classes = {
  mask: function mask2(_ref3) {
    var props = _ref3.props;
    var positions = ["left", "right", "top", "topleft", "topright", "bottom", "bottomleft", "bottomright"];
    var pos = positions.find(function(item2) {
      return item2 === props.position;
    });
    return ["p-dialog-mask", {
      "p-overlay-mask p-overlay-mask-enter": props.modal
    }, pos ? "p-dialog-".concat(pos) : ""];
  },
  root: function root4(_ref4) {
    var props = _ref4.props, instance = _ref4.instance;
    return ["p-dialog p-component", {
      "p-dialog-maximized": props.maximizable && instance.maximized
    }];
  },
  header: "p-dialog-header",
  title: "p-dialog-title",
  headerActions: "p-dialog-header-actions",
  pcMaximizeButton: "p-dialog-maximize-button",
  pcCloseButton: "p-dialog-close-button",
  content: "p-dialog-content",
  footer: "p-dialog-footer"
};
var DialogStyle = BaseStyle.extend({
  name: "dialog",
  theme: theme6,
  classes,
  inlineStyles
});
var script$1 = {
  name: "BaseDialog",
  "extends": script$1$6,
  props: {
    header: {
      type: null,
      "default": null
    },
    footer: {
      type: null,
      "default": null
    },
    visible: {
      type: Boolean,
      "default": false
    },
    modal: {
      type: Boolean,
      "default": null
    },
    contentStyle: {
      type: null,
      "default": null
    },
    contentClass: {
      type: String,
      "default": null
    },
    contentProps: {
      type: null,
      "default": null
    },
    maximizable: {
      type: Boolean,
      "default": false
    },
    dismissableMask: {
      type: Boolean,
      "default": false
    },
    closable: {
      type: Boolean,
      "default": true
    },
    closeOnEscape: {
      type: Boolean,
      "default": true
    },
    showHeader: {
      type: Boolean,
      "default": true
    },
    blockScroll: {
      type: Boolean,
      "default": false
    },
    baseZIndex: {
      type: Number,
      "default": 0
    },
    autoZIndex: {
      type: Boolean,
      "default": true
    },
    position: {
      type: String,
      "default": "center"
    },
    breakpoints: {
      type: Object,
      "default": null
    },
    draggable: {
      type: Boolean,
      "default": true
    },
    keepInViewport: {
      type: Boolean,
      "default": true
    },
    minX: {
      type: Number,
      "default": 0
    },
    minY: {
      type: Number,
      "default": 0
    },
    appendTo: {
      type: [String, Object],
      "default": "body"
    },
    closeIcon: {
      type: String,
      "default": void 0
    },
    maximizeIcon: {
      type: String,
      "default": void 0
    },
    minimizeIcon: {
      type: String,
      "default": void 0
    },
    closeButtonProps: {
      type: Object,
      "default": function _default() {
        return {
          severity: "secondary",
          text: true,
          rounded: true
        };
      }
    },
    maximizeButtonProps: {
      type: Object,
      "default": function _default2() {
        return {
          severity: "secondary",
          text: true,
          rounded: true
        };
      }
    },
    _instance: null
  },
  style: DialogStyle,
  provide: function provide6() {
    return {
      $pcDialog: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "Dialog",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["update:visible", "show", "hide", "after-hide", "maximize", "unmaximize", "dragstart", "dragend"],
  provide: function provide22() {
    var _this = this;
    return {
      dialogRef: computed(function() {
        return _this._instance;
      })
    };
  },
  data: function data4() {
    return {
      id: this.$attrs.id,
      containerVisible: this.visible,
      maximized: false,
      focusableMax: null,
      focusableClose: null,
      target: null
    };
  },
  watch: {
    "$attrs.id": function $attrsId3(newValue) {
      this.id = newValue || UniqueComponentId();
    }
  },
  documentKeydownListener: null,
  container: null,
  mask: null,
  content: null,
  headerContainer: null,
  footerContainer: null,
  maximizableButton: null,
  closeButton: null,
  styleElement: null,
  dragging: null,
  documentDragListener: null,
  documentDragEndListener: null,
  lastPageX: null,
  lastPageY: null,
  maskMouseDownTarget: null,
  updated: function updated3() {
    if (this.visible) {
      this.containerVisible = this.visible;
    }
  },
  beforeUnmount: function beforeUnmount3() {
    this.unbindDocumentState();
    this.unbindGlobalListeners();
    this.destroyStyle();
    if (this.mask && this.autoZIndex) {
      ZIndex.clear(this.mask);
    }
    this.container = null;
    this.mask = null;
  },
  mounted: function mounted4() {
    this.id = this.id || UniqueComponentId();
    if (this.breakpoints) {
      this.createStyle();
    }
  },
  methods: {
    close: function close2() {
      this.$emit("update:visible", false);
    },
    onEnter: function onEnter2() {
      this.$emit("show");
      this.target = (void 0).activeElement;
      this.enableDocumentSettings();
      this.bindGlobalListeners();
      if (this.autoZIndex) {
        ZIndex.set("modal", this.mask, this.baseZIndex + this.$primevue.config.zIndex.modal);
      }
    },
    onAfterEnter: function onAfterEnter() {
      this.focus();
    },
    onBeforeLeave: function onBeforeLeave() {
      if (this.modal) {
        !this.isUnstyled && addClass(this.mask, "p-overlay-mask-leave");
      }
      if (this.dragging && this.documentDragEndListener) {
        this.documentDragEndListener();
      }
    },
    onLeave: function onLeave2() {
      this.$emit("hide");
      focus(this.target);
      this.target = null;
      this.focusableClose = null;
      this.focusableMax = null;
    },
    onAfterLeave: function onAfterLeave2() {
      if (this.autoZIndex) {
        ZIndex.clear(this.mask);
      }
      this.containerVisible = false;
      this.unbindDocumentState();
      this.unbindGlobalListeners();
      this.$emit("after-hide");
    },
    onMaskMouseDown: function onMaskMouseDown(event) {
      this.maskMouseDownTarget = event.target;
    },
    onMaskMouseUp: function onMaskMouseUp() {
      if (this.dismissableMask && this.modal && this.mask === this.maskMouseDownTarget) {
        this.close();
      }
    },
    focus: function focus$1() {
      var findFocusableElement = function findFocusableElement2(container) {
        return container && container.querySelector("[autofocus]");
      };
      var focusTarget = this.$slots.footer && findFocusableElement(this.footerContainer);
      if (!focusTarget) {
        focusTarget = this.$slots.header && findFocusableElement(this.headerContainer);
        if (!focusTarget) {
          focusTarget = this.$slots["default"] && findFocusableElement(this.content);
          if (!focusTarget) {
            if (this.maximizable) {
              this.focusableMax = true;
              focusTarget = this.maximizableButton;
            } else {
              this.focusableClose = true;
              focusTarget = this.closeButton;
            }
          }
        }
      }
      if (focusTarget) {
        focus(focusTarget, {
          focusVisible: true
        });
      }
    },
    maximize: function maximize(event) {
      if (this.maximized) {
        this.maximized = false;
        this.$emit("unmaximize", event);
      } else {
        this.maximized = true;
        this.$emit("maximize", event);
      }
      if (!this.modal) {
        this.maximized ? blockBodyScroll() : unblockBodyScroll();
      }
    },
    enableDocumentSettings: function enableDocumentSettings() {
      if (this.modal || !this.modal && this.blockScroll || this.maximizable && this.maximized) {
        blockBodyScroll();
      }
    },
    unbindDocumentState: function unbindDocumentState() {
      if (this.modal || !this.modal && this.blockScroll || this.maximizable && this.maximized) {
        unblockBodyScroll();
      }
    },
    onKeyDown: function onKeyDown2(event) {
      if (event.code === "Escape" && this.closeOnEscape) {
        this.close();
      }
    },
    bindDocumentKeyDownListener: function bindDocumentKeyDownListener() {
      if (!this.documentKeydownListener) {
        this.documentKeydownListener = this.onKeyDown.bind(this);
        (void 0).document.addEventListener("keydown", this.documentKeydownListener);
      }
    },
    unbindDocumentKeyDownListener: function unbindDocumentKeyDownListener() {
      if (this.documentKeydownListener) {
        (void 0).document.removeEventListener("keydown", this.documentKeydownListener);
        this.documentKeydownListener = null;
      }
    },
    containerRef: function containerRef2(el) {
      this.container = el;
    },
    maskRef: function maskRef(el) {
      this.mask = el;
    },
    contentRef: function contentRef(el) {
      this.content = el;
    },
    headerContainerRef: function headerContainerRef(el) {
      this.headerContainer = el;
    },
    footerContainerRef: function footerContainerRef(el) {
      this.footerContainer = el;
    },
    maximizableRef: function maximizableRef(el) {
      this.maximizableButton = el ? el.$el : void 0;
    },
    closeButtonRef: function closeButtonRef(el) {
      this.closeButton = el ? el.$el : void 0;
    },
    createStyle: function createStyle() {
      if (!this.styleElement && !this.isUnstyled) {
        var _this$$primevue;
        this.styleElement = (void 0).createElement("style");
        this.styleElement.type = "text/css";
        setAttribute(this.styleElement, "nonce", (_this$$primevue = this.$primevue) === null || _this$$primevue === void 0 || (_this$$primevue = _this$$primevue.config) === null || _this$$primevue === void 0 || (_this$$primevue = _this$$primevue.csp) === null || _this$$primevue === void 0 ? void 0 : _this$$primevue.nonce);
        (void 0).head.appendChild(this.styleElement);
        var innerHTML = "";
        for (var breakpoint in this.breakpoints) {
          innerHTML += "\n                        @media screen and (max-width: ".concat(breakpoint, ") {\n                            .p-dialog[").concat(this.$attrSelector, "] {\n                                width: ").concat(this.breakpoints[breakpoint], " !important;\n                            }\n                        }\n                    ");
        }
        this.styleElement.innerHTML = innerHTML;
      }
    },
    destroyStyle: function destroyStyle() {
      if (this.styleElement) {
        (void 0).head.removeChild(this.styleElement);
        this.styleElement = null;
      }
    },
    initDrag: function initDrag(event) {
      if (event.target.closest("div").getAttribute("data-pc-section") === "headeractions") {
        return;
      }
      if (this.draggable) {
        this.dragging = true;
        this.lastPageX = event.pageX;
        this.lastPageY = event.pageY;
        this.container.style.margin = "0";
        (void 0).body.setAttribute("data-p-unselectable-text", "true");
        !this.isUnstyled && addStyle((void 0).body, {
          "user-select": "none"
        });
        this.$emit("dragstart", event);
      }
    },
    bindGlobalListeners: function bindGlobalListeners() {
      if (this.draggable) {
        this.bindDocumentDragListener();
        this.bindDocumentDragEndListener();
      }
      if (this.closeOnEscape && this.closable) {
        this.bindDocumentKeyDownListener();
      }
    },
    unbindGlobalListeners: function unbindGlobalListeners() {
      this.unbindDocumentDragListener();
      this.unbindDocumentDragEndListener();
      this.unbindDocumentKeyDownListener();
    },
    bindDocumentDragListener: function bindDocumentDragListener() {
      var _this2 = this;
      this.documentDragListener = function(event) {
        if (_this2.dragging) {
          var width = getOuterWidth(_this2.container);
          var height = getOuterHeight(_this2.container);
          var deltaX = event.pageX - _this2.lastPageX;
          var deltaY = event.pageY - _this2.lastPageY;
          var offset = _this2.container.getBoundingClientRect();
          var leftPos = offset.left + deltaX;
          var topPos = offset.top + deltaY;
          var viewport = getViewport();
          var containerComputedStyle = getComputedStyle(_this2.container);
          var marginLeft = parseFloat(containerComputedStyle.marginLeft);
          var marginTop = parseFloat(containerComputedStyle.marginTop);
          _this2.container.style.position = "fixed";
          if (_this2.keepInViewport) {
            if (leftPos >= _this2.minX && leftPos + width < viewport.width) {
              _this2.lastPageX = event.pageX;
              _this2.container.style.left = leftPos - marginLeft + "px";
            }
            if (topPos >= _this2.minY && topPos + height < viewport.height) {
              _this2.lastPageY = event.pageY;
              _this2.container.style.top = topPos - marginTop + "px";
            }
          } else {
            _this2.lastPageX = event.pageX;
            _this2.container.style.left = leftPos - marginLeft + "px";
            _this2.lastPageY = event.pageY;
            _this2.container.style.top = topPos - marginTop + "px";
          }
        }
      };
      (void 0).document.addEventListener("mousemove", this.documentDragListener);
    },
    unbindDocumentDragListener: function unbindDocumentDragListener() {
      if (this.documentDragListener) {
        (void 0).document.removeEventListener("mousemove", this.documentDragListener);
        this.documentDragListener = null;
      }
    },
    bindDocumentDragEndListener: function bindDocumentDragEndListener() {
      var _this3 = this;
      this.documentDragEndListener = function(event) {
        if (_this3.dragging) {
          _this3.dragging = false;
          (void 0).body.removeAttribute("data-p-unselectable-text");
          !_this3.isUnstyled && ((void 0).body.style["user-select"] = "");
          _this3.$emit("dragend", event);
        }
      };
      (void 0).document.addEventListener("mouseup", this.documentDragEndListener);
    },
    unbindDocumentDragEndListener: function unbindDocumentDragEndListener() {
      if (this.documentDragEndListener) {
        (void 0).document.removeEventListener("mouseup", this.documentDragEndListener);
        this.documentDragEndListener = null;
      }
    }
  },
  computed: {
    maximizeIconComponent: function maximizeIconComponent() {
      return this.maximized ? this.minimizeIcon ? "span" : "WindowMinimizeIcon" : this.maximizeIcon ? "span" : "WindowMaximizeIcon";
    },
    ariaLabelledById: function ariaLabelledById() {
      return this.header != null || this.$attrs["aria-labelledby"] !== null ? this.id + "_header" : null;
    },
    closeAriaLabel: function closeAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.close : void 0;
    }
  },
  directives: {
    ripple: Ripple,
    focustrap: FocusTrap
  },
  components: {
    Button: script$9,
    Portal: script$3$1,
    WindowMinimizeIcon: script$2,
    WindowMaximizeIcon: script$3,
    TimesIcon: script$1$7
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
var _hoisted_1 = ["aria-labelledby", "aria-modal"];
var _hoisted_2 = ["id"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Button = resolveComponent("Button");
  var _component_Portal = resolveComponent("Portal");
  var _directive_focustrap = resolveDirective("focustrap");
  return openBlock(), createBlock(_component_Portal, {
    appendTo: _ctx.appendTo
  }, {
    "default": withCtx(function() {
      return [$data.containerVisible ? (openBlock(), createElementBlock("div", mergeProps({
        key: 0,
        ref: $options.maskRef,
        "class": _ctx.cx("mask"),
        style: _ctx.sx("mask", true, {
          position: _ctx.position,
          modal: _ctx.modal
        }),
        onMousedown: _cache[1] || (_cache[1] = function() {
          return $options.onMaskMouseDown && $options.onMaskMouseDown.apply($options, arguments);
        }),
        onMouseup: _cache[2] || (_cache[2] = function() {
          return $options.onMaskMouseUp && $options.onMaskMouseUp.apply($options, arguments);
        })
      }, _ctx.ptm("mask")), [createVNode(Transition, mergeProps({
        name: "p-dialog",
        onEnter: $options.onEnter,
        onAfterEnter: $options.onAfterEnter,
        onBeforeLeave: $options.onBeforeLeave,
        onLeave: $options.onLeave,
        onAfterLeave: $options.onAfterLeave,
        appear: ""
      }, _ctx.ptm("transition")), {
        "default": withCtx(function() {
          return [_ctx.visible ? withDirectives((openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            ref: $options.containerRef,
            "class": _ctx.cx("root"),
            style: _ctx.sx("root"),
            role: "dialog",
            "aria-labelledby": $options.ariaLabelledById,
            "aria-modal": _ctx.modal
          }, _ctx.ptmi("root")), [_ctx.$slots.container ? renderSlot(_ctx.$slots, "container", {
            key: 0,
            closeCallback: $options.close,
            maximizeCallback: function maximizeCallback(event) {
              return $options.maximize(event);
            }
          }) : (openBlock(), createElementBlock(Fragment, {
            key: 1
          }, [_ctx.showHeader ? (openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            ref: $options.headerContainerRef,
            "class": _ctx.cx("header"),
            onMousedown: _cache[0] || (_cache[0] = function() {
              return $options.initDrag && $options.initDrag.apply($options, arguments);
            })
          }, _ctx.ptm("header")), [renderSlot(_ctx.$slots, "header", {
            "class": normalizeClass(_ctx.cx("title"))
          }, function() {
            return [_ctx.header ? (openBlock(), createElementBlock("span", mergeProps({
              key: 0,
              id: $options.ariaLabelledById,
              "class": _ctx.cx("title")
            }, _ctx.ptm("title")), toDisplayString(_ctx.header), 17, _hoisted_2)) : createCommentVNode("", true)];
          }), createElementVNode("div", mergeProps({
            "class": _ctx.cx("headerActions")
          }, _ctx.ptm("headerActions")), [_ctx.maximizable ? (openBlock(), createBlock(_component_Button, mergeProps({
            key: 0,
            ref: $options.maximizableRef,
            autofocus: $data.focusableMax,
            "class": _ctx.cx("pcMaximizeButton"),
            onClick: $options.maximize,
            tabindex: _ctx.maximizable ? "0" : "-1",
            unstyled: _ctx.unstyled
          }, _ctx.maximizeButtonProps, {
            pt: _ctx.ptm("pcMaximizeButton"),
            "data-pc-group-section": "headericon"
          }), {
            icon: withCtx(function(slotProps) {
              return [renderSlot(_ctx.$slots, "maximizeicon", {
                maximized: $data.maximized
              }, function() {
                return [(openBlock(), createBlock(resolveDynamicComponent($options.maximizeIconComponent), mergeProps({
                  "class": [slotProps["class"], $data.maximized ? _ctx.minimizeIcon : _ctx.maximizeIcon]
                }, _ctx.ptm("pcMaximizeButton")["icon"]), null, 16, ["class"]))];
              })];
            }),
            _: 3
          }, 16, ["autofocus", "class", "onClick", "tabindex", "unstyled", "pt"])) : createCommentVNode("", true), _ctx.closable ? (openBlock(), createBlock(_component_Button, mergeProps({
            key: 1,
            ref: $options.closeButtonRef,
            autofocus: $data.focusableClose,
            "class": _ctx.cx("pcCloseButton"),
            onClick: $options.close,
            "aria-label": $options.closeAriaLabel,
            unstyled: _ctx.unstyled
          }, _ctx.closeButtonProps, {
            pt: _ctx.ptm("pcCloseButton"),
            "data-pc-group-section": "headericon"
          }), {
            icon: withCtx(function(slotProps) {
              return [renderSlot(_ctx.$slots, "closeicon", {}, function() {
                return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.closeIcon ? "span" : "TimesIcon"), mergeProps({
                  "class": [_ctx.closeIcon, slotProps["class"]]
                }, _ctx.ptm("pcCloseButton")["icon"]), null, 16, ["class"]))];
              })];
            }),
            _: 3
          }, 16, ["autofocus", "class", "onClick", "aria-label", "unstyled", "pt"])) : createCommentVNode("", true)], 16)], 16)) : createCommentVNode("", true), createElementVNode("div", mergeProps({
            ref: $options.contentRef,
            "class": [_ctx.cx("content"), _ctx.contentClass],
            style: _ctx.contentStyle
          }, _objectSpread(_objectSpread({}, _ctx.contentProps), _ctx.ptm("content"))), [renderSlot(_ctx.$slots, "default")], 16), _ctx.footer || _ctx.$slots.footer ? (openBlock(), createElementBlock("div", mergeProps({
            key: 1,
            ref: $options.footerContainerRef,
            "class": _ctx.cx("footer")
          }, _ctx.ptm("footer")), [renderSlot(_ctx.$slots, "footer", {}, function() {
            return [createTextVNode(toDisplayString(_ctx.footer), 1)];
          })], 16)) : createCommentVNode("", true)], 64))], 16, _hoisted_1)), [[_directive_focustrap, {
            disabled: !_ctx.modal
          }]]) : createCommentVNode("", true)];
        }),
        _: 3
      }, 16, ["onEnter", "onAfterEnter", "onBeforeLeave", "onLeave", "onAfterLeave"])], 16)) : createCommentVNode("", true)];
    }),
    _: 3
  }, 8, ["appendTo"]);
}
script.render = render;
const _imports_0 = "" + buildAssetsURL("no-item.C-q5xNqU.jpg");
const _sfc_main$1 = {
  __name: "QuotationDialog",
  __ssrInlineRender: true,
  setup(__props) {
    const isQuotationVisible = ref(true);
    const quotationStarted = ref(false);
    const search2 = ref("");
    const productStore = useProductStore();
    const categories = ref([]);
    const message = ref("");
    const quotationList = ref([]);
    const addProductToQuote = (event) => {
      const newProduct = event.value;
      const exists = quotationList.value.some((item2) => item2.id === newProduct.id);
      if (!exists) {
        quotationList.value.push({
          ...newProduct,
          quantity: 1
        });
        searchTerm.value = "";
      }
    };
    const toggleQuotation = () => {
      isQuotationVisible.value = false;
    };
    const startQuotation = () => {
      quotationStarted.value = true;
    };
    const increaseQty = (index) => {
      quotationList.value[index].quantity++;
    };
    const decreaseQty = (index) => {
      if (quotationList.value[index].quantity > 1) {
        quotationList.value[index].quantity--;
      }
    };
    const removeItem = (index) => {
      quotationList.value.splice(index, 1);
    };
    const submitQuotation = async () => {
      console.log("message:", message.value);
      console.log("Quotation submitted:", quotationList.value);
      await productStore.makeQuotation(
        message.value,
        quotationList.value
      );
      isQuotationVisible.value = false;
    };
    const filteredQuotationList = computed(
      () => quotationList.value.filter(
        (item2) => item2.name.toLowerCase().includes(search2.value.toLowerCase())
      )
    );
    const userStore = useUserStore();
    const initials = computed(() => {
      const { firstName, lastName } = userStore.user;
      return `${(firstName == null ? void 0 : firstName.charAt(0)) || ""}${(lastName == null ? void 0 : lastName.charAt(0)) || ""}`.toUpperCase();
    });
    const searchTerm = ref("");
    const selectedCategory = ref([]);
    const filteredItems = ref([]);
    const searchItems = async (event) => {
      var _a2;
      var _a, _b;
      let query = event.query;
      filteredItems.value = [];
      const { $axios } = useNuxtApp();
      if (!query) return;
      try {
        let response;
        const categoryIds = Array.isArray(selectedCategory == null ? void 0 : selectedCategory.value) ? selectedCategory.value.filter((cat) => cat.id !== null).map((cat) => cat.id) : ((_a = selectedCategory == null ? void 0 : selectedCategory.value) == null ? void 0 : _a.id) && selectedCategory.value.id !== null ? [selectedCategory.value.id] : [];
        const defaultImage = "https://www.shutterstock.com/shutterstock/photos/2059817444/display_1500/stock-vector-no-image-available-photo-coming-soon-illustration-vector-2059817444.jpg";
        if (categoryIds.length > 0) {
          response = await $axios.get("/product", {
            params: { searchTerm: query, categoryId: categoryIds }
          });
          filteredItems.value = response.data.results.flatMap(
            (product) => product.models.map((model) => ({
              id: model.id,
              name: `${product.name} - (${model.name})`,
              images: model.images.length > 0 ? model.images.map((img) => img.uploadUrl) : [defaultImage]
            }))
          );
        } else {
          response = await $axios.get("/product/product-models", {
            params: { searchTerm: query }
          });
          const products = (_a2 = (_b = response.data) == null ? void 0 : _b.results) != null ? _a2 : [];
          filteredItems.value = products.map((product) => {
            var _a3;
            var _a22, _b2, _c, _d;
            return {
              id: product.id,
              name: product.product.name,
              price: product.price,
              category: (_a3 = (_c = (_b2 = (_a22 = product.product) == null ? void 0 : _a22.subCategory) == null ? void 0 : _b2.category) == null ? void 0 : _c.name) != null ? _a3 : "Unknown",
              images: product.images.length > 0 ? ((_d = product.images.find((image) => image.isPrimary)) == null ? void 0 : _d.uploadUrl) || defaultImage : [defaultImage]
            };
          });
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    const fetchProducts = async () => {
      try {
        const { $axios } = useNuxtApp();
        const response = await $axios.get("/product", {
          params: {
            searchTerm: searchTerm.value
            // categoryId: selectedCategory.value,
          }
        });
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Dialog = script;
      const _component_Avatar = script$4;
      const _component_InputText = script$7$1;
      const _component_Button = script$9;
      const _component_Select = script$a;
      const _component_AutoComplete = script$5;
      const _component_Divider = script$d;
      _push(ssrRenderComponent(_component_Dialog, mergeProps({
        visible: isQuotationVisible.value,
        "onUpdate:visible": ($event) => isQuotationVisible.value = $event,
        modal: "",
        class: "w-full md:w-[60vw] lg:w-[50vw]",
        style: { width: "50rem" },
        breakpoints: { "1199px": "75vw", "575px": "90vw" }
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Avatar, {
              label: initials.value,
              class: "bg-blue-100 text-blue-700 font-bold",
              shape: "circle",
              size: "xlarge"
            }, null, _parent2, _scopeId));
            _push2(`<h3 class="text-xl font-semibold"${_scopeId}> Welcome Back <span class="text-blue-500"${_scopeId}>${ssrInterpolate(unref(userStore).user.firstName)}</span></h3></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-4" }, [
                createVNode(_component_Avatar, {
                  label: initials.value,
                  class: "bg-blue-100 text-blue-700 font-bold",
                  shape: "circle",
                  size: "xlarge"
                }, null, 8, ["label"]),
                createVNode("h3", { class: "text-xl font-semibold" }, [
                  createTextVNode(" Welcome Back "),
                  createVNode("span", { class: "text-blue-500" }, toDisplayString(unref(userStore).user.firstName), 1)
                ])
              ])
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!quotationStarted.value) {
              _push2(`<div class="flex items-center gap-4"${_scopeId}><span class="text-xl font-bold"${_scopeId}>Quotation</span></div>`);
            } else {
              _push2(`<div class="flex items-center justify-between w-full"${_scopeId}><h3 class="text-xl font-semibold"${_scopeId}>Select Items</h3>`);
              _push2(ssrRenderComponent(_component_InputText, {
                modelValue: search2.value,
                "onUpdate:modelValue": ($event) => search2.value = $event,
                placeholder: "Search items...",
                class: "w-1/2"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            }
          } else {
            return [
              !quotationStarted.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "flex items-center gap-4"
              }, [
                createVNode("span", { class: "text-xl font-bold" }, "Quotation")
              ])) : (openBlock(), createBlock("div", {
                key: 1,
                class: "flex items-center justify-between w-full"
              }, [
                createVNode("h3", { class: "text-xl font-semibold" }, "Select Items"),
                createVNode(_component_InputText, {
                  modelValue: search2.value,
                  "onUpdate:modelValue": ($event) => search2.value = $event,
                  placeholder: "Search items...",
                  class: "w-1/2"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]))
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!quotationStarted.value) {
              _push2(`<div class="flex flex-col items-center justify-center text-center space-y-6 p-6"${_scopeId}><img src="https://cdn-icons-png.flaticon.com/512/942/942748.png" alt="Quotation Illustration" class="w-40 h-40 mx-auto"${_scopeId}><p class="text-lg"${_scopeId}>Do you wish to make a quotation?</p><div class="flex gap-4 justify-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Button, {
                label: "Yes",
                class: "p-button-success",
                onClick: startQuotation
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Button, {
                label: "No",
                class: "p-button-secondary",
                onClick: toggleQuotation
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<div class="space-y-4"${_scopeId}><div class="flex items-center w-full justify-between"${_scopeId}><h3 class="text-xl font-semibold mr-4"${_scopeId}>Search items</h3><div class="flex justify-end"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Select, {
                modelValue: selectedCategory.value,
                "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                options: categories.value,
                optionLabel: "name",
                placeholder: "Choose Category",
                class: "min-w-[150px] z-10 rounded-l-md mr-3 border-l"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_AutoComplete, {
                modelValue: searchTerm.value,
                "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                onInput: fetchProducts,
                suggestions: filteredItems.value,
                onComplete: searchItems,
                optionLabel: "name",
                placeholder: "I'm Searching for ...",
                class: "flex-grow mx-2 p-input-icon-left",
                onItemSelect: addProductToQuote
              }, {
                option: withCtx((slotProps, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex items-center w-full"${_scopeId2}><img${ssrRenderAttr("alt", slotProps.option.name)}${ssrRenderAttr("src", slotProps.option.images)} class="mr-2 rounded-md" style="${ssrRenderStyle({ "width": "40px", "height": "40px", "object-fit": "cover" })}"${_scopeId2}><div class="w-full"${_scopeId2}>${ssrInterpolate(slotProps.option.name)}</div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex items-center w-full" }, [
                        createVNode("img", {
                          alt: slotProps.option.name,
                          src: slotProps.option.images,
                          class: "mr-2 rounded-md",
                          style: { "width": "40px", "height": "40px", "object-fit": "cover" }
                        }, null, 8, ["alt", "src"]),
                        createVNode("div", { class: "w-full" }, toDisplayString(slotProps.option.name), 1)
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
              _push2(ssrRenderComponent(_component_Divider, null, null, _parent2, _scopeId));
              _push2(`<div class="scroll-area max-h-[60vh] overflow-y-auto pr-2"${_scopeId}>`);
              if (filteredQuotationList.value.length > 0) {
                _push2(`<!--[-->`);
                ssrRenderList(filteredQuotationList.value, (item2, index) => {
                  _push2(`<div class="flex justify-between items-center border-b pb-2 mb-2"${_scopeId}><div class="flex"${_scopeId}><h4 class="font-semibold text-sm pr-2"${_scopeId}>${ssrInterpolate(index + 1)}</h4><img${ssrRenderAttr("src", item2.images[0])} class="mr-2" height="25px" width="25px"${_scopeId}><div${_scopeId}><h4 class="font-semibold text-sm"${_scopeId}>${ssrInterpolate(item2.name)}</h4><p class="text-sm text-gray-500"${_scopeId}>${ssrInterpolate(item2.description)}</p></div></div><div class="flex items-center gap-2 sm:flex-row flex-col-reverse"${_scopeId}><div class="flex sm:flex-row flex-col items-center gap-1"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_Button, {
                    icon: "pi pi-plus",
                    class: "p-button-rounded p-button-sm !p-0.5 !h-6 !w-6 !text-xs",
                    onClick: ($event) => increaseQty(index)
                  }, null, _parent2, _scopeId));
                  _push2(ssrRenderComponent(_component_InputText, {
                    modelValue: item2.quantity,
                    "onUpdate:modelValue": ($event) => item2.quantity = $event,
                    modelModifiers: { number: true },
                    class: "w-12 h-6 text-center text-xs"
                  }, null, _parent2, _scopeId));
                  _push2(ssrRenderComponent(_component_Button, {
                    icon: "pi pi-minus",
                    class: "p-button-rounded p-button-sm !p-0.5 !h-6 !w-6 !text-xs",
                    onClick: ($event) => decreaseQty(index)
                  }, null, _parent2, _scopeId));
                  _push2(`</div>`);
                  _push2(ssrRenderComponent(_component_Button, {
                    icon: "pi pi-trash",
                    class: "p-button-danger p-button-rounded p-button-sm !p-0.5 !h-6 !w-6 !text-xs",
                    onClick: ($event) => removeItem(index)
                  }, null, _parent2, _scopeId));
                  _push2(`</div></div>`);
                });
                _push2(`<!--]-->`);
              } else {
                _push2(`<div class="flex justify-center"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="Empty Cart" class="max-w-full h-auto w-24 sm:w-32 md:w-48 lg:w-64 mb-4"${_scopeId}></div>`);
              }
              _push2(`</div><div class="flex justify-end space-x-2 pt-4 border-t mt-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_InputText, {
                type: "text",
                modelValue: message.value,
                "onUpdate:modelValue": ($event) => message.value = $event,
                placeholder: "add message"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Button, {
                label: "Place Quotation",
                class: "p-button-success",
                onClick: submitQuotation,
                disabled: quotationList.value.length === 0
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            }
          } else {
            return [
              !quotationStarted.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "flex flex-col items-center justify-center text-center space-y-6 p-6"
              }, [
                createVNode("img", {
                  src: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
                  alt: "Quotation Illustration",
                  class: "w-40 h-40 mx-auto"
                }),
                createVNode("p", { class: "text-lg" }, "Do you wish to make a quotation?"),
                createVNode("div", { class: "flex gap-4 justify-center" }, [
                  createVNode(_component_Button, {
                    label: "Yes",
                    class: "p-button-success",
                    onClick: startQuotation
                  }),
                  createVNode(_component_Button, {
                    label: "No",
                    class: "p-button-secondary",
                    onClick: toggleQuotation
                  })
                ])
              ])) : (openBlock(), createBlock("div", {
                key: 1,
                class: "space-y-4"
              }, [
                createVNode("div", { class: "flex items-center w-full justify-between" }, [
                  createVNode("h3", { class: "text-xl font-semibold mr-4" }, "Search items"),
                  createVNode("div", { class: "flex justify-end" }, [
                    createVNode(_component_Select, {
                      modelValue: selectedCategory.value,
                      "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                      options: categories.value,
                      optionLabel: "name",
                      placeholder: "Choose Category",
                      class: "min-w-[150px] z-10 rounded-l-md mr-3 border-l"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                    createVNode(_component_AutoComplete, {
                      modelValue: searchTerm.value,
                      "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                      onInput: fetchProducts,
                      suggestions: filteredItems.value,
                      onComplete: searchItems,
                      optionLabel: "name",
                      placeholder: "I'm Searching for ...",
                      class: "flex-grow mx-2 p-input-icon-left",
                      onItemSelect: addProductToQuote
                    }, {
                      option: withCtx((slotProps) => [
                        createVNode("div", { class: "flex items-center w-full" }, [
                          createVNode("img", {
                            alt: slotProps.option.name,
                            src: slotProps.option.images,
                            class: "mr-2 rounded-md",
                            style: { "width": "40px", "height": "40px", "object-fit": "cover" }
                          }, null, 8, ["alt", "src"]),
                          createVNode("div", { class: "w-full" }, toDisplayString(slotProps.option.name), 1)
                        ])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue", "suggestions"])
                  ])
                ]),
                createVNode(_component_Divider),
                createVNode("div", { class: "scroll-area max-h-[60vh] overflow-y-auto pr-2" }, [
                  filteredQuotationList.value.length > 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(filteredQuotationList.value, (item2, index) => {
                    return openBlock(), createBlock("div", {
                      key: item2.id,
                      class: "flex justify-between items-center border-b pb-2 mb-2"
                    }, [
                      createVNode("div", { class: "flex" }, [
                        createVNode("h4", { class: "font-semibold text-sm pr-2" }, toDisplayString(index + 1), 1),
                        createVNode("img", {
                          src: item2.images[0],
                          class: "mr-2",
                          height: "25px",
                          width: "25px"
                        }, null, 8, ["src"]),
                        createVNode("div", null, [
                          createVNode("h4", { class: "font-semibold text-sm" }, toDisplayString(item2.name), 1),
                          createVNode("p", { class: "text-sm text-gray-500" }, toDisplayString(item2.description), 1)
                        ])
                      ]),
                      createVNode("div", { class: "flex items-center gap-2 sm:flex-row flex-col-reverse" }, [
                        createVNode("div", { class: "flex sm:flex-row flex-col items-center gap-1" }, [
                          createVNode(_component_Button, {
                            icon: "pi pi-plus",
                            class: "p-button-rounded p-button-sm !p-0.5 !h-6 !w-6 !text-xs",
                            onClick: ($event) => increaseQty(index)
                          }, null, 8, ["onClick"]),
                          createVNode(_component_InputText, {
                            modelValue: item2.quantity,
                            "onUpdate:modelValue": ($event) => item2.quantity = $event,
                            modelModifiers: { number: true },
                            class: "w-12 h-6 text-center text-xs"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_Button, {
                            icon: "pi pi-minus",
                            class: "p-button-rounded p-button-sm !p-0.5 !h-6 !w-6 !text-xs",
                            onClick: ($event) => decreaseQty(index)
                          }, null, 8, ["onClick"])
                        ]),
                        createVNode(_component_Button, {
                          icon: "pi pi-trash",
                          class: "p-button-danger p-button-rounded p-button-sm !p-0.5 !h-6 !w-6 !text-xs",
                          onClick: ($event) => removeItem(index)
                        }, null, 8, ["onClick"])
                      ])
                    ]);
                  }), 128)) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "flex justify-center"
                  }, [
                    createVNode("img", {
                      src: _imports_0,
                      alt: "Empty Cart",
                      class: "max-w-full h-auto w-24 sm:w-32 md:w-48 lg:w-64 mb-4"
                    })
                  ]))
                ]),
                createVNode("div", { class: "flex justify-end space-x-2 pt-4 border-t mt-4" }, [
                  createVNode(_component_InputText, {
                    type: "text",
                    modelValue: message.value,
                    "onUpdate:modelValue": ($event) => message.value = $event,
                    placeholder: "add message"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_Button, {
                    label: "Place Quotation",
                    class: "p-button-success",
                    onClick: submitQuotation,
                    disabled: quotationList.value.length === 0
                  }, null, 8, ["disabled"])
                ])
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/QuotationDialog.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Navbar",
  __ssrInlineRender: true,
  props: {
    // refresh: {
    //   type: Boolean,
    //   default: false,
    // },
  },
  emits: ["update:searchTerm"],
  setup(__props, { emit: __emit }) {
    const showQuoatation = ref(false);
    const productStore = useProductStore();
    const quotationList = ref([]);
    const userStore = useUserStore();
    const searchTerm = ref("");
    const selectedCategory = ref([]);
    ref(false);
    const categories = ref([]);
    const cartCount = computed(() => productStore.cartCount);
    const cartTotal = computed(() => productStore.cartTotal);
    const shopOwnerVerified = computed(() => userStore.user.shopOwnerVerified);
    const filteredItems = ref([]);
    const wishListCount = computed(() => productStore.wishListCount);
    const router = useRouter();
    const { $formatPrice } = useNuxtApp();
    const menu = ref();
    const toggle2 = (event) => {
      menu.value.toggle(event);
    };
    const formattedPrice = (price) => {
      return $formatPrice(price);
    };
    ref(0);
    const navigateToProduct = (event) => {
      if (!selectedCategory.value || !selectedCategory.value.id) {
        router.push({
          path: `/products/${event.value.id}`
        });
      } else {
        router.push({
          path: `/results/${selectedCategory.value.id}`,
          query: {
            // category: selectedCategory.value.id, // Pass only the category ID
            searchTerm: searchTerm.value.name,
            productId: event.value.id
          }
        });
      }
    };
    ref(false);
    const fetchProducts = async () => {
      try {
        const { $axios } = useNuxtApp();
        const response = await $axios.get("/product", {
          params: {
            searchTerm: searchTerm.value
            // categoryId: selectedCategory.value,
          }
        });
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    const searchItems = async (event) => {
      var _a2;
      var _a, _b;
      let query = event.query;
      filteredItems.value = [];
      const { $axios } = useNuxtApp();
      if (!query) return;
      try {
        let response;
        const categoryIds = Array.isArray(selectedCategory == null ? void 0 : selectedCategory.value) ? selectedCategory.value.filter((cat) => cat.id !== null).map((cat) => cat.id) : ((_a = selectedCategory == null ? void 0 : selectedCategory.value) == null ? void 0 : _a.id) && selectedCategory.value.id !== null ? [selectedCategory.value.id] : [];
        const defaultImage = "https://www.shutterstock.com/shutterstock/photos/2059817444/display_1500/stock-vector-no-image-available-photo-coming-soon-illustration-vector-2059817444.jpg";
        if (categoryIds.length > 0) {
          response = await $axios.get("/product", {
            params: { searchTerm: query, categoryId: categoryIds }
          });
          filteredItems.value = response.data.results.flatMap(
            (product) => product.models.map((model) => ({
              id: model.id,
              name: `${product.name} - (${model.name})`,
              images: model.images.length > 0 ? model.images.map((img) => img.uploadUrl) : [defaultImage]
            }))
          );
        } else {
          response = await $axios.get("/product/product-models", {
            params: { searchTerm: query }
          });
          const products = (_a2 = (_b = response.data) == null ? void 0 : _b.results) != null ? _a2 : [];
          filteredItems.value = products.map((product) => {
            var _a3;
            var _a22, _b2, _c, _d;
            return {
              id: product.id,
              name: product.product.name,
              price: product.price,
              category: (_a3 = (_c = (_b2 = (_a22 = product.product) == null ? void 0 : _a22.subCategory) == null ? void 0 : _b2.category) == null ? void 0 : _c.name) != null ? _a3 : "Unknown",
              images: product.images.length > 0 ? ((_d = product.images.find((image) => image.isPrimary)) == null ? void 0 : _d.uploadUrl) || defaultImage : [defaultImage]
            };
          });
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    const logout = () => userStore.logout();
    const goToWishList = () => {
      router.push({
        path: `/wishlist`
      });
    };
    const goToCart = () => {
      if (userStore.user.shopOwnerVerified) {
        router.push({
          path: `/quotation`
        });
      } else {
        router.push({
          path: `/cart`
        });
      }
    };
    const goToProfile = () => {
      router.push({
        path: `/my-account`
      });
    };
    const welcomeLabel = computed(() => {
      return `Welcome ${userStore.isLoggedIn ? userStore.user.firstName : "User"}`;
    });
    const items = ref([
      {
        label: welcomeLabel,
        items: [
          {
            label: "My Account",
            icon: "pi pi-user",
            command: goToProfile
          },
          {
            label: "Wishlist",
            icon: "pi pi-heart",
            command: goToWishList,
            badge: computed(
              () => wishListCount.value > 0 ? wishListCount.value : null
            )
          },
          {
            label: "Cart",
            icon: "pi pi-shopping-cart",
            command: goToCart,
            // count: cartCount,
            badge: computed(() => cartTotal.value > 0 ? cartTotal.value : null)
          },
          {
            label: "Log out",
            icon: "pi pi-sign-out",
            command: logout
          }
        ]
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_AutoComplete = script$5;
      const _component_Button = script$9;
      const _component_Menu = script$7;
      const _component_Badge = script$2$2;
      const _component_Select = script$a;
      const _component_OverlayBadge = script$8;
      const _directive_ripple = Ripple;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "bg-white" }, _attrs))}><div class="container mx-auto px-2 py-4"><div class="md:hidden flex items-center justify-between w-full">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/dashboard" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0$1)} alt="Hikvision Logo" class="h-16 object-contain"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0$1,
                alt: "Hikvision Logo",
                class: "h-16 object-contain"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex-row justify-center">`);
      _push(ssrRenderComponent(_component_AutoComplete, {
        modelValue: searchTerm.value,
        "onUpdate:modelValue": ($event) => searchTerm.value = $event,
        onInput: fetchProducts,
        suggestions: filteredItems.value,
        onComplete: searchItems,
        optionLabel: "name",
        placeholder: "I'm Searching for ...",
        class: "flex-grow mx-2 p-input-icon-left",
        onItemSelect: navigateToProduct
      }, {
        option: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center w-full"${_scopeId}><img${ssrRenderAttr("alt", slotProps.option.name)}${ssrRenderAttr("src", slotProps.option.images)} class="mr-2 rounded-md" style="${ssrRenderStyle({ "width": "40px", "height": "40px", "object-fit": "cover" })}"${_scopeId}><div class="w-full"${_scopeId}>${ssrInterpolate(slotProps.option.name)}</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center w-full" }, [
                createVNode("img", {
                  alt: slotProps.option.name,
                  src: slotProps.option.images,
                  class: "mr-2 rounded-md",
                  style: { "width": "40px", "height": "40px", "object-fit": "cover" }
                }, null, 8, ["alt", "src"]),
                createVNode("div", { class: "w-full" }, toDisplayString(slotProps.option.name), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Button, {
        type: "button",
        icon: "pi pi-bars",
        onClick: toggle2,
        "aria-haspopup": "true",
        "aria-controls": "overlay_menu",
        class: "bg-transparent border-none shadow-none p-2 text-black"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Menu, {
        ref_key: "menu",
        ref: menu,
        id: "overlay_menu",
        model: items.value,
        popup: true,
        class: "wmd:w-60"
      }, {
        item: withCtx(({ item: item2, props: props2 }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a${ssrRenderAttrs(mergeProps({ class: "flex items-center" }, props2.action, ssrGetDirectiveProps(_ctx, _directive_ripple)))}${_scopeId}><span class="${ssrRenderClass(item2.icon)}"${_scopeId}></span><span${_scopeId}>${ssrInterpolate(item2.label)}</span>`);
            if (item2.badge) {
              _push2(ssrRenderComponent(_component_Badge, {
                class: "ml-auto",
                value: formattedPrice(item2.badge),
                severity: "warning"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (item2.count) {
              _push2(ssrRenderComponent(_component_Badge, {
                class: "ml-auto",
                value: _ctx.count,
                severity: "warning"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</a>`);
          } else {
            return [
              withDirectives((openBlock(), createBlock("a", mergeProps({ class: "flex items-center" }, props2.action), [
                createVNode("span", {
                  class: item2.icon
                }, null, 2),
                createVNode("span", null, toDisplayString(item2.label), 1),
                item2.badge ? (openBlock(), createBlock(_component_Badge, {
                  key: 0,
                  class: "ml-auto",
                  value: formattedPrice(item2.badge),
                  severity: "warning"
                }, null, 8, ["value"])) : createCommentVNode("", true),
                item2.count ? (openBlock(), createBlock(_component_Badge, {
                  key: 1,
                  class: "ml-auto",
                  value: _ctx.count,
                  severity: "warning"
                }, null, 8, ["value"])) : createCommentVNode("", true)
              ], 16)), [
                [_directive_ripple]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="hidden md:flex items-center"><div class="mr-auto md:w-48 flex-shrink-0">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/dashboard" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0$1)} alt="Hikvision Logo" class="h-20 object-contain"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0$1,
                alt: "Hikvision Logo",
                class: "h-20 object-contain"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-full bg-red flex justify-center items-center py-4"><div class="relative flex items-center w-">`);
      _push(ssrRenderComponent(_component_Select, {
        modelValue: selectedCategory.value,
        "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
        options: categories.value,
        optionLabel: "name",
        placeholder: "Choose Category",
        class: "min-w-[150px] z-10 rounded-l-md mr-3 border-l"
      }, null, _parent));
      _push(ssrRenderComponent(_component_AutoComplete, {
        modelValue: searchTerm.value,
        "onUpdate:modelValue": ($event) => searchTerm.value = $event,
        onInput: fetchProducts,
        suggestions: filteredItems.value,
        onComplete: searchItems,
        optionLabel: "name",
        placeholder: "I'm Searching for ...",
        class: "flex-grow p-input-icon-left border-l-10 border-r-0",
        onItemSelect: navigateToProduct
      }, {
        dropdownicon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="pi pi-chevron-down text-gray-500"${_scopeId}></i>`);
          } else {
            return [
              createVNode("i", { class: "pi pi-chevron-down text-gray-500" })
            ];
          }
        }),
        option: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center w-full"${_scopeId}><img${ssrRenderAttr("alt", slotProps.option.name)}${ssrRenderAttr("src", slotProps.option.images)} class="mr-2 rounded-md" style="${ssrRenderStyle({ "width": "40px", "height": "40px", "object-fit": "cover" })}"${_scopeId}><div class="w-full"${_scopeId}>${ssrInterpolate(slotProps.option.name)}</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center w-full" }, [
                createVNode("img", {
                  alt: slotProps.option.name,
                  src: slotProps.option.images,
                  class: "mr-2 rounded-md",
                  style: { "width": "40px", "height": "40px", "object-fit": "cover" }
                }, null, 8, ["alt", "src"]),
                createVNode("div", { class: "w-full" }, toDisplayString(slotProps.option.name), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><nav class="hidden md:flex lg:flex w-1/5 justify-between items-center p-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        onClick: goToProfile,
        class: "cursor-pointer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="pi pi-user text-3xl"${_scopeId}></i>`);
          } else {
            return [
              createVNode("i", { class: "pi pi-user text-3xl" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        onClick: goToWishList,
        class: "cursor-pointer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_OverlayBadge, {
              value: wishListCount.value,
              severity: "danger"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<i class="pi pi-heart text-3xl"${_scopeId2}></i>`);
                } else {
                  return [
                    createVNode("i", { class: "pi pi-heart text-3xl" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_OverlayBadge, {
                value: wishListCount.value,
                severity: "danger"
              }, {
                default: withCtx(() => [
                  createVNode("i", { class: "pi pi-heart text-3xl" })
                ]),
                _: 1
              }, 8, ["value"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        onClick: goToCart,
        class: "cursor-pointer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_OverlayBadge, {
              value: cartCount.value,
              severity: "danger"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<i class="pi pi-shopping-cart text-3xl"${_scopeId2}></i>`);
                } else {
                  return [
                    createVNode("i", { class: "pi pi-shopping-cart text-3xl" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_OverlayBadge, {
                value: cartCount.value,
                severity: "danger"
              }, {
                default: withCtx(() => [
                  createVNode("i", { class: "pi pi-shopping-cart text-3xl" })
                ]),
                _: 1
              }, 8, ["value"])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (shopOwnerVerified.value) {
        _push(`<button class="relative text-3xl text-gray-700 hover:text-blue-600"><i class="pi pi-clipboard text-3xl"></i>`);
        if (quotationList.value.length) {
          _push(`<span class="absolute top-0 right-0 bg-red-500 text-white text-xs px-1.5 rounded-full">${ssrInterpolate(quotationList.value.length)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</nav><div class="ml-4 hidden sm:flex flex-col font-bold"><span class="text-xs text-gray-400">My Cart</span><span>Ksh ${ssrInterpolate(formattedPrice(cartTotal.value))}</span></div></div></div><hr>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        visible: showQuoatation.value,
        "onUpdate:visible": ($event) => showQuoatation.value = $event,
        quotationList: quotationList.value
      }, null, _parent));
      _push(`</header>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Navbar-DfKphGdW.mjs.map
