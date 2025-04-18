import { equals, contains } from '@primeuix/utils/object';
import { a as script$2$1 } from './index-CPSBx0zQ.mjs';
import { s as script$3 } from './index-BjfqnR8d.mjs';
import { openBlock, createElementBlock, mergeProps, createElementVNode, resolveComponent, renderSlot, normalizeClass, createBlock, createCommentVNode } from 'vue';
import { s as script$4 } from './index-DWifVPgv.mjs';
import { B as BaseStyle } from './server.mjs';

var script$2 = {
  name: "MinusIcon",
  "extends": script$3
};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _cache[0] || (_cache[0] = [createElementVNode("path", {
    d: "M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
script$2.render = render$1;
var theme = function theme2(_ref) {
  var dt = _ref.dt;
  return "\n.p-checkbox {\n    position: relative;\n    display: inline-flex;\n    user-select: none;\n    vertical-align: bottom;\n    width: ".concat(dt("checkbox.width"), ";\n    height: ").concat(dt("checkbox.height"), ";\n}\n\n.p-checkbox-input {\n    cursor: pointer;\n    appearance: none;\n    position: absolute;\n    inset-block-start: 0;\n    inset-inline-start: 0;\n    width: 100%;\n    height: 100%;\n    padding: 0;\n    margin: 0;\n    opacity: 0;\n    z-index: 1;\n    outline: 0 none;\n    border: 1px solid transparent;\n    border-radius: ").concat(dt("checkbox.border.radius"), ";\n}\n\n.p-checkbox-box {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: ").concat(dt("checkbox.border.radius"), ";\n    border: 1px solid ").concat(dt("checkbox.border.color"), ";\n    background: ").concat(dt("checkbox.background"), ";\n    width: ").concat(dt("checkbox.width"), ";\n    height: ").concat(dt("checkbox.height"), ";\n    transition: background ").concat(dt("checkbox.transition.duration"), ", color ").concat(dt("checkbox.transition.duration"), ", border-color ").concat(dt("checkbox.transition.duration"), ", box-shadow ").concat(dt("checkbox.transition.duration"), ", outline-color ").concat(dt("checkbox.transition.duration"), ";\n    outline-color: transparent;\n    box-shadow: ").concat(dt("checkbox.shadow"), ";\n}\n\n.p-checkbox-icon {\n    transition-duration: ").concat(dt("checkbox.transition.duration"), ";\n    color: ").concat(dt("checkbox.icon.color"), ";\n    font-size: ").concat(dt("checkbox.icon.size"), ";\n    width: ").concat(dt("checkbox.icon.size"), ";\n    height: ").concat(dt("checkbox.icon.size"), ";\n}\n\n.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {\n    border-color: ").concat(dt("checkbox.hover.border.color"), ";\n}\n\n.p-checkbox-checked .p-checkbox-box {\n    border-color: ").concat(dt("checkbox.checked.border.color"), ";\n    background: ").concat(dt("checkbox.checked.background"), ";\n}\n\n.p-checkbox-checked .p-checkbox-icon {\n    color: ").concat(dt("checkbox.icon.checked.color"), ";\n}\n\n.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {\n    background: ").concat(dt("checkbox.checked.hover.background"), ";\n    border-color: ").concat(dt("checkbox.checked.hover.border.color"), ";\n}\n\n.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {\n    color: ").concat(dt("checkbox.icon.checked.hover.color"), ";\n}\n\n.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {\n    border-color: ").concat(dt("checkbox.focus.border.color"), ";\n    box-shadow: ").concat(dt("checkbox.focus.ring.shadow"), ";\n    outline: ").concat(dt("checkbox.focus.ring.width"), " ").concat(dt("checkbox.focus.ring.style"), " ").concat(dt("checkbox.focus.ring.color"), ";\n    outline-offset: ").concat(dt("checkbox.focus.ring.offset"), ";\n}\n\n.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {\n    border-color: ").concat(dt("checkbox.checked.focus.border.color"), ";\n}\n\n.p-checkbox.p-invalid > .p-checkbox-box {\n    border-color: ").concat(dt("checkbox.invalid.border.color"), ";\n}\n\n.p-checkbox.p-variant-filled .p-checkbox-box {\n    background: ").concat(dt("checkbox.filled.background"), ";\n}\n\n.p-checkbox-checked.p-variant-filled .p-checkbox-box {\n    background: ").concat(dt("checkbox.checked.background"), ";\n}\n\n.p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {\n    background: ").concat(dt("checkbox.checked.hover.background"), ";\n}\n\n.p-checkbox.p-disabled {\n    opacity: 1;\n}\n\n.p-checkbox.p-disabled .p-checkbox-box {\n    background: ").concat(dt("checkbox.disabled.background"), ";\n    border-color: ").concat(dt("checkbox.checked.disabled.border.color"), ";\n}\n\n.p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {\n    color: ").concat(dt("checkbox.icon.disabled.color"), ";\n}\n\n.p-checkbox-sm,\n.p-checkbox-sm .p-checkbox-box {\n    width: ").concat(dt("checkbox.sm.width"), ";\n    height: ").concat(dt("checkbox.sm.height"), ";\n}\n\n.p-checkbox-sm .p-checkbox-icon {\n    font-size: ").concat(dt("checkbox.icon.sm.size"), ";\n    width: ").concat(dt("checkbox.icon.sm.size"), ";\n    height: ").concat(dt("checkbox.icon.sm.size"), ";\n}\n\n.p-checkbox-lg,\n.p-checkbox-lg .p-checkbox-box {\n    width: ").concat(dt("checkbox.lg.width"), ";\n    height: ").concat(dt("checkbox.lg.height"), ";\n}\n\n.p-checkbox-lg .p-checkbox-icon {\n    font-size: ").concat(dt("checkbox.icon.lg.size"), ";\n    width: ").concat(dt("checkbox.icon.lg.size"), ";\n    height: ").concat(dt("checkbox.icon.lg.size"), ";\n}\n");
};
var classes = {
  root: function root(_ref2) {
    var instance = _ref2.instance, props = _ref2.props;
    return ["p-checkbox p-component", {
      "p-checkbox-checked": instance.checked,
      "p-disabled": props.disabled,
      "p-invalid": instance.$pcCheckboxGroup ? instance.$pcCheckboxGroup.$invalid : instance.$invalid,
      "p-variant-filled": instance.$variant === "filled",
      "p-checkbox-sm p-inputfield-sm": props.size === "small",
      "p-checkbox-lg p-inputfield-lg": props.size === "large"
    }];
  },
  box: "p-checkbox-box",
  input: "p-checkbox-input",
  icon: "p-checkbox-icon"
};
var CheckboxStyle = BaseStyle.extend({
  name: "checkbox",
  theme,
  classes
});
var script$1 = {
  name: "BaseCheckbox",
  "extends": script$4,
  props: {
    value: null,
    binary: Boolean,
    indeterminate: {
      type: Boolean,
      "default": false
    },
    trueValue: {
      type: null,
      "default": true
    },
    falseValue: {
      type: null,
      "default": false
    },
    readonly: {
      type: Boolean,
      "default": false
    },
    required: {
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
  style: CheckboxStyle,
  provide: function provide() {
    return {
      $pcCheckbox: this,
      $parentInstance: this
    };
  }
};
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
  name: "Checkbox",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["change", "focus", "blur", "update:indeterminate"],
  inject: {
    $pcCheckboxGroup: {
      "default": void 0
    }
  },
  data: function data() {
    return {
      d_indeterminate: this.indeterminate
    };
  },
  watch: {
    indeterminate: function indeterminate(newValue) {
      this.d_indeterminate = newValue;
    }
  },
  methods: {
    getPTOptions: function getPTOptions(key) {
      var _ptm = key === "root" ? this.ptmi : this.ptm;
      return _ptm(key, {
        context: {
          checked: this.checked,
          indeterminate: this.d_indeterminate,
          disabled: this.disabled
        }
      });
    },
    onChange: function onChange(event) {
      var _this = this;
      if (!this.disabled && !this.readonly) {
        var value = this.$pcCheckboxGroup ? this.$pcCheckboxGroup.d_value : this.d_value;
        var newModelValue;
        if (this.binary) {
          newModelValue = this.d_indeterminate ? this.trueValue : this.checked ? this.falseValue : this.trueValue;
        } else {
          if (this.checked || this.d_indeterminate) newModelValue = value.filter(function(val) {
            return !equals(val, _this.value);
          });
          else newModelValue = value ? [].concat(_toConsumableArray(value), [this.value]) : [this.value];
        }
        if (this.d_indeterminate) {
          this.d_indeterminate = false;
          this.$emit("update:indeterminate", this.d_indeterminate);
        }
        this.$pcCheckboxGroup ? this.$pcCheckboxGroup.writeValue(newModelValue, event) : this.writeValue(newModelValue, event);
        this.$emit("change", event);
      }
    },
    onFocus: function onFocus(event) {
      this.$emit("focus", event);
    },
    onBlur: function onBlur(event) {
      var _this$formField$onBlu, _this$formField;
      this.$emit("blur", event);
      (_this$formField$onBlu = (_this$formField = this.formField).onBlur) === null || _this$formField$onBlu === void 0 || _this$formField$onBlu.call(_this$formField, event);
    }
  },
  computed: {
    groupName: function groupName() {
      return this.$pcCheckboxGroup ? this.$pcCheckboxGroup.groupName : this.$formName;
    },
    checked: function checked() {
      var value = this.$pcCheckboxGroup ? this.$pcCheckboxGroup.d_value : this.d_value;
      return this.d_indeterminate ? false : this.binary ? value === this.trueValue : contains(this.value, value);
    }
  },
  components: {
    CheckIcon: script$2$1,
    MinusIcon: script$2
  }
};
var _hoisted_1 = ["data-p-checked", "data-p-indeterminate", "data-p-disabled"];
var _hoisted_2 = ["id", "value", "name", "checked", "tabindex", "disabled", "readonly", "required", "aria-labelledby", "aria-label", "aria-invalid", "aria-checked"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_CheckIcon = resolveComponent("CheckIcon");
  var _component_MinusIcon = resolveComponent("MinusIcon");
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, $options.getPTOptions("root"), {
    "data-p-checked": $options.checked,
    "data-p-indeterminate": $data.d_indeterminate || void 0,
    "data-p-disabled": _ctx.disabled
  }), [createElementVNode("input", mergeProps({
    id: _ctx.inputId,
    type: "checkbox",
    "class": [_ctx.cx("input"), _ctx.inputClass],
    style: _ctx.inputStyle,
    value: _ctx.value,
    name: $options.groupName,
    checked: $options.checked,
    tabindex: _ctx.tabindex,
    disabled: _ctx.disabled,
    readonly: _ctx.readonly,
    required: _ctx.required,
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-label": _ctx.ariaLabel,
    "aria-invalid": _ctx.invalid || void 0,
    "aria-checked": $data.d_indeterminate ? "mixed" : void 0,
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
  }, $options.getPTOptions("box")), [renderSlot(_ctx.$slots, "icon", {
    checked: $options.checked,
    indeterminate: $data.d_indeterminate,
    "class": normalizeClass(_ctx.cx("icon"))
  }, function() {
    return [$options.checked ? (openBlock(), createBlock(_component_CheckIcon, mergeProps({
      key: 0,
      "class": _ctx.cx("icon")
    }, $options.getPTOptions("icon")), null, 16, ["class"])) : $data.d_indeterminate ? (openBlock(), createBlock(_component_MinusIcon, mergeProps({
      key: 1,
      "class": _ctx.cx("icon")
    }, $options.getPTOptions("icon")), null, 16, ["class"])) : createCommentVNode("", true)];
  })], 16)], 16, _hoisted_1);
}
script.render = render;

export { script as s };
//# sourceMappingURL=index-C-aCq1t3.mjs.map
