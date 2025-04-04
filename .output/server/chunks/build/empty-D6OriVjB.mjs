import { b as buildAssetsURL } from '../nitro/nitro.mjs';
import { useSSRContext, mergeProps, computed, ref, withCtx, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, unref, createElementBlock } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';
import { B as BaseStyle, _ as _export_sfc, g as useToast, u as useUserStore, a as useNuxtApp, b as useProductStore } from './server.mjs';
import { s as script$2 } from './index-DJ-ZgwLv.mjs';
import { useRouter } from 'vue-router';
import { s as script$5 } from './index-CzrJQldg.mjs';
import { a as script$1$1 } from './index-BjfqnR8d.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DpsmJg1c.mjs';
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
    const userStore = useUserStore();
    useNuxtApp();
    const { $formatPrice } = useNuxtApp();
    const productStore = useProductStore();
    const formattedPrice = (price) => {
      return $formatPrice(price);
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
      _push(`<!--]--></div><p class="ml-2 text-gray-500 text-sm text-center"></p></div></span></div><p class="text-red-500 font-semibold text-center"> Ksh ${ssrInterpolate(formattedPrice(__props.item.price))}</p></div><div class="absolute top-4 right-4 flex flex-col space-y-2 opacity-0group-hover:opacity-100 transition-opacity"><button class="p-2 rounded-full"><i class="pi pi-shopping-cart text-gray-600" style="${ssrRenderStyle({ "font-size": "1.2rem" })}"></i></button><button>`);
      if (!isInWishList(__props.item)) {
        _push(`<i class="pi pi-heart cursor-pointer text-gray-600" style="${ssrRenderStyle({ "font-size": "1.2rem" })}"></i>`);
      } else {
        _push(`<i class="pi pi-heart-fill cursor-pointer text-gray-600" style="${ssrRenderStyle({ "font-size": "1.2rem", "color": "red" })}"></i>`);
      }
      _push(`</button></div>`);
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
    const products = ref([]);
    const images = ref([
      {
        src: "https://www.hikvision.com/content/dam/hikvision/usa/newsroom/migrate-assets/Hikvision-s-4K-Ultra-HD-Cameras-Enhance-Surveillance-Video-with-High-Resolution-Quality-and-Exceptional-Features-0.jpg",
        alt: "Surveillance Camera 1"
      },
      {
        src: "https://www.hikvision.com/content/hikvision/us-en/newsroom/blog/2023/12/hikvision-in-black/_jcr_content/root/responsivegrid/img_0_copy.coreimg.100.1280.jpeg/1703703161523/blog-december-27.jpeg",
        alt: "Surveillance Camera 2"
      },
      {
        src: "https://siteexclusive.ae/wp-content/uploads/2021/07/Hikvision-4.jpg",
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-6 p-4" }, _attrs))} data-v-a51bba81><div class="w-1/5 bg-white shadow p-4 rounded-lg relative h-32 sm:h-40 md:h-80 xl:h-80 hidden lg:block" data-v-a51bba81>`);
      if (__props.categories.length) {
        _push(`<ul class="space-y-2" data-v-a51bba81><!--[-->`);
        ssrRenderList(__props.categories, (item) => {
          _push(`<li class="flex items-center gap-2 pt-3 hover:text-primary cursor-pointer font-regular" data-v-a51bba81><i class="${ssrRenderClass(getIcon(item.name))}" data-v-a51bba81></i><span class="text-xs truncate" data-v-a51bba81>${ssrInterpolate(item.name)}</span></li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<p class="text-gray-50 text-xs text-center pt-3" data-v-a51bba81><!--[-->`);
        ssrRenderList(9, (i) => {
          _push(ssrRenderComponent(_component_Skeleton, { class: "mb-2 p-3" }, null, _parent));
        });
        _push(`<!--]--></p>`);
      }
      _push(`</div><div class="flex-1 bg-white shadow rounded-lg relative w-full h-32 sm:h-40 md:h-80 xl:h-80" data-v-a51bba81><div class="flex items-center gap-6 relative" data-v-a51bba81>`);
      if (unref(hoveredCategory)) {
        _push(`<div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-2xl font-bold transition-opacity duration-300 rounded w-full h-32 sm:h-40 md:h-80 xl:h-80 p-4" data-v-a51bba81><div class="flex items-center mb-4" data-v-a51bba81><i class="${ssrRenderClass(getIcon(unref(hoveredCategory)))}" data-v-a51bba81></i><span class="ml-3" data-v-a51bba81>${ssrInterpolate(unref(hoveredCategory))}</span><ul class="space-y-2 text-lg text-center" data-v-a51bba81><!--[-->`);
        ssrRenderList(unref(products), (product) => {
          _push(`<li class="hover:underlinetransition" data-v-a51bba81>${ssrInterpolate(product.name)}</li>`);
        });
        _push(`<!--]--></ul></div></div>`);
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
              _push2(`<img${ssrRenderAttr("src", slotProps.data.src)}${ssrRenderAttr("alt", slotProps.data.alt)} class="rounded-lg object-cover w-full h-32 sm:h-40 md:h-80 xl:h-80" data-v-a51bba81${_scopeId}>`);
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
      _push(`</div></div><div class="w-1/5 space-y-4 hidden lg:block h-32 lg:h-80 xl:h-80" data-v-a51bba81><div class="bg-white shadow p-4 rounded-lg" data-v-a51bba81><h4 class="text-primary font-bold" data-v-a51bba81>HELP CENTER</h4><p class="text-gray-600 text-sm" data-v-a51bba81>Guide to Customer Care</p><h4 class="text-primary font-bold" data-v-a51bba81>HOT DEALS</h4><p class="text-gray-600 text-sm" data-v-a51bba81>Updated Daily</p></div><div class="bg-primary text-white text-center p-6 rounded-lg max-w-md mx-auto" data-v-a51bba81><p class="font-bold text-lg md:text-xl" data-v-a51bba81>CALL OR WHATSAPP</p><p class="text-xl md:text-sm font-bold flex items-center justify-center gap-2" data-v-a51bba81><i class="pi pi-whatsapp text-md md:text-2xl" data-v-a51bba81></i> +254 727 909 060 </p><p class="text-sm md:text-base" data-v-a51bba81>TO ORDER</p></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/TopCard1.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TopCard = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-a51bba81"]]);
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
//# sourceMappingURL=empty-D6OriVjB.mjs.map
