import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main = {
  name: "AboutPage",
  setup() {
    const categories = ref([
      {
        name: "HD ANALOGUE CAMERAS AND DVR",
        icon: "/assets/icons/cctv.svg"
      },
      {
        name: "IP NETWORK CAMERAS AND NVR",
        icon: "/assets/icons/network.svg"
      },
      {
        name: "ACCESS CONTROL PRODUCTS",
        icon: "/assets/icons/lock.svg"
      },
      {
        name: "VIDEO INTERCOM PRODUCTS",
        icon: "/assets/icons/phone.svg"
      },
      {
        name: "MONITOR DISPLAY PRODUCTS",
        icon: "/assets/icons/monitor.svg"
      },
      {
        name: "ACCESSORIES PRODUCTS",
        icon: "/assets/icons/toolbox.svg"
      }
    ]);
    return {
      categories
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto my-10 px-4" }, _attrs))} data-v-025a75ec><div class="text-center mb-10" data-v-025a75ec><h1 class="text-3xl font-bold text-gray-800" data-v-025a75ec>About Our Shop</h1><p class="text-gray-600 mt-2" data-v-025a75ec> Welcome to our shop, your trusted partner for cutting-edge surveillance and security solutions. Explore our range of high-quality products tailored to meet all your security needs. </p></div><section data-v-025a75ec><h2 class="text-2xl font-bold text-gray-800 mb-6" data-v-025a75ec> Our Product Categories </h2><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" data-v-025a75ec><!--[-->`);
  ssrRenderList($setup.categories, (category) => {
    _push(`<div class="flex items-center border rounded-lg p-4 shadow-sm hover:shadow-lg transition-shadow" data-v-025a75ec><img${ssrRenderAttr("src", category.icon)} alt="" class="w-12 h-12 mr-4" data-v-025a75ec><div data-v-025a75ec><h3 class="text-lg font-semibold text-gray-800" data-v-025a75ec>${ssrInterpolate(category.name)}</h3></div></div>`);
  });
  _push(`<!--]--></div></section><section class="mt-10" data-v-025a75ec><h2 class="text-2xl font-bold text-gray-800 mb-4" data-v-025a75ec>Our Mission</h2><p class="text-gray-600" data-v-025a75ec> At our shop, we are committed to providing reliable and innovative security products. From HD analogue cameras to advanced access control systems, our mission is to empower businesses and homeowners with the best technology in surveillance and safety. </p></section><section class="mt-10" data-v-025a75ec><h2 class="text-2xl font-bold text-gray-800 mb-4" data-v-025a75ec>Why Choose Us?</h2><ul class="list-disc ml-6 text-gray-600" data-v-025a75ec><li data-v-025a75ec>Wide selection of high-quality surveillance products.</li><li data-v-025a75ec>Expert advice to help you choose the right solutions.</li><li data-v-025a75ec>Competitive prices and excellent customer service.</li><li data-v-025a75ec>Trusted by professionals and businesses worldwide.</li></ul></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-025a75ec"]]);

export { about as default };
//# sourceMappingURL=about-Dh5BUo0O.mjs.map
