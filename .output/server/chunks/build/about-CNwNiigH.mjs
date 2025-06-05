import { mergeProps, ref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '@primevue/core/base/style';
import '@primevue/core/basecomponent/style';
import '@primeuix/styles/autocomplete';
import '@primeuix/utils/object';
import '@primeuix/styles/cascadeselect';
import '@primeuix/styles/checkbox';
import '@primeuix/styles/checkboxgroup';
import '@primeuix/styles/colorpicker';
import '@primeuix/styles/datepicker';
import '@primeuix/styles/floatlabel';
import '@primeuix/styles/iconfield';
import '@primeuix/styles/iftalabel';
import '@primeuix/styles/inputchips';
import '@primeuix/styles/inputgroup';
import '@primeuix/styles/inputnumber';
import '@primeuix/styles/inputotp';
import '@primeuix/styles/inputtext';
import '@primeuix/styles/knob';
import '@primeuix/styles/listbox';
import '@primeuix/styles/multiselect';
import '@primeuix/styles/password';
import '@primeuix/styles/radiobutton';
import '@primeuix/styles/radiobuttongroup';
import '@primeuix/styles/rating';
import '@primeuix/styles/select';
import '@primeuix/styles/selectbutton';
import '@primeuix/styles/slider';
import '@primeuix/styles/textarea';
import '@primeuix/styles/togglebutton';
import '@primeuix/styles/toggleswitch';
import '@primeuix/styles/treeselect';
import '@primeuix/styles/button';
import '@primeuix/styles/buttongroup';
import '@primeuix/styles/speeddial';
import '@primeuix/styles/splitbutton';
import '@primeuix/styles/datatable';
import '@primeuix/styles/dataview';
import '@primeuix/styles/orderlist';
import '@primeuix/styles/organizationchart';
import '@primeuix/styles/paginator';
import '@primeuix/styles/picklist';
import '@primeuix/styles/tree';
import '@primeuix/styles/treetable';
import '@primeuix/styles/timeline';
import '@primeuix/styles/virtualscroller';
import '@primeuix/styles/accordion';
import '@primeuix/styles/card';
import '@primeuix/styles/divider';
import '@primeuix/styles/fieldset';
import '@primeuix/styles/panel';
import '@primeuix/styles/scrollpanel';
import '@primeuix/styles/splitter';
import '@primeuix/styles/stepper';
import '@primeuix/styles/tabview';
import '@primeuix/styles/tabs';
import '@primeuix/styles/toolbar';
import '@primeuix/styles/confirmdialog';
import '@primeuix/styles/confirmpopup';
import '@primeuix/styles/dialog';
import '@primeuix/styles/drawer';
import '@primeuix/styles/popover';
import '@primeuix/styles/fileupload';
import '@primeuix/styles/breadcrumb';
import '@primeuix/styles/contextmenu';
import '@primeuix/styles/dock';
import '@primeuix/styles/menu';
import '@primeuix/styles/menubar';
import '@primeuix/styles/megamenu';
import '@primeuix/styles/panelmenu';
import '@primeuix/styles/steps';
import '@primeuix/styles/tabmenu';
import '@primeuix/styles/tieredmenu';
import '@primeuix/styles/message';
import '@primeuix/styles/inlinemessage';
import '@primeuix/styles/toast';
import '@primeuix/styles/carousel';
import '@primeuix/styles/galleria';
import '@primeuix/styles/image';
import '@primeuix/styles/imagecompare';
import '@primeuix/styles/avatar';
import '@primeuix/styles/badge';
import '@primeuix/styles/blockui';
import '@primeuix/styles/chip';
import '@primeuix/styles/inplace';
import '@primeuix/styles/metergroup';
import '@primeuix/styles/overlaybadge';
import '@primeuix/styles/scrolltop';
import '@primeuix/styles/skeleton';
import '@primeuix/styles/progressbar';
import '@primeuix/styles/progressspinner';
import '@primeuix/styles/tag';
import '@primeuix/styles/terminal';
import '@primevue/forms/form/style';
import '@primevue/forms/formfield/style';
import '@primeuix/styles/tooltip';
import '@primeuix/styles/ripple';
import '@primeuix/styled';
import 'node:url';
import 'pinia';
import 'vue-router';
import '@primeuix/utils/eventbus';
import '@primeuix/utils';
import '@primeuix/styles/base';
import '@primeuix/utils/dom';
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
//# sourceMappingURL=about-CNwNiigH.mjs.map
