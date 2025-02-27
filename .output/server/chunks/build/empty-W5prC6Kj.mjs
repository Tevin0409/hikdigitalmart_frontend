import { b as buildAssetsURL } from '../nitro/nitro.mjs';
import { useSSRContext, mergeProps, ref, withCtx, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, unref, createElementBlock } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { B as BaseStyle, _ as _export_sfc, c as useToast, u as useUserStore, a as useNuxtApp, b as useProductStore } from './server.mjs';
import { s as script$2 } from './index-DJ-ZgwLv.mjs';
import { useRouter } from 'vue-router';
import { s as script$5 } from './index-CzrJQldg.mjs';
import { a as script$1$1 } from './index-BjfqnR8d.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-BYB1KAeo.mjs';
import { s as script$4 } from './index-C-aCq1t3.mjs';
import { s as script$3 } from './index-DR30ug9d.mjs';

const _sfc_main$5 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><div class="border p-4"><img src="https://www.hikvisionshopkenya.co.ke/wp-content/uploads/2024/01/Hikvision-2-MP-Fixed-Mini-Bullet-Camera-%E2%80%93-DS-2CE16D0T-EXIPF3.6mm.jpg" width="100px" alt=""><p class="font-bold">HAVIT HV-G92 Gamepad</p><p class="text-red-500">$120</p><button class="bg-black text-white w-full py-2">Add to Cart</button></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/FlashCard.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const FlashCard = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0$1 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='44'%20height='44'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='lucide%20lucide-cctv'%3e%3cpath%20d='M16.75%2012h3.632a1%201%200%200%201%20.894%201.447l-2.034%204.069a1%201%200%200%201-1.708.134l-2.124-2.97'/%3e%3cpath%20d='M17.106%209.053a1%201%200%200%201%20.447%201.341l-3.106%206.211a1%201%200%200%201-1.342.447L3.61%2012.3a2.92%202.92%200%200%201-1.3-3.91L3.69%205.6a2.92%202.92%200%200%201%203.92-1.3z'/%3e%3cpath%20d='M2%2019h3.76a2%202%200%200%200%201.8-1.1L9%2015'/%3e%3cpath%20d='M2%2021v-4'/%3e%3cpath%20d='M7%209h.01'/%3e%3c/svg%3e";
const _sfc_main$4 = {
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/CategoryCard.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
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
      const _component_Toast = script$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border-r border-gray-200 rounded-lg p-4 text-center bg-white shadow-md relative group" }, _attrs))}><img${ssrRenderAttr("src", (_a = __props.item.images[0]) == null ? void 0 : _a.uploadUrl)} class="h-32 mx-auto mb-2 transition-transform group-hover:scale-105" alt="Product Image"><div class="flex flex-col text-center p-2 hover:text-primary transition-colors duration-200"><h3 class="text-sm font-regular truncate hover:text-primary transition-colors duration-200 cursor-pointer">${ssrInterpolate(__props.item.product.name)} <br><span class="font-medium text-sm"> (${ssrInterpolate(__props.item.name)})</span></h3><div class="flex justify-center mt-"><!--[-->`);
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/ProductCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var theme = function theme2(_ref) {
  var dt = _ref.dt;
  return "\n.p-skeleton {\n    overflow: hidden;\n    background: ".concat(dt("skeleton.background"), ";\n    border-radius: ").concat(dt("skeleton.border.radius"), ';\n}\n\n.p-skeleton::after {\n    content: "";\n    animation: p-skeleton-animation 1.2s infinite;\n    height: 100%;\n    left: 0;\n    position: absolute;\n    right: 0;\n    top: 0;\n    transform: translateX(-100%);\n    z-index: 1;\n    background: linear-gradient(90deg, rgba(255, 255, 255, 0), ').concat(dt("skeleton.animation.background"), ", rgba(255, 255, 255, 0));\n}\n\n[dir='rtl'] .p-skeleton::after {\n    animation-name: p-skeleton-animation-rtl;\n}\n\n.p-skeleton-circle {\n    border-radius: 50%;\n}\n\n.p-skeleton-animation-none::after {\n    animation: none;\n}\n\n@keyframes p-skeleton-animation {\n    from {\n        transform: translateX(-100%);\n    }\n    to {\n        transform: translateX(100%);\n    }\n}\n\n@keyframes p-skeleton-animation-rtl {\n    from {\n        transform: translateX(100%);\n    }\n    to {\n        transform: translateX(-100%);\n    }\n}\n");
};
var inlineStyles = {
  root: {
    position: "relative"
  }
};
var classes = {
  root: function root(_ref2) {
    var props = _ref2.props;
    return ["p-skeleton p-component", {
      "p-skeleton-circle": props.shape === "circle",
      "p-skeleton-animation-none": props.animation === "none"
    }];
  }
};
var SkeletonStyle = BaseStyle.extend({
  name: "skeleton",
  theme,
  classes,
  inlineStyles
});
var script$1 = {
  name: "BaseSkeleton",
  "extends": script$1$1,
  props: {
    shape: {
      type: String,
      "default": "rectangle"
    },
    size: {
      type: String,
      "default": null
    },
    width: {
      type: String,
      "default": "100%"
    },
    height: {
      type: String,
      "default": "1rem"
    },
    borderRadius: {
      type: String,
      "default": null
    },
    animation: {
      type: String,
      "default": "wave"
    }
  },
  style: SkeletonStyle,
  provide: function provide() {
    return {
      $pcSkeleton: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "Skeleton",
  "extends": script$1,
  inheritAttrs: false,
  computed: {
    containerStyle: function containerStyle() {
      if (this.size) return {
        width: this.size,
        height: this.size,
        borderRadius: this.borderRadius
      };
      else return {
        width: this.width,
        height: this.height,
        borderRadius: this.borderRadius
      };
    }
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root"),
    style: [_ctx.sx("root"), $options.containerStyle],
    "aria-hidden": "true"
  }, _ctx.ptmi("root")), null, 16);
}
script.render = render;
const _sfc_main$2 = {
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
      const _component_Skeleton = script;
      const _component_Carousel = script$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-6 p-4" }, _attrs))} data-v-849bfadd><div class="w-1/5 bg-white shadow p-4 rounded-lg relative h-32 sm:h-40 md:h-80 xl:h-80 hidden lg:block" data-v-849bfadd>`);
      if (__props.categories.length) {
        _push(`<ul class="space-y-2" data-v-849bfadd><!--[-->`);
        ssrRenderList(__props.categories, (item) => {
          _push(`<li class="flex items-center gap-2 pt-3 hover:text-primary cursor-pointer font-regular" data-v-849bfadd><i class="${ssrRenderClass(getIcon(item.name))}" data-v-849bfadd></i><span class="text-xs truncate" data-v-849bfadd>${ssrInterpolate(item.name)}</span></li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<p class="text-gray-50 text-xs text-center pt-3" data-v-849bfadd><!--[-->`);
        ssrRenderList(9, (i) => {
          _push(ssrRenderComponent(_component_Skeleton, { class: "mb-2 p-3" }, null, _parent));
        });
        _push(`<!--]--></p>`);
      }
      _push(`</div><div class="flex-1 bg-white shadow rounded-lg relative w-full h-32 sm:h-40 md:h-80 xl:h-80" data-v-849bfadd><div class="flex items-center gap-6 relative" data-v-849bfadd>`);
      if (unref(hoveredCategory)) {
        _push(`<div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-2xl font-bold transition-opacity duration-300 rounded w-full h-32 sm:h-40 md:h-80 xl:h-80" data-v-849bfadd><i class="${ssrRenderClass(getIcon(unref(hoveredCategory)))}" data-v-849bfadd></i><span class="ml-3" data-v-849bfadd>${ssrInterpolate(unref(hoveredCategory))}</span></div>`);
      } else {
        _push(`<!---->`);
      }
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
              _push2(`<img${ssrRenderAttr("src", slotProps.data.src)}${ssrRenderAttr("alt", slotProps.data.alt)} class="rounded-lg object-cover w-full h-32 sm:h-40 md:h-80 xl:h-80" data-v-849bfadd${_scopeId}>`);
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
      if (!unref(hoveredCategory)) {
        _push(`<div class="bg-black text-white px-4 py-2 sm:px-6 sm:py-3 md:px-6 md:py-4 rounded-lg absolute bottom-2 sm:bottom-4 md:bottom-6 right-2 sm:right-4 md:right-6 w-auto max-w-[70%] sm:max-w-[60%] md:max-w-[50%]" data-v-849bfadd><h2 class="text-xs sm:text-sm md:text-base font-bold" style="${ssrRenderStyle({ "font-family": "sans-serif" })}" data-v-849bfadd> Break from <br data-v-849bfadd> reality </h2><p class="text-[10px] sm:text-xs md:text-sm text-gray-400" style="${ssrRenderStyle({ "font-family": "monospace" })}" data-v-849bfadd> HD and Audio </p><button class="bg-primary text-white text-xs sm:text-sm md:text-base px-4 sm:px-6 py-1 sm:py-2 mt-3 sm:mt-4 rounded-lg" data-v-849bfadd> Shop Now </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="w-1/5 space-y-4 hidden lg:block h-32 lg:h-80 xl:h-80" data-v-849bfadd><div class="bg-white shadow p-4 rounded-lg" data-v-849bfadd><h4 class="text-primary font-bold" data-v-849bfadd>HELP CENTER</h4><p class="text-gray-600 text-sm" data-v-849bfadd>Guide to Customer Care</p><h4 class="text-primary font-bold" data-v-849bfadd>HOT DEALS</h4><p class="text-gray-600 text-sm" data-v-849bfadd>Updated Daily</p></div><div class="bg-primary text-white text-center p-6 rounded-lg" data-v-849bfadd><p class="font-bold text-lg" data-v-849bfadd>CALL OR WHATSAPP</p><p class="text-2xl font-bold" data-v-849bfadd>+254 727 909 060</p><p class="text-sm" data-v-849bfadd>TO ORDER</p></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/TopCard1.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TopCard = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-849bfadd"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/utils/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b837781b"]]);
const _sfc_main = {
  __name: "FilterCard",
  __ssrInlineRender: true,
  props: {
    features: {
      type: Array,
      default: []
    }
  },
  setup(__props) {
    ref([
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
      const _component_Card = script$3;
      const _component_Checkbox = script$4;
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
            _push2(`<div class="space-y-2"${_scopeId}><!--[-->`);
            ssrRenderList(__props.features, (filter, index) => {
              _push2(`<div class="flex items-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Checkbox, {
                modelValue: filter.value,
                "onUpdate:modelValue": ($event) => filter.value = $event,
                value: filter.description,
                class: "mr-2"
              }, null, _parent2, _scopeId));
              _push2(`<label${ssrRenderAttr("for", filter.description)} class="${ssrRenderClass({
                "text-primary font-bold": filter.selected,
                "text-gray-700": !filter.selected
              })}"${_scopeId}>${ssrInterpolate(filter.description)}</label></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-2" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.features, (filter, index) => {
                  return openBlock(), createBlock("div", {
                    key: index,
                    class: "flex items-center"
                  }, [
                    createVNode(_component_Checkbox, {
                      modelValue: filter.value,
                      "onUpdate:modelValue": ($event) => filter.value = $event,
                      value: filter.description,
                      class: "mr-2"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "value"]),
                    createVNode("label", {
                      for: filter.description,
                      class: {
                        "text-primary font-bold": filter.selected,
                        "text-gray-700": !filter.selected
                      }
                    }, toDisplayString(filter.description), 11, ["for"])
                  ]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/FilterCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _imports_0 = "" + buildAssetsURL("empty.OjLzVIHN.jpg");

export { FlashCard as F, TopCard as T, _sfc_main$4 as _, _sfc_main$3 as a, Footer as b, _sfc_main as c, _imports_0 as d };
//# sourceMappingURL=empty-W5prC6Kj.mjs.map
