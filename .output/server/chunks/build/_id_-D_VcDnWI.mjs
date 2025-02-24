import { s as script$1 } from './index-CI0zemKa.mjs';
import { P as Profile, O as Orders, s as script } from './Orders-CUJcBhwS.mjs';
import { ref, computed, mergeProps, createVNode, resolveDynamicComponent, useSSRContext } from 'vue';
import { _ as _export_sfc, u as useUserStore } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderVNode } from 'vue/server-renderer';
import '@primeuix/utils/object';
import './index-BjfqnR8d.mjs';
import '@primeuix/styled';
import '@primeuix/utils/dom';
import '@primeuix/utils/uuid';
import './index-5ckDHAkT.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import '@primevue/core/base/style';
import 'node:url';
import './index-jtFS_Qvq.mjs';
import '@primeuix/utils/zindex';
import './index-ZzPV6IeI.mjs';
import './index-Bn5AJdG7.mjs';
import './nuxt-link-DpsmJg1c.mjs';
import './index-DW__Wuaq.mjs';
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
  const _component_Button = script$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto p-4" }, _attrs))} data-v-ee3966b7><div class="md:hidden mb-4" data-v-ee3966b7>`);
  _push(ssrRenderComponent(_component_TabMenu, {
    activeIndex: $setup.selectedIndex,
    "onUpdate:activeIndex": ($event) => $setup.selectedIndex = $event,
    model: $setup.tabs
  }, null, _parent));
  _push(`</div><div class="flex flex-col md:flex-row bg-gray-100 rounded-md min-h-[80vh]" data-v-ee3966b7><div class="hidden md:flex w-64 bg-white flex-col border-r p-6" data-v-ee3966b7><div class="flex justify-center rounded-full p-6" data-v-ee3966b7><div class="flex flex-col items-center p-4" data-v-ee3966b7><img class="w-24 h-24 rounded-full p-2 ring-1 ring-gray-300 dark:ring-gray-500" src="https://img.freepik.com/free-vector/young-man-glasses-hoodie_1308-174658.jpg?ga=GA1.1.1339297937.1740040542&amp;semt=ais_hybrid" alt="Profile Image" data-v-ee3966b7><div class="font-medium text-center pt-4" data-v-ee3966b7><div data-v-ee3966b7>${ssrInterpolate($setup.user.firstName + " " + $setup.user.lastName)}</div><div class="text-sm text-gray-500 dark:text-gray-400" data-v-ee3966b7>${ssrInterpolate($setup.user.email)}</div></div></div></div><div class="flex-1" data-v-ee3966b7><ul data-v-ee3966b7><!--[-->`);
  ssrRenderList($setup.tabs, (tab, index) => {
    _push(`<li data-v-ee3966b7><button class="${ssrRenderClass([{ "bg-primary text-white": $setup.selectedIndex === index }, "w-full p-4 text-left hover:bg-secondary hover:text-white rounded-xl"])}" data-v-ee3966b7>${ssrInterpolate(tab.label)}</button></li>`);
  });
  _push(`<!--]--></ul></div>`);
  _push(ssrRenderComponent(_component_Button, {
    label: "Logout",
    onClick: $setup.logout,
    class: "mt-auto p-4 bg-primary text-white hover:bg-secondary"
  }, null, _parent));
  _push(`</div><div class="flex-1 p-6 bg-white rounded-md min-h-[70vh]" data-v-ee3966b7>`);
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent($setup.activeComponent), null, null), _parent);
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/my-account/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ee3966b7"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-D_VcDnWI.mjs.map
