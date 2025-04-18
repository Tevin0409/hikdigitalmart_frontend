import { _ as __nuxt_component_0 } from './nuxt-link-DpsmJg1c.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './Footer-Dh1_azIl.mjs';
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
    ref(images.value[0]);
    const logos = [
      {
        src: "https://www.nemtek.co.za/wp-content/uploads/2021/07/NEMTEK_logo.svg",
        alt: "NEMTEK"
      },
      {
        src: "https://logos-world.net/wp-content/uploads/2023/01/Hikvision-Logo.png",
        alt: "HIKVISION"
      }
    ];
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
    const featuresSIgn = ref([
      {
        icon: "pi pi-cog",
        title: "Technician",
        description: "Sign up with us today to enjoy discounted prices."
      },
      // {
      //   icon: "pi pi-users",
      //   title: "Wholesaler",
      //   description: "Sign up with us today to enjoy discounted prices.",
      // },
      {
        icon: "pi pi-shopping-cart",
        title: "User",
        description: "Sign up with us today to enjoy discounted prices."
      },
      {
        icon: "pi pi-user",
        title: "Shop Owner",
        description: "Sign up with us today to enjoy request quotation."
      }
    ]);
    const features = ref([
      {
        icon: "pi pi-truck",
        title: "Shipping",
        description: "Certified Products"
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
      // {
      //   icon: "pi pi-money-bill",
      //   title: "Money Back",
      //   description: "Guaranteed Refund",
      // },
      {
        icon: "pi pi-thumbs-up",
        title: "Quality Products",
        description: "Trusted Quality"
      }
    ]);
    ref(0);
    ref([
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
        class: "product-section pt-8",
        style: { "background-image": "url(' https://www.sdl.co.ke/assets/images/icons/vector-1.png')" }
      }, _attrs))} data-v-3f0b2b70><div class="flex flex-col md:flex-row items-center" data-v-3f0b2b70><div class="w-full md:w-1/2 mb-8 md:mb-0 pr-8" data-v-3f0b2b70><h1 class="text-4xl text-pretty text-primary font-regular mb-4" data-v-3f0b2b70> Secure Your Home with State-of-the-Art CCTV Cameras </h1><p class="text-gray-600 font-bold mb-6" data-v-3f0b2b70> Transform your home and business with sophisticated and stylish gadgets, and create a secure and inviting home. </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/dashboard" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button to="/dashboard" class="bg-black text-white px-6 py-3 rounded-lg mb-4" data-v-3f0b2b70${_scopeId}> Shop now </button>`);
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
      _push(`<div class="flex space-x-4 text-gray-600" data-v-3f0b2b70><!--[-->`);
      ssrRenderList(features.value, (i) => {
        _push(`<span class="flex items-center" data-v-3f0b2b70><i class="${ssrRenderClass(i.icon)}" data-v-3f0b2b70></i><p class="p-3" data-v-3f0b2b70>${ssrInterpolate(i.description)}</p></span>`);
      });
      _push(`<!--]--></div></div><div class="w-full md:w-1/2" data-v-3f0b2b70><div class="md:1/2 p-4 rounded-lg flex flex-col items-center text-center" data-v-3f0b2b70><p class="text-lg font-semibold" data-v-3f0b2b70>Modern &amp; stylish</p><img src="https://www.hikvision.com/content/dam/hikvision/uk/products-image-portal/images/DS-2CD6D54FWD-IZHSNFC.png" alt="Selected Product" class="mt-2 rounded-lg w-1/2 bg-gray-50" data-v-3f0b2b70></div></div></div><div class="flex flex-col items-center py-8" data-v-3f0b2b70><p class="text-gray-600 text-center mb-4 font-bold" data-v-3f0b2b70> Our Partners <span class="font-bold text-black" data-v-3f0b2b70></span></p><div class="flex flex-wrap justify-center gap-6 md:gap-10" data-v-3f0b2b70><!--[-->`);
      ssrRenderList(logos, (logo, index) => {
        _push(`<img${ssrRenderAttr("src", logo.src)}${ssrRenderAttr("alt", logo.alt)} class="h-20 md:h-20 object-contain" data-v-3f0b2b70>`);
      });
      _push(`<!--]--></div></div><div class="flex justify-center text-center py-8 pb-10" data-v-3f0b2b70><div data-v-3f0b2b70><p class="text-2xl font-bold text-gray-900" data-v-3f0b2b70> Are you a Technician, Wholesaler, or Retailer? </p><span class="text-gray-600" data-v-3f0b2b70> We\u2019ve got you covered Sign up with us today to enjoy discounted prices. </span></div></div><div class="flex justify-center gap-4 pb-12" data-v-3f0b2b70><!--[-->`);
      ssrRenderList(featuresSIgn.value, (feature, index) => {
        _push(`<div class="feature__item flex bg-white flex-col items-center text-center cursor-pointer" data-v-3f0b2b70><div class="icon text-4xl text-red-500" data-v-3f0b2b70><i class="${ssrRenderClass(feature.icon)}" data-v-3f0b2b70></i></div><div class="content mt-2" data-v-3f0b2b70><h3 class="text-lg font-semibold" data-v-3f0b2b70>${ssrInterpolate(feature.title)}</h3><p class="text-sm text-gray-600" data-v-3f0b2b70>${ssrInterpolate(feature.description)}</p></div></div>`);
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
const Dashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3f0b2b70"]]);

export { Dashboard as default };
//# sourceMappingURL=index-kp0g20_0.mjs.map
