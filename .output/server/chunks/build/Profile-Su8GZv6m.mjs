import { s as script$3 } from './index-BgtDrjLh.mjs';
import { a as script$1$1 } from './index-BjfqnR8d.mjs';
import { B as BaseStyle, _ as _export_sfc, a as useNuxtApp, b as useProductStore, u as useUserStore } from './server.mjs';
import { resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, useSSRContext, createElementBlock, resolveDynamicComponent, normalizeClass, createCommentVNode, createElementVNode, Fragment, renderList, renderSlot } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import '@primeuix/utils/object';
import '@primeuix/styled';
import '@primeuix/utils/dom';
import '@primeuix/utils/uuid';
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
import '@primeuix/utils/eventbus';
import '@primeuix/utils';
import 'deep-pick-omit';
import 'axios';

var theme = function theme2(_ref) {
  var dt = _ref.dt;
  return "\n.p-breadcrumb {\n    background: ".concat(dt("breadcrumb.background"), ";\n    padding: ").concat(dt("breadcrumb.padding"), ";\n    overflow-x: auto;\n}\n\n.p-breadcrumb-list {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n    display: flex;\n    align-items: center;\n    flex-wrap: nowrap;\n    gap: ").concat(dt("breadcrumb.gap"), ";\n}\n\n.p-breadcrumb-separator {\n    display: flex;\n    align-items: center;\n    color: ").concat(dt("breadcrumb.separator.color"), ";\n}\n\n.p-breadcrumb-separator-icon:dir(rtl) {\n    transform: rotate(180deg);\n}\n\n.p-breadcrumb::-webkit-scrollbar {\n    display: none;\n}\n\n.p-breadcrumb-item-link {\n    text-decoration: none;\n    display: flex;\n    align-items: center;\n    gap: ").concat(dt("breadcrumb.item.gap"), ";\n    transition: background ").concat(dt("breadcrumb.transition.duration"), ", color ").concat(dt("breadcrumb.transition.duration"), ", outline-color ").concat(dt("breadcrumb.transition.duration"), ", box-shadow ").concat(dt("breadcrumb.transition.duration"), ";\n    border-radius: ").concat(dt("breadcrumb.item.border.radius"), ";\n    outline-color: transparent;\n    color: ").concat(dt("breadcrumb.item.color"), ";\n}\n\n.p-breadcrumb-item-link:focus-visible {\n    box-shadow: ").concat(dt("breadcrumb.item.focus.ring.shadow"), ";\n    outline: ").concat(dt("breadcrumb.item.focus.ring.width"), " ").concat(dt("breadcrumb.item.focus.ring.style"), " ").concat(dt("breadcrumb.item.focus.ring.color"), ";\n    outline-offset: ").concat(dt("breadcrumb.item.focus.ring.offset"), ";\n}\n\n.p-breadcrumb-item-link:hover .p-breadcrumb-item-label {\n    color: ").concat(dt("breadcrumb.item.hover.color"), ";\n}\n\n.p-breadcrumb-item-label {\n    transition: inherit;\n}\n\n.p-breadcrumb-item-icon {\n    color: ").concat(dt("breadcrumb.item.icon.color"), ";\n    transition: inherit;\n}\n\n.p-breadcrumb-item-link:hover .p-breadcrumb-item-icon {\n    color: ").concat(dt("breadcrumb.item.icon.hover.color"), ";\n}\n");
};
var classes = {
  root: "p-breadcrumb p-component",
  list: "p-breadcrumb-list",
  homeItem: "p-breadcrumb-home-item",
  separator: "p-breadcrumb-separator",
  separatorIcon: "p-breadcrumb-separator-icon",
  item: function item(_ref2) {
    var instance = _ref2.instance;
    return ["p-breadcrumb-item", {
      "p-disabled": instance.disabled()
    }];
  },
  itemLink: "p-breadcrumb-item-link",
  itemIcon: "p-breadcrumb-item-icon",
  itemLabel: "p-breadcrumb-item-label"
};
var BreadcrumbStyle = BaseStyle.extend({
  name: "breadcrumb",
  theme,
  classes
});
var script$2 = {
  name: "BaseBreadcrumb",
  "extends": script$1$1,
  props: {
    model: {
      type: Array,
      "default": null
    },
    home: {
      type: null,
      "default": null
    }
  },
  style: BreadcrumbStyle,
  provide: function provide() {
    return {
      $pcBreadcrumb: this,
      $parentInstance: this
    };
  }
};
var script$1 = {
  name: "BreadcrumbItem",
  hostName: "Breadcrumb",
  "extends": script$1$1,
  props: {
    item: null,
    templates: null,
    index: null
  },
  methods: {
    onClick: function onClick(event) {
      if (this.item.command) {
        this.item.command({
          originalEvent: event,
          item: this.item
        });
      }
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
    isCurrentUrl: function isCurrentUrl() {
      var _this$item = this.item, to = _this$item.to, url = _this$item.url;
      var lastPath = "";
      return to === lastPath || url === lastPath ? "page" : void 0;
    }
  },
  computed: {
    ptmOptions: function ptmOptions() {
      return {
        context: {
          item: this.item,
          index: this.index
        }
      };
    },
    getMenuItemProps: function getMenuItemProps() {
      var _this = this;
      return {
        action: mergeProps({
          "class": this.cx("itemLink"),
          "aria-current": this.isCurrentUrl(),
          onClick: function onClick2($event) {
            return _this.onClick($event);
          }
        }, this.ptm("itemLink", this.ptmOptions)),
        icon: mergeProps({
          "class": [this.cx("icon"), this.item.icon]
        }, this.ptm("icon", this.ptmOptions)),
        label: mergeProps({
          "class": this.cx("label")
        }, this.ptm("label", this.ptmOptions))
      };
    }
  }
};
var _hoisted_1 = ["href", "target", "aria-current"];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return $options.visible() ? (openBlock(), createElementBlock("li", mergeProps({
    key: 0,
    "class": [_ctx.cx("item"), $props.item["class"]]
  }, _ctx.ptm("item", $options.ptmOptions)), [!$props.templates.item ? (openBlock(), createElementBlock("a", mergeProps({
    key: 0,
    href: $props.item.url || "#",
    "class": _ctx.cx("itemLink"),
    target: $props.item.target,
    "aria-current": $options.isCurrentUrl(),
    onClick: _cache[0] || (_cache[0] = function() {
      return $options.onClick && $options.onClick.apply($options, arguments);
    })
  }, _ctx.ptm("itemLink", $options.ptmOptions)), [$props.templates && $props.templates.itemicon ? (openBlock(), createBlock(resolveDynamicComponent($props.templates.itemicon), {
    key: 0,
    item: $props.item,
    "class": normalizeClass(_ctx.cx("itemIcon", $options.ptmOptions))
  }, null, 8, ["item", "class"])) : $props.item.icon ? (openBlock(), createElementBlock("span", mergeProps({
    key: 1,
    "class": [_ctx.cx("itemIcon"), $props.item.icon]
  }, _ctx.ptm("itemIcon", $options.ptmOptions)), null, 16)) : createCommentVNode("", true), $props.item.label ? (openBlock(), createElementBlock("span", mergeProps({
    key: 2,
    "class": _ctx.cx("itemLabel")
  }, _ctx.ptm("itemLabel", $options.ptmOptions)), toDisplayString($options.label()), 17)) : createCommentVNode("", true)], 16, _hoisted_1)) : (openBlock(), createBlock(resolveDynamicComponent($props.templates.item), {
    key: 1,
    item: $props.item,
    label: $options.label(),
    props: $options.getMenuItemProps
  }, null, 8, ["item", "label", "props"]))], 16)) : createCommentVNode("", true);
}
script$1.render = render$1;
var script = {
  name: "Breadcrumb",
  "extends": script$2,
  inheritAttrs: false,
  components: {
    BreadcrumbItem: script$1,
    ChevronRightIcon: script$3
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_BreadcrumbItem = resolveComponent("BreadcrumbItem");
  var _component_ChevronRightIcon = resolveComponent("ChevronRightIcon");
  return openBlock(), createElementBlock("nav", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [createElementVNode("ol", mergeProps({
    "class": _ctx.cx("list")
  }, _ctx.ptm("list")), [_ctx.home ? (openBlock(), createBlock(_component_BreadcrumbItem, mergeProps({
    key: 0,
    item: _ctx.home,
    "class": _ctx.cx("homeItem"),
    templates: _ctx.$slots,
    pt: _ctx.pt,
    unstyled: _ctx.unstyled
  }, _ctx.ptm("homeItem")), null, 16, ["item", "class", "templates", "pt", "unstyled"])) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model, function(item2, i) {
    return openBlock(), createElementBlock(Fragment, {
      key: item2.label + "_" + i
    }, [_ctx.home || i !== 0 ? (openBlock(), createElementBlock("li", mergeProps({
      key: 0,
      "class": _ctx.cx("separator"),
      ref_for: true
    }, _ctx.ptm("separator")), [renderSlot(_ctx.$slots, "separator", {}, function() {
      return [createVNode(_component_ChevronRightIcon, mergeProps({
        "aria-hidden": "true",
        "class": _ctx.cx("separatorIcon"),
        ref_for: true
      }, _ctx.ptm("separatorIcon")), null, 16, ["class"])];
    })], 16)) : createCommentVNode("", true), createVNode(_component_BreadcrumbItem, {
      item: item2,
      index: i,
      templates: _ctx.$slots,
      pt: _ctx.pt,
      unstyled: _ctx.unstyled
    }, null, 8, ["item", "index", "templates", "pt", "unstyled"])], 64);
  }), 128))], 16)], 16);
}
script.render = render;
const _sfc_main = {
  data() {
    return {
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
      wishlist: []
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
    updateUser() {
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
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Breadcrumb = script;
  const _component_router_link = resolveComponent("router-link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto my-10 px-4" }, _attrs))}><div class="breadcrumb text-sm mb-4 card"><div class="card flex">`);
  _push(ssrRenderComponent(_component_Breadcrumb, {
    home: $data.home,
    model: $data.items
  }, {
    item: withCtx(({ item: item2, props }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (item2.route) {
          _push2(ssrRenderComponent(_component_router_link, {
            to: item2.route,
            custom: ""
          }, {
            default: withCtx(({ href, navigate }, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<a${ssrRenderAttrs(mergeProps({ href }, props.action))}${_scopeId2}><span class="${ssrRenderClass([item2.icon, "text-color"])}"${_scopeId2}></span><span class="text-primary font-semibold"${_scopeId2}>${ssrInterpolate(item2.label)}</span></a>`);
              } else {
                return [
                  createVNode("a", mergeProps({ href }, props.action, { onClick: navigate }), [
                    createVNode("span", {
                      class: [item2.icon, "text-color"]
                    }, null, 2),
                    createVNode("span", { class: "text-primary font-semibold" }, toDisplayString(item2.label), 1)
                  ], 16, ["href", "onClick"])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        } else {
          _push2(`<a${ssrRenderAttrs(mergeProps({
            href: item2.url,
            target: item2.target
          }, props.action))}${_scopeId}><span class="text-surface-700 dark:text-surface-0"${_scopeId}>${ssrInterpolate(item2.label)}</span></a>`);
        }
      } else {
        return [
          item2.route ? (openBlock(), createBlock(_component_router_link, {
            key: 0,
            to: item2.route,
            custom: ""
          }, {
            default: withCtx(({ href, navigate }) => [
              createVNode("a", mergeProps({ href }, props.action, { onClick: navigate }), [
                createVNode("span", {
                  class: [item2.icon, "text-color"]
                }, null, 2),
                createVNode("span", { class: "text-primary font-semibold" }, toDisplayString(item2.label), 1)
              ], 16, ["href", "onClick"])
            ]),
            _: 2
          }, 1032, ["to"])) : (openBlock(), createBlock("a", mergeProps({
            key: 1,
            href: item2.url,
            target: item2.target
          }, props.action), [
            createVNode("span", { class: "text-surface-700 dark:text-surface-0" }, toDisplayString(item2.label), 1)
          ], 16, ["href", "target"]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><button class="md:hidden bg-red-500 text-white px-4 py-2 rounded mb-4">${ssrInterpolate(_ctx.sidebarOpen ? "Close Menu" : "Menu")}</button><div class="flex flex-col md:flex-row"><aside class="${ssrRenderClass([
    "md:w-1/4 w-full bg-white shadow-md md:shadow-none md:block fixed md:relative top-0 left-0 h-full md:h-auto transform transition-transform duration-300 ease-in-out",
    _ctx.sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
  ])}"><ul class="space-y-2 text-gray-600 pt-2 p-4"><li class="font-bold text-red-500">Manage My Account</li><li class="cursor-pointer"> Profile </li><li class="cursor-pointer"> Payment Options </li><li class="font-bold text-red-500 mt-4 cursor-pointer"> My Orders </li></ul><button class="bg-red-500 text-white px-4 py-2 rounded w-full mt-4 md:mt-12"> Logout </button></aside><main class="md:w-3/4 w-full bg-white border p-4">`);
  if ($data.activeSection === "profile") {
    _push(`<div><h2 class="text-xl font-bold mb-4 text-red-500">Edit Your Profile</h2><form><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div><label>First Name</label><input type="text"${ssrRenderAttr("value", $data.user.firstName)} class="border w-full p-2 mt-1"></div><div><label>Last Name</label><input type="text"${ssrRenderAttr("value", $data.user.lastName)} class="border w-full p-2 mt-1"></div><div><label>Email</label><input type="email"${ssrRenderAttr("value", $data.user.email)} class="border w-full p-2 mt-1"></div><div><label>Phone Number</label><input type="text"${ssrRenderAttr("value", $data.user.phoneNumber)} class="border w-full p-2 mt-1"></div></div><div class="flex justify-between mt-6"><button class="border px-4 py-2 w-1/2 md:w-auto">Cancel</button><button class="bg-red-500 text-white px-4 py-2 w-1/2 md:w-auto"> Save Changes </button></div></form></div>`);
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
  _push(`</main></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Profile = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Profile as default };
//# sourceMappingURL=Profile-Su8GZv6m.mjs.map
