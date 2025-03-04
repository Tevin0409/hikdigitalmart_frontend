import { _ as __nuxt_component_0 } from './nuxt-link-BYB1KAeo.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
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
import 'pinia';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@primeuix/utils/eventbus';
import '@primeuix/utils';
import '@primeuix/utils/dom';
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
    ref([
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
    const currentIndex = ref(0);
    const testimonials = ref([
      {
        text: "At Jimmy Fairly, we believe every pair of glasses tells a unique story.",
        name: "Tarame L.",
        position: "Jimmy Fairly CEO",
        image: "https://randomuser.me/api/portraits/women/1.jpg"
      },
      {
        text: "Our customers inspire us to create eyewear that combines timeless design.",
        name: "Karimsa",
        position: "Jimmy Fairly CEO",
        image: "https://randomuser.me/api/portraits/women/2.jpg"
      },
      {
        text: "Their kind words motivate us to keep redefining what eyewear can be.",
        name: "Trampal",
        position: "Jimmy Fairly CEO",
        image: "https://randomuser.me/api/portraits/women/3.jpg"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "product-section pt-20",
        style: { "background-image": "url(' https://www.sdl.co.ke/assets/images/icons/vector-1.png')" }
      }, _attrs))} data-v-94fd216e><div class="flex flex-col md:flex-row items-center p-8" data-v-94fd216e><div class="w-full md:w-1/2 mb-8 md:mb-0 pr-8" data-v-94fd216e><h1 class="text-6xl text-pretty text-primary font-regular mb-4" data-v-94fd216e> Secure Your Home with State-of-the-Art CCTV Cameras </h1><p class="text-gray-600 font-bold mb-6" data-v-94fd216e> Transform your home and business with sophisticated and stylish gadgets, and create a secure and inviting home. </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/dashboard" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button to="/dashboard" class="bg-black text-white px-6 py-3 rounded-lg mb-4" data-v-94fd216e${_scopeId}> Shop now </button>`);
          } else {
            return [
              createVNode("button", {
                to: "/dashboard",
                class: "bg-black text-white px-6 py-3 rounded-lg mb-4"
              }, " Shop now ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex space-x-4 text-gray-600" data-v-94fd216e><!--[-->`);
      ssrRenderList(features.value, (i) => {
        _push(`<span class="flex items-center" data-v-94fd216e><i class="${ssrRenderClass(i.icon)}" data-v-94fd216e></i><p class="p-3" data-v-94fd216e>${ssrInterpolate(i.description)}</p></span>`);
      });
      _push(`<!--]--></div></div><div class="w-full md:w-1/2 grid grid-cols-2 gap-4" data-v-94fd216e><div class="relative bg-gray-100 p-4 rounded-lg" data-v-94fd216e><span class="absolute top-2 left-2 bg-white px-2 py-1 text-sm font-semibold" data-v-94fd216e>Ksh 12,000</span><img src="https://www.hikvision.com/content/dam/hikvision/uk/products-image-portal/images/DS-2CD6D54FWD-IZHSNFC.png" alt="Selected Product" class="w-full max-w-xs rounded-md border-0" data-v-94fd216e><p class="mt-2 text-sm" data-v-94fd216e>Single comfort chair</p></div><div class="bg-gray-100 p-4 rounded-lg flex flex-col justify-between" data-v-94fd216e><p class="text-lg font-semibold" data-v-94fd216e>Modern &amp; stylish</p><img src="https://www.hikvision.com/content/dam/hikvision/uk/products-image-portal/images/DS-2CD3146G2.png" alt="Furniture" class="mt-2 rounded-lg" data-v-94fd216e></div><div class="bg-gray-100 p-4 rounded-lg" data-v-94fd216e><div class="flex items-center" data-v-94fd216e><img src="https://www.hikvision.com/content/dam/hikvision/uk/products-image-portal/images/DS-2DE7A220MCG.png" alt="Person" class="rounded-full mr-3" data-v-94fd216e><div data-v-94fd216e><p class="font-semibold" data-v-94fd216e>DS-2DE7A220MCGsr</p></div></div></div><div class="bg-gray-100 p-4 rounded-lg flex items-center justify-between" data-v-94fd216e><p class="text-lg font-semibold" data-v-94fd216e>120,000+ items sold out</p><i class="pi pi-users text-2xl text-gray-600" data-v-94fd216e></i></div></div></div><div class="carousel flex justify-center items-center mt-8 space-x-4" data-v-94fd216e><button class="text-gray-600 hover:text-gray-800 px-3 py-2 bg-gray-100 rounded-full shadow-md" data-v-94fd216e> \u2190 </button><div class="flex items-center space-x-2 overflow-x-auto" data-v-94fd216e><!--[-->`);
      ssrRenderList(images.value, (image, index) => {
        _push(`<img${ssrRenderAttr("src", image)}${ssrRenderAttr("alt", "Product " + (index + 1))} class="${ssrRenderClass([{ "border-orange-500": selectedImage.value === image }, "w-12 h-12 md:w-16 md:h-16 rounded-md border border-gray-300 cursor-pointer hover:border-orange-500"])}" data-v-94fd216e>`);
      });
      _push(`<!--]--></div><button class="text-gray-600 hover:text-gray-800 px-3 py-2 bg-gray-100 rounded-full shadow-md" data-v-94fd216e> \u2192 </button></div><div class="feature__wrap grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mt-12" data-v-94fd216e><!--[-->`);
      ssrRenderList(features.value, (feature, index) => {
        _push(`<div class="feature__item flex bg-white flex-col items-center text-center" data-v-94fd216e><div class="icon text-4xl text-red-500" data-v-94fd216e><i class="${ssrRenderClass(feature.icon)}" data-v-94fd216e></i></div><div class="content mt-2" data-v-94fd216e><h3 class="text-lg font-semibold" data-v-94fd216e>${ssrInterpolate(feature.title)}</h3><p class="text-sm text-gray-600" data-v-94fd216e>${ssrInterpolate(feature.description)}</p></div></div>`);
      });
      _push(`<!--]--></div><div class="bg-gray-100 py-12" data-v-94fd216e><h2 class="text-3xl font-semibold text-center mb-8" data-v-94fd216e> Don&#39;t Take Our Word For It </h2><div class="relative max-w-5xl mx-auto" data-v-94fd216e><div class="flex overflow-hidden transition-transform duration-300 ease-in-out" style="${ssrRenderStyle({ transform: `translateX(-${currentIndex.value * 100}%)` })}" data-v-94fd216e><!--[-->`);
      ssrRenderList(testimonials.value, (testimonial, index) => {
        _push(`<div class="w-full flex-shrink-0 p-6" data-v-94fd216e><div class="bg-white shadow-lg rounded-lg p-6 text-center" data-v-94fd216e><div class="text-yellow-500 text-lg" data-v-94fd216e>\u2605\u2605\u2605\u2605\u2605</div><p class="text-gray-700 mt-3" data-v-94fd216e>${ssrInterpolate(testimonial.text)}</p><div class="mt-4 flex flex-col items-center" data-v-94fd216e><img${ssrRenderAttr("src", testimonial.image)} alt="User" class="w-12 h-12 rounded-full object-cover" data-v-94fd216e><h3 class="font-semibold mt-2" data-v-94fd216e>${ssrInterpolate(testimonial.name)}</h3><span class="text-gray-500 text-sm" data-v-94fd216e>${ssrInterpolate(testimonial.position)}</span></div></div></div>`);
      });
      _push(`<!--]--></div><div class="flex justify-center mt-6 space-x-2" data-v-94fd216e><!--[-->`);
      ssrRenderList(testimonials.value.length, (dot, index) => {
        _push(`<div class="${ssrRenderClass([currentIndex.value === index ? "bg-gray-900" : "bg-gray-400", "w-3 h-3 rounded-full cursor-pointer"])}" data-v-94fd216e></div>`);
      });
      _push(`<!--]--></div></div></div>`);
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
const Dashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-94fd216e"]]);

export { Dashboard as default };
//# sourceMappingURL=index-CKVZ1S6m.mjs.map
