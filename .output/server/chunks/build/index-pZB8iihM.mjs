import { s as script$e } from './index-Cf-aLWVL.mjs';
import { isTouchDevice, addStyle, relativePosition, getOuterWidth, absolutePosition, find, findSingle } from '@primeuix/utils/dom';
import { s as script$2$3, U as UniqueComponentId, C as ConnectedOverlayScrollHandler, O as OverlayEventBus } from './index-BZ-8HqfV.mjs';
import { s as script$1$b } from './index-XLr1qd4A.mjs';
import { B as BaseStyle, _ as _export_sfc, u as useUserStore, a as useNuxtApp, b as useProductStore } from './server.mjs';
import { useSSRContext, resolveComponent, mergeProps, openBlock, createElementBlock, Fragment, renderList, renderSlot, createVNode, normalizeClass, withCtx, createBlock, toDisplayString, createCommentVNode, createTextVNode, createElementVNode, resolveDynamicComponent, Transition, withDirectives, vShow } from 'vue';
import { s as script$2$4, a as script$f } from './index-Dq5VkPko.mjs';
import { ZIndex } from '@primeuix/utils/zindex';
import { s as script$i } from './index-BBqC3hNY.mjs';
import { s as script$j } from './index-zZrFrjQS.mjs';
import { s as script$k } from './index-CBz_SNTb.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_0 } from './logoo-Bk06oiQl.mjs';
import { s as script$h } from './index-BFNtOUMz.mjs';
import { s as script$g } from './index-CHf7NZjU.mjs';
import { findIndexInList } from '@primeuix/utils/object';
import './index-DSnb32Yv.mjs';
import './index-DEuunsqE.mjs';
import './index-Dvqyfh34.mjs';
import '@primeuix/styled';
import '@primeuix/utils/uuid';
import '@primeuix/utils/eventbus';
import '@primeuix/utils';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import '@primevue/core/base/style';
import 'node:url';
import 'pinia';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'deep-pick-omit';
import 'axios';

var theme$6 = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-inputotp {\n    display: flex;\n    align-items: center;\n    gap: ".concat(dt("inputotp.gap"), ";\n}\n\n.p-inputotp-input {\n    text-align: center;\n    width: ").concat(dt("inputotp.input.width"), ";\n}\n\n.p-inputotp-input.p-inputtext-sm {\n    text-align: center;\n    width: ").concat(dt("inputotp.input.sm.width"), ";\n}\n\n.p-inputotp-input.p-inputtext-lg {\n    text-align: center;\n    width: ").concat(dt("inputotp.input.lg.width"), ";\n}\n");
};
var classes$a = {
  root: "p-inputotp p-component",
  pcInputText: "p-inputotp-input"
};
var InputOtpStyle = BaseStyle.extend({
  name: "inputotp",
  theme: theme$6,
  classes: classes$a
});
var script$1$a = {
  name: "BaseInputOtp",
  "extends": script$1$b,
  props: {
    readonly: {
      type: Boolean,
      "default": false
    },
    tabindex: {
      type: Number,
      "default": null
    },
    length: {
      type: Number,
      "default": 4
    },
    mask: {
      type: Boolean,
      "default": false
    },
    integerOnly: {
      type: Boolean,
      "default": false
    }
  },
  style: InputOtpStyle,
  provide: function provide() {
    return {
      $pcInputOtp: this,
      $parentInstance: this
    };
  }
};
var script$d = {
  name: "InputOtp",
  "extends": script$1$a,
  inheritAttrs: false,
  emits: ["change", "focus", "blur"],
  data: function data() {
    return {
      tokens: []
    };
  },
  watch: {
    modelValue: {
      immediate: true,
      handler: function handler(newValue) {
        this.tokens = newValue ? newValue.split("") : new Array(this.length);
      }
    }
  },
  methods: {
    getTemplateAttrs: function getTemplateAttrs(index2) {
      return {
        value: this.tokens[index2]
      };
    },
    getTemplateEvents: function getTemplateEvents(index2) {
      var _this = this;
      return {
        input: function input(event) {
          return _this.onInput(event, index2);
        },
        keydown: function keydown(event) {
          return _this.onKeyDown(event);
        },
        focus: function focus(event) {
          return _this.onFocus(event);
        },
        blur: function blur(event) {
          return _this.onBlur(event);
        },
        paste: function paste(event) {
          return _this.onPaste(event);
        }
      };
    },
    onInput: function onInput(event, index2) {
      this.tokens[index2] = event.target.value;
      this.updateModel(event);
      if (event.inputType === "deleteContentBackward") {
        this.moveToPrev(event);
      } else if (event.inputType === "insertText" || event.inputType === "deleteContentForward" || isTouchDevice() && event instanceof CustomEvent) {
        this.moveToNext(event);
      }
    },
    updateModel: function updateModel(event) {
      var newValue = this.tokens.join("");
      this.writeValue(newValue, event);
      this.$emit("change", {
        originalEvent: event,
        value: newValue
      });
    },
    moveToPrev: function moveToPrev(event) {
      var prevInput = this.findPrevInput(event.target);
      if (prevInput) {
        prevInput.focus();
        prevInput.select();
      }
    },
    moveToNext: function moveToNext(event) {
      var nextInput = this.findNextInput(event.target);
      if (nextInput) {
        nextInput.focus();
        nextInput.select();
      }
    },
    findNextInput: function findNextInput(element) {
      var nextElement = element.nextElementSibling;
      if (!nextElement) return;
      return nextElement.nodeName === "INPUT" ? nextElement : this.findNextInput(nextElement);
    },
    findPrevInput: function findPrevInput(element) {
      var prevElement = element.previousElementSibling;
      if (!prevElement) return;
      return prevElement.nodeName === "INPUT" ? prevElement : this.findPrevInput(prevElement);
    },
    onFocus: function onFocus(event) {
      event.target.select();
      this.$emit("focus", event);
    },
    onBlur: function onBlur(event) {
      this.$emit("blur", event);
    },
    onClick: function onClick(event) {
      setTimeout(function() {
        return event.target.select();
      }, 1);
    },
    onKeyDown: function onKeyDown(event) {
      if (event.ctrlKey || event.metaKey) {
        return;
      }
      switch (event.code) {
        case "ArrowLeft":
          this.moveToPrev(event);
          event.preventDefault();
          break;
        case "ArrowUp":
        case "ArrowDown":
          event.preventDefault();
          break;
        case "Backspace":
          if (event.target.value.length === 0) {
            this.moveToPrev(event);
            event.preventDefault();
          }
          break;
        case "ArrowRight":
          this.moveToNext(event);
          event.preventDefault();
          break;
        case "Enter":
        case "NumpadEnter":
        case "Tab":
          break;
        default:
          if (this.integerOnly && !(event.code !== "Space" && Number(event.key) >= 0 && Number(event.key) <= 9) || this.tokens.join("").length >= this.length && event.code !== "Delete") {
            event.preventDefault();
          }
          break;
      }
    },
    onPaste: function onPaste(event) {
      var paste = event.clipboardData.getData("text");
      if (paste.length) {
        var pastedCode = paste.substring(0, this.length);
        if (!this.integerOnly || !isNaN(pastedCode)) {
          this.tokens = pastedCode.split("");
          this.updateModel(event);
        }
      }
      event.preventDefault();
    }
  },
  computed: {
    inputMode: function inputMode() {
      return this.integerOnly ? "numeric" : "text";
    },
    inputType: function inputType() {
      return this.mask ? "password" : "text";
    }
  },
  components: {
    OtpInputText: script$2$3
  }
};
function render$c(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_OtpInputText = resolveComponent("OtpInputText");
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.length, function(i) {
    return renderSlot(_ctx.$slots, "default", {
      key: i,
      events: $options.getTemplateEvents(i - 1),
      attrs: $options.getTemplateAttrs(i - 1),
      index: i
    }, function() {
      return [createVNode(_component_OtpInputText, {
        value: $data.tokens[i - 1],
        type: $options.inputType,
        "class": normalizeClass(_ctx.cx("pcInputText")),
        name: _ctx.$formName,
        inputmode: $options.inputMode,
        variant: _ctx.variant,
        readonly: _ctx.readonly,
        disabled: _ctx.disabled,
        size: _ctx.size,
        invalid: _ctx.invalid,
        tabindex: _ctx.tabindex,
        unstyled: _ctx.unstyled,
        onInput: function onInput4($event) {
          return $options.onInput($event, i - 1);
        },
        onFocus: _cache[0] || (_cache[0] = function($event) {
          return $options.onFocus($event);
        }),
        onBlur: _cache[1] || (_cache[1] = function($event) {
          return $options.onBlur($event);
        }),
        onPaste: _cache[2] || (_cache[2] = function($event) {
          return $options.onPaste($event);
        }),
        onKeydown: _cache[3] || (_cache[3] = function($event) {
          return $options.onKeyDown($event);
        }),
        onClick: _cache[4] || (_cache[4] = function($event) {
          return $options.onClick($event);
        }),
        pt: _ctx.ptm("pcInputText")
      }, null, 8, ["value", "type", "class", "name", "inputmode", "variant", "readonly", "disabled", "size", "invalid", "tabindex", "unstyled", "onInput", "pt"])];
    });
  }), 128))], 16);
}
script$d.render = render$c;
var script$c = {
  name: "EyeIcon",
  "extends": script$i
};
function render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _cache[0] || (_cache[0] = [createElementVNode("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
script$c.render = render$b;
var script$b = {
  name: "EyeSlashIcon",
  "extends": script$i
};
function render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _cache[0] || (_cache[0] = [createElementVNode("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M13.9414 6.74792C13.9437 6.75295 13.9455 6.757 13.9469 6.76003C13.982 6.8394 14.0001 6.9252 14.0001 7.01195C14.0001 7.0987 13.982 7.1845 13.9469 7.26386C13.6004 8.00059 13.1711 8.69549 12.6674 9.33515C12.6115 9.4071 12.54 9.46538 12.4582 9.50556C12.3765 9.54574 12.2866 9.56678 12.1955 9.56707C12.0834 9.56671 11.9737 9.53496 11.8788 9.47541C11.7838 9.41586 11.7074 9.3309 11.6583 9.23015C11.6092 9.12941 11.5893 9.01691 11.6008 8.90543C11.6124 8.79394 11.6549 8.68793 11.7237 8.5994C12.1065 8.09726 12.4437 7.56199 12.7313 6.99995C12.2595 6.08027 10.3402 2.8014 6.99732 2.8014C6.63723 2.80218 6.27816 2.83969 5.92569 2.91336C5.77666 2.93304 5.62568 2.89606 5.50263 2.80972C5.37958 2.72337 5.29344 2.59398 5.26125 2.44714C5.22907 2.30031 5.2532 2.14674 5.32885 2.01685C5.40451 1.88696 5.52618 1.79021 5.66978 1.74576C6.10574 1.64961 6.55089 1.60134 6.99732 1.60181C11.5916 1.60181 13.7864 6.40856 13.9414 6.74792ZM2.20333 1.61685C2.35871 1.61411 2.5091 1.67179 2.6228 1.77774L12.2195 11.3744C12.3318 11.4869 12.3949 11.6393 12.3949 11.7983C12.3949 11.9572 12.3318 12.1097 12.2195 12.2221C12.107 12.3345 11.9546 12.3976 11.7956 12.3976C11.6367 12.3976 11.4842 12.3345 11.3718 12.2221L10.5081 11.3584C9.46549 12.0426 8.24432 12.4042 6.99729 12.3981C2.403 12.3981 0.208197 7.59135 0.0532336 7.25198C0.0509364 7.24694 0.0490875 7.2429 0.0476856 7.23986C0.0162332 7.16518 3.05176e-05 7.08497 3.05176e-05 7.00394C3.05176e-05 6.92291 0.0162332 6.8427 0.0476856 6.76802C0.631261 5.47831 1.46902 4.31959 2.51084 3.36119L1.77509 2.62545C1.66914 2.51175 1.61146 2.36136 1.61421 2.20597C1.61695 2.05059 1.6799 1.90233 1.78979 1.79244C1.89968 1.68254 2.04794 1.6196 2.20333 1.61685ZM7.45314 8.35147L5.68574 6.57609V6.5361C5.5872 6.78938 5.56498 7.06597 5.62183 7.33173C5.67868 7.59749 5.8121 7.84078 6.00563 8.03158C6.19567 8.21043 6.43052 8.33458 6.68533 8.39089C6.94014 8.44721 7.20543 8.43359 7.45314 8.35147ZM1.26327 6.99994C1.7351 7.91163 3.64645 11.1985 6.99729 11.1985C7.9267 11.2048 8.8408 10.9618 9.64438 10.4947L8.35682 9.20718C7.86027 9.51441 7.27449 9.64491 6.69448 9.57752C6.11446 9.51014 5.57421 9.24881 5.16131 8.83592C4.74842 8.42303 4.4871 7.88277 4.41971 7.30276C4.35232 6.72274 4.48282 6.13697 4.79005 5.64041L3.35855 4.2089C2.4954 5.00336 1.78523 5.94935 1.26327 6.99994Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
script$b.render = render$a;
var theme$5 = function theme2(_ref) {
  var dt = _ref.dt;
  return "\n.p-password {\n    display: inline-flex;\n    position: relative;\n}\n\n.p-password .p-password-overlay {\n    min-width: 100%;\n}\n\n.p-password-meter {\n    height: ".concat(dt("password.meter.height"), ";\n    background: ").concat(dt("password.meter.background"), ";\n    border-radius: ").concat(dt("password.meter.border.radius"), ";\n}\n\n.p-password-meter-label {\n    height: 100%;\n    width: 0;\n    transition: width 1s ease-in-out;\n    border-radius: ").concat(dt("password.meter.border.radius"), ";\n}\n\n.p-password-meter-weak {\n    background: ").concat(dt("password.strength.weak.background"), ";\n}\n\n.p-password-meter-medium {\n    background: ").concat(dt("password.strength.medium.background"), ";\n}\n\n.p-password-meter-strong {\n    background: ").concat(dt("password.strength.strong.background"), ";\n}\n\n.p-password-fluid {\n    display: flex;\n}\n\n.p-password-fluid .p-password-input {\n    width: 100%;\n}\n\n.p-password-input::-ms-reveal,\n.p-password-input::-ms-clear {\n    display: none;\n}\n\n.p-password-overlay {\n    padding: ").concat(dt("password.overlay.padding"), ";\n    background: ").concat(dt("password.overlay.background"), ";\n    color: ").concat(dt("password.overlay.color"), ";\n    border: 1px solid ").concat(dt("password.overlay.border.color"), ";\n    box-shadow: ").concat(dt("password.overlay.shadow"), ";\n    border-radius: ").concat(dt("password.overlay.border.radius"), ";\n}\n\n.p-password-content {\n    display: flex;\n    flex-direction: column;\n    gap: ").concat(dt("password.content.gap"), ";\n}\n\n.p-password-toggle-mask-icon {\n    inset-inline-end: ").concat(dt("form.field.padding.x"), ";\n    color: ").concat(dt("password.icon.color"), ";\n    position: absolute;\n    top: 50%;\n    margin-top: calc(-1 * calc(").concat(dt("icon.size"), " / 2));\n    width: ").concat(dt("icon.size"), ";\n    height: ").concat(dt("icon.size"), ";\n}\n\n.p-password:has(.p-password-toggle-mask-icon) .p-password-input {\n    padding-inline-end: calc((").concat(dt("form.field.padding.x"), " * 2) + ").concat(dt("icon.size"), ");\n}\n");
};
var inlineStyles$1 = {
  root: function root(_ref2) {
    var props = _ref2.props;
    return {
      position: props.appendTo === "self" ? "relative" : void 0
    };
  }
};
var classes$9 = {
  root: function root2(_ref3) {
    var instance = _ref3.instance;
    return ["p-password p-component p-inputwrapper", {
      "p-inputwrapper-filled": instance.$filled,
      "p-inputwrapper-focus": instance.focused,
      "p-password-fluid": instance.$fluid
    }];
  },
  pcInputText: "p-password-input",
  maskIcon: "p-password-toggle-mask-icon p-password-mask-icon",
  unmaskIcon: "p-password-toggle-mask-icon p-password-unmask-icon",
  overlay: "p-password-overlay p-component",
  content: "p-password-content",
  meter: "p-password-meter",
  meterLabel: function meterLabel(_ref4) {
    var instance = _ref4.instance;
    return "p-password-meter-label ".concat(instance.meter ? "p-password-meter-" + instance.meter.strength : "");
  },
  meterText: "p-password-meter-text"
};
var PasswordStyle = BaseStyle.extend({
  name: "password",
  theme: theme$5,
  classes: classes$9,
  inlineStyles: inlineStyles$1
});
var script$1$9 = {
  name: "BasePassword",
  "extends": script$1$b,
  props: {
    promptLabel: {
      type: String,
      "default": null
    },
    mediumRegex: {
      type: [String, RegExp],
      "default": "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
      // eslint-disable-line
    },
    strongRegex: {
      type: [String, RegExp],
      "default": "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"
      // eslint-disable-line
    },
    weakLabel: {
      type: String,
      "default": null
    },
    mediumLabel: {
      type: String,
      "default": null
    },
    strongLabel: {
      type: String,
      "default": null
    },
    feedback: {
      type: Boolean,
      "default": true
    },
    appendTo: {
      type: [String, Object],
      "default": "body"
    },
    toggleMask: {
      type: Boolean,
      "default": false
    },
    hideIcon: {
      type: String,
      "default": void 0
    },
    maskIcon: {
      type: String,
      "default": void 0
    },
    showIcon: {
      type: String,
      "default": void 0
    },
    unmaskIcon: {
      type: String,
      "default": void 0
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    placeholder: {
      type: String,
      "default": null
    },
    required: {
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
    inputProps: {
      type: null,
      "default": null
    },
    panelId: {
      type: String,
      "default": null
    },
    panelClass: {
      type: [String, Object],
      "default": null
    },
    panelStyle: {
      type: Object,
      "default": null
    },
    panelProps: {
      type: null,
      "default": null
    },
    overlayId: {
      type: String,
      "default": null
    },
    overlayClass: {
      type: [String, Object],
      "default": null
    },
    overlayStyle: {
      type: Object,
      "default": null
    },
    overlayProps: {
      type: null,
      "default": null
    },
    ariaLabelledby: {
      type: String,
      "default": null
    },
    ariaLabel: {
      type: String,
      "default": null
    },
    autofocus: {
      type: Boolean,
      "default": null
    }
  },
  style: PasswordStyle,
  provide: function provide2() {
    return {
      $pcPassword: this,
      $parentInstance: this
    };
  }
};
var script$a = {
  name: "Password",
  "extends": script$1$9,
  inheritAttrs: false,
  emits: ["change", "focus", "blur", "invalid"],
  inject: {
    $pcFluid: {
      "default": null
    }
  },
  data: function data2() {
    return {
      id: this.$attrs.id,
      overlayVisible: false,
      meter: null,
      infoText: null,
      focused: false,
      unmasked: false
    };
  },
  watch: {
    "$attrs.id": function $attrsId(newValue) {
      this.id = newValue || UniqueComponentId();
    }
  },
  mediumCheckRegExp: null,
  strongCheckRegExp: null,
  resizeListener: null,
  scrollHandler: null,
  overlay: null,
  mounted: function mounted() {
    this.id = this.id || UniqueComponentId();
    this.infoText = this.promptText;
    this.mediumCheckRegExp = new RegExp(this.mediumRegex);
    this.strongCheckRegExp = new RegExp(this.strongRegex);
  },
  beforeUnmount: function beforeUnmount() {
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
    onOverlayEnter: function onOverlayEnter(el) {
      ZIndex.set("overlay", el, this.$primevue.config.zIndex.overlay);
      addStyle(el, {
        position: "absolute",
        top: "0",
        left: "0"
      });
      this.alignOverlay();
      this.bindScrollListener();
      this.bindResizeListener();
    },
    onOverlayLeave: function onOverlayLeave() {
      this.unbindScrollListener();
      this.unbindResizeListener();
      this.overlay = null;
    },
    onOverlayAfterLeave: function onOverlayAfterLeave(el) {
      ZIndex.clear(el);
    },
    alignOverlay: function alignOverlay() {
      if (this.appendTo === "self") {
        relativePosition(this.overlay, this.$refs.input.$el);
      } else {
        this.overlay.style.minWidth = getOuterWidth(this.$refs.input.$el) + "px";
        absolutePosition(this.overlay, this.$refs.input.$el);
      }
    },
    testStrength: function testStrength(str) {
      var level = 0;
      if (this.strongCheckRegExp.test(str)) level = 3;
      else if (this.mediumCheckRegExp.test(str)) level = 2;
      else if (str.length) level = 1;
      return level;
    },
    onInput: function onInput2(event) {
      this.writeValue(event.target.value, event);
      this.$emit("change", event);
    },
    onFocus: function onFocus2(event) {
      this.focused = true;
      if (this.feedback) {
        this.setPasswordMeter(this.d_value);
        this.overlayVisible = true;
      }
      this.$emit("focus", event);
    },
    onBlur: function onBlur2(event) {
      this.focused = false;
      if (this.feedback) {
        this.overlayVisible = false;
      }
      this.$emit("blur", event);
    },
    onKeyUp: function onKeyUp(event) {
      if (this.feedback) {
        var value2 = event.target.value;
        var _this$checkPasswordSt = this.checkPasswordStrength(value2), meter = _this$checkPasswordSt.meter, label = _this$checkPasswordSt.label;
        this.meter = meter;
        this.infoText = label;
        if (event.code === "Escape") {
          this.overlayVisible && (this.overlayVisible = false);
          return;
        }
        if (!this.overlayVisible) {
          this.overlayVisible = true;
        }
      }
    },
    setPasswordMeter: function setPasswordMeter() {
      if (!this.d_value) {
        this.meter = null;
        this.infoText = this.promptText;
        return;
      }
      var _this$checkPasswordSt2 = this.checkPasswordStrength(this.d_value), meter = _this$checkPasswordSt2.meter, label = _this$checkPasswordSt2.label;
      this.meter = meter;
      this.infoText = label;
      if (!this.overlayVisible) {
        this.overlayVisible = true;
      }
    },
    checkPasswordStrength: function checkPasswordStrength(value2) {
      var label = null;
      var meter = null;
      switch (this.testStrength(value2)) {
        case 1:
          label = this.weakText;
          meter = {
            strength: "weak",
            width: "33.33%"
          };
          break;
        case 2:
          label = this.mediumText;
          meter = {
            strength: "medium",
            width: "66.66%"
          };
          break;
        case 3:
          label = this.strongText;
          meter = {
            strength: "strong",
            width: "100%"
          };
          break;
        default:
          label = this.promptText;
          meter = null;
          break;
      }
      return {
        label,
        meter
      };
    },
    onInvalid: function onInvalid(event) {
      this.$emit("invalid", event);
    },
    bindScrollListener: function bindScrollListener() {
      var _this = this;
      if (!this.scrollHandler) {
        this.scrollHandler = new ConnectedOverlayScrollHandler(this.$refs.input.$el, function() {
          if (_this.overlayVisible) {
            _this.overlayVisible = false;
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
      var _this2 = this;
      if (!this.resizeListener) {
        this.resizeListener = function() {
          if (_this2.overlayVisible && !isTouchDevice()) {
            _this2.overlayVisible = false;
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
    overlayRef: function overlayRef(el) {
      this.overlay = el;
    },
    onMaskToggle: function onMaskToggle() {
      this.unmasked = !this.unmasked;
    },
    onOverlayClick: function onOverlayClick(event) {
      OverlayEventBus.emit("overlay-click", {
        originalEvent: event,
        target: this.$el
      });
    }
  },
  computed: {
    inputType: function inputType2() {
      return this.unmasked ? "text" : "password";
    },
    weakText: function weakText() {
      return this.weakLabel || this.$primevue.config.locale.weak;
    },
    mediumText: function mediumText() {
      return this.mediumLabel || this.$primevue.config.locale.medium;
    },
    strongText: function strongText() {
      return this.strongLabel || this.$primevue.config.locale.strong;
    },
    promptText: function promptText() {
      return this.promptLabel || this.$primevue.config.locale.passwordPrompt;
    },
    overlayUniqueId: function overlayUniqueId() {
      return this.id + "_overlay";
    }
  },
  components: {
    InputText: script$2$3,
    Portal: script$j,
    EyeSlashIcon: script$b,
    EyeIcon: script$c
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
var _hoisted_1$3 = ["id"];
function render$9(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_InputText = resolveComponent("InputText");
  var _component_Portal = resolveComponent("Portal");
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root"),
    style: _ctx.sx("root")
  }, _ctx.ptmi("root")), [createVNode(_component_InputText, mergeProps({
    ref: "input",
    id: _ctx.inputId,
    type: $options.inputType,
    "class": [_ctx.cx("pcInputText"), _ctx.inputClass],
    style: _ctx.inputStyle,
    value: _ctx.d_value,
    name: _ctx.$formName,
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-label": _ctx.ariaLabel,
    "aria-controls": _ctx.overlayProps && _ctx.overlayProps.id || _ctx.overlayId || _ctx.panelProps && _ctx.panelProps.id || _ctx.panelId || $options.overlayUniqueId,
    "aria-expanded": $data.overlayVisible,
    "aria-haspopup": true,
    placeholder: _ctx.placeholder,
    required: _ctx.required,
    fluid: _ctx.fluid,
    disabled: _ctx.disabled,
    variant: _ctx.variant,
    invalid: _ctx.invalid,
    size: _ctx.size,
    autofocus: _ctx.autofocus,
    onInput: $options.onInput,
    onFocus: $options.onFocus,
    onBlur: $options.onBlur,
    onKeyup: $options.onKeyUp,
    onInvalid: $options.onInvalid
  }, _ctx.inputProps, {
    pt: _ctx.ptm("pcInputText"),
    unstyled: _ctx.unstyled
  }), null, 16, ["id", "type", "class", "style", "value", "name", "aria-labelledby", "aria-label", "aria-controls", "aria-expanded", "placeholder", "required", "fluid", "disabled", "variant", "invalid", "size", "autofocus", "onInput", "onFocus", "onBlur", "onKeyup", "onInvalid", "pt", "unstyled"]), _ctx.toggleMask && $data.unmasked ? renderSlot(_ctx.$slots, _ctx.$slots.maskicon ? "maskicon" : "hideicon", {
    key: 0,
    toggleCallback: $options.onMaskToggle
  }, function() {
    return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.maskIcon ? "i" : "EyeSlashIcon"), mergeProps({
      "class": [_ctx.cx("maskIcon"), _ctx.maskIcon],
      onClick: $options.onMaskToggle
    }, _ctx.ptm("maskIcon")), null, 16, ["class", "onClick"]))];
  }) : createCommentVNode("", true), _ctx.toggleMask && !$data.unmasked ? renderSlot(_ctx.$slots, _ctx.$slots.unmaskicon ? "unmaskicon" : "showicon", {
    key: 1,
    toggleCallback: $options.onMaskToggle
  }, function() {
    return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.unmaskIcon ? "i" : "EyeIcon"), mergeProps({
      "class": [_ctx.cx("unmaskIcon"), _ctx.unmaskIcon],
      onClick: $options.onMaskToggle
    }, _ctx.ptm("unmaskIcon")), null, 16, ["class", "onClick"]))];
  }) : createCommentVNode("", true), createElementVNode("span", mergeProps({
    "class": "p-hidden-accessible",
    "aria-live": "polite"
  }, _ctx.ptm("hiddenAccesible"), {
    "data-p-hidden-accessible": true
  }), toDisplayString($data.infoText), 17), createVNode(_component_Portal, {
    appendTo: _ctx.appendTo
  }, {
    "default": withCtx(function() {
      return [createVNode(Transition, mergeProps({
        name: "p-connected-overlay",
        onEnter: $options.onOverlayEnter,
        onLeave: $options.onOverlayLeave,
        onAfterLeave: $options.onOverlayAfterLeave
      }, _ctx.ptm("transition")), {
        "default": withCtx(function() {
          return [$data.overlayVisible ? (openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            ref: $options.overlayRef,
            id: _ctx.overlayId || _ctx.panelId || $options.overlayUniqueId,
            "class": [_ctx.cx("overlay"), _ctx.panelClass, _ctx.overlayClass],
            style: [_ctx.overlayStyle, _ctx.panelStyle],
            onClick: _cache[0] || (_cache[0] = function() {
              return $options.onOverlayClick && $options.onOverlayClick.apply($options, arguments);
            })
          }, _objectSpread(_objectSpread(_objectSpread({}, _ctx.panelProps), _ctx.overlayProps), _ctx.ptm("overlay"))), [renderSlot(_ctx.$slots, "header"), renderSlot(_ctx.$slots, "content", {}, function() {
            return [createElementVNode("div", mergeProps({
              "class": _ctx.cx("content")
            }, _ctx.ptm("content")), [createElementVNode("div", mergeProps({
              "class": _ctx.cx("meter")
            }, _ctx.ptm("meter")), [createElementVNode("div", mergeProps({
              "class": _ctx.cx("meterLabel"),
              style: {
                width: $data.meter ? $data.meter.width : ""
              }
            }, _ctx.ptm("meterLabel")), null, 16)], 16), createElementVNode("div", mergeProps({
              "class": _ctx.cx("meterText")
            }, _ctx.ptm("meterText")), toDisplayString($data.infoText), 17)], 16)];
          }), renderSlot(_ctx.$slots, "footer")], 16, _hoisted_1$3)) : createCommentVNode("", true)];
        }),
        _: 3
      }, 16, ["onEnter", "onLeave", "onAfterLeave"])];
    }),
    _: 3
  }, 8, ["appendTo"])], 16);
}
script$a.render = render$9;
var theme$4 = function theme3(_ref) {
  var dt = _ref.dt;
  return "\n.p-floatlabel {\n    display: block;\n    position: relative;\n}\n\n.p-floatlabel label {\n    position: absolute;\n    pointer-events: none;\n    top: 50%;\n    transform: translateY(-50%);\n    transition-property: all;\n    transition-timing-function: ease;\n    line-height: 1;\n    font-weight: ".concat(dt("floatlabel.font.weight"), ";\n    inset-inline-start: ").concat(dt("floatlabel.position.x"), ";\n    color: ").concat(dt("floatlabel.color"), ";\n    transition-duration: ").concat(dt("floatlabel.transition.duration"), ";\n}\n\n.p-floatlabel:has(.p-textarea) label {\n    top: ").concat(dt("floatlabel.position.y"), ";\n    transform: translateY(0);\n}\n\n.p-floatlabel:has(.p-inputicon:first-child) label {\n    inset-inline-start: calc((").concat(dt("form.field.padding.x"), " * 2) + ").concat(dt("icon.size"), ");\n}\n\n.p-floatlabel:has(.p-invalid) label {\n    color: ").concat(dt("floatlabel.invalid.color"), ";\n}\n\n.p-floatlabel:has(input:focus) label,\n.p-floatlabel:has(input.p-filled) label,\n.p-floatlabel:has(input:-webkit-autofill) label,\n.p-floatlabel:has(textarea:focus) label,\n.p-floatlabel:has(textarea.p-filled) label,\n.p-floatlabel:has(.p-inputwrapper-focus) label,\n.p-floatlabel:has(.p-inputwrapper-filled) label {\n    top: ").concat(dt("floatlabel.over.active.top"), ";\n    transform: translateY(0);\n    font-size: ").concat(dt("floatlabel.active.font.size"), ";\n    font-weight: ").concat(dt("floatlabel.label.active.font.weight"), ";\n}\n\n.p-floatlabel:has(input.p-filled) label,\n.p-floatlabel:has(textarea.p-filled) label,\n.p-floatlabel:has(.p-inputwrapper-filled) label {\n    color: ").concat(dt("floatlabel.active.color"), ";\n}\n\n.p-floatlabel:has(input:focus) label,\n.p-floatlabel:has(input:-webkit-autofill) label,\n.p-floatlabel:has(textarea:focus) label,\n.p-floatlabel:has(.p-inputwrapper-focus) label {\n    color: ").concat(dt("floatlabel.focus.color"), ";\n}\n\n.p-floatlabel-in .p-inputtext,\n.p-floatlabel-in .p-textarea,\n.p-floatlabel-in .p-select-label,\n.p-floatlabel-in .p-multiselect-label,\n.p-floatlabel-in .p-autocomplete-input-multiple,\n.p-floatlabel-in .p-cascadeselect-label,\n.p-floatlabel-in .p-treeselect-label {\n    padding-block-start: ").concat(dt("floatlabel.in.input.padding.top"), ";\n    padding-block-end: ").concat(dt("floatlabel.in.input.padding.bottom"), ";\n}\n\n.p-floatlabel-in:has(input:focus) label,\n.p-floatlabel-in:has(input.p-filled) label,\n.p-floatlabel-in:has(input:-webkit-autofill) label,\n.p-floatlabel-in:has(textarea:focus) label,\n.p-floatlabel-in:has(textarea.p-filled) label,\n.p-floatlabel-in:has(.p-inputwrapper-focus) label,\n.p-floatlabel-in:has(.p-inputwrapper-filled) label {\n    top: ").concat(dt("floatlabel.in.active.top"), ";\n}\n\n.p-floatlabel-on:has(input:focus) label,\n.p-floatlabel-on:has(input.p-filled) label,\n.p-floatlabel-on:has(input:-webkit-autofill) label,\n.p-floatlabel-on:has(textarea:focus) label,\n.p-floatlabel-on:has(textarea.p-filled) label,\n.p-floatlabel-on:has(.p-inputwrapper-focus) label,\n.p-floatlabel-on:has(.p-inputwrapper-filled) label {\n    top: 0;\n    transform: translateY(-50%);\n    border-radius: ").concat(dt("floatlabel.on.border.radius"), ";\n    background: ").concat(dt("floatlabel.on.active.background"), ";\n    padding: ").concat(dt("floatlabel.on.active.padding"), ";\n}\n");
};
var classes$8 = {
  root: function root3(_ref2) {
    _ref2.instance;
    var props = _ref2.props;
    return ["p-floatlabel", {
      "p-floatlabel-over": props.variant === "over",
      "p-floatlabel-on": props.variant === "on",
      "p-floatlabel-in": props.variant === "in"
    }];
  }
};
var FloatLabelStyle = BaseStyle.extend({
  name: "floatlabel",
  theme: theme$4,
  classes: classes$8
});
var script$1$8 = {
  name: "BaseFloatLabel",
  "extends": script$k,
  props: {
    variant: {
      type: String,
      "default": "over"
    }
  },
  style: FloatLabelStyle,
  provide: function provide3() {
    return {
      $pcFloatLabel: this,
      $parentInstance: this
    };
  }
};
var script$9 = {
  name: "FloatLabel",
  "extends": script$1$8,
  inheritAttrs: false
};
function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "default")], 16);
}
script$9.render = render$8;
const _sfc_main$3 = {
  components: {
    InputOtp: script$d
  },
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        cpassword: "",
        phone: "",
        role: ""
      },
      otp: "",
      otpSent: false,
      roles: []
    };
  },
  methods: {
    handleRole() {
      if (this.form.role.name == "TECHNICIAN") {
        console.log("role: ", this.form.role);
        this.$emit("show-questionnaire");
      }
    },
    async register() {
      try {
        const userStore = useUserStore();
        const { $axios } = useNuxtApp();
        await userStore.register({
          firstName: this.form.firstName,
          lastName: this.form.lastName,
          email: this.form.email,
          password: this.form.password,
          phoneNumber: this.form.phone || "",
          roleId: this.form.role.id
        });
        this.otpSent = true;
        console.log("OTP sent to email");
      } catch (error) {
        console.error("Error registering:", error);
        this.$toast.add({
          severity: "error",
          summary: error.message,
          group: "br",
          life: 3e3
        });
      }
    },
    async verifyOtp() {
      try {
        const { $axios } = useNuxtApp();
        const userStore = useUserStore();
        const { accessToken, user } = await userStore.verifyOtp({
          email: this.form.email,
          otp: this.otp
        });
        if (accessToken) {
          this.$router.push("/dashboard");
        }
      } catch (error) {
        this.$toast.add({
          severity: "error",
          summary: error.message,
          group: "br",
          life: 3e3
        });
      }
    },
    // async verifyOtp() {
    //   try {
    //     const { $axios } = useNuxtApp();
    //     const userStore = useUserStore();
    //     // Verify OTP with backend
    //     const { accessToken, user } = await userStore.verifyOtp(
    //       { email: this.form.email, otp: this.otp }
    //     );
    //     console.log("User", user);
    //     if (accessToken) {
    //       console.log("Otp success:", user);
    //       this.$router.push("/dashboard"); // Navigate to the dashboard upon success
    //     }
    //   } catch (error) {
    //     console.error("Error verifying OTP:", error);
    //     this.$toast.add({
    //       severity: "error",
    //       summary: error.message,
    //       group: "br",
    //       life: 3000,
    //     });
    //   }
    // },
    async fetchRoles() {
      const { $axios } = useNuxtApp();
      try {
        const response = await $axios.get("/user/roles");
        this.roles = response.data;
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    }
  },
  mounted() {
    this.fetchRoles();
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FloatLabel = script$9;
  const _component_InputText = script$2$3;
  const _component_Password = script$a;
  const _component_Select = script$2$4;
  const _component_InputOtp = script$d;
  const _component_Toast = script$e;
  _push(`<!--[--><div class="flex w-full h-screen flex-col items-center justify-center p-6" data-v-a6ecb615><img${ssrRenderAttr("src", _imports_0)} alt="Login" class="h-28 w-28" data-v-a6ecb615><div class="" data-v-a6ecb615><p class="text-gray-500 text-2xl mb-10 text-center" data-v-a6ecb615> Enter your details below to sign up </p>`);
  if (!$data.otpSent) {
    _push(`<form class="w-full flex flex-col items-center" data-v-a6ecb615><div class="flex space-x-4 mb-4" data-v-a6ecb615>`);
    _push(ssrRenderComponent(_component_FloatLabel, {
      variant: "on",
      class: "w-full"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_InputText, {
            type: "text",
            id: "firstName",
            modelValue: $data.form.firstName,
            "onUpdate:modelValue": ($event) => $data.form.firstName = $event,
            class: "w-full"
          }, null, _parent2, _scopeId));
          _push2(`<label for="firstName" data-v-a6ecb615${_scopeId}>First Name</label>`);
        } else {
          return [
            createVNode(_component_InputText, {
              type: "text",
              id: "firstName",
              modelValue: $data.form.firstName,
              "onUpdate:modelValue": ($event) => $data.form.firstName = $event,
              class: "w-full"
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            createVNode("label", { for: "firstName" }, "First Name")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_FloatLabel, {
      variant: "on",
      class: "w-full"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_InputText, {
            type: "text",
            id: "lastName",
            modelValue: $data.form.lastName,
            "onUpdate:modelValue": ($event) => $data.form.lastName = $event,
            class: "w-full"
          }, null, _parent2, _scopeId));
          _push2(`<label for="lastName" data-v-a6ecb615${_scopeId}>Last Name</label>`);
        } else {
          return [
            createVNode(_component_InputText, {
              type: "text",
              id: "lastName",
              modelValue: $data.form.lastName,
              "onUpdate:modelValue": ($event) => $data.form.lastName = $event,
              class: "w-full"
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            createVNode("label", { for: "lastName" }, "Last Name")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div><div class="flex flex-col space-y-4 mb-4 w-full" data-v-a6ecb615>`);
    _push(ssrRenderComponent(_component_FloatLabel, {
      variant: "on",
      class: "w-full"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_InputText, {
            type: "email",
            id: "email",
            modelValue: $data.form.email,
            "onUpdate:modelValue": ($event) => $data.form.email = $event,
            class: "w-full"
          }, null, _parent2, _scopeId));
          _push2(`<label for="email" data-v-a6ecb615${_scopeId}>Email</label>`);
        } else {
          return [
            createVNode(_component_InputText, {
              type: "email",
              id: "email",
              modelValue: $data.form.email,
              "onUpdate:modelValue": ($event) => $data.form.email = $event,
              class: "w-full"
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            createVNode("label", { for: "email" }, "Email")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_FloatLabel, {
      variant: "on",
      class: "w-full"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_InputText, {
            type: "number",
            id: "phoneNumber",
            modelValue: $data.form.phoneNumber,
            "onUpdate:modelValue": ($event) => $data.form.phoneNumber = $event,
            class: "w-full"
          }, null, _parent2, _scopeId));
          _push2(`<label for="phoneNumber" data-v-a6ecb615${_scopeId}>Mobile Phone</label>`);
        } else {
          return [
            createVNode(_component_InputText, {
              type: "number",
              id: "phoneNumber",
              modelValue: $data.form.phoneNumber,
              "onUpdate:modelValue": ($event) => $data.form.phoneNumber = $event,
              class: "w-full"
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            createVNode("label", { for: "phoneNumber" }, "Mobile Phone")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`<div class="flex" data-v-a6ecb615>`);
    _push(ssrRenderComponent(_component_FloatLabel, {
      variant: "on",
      class: "w-full custom-password"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_Password, {
            id: "password",
            modelValue: $data.form.password,
            "onUpdate:modelValue": ($event) => $data.form.password = $event,
            toggleMask: "",
            class: ""
          }, null, _parent2, _scopeId));
          _push2(`<label for="password" data-v-a6ecb615${_scopeId}>Password</label>`);
        } else {
          return [
            createVNode(_component_Password, {
              id: "password",
              modelValue: $data.form.password,
              "onUpdate:modelValue": ($event) => $data.form.password = $event,
              toggleMask: "",
              class: ""
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            createVNode("label", { for: "password" }, "Password")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
    _push(ssrRenderComponent(_component_Select, {
      modelValue: $data.form.role,
      "onUpdate:modelValue": ($event) => $data.form.role = $event,
      options: $data.roles,
      optionLabel: "name",
      onChange: $options.handleRole,
      placeholder: "Select a Role",
      class: "w-full custom-dropdown"
    }, null, _parent));
    _push(`</div><button type="submit" class="w-full bg-red-500 text-white py-3 rounded hover:bg-red-600 mt-12" data-v-a6ecb615> Sign Up </button></form>`);
  } else {
    _push(`<div data-v-a6ecb615><h3 class="text-3xl font-medium mb-4" data-v-a6ecb615>Verify OTP</h3><p class="text-gray-500 mb-6" data-v-a6ecb615> Enter the OTP sent to your email address. <span class="font-weight-bold" style="${ssrRenderStyle({ "font-weight": "bold" })}" data-v-a6ecb615>${ssrInterpolate($data.form.email)}</span></p><div class="w-full mb-4" data-v-a6ecb615>`);
    _push(ssrRenderComponent(_component_InputOtp, {
      length: 6,
      mask: "*",
      modelValue: $data.otp,
      "onUpdate:modelValue": ($event) => $data.otp = $event,
      class: "p-inputtex w-full text-center p-3",
      placeholder: "Enter OTP"
    }, null, _parent));
    _push(`</div><button class="w-full bg-red-500 text-white py-3 rounded hover:bg-red-600" data-v-a6ecb615> Verify OTP </button></div>`);
  }
  _push(`<p class="text-sm mt-4 text-center" data-v-a6ecb615> Already have an account? <span class="text-blue-500 cursor-pointer" data-v-a6ecb615> Log in </span></p></div></div>`);
  _push(ssrRenderComponent(_component_Toast, {
    position: "bottom-right",
    group: "br"
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SignupForm.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-a6ecb615"]]);
const _sfc_main$2 = {
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      resetEmail: "",
      isVerified: false,
      forgotPassword: false,
      userStore: useUserStore(),
      productStore: useProductStore()
    };
  },
  methods: {
    async sendResetEmail() {
      var _a, _b;
      try {
        const { $axios } = useNuxtApp();
        await $axios.post("/auth/reset-password", { email: this.resetEmail });
        this.$toast.add({
          severity: "success",
          summary: "Reset link sent!",
          detail: "Check your email for the password reset link.",
          group: "br",
          life: 3e3
        });
        this.forgotPassword = false;
      } catch (error) {
        this.$toast.add({
          severity: "error",
          summary: "Error",
          detail: ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || "Failed to send reset link.",
          group: "br",
          life: 3e3
        });
      }
    },
    async login() {
      try {
        const { accessToken } = await this.userStore.login(
          this.form.email,
          this.form.password
        );
        if (accessToken) {
          this.$router.push("/dashboard");
        }
      } catch (error) {
        if (error.message.includes("not yet verified")) {
          this.isVerified = true;
        } else {
          this.isVerified = false;
        }
        this.$toast.add({
          severity: "error",
          summary: error.message,
          group: "br",
          life: 3e3
        });
      }
    },
    async verifyOtp() {
      try {
        const { accessToken } = await this.userStore.verifyOtp({
          email: this.form.email,
          otp: this.otp
        });
        if (accessToken) {
          this.$router.push("/dashboard");
        }
      } catch (error) {
        this.$toast.add({
          severity: "error",
          summary: error.message,
          group: "br",
          life: 3e3
        });
      }
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FloatLabel = script$9;
  const _component_InputText = script$2$3;
  const _component_Password = script$a;
  const _component_InputOtp = script$d;
  const _component_Toast = script$e;
  _push(`<!--[--><div class="flex w-full h-screen flex-col items-center justify-center" data-v-2cf42cba><img${ssrRenderAttr("src", _imports_0)} alt="Login" class="h-28 w-28" data-v-2cf42cba>`);
  if (!$data.isVerified && !$data.forgotPassword) {
    _push(`<div data-v-2cf42cba><p class="text-gray-500 text-2xl mb-10 text-center" data-v-2cf42cba> Welcome to Secure Group </p><form class="w-full flex flex-col items-center" data-v-2cf42cba><div class="flex flex-col gap-4 w-full" data-v-2cf42cba>`);
    _push(ssrRenderComponent(_component_FloatLabel, { variant: "on" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_InputText, {
            type: "email",
            id: "email",
            modelValue: $data.form.email,
            "onUpdate:modelValue": ($event) => $data.form.email = $event,
            class: "w-full"
          }, null, _parent2, _scopeId));
          _push2(`<label for="email" data-v-2cf42cba${_scopeId}>Email</label>`);
        } else {
          return [
            createVNode(_component_InputText, {
              type: "email",
              id: "email",
              modelValue: $data.form.email,
              "onUpdate:modelValue": ($event) => $data.form.email = $event,
              class: "w-full"
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            createVNode("label", { for: "email" }, "Email")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_FloatLabel, { variant: "on" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_Password, {
            modelValue: $data.form.password,
            "onUpdate:modelValue": ($event) => $data.form.password = $event,
            toggleMask: ""
          }, null, _parent2, _scopeId));
          _push2(`<label for="password" data-v-2cf42cba${_scopeId}>Password</label>`);
        } else {
          return [
            createVNode(_component_Password, {
              modelValue: $data.form.password,
              "onUpdate:modelValue": ($event) => $data.form.password = $event,
              toggleMask: ""
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            createVNode("label", { for: "password" }, "Password")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div><div class="mt-4 flex justify-end w-full" data-v-2cf42cba><p class="text-blue-500 text-sm cursor-pointer" data-v-2cf42cba> Forgot password? </p></div><button type="submit" class="w-full bg-red-500 text-white py-3 rounded hover:bg-red-600 mt-4" data-v-2cf42cba> Log In </button></form><p class="text-sm mt-4 text-center" data-v-2cf42cba> Don&#39;t have an account? <span class="text-blue-500 cursor-pointer" data-v-2cf42cba> Sign up </span></p></div>`);
  } else if ($data.forgotPassword) {
    _push(`<div data-v-2cf42cba><h3 class="text-gray-500 flex justify-center text-2xl font-medium mb-4" data-v-2cf42cba>Reset Password</h3><p class="text-gray-500 mb-6 text-center" data-v-2cf42cba> Enter your email address to receive a password reset link. </p>`);
    _push(ssrRenderComponent(_component_FloatLabel, { variant: "on" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_InputText, {
            type: "email",
            id: "resetEmail",
            modelValue: $data.resetEmail,
            "onUpdate:modelValue": ($event) => $data.resetEmail = $event,
            class: "w-full"
          }, null, _parent2, _scopeId));
          _push2(`<label for="resetEmail" data-v-2cf42cba${_scopeId}>Email</label>`);
        } else {
          return [
            createVNode(_component_InputText, {
              type: "email",
              id: "resetEmail",
              modelValue: $data.resetEmail,
              "onUpdate:modelValue": ($event) => $data.resetEmail = $event,
              class: "w-full"
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            createVNode("label", { for: "resetEmail" }, "Email")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`<button class="w-full bg-red-500 text-white py-3 rounded hover:bg-red-600 mt-4" data-v-2cf42cba> Send Reset Link </button><p class="text-sm mt-4 text-center cursor-pointer text-blue-500" data-v-2cf42cba> Back to login </p></div>`);
  } else {
    _push(`<div data-v-2cf42cba><h3 class="text-3xl font-medium mb-4" data-v-2cf42cba>Verify OTP</h3><p class="text-gray-500 mb-6" data-v-2cf42cba> Enter the OTP sent to your email address: <span class="font-bold" data-v-2cf42cba>${ssrInterpolate($data.form.email)}</span></p><div class="w-full mb-4 flex justify-center items-center" data-v-2cf42cba>`);
    _push(ssrRenderComponent(_component_InputOtp, {
      length: 6,
      mask: "*",
      modelValue: _ctx.otp,
      "onUpdate:modelValue": ($event) => _ctx.otp = $event,
      size: "large",
      class: "text-center p-3",
      placeholder: "Enter OTP"
    }, null, _parent));
    _push(`</div><button class="w-full text-white py-3 rounded hover:bg-red-600" data-v-2cf42cba> Verify OTP </button></div>`);
  }
  _push(`</div>`);
  _push(ssrRenderComponent(_component_Toast, {
    position: "bottom-right",
    group: "br"
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LoginForm.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-2cf42cba"]]);
var theme$3 = function theme4(_ref) {
  var dt = _ref.dt;
  return "\n.p-textarea {\n    font-family: inherit;\n    font-feature-settings: inherit;\n    font-size: 1rem;\n    color: ".concat(dt("textarea.color"), ";\n    background: ").concat(dt("textarea.background"), ";\n    padding-block: ").concat(dt("textarea.padding.y"), ";\n    padding-inline: ").concat(dt("textarea.padding.x"), ";\n    border: 1px solid ").concat(dt("textarea.border.color"), ";\n    transition: background ").concat(dt("textarea.transition.duration"), ", color ").concat(dt("textarea.transition.duration"), ", border-color ").concat(dt("textarea.transition.duration"), ", outline-color ").concat(dt("textarea.transition.duration"), ", box-shadow ").concat(dt("textarea.transition.duration"), ";\n    appearance: none;\n    border-radius: ").concat(dt("textarea.border.radius"), ";\n    outline-color: transparent;\n    box-shadow: ").concat(dt("textarea.shadow"), ";\n}\n\n.p-textarea:enabled:hover {\n    border-color: ").concat(dt("textarea.hover.border.color"), ";\n}\n\n.p-textarea:enabled:focus {\n    border-color: ").concat(dt("textarea.focus.border.color"), ";\n    box-shadow: ").concat(dt("textarea.focus.ring.shadow"), ";\n    outline: ").concat(dt("textarea.focus.ring.width"), " ").concat(dt("textarea.focus.ring.style"), " ").concat(dt("textarea.focus.ring.color"), ";\n    outline-offset: ").concat(dt("textarea.focus.ring.offset"), ";\n}\n\n.p-textarea.p-invalid {\n    border-color: ").concat(dt("textarea.invalid.border.color"), ";\n}\n\n.p-textarea.p-variant-filled {\n    background: ").concat(dt("textarea.filled.background"), ";\n}\n\n.p-textarea.p-variant-filled:enabled:focus {\n    background: ").concat(dt("textarea.filled.focus.background"), ";\n}\n\n.p-textarea:disabled {\n    opacity: 1;\n    background: ").concat(dt("textarea.disabled.background"), ";\n    color: ").concat(dt("textarea.disabled.color"), ";\n}\n\n.p-textarea::placeholder {\n    color: ").concat(dt("textarea.placeholder.color"), ";\n}\n\n.p-textarea.p-invalid::placeholder {\n    color: ").concat(dt("textarea.invalid.placeholder.color"), ";\n}\n\n.p-textarea-fluid {\n    width: 100%;\n}\n\n.p-textarea-resizable {\n    overflow: hidden;\n    resize: none;\n}\n\n.p-textarea-sm {\n    font-size: ").concat(dt("textarea.sm.font.size"), ";\n    padding-block: ").concat(dt("textarea.sm.padding.y"), ";\n    padding-inline: ").concat(dt("textarea.sm.padding.x"), ";\n}\n\n.p-textarea-lg {\n    font-size: ").concat(dt("textarea.lg.font.size"), ";\n    padding-block: ").concat(dt("textarea.lg.padding.y"), ";\n    padding-inline: ").concat(dt("textarea.lg.padding.x"), ";\n}\n");
};
var classes$7 = {
  root: function root4(_ref2) {
    var instance = _ref2.instance, props = _ref2.props;
    return ["p-textarea p-component", {
      "p-filled": instance.$filled,
      "p-textarea-resizable ": props.autoResize,
      "p-textarea-sm p-inputfield-sm": props.size === "small",
      "p-textarea-lg p-inputfield-lg": props.size === "large",
      "p-invalid": instance.$invalid,
      "p-variant-filled": instance.$variant === "filled",
      "p-textarea-fluid": instance.$fluid
    }];
  }
};
var TextareaStyle = BaseStyle.extend({
  name: "textarea",
  theme: theme$3,
  classes: classes$7
});
var script$1$7 = {
  name: "BaseTextarea",
  "extends": script$1$b,
  props: {
    autoResize: Boolean
  },
  style: TextareaStyle,
  provide: function provide4() {
    return {
      $pcTextarea: this,
      $parentInstance: this
    };
  }
};
var script$8 = {
  name: "Textarea",
  "extends": script$1$7,
  inheritAttrs: false,
  observer: null,
  mounted: function mounted2() {
    var _this = this;
    if (this.autoResize) {
      this.observer = new ResizeObserver(function() {
        _this.resize();
      });
      this.observer.observe(this.$el);
    }
  },
  updated: function updated() {
    if (this.autoResize) {
      this.resize();
    }
  },
  beforeUnmount: function beforeUnmount2() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    resize: function resize() {
      if (!this.$el.offsetParent) return;
      this.$el.style.height = "auto";
      this.$el.style.height = this.$el.scrollHeight + "px";
      if (parseFloat(this.$el.style.height) >= parseFloat(this.$el.style.maxHeight)) {
        this.$el.style.overflowY = "scroll";
        this.$el.style.height = this.$el.style.maxHeight;
      } else {
        this.$el.style.overflow = "hidden";
      }
    },
    onInput: function onInput3(event) {
      if (this.autoResize) {
        this.resize();
      }
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
function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("textarea", mergeProps({
    "class": _ctx.cx("root"),
    value: _ctx.d_value,
    disabled: _ctx.disabled,
    "aria-invalid": _ctx.invalid || void 0,
    onInput: _cache[0] || (_cache[0] = function() {
      return $options.onInput && $options.onInput.apply($options, arguments);
    })
  }, $options.attrs), null, 16, _hoisted_1$2);
}
script$8.render = render$7;
var theme$2 = function theme5(_ref) {
  var dt = _ref.dt;
  return "\n.p-iftalabel {\n    display: block;\n    position: relative;\n}\n\n.p-iftalabel label {\n    position: absolute;\n    pointer-events: none;\n    top: ".concat(dt("iftalabel.top"), ";\n    transition-property: all;\n    transition-timing-function: ease;\n    line-height: 1;\n    font-size: ").concat(dt("iftalabel.font.size"), ";\n    font-weight: ").concat(dt("iftalabel.font.weight"), ";\n    inset-inline-start: ").concat(dt("iftalabel.position.x"), ";\n    color: ").concat(dt("iftalabel.color"), ";\n    transition-duration: ").concat(dt("iftalabel.transition.duration"), ";\n}\n\n.p-iftalabel .p-inputtext,\n.p-iftalabel .p-textarea,\n.p-iftalabel .p-select-label,\n.p-iftalabel .p-multiselect-label,\n.p-iftalabel .p-autocomplete-input-multiple,\n.p-iftalabel .p-cascadeselect-label,\n.p-iftalabel .p-treeselect-label {\n    padding-block-start: ").concat(dt("iftalabel.input.padding.top"), ";\n    padding-block-end: ").concat(dt("iftalabel.input.padding.bottom"), ";\n}\n\n.p-iftalabel:has(.p-invalid) label {\n    color: ").concat(dt("iftalabel.invalid.color"), ";\n}\n\n.p-iftalabel:has(input:focus) label,\n.p-iftalabel:has(input:-webkit-autofill) label,\n.p-iftalabel:has(textarea:focus) label,\n.p-iftalabel:has(.p-inputwrapper-focus) label {\n    color: ").concat(dt("iftalabel.focus.color"), ";\n}\n\n.p-iftalabel .p-inputicon {\n    top: ").concat(dt("iftalabel.input.padding.top"), ";\n    transform: translateY(25%);\n    margin-top: 0;\n}\n");
};
var classes$6 = {
  root: "p-iftalabel"
};
var IftaLabelStyle = BaseStyle.extend({
  name: "iftalabel",
  theme: theme$2,
  classes: classes$6
});
var script$1$6 = {
  name: "BaseIftaLabel",
  "extends": script$k,
  style: IftaLabelStyle,
  provide: function provide5() {
    return {
      $pcIftaLabel: this,
      $parentInstance: this
    };
  }
};
var script$7 = {
  name: "IftaLabel",
  "extends": script$1$6,
  inheritAttrs: false
};
function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "default")], 16);
}
script$7.render = render$6;
var classes$5 = {
  root: function root5(_ref) {
    var instance = _ref.instance;
    return ["p-steppanel", {
      "p-steppanel-active": instance.isVertical && instance.active
    }];
  },
  content: "p-steppanel-content"
};
var StepPanelStyle = BaseStyle.extend({
  name: "steppanel",
  classes: classes$5
});
var script$2$2 = {
  name: "StepperSeparator",
  hostName: "Stepper",
  "extends": script$k
};
function render$1$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", mergeProps({
    "class": _ctx.cx("separator")
  }, _ctx.ptm("separator")), null, 16);
}
script$2$2.render = render$1$2;
var script$1$5 = {
  name: "BaseStepPanel",
  "extends": script$k,
  props: {
    value: {
      type: [String, Number],
      "default": void 0
    },
    asChild: {
      type: Boolean,
      "default": false
    },
    as: {
      type: [String, Object],
      "default": "DIV"
    }
  },
  style: StepPanelStyle,
  provide: function provide6() {
    return {
      $pcStepPanel: this,
      $parentInstance: this
    };
  }
};
var script$6 = {
  name: "StepPanel",
  "extends": script$1$5,
  inheritAttrs: false,
  inject: {
    $pcStepper: {
      "default": null
    },
    $pcStepItem: {
      "default": null
    },
    $pcStepList: {
      "default": null
    }
  },
  data: function data3() {
    return {
      isSeparatorVisible: false
    };
  },
  mounted: function mounted3() {
    if (this.$el) {
      var _this$$pcStepItem, _this$$pcStepList;
      var stepElements = find(this.$pcStepper.$el, '[data-pc-name="step"]');
      var stepPanelEl = findSingle(this.isVertical ? (_this$$pcStepItem = this.$pcStepItem) === null || _this$$pcStepItem === void 0 ? void 0 : _this$$pcStepItem.$el : (_this$$pcStepList = this.$pcStepList) === null || _this$$pcStepList === void 0 ? void 0 : _this$$pcStepList.$el, '[data-pc-name="step"]');
      var stepPanelIndex = findIndexInList(stepPanelEl, stepElements);
      this.isSeparatorVisible = this.isVertical && stepPanelIndex !== stepElements.length - 1;
    }
  },
  methods: {
    getPTOptions: function getPTOptions(key) {
      var _ptm = key === "root" ? this.ptmi : this.ptm;
      return _ptm(key, {
        context: {
          active: this.active
        }
      });
    },
    updateValue: function updateValue(val) {
      this.$pcStepper.updateValue(val);
    }
  },
  computed: {
    active: function active() {
      var _this$$pcStepItem2, _this$$pcStepper;
      var activeValue3 = !!this.$pcStepItem ? (_this$$pcStepItem2 = this.$pcStepItem) === null || _this$$pcStepItem2 === void 0 ? void 0 : _this$$pcStepItem2.value : this.value;
      return activeValue3 === ((_this$$pcStepper = this.$pcStepper) === null || _this$$pcStepper === void 0 ? void 0 : _this$$pcStepper.d_value);
    },
    isVertical: function isVertical() {
      return !!this.$pcStepItem;
    },
    activeValue: function activeValue() {
      var _this$$pcStepItem3;
      return this.isVertical ? (_this$$pcStepItem3 = this.$pcStepItem) === null || _this$$pcStepItem3 === void 0 ? void 0 : _this$$pcStepItem3.value : this.value;
    },
    id: function id() {
      var _this$$pcStepper2;
      return "".concat((_this$$pcStepper2 = this.$pcStepper) === null || _this$$pcStepper2 === void 0 ? void 0 : _this$$pcStepper2.id, "_steppanel_").concat(this.activeValue);
    },
    ariaControls: function ariaControls() {
      var _this$$pcStepper3;
      return "".concat((_this$$pcStepper3 = this.$pcStepper) === null || _this$$pcStepper3 === void 0 ? void 0 : _this$$pcStepper3.id, "_step_").concat(this.activeValue);
    },
    a11yAttrs: function a11yAttrs() {
      return {
        id: this.id,
        role: "tabpanel",
        "aria-controls": this.ariaControls,
        "data-pc-name": "steppanel",
        "data-p-active": this.active
      };
    }
  },
  components: {
    StepperSeparator: script$2$2
  }
};
function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_StepperSeparator = resolveComponent("StepperSeparator");
  return $options.isVertical ? (openBlock(), createElementBlock(Fragment, {
    key: 0
  }, [!_ctx.asChild ? (openBlock(), createBlock(Transition, mergeProps({
    key: 0,
    name: "p-toggleable-content"
  }, _ctx.ptm("transition")), {
    "default": withCtx(function() {
      return [withDirectives((openBlock(), createBlock(resolveDynamicComponent(_ctx.as), mergeProps({
        id: $options.id,
        "class": _ctx.cx("root"),
        role: "tabpanel",
        "aria-controls": $options.ariaControls
      }, $options.getPTOptions("root")), {
        "default": withCtx(function() {
          return [$data.isSeparatorVisible ? (openBlock(), createBlock(_component_StepperSeparator, {
            key: 0
          })) : createCommentVNode("", true), createElementVNode("div", mergeProps({
            "class": _ctx.cx("content")
          }, $options.getPTOptions("content")), [renderSlot(_ctx.$slots, "default", {
            active: $options.active,
            activateCallback: function activateCallback(val) {
              return $options.updateValue(val);
            }
          })], 16)];
        }),
        _: 3
      }, 16, ["id", "class", "aria-controls"])), [[vShow, $options.active]])];
    }),
    _: 3
  }, 16)) : renderSlot(_ctx.$slots, "default", {
    key: 1,
    active: $options.active,
    a11yAttrs: $options.a11yAttrs,
    activateCallback: function activateCallback(val) {
      return $options.updateValue(val);
    }
  })], 64)) : (openBlock(), createElementBlock(Fragment, {
    key: 1
  }, [!_ctx.asChild ? withDirectives((openBlock(), createBlock(resolveDynamicComponent(_ctx.as), mergeProps({
    key: 0,
    id: $options.id,
    "class": _ctx.cx("root"),
    role: "tabpanel",
    "aria-controls": $options.ariaControls
  }, $options.getPTOptions("root")), {
    "default": withCtx(function() {
      return [renderSlot(_ctx.$slots, "default", {
        active: $options.active,
        activateCallback: function activateCallback(val) {
          return $options.updateValue(val);
        }
      })];
    }),
    _: 3
  }, 16, ["id", "class", "aria-controls"])), [[vShow, $options.active]]) : _ctx.asChild && $options.active ? renderSlot(_ctx.$slots, "default", {
    key: 1,
    active: $options.active,
    a11yAttrs: $options.a11yAttrs,
    activateCallback: function activateCallback(val) {
      return $options.updateValue(val);
    }
  }) : createCommentVNode("", true)], 64));
}
script$6.render = render$5;
var classes$4 = {
  root: "p-steppanels"
};
var StepPanelsStyle = BaseStyle.extend({
  name: "steppanels",
  classes: classes$4
});
var script$1$4 = {
  name: "BaseStepPanels",
  "extends": script$k,
  style: StepPanelsStyle,
  provide: function provide7() {
    return {
      $pcStepPanels: this,
      $parentInstance: this
    };
  }
};
var script$5 = {
  name: "StepPanels",
  "extends": script$1$4,
  inheritAttrs: false
};
function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "default")], 16);
}
script$5.render = render$4;
var theme$1 = function theme6(_ref) {
  var dt = _ref.dt;
  return "\n.p-divider-horizontal {\n    display: flex;\n    width: 100%;\n    position: relative;\n    align-items: center;\n    margin: ".concat(dt("divider.horizontal.margin"), ";\n    padding: ").concat(dt("divider.horizontal.padding"), ';\n}\n\n.p-divider-horizontal:before {\n    position: absolute;\n    display: block;\n    inset-block-start: 50%;\n    inset-inline-start: 0;\n    width: 100%;\n    content: "";\n    border-block-start: 1px solid ').concat(dt("divider.border.color"), ";\n}\n\n.p-divider-horizontal .p-divider-content {\n    padding: ").concat(dt("divider.horizontal.content.padding"), ";\n}\n\n.p-divider-vertical {\n    min-height: 100%;\n    display: flex;\n    position: relative;\n    justify-content: center;\n    margin: ").concat(dt("divider.vertical.margin"), ";\n    padding: ").concat(dt("divider.vertical.padding"), ';\n}\n\n.p-divider-vertical:before {\n    position: absolute;\n    display: block;\n    inset-block-start: 0;\n    inset-inline-start: 50%;\n    height: 100%;\n    content: "";\n    border-inline-start: 1px solid ').concat(dt("divider.border.color"), ";\n}\n\n.p-divider.p-divider-vertical .p-divider-content {\n    padding: ").concat(dt("divider.vertical.content.padding"), ";\n}\n\n.p-divider-content {\n    z-index: 1;\n    background: ").concat(dt("divider.content.background"), ";\n    color: ").concat(dt("divider.content.color"), ";\n}\n\n.p-divider-solid.p-divider-horizontal:before {\n    border-block-start-style: solid;\n}\n\n.p-divider-solid.p-divider-vertical:before {\n    border-inline-start-style: solid;\n}\n\n.p-divider-dashed.p-divider-horizontal:before {\n    border-block-start-style: dashed;\n}\n\n.p-divider-dashed.p-divider-vertical:before {\n    border-inline-start-style: dashed;\n}\n\n.p-divider-dotted.p-divider-horizontal:before {\n    border-block-start-style: dotted;\n}\n\n.p-divider-dotted.p-divider-vertical:before {\n    border-inline-start-style: dotted;\n}\n\n.p-divider-left:dir(rtl),\n.p-divider-right:dir(rtl) {\n    flex-direction: row-reverse;\n}\n");
};
var inlineStyles = {
  root: function root6(_ref2) {
    var props = _ref2.props;
    return {
      justifyContent: props.layout === "horizontal" ? props.align === "center" || props.align === null ? "center" : props.align === "left" ? "flex-start" : props.align === "right" ? "flex-end" : null : null,
      alignItems: props.layout === "vertical" ? props.align === "center" || props.align === null ? "center" : props.align === "top" ? "flex-start" : props.align === "bottom" ? "flex-end" : null : null
    };
  }
};
var classes$3 = {
  root: function root7(_ref3) {
    var props = _ref3.props;
    return ["p-divider p-component", "p-divider-" + props.layout, "p-divider-" + props.type, {
      "p-divider-left": props.layout === "horizontal" && (!props.align || props.align === "left")
    }, {
      "p-divider-center": props.layout === "horizontal" && props.align === "center"
    }, {
      "p-divider-right": props.layout === "horizontal" && props.align === "right"
    }, {
      "p-divider-top": props.layout === "vertical" && props.align === "top"
    }, {
      "p-divider-center": props.layout === "vertical" && (!props.align || props.align === "center")
    }, {
      "p-divider-bottom": props.layout === "vertical" && props.align === "bottom"
    }];
  },
  content: "p-divider-content"
};
var DividerStyle = BaseStyle.extend({
  name: "divider",
  theme: theme$1,
  classes: classes$3,
  inlineStyles
});
var script$1$3 = {
  name: "BaseDivider",
  "extends": script$k,
  props: {
    align: {
      type: String,
      "default": null
    },
    layout: {
      type: String,
      "default": "horizontal"
    },
    type: {
      type: String,
      "default": "solid"
    }
  },
  style: DividerStyle,
  provide: function provide8() {
    return {
      $pcDivider: this,
      $parentInstance: this
    };
  }
};
var script$4 = {
  name: "Divider",
  "extends": script$1$3,
  inheritAttrs: false
};
var _hoisted_1$1 = ["aria-orientation"];
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root"),
    style: _ctx.sx("root"),
    role: "separator",
    "aria-orientation": _ctx.layout
  }, _ctx.ptmi("root")), [_ctx.$slots["default"] ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    "class": _ctx.cx("content")
  }, _ctx.ptm("content")), [renderSlot(_ctx.$slots, "default")], 16)) : createCommentVNode("", true)], 16, _hoisted_1$1);
}
script$4.render = render$3;
var classes$2 = {
  root: function root8(_ref) {
    var instance = _ref.instance;
    return ["p-step", {
      "p-step-active": instance.active,
      "p-disabled": instance.isStepDisabled
    }];
  },
  header: "p-step-header",
  number: "p-step-number",
  title: "p-step-title"
};
var StepStyle = BaseStyle.extend({
  name: "step",
  classes: classes$2
});
var script$2$1 = {
  name: "StepperSeparator",
  hostName: "Stepper",
  "extends": script$k
};
function render$1$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", mergeProps({
    "class": _ctx.cx("separator")
  }, _ctx.ptm("separator")), null, 16);
}
script$2$1.render = render$1$1;
var script$1$2 = {
  name: "BaseStep",
  "extends": script$k,
  props: {
    value: {
      type: [String, Number],
      "default": void 0
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    asChild: {
      type: Boolean,
      "default": false
    },
    as: {
      type: [String, Object],
      "default": "DIV"
    }
  },
  style: StepStyle,
  provide: function provide9() {
    return {
      $pcStep: this,
      $parentInstance: this
    };
  }
};
var script$3 = {
  name: "Step",
  "extends": script$1$2,
  inheritAttrs: false,
  inject: {
    $pcStepper: {
      "default": null
    },
    $pcStepList: {
      "default": null
    },
    $pcStepItem: {
      "default": null
    }
  },
  data: function data4() {
    return {
      isSeparatorVisible: false
    };
  },
  mounted: function mounted4() {
    if (this.$el && this.$pcStepList) {
      var index2 = findIndexInList(this.$el, find(this.$pcStepper.$el, '[data-pc-name="step"]'));
      var stepLen = find(this.$pcStepper.$el, '[data-pc-name="step"]').length;
      this.isSeparatorVisible = index2 !== stepLen - 1;
    }
  },
  methods: {
    getPTOptions: function getPTOptions2(key) {
      var _ptm = key === "root" ? this.ptmi : this.ptm;
      return _ptm(key, {
        context: {
          active: this.active,
          disabled: this.isStepDisabled
        }
      });
    },
    onStepClick: function onStepClick() {
      this.$pcStepper.updateValue(this.activeValue);
    }
  },
  computed: {
    active: function active2() {
      return this.$pcStepper.isStepActive(this.activeValue);
    },
    activeValue: function activeValue2() {
      var _this$$pcStepItem;
      return !!this.$pcStepItem ? (_this$$pcStepItem = this.$pcStepItem) === null || _this$$pcStepItem === void 0 ? void 0 : _this$$pcStepItem.value : this.value;
    },
    isStepDisabled: function isStepDisabled() {
      return !this.active && (this.$pcStepper.isStepDisabled() || this.disabled);
    },
    id: function id2() {
      var _this$$pcStepper;
      return "".concat((_this$$pcStepper = this.$pcStepper) === null || _this$$pcStepper === void 0 ? void 0 : _this$$pcStepper.id, "_step_").concat(this.activeValue);
    },
    ariaControls: function ariaControls2() {
      var _this$$pcStepper2;
      return "".concat((_this$$pcStepper2 = this.$pcStepper) === null || _this$$pcStepper2 === void 0 ? void 0 : _this$$pcStepper2.id, "_steppanel_").concat(this.activeValue);
    },
    a11yAttrs: function a11yAttrs2() {
      return {
        root: {
          role: "presentation",
          "aria-current": this.active ? "step" : void 0,
          "data-pc-name": "step",
          "data-pc-section": "root",
          "data-p-disabled": this.isStepDisabled,
          "data-p-active": this.active
        },
        header: {
          id: this.id,
          role: "tab",
          taindex: this.disabled ? -1 : void 0,
          "aria-controls": this.ariaControls,
          "data-pc-section": "header",
          disabled: this.isStepDisabled,
          onClick: this.onStepClick
        }
      };
    }
  },
  components: {
    StepperSeparator: script$2$1
  }
};
var _hoisted_1 = ["id", "tabindex", "aria-controls", "disabled"];
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_StepperSeparator = resolveComponent("StepperSeparator");
  return !_ctx.asChild ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.as), mergeProps({
    key: 0,
    "class": _ctx.cx("root"),
    "aria-current": $options.active ? "step" : void 0,
    role: "presentation",
    "data-p-active": $options.active,
    "data-p-disabled": $options.isStepDisabled
  }, $options.getPTOptions("root")), {
    "default": withCtx(function() {
      return [createElementVNode("button", mergeProps({
        id: $options.id,
        "class": _ctx.cx("header"),
        role: "tab",
        type: "button",
        tabindex: $options.isStepDisabled ? -1 : void 0,
        "aria-controls": $options.ariaControls,
        disabled: $options.isStepDisabled,
        onClick: _cache[0] || (_cache[0] = function() {
          return $options.onStepClick && $options.onStepClick.apply($options, arguments);
        })
      }, $options.getPTOptions("header")), [createElementVNode("span", mergeProps({
        "class": _ctx.cx("number")
      }, $options.getPTOptions("number")), toDisplayString($options.activeValue), 17), createElementVNode("span", mergeProps({
        "class": _ctx.cx("title")
      }, $options.getPTOptions("title")), [renderSlot(_ctx.$slots, "default")], 16)], 16, _hoisted_1), $data.isSeparatorVisible ? (openBlock(), createBlock(_component_StepperSeparator, {
        key: 0
      })) : createCommentVNode("", true)];
    }),
    _: 3
  }, 16, ["class", "aria-current", "data-p-active", "data-p-disabled"])) : renderSlot(_ctx.$slots, "default", {
    key: 1,
    "class": normalizeClass(_ctx.cx("root")),
    active: $options.active,
    value: _ctx.value,
    a11yAttrs: $options.a11yAttrs,
    activateCallback: $options.onStepClick
  });
}
script$3.render = render$2;
var classes$1 = {
  root: "p-steplist"
};
var StepListStyle = BaseStyle.extend({
  name: "steplist",
  classes: classes$1
});
var script$1$1 = {
  name: "BaseStepList",
  "extends": script$k,
  style: StepListStyle,
  provide: function provide10() {
    return {
      $pcStepList: this,
      $parentInstance: this
    };
  }
};
var script$2 = {
  name: "StepList",
  "extends": script$1$1,
  inheritAttrs: false
};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "default")], 16);
}
script$2.render = render$1;
var theme7 = function theme8(_ref) {
  var dt = _ref.dt;
  return "\n.p-steplist {\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n    overflow-x: auto;\n}\n\n.p-step {\n    position: relative;\n    display: flex;\n    flex: 1 1 auto;\n    align-items: center;\n    gap: ".concat(dt("stepper.step.gap"), ";\n    padding: ").concat(dt("stepper.step.padding"), ";\n}\n\n.p-step:last-of-type {\n    flex: initial;\n}\n\n.p-step-header {\n    border: 0 none;\n    display: inline-flex;\n    align-items: center;\n    text-decoration: none;\n    cursor: pointer;\n    transition: background ").concat(dt("stepper.transition.duration"), ", color ").concat(dt("stepper.transition.duration"), ", border-color ").concat(dt("stepper.transition.duration"), ", outline-color ").concat(dt("stepper.transition.duration"), ", box-shadow ").concat(dt("stepper.transition.duration"), ";\n    border-radius: ").concat(dt("stepper.step.header.border.radius"), ";\n    outline-color: transparent;\n    background: transparent;\n    padding: ").concat(dt("stepper.step.header.padding"), ";\n    gap: ").concat(dt("stepper.step.header.gap"), ";\n}\n\n.p-step-header:focus-visible {\n    box-shadow: ").concat(dt("stepper.step.header.focus.ring.shadow"), ";\n    outline: ").concat(dt("stepper.step.header.focus.ring.width"), " ").concat(dt("stepper.step.header.focus.ring.style"), " ").concat(dt("stepper.step.header.focus.ring.color"), ";\n    outline-offset: ").concat(dt("stepper.step.header.focus.ring.offset"), ";\n}\n\n.p-stepper.p-stepper-readonly .p-step {\n    cursor: auto;\n}\n\n.p-step-title {\n    display: block;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 100%;\n    color: ").concat(dt("stepper.step.title.color"), ";\n    font-weight: ").concat(dt("stepper.step.title.font.weight"), ";\n    transition: background ").concat(dt("stepper.transition.duration"), ", color ").concat(dt("stepper.transition.duration"), ", border-color ").concat(dt("stepper.transition.duration"), ", box-shadow ").concat(dt("stepper.transition.duration"), ", outline-color ").concat(dt("stepper.transition.duration"), ";\n}\n\n.p-step-number {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: ").concat(dt("stepper.step.number.color"), ";\n    border: 2px solid ").concat(dt("stepper.step.number.border.color"), ";\n    background: ").concat(dt("stepper.step.number.background"), ";\n    min-width: ").concat(dt("stepper.step.number.size"), ";\n    height: ").concat(dt("stepper.step.number.size"), ";\n    line-height: ").concat(dt("stepper.step.number.size"), ";\n    font-size: ").concat(dt("stepper.step.number.font.size"), ";\n    z-index: 1;\n    border-radius: ").concat(dt("stepper.step.number.border.radius"), ";\n    position: relative;\n    font-weight: ").concat(dt("stepper.step.number.font.weight"), ';\n}\n\n.p-step-number::after {\n    content: " ";\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    border-radius: ').concat(dt("stepper.step.number.border.radius"), ";\n    box-shadow: ").concat(dt("stepper.step.number.shadow"), ";\n}\n\n.p-step-active .p-step-header {\n    cursor: default;\n}\n\n.p-step-active .p-step-number {\n    background: ").concat(dt("stepper.step.number.active.background"), ";\n    border-color: ").concat(dt("stepper.step.number.active.border.color"), ";\n    color: ").concat(dt("stepper.step.number.active.color"), ";\n}\n\n.p-step-active .p-step-title {\n    color: ").concat(dt("stepper.step.title.active.color"), ";\n}\n\n.p-step:not(.p-disabled):focus-visible {\n    outline: ").concat(dt("focus.ring.width"), " ").concat(dt("focus.ring.style"), " ").concat(dt("focus.ring.color"), ";\n    outline-offset: ").concat(dt("focus.ring.offset"), ";\n}\n\n.p-step:has(~ .p-step-active) .p-stepper-separator {\n    background: ").concat(dt("stepper.separator.active.background"), ";\n}\n\n.p-stepper-separator {\n    flex: 1 1 0;\n    background: ").concat(dt("stepper.separator.background"), ";\n    width: 100%;\n    height: ").concat(dt("stepper.separator.size"), ";\n    transition: background ").concat(dt("stepper.transition.duration"), ", color ").concat(dt("stepper.transition.duration"), ", border-color ").concat(dt("stepper.transition.duration"), ", box-shadow ").concat(dt("stepper.transition.duration"), ", outline-color ").concat(dt("stepper.transition.duration"), ";\n}\n\n.p-steppanels {\n    padding: ").concat(dt("stepper.steppanels.padding"), ";\n}\n\n.p-steppanel {\n    background: ").concat(dt("stepper.steppanel.background"), ";\n    color: ").concat(dt("stepper.steppanel.color"), ";\n}\n\n.p-stepper:has(.p-stepitem) {\n    display: flex;\n    flex-direction: column;\n}\n\n.p-stepitem {\n    display: flex;\n    flex-direction: column;\n    flex: initial;\n}\n\n.p-stepitem.p-stepitem-active {\n    flex: 1 1 auto;\n}\n\n.p-stepitem .p-step {\n    flex: initial;\n}\n\n.p-stepitem .p-steppanel-content {\n    width: 100%;\n    padding: ").concat(dt("stepper.steppanel.padding"), ";\n    margin-inline-start: 1rem;\n}\n\n.p-stepitem .p-steppanel {\n    display: flex;\n    flex: 1 1 auto;\n}\n\n.p-stepitem .p-stepper-separator {\n    flex: 0 0 auto;\n    width: ").concat(dt("stepper.separator.size"), ";\n    height: auto;\n    margin: ").concat(dt("stepper.separator.margin"), ";\n    position: relative;\n    left: calc(-1 * ").concat(dt("stepper.separator.size"), ");\n}\n\n.p-stepitem .p-stepper-separator:dir(rtl) {\n    left: calc(-9 * ").concat(dt("stepper.separator.size"), ");\n}\n\n.p-stepitem:has(~ .p-stepitem-active) .p-stepper-separator {\n    background: ").concat(dt("stepper.separator.active.background"), ";\n}\n\n.p-stepitem:last-of-type .p-steppanel {\n    padding-inline-start: ").concat(dt("stepper.step.number.size"), ";\n}\n");
};
var classes = {
  root: function root9(_ref2) {
    var props = _ref2.props;
    return ["p-stepper p-component", {
      "p-readonly": props.linear
    }];
  },
  separator: "p-stepper-separator"
};
var StepperStyle = BaseStyle.extend({
  name: "stepper",
  theme: theme7,
  classes
});
var script$1 = {
  name: "BaseStepper",
  "extends": script$k,
  props: {
    value: {
      type: [String, Number],
      "default": void 0
    },
    linear: {
      type: Boolean,
      "default": false
    }
  },
  style: StepperStyle,
  provide: function provide11() {
    return {
      $pcStepper: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "Stepper",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["update:value"],
  data: function data5() {
    return {
      id: this.$attrs.id,
      d_value: this.value
    };
  },
  watch: {
    "$attrs.id": function $attrsId2(newValue) {
      this.id = newValue || UniqueComponentId();
    },
    value: function value(newValue) {
      this.d_value = newValue;
    }
  },
  mounted: function mounted5() {
    this.id = this.id || UniqueComponentId();
  },
  methods: {
    updateValue: function updateValue2(newValue) {
      if (this.d_value !== newValue) {
        this.d_value = newValue;
        this.$emit("update:value", newValue);
      }
    },
    isStepActive: function isStepActive(value2) {
      return this.d_value === value2;
    },
    isStepDisabled: function isStepDisabled2() {
      return this.linear;
    }
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root"),
    role: "tablist"
  }, _ctx.ptmi("root")), [_ctx.$slots.start ? renderSlot(_ctx.$slots, "start", {
    key: 0
  }) : createCommentVNode("", true), renderSlot(_ctx.$slots, "default"), _ctx.$slots.end ? renderSlot(_ctx.$slots, "end", {
    key: 1
  }) : createCommentVNode("", true)], 16);
}
script.render = render;
const _sfc_main$1 = {
  data() {
    return {
      responseMessage: {},
      activeStep: 1,
      businessName: "",
      phoneNumber: "",
      email: "",
      location: "",
      businessType: null,
      experienceYears: null,
      experienceAreas: [],
      brandsWorkedWith: [],
      integrationExperience: null,
      familiarWithStandard: null,
      purchaseSource: "",
      purchaseHikvision: null,
      requiresTraining: null,
      businessCategories: [
        { name: "System Integrator", key: "System Integrator" },
        { name: "Reseller", key: "Reseller" },
        { name: "Technician", key: "Technician" },
        { name: "Other", key: "Other" }
      ],
      yearExperiences: [
        { name: "1 Year", key: "1 Year" },
        { name: "1-3 Years", key: "1-3 Years" },
        { name: "4-7 Years", key: "4-7 Years" },
        { name: "8+", key: "8+" }
      ],
      experienceAreasList: [
        { name: "CCTV Systems", key: "CCTV Systems" },
        { name: "Access Control Systems", key: "Access Control Systems" },
        { name: "Video Intercom Systems", key: "Video Intercom Systems" },
        {
          name: "Networking and Computer Products",
          key: "Networking and Computer Products"
        },
        { name: "Electrical Installations", key: "Electrical Installations" }
      ],
      brandsWorkedWithList: [
        { name: "Hikvision", key: "Hikvision" },
        { name: "Dahua", key: "Dahua" },
        { name: "Uniview", key: "Uniview" },
        { name: "Tandy", key: "Tandy" },
        { name: "Other (Please Specify)", key: "Other" }
      ],
      integrationExperienceList: [
        { name: "Yes, Extensive Experience", key: "Yes, Extensive Experience" },
        { name: "Some Experience", key: "Some Experience" },
        { name: "No Experience", key: "No Experience" }
      ],
      wherePurchase: [
        { name: "National Distributor", key: "National Distributor" },
        { name: "Regional Supplier", key: "Regional Supplier" },
        { name: "Online Retailer ", key: "Online Retailer " },
        { name: "Other", key: "Other" }
      ],
      familiarWithStandards: [
        { name: "Yes, I'm certified", key: "Yes, I'm certified" },
        {
          name: "I am familiar but not certified",
          key: "I am familiar but not certified"
        },
        {
          name: "No, but I am willing to learn",
          key: "No, but I am willing to learn"
        }
      ],
      options: [
        { name: "Yes", key: "Yes" },
        { name: "No", key: "No" },
        { name: "Not yet, but interested", key: "Not yet, but interested" }
      ]
    };
  },
  methods: {
    async submitForm() {
      const formData = {
        businessName: this.businessName,
        phoneNumber: this.phoneNumber,
        email: this.email,
        location: this.location,
        businessType: this.businessType,
        experienceYears: this.experienceYears,
        experienceAreas: this.experienceAreas,
        brandsWorkedWith: this.brandsWorkedWith,
        integrationExperience: this.integrationExperience,
        familiarWithStandard: this.familiarWithStandard,
        purchaseSource: this.purchaseSource,
        purchaseHikvision: this.purchaseHikvision,
        requiresTraining: this.requiresTraining
      };
      console.log("Form Data:", formData);
      try {
        const { $axios } = useNuxtApp();
        const response = await $axios.post(
          "/user/technician-questionnaire",
          formData
        );
        this.responseMessage = response.data.message;
        this.activateCallback(4);
        if (response.status === 200) {
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      } finally {
      }
    },
    resetForm() {
      this.businessName = "";
      this.phoneNumber = "";
      this.email = "";
      this.location = "";
      this.businessType = null;
      this.experienceYears = null;
      this.experienceAreas = [];
      this.brandsWorkedWith = [];
      this.integrationExperience = null;
      this.purchaseSource = "";
      this.purchaseHikvision = null;
      this.requiresTraining = null;
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Stepper = script;
  const _component_StepList = script$2;
  const _component_Step = script$3;
  const _component_Divider = script$4;
  const _component_StepPanels = script$5;
  const _component_StepPanel = script$6;
  const _component_InputText = script$2$3;
  const _component_RadioButton = script$f;
  const _component_Button = script$g;
  const _component_Checkbox = script$h;
  const _component_IftaLabel = script$7;
  const _component_Textarea = script$8;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex w-full items-center justify-center p-6 pt-8" }, _attrs))} data-v-a9c286a5>`);
  _push(ssrRenderComponent(_component_Stepper, {
    value: $data.activeStep,
    "onUpdate:value": ($event) => $data.activeStep = $event,
    class: "w-full max-w-lg min-h-[20rem]"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_StepList, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_Step, {
                asChild: "",
                value: 1
              }, {
                default: withCtx(({ activateCallback, value: value2, a11yAttrs: a11yAttrs3 }, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-row flex-auto gap-2" }, a11yAttrs3.root))} data-v-a9c286a5${_scopeId3}><button${ssrRenderAttrs(mergeProps({ class: "bg-transparent border-0 inline-flex flex-col gap-2" }, a11yAttrs3.header))} data-v-a9c286a5${_scopeId3}><span class="${ssrRenderClass([
                      "rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",
                      {
                        "bg-primary text-primary-contrast border-primary": value2 <= $data.activeStep,
                        "border-surface-200 dark:border-surface-700": value2 > $data.activeStep
                      }
                    ])}" data-v-a9c286a5${_scopeId3}><i class="pi pi-building" data-v-a9c286a5${_scopeId3}></i></span></button>`);
                    _push4(ssrRenderComponent(_component_Divider, null, null, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", mergeProps({ class: "flex flex-row flex-auto gap-2" }, a11yAttrs3.root), [
                        createVNode("button", mergeProps({
                          class: "bg-transparent border-0 inline-flex flex-col gap-2",
                          onClick: activateCallback
                        }, a11yAttrs3.header), [
                          createVNode("span", {
                            class: [
                              "rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",
                              {
                                "bg-primary text-primary-contrast border-primary": value2 <= $data.activeStep,
                                "border-surface-200 dark:border-surface-700": value2 > $data.activeStep
                              }
                            ]
                          }, [
                            createVNode("i", { class: "pi pi-building" })
                          ], 2)
                        ], 16, ["onClick"]),
                        createVNode(_component_Divider)
                      ], 16)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_Step, {
                asChild: "",
                value: 2
              }, {
                default: withCtx(({ activateCallback, value: value2, a11yAttrs: a11yAttrs3 }, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-row flex-auto gap-2 pl-2" }, a11yAttrs3.root))} data-v-a9c286a5${_scopeId3}><button${ssrRenderAttrs(mergeProps({ class: "bg-transparent border-0 inline-flex flex-col gap-2" }, a11yAttrs3.header))} data-v-a9c286a5${_scopeId3}><span class="${ssrRenderClass([
                      "rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",
                      {
                        "bg-primary text-primary-contrast border-primary": value2 <= $data.activeStep,
                        "border-surface-200 dark:border-surface-700": value2 > $data.activeStep
                      }
                    ])}" data-v-a9c286a5${_scopeId3}><i class="pi pi-cogs" data-v-a9c286a5${_scopeId3}></i></span></button>`);
                    _push4(ssrRenderComponent(_component_Divider, null, null, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", mergeProps({ class: "flex flex-row flex-auto gap-2 pl-2" }, a11yAttrs3.root), [
                        createVNode("button", mergeProps({
                          class: "bg-transparent border-0 inline-flex flex-col gap-2",
                          onClick: activateCallback
                        }, a11yAttrs3.header), [
                          createVNode("span", {
                            class: [
                              "rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",
                              {
                                "bg-primary text-primary-contrast border-primary": value2 <= $data.activeStep,
                                "border-surface-200 dark:border-surface-700": value2 > $data.activeStep
                              }
                            ]
                          }, [
                            createVNode("i", { class: "pi pi-cogs" })
                          ], 2)
                        ], 16, ["onClick"]),
                        createVNode(_component_Divider)
                      ], 16)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_Step, {
                asChild: "",
                value: 3
              }, {
                default: withCtx(({ activateCallback, value: value2, a11yAttrs: a11yAttrs3 }, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-row pl-2" }, a11yAttrs3.root))} data-v-a9c286a5${_scopeId3}><button${ssrRenderAttrs(mergeProps({ class: "bg-transparent border-0 inline-flex flex-col gap-2" }, a11yAttrs3.header))} data-v-a9c286a5${_scopeId3}><span class="${ssrRenderClass([
                      "rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",
                      {
                        "bg-primary text-primary-contrast border-primary": value2 <= $data.activeStep,
                        "border-surface-200 dark:border-surface-700": value2 > $data.activeStep
                      }
                    ])}" data-v-a9c286a5${_scopeId3}><i class="pi pi-question-circle" data-v-a9c286a5${_scopeId3}></i></span></button></div>`);
                  } else {
                    return [
                      createVNode("div", mergeProps({ class: "flex flex-row pl-2" }, a11yAttrs3.root), [
                        createVNode("button", mergeProps({
                          class: "bg-transparent border-0 inline-flex flex-col gap-2",
                          onClick: activateCallback
                        }, a11yAttrs3.header), [
                          createVNode("span", {
                            class: [
                              "rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",
                              {
                                "bg-primary text-primary-contrast border-primary": value2 <= $data.activeStep,
                                "border-surface-200 dark:border-surface-700": value2 > $data.activeStep
                              }
                            ]
                          }, [
                            createVNode("i", { class: "pi pi-question-circle" })
                          ], 2)
                        ], 16, ["onClick"])
                      ], 16)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_Step, {
                  asChild: "",
                  value: 1
                }, {
                  default: withCtx(({ activateCallback, value: value2, a11yAttrs: a11yAttrs3 }) => [
                    createVNode("div", mergeProps({ class: "flex flex-row flex-auto gap-2" }, a11yAttrs3.root), [
                      createVNode("button", mergeProps({
                        class: "bg-transparent border-0 inline-flex flex-col gap-2",
                        onClick: activateCallback
                      }, a11yAttrs3.header), [
                        createVNode("span", {
                          class: [
                            "rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",
                            {
                              "bg-primary text-primary-contrast border-primary": value2 <= $data.activeStep,
                              "border-surface-200 dark:border-surface-700": value2 > $data.activeStep
                            }
                          ]
                        }, [
                          createVNode("i", { class: "pi pi-building" })
                        ], 2)
                      ], 16, ["onClick"]),
                      createVNode(_component_Divider)
                    ], 16)
                  ]),
                  _: 1
                }),
                createVNode(_component_Step, {
                  asChild: "",
                  value: 2
                }, {
                  default: withCtx(({ activateCallback, value: value2, a11yAttrs: a11yAttrs3 }) => [
                    createVNode("div", mergeProps({ class: "flex flex-row flex-auto gap-2 pl-2" }, a11yAttrs3.root), [
                      createVNode("button", mergeProps({
                        class: "bg-transparent border-0 inline-flex flex-col gap-2",
                        onClick: activateCallback
                      }, a11yAttrs3.header), [
                        createVNode("span", {
                          class: [
                            "rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",
                            {
                              "bg-primary text-primary-contrast border-primary": value2 <= $data.activeStep,
                              "border-surface-200 dark:border-surface-700": value2 > $data.activeStep
                            }
                          ]
                        }, [
                          createVNode("i", { class: "pi pi-cogs" })
                        ], 2)
                      ], 16, ["onClick"]),
                      createVNode(_component_Divider)
                    ], 16)
                  ]),
                  _: 1
                }),
                createVNode(_component_Step, {
                  asChild: "",
                  value: 3
                }, {
                  default: withCtx(({ activateCallback, value: value2, a11yAttrs: a11yAttrs3 }) => [
                    createVNode("div", mergeProps({ class: "flex flex-row pl-2" }, a11yAttrs3.root), [
                      createVNode("button", mergeProps({
                        class: "bg-transparent border-0 inline-flex flex-col gap-2",
                        onClick: activateCallback
                      }, a11yAttrs3.header), [
                        createVNode("span", {
                          class: [
                            "rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",
                            {
                              "bg-primary text-primary-contrast border-primary": value2 <= $data.activeStep,
                              "border-surface-200 dark:border-surface-700": value2 > $data.activeStep
                            }
                          ]
                        }, [
                          createVNode("i", { class: "pi pi-question-circle" })
                        ], 2)
                      ], 16, ["onClick"])
                    ], 16)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_StepPanels, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_StepPanel, { value: 1 }, {
                default: withCtx(({ activateCallback }, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="flex flex-col gap-4 mx-auto w-full max-w-lg min-h-[20rem]" data-v-a9c286a5${_scopeId3}><div class="text-center mt-4 mb-4 text-xl font-semibold" data-v-a9c286a5${_scopeId3}> Section 1: Business Identification </div><div class="field" data-v-a9c286a5${_scopeId3}><label for="businessName" class="font-bold" data-v-a9c286a5${_scopeId3}>Business/Company Name</label>`);
                    _push4(ssrRenderComponent(_component_InputText, {
                      id: "businessName",
                      modelValue: $data.businessName,
                      "onUpdate:modelValue": ($event) => $data.businessName = $event,
                      type: "text",
                      placeholder: "Enter business name",
                      class: "w-full"
                    }, null, _parent4, _scopeId3));
                    _push4(`</div><div class="field" data-v-a9c286a5${_scopeId3}><label for="phoneNumber" class="font-bold" data-v-a9c286a5${_scopeId3}>Phone Number</label>`);
                    _push4(ssrRenderComponent(_component_InputText, {
                      id: "phoneNumber",
                      modelValue: $data.phoneNumber,
                      "onUpdate:modelValue": ($event) => $data.phoneNumber = $event,
                      type: "tel",
                      placeholder: "Enter phone number",
                      class: "w-full"
                    }, null, _parent4, _scopeId3));
                    _push4(`</div><div class="field" data-v-a9c286a5${_scopeId3}><label for="email" class="font-bold" data-v-a9c286a5${_scopeId3}>Email Address</label>`);
                    _push4(ssrRenderComponent(_component_InputText, {
                      id: "email",
                      modelValue: $data.email,
                      "onUpdate:modelValue": ($event) => $data.email = $event,
                      type: "email",
                      placeholder: "Enter email address",
                      class: "w-full"
                    }, null, _parent4, _scopeId3));
                    _push4(`</div><div class="field" data-v-a9c286a5${_scopeId3}><label for="location" class="font-bold" data-v-a9c286a5${_scopeId3}>Business Location</label>`);
                    _push4(ssrRenderComponent(_component_InputText, {
                      id: "location",
                      modelValue: $data.location,
                      "onUpdate:modelValue": ($event) => $data.location = $event,
                      type: "text",
                      placeholder: "City, State, Country",
                      class: "w-full"
                    }, null, _parent4, _scopeId3));
                    _push4(`</div><div class="font-bold" data-v-a9c286a5${_scopeId3}>Business Type</div><!--[-->`);
                    ssrRenderList($data.businessCategories, (category) => {
                      _push4(`<div class="flex items-center gap-2" data-v-a9c286a5${_scopeId3}>`);
                      _push4(ssrRenderComponent(_component_RadioButton, {
                        modelValue: $data.businessType,
                        "onUpdate:modelValue": ($event) => $data.businessType = $event,
                        inputId: category.key,
                        name: "dynamic",
                        value: category.key,
                        class: "flex"
                      }, null, _parent4, _scopeId3));
                      _push4(`<label${ssrRenderAttr("for", category.key)} data-v-a9c286a5${_scopeId3}>${ssrInterpolate(category.name)}</label></div>`);
                    });
                    _push4(`<!--]--><div class="font-bold" data-v-a9c286a5${_scopeId3}>Years of Experience</div><!--[-->`);
                    ssrRenderList($data.yearExperiences, (category) => {
                      _push4(`<div class="flex items-center gap-2" data-v-a9c286a5${_scopeId3}>`);
                      _push4(ssrRenderComponent(_component_RadioButton, {
                        modelValue: $data.experienceYears,
                        "onUpdate:modelValue": ($event) => $data.experienceYears = $event,
                        inputId: category.key,
                        name: "dynamic1",
                        value: category.key
                      }, null, _parent4, _scopeId3));
                      _push4(`<label${ssrRenderAttr("for", category.key)} data-v-a9c286a5${_scopeId3}>${ssrInterpolate(category.name)}</label></div>`);
                    });
                    _push4(`<!--]--></div><div class="flex pt-6 justify-end" data-v-a9c286a5${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_Button, {
                      label: "Next",
                      icon: "pi pi-arrow-right",
                      iconPos: "right",
                      onClick: ($event) => activateCallback(2)
                    }, null, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex flex-col gap-4 mx-auto w-full max-w-lg min-h-[20rem]" }, [
                        createVNode("div", { class: "text-center mt-4 mb-4 text-xl font-semibold" }, " Section 1: Business Identification "),
                        createVNode("div", { class: "field" }, [
                          createVNode("label", {
                            for: "businessName",
                            class: "font-bold"
                          }, "Business/Company Name"),
                          createVNode(_component_InputText, {
                            id: "businessName",
                            modelValue: $data.businessName,
                            "onUpdate:modelValue": ($event) => $data.businessName = $event,
                            type: "text",
                            placeholder: "Enter business name",
                            class: "w-full"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "field" }, [
                          createVNode("label", {
                            for: "phoneNumber",
                            class: "font-bold"
                          }, "Phone Number"),
                          createVNode(_component_InputText, {
                            id: "phoneNumber",
                            modelValue: $data.phoneNumber,
                            "onUpdate:modelValue": ($event) => $data.phoneNumber = $event,
                            type: "tel",
                            placeholder: "Enter phone number",
                            class: "w-full"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "field" }, [
                          createVNode("label", {
                            for: "email",
                            class: "font-bold"
                          }, "Email Address"),
                          createVNode(_component_InputText, {
                            id: "email",
                            modelValue: $data.email,
                            "onUpdate:modelValue": ($event) => $data.email = $event,
                            type: "email",
                            placeholder: "Enter email address",
                            class: "w-full"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "field" }, [
                          createVNode("label", {
                            for: "location",
                            class: "font-bold"
                          }, "Business Location"),
                          createVNode(_component_InputText, {
                            id: "location",
                            modelValue: $data.location,
                            "onUpdate:modelValue": ($event) => $data.location = $event,
                            type: "text",
                            placeholder: "City, State, Country",
                            class: "w-full"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "font-bold" }, "Business Type"),
                        (openBlock(true), createBlock(Fragment, null, renderList($data.businessCategories, (category) => {
                          return openBlock(), createBlock("div", {
                            key: category.key,
                            class: "flex items-center gap-2"
                          }, [
                            createVNode(_component_RadioButton, {
                              modelValue: $data.businessType,
                              "onUpdate:modelValue": ($event) => $data.businessType = $event,
                              inputId: category.key,
                              name: "dynamic",
                              value: category.key,
                              class: "flex"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                            createVNode("label", {
                              for: category.key
                            }, toDisplayString(category.name), 9, ["for"])
                          ]);
                        }), 128)),
                        createVNode("div", { class: "font-bold" }, "Years of Experience"),
                        (openBlock(true), createBlock(Fragment, null, renderList($data.yearExperiences, (category) => {
                          return openBlock(), createBlock("div", {
                            key: category.key,
                            class: "flex items-center gap-2"
                          }, [
                            createVNode(_component_RadioButton, {
                              modelValue: $data.experienceYears,
                              "onUpdate:modelValue": ($event) => $data.experienceYears = $event,
                              inputId: category.key,
                              name: "dynamic1",
                              value: category.key
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                            createVNode("label", {
                              for: category.key
                            }, toDisplayString(category.name), 9, ["for"])
                          ]);
                        }), 128))
                      ]),
                      createVNode("div", { class: "flex pt-6 justify-end" }, [
                        createVNode(_component_Button, {
                          label: "Next",
                          icon: "pi pi-arrow-right",
                          iconPos: "right",
                          onClick: ($event) => activateCallback(2)
                        }, null, 8, ["onClick"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_StepPanel, { value: 2 }, {
                default: withCtx(({ activateCallback }, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="flex flex-col gap-4 mx-auto w-full max-w-lg min-h-[20rem]" data-v-a9c286a5${_scopeId3}><div class="text-center mt-4 mb-4 text-xl font-semibold" data-v-a9c286a5${_scopeId3}> Section 2: Technical Experience </div><div data-v-a9c286a5${_scopeId3}><label class="font-bold py-5" data-v-a9c286a5${_scopeId3}>Which of the following areas do you have experience with ?</label><!--[-->`);
                    ssrRenderList($data.experienceAreasList, (category) => {
                      _push4(`<div class="flex items-center gap-2" data-v-a9c286a5${_scopeId3}>`);
                      _push4(ssrRenderComponent(_component_Checkbox, {
                        modelValue: $data.experienceAreas,
                        "onUpdate:modelValue": ($event) => $data.experienceAreas = $event,
                        inputId: category.key,
                        name: "category",
                        value: category.name
                      }, null, _parent4, _scopeId3));
                      _push4(`<label${ssrRenderAttr("for", category.key)} data-v-a9c286a5${_scopeId3}>${ssrInterpolate(category.name)}</label></div>`);
                    });
                    _push4(`<!--]--></div><div data-v-a9c286a5${_scopeId3}><label class="font-bold pb-3" data-v-a9c286a5${_scopeId3}>Which brands have you primarily worked with?</label><!--[-->`);
                    ssrRenderList($data.brandsWorkedWithList, (category) => {
                      _push4(`<div class="flex items-center gap-2" data-v-a9c286a5${_scopeId3}>`);
                      _push4(ssrRenderComponent(_component_Checkbox, {
                        modelValue: $data.brandsWorkedWith,
                        "onUpdate:modelValue": ($event) => $data.brandsWorkedWith = $event,
                        inputId: category.key,
                        name: "category",
                        value: category.key
                      }, null, _parent4, _scopeId3));
                      _push4(`<label${ssrRenderAttr("for", category.key)} data-v-a9c286a5${_scopeId3}>${ssrInterpolate(category.name)}</label></div>`);
                    });
                    _push4(`<!--]-->`);
                    if ($data.brandsWorkedWith.includes("Other")) {
                      _push4(ssrRenderComponent(_component_InputText, {
                        id: "purchaseSource",
                        modelValue: $data.purchaseSource,
                        "onUpdate:modelValue": ($event) => $data.purchaseSource = $event,
                        type: "text",
                        placeholder: "Please Specify ...",
                        class: "w-full mt-4"
                      }, null, _parent4, _scopeId3));
                    } else {
                      _push4(`<!---->`);
                    }
                    _push4(`</div><div class="field" data-v-a9c286a5${_scopeId3}><label class="font-bold pb-3" data-v-a9c286a5${_scopeId3}> Do you have experience integrating security systems into larger solutions?</label><!--[-->`);
                    ssrRenderList($data.integrationExperienceList, (category) => {
                      _push4(`<div class="flex items-center gap-2" data-v-a9c286a5${_scopeId3}>`);
                      _push4(ssrRenderComponent(_component_RadioButton, {
                        modelValue: $data.integrationExperience,
                        "onUpdate:modelValue": ($event) => $data.integrationExperience = $event,
                        inputId: category.key,
                        name: "integrationExperience",
                        value: category.name
                      }, null, _parent4, _scopeId3));
                      _push4(`<label${ssrRenderAttr("for", category.key)} data-v-a9c286a5${_scopeId3}>${ssrInterpolate(category.name)}</label></div>`);
                    });
                    _push4(`<!--]--></div><div class="field" data-v-a9c286a5${_scopeId3}><label class="font-bold pb-3" data-v-a9c286a5${_scopeId3}> Are you familiar with Hikvision product certifications and installation standards?</label><!--[-->`);
                    ssrRenderList($data.familiarWithStandards, (category) => {
                      _push4(`<div class="flex items-center gap-2" data-v-a9c286a5${_scopeId3}>`);
                      _push4(ssrRenderComponent(_component_RadioButton, {
                        modelValue: $data.familiarWithStandard,
                        "onUpdate:modelValue": ($event) => $data.familiarWithStandard = $event,
                        inputId: category.key,
                        name: "familiarWithStandard",
                        value: category.name
                      }, null, _parent4, _scopeId3));
                      _push4(`<label${ssrRenderAttr("for", category.key)} data-v-a9c286a5${_scopeId3}>${ssrInterpolate(category.name)}</label></div>`);
                    });
                    _push4(`<!--]--></div></div><div class="flex pt-6 justify-between" data-v-a9c286a5${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_Button, {
                      label: "Back",
                      severity: "secondary",
                      icon: "pi pi-arrow-left",
                      onClick: ($event) => activateCallback(1)
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_Button, {
                      label: "Next",
                      icon: "pi pi-arrow-right",
                      iconPos: "right",
                      onClick: ($event) => activateCallback(3)
                    }, null, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex flex-col gap-4 mx-auto w-full max-w-lg min-h-[20rem]" }, [
                        createVNode("div", { class: "text-center mt-4 mb-4 text-xl font-semibold" }, " Section 2: Technical Experience "),
                        createVNode("div", null, [
                          createVNode("label", { class: "font-bold py-5" }, "Which of the following areas do you have experience with ?"),
                          (openBlock(true), createBlock(Fragment, null, renderList($data.experienceAreasList, (category) => {
                            return openBlock(), createBlock("div", {
                              key: category.key,
                              class: "flex items-center gap-2"
                            }, [
                              createVNode(_component_Checkbox, {
                                modelValue: $data.experienceAreas,
                                "onUpdate:modelValue": ($event) => $data.experienceAreas = $event,
                                inputId: category.key,
                                name: "category",
                                value: category.name
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                              createVNode("label", {
                                for: category.key
                              }, toDisplayString(category.name), 9, ["for"])
                            ]);
                          }), 128))
                        ]),
                        createVNode("div", null, [
                          createVNode("label", { class: "font-bold pb-3" }, "Which brands have you primarily worked with?"),
                          (openBlock(true), createBlock(Fragment, null, renderList($data.brandsWorkedWithList, (category) => {
                            return openBlock(), createBlock("div", {
                              key: category.key,
                              class: "flex items-center gap-2"
                            }, [
                              createVNode(_component_Checkbox, {
                                modelValue: $data.brandsWorkedWith,
                                "onUpdate:modelValue": ($event) => $data.brandsWorkedWith = $event,
                                inputId: category.key,
                                name: "category",
                                value: category.key
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                              createVNode("label", {
                                for: category.key
                              }, toDisplayString(category.name), 9, ["for"])
                            ]);
                          }), 128)),
                          $data.brandsWorkedWith.includes("Other") ? (openBlock(), createBlock(_component_InputText, {
                            key: 0,
                            id: "purchaseSource",
                            modelValue: $data.purchaseSource,
                            "onUpdate:modelValue": ($event) => $data.purchaseSource = $event,
                            type: "text",
                            placeholder: "Please Specify ...",
                            class: "w-full mt-4"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "field" }, [
                          createVNode("label", { class: "font-bold pb-3" }, " Do you have experience integrating security systems into larger solutions?"),
                          (openBlock(true), createBlock(Fragment, null, renderList($data.integrationExperienceList, (category) => {
                            return openBlock(), createBlock("div", {
                              key: category.key,
                              class: "flex items-center gap-2"
                            }, [
                              createVNode(_component_RadioButton, {
                                modelValue: $data.integrationExperience,
                                "onUpdate:modelValue": ($event) => $data.integrationExperience = $event,
                                inputId: category.key,
                                name: "integrationExperience",
                                value: category.name
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                              createVNode("label", {
                                for: category.key
                              }, toDisplayString(category.name), 9, ["for"])
                            ]);
                          }), 128))
                        ]),
                        createVNode("div", { class: "field" }, [
                          createVNode("label", { class: "font-bold pb-3" }, " Are you familiar with Hikvision product certifications and installation standards?"),
                          (openBlock(true), createBlock(Fragment, null, renderList($data.familiarWithStandards, (category) => {
                            return openBlock(), createBlock("div", {
                              key: category.key,
                              class: "flex items-center gap-2"
                            }, [
                              createVNode(_component_RadioButton, {
                                modelValue: $data.familiarWithStandard,
                                "onUpdate:modelValue": ($event) => $data.familiarWithStandard = $event,
                                inputId: category.key,
                                name: "familiarWithStandard",
                                value: category.name
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                              createVNode("label", {
                                for: category.key
                              }, toDisplayString(category.name), 9, ["for"])
                            ]);
                          }), 128))
                        ])
                      ]),
                      createVNode("div", { class: "flex pt-6 justify-between" }, [
                        createVNode(_component_Button, {
                          label: "Back",
                          severity: "secondary",
                          icon: "pi pi-arrow-left",
                          onClick: ($event) => activateCallback(1)
                        }, null, 8, ["onClick"]),
                        createVNode(_component_Button, {
                          label: "Next",
                          icon: "pi pi-arrow-right",
                          iconPos: "right",
                          onClick: ($event) => activateCallback(3)
                        }, null, 8, ["onClick"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_StepPanel, { value: 3 }, {
                default: withCtx(({ activateCallback }, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="flex flex-col gap-4 mx-auto w-full max-w-lg min-h-[20rem]" data-v-a9c286a5${_scopeId3}><div class="text-center mt-4 mb-4 text-xl font-semibold" data-v-a9c286a5${_scopeId3}> Section 3: Technical Questions </div><div class="field" data-v-a9c286a5${_scopeId3}><label for="purchaseSource" class="font-bold pb-3" data-v-a9c286a5${_scopeId3}> Where do you currently purchase your security products? (Please select all that apply and provide details for each category)</label><!--[-->`);
                    ssrRenderList($data.wherePurchase, (category) => {
                      _push4(`<div class="flex items-center gap-2" data-v-a9c286a5${_scopeId3}>`);
                      _push4(ssrRenderComponent(_component_Checkbox, {
                        modelValue: $data.purchaseSource,
                        "onUpdate:modelValue": ($event) => $data.purchaseSource = $event,
                        inputId: category.key,
                        name: "purchaseSource",
                        value: category.name
                      }, null, _parent4, _scopeId3));
                      _push4(`<label${ssrRenderAttr("for", category.key)} data-v-a9c286a5${_scopeId3}>${ssrInterpolate(category.name)}</label></div>`);
                    });
                    _push4(`<!--]--></div><div class="field" data-v-a9c286a5${_scopeId3}><label class="font-bold pb-3" data-v-a9c286a5${_scopeId3}>Do you currently purchase Hikvision products?</label><!--[-->`);
                    ssrRenderList($data.options, (category) => {
                      _push4(`<div class="flex items-center gap-2" data-v-a9c286a5${_scopeId3}>`);
                      _push4(ssrRenderComponent(_component_RadioButton, {
                        modelValue: $data.purchaseHikvision,
                        "onUpdate:modelValue": ($event) => $data.purchaseHikvision = $event,
                        inputId: category.key,
                        name: "purchaseHikvision",
                        value: category.name
                      }, null, _parent4, _scopeId3));
                      _push4(`<label${ssrRenderAttr("for", category.key)} data-v-a9c286a5${_scopeId3}>${ssrInterpolate(category.name)}</label></div>`);
                    });
                    _push4(`<!--]--></div><div class="field" data-v-a9c286a5${_scopeId3}><label class="font-bold pb-3" data-v-a9c286a5${_scopeId3}> Technical Expertise Verification <br data-v-a9c286a5${_scopeId3}><span data-v-a9c286a5${_scopeId3}> For those working with Hikvision products: How do you configure a Hikvision NVR to enable remote viewing on a mobile device?</span></label>`);
                    _push4(ssrRenderComponent(_component_IftaLabel, { class: "mt-4" }, {
                      default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_Textarea, {
                            id: "summary",
                            modelValue: _ctx.value,
                            "onUpdate:modelValue": ($event) => _ctx.value = $event,
                            rows: "5",
                            cols: "30",
                            style: { "resize": "none" },
                            class: "w-full"
                          }, null, _parent5, _scopeId4));
                          _push5(`<label for="description" data-v-a9c286a5${_scopeId4}>Summary</label>`);
                        } else {
                          return [
                            createVNode(_component_Textarea, {
                              id: "summary",
                              modelValue: _ctx.value,
                              "onUpdate:modelValue": ($event) => _ctx.value = $event,
                              rows: "5",
                              cols: "30",
                              style: { "resize": "none" },
                              class: "w-full"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode("label", { for: "description" }, "Summary")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent4, _scopeId3));
                    _push4(`</div><div class="field" data-v-a9c286a5${_scopeId3}><label class="font-bold pb-3" data-v-a9c286a5${_scopeId3}><span data-v-a9c286a5${_scopeId3}> What is the difference between Hikvision\u2019s AcuSense and ColorVu technologies?</span></label>`);
                    _push4(ssrRenderComponent(_component_IftaLabel, { class: "mt-4" }, {
                      default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_Textarea, {
                            id: "summary",
                            modelValue: _ctx.value,
                            "onUpdate:modelValue": ($event) => _ctx.value = $event,
                            rows: "5",
                            cols: "30",
                            style: { "resize": "none" },
                            class: "w-full"
                          }, null, _parent5, _scopeId4));
                          _push5(`<label for="description" data-v-a9c286a5${_scopeId4}>Summary</label>`);
                        } else {
                          return [
                            createVNode(_component_Textarea, {
                              id: "summary",
                              modelValue: _ctx.value,
                              "onUpdate:modelValue": ($event) => _ctx.value = $event,
                              rows: "5",
                              cols: "30",
                              style: { "resize": "none" },
                              class: "w-full"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode("label", { for: "description" }, "Summary")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent4, _scopeId3));
                    _push4(`</div><div class="field" data-v-a9c286a5${_scopeId3}><label class="font-bold pb-3" data-v-a9c286a5${_scopeId3}><span data-v-a9c286a5${_scopeId3}>How would you troubleshoot a CCTV camera that is not displaying video on the NVR?</span></label>`);
                    _push4(ssrRenderComponent(_component_IftaLabel, { class: "mt-4" }, {
                      default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_Textarea, {
                            id: "troubleshoot_cctv",
                            modelValue: _ctx.value,
                            "onUpdate:modelValue": ($event) => _ctx.value = $event,
                            rows: "5",
                            cols: "30",
                            style: { "resize": "none" },
                            class: "w-full"
                          }, null, _parent5, _scopeId4));
                          _push5(`<label for="troubleshoot_cctv" data-v-a9c286a5${_scopeId4}>Summary</label>`);
                        } else {
                          return [
                            createVNode(_component_Textarea, {
                              id: "troubleshoot_cctv",
                              modelValue: _ctx.value,
                              "onUpdate:modelValue": ($event) => _ctx.value = $event,
                              rows: "5",
                              cols: "30",
                              style: { "resize": "none" },
                              class: "w-full"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode("label", { for: "troubleshoot_cctv" }, "Summary")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent4, _scopeId3));
                    _push4(`</div><div class="field" data-v-a9c286a5${_scopeId3}><label class="font-bold pb-3" data-v-a9c286a5${_scopeId3}><span data-v-a9c286a5${_scopeId3}>What are the key considerations when designing a network for IP-based surveillance systems?</span></label>`);
                    _push4(ssrRenderComponent(_component_IftaLabel, { class: "mt-4" }, {
                      default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_Textarea, {
                            id: "network_design",
                            modelValue: _ctx.value,
                            "onUpdate:modelValue": ($event) => _ctx.value = $event,
                            rows: "5",
                            cols: "30",
                            style: { "resize": "none" },
                            class: "w-full"
                          }, null, _parent5, _scopeId4));
                          _push5(`<label for="network_design" data-v-a9c286a5${_scopeId4}>Summary</label>`);
                        } else {
                          return [
                            createVNode(_component_Textarea, {
                              id: "network_design",
                              modelValue: _ctx.value,
                              "onUpdate:modelValue": ($event) => _ctx.value = $event,
                              rows: "5",
                              cols: "30",
                              style: { "resize": "none" },
                              class: "w-full"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode("label", { for: "network_design" }, "Summary")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent4, _scopeId3));
                    _push4(`</div><div class="field" data-v-a9c286a5${_scopeId3}><label class="font-bold pb-3" data-v-a9c286a5${_scopeId3}><span data-v-a9c286a5${_scopeId3}>What areas would you like us to support you with as you partner with Secure Digital Limited under Hik Digital Mart?</span></label>`);
                    _push4(ssrRenderComponent(_component_IftaLabel, { class: "mt-4" }, {
                      default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_Textarea, {
                            id: "support_areas",
                            modelValue: _ctx.value,
                            "onUpdate:modelValue": ($event) => _ctx.value = $event,
                            rows: "5",
                            cols: "30",
                            style: { "resize": "none" },
                            class: "w-full"
                          }, null, _parent5, _scopeId4));
                          _push5(`<label for="support_areas" data-v-a9c286a5${_scopeId4}>Summary</label>`);
                        } else {
                          return [
                            createVNode(_component_Textarea, {
                              id: "support_areas",
                              modelValue: _ctx.value,
                              "onUpdate:modelValue": ($event) => _ctx.value = $event,
                              rows: "5",
                              cols: "30",
                              style: { "resize": "none" },
                              class: "w-full"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode("label", { for: "support_areas" }, "Summary")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent4, _scopeId3));
                    _push4(`</div><div class="field" data-v-a9c286a5${_scopeId3}><label class="font-bold pb-3" data-v-a9c286a5${_scopeId3}><span data-v-a9c286a5${_scopeId3}>How can we best support your business? (Optional)</span></label>`);
                    _push4(ssrRenderComponent(_component_IftaLabel, { class: "mt-4" }, {
                      default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_Textarea, {
                            id: "business_support",
                            modelValue: _ctx.value,
                            "onUpdate:modelValue": ($event) => _ctx.value = $event,
                            rows: "5",
                            cols: "30",
                            style: { "resize": "none" },
                            class: "w-full"
                          }, null, _parent5, _scopeId4));
                          _push5(`<label for="business_support" data-v-a9c286a5${_scopeId4}>Summary</label>`);
                        } else {
                          return [
                            createVNode(_component_Textarea, {
                              id: "business_support",
                              modelValue: _ctx.value,
                              "onUpdate:modelValue": ($event) => _ctx.value = $event,
                              rows: "5",
                              cols: "30",
                              style: { "resize": "none" },
                              class: "w-full"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode("label", { for: "business_support" }, "Summary")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent4, _scopeId3));
                    _push4(`</div></div><div class="flex pt-6 justify-between" data-v-a9c286a5${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_Button, {
                      label: "Back",
                      severity: "secondary",
                      icon: "pi pi-arrow-left",
                      onClick: ($event) => activateCallback(2)
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_Button, {
                      label: "Submit",
                      icon: "pi pi-check",
                      iconPos: "right",
                      onClick: ($event) => activateCallback(4)
                    }, null, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex flex-col gap-4 mx-auto w-full max-w-lg min-h-[20rem]" }, [
                        createVNode("div", { class: "text-center mt-4 mb-4 text-xl font-semibold" }, " Section 3: Technical Questions "),
                        createVNode("div", { class: "field" }, [
                          createVNode("label", {
                            for: "purchaseSource",
                            class: "font-bold pb-3"
                          }, " Where do you currently purchase your security products? (Please select all that apply and provide details for each category)"),
                          (openBlock(true), createBlock(Fragment, null, renderList($data.wherePurchase, (category) => {
                            return openBlock(), createBlock("div", {
                              key: category.key,
                              class: "flex items-center gap-2"
                            }, [
                              createVNode(_component_Checkbox, {
                                modelValue: $data.purchaseSource,
                                "onUpdate:modelValue": ($event) => $data.purchaseSource = $event,
                                inputId: category.key,
                                name: "purchaseSource",
                                value: category.name
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                              createVNode("label", {
                                for: category.key
                              }, toDisplayString(category.name), 9, ["for"])
                            ]);
                          }), 128))
                        ]),
                        createVNode("div", { class: "field" }, [
                          createVNode("label", { class: "font-bold pb-3" }, "Do you currently purchase Hikvision products?"),
                          (openBlock(true), createBlock(Fragment, null, renderList($data.options, (category) => {
                            return openBlock(), createBlock("div", {
                              key: category.key,
                              class: "flex items-center gap-2"
                            }, [
                              createVNode(_component_RadioButton, {
                                modelValue: $data.purchaseHikvision,
                                "onUpdate:modelValue": ($event) => $data.purchaseHikvision = $event,
                                inputId: category.key,
                                name: "purchaseHikvision",
                                value: category.name
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                              createVNode("label", {
                                for: category.key
                              }, toDisplayString(category.name), 9, ["for"])
                            ]);
                          }), 128))
                        ]),
                        createVNode("div", { class: "field" }, [
                          createVNode("label", { class: "font-bold pb-3" }, [
                            createTextVNode(" Technical Expertise Verification "),
                            createVNode("br"),
                            createVNode("span", null, " For those working with Hikvision products: How do you configure a Hikvision NVR to enable remote viewing on a mobile device?")
                          ]),
                          createVNode(_component_IftaLabel, { class: "mt-4" }, {
                            default: withCtx(() => [
                              createVNode(_component_Textarea, {
                                id: "summary",
                                modelValue: _ctx.value,
                                "onUpdate:modelValue": ($event) => _ctx.value = $event,
                                rows: "5",
                                cols: "30",
                                style: { "resize": "none" },
                                class: "w-full"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode("label", { for: "description" }, "Summary")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "field" }, [
                          createVNode("label", { class: "font-bold pb-3" }, [
                            createVNode("span", null, " What is the difference between Hikvision\u2019s AcuSense and ColorVu technologies?")
                          ]),
                          createVNode(_component_IftaLabel, { class: "mt-4" }, {
                            default: withCtx(() => [
                              createVNode(_component_Textarea, {
                                id: "summary",
                                modelValue: _ctx.value,
                                "onUpdate:modelValue": ($event) => _ctx.value = $event,
                                rows: "5",
                                cols: "30",
                                style: { "resize": "none" },
                                class: "w-full"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode("label", { for: "description" }, "Summary")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "field" }, [
                          createVNode("label", { class: "font-bold pb-3" }, [
                            createVNode("span", null, "How would you troubleshoot a CCTV camera that is not displaying video on the NVR?")
                          ]),
                          createVNode(_component_IftaLabel, { class: "mt-4" }, {
                            default: withCtx(() => [
                              createVNode(_component_Textarea, {
                                id: "troubleshoot_cctv",
                                modelValue: _ctx.value,
                                "onUpdate:modelValue": ($event) => _ctx.value = $event,
                                rows: "5",
                                cols: "30",
                                style: { "resize": "none" },
                                class: "w-full"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode("label", { for: "troubleshoot_cctv" }, "Summary")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "field" }, [
                          createVNode("label", { class: "font-bold pb-3" }, [
                            createVNode("span", null, "What are the key considerations when designing a network for IP-based surveillance systems?")
                          ]),
                          createVNode(_component_IftaLabel, { class: "mt-4" }, {
                            default: withCtx(() => [
                              createVNode(_component_Textarea, {
                                id: "network_design",
                                modelValue: _ctx.value,
                                "onUpdate:modelValue": ($event) => _ctx.value = $event,
                                rows: "5",
                                cols: "30",
                                style: { "resize": "none" },
                                class: "w-full"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode("label", { for: "network_design" }, "Summary")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "field" }, [
                          createVNode("label", { class: "font-bold pb-3" }, [
                            createVNode("span", null, "What areas would you like us to support you with as you partner with Secure Digital Limited under Hik Digital Mart?")
                          ]),
                          createVNode(_component_IftaLabel, { class: "mt-4" }, {
                            default: withCtx(() => [
                              createVNode(_component_Textarea, {
                                id: "support_areas",
                                modelValue: _ctx.value,
                                "onUpdate:modelValue": ($event) => _ctx.value = $event,
                                rows: "5",
                                cols: "30",
                                style: { "resize": "none" },
                                class: "w-full"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode("label", { for: "support_areas" }, "Summary")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "field" }, [
                          createVNode("label", { class: "font-bold pb-3" }, [
                            createVNode("span", null, "How can we best support your business? (Optional)")
                          ]),
                          createVNode(_component_IftaLabel, { class: "mt-4" }, {
                            default: withCtx(() => [
                              createVNode(_component_Textarea, {
                                id: "business_support",
                                modelValue: _ctx.value,
                                "onUpdate:modelValue": ($event) => _ctx.value = $event,
                                rows: "5",
                                cols: "30",
                                style: { "resize": "none" },
                                class: "w-full"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode("label", { for: "business_support" }, "Summary")
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      createVNode("div", { class: "flex pt-6 justify-between" }, [
                        createVNode(_component_Button, {
                          label: "Back",
                          severity: "secondary",
                          icon: "pi pi-arrow-left",
                          onClick: ($event) => activateCallback(2)
                        }, null, 8, ["onClick"]),
                        createVNode(_component_Button, {
                          label: "Submit",
                          icon: "pi pi-check",
                          iconPos: "right",
                          onClick: ($event) => activateCallback(4)
                        }, null, 8, ["onClick"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_StepPanel, { value: 4 }, {
                default: withCtx(({ activateCallback }, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="flex flex-col gap-4 mx-auto w-full max-w-lg min-h-[20rem]" data-v-a9c286a5${_scopeId3}><div class="text-center mt-4 mb-4 text-sm font-semibold" data-v-a9c286a5${_scopeId3}><div class="p-6 rounded-lg shadow-md" data-v-a9c286a5${_scopeId3}> Thank You! <p class="text-gray-700" data-v-a9c286a5${_scopeId3}> Your application will undergo a thorough review. Upon successful verification, you will gain access to: </p><ul class="list-disc text-left pl-5 text-gray-700 mt-3" data-v-a9c286a5${_scopeId3}><li data-v-a9c286a5${_scopeId3}><strong data-v-a9c286a5${_scopeId3}>Reseller Pricing</strong></li><li data-v-a9c286a5${_scopeId3}><strong data-v-a9c286a5${_scopeId3}>Comprehensive Marketing and Technical Resources</strong></li><li data-v-a9c286a5${_scopeId3}><strong data-v-a9c286a5${_scopeId3}>Product and Business Support</strong></li></ul><p class="text-gray-700 mt-4" data-v-a9c286a5${_scopeId3}> For any inquiries or further assistance, please do not hesitate to contact us: </p><div class="bg-white p-4 rounded-lg shadow mt-4" data-v-a9c286a5${_scopeId3}><p class="text-gray-800 font-semibold" data-v-a9c286a5${_scopeId3}> \u{1F4E7} Email: <a href="mailto:sdl@hikvisionkenya.com" class="text-blue-600 hover:underline" data-v-a9c286a5${_scopeId3}>sdl@hikvisionkenya.com</a></p><p class="text-gray-800 font-semibold" data-v-a9c286a5${_scopeId3}> \u{1F4DE} Phone: <a href="tel:+254727909060" class="text-blue-600 hover:underline" data-v-a9c286a5${_scopeId3}>+254 727 909 060</a></p></div><p class="text-gray-700 mt-6" data-v-a9c286a5${_scopeId3}> We look forward to the opportunity to collaborate with you. </p><hr class="my-4 border-gray-300" data-v-a9c286a5${_scopeId3}><p class="text-gray-800 font-bold" data-v-a9c286a5${_scopeId3}>Best regards,</p><p class="text-gray-700" data-v-a9c286a5${_scopeId3}> Secure Digital Limited | Hik Digital Mart Limited </p><p class="text-gray-700 font-semibold" data-v-a9c286a5${_scopeId3}> SDLKenya Online Shop Administration Department </p><div class="bg-white p-4 rounded-lg shadow mt-4" data-v-a9c286a5${_scopeId3}><p class="text-gray-800 font-semibold" data-v-a9c286a5${_scopeId3}> \u{1F4E7} Email: <a href="mailto:sdl@hikvisionkenya.com" class="text-blue-600 hover:underline" data-v-a9c286a5${_scopeId3}>sdl@hikvisionkenya.com</a></p><p class="text-gray-800 font-semibold" data-v-a9c286a5${_scopeId3}> \u{1F4DE} Phone: <a href="tel:+254727909060" class="text-blue-600 hover:underline" data-v-a9c286a5${_scopeId3}>+254 727 909 060</a></p></div></div></div></div><div class="flex pt-6 justify-between" data-v-a9c286a5${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_Button, {
                      label: "Back",
                      severity: "secondary",
                      icon: "pi pi-arrow-left",
                      onClick: ($event) => activateCallback(3)
                    }, null, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex flex-col gap-4 mx-auto w-full max-w-lg min-h-[20rem]" }, [
                        createVNode("div", { class: "text-center mt-4 mb-4 text-sm font-semibold" }, [
                          createVNode("div", { class: "p-6 rounded-lg shadow-md" }, [
                            createTextVNode(" Thank You! "),
                            createVNode("p", { class: "text-gray-700" }, " Your application will undergo a thorough review. Upon successful verification, you will gain access to: "),
                            createVNode("ul", { class: "list-disc text-left pl-5 text-gray-700 mt-3" }, [
                              createVNode("li", null, [
                                createVNode("strong", null, "Reseller Pricing")
                              ]),
                              createVNode("li", null, [
                                createVNode("strong", null, "Comprehensive Marketing and Technical Resources")
                              ]),
                              createVNode("li", null, [
                                createVNode("strong", null, "Product and Business Support")
                              ])
                            ]),
                            createVNode("p", { class: "text-gray-700 mt-4" }, " For any inquiries or further assistance, please do not hesitate to contact us: "),
                            createVNode("div", { class: "bg-white p-4 rounded-lg shadow mt-4" }, [
                              createVNode("p", { class: "text-gray-800 font-semibold" }, [
                                createTextVNode(" \u{1F4E7} Email: "),
                                createVNode("a", {
                                  href: "mailto:sdl@hikvisionkenya.com",
                                  class: "text-blue-600 hover:underline"
                                }, "sdl@hikvisionkenya.com")
                              ]),
                              createVNode("p", { class: "text-gray-800 font-semibold" }, [
                                createTextVNode(" \u{1F4DE} Phone: "),
                                createVNode("a", {
                                  href: "tel:+254727909060",
                                  class: "text-blue-600 hover:underline"
                                }, "+254 727 909 060")
                              ])
                            ]),
                            createVNode("p", { class: "text-gray-700 mt-6" }, " We look forward to the opportunity to collaborate with you. "),
                            createVNode("hr", { class: "my-4 border-gray-300" }),
                            createVNode("p", { class: "text-gray-800 font-bold" }, "Best regards,"),
                            createVNode("p", { class: "text-gray-700" }, " Secure Digital Limited | Hik Digital Mart Limited "),
                            createVNode("p", { class: "text-gray-700 font-semibold" }, " SDLKenya Online Shop Administration Department "),
                            createVNode("div", { class: "bg-white p-4 rounded-lg shadow mt-4" }, [
                              createVNode("p", { class: "text-gray-800 font-semibold" }, [
                                createTextVNode(" \u{1F4E7} Email: "),
                                createVNode("a", {
                                  href: "mailto:sdl@hikvisionkenya.com",
                                  class: "text-blue-600 hover:underline"
                                }, "sdl@hikvisionkenya.com")
                              ]),
                              createVNode("p", { class: "text-gray-800 font-semibold" }, [
                                createTextVNode(" \u{1F4DE} Phone: "),
                                createVNode("a", {
                                  href: "tel:+254727909060",
                                  class: "text-blue-600 hover:underline"
                                }, "+254 727 909 060")
                              ])
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "flex pt-6 justify-between" }, [
                        createVNode(_component_Button, {
                          label: "Back",
                          severity: "secondary",
                          icon: "pi pi-arrow-left",
                          onClick: ($event) => activateCallback(3)
                        }, null, 8, ["onClick"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_StepPanel, { value: 1 }, {
                  default: withCtx(({ activateCallback }) => [
                    createVNode("div", { class: "flex flex-col gap-4 mx-auto w-full max-w-lg min-h-[20rem]" }, [
                      createVNode("div", { class: "text-center mt-4 mb-4 text-xl font-semibold" }, " Section 1: Business Identification "),
                      createVNode("div", { class: "field" }, [
                        createVNode("label", {
                          for: "businessName",
                          class: "font-bold"
                        }, "Business/Company Name"),
                        createVNode(_component_InputText, {
                          id: "businessName",
                          modelValue: $data.businessName,
                          "onUpdate:modelValue": ($event) => $data.businessName = $event,
                          type: "text",
                          placeholder: "Enter business name",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "field" }, [
                        createVNode("label", {
                          for: "phoneNumber",
                          class: "font-bold"
                        }, "Phone Number"),
                        createVNode(_component_InputText, {
                          id: "phoneNumber",
                          modelValue: $data.phoneNumber,
                          "onUpdate:modelValue": ($event) => $data.phoneNumber = $event,
                          type: "tel",
                          placeholder: "Enter phone number",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "field" }, [
                        createVNode("label", {
                          for: "email",
                          class: "font-bold"
                        }, "Email Address"),
                        createVNode(_component_InputText, {
                          id: "email",
                          modelValue: $data.email,
                          "onUpdate:modelValue": ($event) => $data.email = $event,
                          type: "email",
                          placeholder: "Enter email address",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "field" }, [
                        createVNode("label", {
                          for: "location",
                          class: "font-bold"
                        }, "Business Location"),
                        createVNode(_component_InputText, {
                          id: "location",
                          modelValue: $data.location,
                          "onUpdate:modelValue": ($event) => $data.location = $event,
                          type: "text",
                          placeholder: "City, State, Country",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "font-bold" }, "Business Type"),
                      (openBlock(true), createBlock(Fragment, null, renderList($data.businessCategories, (category) => {
                        return openBlock(), createBlock("div", {
                          key: category.key,
                          class: "flex items-center gap-2"
                        }, [
                          createVNode(_component_RadioButton, {
                            modelValue: $data.businessType,
                            "onUpdate:modelValue": ($event) => $data.businessType = $event,
                            inputId: category.key,
                            name: "dynamic",
                            value: category.key,
                            class: "flex"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                          createVNode("label", {
                            for: category.key
                          }, toDisplayString(category.name), 9, ["for"])
                        ]);
                      }), 128)),
                      createVNode("div", { class: "font-bold" }, "Years of Experience"),
                      (openBlock(true), createBlock(Fragment, null, renderList($data.yearExperiences, (category) => {
                        return openBlock(), createBlock("div", {
                          key: category.key,
                          class: "flex items-center gap-2"
                        }, [
                          createVNode(_component_RadioButton, {
                            modelValue: $data.experienceYears,
                            "onUpdate:modelValue": ($event) => $data.experienceYears = $event,
                            inputId: category.key,
                            name: "dynamic1",
                            value: category.key
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                          createVNode("label", {
                            for: category.key
                          }, toDisplayString(category.name), 9, ["for"])
                        ]);
                      }), 128))
                    ]),
                    createVNode("div", { class: "flex pt-6 justify-end" }, [
                      createVNode(_component_Button, {
                        label: "Next",
                        icon: "pi pi-arrow-right",
                        iconPos: "right",
                        onClick: ($event) => activateCallback(2)
                      }, null, 8, ["onClick"])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_StepPanel, { value: 2 }, {
                  default: withCtx(({ activateCallback }) => [
                    createVNode("div", { class: "flex flex-col gap-4 mx-auto w-full max-w-lg min-h-[20rem]" }, [
                      createVNode("div", { class: "text-center mt-4 mb-4 text-xl font-semibold" }, " Section 2: Technical Experience "),
                      createVNode("div", null, [
                        createVNode("label", { class: "font-bold py-5" }, "Which of the following areas do you have experience with ?"),
                        (openBlock(true), createBlock(Fragment, null, renderList($data.experienceAreasList, (category) => {
                          return openBlock(), createBlock("div", {
                            key: category.key,
                            class: "flex items-center gap-2"
                          }, [
                            createVNode(_component_Checkbox, {
                              modelValue: $data.experienceAreas,
                              "onUpdate:modelValue": ($event) => $data.experienceAreas = $event,
                              inputId: category.key,
                              name: "category",
                              value: category.name
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                            createVNode("label", {
                              for: category.key
                            }, toDisplayString(category.name), 9, ["for"])
                          ]);
                        }), 128))
                      ]),
                      createVNode("div", null, [
                        createVNode("label", { class: "font-bold pb-3" }, "Which brands have you primarily worked with?"),
                        (openBlock(true), createBlock(Fragment, null, renderList($data.brandsWorkedWithList, (category) => {
                          return openBlock(), createBlock("div", {
                            key: category.key,
                            class: "flex items-center gap-2"
                          }, [
                            createVNode(_component_Checkbox, {
                              modelValue: $data.brandsWorkedWith,
                              "onUpdate:modelValue": ($event) => $data.brandsWorkedWith = $event,
                              inputId: category.key,
                              name: "category",
                              value: category.key
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                            createVNode("label", {
                              for: category.key
                            }, toDisplayString(category.name), 9, ["for"])
                          ]);
                        }), 128)),
                        $data.brandsWorkedWith.includes("Other") ? (openBlock(), createBlock(_component_InputText, {
                          key: 0,
                          id: "purchaseSource",
                          modelValue: $data.purchaseSource,
                          "onUpdate:modelValue": ($event) => $data.purchaseSource = $event,
                          type: "text",
                          placeholder: "Please Specify ...",
                          class: "w-full mt-4"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "field" }, [
                        createVNode("label", { class: "font-bold pb-3" }, " Do you have experience integrating security systems into larger solutions?"),
                        (openBlock(true), createBlock(Fragment, null, renderList($data.integrationExperienceList, (category) => {
                          return openBlock(), createBlock("div", {
                            key: category.key,
                            class: "flex items-center gap-2"
                          }, [
                            createVNode(_component_RadioButton, {
                              modelValue: $data.integrationExperience,
                              "onUpdate:modelValue": ($event) => $data.integrationExperience = $event,
                              inputId: category.key,
                              name: "integrationExperience",
                              value: category.name
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                            createVNode("label", {
                              for: category.key
                            }, toDisplayString(category.name), 9, ["for"])
                          ]);
                        }), 128))
                      ]),
                      createVNode("div", { class: "field" }, [
                        createVNode("label", { class: "font-bold pb-3" }, " Are you familiar with Hikvision product certifications and installation standards?"),
                        (openBlock(true), createBlock(Fragment, null, renderList($data.familiarWithStandards, (category) => {
                          return openBlock(), createBlock("div", {
                            key: category.key,
                            class: "flex items-center gap-2"
                          }, [
                            createVNode(_component_RadioButton, {
                              modelValue: $data.familiarWithStandard,
                              "onUpdate:modelValue": ($event) => $data.familiarWithStandard = $event,
                              inputId: category.key,
                              name: "familiarWithStandard",
                              value: category.name
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                            createVNode("label", {
                              for: category.key
                            }, toDisplayString(category.name), 9, ["for"])
                          ]);
                        }), 128))
                      ])
                    ]),
                    createVNode("div", { class: "flex pt-6 justify-between" }, [
                      createVNode(_component_Button, {
                        label: "Back",
                        severity: "secondary",
                        icon: "pi pi-arrow-left",
                        onClick: ($event) => activateCallback(1)
                      }, null, 8, ["onClick"]),
                      createVNode(_component_Button, {
                        label: "Next",
                        icon: "pi pi-arrow-right",
                        iconPos: "right",
                        onClick: ($event) => activateCallback(3)
                      }, null, 8, ["onClick"])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_StepPanel, { value: 3 }, {
                  default: withCtx(({ activateCallback }) => [
                    createVNode("div", { class: "flex flex-col gap-4 mx-auto w-full max-w-lg min-h-[20rem]" }, [
                      createVNode("div", { class: "text-center mt-4 mb-4 text-xl font-semibold" }, " Section 3: Technical Questions "),
                      createVNode("div", { class: "field" }, [
                        createVNode("label", {
                          for: "purchaseSource",
                          class: "font-bold pb-3"
                        }, " Where do you currently purchase your security products? (Please select all that apply and provide details for each category)"),
                        (openBlock(true), createBlock(Fragment, null, renderList($data.wherePurchase, (category) => {
                          return openBlock(), createBlock("div", {
                            key: category.key,
                            class: "flex items-center gap-2"
                          }, [
                            createVNode(_component_Checkbox, {
                              modelValue: $data.purchaseSource,
                              "onUpdate:modelValue": ($event) => $data.purchaseSource = $event,
                              inputId: category.key,
                              name: "purchaseSource",
                              value: category.name
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                            createVNode("label", {
                              for: category.key
                            }, toDisplayString(category.name), 9, ["for"])
                          ]);
                        }), 128))
                      ]),
                      createVNode("div", { class: "field" }, [
                        createVNode("label", { class: "font-bold pb-3" }, "Do you currently purchase Hikvision products?"),
                        (openBlock(true), createBlock(Fragment, null, renderList($data.options, (category) => {
                          return openBlock(), createBlock("div", {
                            key: category.key,
                            class: "flex items-center gap-2"
                          }, [
                            createVNode(_component_RadioButton, {
                              modelValue: $data.purchaseHikvision,
                              "onUpdate:modelValue": ($event) => $data.purchaseHikvision = $event,
                              inputId: category.key,
                              name: "purchaseHikvision",
                              value: category.name
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                            createVNode("label", {
                              for: category.key
                            }, toDisplayString(category.name), 9, ["for"])
                          ]);
                        }), 128))
                      ]),
                      createVNode("div", { class: "field" }, [
                        createVNode("label", { class: "font-bold pb-3" }, [
                          createTextVNode(" Technical Expertise Verification "),
                          createVNode("br"),
                          createVNode("span", null, " For those working with Hikvision products: How do you configure a Hikvision NVR to enable remote viewing on a mobile device?")
                        ]),
                        createVNode(_component_IftaLabel, { class: "mt-4" }, {
                          default: withCtx(() => [
                            createVNode(_component_Textarea, {
                              id: "summary",
                              modelValue: _ctx.value,
                              "onUpdate:modelValue": ($event) => _ctx.value = $event,
                              rows: "5",
                              cols: "30",
                              style: { "resize": "none" },
                              class: "w-full"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode("label", { for: "description" }, "Summary")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "field" }, [
                        createVNode("label", { class: "font-bold pb-3" }, [
                          createVNode("span", null, " What is the difference between Hikvision\u2019s AcuSense and ColorVu technologies?")
                        ]),
                        createVNode(_component_IftaLabel, { class: "mt-4" }, {
                          default: withCtx(() => [
                            createVNode(_component_Textarea, {
                              id: "summary",
                              modelValue: _ctx.value,
                              "onUpdate:modelValue": ($event) => _ctx.value = $event,
                              rows: "5",
                              cols: "30",
                              style: { "resize": "none" },
                              class: "w-full"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode("label", { for: "description" }, "Summary")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "field" }, [
                        createVNode("label", { class: "font-bold pb-3" }, [
                          createVNode("span", null, "How would you troubleshoot a CCTV camera that is not displaying video on the NVR?")
                        ]),
                        createVNode(_component_IftaLabel, { class: "mt-4" }, {
                          default: withCtx(() => [
                            createVNode(_component_Textarea, {
                              id: "troubleshoot_cctv",
                              modelValue: _ctx.value,
                              "onUpdate:modelValue": ($event) => _ctx.value = $event,
                              rows: "5",
                              cols: "30",
                              style: { "resize": "none" },
                              class: "w-full"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode("label", { for: "troubleshoot_cctv" }, "Summary")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "field" }, [
                        createVNode("label", { class: "font-bold pb-3" }, [
                          createVNode("span", null, "What are the key considerations when designing a network for IP-based surveillance systems?")
                        ]),
                        createVNode(_component_IftaLabel, { class: "mt-4" }, {
                          default: withCtx(() => [
                            createVNode(_component_Textarea, {
                              id: "network_design",
                              modelValue: _ctx.value,
                              "onUpdate:modelValue": ($event) => _ctx.value = $event,
                              rows: "5",
                              cols: "30",
                              style: { "resize": "none" },
                              class: "w-full"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode("label", { for: "network_design" }, "Summary")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "field" }, [
                        createVNode("label", { class: "font-bold pb-3" }, [
                          createVNode("span", null, "What areas would you like us to support you with as you partner with Secure Digital Limited under Hik Digital Mart?")
                        ]),
                        createVNode(_component_IftaLabel, { class: "mt-4" }, {
                          default: withCtx(() => [
                            createVNode(_component_Textarea, {
                              id: "support_areas",
                              modelValue: _ctx.value,
                              "onUpdate:modelValue": ($event) => _ctx.value = $event,
                              rows: "5",
                              cols: "30",
                              style: { "resize": "none" },
                              class: "w-full"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode("label", { for: "support_areas" }, "Summary")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "field" }, [
                        createVNode("label", { class: "font-bold pb-3" }, [
                          createVNode("span", null, "How can we best support your business? (Optional)")
                        ]),
                        createVNode(_component_IftaLabel, { class: "mt-4" }, {
                          default: withCtx(() => [
                            createVNode(_component_Textarea, {
                              id: "business_support",
                              modelValue: _ctx.value,
                              "onUpdate:modelValue": ($event) => _ctx.value = $event,
                              rows: "5",
                              cols: "30",
                              style: { "resize": "none" },
                              class: "w-full"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode("label", { for: "business_support" }, "Summary")
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    createVNode("div", { class: "flex pt-6 justify-between" }, [
                      createVNode(_component_Button, {
                        label: "Back",
                        severity: "secondary",
                        icon: "pi pi-arrow-left",
                        onClick: ($event) => activateCallback(2)
                      }, null, 8, ["onClick"]),
                      createVNode(_component_Button, {
                        label: "Submit",
                        icon: "pi pi-check",
                        iconPos: "right",
                        onClick: ($event) => activateCallback(4)
                      }, null, 8, ["onClick"])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_StepPanel, { value: 4 }, {
                  default: withCtx(({ activateCallback }) => [
                    createVNode("div", { class: "flex flex-col gap-4 mx-auto w-full max-w-lg min-h-[20rem]" }, [
                      createVNode("div", { class: "text-center mt-4 mb-4 text-sm font-semibold" }, [
                        createVNode("div", { class: "p-6 rounded-lg shadow-md" }, [
                          createTextVNode(" Thank You! "),
                          createVNode("p", { class: "text-gray-700" }, " Your application will undergo a thorough review. Upon successful verification, you will gain access to: "),
                          createVNode("ul", { class: "list-disc text-left pl-5 text-gray-700 mt-3" }, [
                            createVNode("li", null, [
                              createVNode("strong", null, "Reseller Pricing")
                            ]),
                            createVNode("li", null, [
                              createVNode("strong", null, "Comprehensive Marketing and Technical Resources")
                            ]),
                            createVNode("li", null, [
                              createVNode("strong", null, "Product and Business Support")
                            ])
                          ]),
                          createVNode("p", { class: "text-gray-700 mt-4" }, " For any inquiries or further assistance, please do not hesitate to contact us: "),
                          createVNode("div", { class: "bg-white p-4 rounded-lg shadow mt-4" }, [
                            createVNode("p", { class: "text-gray-800 font-semibold" }, [
                              createTextVNode(" \u{1F4E7} Email: "),
                              createVNode("a", {
                                href: "mailto:sdl@hikvisionkenya.com",
                                class: "text-blue-600 hover:underline"
                              }, "sdl@hikvisionkenya.com")
                            ]),
                            createVNode("p", { class: "text-gray-800 font-semibold" }, [
                              createTextVNode(" \u{1F4DE} Phone: "),
                              createVNode("a", {
                                href: "tel:+254727909060",
                                class: "text-blue-600 hover:underline"
                              }, "+254 727 909 060")
                            ])
                          ]),
                          createVNode("p", { class: "text-gray-700 mt-6" }, " We look forward to the opportunity to collaborate with you. "),
                          createVNode("hr", { class: "my-4 border-gray-300" }),
                          createVNode("p", { class: "text-gray-800 font-bold" }, "Best regards,"),
                          createVNode("p", { class: "text-gray-700" }, " Secure Digital Limited | Hik Digital Mart Limited "),
                          createVNode("p", { class: "text-gray-700 font-semibold" }, " SDLKenya Online Shop Administration Department "),
                          createVNode("div", { class: "bg-white p-4 rounded-lg shadow mt-4" }, [
                            createVNode("p", { class: "text-gray-800 font-semibold" }, [
                              createTextVNode(" \u{1F4E7} Email: "),
                              createVNode("a", {
                                href: "mailto:sdl@hikvisionkenya.com",
                                class: "text-blue-600 hover:underline"
                              }, "sdl@hikvisionkenya.com")
                            ]),
                            createVNode("p", { class: "text-gray-800 font-semibold" }, [
                              createTextVNode(" \u{1F4DE} Phone: "),
                              createVNode("a", {
                                href: "tel:+254727909060",
                                class: "text-blue-600 hover:underline"
                              }, "+254 727 909 060")
                            ])
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "flex pt-6 justify-between" }, [
                      createVNode(_component_Button, {
                        label: "Back",
                        severity: "secondary",
                        icon: "pi pi-arrow-left",
                        onClick: ($event) => activateCallback(3)
                      }, null, 8, ["onClick"])
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_StepList, null, {
            default: withCtx(() => [
              createVNode(_component_Step, {
                asChild: "",
                value: 1
              }, {
                default: withCtx(({ activateCallback, value: value2, a11yAttrs: a11yAttrs3 }) => [
                  createVNode("div", mergeProps({ class: "flex flex-row flex-auto gap-2" }, a11yAttrs3.root), [
                    createVNode("button", mergeProps({
                      class: "bg-transparent border-0 inline-flex flex-col gap-2",
                      onClick: activateCallback
                    }, a11yAttrs3.header), [
                      createVNode("span", {
                        class: [
                          "rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",
                          {
                            "bg-primary text-primary-contrast border-primary": value2 <= $data.activeStep,
                            "border-surface-200 dark:border-surface-700": value2 > $data.activeStep
                          }
                        ]
                      }, [
                        createVNode("i", { class: "pi pi-building" })
                      ], 2)
                    ], 16, ["onClick"]),
                    createVNode(_component_Divider)
                  ], 16)
                ]),
                _: 1
              }),
              createVNode(_component_Step, {
                asChild: "",
                value: 2
              }, {
                default: withCtx(({ activateCallback, value: value2, a11yAttrs: a11yAttrs3 }) => [
                  createVNode("div", mergeProps({ class: "flex flex-row flex-auto gap-2 pl-2" }, a11yAttrs3.root), [
                    createVNode("button", mergeProps({
                      class: "bg-transparent border-0 inline-flex flex-col gap-2",
                      onClick: activateCallback
                    }, a11yAttrs3.header), [
                      createVNode("span", {
                        class: [
                          "rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",
                          {
                            "bg-primary text-primary-contrast border-primary": value2 <= $data.activeStep,
                            "border-surface-200 dark:border-surface-700": value2 > $data.activeStep
                          }
                        ]
                      }, [
                        createVNode("i", { class: "pi pi-cogs" })
                      ], 2)
                    ], 16, ["onClick"]),
                    createVNode(_component_Divider)
                  ], 16)
                ]),
                _: 1
              }),
              createVNode(_component_Step, {
                asChild: "",
                value: 3
              }, {
                default: withCtx(({ activateCallback, value: value2, a11yAttrs: a11yAttrs3 }) => [
                  createVNode("div", mergeProps({ class: "flex flex-row pl-2" }, a11yAttrs3.root), [
                    createVNode("button", mergeProps({
                      class: "bg-transparent border-0 inline-flex flex-col gap-2",
                      onClick: activateCallback
                    }, a11yAttrs3.header), [
                      createVNode("span", {
                        class: [
                          "rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",
                          {
                            "bg-primary text-primary-contrast border-primary": value2 <= $data.activeStep,
                            "border-surface-200 dark:border-surface-700": value2 > $data.activeStep
                          }
                        ]
                      }, [
                        createVNode("i", { class: "pi pi-question-circle" })
                      ], 2)
                    ], 16, ["onClick"])
                  ], 16)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_StepPanels, null, {
            default: withCtx(() => [
              createVNode(_component_StepPanel, { value: 1 }, {
                default: withCtx(({ activateCallback }) => [
                  createVNode("div", { class: "flex flex-col gap-4 mx-auto w-full max-w-lg min-h-[20rem]" }, [
                    createVNode("div", { class: "text-center mt-4 mb-4 text-xl font-semibold" }, " Section 1: Business Identification "),
                    createVNode("div", { class: "field" }, [
                      createVNode("label", {
                        for: "businessName",
                        class: "font-bold"
                      }, "Business/Company Name"),
                      createVNode(_component_InputText, {
                        id: "businessName",
                        modelValue: $data.businessName,
                        "onUpdate:modelValue": ($event) => $data.businessName = $event,
                        type: "text",
                        placeholder: "Enter business name",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "field" }, [
                      createVNode("label", {
                        for: "phoneNumber",
                        class: "font-bold"
                      }, "Phone Number"),
                      createVNode(_component_InputText, {
                        id: "phoneNumber",
                        modelValue: $data.phoneNumber,
                        "onUpdate:modelValue": ($event) => $data.phoneNumber = $event,
                        type: "tel",
                        placeholder: "Enter phone number",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "field" }, [
                      createVNode("label", {
                        for: "email",
                        class: "font-bold"
                      }, "Email Address"),
                      createVNode(_component_InputText, {
                        id: "email",
                        modelValue: $data.email,
                        "onUpdate:modelValue": ($event) => $data.email = $event,
                        type: "email",
                        placeholder: "Enter email address",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "field" }, [
                      createVNode("label", {
                        for: "location",
                        class: "font-bold"
                      }, "Business Location"),
                      createVNode(_component_InputText, {
                        id: "location",
                        modelValue: $data.location,
                        "onUpdate:modelValue": ($event) => $data.location = $event,
                        type: "text",
                        placeholder: "City, State, Country",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "font-bold" }, "Business Type"),
                    (openBlock(true), createBlock(Fragment, null, renderList($data.businessCategories, (category) => {
                      return openBlock(), createBlock("div", {
                        key: category.key,
                        class: "flex items-center gap-2"
                      }, [
                        createVNode(_component_RadioButton, {
                          modelValue: $data.businessType,
                          "onUpdate:modelValue": ($event) => $data.businessType = $event,
                          inputId: category.key,
                          name: "dynamic",
                          value: category.key,
                          class: "flex"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                        createVNode("label", {
                          for: category.key
                        }, toDisplayString(category.name), 9, ["for"])
                      ]);
                    }), 128)),
                    createVNode("div", { class: "font-bold" }, "Years of Experience"),
                    (openBlock(true), createBlock(Fragment, null, renderList($data.yearExperiences, (category) => {
                      return openBlock(), createBlock("div", {
                        key: category.key,
                        class: "flex items-center gap-2"
                      }, [
                        createVNode(_component_RadioButton, {
                          modelValue: $data.experienceYears,
                          "onUpdate:modelValue": ($event) => $data.experienceYears = $event,
                          inputId: category.key,
                          name: "dynamic1",
                          value: category.key
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                        createVNode("label", {
                          for: category.key
                        }, toDisplayString(category.name), 9, ["for"])
                      ]);
                    }), 128))
                  ]),
                  createVNode("div", { class: "flex pt-6 justify-end" }, [
                    createVNode(_component_Button, {
                      label: "Next",
                      icon: "pi pi-arrow-right",
                      iconPos: "right",
                      onClick: ($event) => activateCallback(2)
                    }, null, 8, ["onClick"])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_StepPanel, { value: 2 }, {
                default: withCtx(({ activateCallback }) => [
                  createVNode("div", { class: "flex flex-col gap-4 mx-auto w-full max-w-lg min-h-[20rem]" }, [
                    createVNode("div", { class: "text-center mt-4 mb-4 text-xl font-semibold" }, " Section 2: Technical Experience "),
                    createVNode("div", null, [
                      createVNode("label", { class: "font-bold py-5" }, "Which of the following areas do you have experience with ?"),
                      (openBlock(true), createBlock(Fragment, null, renderList($data.experienceAreasList, (category) => {
                        return openBlock(), createBlock("div", {
                          key: category.key,
                          class: "flex items-center gap-2"
                        }, [
                          createVNode(_component_Checkbox, {
                            modelValue: $data.experienceAreas,
                            "onUpdate:modelValue": ($event) => $data.experienceAreas = $event,
                            inputId: category.key,
                            name: "category",
                            value: category.name
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                          createVNode("label", {
                            for: category.key
                          }, toDisplayString(category.name), 9, ["for"])
                        ]);
                      }), 128))
                    ]),
                    createVNode("div", null, [
                      createVNode("label", { class: "font-bold pb-3" }, "Which brands have you primarily worked with?"),
                      (openBlock(true), createBlock(Fragment, null, renderList($data.brandsWorkedWithList, (category) => {
                        return openBlock(), createBlock("div", {
                          key: category.key,
                          class: "flex items-center gap-2"
                        }, [
                          createVNode(_component_Checkbox, {
                            modelValue: $data.brandsWorkedWith,
                            "onUpdate:modelValue": ($event) => $data.brandsWorkedWith = $event,
                            inputId: category.key,
                            name: "category",
                            value: category.key
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                          createVNode("label", {
                            for: category.key
                          }, toDisplayString(category.name), 9, ["for"])
                        ]);
                      }), 128)),
                      $data.brandsWorkedWith.includes("Other") ? (openBlock(), createBlock(_component_InputText, {
                        key: 0,
                        id: "purchaseSource",
                        modelValue: $data.purchaseSource,
                        "onUpdate:modelValue": ($event) => $data.purchaseSource = $event,
                        type: "text",
                        placeholder: "Please Specify ...",
                        class: "w-full mt-4"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "field" }, [
                      createVNode("label", { class: "font-bold pb-3" }, " Do you have experience integrating security systems into larger solutions?"),
                      (openBlock(true), createBlock(Fragment, null, renderList($data.integrationExperienceList, (category) => {
                        return openBlock(), createBlock("div", {
                          key: category.key,
                          class: "flex items-center gap-2"
                        }, [
                          createVNode(_component_RadioButton, {
                            modelValue: $data.integrationExperience,
                            "onUpdate:modelValue": ($event) => $data.integrationExperience = $event,
                            inputId: category.key,
                            name: "integrationExperience",
                            value: category.name
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                          createVNode("label", {
                            for: category.key
                          }, toDisplayString(category.name), 9, ["for"])
                        ]);
                      }), 128))
                    ]),
                    createVNode("div", { class: "field" }, [
                      createVNode("label", { class: "font-bold pb-3" }, " Are you familiar with Hikvision product certifications and installation standards?"),
                      (openBlock(true), createBlock(Fragment, null, renderList($data.familiarWithStandards, (category) => {
                        return openBlock(), createBlock("div", {
                          key: category.key,
                          class: "flex items-center gap-2"
                        }, [
                          createVNode(_component_RadioButton, {
                            modelValue: $data.familiarWithStandard,
                            "onUpdate:modelValue": ($event) => $data.familiarWithStandard = $event,
                            inputId: category.key,
                            name: "familiarWithStandard",
                            value: category.name
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                          createVNode("label", {
                            for: category.key
                          }, toDisplayString(category.name), 9, ["for"])
                        ]);
                      }), 128))
                    ])
                  ]),
                  createVNode("div", { class: "flex pt-6 justify-between" }, [
                    createVNode(_component_Button, {
                      label: "Back",
                      severity: "secondary",
                      icon: "pi pi-arrow-left",
                      onClick: ($event) => activateCallback(1)
                    }, null, 8, ["onClick"]),
                    createVNode(_component_Button, {
                      label: "Next",
                      icon: "pi pi-arrow-right",
                      iconPos: "right",
                      onClick: ($event) => activateCallback(3)
                    }, null, 8, ["onClick"])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_StepPanel, { value: 3 }, {
                default: withCtx(({ activateCallback }) => [
                  createVNode("div", { class: "flex flex-col gap-4 mx-auto w-full max-w-lg min-h-[20rem]" }, [
                    createVNode("div", { class: "text-center mt-4 mb-4 text-xl font-semibold" }, " Section 3: Technical Questions "),
                    createVNode("div", { class: "field" }, [
                      createVNode("label", {
                        for: "purchaseSource",
                        class: "font-bold pb-3"
                      }, " Where do you currently purchase your security products? (Please select all that apply and provide details for each category)"),
                      (openBlock(true), createBlock(Fragment, null, renderList($data.wherePurchase, (category) => {
                        return openBlock(), createBlock("div", {
                          key: category.key,
                          class: "flex items-center gap-2"
                        }, [
                          createVNode(_component_Checkbox, {
                            modelValue: $data.purchaseSource,
                            "onUpdate:modelValue": ($event) => $data.purchaseSource = $event,
                            inputId: category.key,
                            name: "purchaseSource",
                            value: category.name
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                          createVNode("label", {
                            for: category.key
                          }, toDisplayString(category.name), 9, ["for"])
                        ]);
                      }), 128))
                    ]),
                    createVNode("div", { class: "field" }, [
                      createVNode("label", { class: "font-bold pb-3" }, "Do you currently purchase Hikvision products?"),
                      (openBlock(true), createBlock(Fragment, null, renderList($data.options, (category) => {
                        return openBlock(), createBlock("div", {
                          key: category.key,
                          class: "flex items-center gap-2"
                        }, [
                          createVNode(_component_RadioButton, {
                            modelValue: $data.purchaseHikvision,
                            "onUpdate:modelValue": ($event) => $data.purchaseHikvision = $event,
                            inputId: category.key,
                            name: "purchaseHikvision",
                            value: category.name
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                          createVNode("label", {
                            for: category.key
                          }, toDisplayString(category.name), 9, ["for"])
                        ]);
                      }), 128))
                    ]),
                    createVNode("div", { class: "field" }, [
                      createVNode("label", { class: "font-bold pb-3" }, [
                        createTextVNode(" Technical Expertise Verification "),
                        createVNode("br"),
                        createVNode("span", null, " For those working with Hikvision products: How do you configure a Hikvision NVR to enable remote viewing on a mobile device?")
                      ]),
                      createVNode(_component_IftaLabel, { class: "mt-4" }, {
                        default: withCtx(() => [
                          createVNode(_component_Textarea, {
                            id: "summary",
                            modelValue: _ctx.value,
                            "onUpdate:modelValue": ($event) => _ctx.value = $event,
                            rows: "5",
                            cols: "30",
                            style: { "resize": "none" },
                            class: "w-full"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode("label", { for: "description" }, "Summary")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "field" }, [
                      createVNode("label", { class: "font-bold pb-3" }, [
                        createVNode("span", null, " What is the difference between Hikvision\u2019s AcuSense and ColorVu technologies?")
                      ]),
                      createVNode(_component_IftaLabel, { class: "mt-4" }, {
                        default: withCtx(() => [
                          createVNode(_component_Textarea, {
                            id: "summary",
                            modelValue: _ctx.value,
                            "onUpdate:modelValue": ($event) => _ctx.value = $event,
                            rows: "5",
                            cols: "30",
                            style: { "resize": "none" },
                            class: "w-full"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode("label", { for: "description" }, "Summary")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "field" }, [
                      createVNode("label", { class: "font-bold pb-3" }, [
                        createVNode("span", null, "How would you troubleshoot a CCTV camera that is not displaying video on the NVR?")
                      ]),
                      createVNode(_component_IftaLabel, { class: "mt-4" }, {
                        default: withCtx(() => [
                          createVNode(_component_Textarea, {
                            id: "troubleshoot_cctv",
                            modelValue: _ctx.value,
                            "onUpdate:modelValue": ($event) => _ctx.value = $event,
                            rows: "5",
                            cols: "30",
                            style: { "resize": "none" },
                            class: "w-full"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode("label", { for: "troubleshoot_cctv" }, "Summary")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "field" }, [
                      createVNode("label", { class: "font-bold pb-3" }, [
                        createVNode("span", null, "What are the key considerations when designing a network for IP-based surveillance systems?")
                      ]),
                      createVNode(_component_IftaLabel, { class: "mt-4" }, {
                        default: withCtx(() => [
                          createVNode(_component_Textarea, {
                            id: "network_design",
                            modelValue: _ctx.value,
                            "onUpdate:modelValue": ($event) => _ctx.value = $event,
                            rows: "5",
                            cols: "30",
                            style: { "resize": "none" },
                            class: "w-full"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode("label", { for: "network_design" }, "Summary")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "field" }, [
                      createVNode("label", { class: "font-bold pb-3" }, [
                        createVNode("span", null, "What areas would you like us to support you with as you partner with Secure Digital Limited under Hik Digital Mart?")
                      ]),
                      createVNode(_component_IftaLabel, { class: "mt-4" }, {
                        default: withCtx(() => [
                          createVNode(_component_Textarea, {
                            id: "support_areas",
                            modelValue: _ctx.value,
                            "onUpdate:modelValue": ($event) => _ctx.value = $event,
                            rows: "5",
                            cols: "30",
                            style: { "resize": "none" },
                            class: "w-full"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode("label", { for: "support_areas" }, "Summary")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "field" }, [
                      createVNode("label", { class: "font-bold pb-3" }, [
                        createVNode("span", null, "How can we best support your business? (Optional)")
                      ]),
                      createVNode(_component_IftaLabel, { class: "mt-4" }, {
                        default: withCtx(() => [
                          createVNode(_component_Textarea, {
                            id: "business_support",
                            modelValue: _ctx.value,
                            "onUpdate:modelValue": ($event) => _ctx.value = $event,
                            rows: "5",
                            cols: "30",
                            style: { "resize": "none" },
                            class: "w-full"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode("label", { for: "business_support" }, "Summary")
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createVNode("div", { class: "flex pt-6 justify-between" }, [
                    createVNode(_component_Button, {
                      label: "Back",
                      severity: "secondary",
                      icon: "pi pi-arrow-left",
                      onClick: ($event) => activateCallback(2)
                    }, null, 8, ["onClick"]),
                    createVNode(_component_Button, {
                      label: "Submit",
                      icon: "pi pi-check",
                      iconPos: "right",
                      onClick: ($event) => activateCallback(4)
                    }, null, 8, ["onClick"])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_StepPanel, { value: 4 }, {
                default: withCtx(({ activateCallback }) => [
                  createVNode("div", { class: "flex flex-col gap-4 mx-auto w-full max-w-lg min-h-[20rem]" }, [
                    createVNode("div", { class: "text-center mt-4 mb-4 text-sm font-semibold" }, [
                      createVNode("div", { class: "p-6 rounded-lg shadow-md" }, [
                        createTextVNode(" Thank You! "),
                        createVNode("p", { class: "text-gray-700" }, " Your application will undergo a thorough review. Upon successful verification, you will gain access to: "),
                        createVNode("ul", { class: "list-disc text-left pl-5 text-gray-700 mt-3" }, [
                          createVNode("li", null, [
                            createVNode("strong", null, "Reseller Pricing")
                          ]),
                          createVNode("li", null, [
                            createVNode("strong", null, "Comprehensive Marketing and Technical Resources")
                          ]),
                          createVNode("li", null, [
                            createVNode("strong", null, "Product and Business Support")
                          ])
                        ]),
                        createVNode("p", { class: "text-gray-700 mt-4" }, " For any inquiries or further assistance, please do not hesitate to contact us: "),
                        createVNode("div", { class: "bg-white p-4 rounded-lg shadow mt-4" }, [
                          createVNode("p", { class: "text-gray-800 font-semibold" }, [
                            createTextVNode(" \u{1F4E7} Email: "),
                            createVNode("a", {
                              href: "mailto:sdl@hikvisionkenya.com",
                              class: "text-blue-600 hover:underline"
                            }, "sdl@hikvisionkenya.com")
                          ]),
                          createVNode("p", { class: "text-gray-800 font-semibold" }, [
                            createTextVNode(" \u{1F4DE} Phone: "),
                            createVNode("a", {
                              href: "tel:+254727909060",
                              class: "text-blue-600 hover:underline"
                            }, "+254 727 909 060")
                          ])
                        ]),
                        createVNode("p", { class: "text-gray-700 mt-6" }, " We look forward to the opportunity to collaborate with you. "),
                        createVNode("hr", { class: "my-4 border-gray-300" }),
                        createVNode("p", { class: "text-gray-800 font-bold" }, "Best regards,"),
                        createVNode("p", { class: "text-gray-700" }, " Secure Digital Limited | Hik Digital Mart Limited "),
                        createVNode("p", { class: "text-gray-700 font-semibold" }, " SDLKenya Online Shop Administration Department "),
                        createVNode("div", { class: "bg-white p-4 rounded-lg shadow mt-4" }, [
                          createVNode("p", { class: "text-gray-800 font-semibold" }, [
                            createTextVNode(" \u{1F4E7} Email: "),
                            createVNode("a", {
                              href: "mailto:sdl@hikvisionkenya.com",
                              class: "text-blue-600 hover:underline"
                            }, "sdl@hikvisionkenya.com")
                          ]),
                          createVNode("p", { class: "text-gray-800 font-semibold" }, [
                            createTextVNode(" \u{1F4DE} Phone: "),
                            createVNode("a", {
                              href: "tel:+254727909060",
                              class: "text-blue-600 hover:underline"
                            }, "+254 727 909 060")
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "flex pt-6 justify-between" }, [
                    createVNode(_component_Button, {
                      label: "Back",
                      severity: "secondary",
                      icon: "pi pi-arrow-left",
                      onClick: ($event) => activateCallback(3)
                    }, null, 8, ["onClick"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/stepper/QuestionnaireForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const QuestionnaireForm = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-a9c286a5"]]);
const _sfc_main = {
  layout: "login",
  components: {
    SignupForm: __nuxt_component_0,
    LoginForm: __nuxt_component_1,
    QuestionnaireForm
  },
  data() {
    return {
      isSignup: false,
      showQuestionnaireVisible: false
    };
  },
  methods: {
    toggleForm() {
      this.isSignup = !this.isSignup;
      this.showQuestionnaireVisible = false;
    },
    showQuestionnaire() {
      this.isSignup = false;
      this.showQuestionnaireVisible = true;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SignupForm = __nuxt_component_0;
  const _component_QuestionnaireForm = resolveComponent("QuestionnaireForm");
  const _component_LoginForm = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "",
    style: { "background-color": "white" }
  }, _attrs))}>`);
  if ($data.isSignup) {
    _push(ssrRenderComponent(_component_SignupForm, {
      onToggle: $options.toggleForm,
      onShowQuestionnaire: $options.showQuestionnaire
    }, null, _parent));
  } else if ($data.showQuestionnaireVisible) {
    _push(ssrRenderComponent(_component_QuestionnaireForm, null, null, _parent));
  } else {
    _push(ssrRenderComponent(_component_LoginForm, { onToggle: $options.toggleForm }, null, _parent));
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-pZB8iihM.mjs.map
