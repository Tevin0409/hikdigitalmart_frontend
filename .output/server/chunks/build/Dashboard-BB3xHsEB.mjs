import { b as buildAssetsURL } from '../nitro/nitro.mjs';
import { s as script$3, _ as __nuxt_component_2 } from './index-BJXpECdB.mjs';
import { s as script$4 } from './index-CHf7NZjU.mjs';
import { useSSRContext, watch, ref, computed, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, unref, openBlock, createBlock, Fragment, renderList, createCommentVNode, withDirectives, vModelText, createElementBlock, createElementVNode, renderSlot } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { B as BaseStyle, _ as _export_sfc, a as useNuxtApp, c as useToast, u as useUserStore, b as useProductStore } from './server.mjs';
import { s as script$5 } from './index-Cf-aLWVL.mjs';
import { useRouter } from 'vue-router';
import { _ as __nuxt_component_0 } from './nuxt-link-BYB1KAeo.mjs';
import { getWindowScrollLeft, getWindowScrollTop, isRTL, getAttribute } from '@primeuix/utils/dom';
import { a as script$2$1 } from './index-XLr1qd4A.mjs';
import { s as script$6 } from './index-BFNtOUMz.mjs';
import { s as script$7 } from './index-CBz_SNTb.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import '@primevue/core/base/style';
import '@primeuix/utils/object';
import '@primeuix/styled';
import 'node:url';
import './index-BBqC3hNY.mjs';
import './index-BgIJ0E90.mjs';
import './index-Dvqyfh34.mjs';
import '@primeuix/utils/uuid';
import 'pinia';
import 'unhead';
import '@unhead/shared';
import '@primeuix/utils/eventbus';
import '@primeuix/utils';
import 'deep-pick-omit';
import 'axios';
import '@primeuix/utils/zindex';
import './index-zZrFrjQS.mjs';
import './index-DSnb32Yv.mjs';
import './index-DEuunsqE.mjs';

const _sfc_main$6 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><div class="border p-4"><img src="https://www.hikvisionshopkenya.co.ke/wp-content/uploads/2024/01/Hikvision-2-MP-Fixed-Mini-Bullet-Camera-%E2%80%93-DS-2CE16D0T-EXIPF3.6mm.jpg" width="100px" alt=""><p class="font-bold">HAVIT HV-G92 Gamepad</p><p class="text-red-500">$120</p><button class="bg-black text-white w-full py-2">Add to Cart</button></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/FlashCard.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const FlashCard = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$2]]);
const _imports_0$1 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='44'%20height='44'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='lucide%20lucide-cctv'%3e%3cpath%20d='M16.75%2012h3.632a1%201%200%200%201%20.894%201.447l-2.034%204.069a1%201%200%200%201-1.708.134l-2.124-2.97'/%3e%3cpath%20d='M17.106%209.053a1%201%200%200%201%20.447%201.341l-3.106%206.211a1%201%200%200%201-1.342.447L3.61%2012.3a2.92%202.92%200%200%201-1.3-3.91L3.69%205.6a2.92%202.92%200%200%201%203.92-1.3z'/%3e%3cpath%20d='M2%2019h3.76a2%202%200%200%200%201.8-1.1L9%2015'/%3e%3cpath%20d='M2%2021v-4'/%3e%3cpath%20d='M7%209h.01'/%3e%3c/svg%3e";
const _sfc_main$5 = {
  __name: "CategoryCard",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "cursor-pointer hover:text-red-500 pt-4" }, _attrs))}><div class="border p-4 flex items-center space-x-2"><img${ssrRenderAttr("src", _imports_0$1)} alt="Camera Icon" class="w-6 h-6"><p class="font-bold">${ssrInterpolate(__props.item.name)}</p></div></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/CategoryCard.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "ProductCard",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  emits: ["wishlist-updated"],
  setup(__props, { emit: __emit }) {
    useToast();
    useRouter();
    useUserStore();
    useNuxtApp();
    const { $formatPrice } = useNuxtApp();
    const productStore = useProductStore();
    const formattedPrice = (price) => {
      return $formatPrice(price);
    };
    productStore.wishListItems;
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_Toast = script$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border-r border-gray-200 rounded-lg p-4 text-center bg-white shadow-md relative group" }, _attrs))}><img${ssrRenderAttr("src", (_a = __props.item.images[0]) == null ? void 0 : _a.optimizeUrl)} class="h-32 mx-auto mb-2 transition-transform group-hover:scale-105" alt="Product Image"><div class="flex flex-col text-center p-2"><h3 class="text-sm font-regular truncate">${ssrInterpolate(__props.item.product.name)} <br><span class="font-medium text-sm"> (${ssrInterpolate(__props.item.name)})</span></h3><div class="flex justify-center mt-"><!--[-->`);
      ssrRenderList(5, (star) => {
        _push(`<span class="text-yellow-400"><i class="${ssrRenderClass({
          "pi pi-star-fill": star <= __props.item.rating,
          "pi pi-star": star > __props.item.rating
        })}"></i></span>`);
      });
      _push(`<!--]--><span class="text-gray-500 ml-2"><div class="flex items-center mt-2"><div class="flex text-yellow-400"><!--[-->`);
      ssrRenderList(5, (i) => {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="none" class="w-4 h-4"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>`);
      });
      _push(`<!--]--></div><p class="ml-2 text-gray-500 text-sm text-center"> (${ssrInterpolate(__props.item.reviews)} reviews) </p></div></span></div><p class="text-red-500 font-semibold text-center"> Ksh ${ssrInterpolate(formattedPrice(__props.item.price))}</p></div><div class="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity"><button class="bg-white p-2 rounded-full shadow hover:bg-gray-100"><i class="pi pi-shopping-cart text-gray-600"></i></button><button class="bg-white p-2 rounded-full shadow hover:bg-gray-100"><i class="pi pi-heart text-gray-600"></i></button></div>`);
      _push(ssrRenderComponent(_component_Toast, {
        position: "bottom-right",
        group: "br"
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/ProductCard.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "TopCard1",
  __ssrInlineRender: true,
  props: ["categories"],
  setup(__props) {
    const images = ref([
      {
        src: "data:image/jpeg;base64,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",
        alt: "Surveillance Camera 1"
      },
      {
        src: "https://media.istockphoto.com/id/1405489463/photo/three-quarter-view-of-varifocal-surveillance-camera-with-a-house-on-background.jpg?s=612x612&w=0&k=20&c=3YxtJAA4DiOgew23ZFNOgMc6Mmg29_D0oy_RWvNTA2w=",
        alt: "Surveillance Camera 2"
      },
      {
        src: "https://media.istockphoto.com/id/1410977641/photo/high-technology-security-monitoring-system-cctv-camera.jpg?s=612x612&w=0&k=20&c=ueVgTwwn5Xq-S0Tz6Wfj9sILEubWxURkzkvVrzpSYRI=",
        alt: "Surveillance Camera 3"
      }
    ]);
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
    const hoveredCategory = ref("");
    const getIcon = (name) => {
      return iconMap[name] || "pi pi-question";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Carousel = script$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-6 p-4" }, _attrs))} data-v-5aae02e4><div class="w-1/5 bg-white shadow p-4 rounded-lg relative h-32 sm:h-40 md:h-80 xl:h-80" data-v-5aae02e4><ul class="space-y-2" data-v-5aae02e4><!--[-->`);
      ssrRenderList(__props.categories, (item) => {
        _push(`<li class="flex items-center gap-2 pt-3 hover:text-primary cursor-pointer font-regular" data-v-5aae02e4><i class="${ssrRenderClass(getIcon(item.name))}" data-v-5aae02e4></i><span class="text-xs truncate" data-v-5aae02e4>${ssrInterpolate(item.name)}</span></li>`);
      });
      _push(`<!--]--></ul></div><div class="flex-1 bg-white shadow rounded-lg relative w-full h-32 sm:h-40 md:h-80 xl:h-80" data-v-5aae02e4><div class="flex items-center gap-6 relative" data-v-5aae02e4>`);
      if (unref(hoveredCategory)) {
        _push(`<div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-2xl font-bold transition-opacity duration-300 rounded w-full h-32 sm:h-40 md:h-80 xl:h-80" data-v-5aae02e4>${ssrInterpolate(unref(hoveredCategory))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="relative p-4" data-v-5aae02e4><h2 class="text-2xl font-bold" style="${ssrRenderStyle({ "font-family": "sans-serif" })}" data-v-5aae02e4> Break from <br data-v-5aae02e4> reality </h2><p class="text-lg text-gray-600" style="${ssrRenderStyle({ "font-family": "monospace" })}" data-v-5aae02e4> HD and Audio </p><div class="bg-primary text-white font-bold px-4 py-2 inline-block mt-4 rounded" data-v-5aae02e4> As low as Ksh 4,300 </div></div>`);
      if (!unref(hoveredCategory)) {
        _push(ssrRenderComponent(_component_Carousel, {
          verticalViewPortHeight: 200,
          value: unref(images),
          numVisible: 1,
          numScroll: 1,
          showIndicators: false,
          showNavigators: false,
          circular: "",
          autoplayInterval: "3000",
          class: "rounded-lg shadow-lg w-full"
        }, {
          item: withCtx((slotProps, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", slotProps.data.src)}${ssrRenderAttr("alt", slotProps.data.alt)} class="rounded-lg object-cover w-full h-32 sm:h-40 md:h-80 xl:h-80" data-v-5aae02e4${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: slotProps.data.src,
                  alt: slotProps.data.alt,
                  class: "rounded-lg object-cover w-full h-32 sm:h-40 md:h-80 xl:h-80"
                }, null, 8, ["src", "alt"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="bg-black text-white px-6 py-2 mt-6 rounded-lg absolute bottom-6 right-6" data-v-5aae02e4> Shop Now </button></div></div><div class="w-1/5 space-y-4 hidden lg:block h-32 lg:h-80 xl:h-80" data-v-5aae02e4><div class="bg-white shadow p-4 rounded-lg" data-v-5aae02e4><h4 class="text-primary font-bold" data-v-5aae02e4>HELP CENTER</h4><p class="text-gray-600 text-sm" data-v-5aae02e4>Guide to Customer Care</p><h4 class="text-primary font-bold" data-v-5aae02e4>HOT DEALS</h4><p class="text-gray-600 text-sm" data-v-5aae02e4>Updated Daily</p></div><div class="bg-primary text-white text-center p-6 rounded-lg" data-v-5aae02e4><p class="font-bold text-lg" data-v-5aae02e4>CALL OR WHATSAPP</p><p class="text-2xl font-bold" data-v-5aae02e4>+254 727 909 060</p><p class="text-sm" data-v-5aae02e4>TO ORDER</p></div></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/TopCard1.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const TopCard = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-5aae02e4"]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-black text-white py-10 mt-10" }, _attrs))} data-v-b837781b><div class="mx-auto px-4" data-v-b837781b><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6" data-v-b837781b><div data-v-b837781b><h2 class="text-lg font-bold mb-4" data-v-b837781b>Secure Group</h2><p class="mb-2" data-v-b837781b>Subscribe</p><p class="text-gray-400 text-sm mb-4" data-v-b837781b>Get 10% off your first order</p><div class="flex items-center" data-v-b837781b><input type="email" placeholder="Enter your email" class="flex-1 p-2 rounded-l-lg border-0 text-black" data-v-b837781b><button class="bg-gray-600 p-2 rounded-r-lg hover:bg-gray-800" data-v-b837781b> \u27A4 </button></div></div><div data-v-b837781b><h2 class="text-lg font-bold mb-4" data-v-b837781b>Support</h2><p class="text-gray-400 text-sm mb-2" data-v-b837781b>P.O Box, Nairobi.</p><p class="text-gray-400 text-sm mb-2" data-v-b837781b>securegroup@secure.org.com</p><p class="text-gray-400 text-sm" data-v-b837781b>+254-712-345-678</p></div><div data-v-b837781b><h2 class="text-lg font-bold mb-4" data-v-b837781b>Account</h2><ul class="space-y-2" data-v-b837781b><li data-v-b837781b><a href="#" class="text-gray-400 hover:text-white" data-v-b837781b>My Account</a></li><li data-v-b837781b>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/auth",
    class: "text-gray-400 hover:text-white"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Login / Register`);
      } else {
        return [
          createTextVNode("Login / Register")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-b837781b><a href="#" class="text-gray-400 hover:text-white" data-v-b837781b>Cart</a></li><li data-v-b837781b><a href="#" class="text-gray-400 hover:text-white" data-v-b837781b>Wishlist</a></li><li data-v-b837781b><a href="#" class="text-gray-400 hover:text-white" data-v-b837781b>Shop</a></li></ul></div><div data-v-b837781b><h2 class="text-lg font-bold mb-4" data-v-b837781b>Quick Link</h2><ul class="space-y-2" data-v-b837781b><li data-v-b837781b><a href="#" class="text-gray-400 hover:text-white" data-v-b837781b>Privacy Policy</a></li><li data-v-b837781b><a href="#" class="text-gray-400 hover:text-white" data-v-b837781b>Terms Of Use</a></li><li data-v-b837781b><a href="#" class="text-gray-400 hover:text-white" data-v-b837781b>FAQ</a></li><li data-v-b837781b><a href="#" class="text-gray-400 hover:text-white" data-v-b837781b>Contact</a></li></ul></div></div><div class="mt-10 flex flex-col sm:flex-row justify-between items-center" data-v-b837781b><div class="flex items-center space-x-6" data-v-b837781b><div data-v-b837781b><p class="text-sm text-gray-400" data-v-b837781b>Save $3 With App New User Only</p><div class="flex space-x-2" data-v-b837781b><img src="https://media.istockphoto.com/id/828088276/vector/qr-code-illustration.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=FnA7agr57XpFi081ZT5sEmxhLytMBlK4vzdQxt8A70M=" alt="QR Code" class="h-20 w-20" data-v-b837781b><div class="flex flex-col space-y-2" data-v-b837781b><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" class="h-10" data-v-b837781b><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiNQc5CapoSJE3sujvojLNNXipoAGDZYgUWw&amp;s" alt="App Store" class="h-10" data-v-b837781b></div></div></div></div><div class="mt-6 sm:mt-0 flex space-x-4" data-v-b837781b><a href="#" class="text-gray-400 hover:text-white" data-v-b837781b>s</a><a href="#" class="text-gray-400 hover:text-white" data-v-b837781b>e</a><a href="#" class="text-gray-400 hover:text-white" data-v-b837781b>c</a><a href="#" class="text-gray-400 hover:text-white" data-v-b837781b>u</a><a href="#" class="text-gray-400 hover:text-white" data-v-b837781b>r</a><a href="#" class="text-gray-400 hover:text-white" data-v-b837781b>e</a></div></div></div></footer>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/utils/Footer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-b837781b"]]);
var theme$1 = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-slider {\n    position: relative;\n    background: ".concat(dt("slider.track.background"), ";\n    border-radius: ").concat(dt("slider.track.border.radius"), ";\n}\n\n.p-slider-handle {\n    cursor: grab;\n    touch-action: none;\n    user-select: none;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: ").concat(dt("slider.handle.height"), ";\n    width: ").concat(dt("slider.handle.width"), ";\n    background: ").concat(dt("slider.handle.background"), ";\n    border-radius: ").concat(dt("slider.handle.border.radius"), ";\n    transition: background ").concat(dt("slider.transition.duration"), ", color ").concat(dt("slider.transition.duration"), ", border-color ").concat(dt("slider.transition.duration"), ", box-shadow ").concat(dt("slider.transition.duration"), ", outline-color ").concat(dt("slider.transition.duration"), ';\n    outline-color: transparent;\n}\n\n.p-slider-handle::before {\n    content: "";\n    width: ').concat(dt("slider.handle.content.width"), ";\n    height: ").concat(dt("slider.handle.content.height"), ";\n    display: block;\n    background: ").concat(dt("slider.handle.content.background"), ";\n    border-radius: ").concat(dt("slider.handle.content.border.radius"), ";\n    box-shadow: ").concat(dt("slider.handle.content.shadow"), ";\n    transition: background ").concat(dt("slider.transition.duration"), ";\n}\n\n.p-slider:not(.p-disabled) .p-slider-handle:hover {\n    background: ").concat(dt("slider.handle.hover.background"), ";\n}\n\n.p-slider:not(.p-disabled) .p-slider-handle:hover::before {\n    background: ").concat(dt("slider.handle.content.hover.background"), ";\n}\n\n.p-slider-handle:focus-visible {\n    box-shadow: ").concat(dt("slider.handle.focus.ring.shadow"), ";\n    outline: ").concat(dt("slider.handle.focus.ring.width"), " ").concat(dt("slider.handle.focus.ring.style"), " ").concat(dt("slider.handle.focus.ring.color"), ";\n    outline-offset: ").concat(dt("slider.handle.focus.ring.offset"), ";\n}\n\n.p-slider-range {\n    display: block;\n    background: ").concat(dt("slider.range.background"), ";\n    border-radius: ").concat(dt("slider.border.radius"), ";\n}\n\n.p-slider.p-slider-horizontal {\n    height: ").concat(dt("slider.track.size"), ";\n}\n\n.p-slider-horizontal .p-slider-range {\n    inset-block-start: 0;\n    inset-inline-start: 0;\n    height: 100%;\n}\n\n.p-slider-horizontal .p-slider-handle {\n    inset-block-start: 50%;\n    margin-block-start: calc(-1 * calc(").concat(dt("slider.handle.height"), " / 2));\n    margin-inline-start: calc(-1 * calc(").concat(dt("slider.handle.width"), " / 2));\n}\n\n.p-slider-vertical {\n    min-height: 100px;\n    width: ").concat(dt("slider.track.size"), ";\n}\n\n.p-slider-vertical .p-slider-handle {\n    inset-inline-start: 50%;\n    margin-inline-start: calc(-1 * calc(").concat(dt("slider.handle.width"), " / 2));\n    margin-block-end: calc(-1 * calc(").concat(dt("slider.handle.height"), " / 2));\n}\n\n.p-slider-vertical .p-slider-range {\n    inset-block-end: 0;\n    inset-inline-start: 0;\n    width: 100%;\n}\n");
};
var inlineStyles = {
  handle: {
    position: "absolute"
  },
  range: {
    position: "absolute"
  }
};
var classes$1 = {
  root: function root(_ref2) {
    var instance = _ref2.instance, props = _ref2.props;
    return ["p-slider p-component", {
      "p-disabled": props.disabled,
      "p-invalid": instance.$invalid,
      "p-slider-horizontal": props.orientation === "horizontal",
      "p-slider-vertical": props.orientation === "vertical"
    }];
  },
  range: "p-slider-range",
  handle: "p-slider-handle"
};
var SliderStyle = BaseStyle.extend({
  name: "slider",
  theme: theme$1,
  classes: classes$1,
  inlineStyles
});
var script$1$1 = {
  name: "BaseSlider",
  "extends": script$2$1,
  props: {
    min: {
      type: Number,
      "default": 0
    },
    max: {
      type: Number,
      "default": 100
    },
    orientation: {
      type: String,
      "default": "horizontal"
    },
    step: {
      type: Number,
      "default": null
    },
    range: {
      type: Boolean,
      "default": false
    },
    tabindex: {
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
  style: SliderStyle,
  provide: function provide() {
    return {
      $pcSlider: this,
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
var script$2 = {
  name: "Slider",
  "extends": script$1$1,
  inheritAttrs: false,
  emits: ["change", "slideend"],
  dragging: false,
  handleIndex: null,
  initX: null,
  initY: null,
  barWidth: null,
  barHeight: null,
  dragListener: null,
  dragEndListener: null,
  beforeUnmount: function beforeUnmount() {
    this.unbindDragListeners();
  },
  methods: {
    updateDomData: function updateDomData() {
      var rect = this.$el.getBoundingClientRect();
      this.initX = rect.left + getWindowScrollLeft();
      this.initY = rect.top + getWindowScrollTop();
      this.barWidth = this.$el.offsetWidth;
      this.barHeight = this.$el.offsetHeight;
    },
    setValue: function setValue(event) {
      var handleValue;
      var pageX = event.touches ? event.touches[0].pageX : event.pageX;
      var pageY = event.touches ? event.touches[0].pageY : event.pageY;
      if (this.orientation === "horizontal") {
        if (isRTL(this.$el)) {
          handleValue = (this.initX + this.barWidth - pageX) * 100 / this.barWidth;
        } else {
          handleValue = (pageX - this.initX) * 100 / this.barWidth;
        }
      } else {
        handleValue = (this.initY + this.barHeight - pageY) * 100 / this.barHeight;
      }
      var newValue = (this.max - this.min) * (handleValue / 100) + this.min;
      if (this.step) {
        var oldValue = this.range ? this.value[this.handleIndex] : this.value;
        var diff = newValue - oldValue;
        if (diff < 0) newValue = oldValue + Math.ceil(newValue / this.step - oldValue / this.step) * this.step;
        else if (diff > 0) newValue = oldValue + Math.floor(newValue / this.step - oldValue / this.step) * this.step;
      } else {
        newValue = Math.floor(newValue);
      }
      this.updateModel(event, newValue);
    },
    updateModel: function updateModel(event, value2) {
      var newValue = parseFloat(value2.toFixed(10));
      var modelValue;
      if (this.range) {
        modelValue = this.value ? _toConsumableArray(this.value) : [];
        if (this.handleIndex == 0) {
          if (newValue < this.min) newValue = this.min;
          else if (newValue >= this.max) newValue = this.max;
          modelValue[0] = newValue;
        } else {
          if (newValue > this.max) newValue = this.max;
          else if (newValue <= this.min) newValue = this.min;
          modelValue[1] = newValue;
        }
      } else {
        if (newValue < this.min) newValue = this.min;
        else if (newValue > this.max) newValue = this.max;
        modelValue = newValue;
      }
      this.writeValue(modelValue, event);
      this.$emit("change", modelValue);
    },
    onDragStart: function onDragStart(event, index) {
      if (this.disabled) {
        return;
      }
      this.$el.setAttribute("data-p-sliding", true);
      this.dragging = true;
      this.updateDomData();
      if (this.range && this.value[0] === this.max) {
        this.handleIndex = 0;
      } else {
        this.handleIndex = index;
      }
      event.currentTarget.focus();
    },
    onDrag: function onDrag(event) {
      if (this.dragging) {
        this.setValue(event);
      }
    },
    onDragEnd: function onDragEnd(event) {
      if (this.dragging) {
        this.dragging = false;
        this.$el.setAttribute("data-p-sliding", false);
        this.$emit("slideend", {
          originalEvent: event,
          value: this.value
        });
      }
    },
    onBarClick: function onBarClick(event) {
      if (this.disabled) {
        return;
      }
      if (getAttribute(event.target, "data-pc-section") !== "handle") {
        this.updateDomData();
        this.setValue(event);
      }
    },
    onMouseDown: function onMouseDown(event, index) {
      this.bindDragListeners();
      this.onDragStart(event, index);
    },
    onKeyDown: function onKeyDown(event, index) {
      this.handleIndex = index;
      switch (event.code) {
        case "ArrowDown":
        case "ArrowLeft":
          this.decrementValue(event, index);
          event.preventDefault();
          break;
        case "ArrowUp":
        case "ArrowRight":
          this.incrementValue(event, index);
          event.preventDefault();
          break;
        case "PageDown":
          this.decrementValue(event, index, true);
          event.preventDefault();
          break;
        case "PageUp":
          this.incrementValue(event, index, true);
          event.preventDefault();
          break;
        case "Home":
          this.updateModel(event, this.min);
          event.preventDefault();
          break;
        case "End":
          this.updateModel(event, this.max);
          event.preventDefault();
          break;
      }
    },
    onBlur: function onBlur(event, index) {
      var _this$formField$onBlu, _this$formField;
      (_this$formField$onBlu = (_this$formField = this.formField).onBlur) === null || _this$formField$onBlu === void 0 || _this$formField$onBlu.call(_this$formField, event);
    },
    decrementValue: function decrementValue(event, index) {
      var pageKey = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
      var newValue;
      if (this.range) {
        if (this.step) newValue = this.value[index] - this.step;
        else newValue = this.value[index] - 1;
      } else {
        if (this.step) newValue = this.value - this.step;
        else if (!this.step && pageKey) newValue = this.value - 10;
        else newValue = this.value - 1;
      }
      this.updateModel(event, newValue);
      event.preventDefault();
    },
    incrementValue: function incrementValue(event, index) {
      var pageKey = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
      var newValue;
      if (this.range) {
        if (this.step) newValue = this.value[index] + this.step;
        else newValue = this.value[index] + 1;
      } else {
        if (this.step) newValue = this.value + this.step;
        else if (!this.step && pageKey) newValue = this.value + 10;
        else newValue = this.value + 1;
      }
      this.updateModel(event, newValue);
      event.preventDefault();
    },
    bindDragListeners: function bindDragListeners() {
      if (!this.dragListener) {
        this.dragListener = this.onDrag.bind(this);
        (void 0).addEventListener("mousemove", this.dragListener);
      }
      if (!this.dragEndListener) {
        this.dragEndListener = this.onDragEnd.bind(this);
        (void 0).addEventListener("mouseup", this.dragEndListener);
      }
    },
    unbindDragListeners: function unbindDragListeners() {
      if (this.dragListener) {
        (void 0).removeEventListener("mousemove", this.dragListener);
        this.dragListener = null;
      }
      if (this.dragEndListener) {
        (void 0).removeEventListener("mouseup", this.dragEndListener);
        this.dragEndListener = null;
      }
    },
    rangeStyle: function rangeStyle() {
      if (this.range) {
        var rangeSliderWidth = this.rangeEndPosition > this.rangeStartPosition ? this.rangeEndPosition - this.rangeStartPosition : this.rangeStartPosition - this.rangeEndPosition;
        var rangeSliderPosition = this.rangeEndPosition > this.rangeStartPosition ? this.rangeStartPosition : this.rangeEndPosition;
        if (this.horizontal) {
          return {
            "inset-inline-start": rangeSliderPosition + "%",
            width: rangeSliderWidth + "%"
          };
        } else {
          return {
            bottom: rangeSliderPosition + "%",
            height: rangeSliderWidth + "%"
          };
        }
      } else {
        if (this.horizontal) {
          return {
            width: this.handlePosition + "%"
          };
        } else {
          return {
            height: this.handlePosition + "%"
          };
        }
      }
    },
    handleStyle: function handleStyle() {
      if (this.horizontal) {
        return {
          "inset-inline-start": this.handlePosition + "%"
        };
      } else {
        return {
          bottom: this.handlePosition + "%"
        };
      }
    },
    rangeStartHandleStyle: function rangeStartHandleStyle() {
      if (this.horizontal) {
        return {
          "inset-inline-start": this.rangeStartPosition + "%"
        };
      } else {
        return {
          bottom: this.rangeStartPosition + "%"
        };
      }
    },
    rangeEndHandleStyle: function rangeEndHandleStyle() {
      if (this.horizontal) {
        return {
          "inset-inline-start": this.rangeEndPosition + "%"
        };
      } else {
        return {
          bottom: this.rangeEndPosition + "%"
        };
      }
    }
  },
  computed: {
    value: function value() {
      var _this$d_value3;
      if (this.range) {
        var _this$d_value$, _this$d_value, _this$d_value$2, _this$d_value2;
        return [(_this$d_value$ = (_this$d_value = this.d_value) === null || _this$d_value === void 0 ? void 0 : _this$d_value[0]) !== null && _this$d_value$ !== void 0 ? _this$d_value$ : this.min, (_this$d_value$2 = (_this$d_value2 = this.d_value) === null || _this$d_value2 === void 0 ? void 0 : _this$d_value2[1]) !== null && _this$d_value$2 !== void 0 ? _this$d_value$2 : this.max];
      }
      return (_this$d_value3 = this.d_value) !== null && _this$d_value3 !== void 0 ? _this$d_value3 : this.min;
    },
    horizontal: function horizontal() {
      return this.orientation === "horizontal";
    },
    vertical: function vertical() {
      return this.orientation === "vertical";
    },
    handlePosition: function handlePosition() {
      if (this.value < this.min) return 0;
      else if (this.value > this.max) return 100;
      else return (this.value - this.min) * 100 / (this.max - this.min);
    },
    rangeStartPosition: function rangeStartPosition() {
      if (this.value && this.value[0] !== void 0) {
        if (this.value[0] < this.min) return 0;
        else return (this.value[0] - this.min) * 100 / (this.max - this.min);
      } else return 0;
    },
    rangeEndPosition: function rangeEndPosition() {
      if (this.value && this.value.length === 2 && this.value[1] !== void 0) {
        if (this.value[1] > this.max) return 100;
        else return (this.value[1] - this.min) * 100 / (this.max - this.min);
      } else return 100;
    }
  }
};
var _hoisted_1 = ["tabindex", "aria-valuemin", "aria-valuenow", "aria-valuemax", "aria-labelledby", "aria-label", "aria-orientation"];
var _hoisted_2 = ["tabindex", "aria-valuemin", "aria-valuenow", "aria-valuemax", "aria-labelledby", "aria-label", "aria-orientation"];
var _hoisted_3 = ["tabindex", "aria-valuemin", "aria-valuenow", "aria-valuemax", "aria-labelledby", "aria-label", "aria-orientation"];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root"),
    onClick: _cache[18] || (_cache[18] = function() {
      return $options.onBarClick && $options.onBarClick.apply($options, arguments);
    })
  }, _ctx.ptmi("root"), {
    "data-p-sliding": false
  }), [createElementVNode("span", mergeProps({
    "class": _ctx.cx("range"),
    style: [_ctx.sx("range"), $options.rangeStyle()]
  }, _ctx.ptm("range")), null, 16), !_ctx.range ? (openBlock(), createElementBlock("span", mergeProps({
    key: 0,
    "class": _ctx.cx("handle"),
    style: [_ctx.sx("handle"), $options.handleStyle()],
    onTouchstartPassive: _cache[0] || (_cache[0] = function($event) {
      return $options.onDragStart($event);
    }),
    onTouchmovePassive: _cache[1] || (_cache[1] = function($event) {
      return $options.onDrag($event);
    }),
    onTouchend: _cache[2] || (_cache[2] = function($event) {
      return $options.onDragEnd($event);
    }),
    onMousedown: _cache[3] || (_cache[3] = function($event) {
      return $options.onMouseDown($event);
    }),
    onKeydown: _cache[4] || (_cache[4] = function($event) {
      return $options.onKeyDown($event);
    }),
    onBlur: _cache[5] || (_cache[5] = function($event) {
      return $options.onBlur($event);
    }),
    tabindex: _ctx.tabindex,
    role: "slider",
    "aria-valuemin": _ctx.min,
    "aria-valuenow": _ctx.d_value,
    "aria-valuemax": _ctx.max,
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-label": _ctx.ariaLabel,
    "aria-orientation": _ctx.orientation
  }, _ctx.ptm("handle")), null, 16, _hoisted_1)) : createCommentVNode("", true), _ctx.range ? (openBlock(), createElementBlock("span", mergeProps({
    key: 1,
    "class": _ctx.cx("handle"),
    style: [_ctx.sx("handle"), $options.rangeStartHandleStyle()],
    onTouchstartPassive: _cache[6] || (_cache[6] = function($event) {
      return $options.onDragStart($event, 0);
    }),
    onTouchmovePassive: _cache[7] || (_cache[7] = function($event) {
      return $options.onDrag($event);
    }),
    onTouchend: _cache[8] || (_cache[8] = function($event) {
      return $options.onDragEnd($event);
    }),
    onMousedown: _cache[9] || (_cache[9] = function($event) {
      return $options.onMouseDown($event, 0);
    }),
    onKeydown: _cache[10] || (_cache[10] = function($event) {
      return $options.onKeyDown($event, 0);
    }),
    onBlur: _cache[11] || (_cache[11] = function($event) {
      return $options.onBlur($event, 0);
    }),
    tabindex: _ctx.tabindex,
    role: "slider",
    "aria-valuemin": _ctx.min,
    "aria-valuenow": _ctx.d_value ? _ctx.d_value[0] : null,
    "aria-valuemax": _ctx.max,
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-label": _ctx.ariaLabel,
    "aria-orientation": _ctx.orientation
  }, _ctx.ptm("startHandler")), null, 16, _hoisted_2)) : createCommentVNode("", true), _ctx.range ? (openBlock(), createElementBlock("span", mergeProps({
    key: 2,
    "class": _ctx.cx("handle"),
    style: [_ctx.sx("handle"), $options.rangeEndHandleStyle()],
    onTouchstartPassive: _cache[12] || (_cache[12] = function($event) {
      return $options.onDragStart($event, 1);
    }),
    onTouchmovePassive: _cache[13] || (_cache[13] = function($event) {
      return $options.onDrag($event);
    }),
    onTouchend: _cache[14] || (_cache[14] = function($event) {
      return $options.onDragEnd($event);
    }),
    onMousedown: _cache[15] || (_cache[15] = function($event) {
      return $options.onMouseDown($event, 1);
    }),
    onKeydown: _cache[16] || (_cache[16] = function($event) {
      return $options.onKeyDown($event, 1);
    }),
    onBlur: _cache[17] || (_cache[17] = function($event) {
      return $options.onBlur($event, 1);
    }),
    tabindex: _ctx.tabindex,
    role: "slider",
    "aria-valuemin": _ctx.min,
    "aria-valuenow": _ctx.d_value ? _ctx.d_value[1] : null,
    "aria-valuemax": _ctx.max,
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-label": _ctx.ariaLabel,
    "aria-orientation": _ctx.orientation
  }, _ctx.ptm("endHandler")), null, 16, _hoisted_3)) : createCommentVNode("", true)], 16);
}
script$2.render = render$1;
var theme2 = function theme3(_ref) {
  var dt = _ref.dt;
  return "\n.p-card {\n    background: ".concat(dt("card.background"), ";\n    color: ").concat(dt("card.color"), ";\n    box-shadow: ").concat(dt("card.shadow"), ";\n    border-radius: ").concat(dt("card.border.radius"), ";\n    display: flex;\n    flex-direction: column;\n}\n\n.p-card-caption {\n    display: flex;\n    flex-direction: column;\n    gap: ").concat(dt("card.caption.gap"), ";\n}\n\n.p-card-body {\n    padding: ").concat(dt("card.body.padding"), ";\n    display: flex;\n    flex-direction: column;\n    gap: ").concat(dt("card.body.gap"), ";\n}\n\n.p-card-title {\n    font-size: ").concat(dt("card.title.font.size"), ";\n    font-weight: ").concat(dt("card.title.font.weight"), ";\n}\n\n.p-card-subtitle {\n    color: ").concat(dt("card.subtitle.color"), ";\n}\n");
};
var classes = {
  root: "p-card p-component",
  header: "p-card-header",
  body: "p-card-body",
  caption: "p-card-caption",
  title: "p-card-title",
  subtitle: "p-card-subtitle",
  content: "p-card-content",
  footer: "p-card-footer"
};
var CardStyle = BaseStyle.extend({
  name: "card",
  theme: theme2,
  classes
});
var script$1 = {
  name: "BaseCard",
  "extends": script$7,
  style: CardStyle,
  provide: function provide2() {
    return {
      $pcCard: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "Card",
  "extends": script$1,
  inheritAttrs: false
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [_ctx.$slots.header ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    "class": _ctx.cx("header")
  }, _ctx.ptm("header")), [renderSlot(_ctx.$slots, "header")], 16)) : createCommentVNode("", true), createElementVNode("div", mergeProps({
    "class": _ctx.cx("body")
  }, _ctx.ptm("body")), [_ctx.$slots.title || _ctx.$slots.subtitle ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    "class": _ctx.cx("caption")
  }, _ctx.ptm("caption")), [_ctx.$slots.title ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    "class": _ctx.cx("title")
  }, _ctx.ptm("title")), [renderSlot(_ctx.$slots, "title")], 16)) : createCommentVNode("", true), _ctx.$slots.subtitle ? (openBlock(), createElementBlock("div", mergeProps({
    key: 1,
    "class": _ctx.cx("subtitle")
  }, _ctx.ptm("subtitle")), [renderSlot(_ctx.$slots, "subtitle")], 16)) : createCommentVNode("", true)], 16)) : createCommentVNode("", true), createElementVNode("div", mergeProps({
    "class": _ctx.cx("content")
  }, _ctx.ptm("content")), [renderSlot(_ctx.$slots, "content")], 16), _ctx.$slots.footer ? (openBlock(), createElementBlock("div", mergeProps({
    key: 1,
    "class": _ctx.cx("footer")
  }, _ctx.ptm("footer")), [renderSlot(_ctx.$slots, "footer")], 16)) : createCommentVNode("", true)], 16)], 16);
}
script.render = render;
const _sfc_main$1 = {
  __name: "FilterCard",
  __ssrInlineRender: true,
  setup(__props) {
    const filters = ref([
      {
        label: "Resolution",
        type: "checkbox",
        options: ["720p", "1080p", "4K"],
        selected: []
      },
      {
        label: "Price",
        type: "range",
        range: {
          values: [100, 500]
          // Default slider values [min, max]
        }
      },
      {
        label: "Special Features",
        type: "checkbox",
        options: [
          "Night Vision",
          "Motion Detection",
          "Two-way Audio",
          "Face Detection",
          "Waterproof",
          "Pan-Tilt",
          "Face Recognition",
          "Built-in Siren",
          "One-way Audio",
          "Human Motion Tracking",
          "Sound Detection",
          "Vandal-proof",
          "Finger Recognition",
          "People Counting",
          "Temperature Measurement"
        ],
        selected: []
      },
      {
        label: "Type",
        type: "checkbox",
        options: [
          "IP Camera",
          "Dome Camera",
          "Bullet Camera",
          "Analog Camera",
          "PTZ Camera"
        ],
        selected: []
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = script;
      const _component_Checkbox = script$6;
      const _component_Slider = script$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-1/4 px-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Card, null, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Apply Filters`);
          } else {
            return [
              createTextVNode("Apply Filters")
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(filters.value, (filter, index) => {
              _push2(`<div class="mb-6"${_scopeId}><h4 class="font-medium mb-2"${_scopeId}>${ssrInterpolate(filter.label)}</h4>`);
              if (filter.type === "checkbox") {
                _push2(`<div class="space-y-2"${_scopeId}><!--[-->`);
                ssrRenderList(filter.options, (option) => {
                  _push2(`<div class="flex items-center"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_Checkbox, {
                    modelValue: filter.selected,
                    "onUpdate:modelValue": ($event) => filter.selected = $event,
                    value: option,
                    class: "mr-2"
                  }, null, _parent2, _scopeId));
                  _push2(`<label${ssrRenderAttr("for", option)}${_scopeId}>${ssrInterpolate(option)}</label></div>`);
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (filter.type === "range") {
                _push2(`<div class="space-y-2"${_scopeId}><div class="w-56"${_scopeId}><div class="flex gap-2"${_scopeId}><input type="number"${ssrRenderAttr("value", filter.range.values[0])} placeholder="Min." class="w-full border rounded-md p-2"${_scopeId}><input type="number"${ssrRenderAttr("value", filter.range.values[1])} placeholder="Max." class="w-full border rounded-md p-2"${_scopeId}></div>`);
                _push2(ssrRenderComponent(_component_Slider, {
                  modelValue: filter.range.values,
                  "onUpdate:modelValue": ($event) => filter.range.values = $event,
                  range: "",
                  class: "w-56 mt-3 pt-2",
                  min: 0,
                  max: 1e3,
                  step: 1
                }, null, _parent2, _scopeId));
                _push2(`</div><button class="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"${_scopeId}> OK </button></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(filters.value, (filter, index) => {
                return openBlock(), createBlock("div", {
                  key: index,
                  class: "mb-6"
                }, [
                  createVNode("h4", { class: "font-medium mb-2" }, toDisplayString(filter.label), 1),
                  filter.type === "checkbox" ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "space-y-2"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(filter.options, (option) => {
                      return openBlock(), createBlock("div", {
                        key: option,
                        class: "flex items-center"
                      }, [
                        createVNode(_component_Checkbox, {
                          modelValue: filter.selected,
                          "onUpdate:modelValue": ($event) => filter.selected = $event,
                          value: option,
                          class: "mr-2"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "value"]),
                        createVNode("label", { for: option }, toDisplayString(option), 9, ["for"])
                      ]);
                    }), 128))
                  ])) : createCommentVNode("", true),
                  filter.type === "range" ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "space-y-2"
                  }, [
                    createVNode("div", { class: "w-56" }, [
                      createVNode("div", { class: "flex gap-2" }, [
                        withDirectives(createVNode("input", {
                          type: "number",
                          "onUpdate:modelValue": ($event) => filter.range.values[0] = $event,
                          placeholder: "Min.",
                          class: "w-full border rounded-md p-2"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, filter.range.values[0]]
                        ]),
                        withDirectives(createVNode("input", {
                          type: "number",
                          "onUpdate:modelValue": ($event) => filter.range.values[1] = $event,
                          placeholder: "Max.",
                          class: "w-full border rounded-md p-2"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, filter.range.values[1]]
                        ])
                      ]),
                      createVNode(_component_Slider, {
                        modelValue: filter.range.values,
                        "onUpdate:modelValue": ($event) => filter.range.values = $event,
                        range: "",
                        class: "w-56 mt-3 pt-2",
                        min: 0,
                        max: 1e3,
                        step: 1
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("button", {
                      onClick: ($event) => _ctx.applyRangeFilter(filter),
                      class: "bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
                    }, " OK ", 8, ["onClick"])
                  ])) : createCommentVNode("", true)
                ]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/FilterCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _imports_0 = "" + buildAssetsURL("empty.OjLzVIHN.jpg");
const _sfc_main = {
  name: "Dashboard",
  components: {
    FlashCard,
    CategoryCard: _sfc_main$5,
    ProductCard: _sfc_main$4,
    TopCard,
    Footer,
    FilterCard: _sfc_main$1
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
    const value2 = ref([20, 80]);
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
    const formatPrice = (value22) => {
      if (!value22) return "0";
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "Ksh",
        minimumFractionDigits: 0
      }).format(value22);
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
        const response = await $axios2.get("/product/product-models", {
          params: {
            ...params,
            // Preserve existing params
            page: currentPage.value,
            limit: 10
            // Set your desired limit
          }
        });
        fetching.value = false;
        fetchingMore.value = false;
        products.value = [...products.value, ...response.data.results];
      } catch (error) {
        console.error("Error fetching products:", error);
        fetching.value = false;
        fetchingMore.value = false;
      }
    };
    const responsiveOptions = ref([
      {
        breakpoint: "1400px",
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: "1199px",
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: "767px",
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: "575px",
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
      value: value2,
      filter,
      showMoreProducts,
      fetching,
      fetchingMore,
      formatPrice,
      randomizedProducts,
      goToProductPage,
      getIcon
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TopCard = resolveComponent("TopCard");
  const _component_Carousel = script$3;
  const _component_FilterCard = resolveComponent("FilterCard");
  const _component_ProductCard = resolveComponent("ProductCard");
  const _component_Button = script$4;
  const _component_Footer = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto my-10 pa-10" }, _attrs))} data-v-97a5fe53>`);
  _push(ssrRenderComponent(_component_TopCard, { categories: $setup.categories }, null, _parent));
  _push(`<section class="flash-sales mt-12 mx-4" data-v-97a5fe53><h2 class="text-xl font-bold" data-v-97a5fe53>Browse By Category</h2>`);
  _push(ssrRenderComponent(_component_Carousel, {
    value: $setup.categories,
    numVisible: 4,
    numScroll: 5,
    responsiveOptions: $setup.responsiveOptions
  }, {
    item: withCtx((slotProps, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="border border-surface-200 dark:border-surface-700 rounded m-2 bg-white" data-v-97a5fe53${_scopeId}><div class="p-4" data-v-97a5fe53${_scopeId}><div class="mb-4 text-xs font-medium text-center flex items-center" data-v-97a5fe53${_scopeId}><i class="${ssrRenderClass($setup.getIcon(slotProps.data.name))}" data-v-97a5fe53${_scopeId}></i> ${ssrInterpolate(slotProps.data.name)}</div><div class="flex justify-between items-center" data-v-97a5fe53${_scopeId}><div class="mt-0 font-semibold text-xl" data-v-97a5fe53${_scopeId}>${ssrInterpolate(slotProps.data.price)}</div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "border border-surface-200 dark:border-surface-700 rounded m-2 bg-white" }, [
            createVNode("div", { class: "p-4" }, [
              createVNode("div", { class: "mb-4 text-xs font-medium text-center flex items-center" }, [
                createVNode("i", {
                  class: $setup.getIcon(slotProps.data.name)
                }, null, 2),
                createTextVNode(" " + toDisplayString(slotProps.data.name), 1)
              ]),
              createVNode("div", { class: "flex justify-between items-center" }, [
                createVNode("div", { class: "mt-0 font-semibold text-xl" }, toDisplayString(slotProps.data.price), 1)
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</section><section data-v-97a5fe53><div class="p-4 rounded-md" data-v-97a5fe53><div class="flex justify-between items-center mb-4 px-2" data-v-97a5fe53><h2 class="text-lg font-semibold" data-v-97a5fe53>Top selling items</h2></div><div class="flex overflow-x-auto gap-4 p-2" data-v-97a5fe53><!--[-->`);
  ssrRenderList($setup.randomizedProducts, (product, index) => {
    var _a;
    _push(`<div class="min-w-[200px] md:min-w-[220px] bg-white rounded-md shadow-md cursor-pointer p-2" data-v-97a5fe53><div class="relative" data-v-97a5fe53><img${ssrRenderAttr("src", (_a = product.images[0]) == null ? void 0 : _a.optimizeUrl)}${ssrRenderAttr("alt", product.name)} class="w-full h-36 object-cover rounded-md" data-v-97a5fe53></div> ${ssrInterpolate(product.product.name)} <h3 class="text-sm font-medium mt-2 truncate" data-v-97a5fe53>${ssrInterpolate(product.name)}</h3><p class="text-lg font-semibold text-gray-900" data-v-97a5fe53>${ssrInterpolate($setup.formatPrice(product.price))}</p><p class="text-gray-500 text-xs line-through" data-v-97a5fe53>${ssrInterpolate(product.oldPrice)}</p></div>`);
  });
  _push(`<!--]--></div></div></section><section class="flash-sales mt-5 mx-2 full-screen" style="${ssrRenderStyle({ "min-height": "900px" })}" data-v-97a5fe53><div class="flex justify-between items-center mb-4" data-v-97a5fe53><h2 class="text-xl font-bold" data-v-97a5fe53>Explore Our Products</h2><div class="flex space-x-2" data-v-97a5fe53><button class="bg-red-500 text-white px-4 py-2" data-v-97a5fe53>View All</button></div></div><div class="flex" data-v-97a5fe53>`);
  if ($setup.filter) {
    _push(ssrRenderComponent(_component_FilterCard, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="w-full" data-v-97a5fe53>`);
  if ($setup.fetching && $setup.products.length < 1) {
    _push(`<div class="text-center mt-6" data-v-97a5fe53><div class="relative flex justify-center items-center" data-v-97a5fe53><div class="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-100" data-v-97a5fe53></div><img src="https://freelancerdxb.s3.eu-central-1.amazonaws.com/documents/image%20%285%29__5d197f13926ac20a20a6f301d00ce69b516f83eb.png" class="rounded-full h-24 w-24" data-v-97a5fe53></div></div>`);
  } else if ($setup.products.length == 0) {
    _push(`<div class="flex flex-col items-center justify-center text-center mt-12 text-gray-500" data-v-97a5fe53><img${ssrRenderAttr("src", _imports_0)} alt="No items found" class="h-56 w-56" data-v-97a5fe53><p class="pt-6" data-v-97a5fe53>No items found</p></div>`);
  } else {
    _push(`<div class="grid gap-3 grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 justify-center" data-v-97a5fe53><!--[-->`);
    ssrRenderList($setup.products, (product) => {
      _push(ssrRenderComponent(_component_ProductCard, {
        key: product.id,
        item: product
      }, null, _parent));
    });
    _push(`<!--]--></div>`);
  }
  if ($setup.products.length != 0) {
    _push(`<div class="flex justify-center py-8" data-v-97a5fe53>`);
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
const Dashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-97a5fe53"]]);

export { Dashboard as default };
//# sourceMappingURL=Dashboard-BB3xHsEB.mjs.map
