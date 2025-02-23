import { a as script$1$1 } from './index-BjfqnR8d.mjs';
import { B as BaseStyle, _ as _export_sfc, g as useToast, a as useNuxtApp, b as useProductStore, u as useUserStore } from './server.mjs';
import { useSSRContext, ref, computed, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createElementBlock, resolveDynamicComponent, createCommentVNode, renderSlot, createElementVNode } from 'vue';
import { s as script$2 } from './index-BZ8aq3vL.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';

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
const _sfc_main = {
  components: { Carousel: script$2 },
  setup() {
    const tabs = ref([
      "Recent",
      "Best Seller",
      "Top",
      "New Arrivals",
      "Top Rating"
    ]);
    const carousel = ref(null);
    const selectedTab = ref("Recent");
    const products = ref([
      {
        image: "https://html.themexriver.com/radios/assets/img/product/img_53.png",
        name: "Bullet Camera",
        rating: 3,
        reviews: 26,
        oldPrice: 28.52,
        price: 3052
      },
      {
        image: "https://html.themexriver.com/radios/assets/img/product/img_53.png",
        name: "Bullet HD Camera",
        rating: 4,
        reviews: 42,
        oldPrice: 19.53,
        price: 2153
      }
    ]);
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
    const selectImage = (item, image) => {
      item.image = image;
    };
    const addToFavorites = async (product) => {
      const productStore2 = useProductStore();
      const userStore = useUserStore();
      try {
        if (userStore.isLoggedIn) {
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
      const userStore = useUserStore();
      userStore.user;
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
      const defaultImage = "https://html.themexriver.com/radios/assets/img/product/img_53.png";
      const defaultImages = [
        "https://html.themexriver.com/radios/assets/img/product/img_53.png",
        "https://html.themexriver.com/radios/assets/img/product/img_54.png",
        "https://html.themexriver.com/radios/assets/img/product/img_55.png"
      ];
      if (products2.length === 0) return [];
      const repeatedProducts = [];
      while (repeatedProducts.length < totalItems) {
        repeatedProducts.push(...products2);
      }
      return repeatedProducts.slice(0, totalItems).map((product, index) => ({
        ...product,
        image: product.image || defaultImage,
        images: defaultImages
      }));
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
      addToCart
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Carousel = script$2;
  const _component_Tag = script;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col md:flex-row w-full p-6" }, _attrs))}><div class="w-full md:w-1/5 p-2 m-2 border dark:border-orange-600 rounded-lg shadow-sm"><div class="text-lg font-semibold mb-2 border-b flex justify-between items-center"><span class="text-gray-500 pl-4">Hot Deals</span></div><div>`);
  _push(ssrRenderComponent(_component_Carousel, {
    d_circular: true,
    autoplayInterval: 1e4,
    value: $setup.products,
    numVisible: 1,
    numScroll: 1,
    orientation: "horizontal",
    containerClass: "flex items-center justify-center",
    showIndicators: false,
    showNavigators: false
  }, {
    item: withCtx((slotProps, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}><div class="mb-4"${_scopeId}><div class="relative mx-auto"${_scopeId}><img${ssrRenderAttr("src", slotProps.data.image)}${ssrRenderAttr("alt", slotProps.data.name)} class="object-cover rounded" style="${ssrRenderStyle({ "max-width": "100%" })}"${_scopeId}></div></div><div class="mb-4 font-medium flex justify-around"${_scopeId}>${ssrInterpolate(slotProps.data.name)}</div><div class="flex justify-around items-center"${_scopeId}><div class="mt-0 font-semibold text-xl py-4"${_scopeId}>${ssrInterpolate($setup.formattedPrice(slotProps.data.price))}</div></div><div class="stock flex items-center text-sm text-gray-600 mb-6 justify-around"${_scopeId}><!--[-->`);
        ssrRenderList(["DAYS", "HOURS", "MINS", "SEC"], (label, index) => {
          _push2(`<div class="flex flex-col items-center"${_scopeId}><div class="flex items-center justify-center p-1 bg-orange-500 text-white rounded-full text-base md:text-lg font-bold"${_scopeId}>${ssrInterpolate(index === 0 ? 21 : "00")}</div><span class="text-xs mt-1 text-gray-400 font-bold"${_scopeId}>${ssrInterpolate(label)}</span></div>`);
        });
        _push2(`<!--]--></div></div>`);
      } else {
        return [
          createVNode("div", null, [
            createVNode("div", { class: "mb-4" }, [
              createVNode("div", { class: "relative mx-auto" }, [
                createVNode("img", {
                  src: slotProps.data.image,
                  alt: slotProps.data.name,
                  class: "object-cover rounded",
                  style: { "max-width": "100%" }
                }, null, 8, ["src", "alt"])
              ])
            ]),
            createVNode("div", { class: "mb-4 font-medium flex justify-around" }, toDisplayString(slotProps.data.name), 1),
            createVNode("div", { class: "flex justify-around items-center" }, [
              createVNode("div", { class: "mt-0 font-semibold text-xl py-4" }, toDisplayString($setup.formattedPrice(slotProps.data.price)), 1)
            ]),
            createVNode("div", { class: "stock flex items-center text-sm text-gray-600 mb-6 justify-around" }, [
              (openBlock(), createBlock(Fragment, null, renderList(["DAYS", "HOURS", "MINS", "SEC"], (label, index) => {
                return createVNode("div", {
                  key: index,
                  class: "flex flex-col items-center"
                }, [
                  createVNode("div", { class: "flex items-center justify-center p-1 bg-orange-500 text-white rounded-full text-base md:text-lg font-bold" }, toDisplayString(index === 0 ? 21 : "00"), 1),
                  createVNode("span", { class: "text-xs mt-1 text-gray-400 font-bold" }, toDisplayString(label), 1)
                ]);
              }), 64))
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
  _push(`<!--]--></div></div><div class="gap-6 mt-4"><div class="flex flex-col md:flex-row justify-between space-y-4 md:space-x-4 md:space-y-0"><div class="flex flex-col space-y-4 w-full md:w-1/3"><!--[-->`);
  ssrRenderList($setup.featuredProducts.slice(0, 2), (item) => {
    _push(`<div class="border rounded-sm p-4 shadow-sm flex-1"><div class="flex items-center"><img${ssrRenderAttr("src", item.image)} class="w-28 h-28 object-cover rounded-md"><div class="ml-4 flex flex-col w-full"><h3 class="text-lg font-medium">${ssrInterpolate(item.name)}</h3><div class="mt-2 text-primary font-bold text-lg"><span>${ssrInterpolate($setup.formattedPrice(item.price))}</span></div><p class="text-gray-500 mt-1"><strong>${ssrInterpolate(item.description)}</strong></p><div class="carousel flex items-center mt-2 space-x-4"><div class="flex items-center space-x-2 overflow-x-auto"><!--[-->`);
    ssrRenderList(item.images, (image, index) => {
      _push(`<img${ssrRenderAttr("src", image)}${ssrRenderAttr("alt", "Product " + (index + 1))} class="${ssrRenderClass([{
        "border-orange-500": item.image === image
      }, "w-10 h-10 md:w-10 md:h-10 rounded-md border border-gray-300 cursor-pointer hover:border-orange-500"])}">`);
    });
    _push(`<!--]--></div></div></div><div class="gap-5 relative left-0 top-0 align-start justify-end"><button class="p-2 rounded-full transition-colors"><i class="pi pi-heart text-primary"></i></button><button class="p-2 rounded-full transition-colors"><i class="pi pi-shopping-cart text-primary"></i></button></div></div></div>`);
  });
  _push(`<!--]--></div><div class="flex-1 h-full"><!--[-->`);
  ssrRenderList($setup.featuredProducts.slice(2, 3), (item) => {
    _push(`<div class="border rounded-sm p-4 shadow-sm h-full relative group transition duration-300"><div class="flex justify-between">`);
    _push(ssrRenderComponent(_component_Tag, {
      severity: "warn",
      value: "New"
    }, null, _parent));
    _push(`<div class="gap-5"><button class="p-2 rounded-full transition-colors"><i class="pi pi-heart text-primary"></i></button><button class="p-2 rounded-full transition-colors"><i class="pi pi-shopping-cart text-primary"></i></button></div></div><div class="flex flex-col items-center h-full"><div class="relative"><img${ssrRenderAttr("src", item.image)} class="object-cover rounded-md w-full h-48"></div><div class="text-center items-center pt-4 flex flex-col"><h3 class="text-lg font-medium">${ssrInterpolate(item.name)}</h3><div class="mt-2 text-primary font-bold text-lg"><span>${ssrInterpolate($setup.formattedPrice(item.price))}</span></div><p class="text-gray-500 mt-1"><strong>${ssrInterpolate(item.description)}</strong></p></div></div></div>`);
  });
  _push(`<!--]--></div><div class="flex flex-col space-y-4 w-full md:w-1/3"><!--[-->`);
  ssrRenderList($setup.featuredProducts.slice(3, 5), (item) => {
    _push(`<div class="border rounded-sm p-4 shadow-sm flex-1"><div class="flex items-center"><img${ssrRenderAttr("src", item.image)} class="w-28 h-28 object-cover rounded-md"><div class="ml-4 flex flex-col w-full"><h3 class="text-lg font-medium">${ssrInterpolate(item.name)}</h3><div class="mt-2 text-primary font-bold text-lg"><span class="">${ssrInterpolate($setup.formattedPrice(item.price))}</span></div><p class="text-gray-500 mt-1"><strong>${ssrInterpolate(item.description)}</strong></p><div class="carousel flex items-center mt-2 space-x-4"><div class="flex items-center space-x-2 overflow-x-auto"><!--[-->`);
    ssrRenderList(item.images, (image, index) => {
      _push(`<img${ssrRenderAttr("src", image)}${ssrRenderAttr("alt", "Product " + (index + 1))} class="${ssrRenderClass([{
        "border-orange-500": item.image === image
      }, "w-10 h-10 md:w-10 md:h-10 rounded-md border border-gray-300 cursor-pointer hover:border-orange-500"])}">`);
    });
    _push(`<!--]--></div></div></div><div class="gap-5 relative left-0 top-0 align-start justify-end"><button class="p-2 rounded-full transition-colors"><i class="pi pi-heart text-primary"></i></button><button class="p-2 rounded-full transition-colors"><i class="pi pi-shopping-cart text-primary"></i></button></div></div></div>`);
  });
  _push(`<!--]--></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/TopDeal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TopDeal = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { TopDeal as T, script as s };
//# sourceMappingURL=TopDeal-BpE91VnV.mjs.map
