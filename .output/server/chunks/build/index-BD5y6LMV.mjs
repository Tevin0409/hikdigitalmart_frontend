import { _ as __nuxt_component_0 } from './nuxt-link-BYB1KAeo.mjs';
import { s as script } from './index-CzrJQldg.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './Footer-D3jzFek2.mjs';
import { _ as _export_sfc } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import '@primevue/core/base/style';
import '@primeuix/utils/object';
import '@primeuix/styled';
import 'node:url';
import '@primeuix/utils/dom';
import './index-B0KNiV_3.mjs';
import './index-BjfqnR8d.mjs';
import '@primeuix/utils/uuid';
import './index-BgtDrjLh.mjs';
import './index-CEOEMxBM.mjs';
import './index-BdVaJSFC.mjs';
import 'pinia';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@primeuix/utils/eventbus';
import '@primeuix/utils';
import 'deep-pick-omit';
import 'axios';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    ref("Ksh 2,400.00");
    const images = ref([
      "https://html.themexriver.com/radios/assets/img/product/img_53.png",
      "https://html.themexriver.com/radios/assets/img/product/img_52.png",
      "https://html.themexriver.com/radios/assets/img/product/img_54.png"
    ]);
    const selectedImage = ref(images.value[0]);
    const products = ref([
      {
        name: "HD Camera Bullet",
        price: "Ksh 3,200.00",
        image: "https://html.themexriver.com/radios/assets/img/product/img_52.png"
      },
      {
        name: "Wireless Speaker",
        price: "Ksh 5,000.00",
        image: "https://html.themexriver.com/radios/assets/img/product/img_53.png"
      },
      {
        name: "Smart Watch Pro",
        price: "Ksh 15,000.00",
        image: "https://html.themexriver.com/radios/assets/img/product/img_54.png"
      }
    ]);
    const features = ref([
      {
        icon: "pi pi-truck",
        title: "Shipping",
        description: "Shipping Guarantee"
      },
      {
        icon: "pi pi-lock",
        title: "Payment Secure",
        description: "100% Safe Payment"
      },
      {
        icon: "pi pi-whatsapp",
        title: "Support 24/7",
        description: "Quality Support"
      },
      {
        icon: "pi pi-money-bill",
        title: "Money Back",
        description: "Guaranteed Refund"
      },
      {
        icon: "pi pi-thumbs-up",
        title: "Quality Products",
        description: "Trusted Quality"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Carousel = script;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "product-section pt-20",
        style: { "background-image": "url(' https://www.sdl.co.ke/assets/images/icons/vector-1.png')" }
      }, _attrs))} data-v-e0d6b541><div class="flex flex-wrap justify-center items-start" data-v-e0d6b541><div class="product-details w-full md:w-1/3 mb-6 md:mb-0" data-v-e0d6b541><div class="badge text-primary text-sm font-semibold mb-2" data-v-e0d6b541></div><h1 class="text-2xl text-primary md:text-4xl font-bold mb-4" data-v-e0d6b541> Secure Your Home with State-of-the-Art CCTV Cameras </h1><div class="price flex items-center text-xl md:text-2xl font-semibold text-red-600 mb-4" data-v-e0d6b541></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/dashboard" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="px-6 py-3 bg-primary text-white rounded-lg shadow-lg hover:bg-secondary" data-v-e0d6b541${_scopeId}> Explore Products <i class="pi pi-angle-right" data-v-e0d6b541${_scopeId}></i></button>`);
          } else {
            return [
              createVNode("button", { class: "px-6 py-3 bg-primary text-white rounded-lg shadow-lg hover:bg-secondary" }, [
                createTextVNode(" Explore Products "),
                createVNode("i", { class: "pi pi-angle-right" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="dynamic-image flex justify-center items-center w-full md:w-1/3 mb-6 md:mb-0" data-v-e0d6b541><img${ssrRenderAttr("src", selectedImage.value)} alt="Selected Product" class="w-full max-w-xs rounded-md border-0" data-v-e0d6b541></div><div class="hidden md:block bg-whit w-full md:w-1/3 pa-6 ma-5 pl-40 dark:border-orange-600" data-v-e0d6b541><div class="border border-red-600 dark:border-orange-600 rounded p-4" data-v-e0d6b541><div class="mb-4 border-b pb-2 font-medium text-dark-600 text-center" data-v-e0d6b541> Top Product </div>`);
      _push(ssrRenderComponent(_component_Carousel, {
        d_circular: true,
        autoplayInterval: 3e3,
        value: products.value,
        numVisible: 1,
        numScroll: 1,
        orientation: "horizontal",
        containerClass: "flex items-center",
        showIndicators: false,
        showNavigators: false
      }, {
        item: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f;
          if (_push2) {
            _push2(`<div class="text-center" data-v-e0d6b541${_scopeId}><img${ssrRenderAttr("src", (_a = slotProps.data) == null ? void 0 : _a.image)}${ssrRenderAttr("alt", (_b = slotProps.data) == null ? void 0 : _b.name)} class="object-cover rounded max-w-full mx-auto" data-v-e0d6b541${_scopeId}><div class="mt-4 font-medium" data-v-e0d6b541${_scopeId}>${ssrInterpolate((_c = slotProps.data) == null ? void 0 : _c.name)}</div><div class="font-semibold text-xl py-2" data-v-e0d6b541${_scopeId}>${ssrInterpolate(slotProps.data.price)}</div><div class="stock flex items-center text-sm text-gray-600 mb-4" data-v-e0d6b541${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("div", { class: "text-center" }, [
                createVNode("img", {
                  src: (_d = slotProps.data) == null ? void 0 : _d.image,
                  alt: (_e = slotProps.data) == null ? void 0 : _e.name,
                  class: "object-cover rounded max-w-full mx-auto"
                }, null, 8, ["src", "alt"]),
                createVNode("div", { class: "mt-4 font-medium" }, toDisplayString((_f = slotProps.data) == null ? void 0 : _f.name), 1),
                createVNode("div", { class: "font-semibold text-xl py-2" }, toDisplayString(slotProps.data.price), 1),
                createVNode("div", { class: "stock flex items-center text-sm text-gray-600 mb-4" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="carousel flex justify-center items-center mt-8 space-x-4" data-v-e0d6b541><button class="text-gray-600 hover:text-gray-800 px-3 py-2 bg-gray-100 rounded-full shadow-md" data-v-e0d6b541> \u2190 </button><div class="flex items-center space-x-2 overflow-x-auto" data-v-e0d6b541><!--[-->`);
      ssrRenderList(images.value, (image, index) => {
        _push(`<img${ssrRenderAttr("src", image)}${ssrRenderAttr("alt", "Product " + (index + 1))} class="${ssrRenderClass([{ "border-orange-500": selectedImage.value === image }, "w-12 h-12 md:w-16 md:h-16 rounded-md border border-gray-300 cursor-pointer hover:border-orange-500"])}" data-v-e0d6b541>`);
      });
      _push(`<!--]--></div><button class="text-gray-600 hover:text-gray-800 px-3 py-2 bg-gray-100 rounded-full shadow-md" data-v-e0d6b541> \u2192 </button></div><div class="feature__wrap grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mt-12" data-v-e0d6b541><!--[-->`);
      ssrRenderList(features.value, (feature, index) => {
        _push(`<div class="feature__item flex bg-white flex-col items-center text-center" data-v-e0d6b541><div class="icon text-4xl text-red-500" data-v-e0d6b541><i class="${ssrRenderClass(feature.icon)}" data-v-e0d6b541></i></div><div class="content mt-2" data-v-e0d6b541><h3 class="text-lg font-semibold" data-v-e0d6b541>${ssrInterpolate(feature.title)}</h3><p class="text-sm text-gray-600" data-v-e0d6b541>${ssrInterpolate(feature.description)}</p></div></div>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_sfc_main$1, { class: "w-full bg-gray-100 text-gray-800 py-10" }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Home/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Dashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e0d6b541"]]);

export { Dashboard as default };
//# sourceMappingURL=index-BD5y6LMV.mjs.map
