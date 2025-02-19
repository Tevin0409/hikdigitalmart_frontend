import { s as script, _ as __nuxt_component_0 } from './index-DMVaXLtj.mjs';
import { s as script$1 } from './index-CI0zemKa.mjs';
import { watch, ref, computed, resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { F as FlashCard, _ as _sfc_main$4, a as _sfc_main$3, T as TopCard, b as Footer, c as _sfc_main$1, d as _imports_0 } from './empty-DwzSEcMG.mjs';
import { useRouter } from 'vue-router';
import { _ as _export_sfc, a as useNuxtApp } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import './nuxt-link-DpsmJg1c.mjs';
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
import './index-BewzCk0X.mjs';
import '@primeuix/utils';
import './index-BjfqnR8d.mjs';
import '@primeuix/utils/uuid';
import './index-BgtDrjLh.mjs';
import './index-5ckDHAkT.mjs';
import './index-jtFS_Qvq.mjs';
import '@primeuix/utils/zindex';
import './index-ZzPV6IeI.mjs';
import './index-Bn5AJdG7.mjs';
import './index-DcyyOm7X.mjs';
import 'pinia';
import 'unhead';
import '@unhead/shared';
import '@primeuix/utils/eventbus';
import 'deep-pick-omit';
import 'axios';

const _sfc_main = {
  name: "Dashboard",
  components: {
    FlashCard,
    CategoryCard: _sfc_main$4,
    ProductCard: _sfc_main$3,
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
    const categoryId = ref(null);
    const value = ref([20, 80]);
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
    const formatPrice = (value2) => {
      if (!value2) return "0";
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "Ksh",
        minimumFractionDigits: 0
      }).format(value2);
    };
    const getCategoryProducts = (item) => {
      console.log("findCategoryProductsw", item);
      categoryId.value = [item.id];
      getProduct();
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
        if (categoryId.value) {
          params.categoryIds = categoryId.value;
        }
        const response = await $axios2.get("/product/product-models", {
          params: {
            ...params,
            page: currentPage.value,
            limit: 10
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
      value,
      filter,
      showMoreProducts,
      fetching,
      fetchingMore,
      formatPrice,
      randomizedProducts,
      goToProductPage,
      getIcon,
      getCategoryProducts
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TopCard = resolveComponent("TopCard");
  const _component_Carousel = script;
  const _component_FilterCard = resolveComponent("FilterCard");
  const _component_ProductCard = resolveComponent("ProductCard");
  const _component_Button = script$1;
  const _component_Footer = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto my-10 pa-10" }, _attrs))} data-v-c36a6f73>`);
  _push(ssrRenderComponent(_component_TopCard, { categories: $setup.categories }, null, _parent));
  _push(`<section class="flash-sales mt-12 mx-4" data-v-c36a6f73><h2 class="text-xl font-bold" data-v-c36a6f73>Browse By Category</h2>`);
  _push(ssrRenderComponent(_component_Carousel, {
    value: $setup.categories,
    numVisible: 4,
    numScroll: 5,
    responsiveOptions: $setup.responsiveOptions
  }, {
    item: withCtx((slotProps, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="border border-surface-200 dark:border-surface-700 rounded m-2 bg-white cursor-pointer" data-v-c36a6f73${_scopeId}><div class="p-4" data-v-c36a6f73${_scopeId}><div class="mb-4 text-xs font-medium text-center flex items-center" data-v-c36a6f73${_scopeId}><i class="${ssrRenderClass($setup.getIcon(slotProps.data.name))}" data-v-c36a6f73${_scopeId}></i><span class="pl-2" data-v-c36a6f73${_scopeId}>${ssrInterpolate(slotProps.data.name)}</span></div><div class="flex justify-between items-center" data-v-c36a6f73${_scopeId}><div class="mt-0 font-semibold text-xl" data-v-c36a6f73${_scopeId}>${ssrInterpolate(slotProps.data.price)}</div></div></div></div>`);
      } else {
        return [
          createVNode("div", {
            onClick: ($event) => $setup.getCategoryProducts(slotProps.data),
            class: "border border-surface-200 dark:border-surface-700 rounded m-2 bg-white cursor-pointer"
          }, [
            createVNode("div", { class: "p-4" }, [
              createVNode("div", { class: "mb-4 text-xs font-medium text-center flex items-center" }, [
                createVNode("i", {
                  class: $setup.getIcon(slotProps.data.name)
                }, null, 2),
                createVNode("span", { class: "pl-2" }, toDisplayString(slotProps.data.name), 1)
              ]),
              createVNode("div", { class: "flex justify-between items-center" }, [
                createVNode("div", { class: "mt-0 font-semibold text-xl" }, toDisplayString(slotProps.data.price), 1)
              ])
            ])
          ], 8, ["onClick"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</section><section data-v-c36a6f73><div class="p-4 rounded-md" data-v-c36a6f73><div class="flex justify-between items-center mb-4 px-2" data-v-c36a6f73><h2 class="text-lg font-semibold" data-v-c36a6f73>Top selling items</h2></div><div class="flex overflow-x-auto gap-4 p-2" data-v-c36a6f73><!--[-->`);
  ssrRenderList($setup.randomizedProducts, (product, index) => {
    var _a;
    _push(`<div class="min-w-[200px] md:min-w-[220px] bg-white rounded-md shadow-md cursor-pointer p-2" data-v-c36a6f73><div class="relative" data-v-c36a6f73><img${ssrRenderAttr("src", (_a = product.images[0]) == null ? void 0 : _a.optimizeUrl)}${ssrRenderAttr("alt", product.name)} class="w-full h-36 object-cover rounded-md" data-v-c36a6f73></div> ${ssrInterpolate(product.product.name)} <h3 class="text-sm font-medium mt-2 truncate" data-v-c36a6f73>${ssrInterpolate(product.name)}</h3><p class="text-lg font-semibold text-gray-900" data-v-c36a6f73>${ssrInterpolate($setup.formatPrice(product.price))}</p><p class="text-gray-500 text-xs line-through" data-v-c36a6f73>${ssrInterpolate(product.oldPrice)}</p></div>`);
  });
  _push(`<!--]--></div></div></section><section class="flash-sales mt-5 mx-2 full-screen" style="${ssrRenderStyle({ "min-height": "900px" })}" data-v-c36a6f73><div class="flex justify-between items-center mb-4" data-v-c36a6f73><h2 class="text-xl font-bold" data-v-c36a6f73>Explore Our Products</h2><div class="flex space-x-2" data-v-c36a6f73><button class="bg-red-500 text-white px-4 py-2" data-v-c36a6f73>View All</button></div></div><div class="flex" data-v-c36a6f73>`);
  if ($setup.filter) {
    _push(ssrRenderComponent(_component_FilterCard, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="w-full" data-v-c36a6f73>`);
  if ($setup.fetching && $setup.products.length < 1) {
    _push(`<div class="text-center mt-6" data-v-c36a6f73><div class="relative flex justify-center items-center" data-v-c36a6f73><div class="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-100" data-v-c36a6f73></div><img src="https://freelancerdxb.s3.eu-central-1.amazonaws.com/documents/image%20%285%29__5d197f13926ac20a20a6f301d00ce69b516f83eb.png" class="rounded-full h-24 w-24" data-v-c36a6f73></div></div>`);
  } else if ($setup.products.length == 0) {
    _push(`<div class="flex flex-col items-center justify-center text-center mt-12 text-gray-500" data-v-c36a6f73><img${ssrRenderAttr("src", _imports_0)} alt="No items found" class="h-56 w-56" data-v-c36a6f73><p class="pt-6" data-v-c36a6f73>No items found</p></div>`);
  } else {
    _push(`<div class="grid gap-3 grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 justify-center" data-v-c36a6f73><!--[-->`);
    ssrRenderList($setup.products, (product) => {
      _push(ssrRenderComponent(_component_ProductCard, {
        key: product.id,
        item: product
      }, null, _parent));
    });
    _push(`<!--]--></div>`);
  }
  if ($setup.products.length != 0) {
    _push(`<div class="flex justify-center py-8" data-v-c36a6f73>`);
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
const Dashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-c36a6f73"]]);

export { Dashboard as default };
//# sourceMappingURL=Dashboard-D5q33Qwr.mjs.map
