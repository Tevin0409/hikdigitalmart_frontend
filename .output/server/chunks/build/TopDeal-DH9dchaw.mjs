import { s as script } from './index-BZ8aq3vL.mjs';
import { useSSRContext, ref, computed, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
import { _ as _export_sfc, a as useNuxtApp, b as useProductStore } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';

const _sfc_main = {
  components: { Carousel: script },
  setup() {
    const tabs = ref([
      "Recent",
      "Best Seller",
      "Top",
      "New Arrivals",
      "Top Rating"
    ]);
    const carousel = ref(null);
    const products = ref([
      {
        image: "https://html.themexriver.com/radios/assets/img/product/img_53.png",
        name: "Amazon Basics Window Air",
        rating: 3,
        reviews: 26,
        oldPrice: 28.52,
        price: 3052
      },
      {
        image: "https://html.themexriver.com/radios/assets/img/product/img_53.png",
        name: "Amazon Basics Wall Light",
        rating: 4,
        reviews: 42,
        oldPrice: 19.53,
        price: 2153
      }
    ]);
    const { $formatPrice } = useNuxtApp();
    const productStore = useProductStore();
    const formattedPrice = (price) => {
      return $formatPrice(price);
    };
    const featuredProducts = computed(() => productStore.products);
    return { products, featuredProducts, carousel, tabs, formattedPrice };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Carousel = script;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex md:flex-row w-full p-6" }, _attrs))}><div class="w-1/5 p-2 m-2 border dark:border-orange-600 rounded-lg shadow-sm"><div class="text-lg font-semibold mb-2 border-b flex justify-between items-center"><span class="text-gray-500 pl-4">Hot Deals</span></div><div>`);
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
        _push2(`<div${_scopeId}><div class="mb-4"${_scopeId}><div class="relative mx-auto"${_scopeId}><img${ssrRenderAttr("src", slotProps.data.image)}${ssrRenderAttr("alt", slotProps.data.name)} class="object-cover rounded" style="${ssrRenderStyle({ "max-width": "100%" })}"${_scopeId}></div></div><div class="mb-4 font-medium flex justify-around"${_scopeId}>${ssrInterpolate(slotProps.data.name)}</div><div class="flex justify-between items-center flex justify-around"${_scopeId}><div class="mt-0 font-semibold text-xl flex justify-around py-4"${_scopeId}>${ssrInterpolate(slotProps.data.price)}</div></div><div class="stock flex items-center text-sm text-gray-600 mb-6 flex justify-around"${_scopeId}><!--[-->`);
        ssrRenderList(["DAYS", "HOURS", "MINS", "SEC"], (label, index) => {
          _push2(`<div class="flex flex-col items-center"${_scopeId}><div class="flex items-center justify-center bg-orange-500 text-white rounded-full text-base md:text-lg font-bold"${_scopeId}>${ssrInterpolate(index === 0 ? 21 : "00")}</div><span class="text-xs mt-1 text-gray-400 font-bold"${_scopeId}>${ssrInterpolate(label)}</span></div>`);
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
            createVNode("div", { class: "flex justify-between items-center flex justify-around" }, [
              createVNode("div", { class: "mt-0 font-semibold text-xl flex justify-around py-4" }, toDisplayString(slotProps.data.price), 1)
            ]),
            createVNode("div", { class: "stock flex items-center text-sm text-gray-600 mb-6 flex justify-around" }, [
              (openBlock(), createBlock(Fragment, null, renderList(["DAYS", "HOURS", "MINS", "SEC"], (label, index) => {
                return createVNode("div", {
                  key: index,
                  class: "flex flex-col items-center"
                }, [
                  createVNode("div", { class: "flex items-center justify-center bg-orange-500 text-white rounded-full text-base md:text-lg font-bold" }, toDisplayString(index === 0 ? 21 : "00"), 1),
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
  _push(`</div></div><div class="p-6"><div class="flex items-center justify-between"><h2 class="text-lg font-bold"><span class="text-red-500">Monthly Featured Items</span></h2><div class="flex space-x-4 border-b"><!--[-->`);
  ssrRenderList($setup.tabs, (tab) => {
    _push(`<button class="${ssrRenderClass([
      "px-4 py-2 text-sm font-semibold",
      _ctx.selectedTab === tab ? "border-b-2 border-primary text-orange-500" : "text-gray-600"
    ])}">${ssrInterpolate(tab)}</button>`);
  });
  _push(`<!--]--></div></div><div class="gap-6 mt-4"><div class="flex justify-between space-x-4"><div class="flex flex-col space-y-4 w-1/3"><!--[-->`);
  ssrRenderList($setup.featuredProducts.slice(0, 2), (item) => {
    _push(`<div class="border rounded-sm p-4 shadow-sm flex-1"><div class="flex items-center"><img${ssrRenderAttr("src", item.image)} class="w-28 h-28 object-cover rounded-md"><div class="ml-4 flex flex-col"><div class="flex items-center mt-1"><!--[-->`);
    ssrRenderList(5, (star) => {
      _push(`<span class="text-yellow-400"><i class="${ssrRenderClass({
        "pi pi-star-fill": star <= item.rating,
        "pi pi-star": star > item.rating
      })}"></i></span>`);
    });
    _push(`<!--]--></div><h3 class="text-lg font-medium">${ssrInterpolate(item.name)}</h3><div class="mt-2 text-primary font-bold text-lg"><span class="ml-2">Ksh ${ssrInterpolate($setup.formattedPrice(item.price))}</span></div><p class="text-gray-500 mt-1"> Available: <strong>${ssrInterpolate(item.stock)}</strong></p><div class="w-full bg-primary h-2 mt-2 rounded-full"><div class="h-2 bg-orange-500 rounded-full" style="${ssrRenderStyle({ width: `${item.stock / 5}%` })}"></div></div></div></div></div>`);
  });
  _push(`<!--]--></div><div class="flex-1 h-full"><!--[-->`);
  ssrRenderList($setup.featuredProducts.slice(2, 3), (item) => {
    _push(`<div class="border rounded-sm p-4 shadow-sm h-full"><div class="flex flex-col items-center h-full"><img${ssrRenderAttr("src", item.image)} class="object-cover rounded-md"><div class="text-center items-center pt-4 flex flex-col"><div class="flex items-center mt-1"><!--[-->`);
    ssrRenderList(5, (star) => {
      _push(`<span class="text-yellow-400"><i class="${ssrRenderClass({
        "pi pi-star-fill": star <= item.rating,
        "pi pi-star": star > item.rating
      })}"></i></span>`);
    });
    _push(`<!--]--></div><h3 class="text-lg font-medium">${ssrInterpolate(item.name)}</h3><div class="mt-2 text-orange-500 font-bold text-lg"><span class="line-through text-gray-400">Ksh ${ssrInterpolate(item.oldPrice)}</span><span class="ml-2">Ksh${ssrInterpolate($setup.formattedPrice(item.price))}</span></div><p class="text-gray-500 mt-1"> Available: <strong>${ssrInterpolate(item.stock)}</strong></p><div class="w-full bg-gray-300 h-2 mt-2 rounded-full"><div class="h-2 bg-orange-500 rounded-full" style="${ssrRenderStyle({ width: `${item.stock / 5}%` })}"></div></div></div></div></div>`);
  });
  _push(`<!--]--></div><div class="flex flex-col space-y-4 w-1/3"><!--[-->`);
  ssrRenderList($setup.featuredProducts.slice(3, 5), (item) => {
    _push(`<div class="border rounded-sm p-4 shadow-sm flex-1"><div class="flex items-center"><img${ssrRenderAttr("src", item.image)} class="w-28 h-28 object-cover rounded-md"><div class="ml-4 flex flex-col"><div class="flex items-center mt-1"><!--[-->`);
    ssrRenderList(5, (star) => {
      _push(`<span class="text-yellow-400"><i class="${ssrRenderClass({
        "pi pi-star-fill": star <= item.rating,
        "pi pi-star": star > item.rating
      })}"></i></span>`);
    });
    _push(`<!--]--></div><h3 class="text-lg font-medium truncate">${ssrInterpolate(item.name)}</h3><div class="mt-2 text-orange-500 font-bold text-lg"><span class="ml-2">Ksh${ssrInterpolate($setup.formattedPrice(item.price))}</span></div><p class="text-gray-500 mt-1"> Available: <strong>${ssrInterpolate(item.stock)}</strong></p><div class="w-full bg-gray-300 h-2 mt-2 rounded-full"><div class="h-2 bg-orange-500 rounded-full" style="${ssrRenderStyle({ width: `${item.stock / 5}%` })}"></div></div></div></div></div>`);
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

export { TopDeal as T };
//# sourceMappingURL=TopDeal-DH9dchaw.mjs.map
