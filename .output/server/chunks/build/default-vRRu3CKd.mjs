import { _ as _sfc_main$1 } from './Navbar-DMIrNmbv.mjs';
import { _ as _export_sfc, u as useUserStore, l as __nuxt_component_0 } from './server.mjs';
import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './nuxt-link-BYB1KAeo.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import '@primevue/core/base/style';
import '@primeuix/utils/object';
import '@primeuix/styled';
import 'node:url';
import './index-Dvqyfh34.mjs';
import '@primeuix/utils/dom';
import '@primeuix/utils/uuid';
import './index-CBz_SNTb.mjs';
import './index-CHf7NZjU.mjs';
import './index-BBqC3hNY.mjs';
import './index-BZ-8HqfV.mjs';
import './index-XLr1qd4A.mjs';
import '@primeuix/utils';
import '@primeuix/utils/eventbus';
import '@primeuix/utils/zindex';
import './index-zZrFrjQS.mjs';
import './index-DEuunsqE.mjs';
import './logoo-Bk06oiQl.mjs';
import 'vue-router';
import 'pinia';
import 'unhead';
import '@unhead/shared';
import 'deep-pick-omit';
import 'axios';

const _sfc_main = {
  components: {
    Navbar: _sfc_main$1
  },
  setup() {
    const searchTerm = ref("");
    useUserStore();
    const refresh = ref(false);
    const handleSearchUpdate = (value) => {
      searchTerm.value = value;
    };
    const handleRefresh = () => {
      console.log("Refreshing Navbar...");
      refresh.value = !refresh.value;
    };
    return { searchTerm, handleSearchUpdate, handleRefresh, refresh };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Navbar = _sfc_main$1;
  const _component_NuxtPage = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-50" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Navbar, {
    "onUpdate:searchTerm": $setup.handleSearchUpdate,
    refresh: $setup.refresh
  }, null, _parent));
  _push(ssrRenderComponent(_component_NuxtPage, {
    "search-term": $setup.searchTerm,
    onRefreshNavbar: $setup.handleRefresh
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-vRRu3CKd.mjs.map
