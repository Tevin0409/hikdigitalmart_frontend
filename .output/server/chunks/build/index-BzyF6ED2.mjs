import Dashboard from './Home-D4A8rmA_.mjs';
import { resolveComponent, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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
import './index-BJXpECdB.mjs';
import '@primeuix/utils/dom';
import './index-XLr1qd4A.mjs';
import '@primeuix/utils';
import './index-CBz_SNTb.mjs';
import '@primeuix/utils/uuid';
import './index-BBqC3hNY.mjs';
import './index-BgIJ0E90.mjs';
import './index-CHf7NZjU.mjs';
import './index-Dvqyfh34.mjs';
import './index-BZ-8HqfV.mjs';
import '@primeuix/utils/eventbus';
import './index-Dq5VkPko.mjs';
import '@primeuix/utils/zindex';
import './index-DSnb32Yv.mjs';
import './index-zZrFrjQS.mjs';
import './index-BFNtOUMz.mjs';
import 'pinia';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'deep-pick-omit';
import 'axios';

const _sfc_main = {
  components: {
    Dashboard
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Dashboard = resolveComponent("Dashboard");
  _push(ssrRenderComponent(_component_Dashboard, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-BzyF6ED2.mjs.map
