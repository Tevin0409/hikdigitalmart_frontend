import { _ as _sfc_main$2 } from './Footer-Dh1_azIl.mjs';
import { s as script$1 } from './index-CI0zemKa.mjs';
import { s as script } from './index-hZtXntCu.mjs';
import { watch, ref, computed, resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, useSSRContext } from 'vue';
import { F as FlashCard, _ as _sfc_main$4, a as _sfc_main$3, T as TopCard, b as Footer, c as _sfc_main$1, d as _imports_0 } from './empty-BR8CuLH9.mjs';
import { useRoute } from 'vue-router';
import { _ as _export_sfc, a as useNuxtApp } from './server.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
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
import './index-BjfqnR8d.mjs';
import '@primeuix/utils/dom';
import '@primeuix/utils/uuid';
import './index-5ckDHAkT.mjs';
import './index-BgtDrjLh.mjs';
import './index-Bkc7jbaS.mjs';
import '@primeuix/utils/zindex';
import './index-CPSBx0zQ.mjs';
import './index-BZ8aq3vL.mjs';
import './index-B0KNiV_3.mjs';
import './index-C-aCq1t3.mjs';
import './index-DWifVPgv.mjs';
import '@primeuix/utils';
import './index-DR30ug9d.mjs';
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
    const router = useRoute();
    const currentPage = ref(1);
    ref(1);
    const randomizedProducts = computed(() => {
      return [...products.value].sort(() => Math.random() - 0.5).slice(0, 6);
    });
    const filter = ref(false);
    const categoryId = ref(null);
    const features = ref([]);
    const value = ref([20, 80]);
    const fetching = ref(false);
    const fetchingMore = ref(false);
    const category = router.params.id;
    const searchTer = router.query.searchTerm;
    ref({
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00"
    });
    const home = ref({
      icon: "pi pi-home",
      route: "/dashboard"
    });
    const items = ref([
      { label: "Products", route: "/dashboard" },
      { label: `Seach Results for ${searchTer}`, route: "/checkout" }
    ]);
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
        const catId = router.params.id;
        const searchTerm = router.query.searchTerm || "";
        const params = {};
        if (searchTerm) {
          params.searchTerm = searchTerm.slice(0, 5);
        }
        if (catId) {
          params.categoryId = [catId];
        }
        const response = await $axios2.get("/product/product-models", {
          params: {
            ...params,
            page: currentPage.value,
            limit: 10
          }
        });
        fetching.value = false;
        products.value = response.data.results;
        await getFeatures();
        console.log(products.value, "products");
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        fetching.value = false;
        fetchingMore.value = false;
      }
    };
    const getFeatures = async () => {
      try {
        const { $axios: $axios2 } = useNuxtApp();
        const catId = router.params.id;
        const productId = router.query.productId;
        const params = {};
        if (catId) {
          params.categoryId = catId;
          params.productId = productId;
        }
        const response = await $axios2.get("/product/features", {
          params: {
            ...params
          }
        });
        features.value = response.data.map((feature) => ({
          ...feature,
          selected: false
        }));
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
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
      getCategoryProducts,
      getProduct,
      getFeatures,
      features,
      category,
      searchTer,
      home,
      items
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Breadcrumb = script;
  const _component_router_link = resolveComponent("router-link");
  const _component_FilterCard = resolveComponent("FilterCard");
  const _component_ProductCard = resolveComponent("ProductCard");
  const _component_Button = script$1;
  const _component_Footer = _sfc_main$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto my-10 pa-10" }, _attrs))} data-v-1298c9f3><section class="flash-sales mt-5 mx-2 full-screen" style="${ssrRenderStyle({ "min-height": "900px" })}" data-v-1298c9f3>`);
  _push(ssrRenderComponent(_component_Breadcrumb, {
    home: $setup.home,
    model: $setup.items
  }, {
    item: withCtx(({ item, props }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (item.route) {
          _push2(ssrRenderComponent(_component_router_link, {
            to: item.route,
            custom: ""
          }, {
            default: withCtx(({ href, navigate }, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<a${ssrRenderAttrs(mergeProps({ href }, props.action))} data-v-1298c9f3${_scopeId2}><span class="${ssrRenderClass([item.icon, "text-color"])}" data-v-1298c9f3${_scopeId2}></span><span class="text-primary font-semibold" data-v-1298c9f3${_scopeId2}>${ssrInterpolate(item.label)}</span></a>`);
              } else {
                return [
                  createVNode("a", mergeProps({ href }, props.action, { onClick: navigate }), [
                    createVNode("span", {
                      class: [item.icon, "text-color"]
                    }, null, 2),
                    createVNode("span", { class: "text-primary font-semibold" }, toDisplayString(item.label), 1)
                  ], 16, ["href", "onClick"])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        } else {
          _push2(`<a${ssrRenderAttrs(mergeProps({
            href: item.url,
            target: item.target
          }, props.action))} data-v-1298c9f3${_scopeId}><span class="text-surface-700 dark:text-surface-0" data-v-1298c9f3${_scopeId}>${ssrInterpolate(item.label)}</span></a>`);
        }
      } else {
        return [
          item.route ? (openBlock(), createBlock(_component_router_link, {
            key: 0,
            to: item.route,
            custom: ""
          }, {
            default: withCtx(({ href, navigate }) => [
              createVNode("a", mergeProps({ href }, props.action, { onClick: navigate }), [
                createVNode("span", {
                  class: [item.icon, "text-color"]
                }, null, 2),
                createVNode("span", { class: "text-primary font-semibold" }, toDisplayString(item.label), 1)
              ], 16, ["href", "onClick"])
            ]),
            _: 2
          }, 1032, ["to"])) : (openBlock(), createBlock("a", mergeProps({
            key: 1,
            href: item.url,
            target: item.target
          }, props.action), [
            createVNode("span", { class: "text-surface-700 dark:text-surface-0" }, toDisplayString(item.label), 1)
          ], 16, ["href", "target"]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="flexjustify-between items-center mb-4" data-v-1298c9f3><div class="flex space-x-2" data-v-1298c9f3></div></div><div class="flex flex-col sm:flex-row" data-v-1298c9f3>`);
  _push(ssrRenderComponent(_component_FilterCard, {
    features: $setup.features,
    class: "w-full sm:w-auto mb-4 sm:mb-0"
  }, null, _parent));
  _push(`<div class="w-full" data-v-1298c9f3>`);
  if ($setup.fetching && $setup.products.length < 1) {
    _push(`<div class="text-center mt-6" data-v-1298c9f3><div class="relative flex justify-center items-center" data-v-1298c9f3><div class="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-100" data-v-1298c9f3></div><img src="https://freelancerdxb.s3.eu-central-1.amazonaws.com/documents/image%20%285%29__5d197f13926ac20a20a6f301d00ce69b516f83eb.png" class="rounded-full h-24 w-24" data-v-1298c9f3></div></div>`);
  } else if ($setup.products.length == 0) {
    _push(`<div class="flex flex-col items-center justify-center text-center mt-12 text-gray-500" data-v-1298c9f3><img${ssrRenderAttr("src", _imports_0)} alt="No items found" class="h-56 w-56" data-v-1298c9f3><p class="pt-6" data-v-1298c9f3>No items found</p></div>`);
  } else {
    _push(`<div class="grid gap-3 grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 justify-center" data-v-1298c9f3><!--[-->`);
    ssrRenderList($setup.products, (product) => {
      _push(ssrRenderComponent(_component_ProductCard, {
        key: product.id,
        item: product
      }, null, _parent));
    });
    _push(`<!--]--></div>`);
  }
  if ($setup.products.length != 0) {
    _push(`<div class="flex justify-center py-8" data-v-1298c9f3>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/results/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-1298c9f3"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-CGLMjTLQ.mjs.map
