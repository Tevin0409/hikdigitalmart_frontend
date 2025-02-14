import { b as buildAssetsURL } from '../nitro/nitro.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-BYB1KAeo.mjs';
import { s as script } from './index-Cf-aLWVL.mjs';
import { computed, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { _ as _export_sfc, b as useProductStore, u as useUserStore, c as useToast, a as useNuxtApp } from './server.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import '@primevue/core/base/style';
import '@primeuix/utils/object';
import '@primeuix/styled';
import 'node:url';
import '@primeuix/utils/dom';
import '@primeuix/utils/zindex';
import './index-zZrFrjQS.mjs';
import './index-CBz_SNTb.mjs';
import '@primeuix/utils/uuid';
import './index-DSnb32Yv.mjs';
import './index-BBqC3hNY.mjs';
import './index-DEuunsqE.mjs';
import './index-Dvqyfh34.mjs';
import 'pinia';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@primeuix/utils/eventbus';
import '@primeuix/utils';
import 'deep-pick-omit';
import 'axios';

const _imports_0 = "" + buildAssetsURL("wish-list.DInbe6H6.png");
const _sfc_main = {
  setup() {
    const productStore = useProductStore();
    const userStore = useUserStore();
    const toast = useToast();
    const wishList = computed(() => productStore.wishListItems);
    const cartItems = computed(() => productStore.cartItems);
    const cartCount = computed(() => productStore.cartCount);
    const cartTotal = computed(() => productStore.cartTotal);
    const products = computed(() => productStore.products);
    computed(() => userStore.isLoggedIn);
    const formattedPrice = (price) => {
      const { $formatPrice } = useNuxtApp();
      return $formatPrice(price);
    };
    const removeFromWishlist = async (item) => {
      await productStore.removeFromWishlist(item.id);
    };
    const addToCart = async (product) => {
      var _a2;
      var _a;
      const productId = (_a2 = (_a = product.productModel) == null ? void 0 : _a.id) != null ? _a2 : product.id;
      console.log(productId, "productId");
      console.log(product, "tes");
      try {
        const response = await productStore.addToCart(product, 1);
        const res = await productStore.addToWishlist(productId);
        toast.add({
          severity: "success",
          summary: "Product moved to Cart",
          group: "br",
          life: 3e3
        });
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
    return {
      wishList,
      cartItems,
      cartCount,
      cartTotal,
      formattedPrice,
      removeFromWishlist,
      addToCart,
      products
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0;
  const _component_Toast = script;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6 container mx-auto" }, _attrs))}>`);
  if ($setup.wishList.length < 1) {
    _push(`<div class="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-6 mb-6"><img${ssrRenderAttr("src", _imports_0)} alt="Empty Cart" class="w-20 h-20 mb-4"><h2 class="text-xl font-semibold text-gray-700"> Your wishlist is empty! </h2><p class="text-gray-500 text-sm mb-4"> Browse our categories and discover our best deals! </p>`);
    _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
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
  } else {
    _push(`<div class="p-6 container mx-auto"><h2 class="text-2xl font-bold mb-4">Wishlist (${ssrInterpolate($setup.wishList.length)})</h2><div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-6"><!--[-->`);
    ssrRenderList($setup.wishList, (item, index2) => {
      var _a2, _b2, _c2, _d2;
      var _a, _b, _c, _d, _e, _f, _g, _h;
      _push(`<div class="bg-white border rounded-lg shadow-sm overflow-hidden"><div class="relative"><img${ssrRenderAttr(
        "src",
        (_a2 = (_b = (_a = item.productModel) == null ? void 0 : _a.images.find((image) => image.isPrimary)) == null ? void 0 : _b.optimizeUrl) != null ? _a2 : (_d = (_c = item.images) == null ? void 0 : _c.find((image) => image.isPrimary)) == null ? void 0 : _d.optimizeUrl
      )}${ssrRenderAttr("alt", ((_e = item.productModel) == null ? void 0 : _e.name) || "Product Image")} class="w-full h-40 object-cover">`);
      if (item.discount) {
        _push(`<span class="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded"> -${ssrInterpolate(item.discount)}% </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="absolute top-2 right-2 bg-gray-100 text-gray-500 rounded-full p-1 hover:text-red-500"><i class="pi pi-trash"></i></button></div><div class="p-4"><h3 class="text-md font-semibold truncate">${ssrInterpolate((_b2 = (_f = item.productModel) == null ? void 0 : _f.name) != null ? _b2 : item == null ? void 0 : item.product.name)} <br><span class="text-sm font-light">${ssrInterpolate((_c2 = (_g = item.productModel) == null ? void 0 : _g.name) != null ? _c2 : item == null ? void 0 : item.name)}</span></h3><p class="text-gray-500 mb-2"><span class="text-red-500 font-bold"> Ksh ${ssrInterpolate($setup.formattedPrice((_d2 = (_h = item.productModel) == null ? void 0 : _h.price) != null ? _d2 : item.price))}</span>`);
      if (item == null ? void 0 : item.originalPrice) {
        _push(`<span class="line-through text-sm ml-2 text-gray-400"> Ksh${ssrInterpolate(item == null ? void 0 : item.originalPrice)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</p><button class="w-full bg-black text-white py-2 rounded hover:bg-gray-800"> Move To Cart </button></div></div>`);
    });
    _push(`<!--]--></div><div></div></div>`);
  }
  _push(`<div class="bg-white shadow-lg rounded-lg p-4"><div class="flex justify-between items-center mb-4"><h3 class="text-lg font-semibold text-gray-700">Recently Viewed</h3>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/cart" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<a href="#" class="text-primary hover:text-orange-600 text-sm font-semibold flex items-center"${_scopeId}> See All <i class="ml-1 pi pi-angle-right"${_scopeId}></i></a>`);
      } else {
        return [
          createVNode("a", {
            href: "#",
            class: "text-primary hover:text-orange-600 text-sm font-semibold flex items-center"
          }, [
            createTextVNode(" See All "),
            createVNode("i", { class: "ml-1 pi pi-angle-right" })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"><!--[-->`);
  ssrRenderList($setup.cartItems, (item, index2) => {
    var _a2, _b2, _c2;
    var _a, _b, _c, _d, _e, _f, _g;
    _push(`<div class="border rounded-lg p-3"><img${ssrRenderAttr(
      "src",
      (_a2 = (_b = (_a = item.productModel) == null ? void 0 : _a.images.find((image) => image.isPrimary)) == null ? void 0 : _b.optimizeUrl) != null ? _a2 : (_d = (_c = item.images) == null ? void 0 : _c.find((image) => image.isPrimary)) == null ? void 0 : _d.optimizeUrl
    )}${ssrRenderAttr("alt", ((_e = item.productModel) == null ? void 0 : _e.name) || "Product Image")} class="w-full h-40 object-cover"><p class="text-sm font-medium">${ssrInterpolate((_b2 = (_f = item.productModel) == null ? void 0 : _f.name) != null ? _b2 : item.name)}</p><p class="text-primary font-semibold text-lg"> KES ${ssrInterpolate($setup.formattedPrice((_c2 = (_g = item.productModel) == null ? void 0 : _g.price) != null ? _c2 : item.price))}</p></div>`);
  });
  _push(`<!--]--></div></div><div class="bg-white shadow-lg rounded-lg p-4 mt-4"><div class="flex justify-between items-center mb-4"><h3 class="text-lg font-semibold text-gray-700">Top Selling Items</h3>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/cart" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<a href="#" class="text-primary hover:text-orange-600 text-sm font-semibold flex items-center"${_scopeId}> See All <i class="ml-1 pi pi-angle-right"${_scopeId}></i></a>`);
      } else {
        return [
          createVNode("a", {
            href: "#",
            class: "text-primary hover:text-orange-600 text-sm font-semibold flex items-center"
          }, [
            createTextVNode(" See All "),
            createVNode("i", { class: "ml-1 pi pi-angle-right" })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"><!--[-->`);
  ssrRenderList($setup.cartItems, (item, index2) => {
    var _a2, _b2, _c2;
    var _a, _b, _c, _d, _e, _f, _g;
    _push(`<div class="border rounded-lg p-3"><img${ssrRenderAttr(
      "src",
      (_a2 = (_b = (_a = item.productModel) == null ? void 0 : _a.images.find((image) => image.isPrimary)) == null ? void 0 : _b.optimizeUrl) != null ? _a2 : (_d = (_c = item.images) == null ? void 0 : _c.find((image) => image.isPrimary)) == null ? void 0 : _d.optimizeUrl
    )}${ssrRenderAttr("alt", ((_e = item.productModel) == null ? void 0 : _e.name) || "Product Image")} class="w-full h-40 object-cover"><p class="text-sm font-medium">${ssrInterpolate((_b2 = (_f = item.productModel) == null ? void 0 : _f.name) != null ? _b2 : item.name)}</p><p class="text-primary font-semibold text-lg"> KES ${ssrInterpolate($setup.formattedPrice((_c2 = (_g = item.productModel) == null ? void 0 : _g.price) != null ? _c2 : item.price))}</p></div>`);
  });
  _push(`<!--]--></div></div>`);
  _push(ssrRenderComponent(_component_Toast, {
    position: "bottom-right",
    group: "br"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/wishlist/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-aZvp5Gc5.mjs.map
