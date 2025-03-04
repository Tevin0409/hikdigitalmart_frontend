import { P as Profile, O as Orders, s as script } from './Orders-1-5Hua_U.mjs';
import { ref, computed, mergeProps, createVNode, resolveDynamicComponent, useSSRContext } from 'vue';
import { _ as _export_sfc, u as useUserStore } from './server.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderVNode } from 'vue/server-renderer';
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
import './index-BdVaJSFC.mjs';
import '@primeuix/utils/uuid';
import './index-BjfqnR8d.mjs';
import './index-DJ-ZgwLv.mjs';
import '@primeuix/utils/zindex';
import './index-CPSBx0zQ.mjs';
import './index-CEOEMxBM.mjs';
import './nuxt-link-BYB1KAeo.mjs';
import './index-DW__Wuaq.mjs';
import 'jspdf';
import 'html2canvas';
import 'pinia';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@primeuix/utils/eventbus';
import '@primeuix/utils';
import 'deep-pick-omit';
import 'axios';

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
//# sourceMappingURL=index-DXuoSdL1.mjs.map
