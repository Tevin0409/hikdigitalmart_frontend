import { b as buildAssetsURL } from '../nitro/nitro.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-BYB1KAeo.mjs';
import { ref, computed, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { a as useNuxtApp, b as useProductStore } from './server.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import '@primevue/core/base/style';
import '@primeuix/utils/object';
import '@primeuix/styled';
import 'node:url';
import 'pinia';
import 'unhead';
import '@unhead/shared';
import '@primeuix/utils/eventbus';
import '@primeuix/utils';
import '@primeuix/utils/dom';
import 'deep-pick-omit';
import 'axios';

const _imports_0 = "" + buildAssetsURL("empty-cart.Dg7uAmTc.png");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { $formatPrice } = useNuxtApp();
    useRouter();
    const productStore = useProductStore();
    useNuxtApp();
    ref("");
    const cartTotal = computed(() => productStore.cartTotal);
    const cartItems = computed(() => productStore.cartItems);
    const formattedPrice = (price) => {
      return $formatPrice(price);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "cart" }, _attrs))}>`);
      if (cartItems.value.length < 1) {
        _push(`<div class="flex flex-col items-center justify-center bg-white rounded-lg p-6 mb-6 container mx-auto"><img${ssrRenderAttr("src", _imports_0)} alt="Empty Cart" class="w-20 h-20 mb-4"><h2 class="text-xl font-semibold text-gray-700">Your cart is empty!</h2><p class="text-gray-500 text-sm mb-4"> Browse our categories and discover our best deals! </p>`);
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
        _push(`<div class="mx-auto container"><div class="bg-red-10 rounded-lg p-4"><div class="flex justify-between items-center mb-4"><h3 class="text-lg font-semibold text-gray-700"> Cart (${ssrInterpolate(cartItems.value.length)}) </h3>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/cart" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<a href="#" class="text-primary hover:text-orange-600 text-sm font-semibold flex items-center"${_scopeId}></a>`);
            } else {
              return [
                createVNode("a", {
                  href: "#",
                  class: "text-primary hover:text-orange-600 text-sm font-semibold flex items-center"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="bg-white mx-auto"><div class="bg-white grid grid-cols-12 gap-4"><div class="col-span-12 md:col-span-9"><!--[-->`);
        ssrRenderList(cartItems.value, (item) => {
          var _a2, _b2, _c2;
          var _a, _b, _c, _d, _e, _f, _g;
          _push(`<div class="rounded-lg p-4 gap-3 pb-4 mb-2 border"><div class="flex items-start"><img class="w-20 h-20 object-contain"${ssrRenderAttr(
            "src",
            (_a2 = (_b = (_a = item.productModel) == null ? void 0 : _a.images.find((image) => image.isPrimary)) == null ? void 0 : _b.optimizeUrl) != null ? _a2 : (_d = (_c = item.images) == null ? void 0 : _c.find((image) => image.isPrimary)) == null ? void 0 : _d.optimizeUrl
          )} alt="Product Image"><div class="ml-4 flex-grow"><h2 class="text-lg font-medium">${ssrInterpolate((_b2 = (_e = item.productModel) == null ? void 0 : _e.name) != null ? _b2 : item.name)}</h2><p class="text--500 text-sm">${ssrInterpolate((_f = item.productModel.features[0]) == null ? void 0 : _f.description)}</p></div><div class="text-right"><p class="text-xl font-semibold text-gray-900"> Ksh ${ssrInterpolate(formattedPrice((_c2 = (_g = item.productModel) == null ? void 0 : _g.price) != null ? _c2 : item.price))}</p></div></div><div class="flex items-center justify-between mt-4"><button class="text-red-500 flex items-center"><span class="mr-2">\u{1F5D1}\uFE0F</span> Remove </button><div class="flex items-center"><button class="bg-gray-300 px-3 py-1 rounded-lg"${ssrIncludeBooleanAttr(item.quantity <= 1) ? " disabled" : ""}> - </button><span class="px-4">${ssrInterpolate(item.quantity)}</span><button class="bg-primary text-white px-3 py-1 rounded-lg"> + </button></div></div></div>`);
        });
        _push(`<!--]--></div><div class="col-span-12 md:col-span-3"><div class="cart-total rounded-lg"><h3 class="text-lg font-semibold">Cart Total</h3><p class="text-gray-600"> Subtotal: KES ${ssrInterpolate(formattedPrice(cartTotal.value))}</p><hr class="my-2"><p class="text-lg font-bold"> Total: KES ${ssrInterpolate(formattedPrice(cartTotal.value))}</p><button class="w-full bg-primary text-white py-2 mt-4 rounded-lg hover:bg-secondary"> Checkout (${ssrInterpolate(formattedPrice(cartTotal.value))}) </button></div></div></div></div></div></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cart/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BGmZzr9J.mjs.map
