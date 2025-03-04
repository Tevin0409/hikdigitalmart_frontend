import { b as buildAssetsURL } from '../nitro/nitro.mjs';
import { getAttribute, findSingle, find, getWidth, getOffset } from '@primeuix/utils/dom';
import { R as Ripple } from './index-BdVaJSFC.mjs';
import { mergeProps, resolveDirective, openBlock, createElementBlock, createElementVNode, Fragment, renderList, withDirectives, createBlock, resolveDynamicComponent, normalizeClass, createCommentVNode, toDisplayString, useSSRContext, withCtx, createVNode } from 'vue';
import { a as script$1$1 } from './index-BjfqnR8d.mjs';
import { B as BaseStyle, _ as _export_sfc, u as useUserStore, a as useNuxtApp, b as useProductStore } from './server.mjs';
import { s as script$3 } from './index-DJ-ZgwLv.mjs';
import { s as script$2 } from './index-CEOEMxBM.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-BYB1KAeo.mjs';
import { s as script$4 } from './index-DW__Wuaq.mjs';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

var theme = function theme2(_ref) {
  var dt = _ref.dt;
  return "\n.p-tabmenu {\n    overflow-x: auto;\n}\n\n.p-tabmenu-tablist {\n    display: flex;\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n    background: ".concat(dt("tabmenu.tablist.background"), ";\n    border-style: solid;\n    border-color: ").concat(dt("tabmenu.tablist.border.color"), ";\n    border-width: ").concat(dt("tabmenu.tablist.border.width"), ";\n    position: relative;\n}\n\n.p-tabmenu-item-link {\n    cursor: pointer;\n    user-select: none;\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    position: relative;\n    overflow: hidden;\n    background: ").concat(dt("tabmenu.item.background"), ";\n    border-style: solid;\n    border-width: ").concat(dt("tabmenu.item.border.width"), ";\n    border-color: ").concat(dt("tabmenu.item.border.color"), ";\n    color: ").concat(dt("tabmenu.item.color"), ";\n    padding: ").concat(dt("tabmenu.item.padding"), ";\n    font-weight: ").concat(dt("tabmenu.item.font.weight"), ";\n    transition: background ").concat(dt("tabmenu.transition.duration"), ", border-color ").concat(dt("tabmenu.transition.duration"), ", color ").concat(dt("tabmenu.transition.duration"), ", outline-color ").concat(dt("tabmenu.transition.duration"), ", box-shadow ").concat(dt("tabmenu.transition.duration"), ";\n    margin: ").concat(dt("tabmenu.item.margin"), ";\n    outline-color: transparent;\n    gap: ").concat(dt("tabmenu.item.gap"), ";\n}\n\n.p-tabmenu-item-link:focus-visible {\n    z-index: 1;\n    box-shadow: ").concat(dt("tabmenu.item.focus.ring.shadow"), ";\n    outline: ").concat(dt("tabmenu.item.focus.ring.width"), " ").concat(dt("tabmenu.item.focus.ring.style"), " ").concat(dt("tabmenu.item.focus.ring.color"), ";\n    outline-offset: ").concat(dt("tabmenu.item.focus.ring.offset"), ";\n}\n\n.p-tabmenu-item-icon {\n    color: ").concat(dt("tabmenu.item.icon.color"), ";\n    transition: background ").concat(dt("tabmenu.transition.duration"), ", border-color ").concat(dt("tabmenu.transition.duration"), ", color ").concat(dt("tabmenu.transition.duration"), ", outline-color ").concat(dt("tabmenu.transition.duration"), ", box-shadow ").concat(dt("tabmenu.transition.duration"), ";\n}\n\n.p-tabmenu-item-label {\n    line-height: 1;\n}\n\n.p-tabmenu-item:not(.p-tabmenu-item-active):not(.p-disabled):hover .p-tabmenu-item-link {\n    background: ").concat(dt("tabmenu.item.hover.background"), ";\n    border-color: ").concat(dt("tabmenu.item.hover.border.color"), ";\n    color: ").concat(dt("tabmenu.item.hover.color"), ";\n}\n\n.p-tabmenu-item:not(.p-tabmenu-item-active):not(.p-disabled):hover .p-tabmenu-item-icon {\n    color: ").concat(dt("tabmenu.item.icon.hover.color"), ";\n}\n\n.p-tabmenu-item-active .p-tabmenu-item-link {\n    background: ").concat(dt("tabmenu.item.active.background"), ";\n    border-color: ").concat(dt("tabmenu.item.active.border.color"), ";\n    color: ").concat(dt("tabmenu.item.active.color"), ";\n}\n\n.p-tabmenu-item-active .p-tabmenu-item-icon {\n    color: ").concat(dt("tabmenu.item.icon.active.color"), ";\n}\n\n.p-tabmenu-active-bar {\n    z-index: 1;\n    display: block;\n    position: absolute;\n    bottom: ").concat(dt("tabmenu.active.bar.bottom"), ";\n    height: ").concat(dt("tabmenu.active.bar.height"), ";\n    background: ").concat(dt("tabmenu.active.bar.background"), ";\n    transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);\n}\n\n.p-tabmenu::-webkit-scrollbar {\n    display: none;\n}\n");
};
var classes = {
  root: "p-tabmenu p-component",
  tablist: "p-tabmenu-tablist",
  item: function item(_ref2) {
    var instance = _ref2.instance, index = _ref2.index, _item = _ref2.item;
    return ["p-tabmenu-item", {
      "p-tabmenu-item-active": instance.d_activeIndex === index,
      "p-disabled": instance.disabled(_item)
    }];
  },
  itemLink: "p-tabmenu-item-link",
  itemIcon: "p-tabmenu-item-icon",
  itemLabel: "p-tabmenu-item-label",
  activeBar: "p-tabmenu-active-bar"
};
var TabMenuStyle = BaseStyle.extend({
  name: "tabmenu",
  theme,
  classes
});
var script$1 = {
  name: "BaseTabMenu",
  "extends": script$1$1,
  props: {
    model: {
      type: Array,
      "default": null
    },
    activeIndex: {
      type: Number,
      "default": 0
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
  style: TabMenuStyle,
  provide: function provide() {
    return {
      $pcTabMenu: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "TabMenu",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["update:activeIndex", "tab-change"],
  data: function data() {
    return {
      d_activeIndex: this.activeIndex
    };
  },
  watch: {
    activeIndex: {
      flush: "post",
      handler: function handler(newValue) {
        this.d_activeIndex = newValue;
        this.updateInkBar();
      }
    }
  },
  mounted: function mounted() {
    var _this = this;
    this.$nextTick(function() {
      _this.updateInkBar();
    });
    var activeItem = this.findActiveItem();
    activeItem && (activeItem.tabIndex = "0");
  },
  updated: function updated() {
    this.updateInkBar();
  },
  methods: {
    getPTOptions: function getPTOptions(key, item2, index) {
      return this.ptm(key, {
        context: {
          item: item2,
          index
        }
      });
    },
    onItemClick: function onItemClick(event, item2, index) {
      if (this.disabled(item2)) {
        event.preventDefault();
        return;
      }
      if (item2.command) {
        item2.command({
          originalEvent: event,
          item: item2
        });
      }
      if (index !== this.d_activeIndex) {
        this.d_activeIndex = index;
        this.$emit("update:activeIndex", this.d_activeIndex);
      }
      this.$emit("tab-change", {
        originalEvent: event,
        index
      });
    },
    onKeydownItem: function onKeydownItem(event, item2, index) {
      switch (event.code) {
        case "ArrowRight": {
          this.navigateToNextItem(event.target);
          event.preventDefault();
          break;
        }
        case "ArrowLeft": {
          this.navigateToPrevItem(event.target);
          event.preventDefault();
          break;
        }
        case "Home": {
          this.navigateToFirstItem(event.target);
          event.preventDefault();
          break;
        }
        case "End": {
          this.navigateToLastItem(event.target);
          event.preventDefault();
          break;
        }
        case "Space":
        case "NumpadEnter":
        case "Enter": {
          this.onItemClick(event, item2, index);
          event.preventDefault();
          break;
        }
        case "Tab": {
          this.onTabKey();
          break;
        }
      }
    },
    navigateToNextItem: function navigateToNextItem(target) {
      var nextItem = this.findNextItem(target);
      nextItem && this.setFocusToMenuitem(target, nextItem);
    },
    navigateToPrevItem: function navigateToPrevItem(target) {
      var prevItem = this.findPrevItem(target);
      prevItem && this.setFocusToMenuitem(target, prevItem);
    },
    navigateToFirstItem: function navigateToFirstItem(target) {
      var firstItem = this.findFirstItem(target);
      firstItem && this.setFocusToMenuitem(target, firstItem);
    },
    navigateToLastItem: function navigateToLastItem(target) {
      var lastItem = this.findLastItem(target);
      lastItem && this.setFocusToMenuitem(target, lastItem);
    },
    findNextItem: function findNextItem(item2) {
      var nextItem = item2.parentElement.nextElementSibling;
      return nextItem ? getAttribute(nextItem, "data-p-disabled") === true ? this.findNextItem(nextItem.children[0]) : nextItem.children[0] : null;
    },
    findPrevItem: function findPrevItem(item2) {
      var prevItem = item2.parentElement.previousElementSibling;
      return prevItem ? getAttribute(prevItem, "data-p-disabled") === true ? this.findPrevItem(prevItem.children[0]) : prevItem.children[0] : null;
    },
    findFirstItem: function findFirstItem() {
      var firstSibling = findSingle(this.$refs.nav, '[data-pc-section="item"][data-p-disabled="false"]');
      return firstSibling ? firstSibling.children[0] : null;
    },
    findLastItem: function findLastItem() {
      var siblings = find(this.$refs.nav, '[data-pc-section="item"][data-p-disabled="false"]');
      return siblings ? siblings[siblings.length - 1].children[0] : null;
    },
    findActiveItem: function findActiveItem() {
      var activeItem = findSingle(this.$refs.nav, '[data-pc-section="item"][data-p-disabled="false"][data-p-active="true"]');
      return activeItem ? activeItem.children[0] : null;
    },
    setFocusToMenuitem: function setFocusToMenuitem(target, focusableItem) {
      target.tabIndex = "-1";
      focusableItem.tabIndex = "0";
      focusableItem.focus();
    },
    onTabKey: function onTabKey() {
      var activeItem = findSingle(this.$refs.nav, '[data-pc-section="item"][data-p-disabled="false"][data-p-active="true"]');
      var focusedItem = findSingle(this.$refs.nav, '[data-pc-section="itemlink"][tabindex="0"]');
      if (focusedItem !== activeItem.children[0]) {
        activeItem && (activeItem.children[0].tabIndex = "0");
        focusedItem.tabIndex = "-1";
      }
    },
    visible: function visible(item2) {
      return typeof item2.visible === "function" ? item2.visible() : item2.visible !== false;
    },
    disabled: function disabled(item2) {
      return typeof item2.disabled === "function" ? item2.disabled() : item2.disabled === true;
    },
    label: function label(item2) {
      return typeof item2.label === "function" ? item2.label() : item2.label;
    },
    updateInkBar: function updateInkBar() {
      var tabs = this.$refs.nav.children;
      var inkHighlighted = false;
      for (var i = 0; i < tabs.length; i++) {
        var tab = tabs[i];
        if (getAttribute(tab, "data-p-active")) {
          this.$refs.inkbar.style.width = getWidth(tab) + "px";
          this.$refs.inkbar.style.left = getOffset(tab).left - getOffset(this.$refs.nav).left + "px";
          inkHighlighted = true;
        }
      }
      if (!inkHighlighted) {
        this.$refs.inkbar.style.width = "0px";
        this.$refs.inkbar.style.left = "0px";
      }
    },
    getMenuItemProps: function getMenuItemProps(item2, index) {
      var _this2 = this;
      return {
        action: mergeProps({
          "class": this.cx("itemLink"),
          tabindex: -1,
          onClick: function onClick($event) {
            return _this2.onItemClick($event, item2, index);
          },
          onKeyDown: function onKeyDown($event) {
            return _this2.onKeydownItem($event, item2, index);
          }
        }, this.getPTOptions("itemLink", item2, index)),
        icon: mergeProps({
          "class": [this.cx("itemIcon"), item2.icon]
        }, this.getPTOptions("itemIcon", item2, index)),
        label: mergeProps({
          "class": this.cx("itemLabel")
        }, this.getPTOptions("itemLabel", item2, index))
      };
    }
  },
  directives: {
    ripple: Ripple
  }
};
var _hoisted_1 = ["aria-labelledby", "aria-label"];
var _hoisted_2 = ["onClick", "onKeydown", "data-p-active", "data-p-disabled"];
var _hoisted_3 = ["href", "target", "aria-label", "aria-disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [createElementVNode("ul", mergeProps({
    ref: "nav",
    "class": _ctx.cx("tablist"),
    role: "menubar",
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-label": _ctx.ariaLabel
  }, _ctx.ptm("tablist")), [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model, function(item2, i) {
    return openBlock(), createElementBlock(Fragment, {
      key: $options.label(item2) + "_" + i.toString()
    }, [$options.visible(item2) ? (openBlock(), createElementBlock("li", mergeProps({
      key: 0,
      ref_for: true,
      ref: "tab",
      "class": [_ctx.cx("item", {
        item: item2,
        index: i
      }), item2["class"]],
      role: "presentation",
      onClick: function onClick($event) {
        return $options.onItemClick($event, item2, i);
      },
      onKeydown: function onKeydown($event) {
        return $options.onKeydownItem($event, item2, i);
      }
    }, $options.getPTOptions("item", item2, i), {
      "data-p-active": $data.d_activeIndex === i,
      "data-p-disabled": $options.disabled(item2)
    }), [!_ctx.$slots.item ? withDirectives((openBlock(), createElementBlock("a", mergeProps({
      key: 0,
      ref_for: true,
      ref: "tabLink",
      role: "menuitem",
      href: item2.url,
      "class": _ctx.cx("itemLink"),
      target: item2.target,
      "aria-label": $options.label(item2),
      "aria-disabled": $options.disabled(item2),
      tabindex: -1
    }, $options.getPTOptions("itemLink", item2, i)), [_ctx.$slots.itemicon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.itemicon), {
      key: 0,
      item: item2,
      "class": normalizeClass(_ctx.cx("itemIcon"))
    }, null, 8, ["item", "class"])) : item2.icon ? (openBlock(), createElementBlock("span", mergeProps({
      key: 1,
      "class": [_ctx.cx("itemIcon"), item2.icon],
      ref_for: true
    }, $options.getPTOptions("itemIcon", item2, i)), null, 16)) : createCommentVNode("", true), createElementVNode("span", mergeProps({
      "class": _ctx.cx("itemLabel"),
      ref_for: true
    }, $options.getPTOptions("itemLabel", item2, i)), toDisplayString($options.label(item2)), 17)], 16, _hoisted_3)), [[_directive_ripple]]) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.item), {
      key: 1,
      item: item2,
      index: i,
      active: i === $data.d_activeIndex,
      label: $options.label(item2),
      props: $options.getMenuItemProps(item2, i)
    }, null, 8, ["item", "index", "active", "label", "props"]))], 16, _hoisted_2)) : createCommentVNode("", true)], 64);
  }), 128)), createElementVNode("li", mergeProps({
    ref: "inkbar",
    role: "none",
    "class": _ctx.cx("activeBar")
  }, _ctx.ptm("activeBar")), null, 16)], 16, _hoisted_1)], 16);
}
script.render = render;
const _sfc_main$1 = {
  data() {
    return {
      showPasswordFields: false,
      passwords: {
        oldPassword: "",
        newPassword: "",
        confirmNewPassword: ""
      },
      selectedFilter: "All",
      filters: ["All", "Pending", "Delivered", "Cancelled"],
      removeItem: false,
      loadingAdd: false,
      home: {
        icon: "pi pi-home"
        // icon: "pi pi-user",
      },
      items: [
        { label: "Home", route: "/" },
        { label: "My Account", route: "/profile" }
      ],
      activeSection: "profile",
      // Default section to display
      user: {
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        phoneNumber: "",
        createdAt: ""
      },
      orders: [],
      wishlist: [],
      loading: false,
      loadingSave: false
    };
  },
  computed: {
    filteredOrders() {
      if (this.selectedFilter === "All") return this.orders;
      return this.orders.filter((order) => order.status === this.selectedFilter);
    }
  },
  async mounted() {
    await this.getUserData();
    await this.getWishList();
    await this.getOrders();
  },
  methods: {
    async updatePassword() {
      this.loading = true;
      const userStore = useUserStore();
      try {
        const password = {
          newPassword: this.passwords.newPassword,
          oldPassword: this.passwords.oldPassword,
          confirmNewPassword: this.passwords.confirmNewPassword
        };
        const response = await userStore.updatePassword(password);
        this.$toast.add({
          severity: "success",
          summary: response.data.message + "Please login to continue",
          group: "br",
          life: 3e3
        });
        this.loading = false;
        userStore.logout();
      } catch (err) {
        this.loading = false;
        this.$toast.add({
          severity: "error",
          summary: err,
          group: "br",
          life: 3e3
        });
      }
    },
    async updateUser() {
      const userStore = useUserStore();
      try {
        this.loadingSave = true;
        const user = {
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          email: this.user.email,
          phoneNumber: this.user.phoneNumber
        };
        const response = await userStore.updateUser(user, this.user.id);
        this.$toast.add({
          severity: "success",
          summary: "Details updated successfully",
          group: "br",
          life: 3e3
        });
        this.loadingSave = false;
      } catch (err) {
        this.loadingSave = false;
        this.$toast.add({
          severity: "error",
          summary: err,
          group: "br",
          life: 3e3
        });
      }
    },
    getProductImage(orderItem) {
      var _a, _b;
      if (((_b = (_a = orderItem == null ? void 0 : orderItem.productModel) == null ? void 0 : _a.images) == null ? void 0 : _b.length) > 0) {
        return orderItem.productModel.images[0].optimizeUrl;
      }
      console.log("Using fallback image");
      return "https://media.istockphoto.com/id/1410977641/photo/high-technology-security-monitoring-system-cctv-camera.jpg?s=612x612&w=0&k=20&c=ueVgTwwn5Xq-S0Tz6Wfj9sILEubWxURkzkvVrzpSYRI=";
    },
    formattedPrice(price) {
      const { $formatPrice } = useNuxtApp();
      return $formatPrice(price);
    },
    formatDate(date) {
      return new Date(date).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric"
      });
    },
    async getOrders() {
      const productStore = useProductStore();
      const orders = await productStore.getOrders();
      this.orders = orders;
    },
    async removeWish(id) {
      const { $axios } = useNuxtApp();
      this.removeItem = true;
      try {
        const response = await $axios.post(
          `/product/wishlist/remove/${productID}`
        );
        this.removeItem = false;
      } catch (error) {
        this.removeItem = false;
      }
    },
    async addToCart(product) {
      const { $axios } = useNuxtApp();
      this.loadingAdd = true;
      setTimeout(() => {
        this.loadingAdd = false;
      }, 2e3);
      try {
        const body = {
          productId: product.id,
          quantity: 1
        };
        const response = await $axios.post(`/product/cart/add`, body);
        this.loadingAdd = false;
      } catch (error) {
        this.loadingAdd = false;
      }
    },
    async getWishList() {
      const { $axios } = useNuxtApp();
      try {
        const response = await $axios.get("/product/wishlist");
        this.wishlist = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async getUserData() {
      const userStore = useUserStore();
      this.user = userStore.user;
    },
    logout() {
      const userStore = useUserStore();
      userStore.logout();
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Button = script$2;
  const _component_Toast = script$3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto" }, _attrs))}><div class="flex flex-col md:flex-row"><main class="w-full bg-white border p-4">`);
  if ($data.activeSection === "profile") {
    _push(`<div><h2 class="text-xl font-bold mb-4 text-red-500">Edit Your Profile</h2><form><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div><label>First Name</label><input type="text"${ssrRenderAttr("value", $data.user.firstName)} class="border w-full p-2 mt-1"></div><div><label>Last Name</label><input type="text"${ssrRenderAttr("value", $data.user.lastName)} class="border w-full p-2 mt-1"></div><div><label>Email</label><input type="email"${ssrRenderAttr("value", $data.user.email)} class="border w-full p-2 mt-1"></div><div><label>Phone Number</label><input type="text"${ssrRenderAttr("value", $data.user.phoneNumber)} class="border w-full p-2 mt-1"></div></div><div class="flex justify-between mt-6"><button type="button" class="border px-4 py-2 w-1/2 md:w-auto"> Cancel </button>`);
    _push(ssrRenderComponent(_component_Button, {
      class: "bg-primary text-white py-3 rounded hover:bg-secondary mt-4",
      type: "submit",
      label: "Save Changes",
      loading: $data.loadingSave
    }, null, _parent));
    _push(`</div><div class="mt-6"><button type="button" class="bg-secondary text-white px-4 py-2 w-full md:w-auto"> Change Password </button>`);
    if ($data.showPasswordFields) {
      _push(`<div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4"><div><label>Old Password</label><input type="password"${ssrRenderAttr("value", $data.passwords.oldPassword)} class="border w-full p-2 mt-1"></div><div><label>New Password</label><input type="password"${ssrRenderAttr("value", $data.passwords.newPassword)} class="border w-full p-2 mt-1"></div><div><label>Confirm Password</label><input type="password"${ssrRenderAttr("value", $data.passwords.confirmNewPassword)} class="border w-full p-2 mt-1"></div><div class="col-span-1 md:col-span-2 flex justify-end mt-4">`);
      _push(ssrRenderComponent(_component_Button, {
        class: "bg-primary text-white py-3 rounded hover:bg-secondary mt-4",
        type: "button",
        label: "Update Password",
        loading: $data.loading,
        onClick: $options.updatePassword
      }, null, _parent));
      _push(`</div></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></form></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.activeSection === "paymentOptions") {
    _push(`<div><h2 class="text-xl font-bold mb-4 text-red-500">Payment Method</h2><div class="mt-4 flex flex-col md:flex-row items-center md:items-start"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/M-PESA_LOGO-01.svg/512px-M-PESA_LOGO-01.svg.png?20191120100524" class="w-1/2 md:w-1/4" alt="Mpesa Logo"><div class="ml-4"><h3 class="font-bold mb-2">Mpesa</h3><p class="text-gray-600">Mobile Number: ${ssrInterpolate($data.user.phoneNumber)}</p></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.activeSection === "orders") {
    _push(`<div><h2 class="text-xl font-bold mb-4 text-red-500">My Orders</h2><div class="p-4 bg-gray-100"><div class="flex space-x-4 mb-4 overflow-x-auto"><!--[-->`);
    ssrRenderList($data.filters, (filter) => {
      _push(`<button class="${ssrRenderClass([
        "px-4 py-2 rounded-full border whitespace-nowrap",
        $data.selectedFilter === filter ? "bg-red-100 text-red-600" : "bg-white text-gray-600"
      ])}">${ssrInterpolate(filter)}</button>`);
    });
    _push(`<!--]--></div><!--[-->`);
    ssrRenderList($options.filteredOrders, (order, index) => {
      var _a, _b;
      _push(`<div class="bg-white shadow-md rounded-lg mb-4 p-4"><div class="flex justify-between items-center"><span class="${ssrRenderClass([{
        "bg-yellow-200 text-yellow-800": order.status === "Pending",
        "bg-green-100 text-green-600": order.status === "Delivered",
        "bg-gray-300 text-gray-700": order.status === "Cancelled"
      }, "px-3 py-1 text-xs rounded-full"])}">${ssrInterpolate(order.status)}</span><span class="text-sm text-gray-500">${ssrInterpolate($options.formatDate(order.createdAt))}</span></div><div class="mt-2 flex flex-col md:flex-row items-center md:items-start"><img${ssrRenderAttr(
        "src",
        (_b = (_a = order.orderItems[0]) == null ? void 0 : _a.productModel.images[0]) == null ? void 0 : _b.optimizeUrl
      )} alt="Product Image" class="w-16 h-16 rounded-md object-cover"><div class="ml-0 md:ml-4 text-center md:text-left"><p class="text-red-600 font-semibold"> Order ID: ${ssrInterpolate(order.id.slice(0, 8))}</p><p class="text-gray-700">${ssrInterpolate(order.orderItems[0].productModel.name)} `);
      if (order.orderItems.length > 1) {
        _push(`<span class="text-blue-600"> &amp; ${ssrInterpolate(order.orderItems.length - 1)} more items</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</p><p class="text-gray-800 font-semibold mt-1"> KES ${ssrInterpolate($options.formattedPrice(order.total))}</p></div></div></div>`);
    });
    _push(`<!--]--></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</main></div>`);
  _push(ssrRenderComponent(_component_Toast, {
    position: "bottom-right",
    group: "br"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/profile/Profile.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Profile = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0 = "" + buildAssetsURL("no-order.CkeRJY7F.png");
const _sfc_main = {
  data() {
    return {
      orderDetails: {},
      detailedView: false,
      selectedFilter: "All",
      filters: ["All", "Awaiting Payment", "Pending", "Delivered", "Cancelled"],
      removeItem: false,
      loadingAdd: false,
      home: {
        icon: "pi pi-home"
        // icon: "pi pi-user",
      },
      items: [
        { label: "Home", route: "/" },
        { label: "My Account", route: "/profile" }
      ],
      activeSection: "profile",
      // Default section to display
      user: {
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        phoneNumber: "",
        createdAt: ""
      },
      orders: [],
      wishlist: [],
      fetching: false
    };
  },
  computed: {
    filteredOrders() {
      if (this.selectedFilter === "All") return this.orders;
      return this.orders.filter((order) => order.status === this.selectedFilter);
    }
  },
  async mounted() {
    await this.getUserData();
    await this.getWishList();
    await this.getOrders();
  },
  methods: {
    async printOrder() {
      const orderElement = (void 0).querySelector(".order-details");
      if (!orderElement) return;
      const canvas = await html2canvas(orderElement, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 190;
      const pageHeight = 295;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;
      pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      pdf.save(`Order_${this.orderDetails.id.slice(0, 8)}.pdf`);
    },
    statusStyle(status) {
      switch (status.toLowerCase()) {
        case "awaiting payment":
          return { color: "#FFA500", icon: "pi pi-hourglass" };
        case "pending":
          return { color: "bg-primary", icon: "pi pi-clock" };
        case "delivered":
          return { color: "#28A745", icon: "pi pi-check" };
        case "cancelled":
          return { color: "#DC3545", icon: "pi pi-times" };
        default:
          return { color: "#6C757D", icon: "pi pi-info-circle" };
      }
    },
    async viewOrderDetails(order) {
      this.fetching = true;
      const productStore = useProductStore();
      try {
        const response = await productStore.getOrderDetails(order);
        console.log("Order details:", response);
        const data2 = response.data;
        this.orderDetails = data2;
        this.detailedView = true;
        this.fetching = false;
      } catch (error) {
        this.fetching = false;
        console.error("Error fetching order details:", error);
      }
    },
    getProductImage(orderItem) {
      var _a, _b, _c;
      console.log("Order Item:", orderItem);
      if (((_b = (_a = orderItem == null ? void 0 : orderItem.productModel) == null ? void 0 : _a.images) == null ? void 0 : _b.length) > 0) {
        console.log(
          "Image found:",
          (_c = orderItem.productModel.images[0]) == null ? void 0 : _c.optimizeUrl
        );
        return orderItem.productModel.images[0].optimizeUrl;
      }
      console.log("Using fallback image");
      return "https://media.istockphoto.com/id/1410977641/photo/high-technology-security-monitoring-system-cctv-camera.jpg?s=612x612&w=0&k=20&c=ueVgTwwn5Xq-S0Tz6Wfj9sILEubWxURkzkvVrzpSYRI=";
    },
    formattedPrice(price) {
      const { $formatPrice } = useNuxtApp();
      return $formatPrice(price);
    },
    formatDate(date) {
      return new Date(date).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric"
      });
    },
    async getOrders() {
      this.fetching = true;
      const productStore = useProductStore();
      const orders = await productStore.getOrders();
      this.fetching = false;
      this.orders = orders;
    },
    async removeWish(id) {
      const { $axios } = useNuxtApp();
      this.removeItem = true;
      try {
        const response = await $axios.post(
          `/product/wishlist/remove/${productID}`
        );
        this.removeItem = false;
      } catch (error) {
        this.removeItem = false;
      }
    },
    async addToCart(product) {
      const { $axios } = useNuxtApp();
      this.loadingAdd = true;
      setTimeout(() => {
        this.loadingAdd = false;
      }, 2e3);
      try {
        const body = {
          productId: product.id,
          quantity: 1
        };
        const response = await $axios.post(`/product/cart/add`, body);
        this.loadingAdd = false;
      } catch (error) {
        this.loadingAdd = false;
      }
    },
    async getWishList() {
      const { $axios } = useNuxtApp();
      try {
        const response = await $axios.get("/product/wishlist");
        this.wishlist = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async getUserData() {
      const userStore = useUserStore();
      this.user = userStore.user;
    },
    logout() {
      const userStore = useUserStore();
      userStore.logout();
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Divider = script$4;
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}>`);
  if (!$data.detailedView && !$data.fetching) {
    _push(`<div class="flex flex-col"><div class="p-4"><div class="flex space-x-4 mb-4 overflow-x-auto"><!--[-->`);
    ssrRenderList($data.filters, (filter) => {
      _push(`<button class="${ssrRenderClass([
        "px-4 py-2 rounded-full border whitespace-nowrap",
        $data.selectedFilter === filter ? "bg-red-100 text-red-600" : "bg-white text-gray-600"
      ])}">${ssrInterpolate(filter)}</button>`);
    });
    _push(`<!--]--></div>`);
    _push(ssrRenderComponent(_component_Divider, null, null, _parent));
    if ($options.filteredOrders.length > 0) {
      _push(`<div class="max-h-[600px] overflow-y-auto"><!--[-->`);
      ssrRenderList($options.filteredOrders, (order, index) => {
        var _a, _b;
        _push(`<div class="border rounded-lg mb-4 p-4 cursor-pointer"><div class="flex justify-between items-center"><span class="${ssrRenderClass([{
          "bg-yellow-400 text-yellow-800": order.status === "Pending",
          "bg-blue-400 text-white": order.status === "Awaiting Payment",
          "bg-green-100 text-green-600": order.status === "Delivered",
          "bg-gray-300 text-gray-700": order.status === "Cancelled"
        }, "px-3 py-1 text-xs rounded-full"])}">${ssrInterpolate(order.status)}</span><span class="text-sm text-gray-500">${ssrInterpolate($options.formatDate(order.createdAt))}</span></div><div class="mt-2 flex flex-col md:flex-row items-center md:items-start"><img${ssrRenderAttr("src", (_b = (_a = order.orderItems[0]) == null ? void 0 : _a.productModel.images[0]) == null ? void 0 : _b.uploadUrl)} alt="Product Image" class="w-16 h-16 rounded-md object-cover"><div class="ml-0 md:ml-4 text-center md:text-left"><p class="text-red-600 font-semibold"> Order ID: ${ssrInterpolate(order.id.slice(0, 8))}</p><p class="text-gray-700">${ssrInterpolate(order.orderItems[0].productModel.name)} `);
        if (order.orderItems.length > 1) {
          _push(`<span class="text-blue-600"> &amp; ${ssrInterpolate(order.orderItems.length - 1)} more items </span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</p><p class="text-gray-800 font-semibold mt-1"> Ksh ${ssrInterpolate($options.formattedPrice(order.total))}</p></div></div></div>`);
      });
      _push(`<!--]--></div>`);
    } else {
      _push(`<div class="flex flex-col items-center justify-center min-h-[50vh] text-center"><img${ssrRenderAttr("src", _imports_0)} alt="Empty Cart" class="w-40 h-40 mb-4"><h2 class="text-xl font-semibold text-gray-700">No Orders!</h2><p class="text-gray-500 text-sm mb-4"> Browse our categories and discover our best deals! </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/dashboard" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="bg-primary hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded"${_scopeId}> Start Shopping </button>`);
          } else {
            return [
              createVNode("button", { class: "bg-primary hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded" }, " Start Shopping ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    }
    _push(`</div></div>`);
  } else {
    _push(`<div>`);
    if ($data.fetching) {
      _push(`<div><div class="relative flex justify-center items-center h-96"><div class="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-100"></div><img src="https://freelancerdxb.s3.eu-central-1.amazonaws.com/documents/image%20%285%29__5d197f13926ac20a20a6f301d00ce69b516f83eb.png" class="rounded-full h-24 w-24"></div></div>`);
    } else {
      _push(`<div><div class="flex justify-between"><a class="p-button-text text-primary hover:text-white cursor-pointer flex items-center" style="${ssrRenderStyle({ "color": "var(--secondary-color) !important" })}"><i class="pi pi-arrow-left pr-2"></i> Back to Orders </a><button class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"><i class="pi pi-print"></i> Print Order </button></div><div class="p-6 bg-white rounded-lg order-details"><div class="flex justify-between"><h2 class="text-lg md:text-2xl font-semibold">Order Details</h2><div class="flex items-center gap-2"><p class="font-semibold">Status</p><span class="${ssrRenderClass([{
        "bg-yellow-400 text-yellow-800": $data.orderDetails.status === "Pending",
        "bg-yellow-400 text-blue-400": $data.orderDetails.status === "Awaiting Payment",
        "bg-green-100 text-green-600": $data.orderDetails.status === "Delivered",
        "bg-gray-300 text-gray-700": $data.orderDetails.status === "Cancelled"
      }, "px-2 py-0.5 md:px-3 md:py-1 text-xs rounded-full"])}">${ssrInterpolate($data.orderDetails.status)}</span></div></div>`);
      _push(ssrRenderComponent(_component_Divider, null, null, _parent));
      _push(`<div class="grid grid-cols-1 md:grid-cols-4 gap-4"><div><p class="font-semibold">Order ID</p><p class="font-mono">${ssrInterpolate($data.orderDetails.id.slice(0, 8))}</p></div><div><p class="font-semibold">Customer Name</p><p class="font-mono">${ssrInterpolate($data.orderDetails.first_name)} ${ssrInterpolate($data.orderDetails.last_name)}</p></div><div><p class="font-semibold">Company Name</p><p>${ssrInterpolate($data.orderDetails.company_name || "N/A")}</p></div><div><p class="font-semibold">Address</p><p class="font-mono">${ssrInterpolate($data.orderDetails.street_address)}, ${ssrInterpolate($data.orderDetails.town)}</p></div><div><p class="font-semibold">Phone Number</p><p class="font-mono">${ssrInterpolate($data.orderDetails.phone_number)}</p></div><div><p class="font-semibold">Email</p><p class="font-mono">${ssrInterpolate($data.orderDetails.email)}</p></div><div><p class="font-semibold">Order Price</p><p class="font-mono"> Ksh ${ssrInterpolate($options.formattedPrice($data.orderDetails.orderPrice))}</p></div><div><p class="font-semibold">VAT</p><p class="font-mono"> Ksh ${ssrInterpolate($options.formattedPrice($data.orderDetails.vat))}</p></div><div><p class="font-semibold">Total</p><p class="font-mono"> Ksh ${ssrInterpolate($options.formattedPrice($data.orderDetails.total))}</p></div><div><p class="font-semibold">Order Date</p><p class="font-mono">${ssrInterpolate($options.formatDate($data.orderDetails.createdAt))}</p></div></div>`);
      _push(ssrRenderComponent(_component_Divider, { class: "my-4" }, null, _parent));
      _push(`<h3 class="text-xl font-semibold mb-2">Order Items</h3><div class="space-y-4"><!--[-->`);
      ssrRenderList($data.orderDetails.orderItems, (item2, index) => {
        var _a, _b;
        _push(`<div class="border rounded-lg p-4"><div class="flex items-center space-x-4">${ssrInterpolate(item2.productModel.images)} <img${ssrRenderAttr(
          "src",
          ((_b = (_a = item2.productModel.images) == null ? void 0 : _a[0]) == null ? void 0 : _b.uploadUrl) || "https://via.placeholder.com/100"
        )} alt="Product Image" class="w-16 h-16 rounded-md object-cover"><div><p class="text-lg font-semibold">${ssrInterpolate(item2.productModel.name)}</p><p class="text-gray-500">${ssrInterpolate(item2.productModel.description)}</p><p class="font-semibold"> Price: Ksh ${ssrInterpolate($options.formattedPrice(item2.productModel.price))}</p><p class="font-semibold">Quantity: ${ssrInterpolate(item2.quantity)}</p></div></div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    }
    _push(`</div>`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/profile/Orders.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Orders = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Orders as O, Profile as P, script as s };
//# sourceMappingURL=Orders-1-5Hua_U.mjs.map
