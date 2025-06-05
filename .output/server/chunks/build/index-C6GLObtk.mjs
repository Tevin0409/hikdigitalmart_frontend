import script from './index-DvL1d2Y5.mjs';
import { mergeProps, createVNode, resolveDynamicComponent, ref, computed, useSSRContext } from 'vue';
import { _ as _export_sfc, d as useUserStore } from './server.mjs';
import { O as Orders, P as Profile } from './Orders-rAeowo6i.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderVNode } from 'vue/server-renderer';
import '@primeuix/utils/dom';
import './index-2dA4pXcI.mjs';
import './index-DpRrGZTR.mjs';
import '@primeuix/styled';
import '@primeuix/utils/object';
import '@primeuix/utils/uuid';
import './index-f6-L4oOs.mjs';
import '@primeuix/styles/ripple';
import '@primeuix/styles/tabmenu';
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
import 'node:url';
import 'pinia';
import 'vue-router';
import '@primeuix/utils/eventbus';
import '@primeuix/utils';
import '@primeuix/styles/base';
import 'axios';
import './index-B8fUCuXN.mjs';
import '@primeuix/utils/zindex';
import './index-D21vFaAL.mjs';
import './index-CgJu4NhB.mjs';
import './index-BLn-pl6M.mjs';
import './index-B0P5HmBk.mjs';
import './index-C319vlSQ.mjs';
import './index-B5Uz4ly5.mjs';
import './index-BpOzP0HJ.mjs';
import './index-C1vnj6fg.mjs';
import './index-CJPkJwKH.mjs';
import './nuxt-link-DxhiTiNz.mjs';
import './index-B9TrIdXC.mjs';
import 'jspdf';
import 'html2canvas';
import './index-Bj63-OuG.mjs';
import './index-_YLQpnfS.mjs';
import './index-DwBCCSyQ.mjs';
import './index-De0dg7Ws.mjs';
import './index-Din928lO.mjs';

const _sfc_main = {
  components: { Profile, Orders, TabMenu: script },
  setup() {
    const userStore = useUserStore();
    const selectedIndex = ref(0);
    const tabs = ref([
      { name: "Profile", label: "My Account", component: Profile },
      { name: "Orders", label: "My Orders", component: Orders }
      // { name: "Wishlist", label: "Wishlist", component: Wishlist },
    ]);
    const user = userStore.user || { firstName: "", lastName: "", email: "" };
    const activeComponent = computed(
      () => tabs.value[selectedIndex.value].component
    );
    const logout = () => userStore.logout();
    return { tabs, selectedIndex, activeComponent, logout, userStore, user };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TabMenu = script;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto p-4" }, _attrs))} data-v-bf5f69b5><div class="md:hidden mb-4" data-v-bf5f69b5><div class="flex justify-center rounded-full p6" data-v-bf5f69b5><div class="flex flex-col items-center p-4" data-v-bf5f69b5><img class="w-24 h-24 rounded-full p-2 ring-1 ring-gray-300 dark:ring-gray-500" src="https://img.freepik.com/free-vector/young-man-glasses-hoodie_1308-174658.jpg?ga=GA1.1.1339297937.1740040542&amp;semt=ais_hybrid" alt="Profile Image" data-v-bf5f69b5><div class="font-medium text-center pt-4" data-v-bf5f69b5><div data-v-bf5f69b5>${ssrInterpolate($setup.user.firstName + " " + $setup.user.lastName)}</div><div class="text-sm text-gray-500 dark:text-gray-400" data-v-bf5f69b5>${ssrInterpolate($setup.user.email)}</div></div></div></div>`);
  _push(ssrRenderComponent(_component_TabMenu, {
    activeIndex: $setup.selectedIndex,
    "onUpdate:activeIndex": ($event) => $setup.selectedIndex = $event,
    model: $setup.tabs
  }, null, _parent));
  _push(`</div><div class="flex flex-col md:flex-row bg-gray-100 rounded-md min-h-[80vh]" data-v-bf5f69b5><div class="hidden md:flex w-64 bg-white flex-col border-r p-6" data-v-bf5f69b5><div class="flex justify-center rounded-full p-6" data-v-bf5f69b5><div class="flex flex-col items-center p-4" data-v-bf5f69b5><img class="w-24 h-24 rounded-full p-2 ring-1 ring-gray-300 dark:ring-gray-500" src="https://img.freepik.com/free-vector/young-man-glasses-hoodie_1308-174658.jpg?ga=GA1.1.1339297937.1740040542&amp;semt=ais_hybrid" alt="Profile Image" data-v-bf5f69b5><div class="font-medium text-center pt-4" data-v-bf5f69b5><div data-v-bf5f69b5>${ssrInterpolate($setup.user.firstName + " " + $setup.user.lastName)}</div><div class="text-sm text-gray-500 dark:text-gray-400" data-v-bf5f69b5>${ssrInterpolate($setup.user.email)}</div></div></div></div><div class="flex-1" data-v-bf5f69b5><ul data-v-bf5f69b5><!--[-->`);
  ssrRenderList($setup.tabs, (tab, index2) => {
    _push(`<li data-v-bf5f69b5><button class="${ssrRenderClass([{ "bg-primary text-white": $setup.selectedIndex === index2 }, "w-full p-4 gap-x-3 text-left hover:bg-secondary hover:text-white gap-y-4 rounded-xl"])}" data-v-bf5f69b5>${ssrInterpolate(tab.label)}</button></li>`);
  });
  _push(`<!--]--></ul></div><button class="mt-auto p-4 bg-primary text-white hover:bg-secondary" data-v-bf5f69b5> Logout </button></div><div class="flex-1 p-6 bg-white rounded-md min-h-[70vh]" data-v-bf5f69b5>`);
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent($setup.activeComponent), null, null), _parent);
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/my-account/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-bf5f69b5"]]);

export { index as default };
//# sourceMappingURL=index-C6GLObtk.mjs.map
