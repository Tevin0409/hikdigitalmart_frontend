import Dashboard from './Home-CvhjJz4N.mjs';
import { resolveComponent, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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
import './Footer-BX7XiUP3.mjs';
import './index-BZ8aq3vL.mjs';
import '@primeuix/utils/dom';
import './index-B0KNiV_3.mjs';
import './index-BjfqnR8d.mjs';
import '@primeuix/utils/uuid';
import './index-BgtDrjLh.mjs';
import './index-CI0zemKa.mjs';
import './index-5ckDHAkT.mjs';
import './index-BXa5O8IC.mjs';
import '@primeuix/utils/zindex';
import './index-ZzPV6IeI.mjs';
import './index-DWifVPgv.mjs';
import '@primeuix/utils';
import '@primeuix/utils/eventbus';
import './index-Cr6bhV-f.mjs';
import './index-DGRyAuRA.mjs';
import './TopDeal-DH9dchaw.mjs';
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
//# sourceMappingURL=index-BjfOig-L.mjs.map
