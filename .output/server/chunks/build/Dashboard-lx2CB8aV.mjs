import { _ as _sfc_main$5 } from './Footer-D3jzFek2.mjs';
import { s as script$3 } from './index-CEOEMxBM.mjs';
import { useSSRContext, watch, ref, computed, resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createElementBlock, resolveDynamicComponent, createCommentVNode, renderSlot, createElementVNode } from 'vue';
import { F as FlashCard, _ as _sfc_main$4, a as _sfc_main$3, T as TopCard, b as Footer, c as _sfc_main$2, d as _imports_0 } from './empty-CM-fiSxr.mjs';
import { a as script$1$1 } from './index-BjfqnR8d.mjs';
import { B as BaseStyle, _ as _export_sfc, a as useNuxtApp, u as useUserStore, c as useToast, b as useProductStore } from './server.mjs';
import { s as script$2 } from './index-CzrJQldg.mjs';
import { useRouter } from 'vue-router';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderClass } from 'vue/server-renderer';
import './nuxt-link-BYB1KAeo.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import '@primevue/core/base/style';
import '@primeuix/utils/object';
import '@primeuix/styled';
import 'node:url';
import './index-BdVaJSFC.mjs';
import '@primeuix/utils/dom';
import '@primeuix/utils/uuid';
import './index-DJ-ZgwLv.mjs';
import '@primeuix/utils/zindex';
import './index-CPSBx0zQ.mjs';
import './index-C-aCq1t3.mjs';
import './index-DWifVPgv.mjs';
import '@primeuix/utils';
import './index-DR30ug9d.mjs';
import 'pinia';
import 'unhead';
import '@unhead/shared';
import '@primeuix/utils/eventbus';
import 'deep-pick-omit';
import 'axios';
import './index-B0KNiV_3.mjs';
import './index-BgtDrjLh.mjs';

var theme = function theme2(_ref) {
  var dt = _ref.dt;
  return "\n.p-tag {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    background: ".concat(dt("tag.primary.background"), ";\n    color: ").concat(dt("tag.primary.color"), ";\n    font-size: ").concat(dt("tag.font.size"), ";\n    font-weight: ").concat(dt("tag.font.weight"), ";\n    padding: ").concat(dt("tag.padding"), ";\n    border-radius: ").concat(dt("tag.border.radius"), ";\n    gap: ").concat(dt("tag.gap"), ";\n}\n\n.p-tag-icon {\n    font-size: ").concat(dt("tag.icon.size"), ";\n    width: ").concat(dt("tag.icon.size"), ";\n    height:").concat(dt("tag.icon.size"), ";\n}\n\n.p-tag-rounded {\n    border-radius: ").concat(dt("tag.rounded.border.radius"), ";\n}\n\n.p-tag-success {\n    background: ").concat(dt("tag.success.background"), ";\n    color: ").concat(dt("tag.success.color"), ";\n}\n\n.p-tag-info {\n    background: ").concat(dt("tag.info.background"), ";\n    color: ").concat(dt("tag.info.color"), ";\n}\n\n.p-tag-warn {\n    background: ").concat(dt("tag.warn.background"), ";\n    color: ").concat(dt("tag.warn.color"), ";\n}\n\n.p-tag-danger {\n    background: ").concat(dt("tag.danger.background"), ";\n    color: ").concat(dt("tag.danger.color"), ";\n}\n\n.p-tag-secondary {\n    background: ").concat(dt("tag.secondary.background"), ";\n    color: ").concat(dt("tag.secondary.color"), ";\n}\n\n.p-tag-contrast {\n    background: ").concat(dt("tag.contrast.background"), ";\n    color: ").concat(dt("tag.contrast.color"), ";\n}\n");
};
var classes = {
  root: function root(_ref2) {
    var props = _ref2.props;
    return ["p-tag p-component", {
      "p-tag-info": props.severity === "info",
      "p-tag-success": props.severity === "success",
      "p-tag-warn": props.severity === "warn",
      "p-tag-danger": props.severity === "danger",
      "p-tag-secondary": props.severity === "secondary",
      "p-tag-contrast": props.severity === "contrast",
      "p-tag-rounded": props.rounded
    }];
  },
  icon: "p-tag-icon",
  label: "p-tag-label"
};
var TagStyle = BaseStyle.extend({
  name: "tag",
  theme,
  classes
});
var script$1 = {
  name: "BaseTag",
  "extends": script$1$1,
  props: {
    value: null,
    severity: null,
    rounded: Boolean,
    icon: String
  },
  style: TagStyle,
  provide: function provide() {
    return {
      $pcTag: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "Tag",
  "extends": script$1,
  inheritAttrs: false
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [_ctx.$slots.icon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.icon), mergeProps({
    key: 0,
    "class": _ctx.cx("icon")
  }, _ctx.ptm("icon")), null, 16, ["class"])) : _ctx.icon ? (openBlock(), createElementBlock("span", mergeProps({
    key: 1,
    "class": [_ctx.cx("icon"), _ctx.icon]
  }, _ctx.ptm("icon")), null, 16)) : createCommentVNode("", true), _ctx.value != null || _ctx.$slots["default"] ? renderSlot(_ctx.$slots, "default", {
    key: 2
  }, function() {
    return [createElementVNode("span", mergeProps({
      "class": _ctx.cx("label")
    }, _ctx.ptm("label")), toDisplayString(_ctx.value), 17)];
  }) : createCommentVNode("", true)], 16);
}
script.render = render;
const _sfc_main$1 = {
  components: { Carousel: script$2 },
  setup() {
    const tabs = ref([
      "Recent",
      "Best Seller",
      "Top",
      "New Arrivals",
      "Top Rating"
    ]);
    const userStore = useUserStore();
    const router = useRouter();
    const carousel = ref(null);
    const selectedTab = ref("Recent");
    const topProducts = ref([]);
    const products = computed(() => productStore.products);
    const getTopProducts = () => {
      topProducts.value = products.value.sort((a, b) => b.price - a.price).slice(0, 3).map((product) => {
        var _a, _b;
        return {
          name: product.name,
          // Ensure the product name is included
          price: product.price,
          image: ((_b = (_a = product.images) == null ? void 0 : _a[0]) == null ? void 0 : _b.uploadUrl) || "",
          ...product
        };
      });
    };
    const toast = useToast();
    const { $formatPrice } = useNuxtApp();
    const productStore = useProductStore();
    const formattedPrice = (price) => {
      let p = `Ksh ${$formatPrice(price)}`;
      return p;
    };
    const getSeverity = (status) => {
      switch (status) {
        case "INSTOCK":
          return "success";
        case "LOWSTOCK":
          return "warn";
        case "OUTOFSTOCK":
          return "danger";
        default:
          return null;
      }
    };
    const wishList = computed(() => productStore.wishListItems);
    const isInWishList = (item) => {
      if (!item || !item.id) {
        return false;
      }
      if (userStore.isLoggedIn) {
        const exists = wishList.value.some(
          (wish) => wish.productModel.id === item.id
        );
        return exists;
      } else {
        const exists = wishList.value.some((wish) => wish.id === item.id);
        return exists;
      }
    };
    const selectImage = (item, image) => {
      item.image = image;
    };
    const goToPage = (item) => {
      router.push({
        path: `/products/${item.id}`
      });
    };
    const addToFavorites = async (product) => {
      const productStore2 = useProductStore();
      const userStore2 = useUserStore();
      try {
        if (userStore2.isLoggedIn) {
          const res = await productStore2.addToWishlist(product.id);
          await productStore2.getWishList();
          toast.add({
            severity: "success",
            summary: res.data.message,
            group: "br",
            life: 3e3
          });
        } else {
          const localWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
          const existingIndex = localWishlist.findIndex(
            (item) => item.id === product.id
          );
          if (existingIndex === -1) {
            localWishlist.push(product);
            localStorage.setItem("wishlist", JSON.stringify(localWishlist));
            await productStore2.getWishList();
            toast.add({
              severity: "success",
              summary: "Your Wishlist has been saved locally.",
              group: "br",
              life: 3e3
            });
          } else {
            localWishlist.splice(existingIndex, 1);
            localStorage.setItem("wishlist", JSON.stringify(localWishlist));
            await productStore2.getWishList();
            toast.add({
              severity: "info",
              summary: "The item has been removed from your local wishlist.",
              group: "br",
              life: 3e3
            });
          }
        }
      } catch (error) {
        console.error("Error processing wishlist:", error);
        toast.add({
          severity: "error",
          summary: "An error occurred while managing your wishlist.",
          detail: error.message,
          group: "br",
          life: 5e3
        });
      }
    };
    const addToCart = async (product) => {
      console.log(product);
      const userStore2 = useUserStore();
      userStore2.user;
      try {
        const productStore2 = useProductStore();
        const response = await productStore2.addToCart(product, 1);
        toast.add({
          severity: "success",
          summary: "Product Added to Cart",
          group: "br",
          life: 3e3
        });
        console.log(response);
      } catch (error) {
        toast.add({
          severity: "error",
          summary: "Failed to Add Product",
          detail: error.message,
          group: "br",
          life: 5e3
        });
      }
    };
    const featuredProducts = computed(() => {
      const products2 = productStore.products;
      const totalItems = 20;
      if (products2.length === 0) return [];
      const repeatedProducts = [];
      while (repeatedProducts.length < totalItems) {
        repeatedProducts.push(...products2);
      }
      let productImages = products2.map((el) => {
        var _a;
        const products3 = {
          image: (_a = el.images[0]) == null ? void 0 : _a.uploadUrl,
          images: el.images,
          ...el
        };
        return products3;
      });
      return productImages;
    });
    return {
      products,
      featuredProducts,
      carousel,
      tabs,
      formattedPrice,
      selectedTab,
      getSeverity,
      selectImage,
      addToFavorites,
      addToCart,
      goToPage,
      isInWishList,
      getTopProducts,
      topProducts
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Carousel = script$2;
  const _component_Tag = script;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col md:flex-row w-full p-6" }, _attrs))}><div class="w-full md:w-1/5 p-2 m-2 border dark:border-orange-600 rounded-lg shadow-sm"><div class="text-lg font-semibold mb-2 border-b flex justify-between items-center"><span class="text-gray-500 pl-4">Hot Deals</span></div><div>`);
  _push(ssrRenderComponent(_component_Carousel, {
    d_circular: true,
    autoplayInterval: 1e4,
    value: $setup.topProducts,
    numVisible: 1,
    numScroll: 1,
    orientation: "horizontal",
    containerClass: "flex items-center justify-center",
    showIndicators: false,
    showNavigators: false
  }, {
    item: withCtx((slotProps, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}><div class="mb-4"${_scopeId}><div class="relative mx-auto h-"${_scopeId}><img${ssrRenderAttr("src", slotProps.data.image)}${ssrRenderAttr("alt", slotProps.data.name)} class="object-cover rounded" style="${ssrRenderStyle({ "max-width": "100% !important", "min-height": "300px !important" })}"${_scopeId}></div></div><div class="mb-4 font-medium flex justify-around"${_scopeId}>${ssrInterpolate(slotProps.data.name)}</div><div class="flex justify-around items-center"${_scopeId}><div class="mt-0 font-semibold text-xl py-4"${_scopeId}>${ssrInterpolate($setup.formattedPrice(slotProps.data.price))}</div></div><p class="py-4"${_scopeId}><!--[-->`);
        ssrRenderList(slotProps.data.features, (item) => {
          _push2(`<span class="text-gray-600 text-sm text-truncate mb-4"${_scopeId}>${ssrInterpolate(item.description)}</span>`);
        });
        _push2(`<!--]--></p><p class="flex justify-around items-center"${_scopeId}><button class="w-3/4 px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-orange-600 focus:outline-none focus:shadow-outline"${_scopeId}> Add to Cart </button><button class="w-1/4"${ssrRenderAttr("loading", _ctx.loadingWish)}${_scopeId}>`);
        if (!$setup.isInWishList(slotProps.data)) {
          _push2(`<i class="pi pi-heart cursor-pointer mr-2" style="${ssrRenderStyle({ "font-size": "1.5rem" })}"${_scopeId}></i>`);
        } else {
          _push2(`<i class="pi pi-heart-fill cursor-pointer mr-2" style="${ssrRenderStyle({ "font-size": "1.5rem", "color": "red" })}"${_scopeId}></i>`);
        }
        _push2(`</button></p></div>`);
      } else {
        return [
          createVNode("div", null, [
            createVNode("div", { class: "mb-4" }, [
              createVNode("div", { class: "relative mx-auto h-" }, [
                createVNode("img", {
                  src: slotProps.data.image,
                  alt: slotProps.data.name,
                  class: "object-cover rounded",
                  style: { "max-width": "100% !important", "min-height": "300px !important" }
                }, null, 8, ["src", "alt"])
              ])
            ]),
            createVNode("div", { class: "mb-4 font-medium flex justify-around" }, toDisplayString(slotProps.data.name), 1),
            createVNode("div", { class: "flex justify-around items-center" }, [
              createVNode("div", { class: "mt-0 font-semibold text-xl py-4" }, toDisplayString($setup.formattedPrice(slotProps.data.price)), 1)
            ]),
            createVNode("p", { class: "py-4" }, [
              (openBlock(true), createBlock(Fragment, null, renderList(slotProps.data.features, (item) => {
                return openBlock(), createBlock("span", { class: "text-gray-600 text-sm text-truncate mb-4" }, toDisplayString(item.description), 1);
              }), 256))
            ]),
            createVNode("p", { class: "flex justify-around items-center" }, [
              createVNode("button", {
                class: "w-3/4 px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-orange-600 focus:outline-none focus:shadow-outline",
                onClick: ($event) => $setup.addToCart(slotProps.data)
              }, " Add to Cart ", 8, ["onClick"]),
              createVNode("button", {
                class: "w-1/4",
                onClick: ($event) => $setup.addToFavorites(slotProps.data),
                loading: _ctx.loadingWish
              }, [
                !$setup.isInWishList(slotProps.data) ? (openBlock(), createBlock("i", {
                  key: 0,
                  class: "pi pi-heart cursor-pointer mr-2",
                  style: { "font-size": "1.5rem" }
                })) : (openBlock(), createBlock("i", {
                  key: 1,
                  class: "pi pi-heart-fill cursor-pointer mr-2",
                  style: { "font-size": "1.5rem", "color": "red" }
                }))
              ], 8, ["onClick", "loading"])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="p-6 w-full md:w-4/5"><div class="flex flex-col md:flex-row items-center justify-between"><h2 class="text-lg font-bold mb-2 md:mb-0"><span class="text-red-500">Monthly Featured Items</span></h2><div class="flex flex-wrap md:flex-nowrap space-x-2 md:space-x-4 border-b"><!--[-->`);
  ssrRenderList($setup.tabs, (tab) => {
    _push(`<button class="${ssrRenderClass([
      "px-2 py-1 md:px-4 md:py-2 text-sm font-semibold whitespace-nowrap",
      $setup.selectedTab === tab ? "border-b-2 border-primary text-orange-500" : "text-gray-600"
    ])}">${ssrInterpolate(tab)}</button>`);
  });
  _push(`<!--]--></div></div><div class="gap-6 mt-4"><div class="flex flex-col md:flex-row justify-between space-y-4 md:space-x-4 md:space-y-0"><div class="flex flex-col space-y-4 w-full md:w-1/3 hover:text-primary transition-colors duration-200"><!--[-->`);
  ssrRenderList($setup.featuredProducts.slice(0, 2), (item) => {
    _push(`<div class="border rounded-sm p-4 shadow-sm flex-1 cursor-pointer"><div class="flex items-center"><img${ssrRenderAttr("src", item.image)} class="w-28 h-28 object-cover rounded-md"><div class="ml-4 flex flex-col w-full"><h3 class="text-lg font-medium">${ssrInterpolate(item.product.name)}</h3><span class="text-sm">${ssrInterpolate(item.name)}</span><div class="mt-2 hover:text-primary transition-colors duration-200 text-primary font-bold text-lg"><span>${ssrInterpolate($setup.formattedPrice(item.price))}</span></div><p class="text-gray-500 mt-1"><strong>${ssrInterpolate(item.features.map((feat) => feat.description).join(", "))}</strong></p><div class="carousel flex items-center mt-2 space-x-4"><div class="flex items-center space-x-2 overflow-x-auto"><!--[-->`);
    ssrRenderList(item.images, (image, index) => {
      _push(`<img${ssrRenderAttr("src", image.uploadUrl)}${ssrRenderAttr("alt", "Product " + (index + 1))} class="${ssrRenderClass([{
        "border-orange-500": item.image === image
      }, "w-10 h-10 md:w-10 md:h-10 rounded-md border border-gray-300 cursor-pointer hover:border-orange-500"])}">`);
    });
    _push(`<!--]--></div></div></div><div class="gap-5 relative left-0 top-0 align-start justify-end"><button${ssrRenderAttr("loading", _ctx.loadingWish)}>`);
    if (!$setup.isInWishList(item)) {
      _push(`<i class="pi pi-heart cursor-pointer mr-2" style="${ssrRenderStyle({ "font-size": "1.3rem" })}"></i>`);
    } else {
      _push(`<i class="pi pi-heart-fill cursor-pointer mr-2" style="${ssrRenderStyle({ "font-size": "1.3rem", "color": "red" })}"></i>`);
    }
    _push(`</button><button class="rounded-full transition-colors"><i class="pi pi-shopping-cart text- pt-4" style="${ssrRenderStyle({ "font-size": "1.3rem" })}"></i></button></div></div></div>`);
  });
  _push(`<!--]--></div><div class="flex-1 h-full"><!--[-->`);
  ssrRenderList($setup.featuredProducts.slice(2, 3), (item) => {
    _push(`<div class="border rounded-sm p-4 shadow-sm h-full relative group transition duration-300 cursor-pointer"><div class="flex justify-between">`);
    _push(ssrRenderComponent(_component_Tag, {
      severity: "warn",
      value: "New"
    }, null, _parent));
    _push(`<div class="gap-5"><button${ssrRenderAttr("loading", _ctx.loadingWish)}>`);
    if (!$setup.isInWishList(item)) {
      _push(`<i class="pi pi-heart transition-colors cursor-pointer mr-2" style="${ssrRenderStyle({ "font-size": "1.3rem" })}"></i>`);
    } else {
      _push(`<i class="pi pi-heart-fill transition-colors cursor-pointer mr-2" style="${ssrRenderStyle({ "font-size": "1.3rem", "color": "red" })}"></i>`);
    }
    _push(`</button><button class="rounded-full transition-colors transition-colors"><i class="pi pi-shopping-cart transition-colors text- pt-4" style="${ssrRenderStyle({ "font-size": "1.3rem" })}"></i></button></div></div><div class="flex flex-col items-center h-full"><div class="relative"><img${ssrRenderAttr("src", item.image)} class="object-cover rounded-md w-full h-48"></div><div class="text-center items-center pt-4 flex flex-col"><h3 class="text-lg font-medium">${ssrInterpolate(item.product.name)}</h3><span class="text-sm">${ssrInterpolate(item.name)}</span><div class="mt-2 text-primary hover:text-primary transition-colors duration-200 font-bold text-lg"><span>${ssrInterpolate($setup.formattedPrice(item.price))}</span></div><p class="text-gray-500 mt-1"><strong>${ssrInterpolate(item.features.map((feat) => feat.description).join(", "))}</strong></p></div></div></div>`);
  });
  _push(`<!--]--></div><div class="flex flex-col space-y-4 w-full md:w-1/3"><!--[-->`);
  ssrRenderList($setup.featuredProducts.slice(3, 5), (item) => {
    _push(`<div class="border rounded-sm p-4 shadow-sm flex-1 cursor-pointer"><div class="flex items-center"><img${ssrRenderAttr("src", item.image)} class="w-28 h-28 object-cover rounded-md"><div class="ml-4 flex flex-col w-full"><h3 class="text-lg font-medium">${ssrInterpolate(item.product.name)}</h3><span class="text-sm">${ssrInterpolate(item.name)}</span><div class="mt-2 text-primary hover:text-primary transition-colors duration-200font-bold text-lg"><span class="">${ssrInterpolate($setup.formattedPrice(item.price))}</span></div><p class="text-gray-500 mt-1"><strong>${ssrInterpolate(item.features.map((feat) => feat.description).join(", "))}</strong></p><div class="carousel flex items-center mt-2 space-x-4"><div class="flex items-center space-x-2 overflow-x-auto"><!--[-->`);
    ssrRenderList(item.images, (image, index) => {
      _push(`<img${ssrRenderAttr("src", image.uploadUrl)}${ssrRenderAttr("alt", "Product " + (index + 1))} class="${ssrRenderClass([{
        "border-orange-500": item.image === image
      }, "w-10 h-10 md:w-10 md:h-10 rounded-md border border-gray-300 cursor-pointer hover:border-orange-500"])}">`);
    });
    _push(`<!--]--></div></div></div><div class="gap-5 relative left-0 top-0 align-start justify-end"><button${ssrRenderAttr("loading", _ctx.loadingWish)}>`);
    if (!$setup.isInWishList(item)) {
      _push(`<i class="pi pi-heart cursor-pointer mr-2" style="${ssrRenderStyle({ "font-size": "1.3rem" })}"></i>`);
    } else {
      _push(`<i class="pi pi-heart-fill cursor-pointer mr-2" style="${ssrRenderStyle({ "font-size": "1.3rem", "color": "red" })}"></i>`);
    }
    _push(`</button><button class="rounded-full transition-colors"><i class="pi pi-shopping-cart pt-4" style="${ssrRenderStyle({ "font-size": "1.3rem" })}"></i></button></div></div></div>`);
  });
  _push(`<!--]--></div></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/TopDeal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TopDeal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  name: "Dashboard",
  components: {
    FlashCard,
    CategoryCard: _sfc_main$4,
    ProductCard: _sfc_main$3,
    TopCard,
    Footer,
    FilterCard: _sfc_main$2,
    TopDeal
  },
  props: {
    searchTerm: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    watch(
      () => props.searchTerm,
      (newVal, oldVal) => {
        filter.value = true;
        getProduct();
      }
    );
    const router = useRouter();
    const currentPage = ref(1);
    ref(1);
    const randomizedProducts = computed(() => {
      return [...products.value].sort(() => Math.random() - 0.5).slice(0, 6);
    });
    const filter = ref(false);
    const categoryId = ref(null);
    const value = ref([20, 80]);
    const fetching = ref(false);
    const fetchingMore = ref(false);
    ref({
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00"
    });
    const goToProductPage = (product) => {
      router.push({
        path: `/products/${product.id}`
      });
    };
    ref(
      new Date((/* @__PURE__ */ new Date()).getTime() + 3 * 24 * 60 * 60 * 1e3)
    );
    const iconMap = {
      "HD ANALOGUE CAMERAS AND DVR": "pi pi-video",
      "IP NETWORK CAMERAS AND NVR": "pi pi-wifi",
      "ACCESS CONTROL PRODUCTS": "pi pi-lock",
      "VIDEO INTERCOM PRODUCTS": "pi pi-phone",
      "NETWORK AND CABLES PRODUCTS": "pi pi-sitemap",
      "MONITOR DISPLAY PRODUCTS": "pi pi-desktop",
      "ACCESSORIES PRODUCTS": "pi pi-cog",
      Phones: "pi pi-mobile"
    };
    const getIcon = (name) => {
      return iconMap[name] || "pi pi-question";
    };
    const images = ref([]);
    const categories = ref([]);
    useNuxtApp();
    const products = ref([]);
    const currentIndex = ref(0);
    const nextSlide = () => {
      currentIndex.value = (currentIndex.value + 1) % images.value.length;
    };
    const showMoreProducts = () => {
      currentPage.value++;
      getProduct();
    };
    const prevSlide = () => {
      currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length;
    };
    const getItems = (x) => {
      console.log("ca", x);
    };
    const formatPrice = (value2) => {
      if (!value2) return "0";
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "Ksh",
        minimumFractionDigits: 0
      }).format(value2);
    };
    const getCategoryProducts = (item) => {
      categoryId.value = [item.id];
      getProduct();
    };
    const goToSlide = (index) => {
      currentIndex.value = index;
    };
    const getProduct = async () => {
      fetching.value = true;
      fetchingMore.value = true;
      try {
        const { $axios: $axios2 } = useNuxtApp();
        const params = {};
        if (props.searchTerm) {
          params.searchTerm = props.searchTerm;
        }
        if (categoryId.value) {
          params.categoryIds = categoryId.value;
        }
        const response = await $axios2.get("/product/product-models", {
          params: {
            ...params,
            page: currentPage.value,
            limit: 10
          }
        });
        fetching.value = false;
        fetchingMore.value = false;
        products.value = [...products.value, ...response.data.results];
        console.log(products.value, "getting");
      } catch (error) {
        console.error("Error fetching products:", error);
        fetching.value = false;
        fetchingMore.value = false;
      }
    };
    const responsiveOptions = ref([
      {
        breakpoint: "1400px",
        numVisible: 4,
        numScroll: 4
      },
      {
        breakpoint: "1199px",
        numVisible: 4,
        numScroll: 4
      },
      {
        breakpoint: "767px",
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: "475px",
        numVisible: 1,
        numScroll: 1
      }
    ]);
    const getSeverity = (status) => {
      switch (status) {
        case "INSTOCK":
          return "success";
        case "LOWSTOCK":
          return "warn";
        case "OUTOFSTOCK":
          return "danger";
        default:
          return null;
      }
    };
    return {
      images,
      currentIndex,
      nextSlide,
      prevSlide,
      goToSlide,
      categories,
      products,
      responsiveOptions,
      getItems,
      getSeverity,
      value,
      filter,
      showMoreProducts,
      fetching,
      fetchingMore,
      formatPrice,
      randomizedProducts,
      goToProductPage,
      getIcon,
      getCategoryProducts
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TopCard = resolveComponent("TopCard");
  const _component_TopDeal = resolveComponent("TopDeal");
  const _component_FilterCard = resolveComponent("FilterCard");
  const _component_ProductCard = resolveComponent("ProductCard");
  const _component_Button = script$3;
  const _component_Footer = _sfc_main$5;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto my-10 pa-10" }, _attrs))} data-v-01a0e4cd>`);
  _push(ssrRenderComponent(_component_TopCard, { categories: $setup.categories }, null, _parent));
  _push(ssrRenderComponent(_component_TopDeal, null, null, _parent));
  _push(`<section data-v-01a0e4cd><div class="p-4 rounded-md" data-v-01a0e4cd><div class="flex justify-between items-center mb-4 px-2" data-v-01a0e4cd><h2 class="text-lg font-semibold" data-v-01a0e4cd>Top selling items</h2></div><div class="flex overflow-x-auto gap-4 p-2" data-v-01a0e4cd><!--[-->`);
  ssrRenderList($setup.randomizedProducts, (product, index) => {
    var _a;
    _push(`<div class="min-w-[200px] md:min-w-[220px] bg-white rounded-md shadow-md cursor-pointer p-2" data-v-01a0e4cd><div class="relative" data-v-01a0e4cd><img${ssrRenderAttr("src", (_a = product.images[0]) == null ? void 0 : _a.uploadUrl)}${ssrRenderAttr("alt", product.name)} class="w-full h-36 object-cover rounded-md" data-v-01a0e4cd></div> ${ssrInterpolate(product.product.name)} <h3 class="text-sm font-medium mt-2 truncate" data-v-01a0e4cd>${ssrInterpolate(product.name)}</h3><p class="text-lg font-semibold text-gray-900" data-v-01a0e4cd>${ssrInterpolate($setup.formatPrice(product.price))}</p><p class="text-gray-500 text-xs line-through" data-v-01a0e4cd>${ssrInterpolate(product.oldPrice)}</p></div>`);
  });
  _push(`<!--]--></div></div></section><section class="flash-sales mt-5 mx-2 full-screen" style="${ssrRenderStyle({ "min-height": "900px" })}" data-v-01a0e4cd><div class="flex justify-between items-center mb-4" data-v-01a0e4cd><h2 class="text-xl font-bold" data-v-01a0e4cd>Explore Our Products</h2><div class="flex space-x-2" data-v-01a0e4cd><button class="bg-red-500 text-white px-4 py-2" data-v-01a0e4cd>View All</button></div></div><div class="flex" data-v-01a0e4cd>`);
  if ($setup.filter) {
    _push(ssrRenderComponent(_component_FilterCard, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="w-full" data-v-01a0e4cd>`);
  if ($setup.fetching && $setup.products.length < 1) {
    _push(`<div class="text-center mt-6" data-v-01a0e4cd><div class="relative flex justify-center items-center" data-v-01a0e4cd><div class="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-100" data-v-01a0e4cd></div><img src="https://freelancerdxb.s3.eu-central-1.amazonaws.com/documents/image%20%285%29__5d197f13926ac20a20a6f301d00ce69b516f83eb.png" class="rounded-full h-24 w-24" data-v-01a0e4cd></div></div>`);
  } else if ($setup.products.length == 0) {
    _push(`<div class="flex flex-col items-center justify-center text-center mt-12 text-gray-500" data-v-01a0e4cd><img${ssrRenderAttr("src", _imports_0)} alt="No items found" class="h-56 w-56" data-v-01a0e4cd><p class="pt-6" data-v-01a0e4cd>No items found</p></div>`);
  } else {
    _push(`<div class="grid gap-3 grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 justify-center" data-v-01a0e4cd><!--[-->`);
    ssrRenderList($setup.products, (product) => {
      _push(ssrRenderComponent(_component_ProductCard, {
        key: product.id,
        item: product
      }, null, _parent));
    });
    _push(`<!--]--></div>`);
  }
  if ($setup.products.length != 0) {
    _push(`<div class="flex justify-center py-8" data-v-01a0e4cd>`);
    _push(ssrRenderComponent(_component_Button, {
      type: "button",
      label: "Show More",
      icon: "pi pi-sync",
      loading: $setup.fetchingMore,
      onClick: ($event) => $setup.showMoreProducts()
    }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></section>`);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Dashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-01a0e4cd"]]);

export { Dashboard as default };
//# sourceMappingURL=Dashboard-lx2CB8aV.mjs.map
