import { _ as __nuxt_component_0 } from './Footer-BX7XiUP3.mjs';
import { s as script } from './index-CI0zemKa.mjs';
import { watch, ref, computed, resolveComponent, mergeProps, useSSRContext } from 'vue';
import { F as FlashCard, _ as _sfc_main$4, a as _sfc_main$3, T as TopCard, b as Footer, c as _sfc_main$1, d as _imports_0 } from './empty-CaLLxDsB.mjs';
import { useRoute } from 'vue-router';
import { _ as _export_sfc, a as useNuxtApp } from './server.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
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
import './index-jtFS_Qvq.mjs';
import '@primeuix/utils/zindex';
import './index-ZzPV6IeI.mjs';
import './index-Bn5AJdG7.mjs';
import './index-BZ8aq3vL.mjs';
import './index-B0KNiV_3.mjs';
import './index-BgtDrjLh.mjs';
import './index-Cr6bhV-f.mjs';
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
      searchTer
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FilterCard = resolveComponent("FilterCard");
  const _component_ProductCard = resolveComponent("ProductCard");
  const _component_Button = script;
  const _component_Footer = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto my-10 pa-10" }, _attrs))} data-v-aa74852f><section class="flash-sales mt-5 mx-2 full-screen" style="${ssrRenderStyle({ "min-height": "900px" })}" data-v-aa74852f><div class="flex justify-between items-center mb-4" data-v-aa74852f><h2 class="text-xl font-regular" data-v-aa74852f> Search results for <span class="font-bold" data-v-aa74852f>${ssrInterpolate($setup.searchTer)}</span></h2><div class="flex space-x-2" data-v-aa74852f></div></div><div class="flex" data-v-aa74852f>`);
  _push(ssrRenderComponent(_component_FilterCard, { features: $setup.features }, null, _parent));
  _push(`<div class="w-full" data-v-aa74852f>`);
  if ($setup.fetching && $setup.products.length < 1) {
    _push(`<div class="text-center mt-6" data-v-aa74852f><div class="relative flex justify-center items-center" data-v-aa74852f><div class="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-100" data-v-aa74852f></div><img src="https://freelancerdxb.s3.eu-central-1.amazonaws.com/documents/image%20%285%29__5d197f13926ac20a20a6f301d00ce69b516f83eb.png" class="rounded-full h-24 w-24" data-v-aa74852f></div></div>`);
  } else if ($setup.products.length == 0) {
    _push(`<div class="flex flex-col items-center justify-center text-center mt-12 text-gray-500" data-v-aa74852f><img${ssrRenderAttr("src", _imports_0)} alt="No items found" class="h-56 w-56" data-v-aa74852f><p class="pt-6" data-v-aa74852f>No items found</p></div>`);
  } else {
    _push(`<div class="grid gap-3 grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 justify-center" data-v-aa74852f><!--[-->`);
    ssrRenderList($setup.products, (product) => {
      _push(ssrRenderComponent(_component_ProductCard, {
        key: product.id,
        item: product
      }, null, _parent));
    });
    _push(`<!--]--></div>`);
  }
  if ($setup.products.length != 0) {
    _push(`<div class="flex justify-center py-8" data-v-aa74852f>`);
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
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-aa74852f"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-cHoRpnCT.mjs.map
