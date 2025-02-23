import { _ as __nuxt_component_0 } from './nuxt-link-DpsmJg1c.mjs';
import { R as Ripple } from './index-5ckDHAkT.mjs';
import { s as script$5, a as script$2$2, b as script$3$1 } from './index-CI0zemKa.mjs';
import { B as BaseStyle, b as useProductStore, u as useUserStore, a as useNuxtApp } from './server.mjs';
import { useSSRContext, ref, computed, mergeProps, withCtx, createVNode, toDisplayString, withDirectives, openBlock, createBlock, createCommentVNode, resolveComponent, createElementBlock, renderSlot, resolveDirective, createElementVNode, resolveDynamicComponent, normalizeClass, Transition, Fragment, renderList, createTextVNode, normalizeStyle, createSlots } from 'vue';
import { a as script$6, U as UniqueComponentId, C as ConnectedOverlayScrollHandler, O as OverlayEventBus, s as script$7$1, b as script$2$4 } from './index-BXa5O8IC.mjs';
import { focus, find, findSingle, addStyle, absolutePosition, getOuterWidth, isTouchDevice, relativePosition } from '@primeuix/utils/dom';
import { ZIndex } from '@primeuix/utils/zindex';
import { s as script$2$3 } from './index-ZzPV6IeI.mjs';
import { a as script$1$4 } from './index-BjfqnR8d.mjs';
import { isNotEmpty, resolve, resolveFieldData, isEmpty, equals, findLastIndex } from '@primeuix/utils/object';
import { s as script$8 } from './index-B0KNiV_3.mjs';
import { s as script$7 } from './index-Bn5AJdG7.mjs';
import { s as script$9 } from './index-DWifVPgv.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrGetDirectiveProps, ssrRenderClass } from 'vue/server-renderer';
import { _ as _imports_0 } from './logoo-Bk06oiQl.mjs';
import { useRouter } from 'vue-router';

var theme$3 = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-overlaybadge {\n    position: relative;\n}\n\n.p-overlaybadge .p-badge {\n    position: absolute;\n    inset-block-start: 0;\n    inset-inline-end: 0;\n    transform: translate(50%, -50%);\n    transform-origin: 100% 0;\n    margin: 0;\n    outline-width: ".concat(dt("overlaybadge.outline.width"), ";\n    outline-style: solid;\n    outline-color: ").concat(dt("overlaybadge.outline.color"), ";\n}\n\n.p-overlaybadge .p-badge:dir(rtl) {\n    transform: translate(-50%, -50%);\n}\n");
};
var classes$3 = {
  root: "p-overlaybadge"
};
var OverlayBadgeStyle = BaseStyle.extend({
  name: "overlaybadge",
  theme: theme$3,
  classes: classes$3
});
var script$1$3 = {
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
var script$4 = {
  name: "OverlayBadge",
  "extends": script$1$3,
  inheritAttrs: false,
  components: {
    Badge: script$2$2
  }
};
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Badge = resolveComponent("Badge");
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "default"), createVNode(_component_Badge, mergeProps(_ctx.$props, {
    pt: _ctx.ptm("pcBadge")
  }), null, 16, ["pt"])], 16);
}
script$4.render = render$3;
var theme$2 = function theme2(_ref) {
  var dt = _ref.dt;
  return "\n.p-menu {\n    background: ".concat(dt("menu.background"), ";\n    color: ").concat(dt("menu.color"), ";\n    border: 1px solid ").concat(dt("menu.border.color"), ";\n    border-radius: ").concat(dt("menu.border.radius"), ";\n    min-width: 12.5rem;\n}\n\n.p-menu-list {\n    margin: 0;\n    padding: ").concat(dt("menu.list.padding"), ";\n    outline: 0 none;\n    list-style: none;\n    display: flex;\n    flex-direction: column;\n    gap: ").concat(dt("menu.list.gap"), ";\n}\n\n.p-menu-item-content {\n    transition: background ").concat(dt("menu.transition.duration"), ", color ").concat(dt("menu.transition.duration"), ";\n    border-radius: ").concat(dt("menu.item.border.radius"), ";\n    color: ").concat(dt("menu.item.color"), ";\n}\n\n.p-menu-item-link {\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    overflow: hidden;\n    position: relative;\n    color: inherit;\n    padding: ").concat(dt("menu.item.padding"), ";\n    gap: ").concat(dt("menu.item.gap"), ";\n    user-select: none;\n    outline: 0 none;\n}\n\n.p-menu-item-label {\n    line-height: 1;\n}\n\n.p-menu-item-icon {\n    color: ").concat(dt("menu.item.icon.color"), ";\n}\n\n.p-menu-item.p-focus .p-menu-item-content {\n    color: ").concat(dt("menu.item.focus.color"), ";\n    background: ").concat(dt("menu.item.focus.background"), ";\n}\n\n.p-menu-item.p-focus .p-menu-item-icon {\n    color: ").concat(dt("menu.item.icon.focus.color"), ";\n}\n\n.p-menu-item:not(.p-disabled) .p-menu-item-content:hover {\n    color: ").concat(dt("menu.item.focus.color"), ";\n    background: ").concat(dt("menu.item.focus.background"), ";\n}\n\n.p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-icon {\n    color: ").concat(dt("menu.item.icon.focus.color"), ";\n}\n\n.p-menu-overlay {\n    box-shadow: ").concat(dt("menu.shadow"), ";\n}\n\n.p-menu-submenu-label {\n    background: ").concat(dt("menu.submenu.label.background"), ";\n    padding: ").concat(dt("menu.submenu.label.padding"), ";\n    color: ").concat(dt("menu.submenu.label.color"), ";\n    font-weight: ").concat(dt("menu.submenu.label.font.weight"), ";\n}\n\n.p-menu-separator {\n    border-block-start: 1px solid ").concat(dt("menu.separator.border.color"), ";\n}\n");
};
var classes$2 = {
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
  theme: theme$2,
  classes: classes$2
});
var script$2$1 = {
  name: "BaseMenu",
  "extends": script$1$4,
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
var script$1$2 = {
  name: "Menuitem",
  hostName: "Menu",
  "extends": script$1$4,
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
script$1$2.render = render$1$1;
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
var script$3 = {
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
    PVMenuitem: script$1$2,
    Portal: script$2$3
  }
};
var _hoisted_1$2 = ["id"];
var _hoisted_2$2 = ["id", "tabindex", "aria-activedescendant", "aria-label", "aria-labelledby"];
var _hoisted_3$1 = ["id"];
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
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
          }), 128))], 16, _hoisted_2$2), _ctx.$slots.end ? (openBlock(), createElementBlock("div", mergeProps({
            key: 1,
            "class": _ctx.cx("end")
          }, _ctx.ptm("end")), [renderSlot(_ctx.$slots, "end")], 16)) : createCommentVNode("", true)], 16, _hoisted_1$2)) : createCommentVNode("", true)];
        }),
        _: 3
      }, 16, ["onEnter", "onLeave", "onAfterLeave"])];
    }),
    _: 3
  }, 8, ["appendTo", "disabled"]);
}
script$3.render = render$2;
var theme$1 = function theme3(_ref) {
  var dt = _ref.dt;
  return "\n.p-chip {\n    display: inline-flex;\n    align-items: center;\n    background: ".concat(dt("chip.background"), ";\n    color: ").concat(dt("chip.color"), ";\n    border-radius: ").concat(dt("chip.border.radius"), ";\n    padding-block: ").concat(dt("chip.padding.y"), ";\n    padding-inline: ").concat(dt("chip.padding.x"), ";\n    gap: ").concat(dt("chip.gap"), ";\n}\n\n.p-chip-icon {\n    color: ").concat(dt("chip.icon.color"), ";\n    font-size: ").concat(dt("chip.icon.font.size"), ";\n    width: ").concat(dt("chip.icon.size"), ";\n    height: ").concat(dt("chip.icon.size"), ";\n}\n\n.p-chip-image {\n    border-radius: 50%;\n    width: ").concat(dt("chip.image.width"), ";\n    height: ").concat(dt("chip.image.height"), ";\n    margin-inline-start: calc(-1 * ").concat(dt("chip.padding.y"), ");\n}\n\n.p-chip:has(.p-chip-remove-icon) {\n    padding-inline-end: ").concat(dt("chip.padding.y"), ";\n}\n\n.p-chip:has(.p-chip-image) {\n    padding-block-start: calc(").concat(dt("chip.padding.y"), " / 2);\n    padding-block-end: calc(").concat(dt("chip.padding.y"), " / 2);\n}\n\n.p-chip-remove-icon {\n    cursor: pointer;\n    font-size: ").concat(dt("chip.remove.icon.size"), ";\n    width: ").concat(dt("chip.remove.icon.size"), ";\n    height: ").concat(dt("chip.remove.icon.size"), ";\n    color: ").concat(dt("chip.remove.icon.color"), ";\n    border-radius: 50%;\n    transition: outline-color ").concat(dt("chip.transition.duration"), ", box-shadow ").concat(dt("chip.transition.duration"), ";\n    outline-color: transparent;\n}\n\n.p-chip-remove-icon:focus-visible {\n    box-shadow: ").concat(dt("chip.remove.icon.focus.ring.shadow"), ";\n    outline: ").concat(dt("chip.remove.icon.focus.ring.width"), " ").concat(dt("chip.remove.icon.focus.ring.style"), " ").concat(dt("chip.remove.icon.focus.ring.color"), ";\n    outline-offset: ").concat(dt("chip.remove.icon.focus.ring.offset"), ";\n}\n");
};
var classes$1 = {
  root: "p-chip p-component",
  image: "p-chip-image",
  icon: "p-chip-icon",
  label: "p-chip-label",
  removeIcon: "p-chip-remove-icon"
};
var ChipStyle = BaseStyle.extend({
  name: "chip",
  theme: theme$1,
  classes: classes$1
});
var script$1$1 = {
  name: "BaseChip",
  "extends": script$1$4,
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
var script$2 = {
  name: "Chip",
  "extends": script$1$1,
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
    TimesCircleIcon: script$7
  }
};
var _hoisted_1$1 = ["aria-label"];
var _hoisted_2$1 = ["src"];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
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
    }), null, 16, _hoisted_2$1)) : _ctx.$slots.icon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.icon), mergeProps({
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
  }) : createCommentVNode("", true)], 16, _hoisted_1$1)) : createCommentVNode("", true);
}
script$2.render = render$1;
var theme4 = function theme5(_ref) {
  var dt = _ref.dt;
  return "\n.p-autocomplete {\n    display: inline-flex;\n}\n\n.p-autocomplete-loader {\n    position: absolute;\n    top: 50%;\n    margin-top: -0.5rem;\n    inset-inline-end: ".concat(dt("autocomplete.padding.x"), ";\n}\n\n.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-loader {\n    inset-inline-end: calc(").concat(dt("autocomplete.dropdown.width"), " + ").concat(dt("autocomplete.padding.x"), ");\n}\n\n.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input {\n    flex: 1 1 auto;\n    width: 1%;\n}\n\n.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input,\n.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input-multiple {\n    border-start-end-radius: 0;\n    border-end-end-radius: 0;\n}\n\n.p-autocomplete-dropdown {\n    cursor: pointer;\n    display: inline-flex;\n    user-select: none;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    position: relative;\n    width: ").concat(dt("autocomplete.dropdown.width"), ";\n    border-start-end-radius: ").concat(dt("autocomplete.dropdown.border.radius"), ";\n    border-end-end-radius: ").concat(dt("autocomplete.dropdown.border.radius"), ";\n    background: ").concat(dt("autocomplete.dropdown.background"), ";\n    border: 1px solid ").concat(dt("autocomplete.dropdown.border.color"), ";\n    border-inline-start: 0 none;\n    color: ").concat(dt("autocomplete.dropdown.color"), ";\n    transition: background ").concat(dt("autocomplete.transition.duration"), ", color ").concat(dt("autocomplete.transition.duration"), ", border-color ").concat(dt("autocomplete.transition.duration"), ", outline-color ").concat(dt("autocomplete.transition.duration"), ", box-shadow ").concat(dt("autocomplete.transition.duration"), ";\n    outline-color: transparent;\n}\n\n.p-autocomplete-dropdown:not(:disabled):hover {\n    background: ").concat(dt("autocomplete.dropdown.hover.background"), ";\n    border-color: ").concat(dt("autocomplete.dropdown.hover.border.color"), ";\n    color: ").concat(dt("autocomplete.dropdown.hover.color"), ";\n}\n\n.p-autocomplete-dropdown:not(:disabled):active {\n    background: ").concat(dt("autocomplete.dropdown.active.background"), ";\n    border-color: ").concat(dt("autocomplete.dropdown.active.border.color"), ";\n    color: ").concat(dt("autocomplete.dropdown.active.color"), ";\n}\n\n.p-autocomplete-dropdown:focus-visible {\n    box-shadow: ").concat(dt("autocomplete.dropdown.focus.ring.shadow"), ";\n    outline: ").concat(dt("autocomplete.dropdown.focus.ring.width"), " ").concat(dt("autocomplete.dropdown.focus.ring.style"), " ").concat(dt("autocomplete.dropdown.focus.ring.color"), ";\n    outline-offset: ").concat(dt("autocomplete.dropdown.focus.ring.offset"), ";\n}\n\n.p-autocomplete .p-autocomplete-overlay {\n    min-width: 100%;\n}\n\n.p-autocomplete-overlay {\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: ").concat(dt("autocomplete.overlay.background"), ";\n    color: ").concat(dt("autocomplete.overlay.color"), ";\n    border: 1px solid ").concat(dt("autocomplete.overlay.border.color"), ";\n    border-radius: ").concat(dt("autocomplete.overlay.border.radius"), ";\n    box-shadow: ").concat(dt("autocomplete.overlay.shadow"), ";\n}\n\n.p-autocomplete-list-container {\n    overflow: auto;\n}\n\n.p-autocomplete-list {\n    margin: 0;\n    list-style-type: none;\n    display: flex;\n    flex-direction: column;\n    gap: ").concat(dt("autocomplete.list.gap"), ";\n    padding: ").concat(dt("autocomplete.list.padding"), ";\n}\n\n.p-autocomplete-option {\n    cursor: pointer;\n    white-space: nowrap;\n    position: relative;\n    overflow: hidden;\n    display: flex;\n    align-items: center;\n    padding: ").concat(dt("autocomplete.option.padding"), ";\n    border: 0 none;\n    color: ").concat(dt("autocomplete.option.color"), ";\n    background: transparent;\n    transition: background ").concat(dt("autocomplete.transition.duration"), ", color ").concat(dt("autocomplete.transition.duration"), ", border-color ").concat(dt("autocomplete.transition.duration"), ";\n    border-radius: ").concat(dt("autocomplete.option.border.radius"), ";\n}\n\n.p-autocomplete-option:not(.p-autocomplete-option-selected):not(.p-disabled).p-focus {\n    background: ").concat(dt("autocomplete.option.focus.background"), ";\n    color: ").concat(dt("autocomplete.option.focus.color"), ";\n}\n\n.p-autocomplete-option-selected {\n    background: ").concat(dt("autocomplete.option.selected.background"), ";\n    color: ").concat(dt("autocomplete.option.selected.color"), ";\n}\n\n.p-autocomplete-option-selected.p-focus {\n    background: ").concat(dt("autocomplete.option.selected.focus.background"), ";\n    color: ").concat(dt("autocomplete.option.selected.focus.color"), ";\n}\n\n.p-autocomplete-option-group {\n    margin: 0;\n    padding: ").concat(dt("autocomplete.option.group.padding"), ";\n    color: ").concat(dt("autocomplete.option.group.color"), ";\n    background: ").concat(dt("autocomplete.option.group.background"), ";\n    font-weight: ").concat(dt("autocomplete.option.group.font.weight"), ";\n}\n\n.p-autocomplete-input-multiple {\n    margin: 0;\n    list-style-type: none;\n    cursor: text;\n    overflow: hidden;\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n    padding: calc(").concat(dt("autocomplete.padding.y"), " / 2) ").concat(dt("autocomplete.padding.x"), ";\n    gap: calc(").concat(dt("autocomplete.padding.y"), " / 2);\n    color: ").concat(dt("autocomplete.color"), ";\n    background: ").concat(dt("autocomplete.background"), ";\n    border: 1px solid ").concat(dt("autocomplete.border.color"), ";\n    border-radius: ").concat(dt("autocomplete.border.radius"), ";\n    width: 100%;\n    transition: background ").concat(dt("autocomplete.transition.duration"), ", color ").concat(dt("autocomplete.transition.duration"), ", border-color ").concat(dt("autocomplete.transition.duration"), ", outline-color ").concat(dt("autocomplete.transition.duration"), ", box-shadow ").concat(dt("autocomplete.transition.duration"), ";\n    outline-color: transparent;\n    box-shadow: ").concat(dt("autocomplete.shadow"), ";\n}\n\n.p-autocomplete:not(.p-disabled):hover .p-autocomplete-input-multiple {\n    border-color: ").concat(dt("autocomplete.hover.border.color"), ";\n}\n\n.p-autocomplete:not(.p-disabled).p-focus .p-autocomplete-input-multiple {\n    border-color: ").concat(dt("autocomplete.focus.border.color"), ";\n    box-shadow: ").concat(dt("autocomplete.focus.ring.shadow"), ";\n    outline: ").concat(dt("autocomplete.focus.ring.width"), " ").concat(dt("autocomplete.focus.ring.style"), " ").concat(dt("autocomplete.focus.ring.color"), ";\n    outline-offset: ").concat(dt("autocomplete.focus.ring.offset"), ";\n}\n\n.p-autocomplete.p-invalid .p-autocomplete-input-multiple {\n    border-color: ").concat(dt("autocomplete.invalid.border.color"), ";\n}\n\n.p-variant-filled.p-autocomplete-input-multiple {\n    background: ").concat(dt("autocomplete.filled.background"), ";\n}\n\n.p-autocomplete:not(.p-disabled):hover .p-variant-filled.p-autocomplete-input-multiple {\n    background: ").concat(dt("autocomplete.filled.hover.background"), ";\n}\n\n.p-autocomplete:not(.p-disabled).p-focus .p-variant-filled.p-autocomplete-input-multiple  {\n    background: ").concat(dt("autocomplete.filled.focus.background"), ";\n}\n\n.p-autocomplete.p-disabled .p-autocomplete-input-multiple {\n    opacity: 1;\n    background: ").concat(dt("autocomplete.disabled.background"), ";\n    color: ").concat(dt("autocomplete.disabled.color"), ";\n}\n\n.p-autocomplete-chip.p-chip {\n    padding-block-start: calc(").concat(dt("autocomplete.padding.y"), " / 2);\n    padding-block-end: calc(").concat(dt("autocomplete.padding.y"), " / 2);\n    border-radius: ").concat(dt("autocomplete.chip.border.radius"), ";\n}\n\n.p-autocomplete-input-multiple:has(.p-autocomplete-chip) {\n    padding-inline-start: calc(").concat(dt("autocomplete.padding.y"), " / 2);\n    padding-inline-end: calc(").concat(dt("autocomplete.padding.y"), " / 2);\n}\n\n.p-autocomplete-chip-item.p-focus .p-autocomplete-chip {\n    background: ").concat(dt("autocomplete.chip.focus.background"), ";\n    color: ").concat(dt("autocomplete.chip.focus.color"), ";\n}\n\n.p-autocomplete-input-chip {\n    flex: 1 1 auto;\n    display: inline-flex;\n    padding-block-start: calc(").concat(dt("autocomplete.padding.y"), " / 2);\n    padding-block-end: calc(").concat(dt("autocomplete.padding.y"), " / 2);\n}\n\n.p-autocomplete-input-chip input {\n    border: 0 none;\n    outline: 0 none;\n    background: transparent;\n    margin: 0;\n    padding: 0;\n    box-shadow: none;\n    border-radius: 0;\n    width: 100%;\n    font-family: inherit;\n    font-feature-settings: inherit;\n    font-size: 1rem;\n    color: inherit;\n}\n\n.p-autocomplete-input-chip input::placeholder {\n    color: ").concat(dt("autocomplete.placeholder.color"), ";\n}\n\n.p-autocomplete.p-invalid .p-autocomplete-input-chip input::placeholder {\n    color: ").concat(dt("autocomplete.invalid.placeholder.color"), ";\n}\n\n.p-autocomplete-empty-message {\n    padding: ").concat(dt("autocomplete.empty.message.padding"), ";\n}\n\n.p-autocomplete-fluid {\n    display: flex;\n}\n\n.p-autocomplete-fluid:has(.p-autocomplete-dropdown) .p-autocomplete-input {\n    width: 1%;\n}\n\n.p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown {\n    width: ").concat(dt("autocomplete.dropdown.sm.width"), ";\n}\n\n.p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown .p-icon {\n    font-size: ").concat(dt("form.field.sm.font.size"), ";\n    width: ").concat(dt("form.field.sm.font.size"), ";\n    height: ").concat(dt("form.field.sm.font.size"), ";\n}\n\n.p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown {\n    width: ").concat(dt("autocomplete.dropdown.lg.width"), ";\n}\n\n.p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown .p-icon {\n    font-size: ").concat(dt("form.field.lg.font.size"), ";\n    width: ").concat(dt("form.field.lg.font.size"), ";\n    height: ").concat(dt("form.field.lg.font.size"), ";\n}\n");
};
var inlineStyles = {
  root: {
    position: "relative"
  }
};
var classes = {
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
  theme: theme4,
  classes,
  inlineStyles
});
var script$1 = {
  name: "BaseAutoComplete",
  "extends": script$9,
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
function _typeof$1(o) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$1(o);
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
var script = {
  name: "AutoComplete",
  "extends": script$1,
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
    listRef: function listRef2(el, contentRef) {
      this.list = el;
      contentRef && contentRef(el);
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
        if (_typeof$1(this.d_value) === "object") {
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
    VirtualScroller: script$2$4,
    Portal: script$2$3,
    ChevronDownIcon: script$8,
    SpinnerIcon: script$3$1,
    Chip: script$2
  },
  directives: {
    ripple: Ripple
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
var _hoisted_1 = ["aria-activedescendant"];
var _hoisted_2 = ["id", "aria-label", "aria-setsize", "aria-posinset"];
var _hoisted_3 = ["id", "placeholder", "tabindex", "disabled", "aria-label", "aria-labelledby", "aria-expanded", "aria-controls", "aria-activedescendant", "aria-invalid"];
var _hoisted_4 = ["disabled", "aria-expanded", "aria-controls"];
var _hoisted_5 = ["id"];
var _hoisted_6 = ["id", "aria-label"];
var _hoisted_7 = ["id"];
var _hoisted_8 = ["id", "aria-label", "aria-selected", "aria-disabled", "aria-setsize", "aria-posinset", "onClick", "onMousemove", "data-p-selected", "data-p-focus", "data-p-disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
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
    })], 16, _hoisted_2);
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
  }, _ctx.ptm("input")), null, 16, _hoisted_3)], 16)], 16, _hoisted_1)) : createCommentVNode("", true), $data.searching || _ctx.loading ? renderSlot(_ctx.$slots, _ctx.$slots.loader ? "loader" : "loadingicon", {
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
            style: _objectSpread(_objectSpread({}, _ctx.panelStyle), _ctx.overlayStyle),
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
              var styleClass = _ref.styleClass, contentRef = _ref.contentRef, items = _ref.items, getItemOptions = _ref.getItemOptions, contentStyle = _ref.contentStyle, itemSize = _ref.itemSize;
              return [createElementVNode("ul", mergeProps({
                ref: function ref2(el) {
                  return $options.listRef(el, contentRef);
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
script.render = render;
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
    const productStore = useProductStore();
    const userStore = useUserStore();
    const searchTerm = ref("");
    const selectedCategory = ref([]);
    ref(false);
    const categories = ref([]);
    const cartCount = computed(() => productStore.cartCount);
    const cartTotal = computed(() => productStore.cartTotal);
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
      console.log("ree", event);
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
          console.log("response: ", response.data.results);
          filteredItems.value = response.data.results.flatMap(
            (product) => product.models.map((model) => ({
              id: model.id,
              name: `${product.name} - (${model.name})`,
              images: model.images.length > 0 ? model.images.map((img) => img.autoCropUrl) : [defaultImage]
            }))
          );
        } else {
          response = await $axios.get("/product/product-models", {
            params: { searchTerm: query }
          });
          const products = (_a2 = (_b = response.data) == null ? void 0 : _b.results) != null ? _a2 : [];
          filteredItems.value = products.map((product) => {
            var _a3;
            var _a22, _b2, _c;
            return {
              id: product.id,
              name: product.product.name,
              price: product.price,
              category: (_a3 = (_c = (_b2 = (_a22 = product.product) == null ? void 0 : _a22.subCategory) == null ? void 0 : _b2.category) == null ? void 0 : _c.name) != null ? _a3 : "Unknown",
              images: product.images.length > 0 ? product.images.map((image) => image.autoCropUrl) : [defaultImage]
            };
          });
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    const goToWishList = () => {
      router.push({
        path: `/wishlist`
      });
    };
    const goToCart = () => {
      router.push({
        path: `/cart`
      });
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
            badge: computed(() => cartTotal.value > 0 ? cartTotal.value : null)
          }
        ]
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_AutoComplete = script;
      const _component_Button = script$5;
      const _component_Menu = script$3;
      const _component_Badge = script$2$2;
      const _component_Select = script$6;
      const _component_OverlayBadge = script$4;
      const _directive_ripple = Ripple;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "bg-white" }, _attrs))}><div class="container mx-auto px-2 py-4"><div class="md:hidden flex items-center justify-between w-full">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/dashboard" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Hikvision Logo" class="h-16 object-contain"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "Hikvision Logo",
                class: "h-16 object-contain"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
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
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Hikvision Logo" class="h-20 object-contain"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
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
      _push(`</nav><div class="ml-4 hidden sm:flex flex-col font-bold"><span class="text-xs text-gray-400">My Cart</span><span>Ksh ${ssrInterpolate(formattedPrice(cartTotal.value))}</span></div></div></div><hr></header>`);
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
//# sourceMappingURL=Navbar-CEXyuDKW.mjs.map
