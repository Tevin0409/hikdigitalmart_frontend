import { _ as _export_sfc, l as __nuxt_component_0 } from './server.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { _ as _sfc_main$1 } from './Navbar-DMIrNmbv.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
import './nuxt-link-BYB1KAeo.mjs';
import './index-Dvqyfh34.mjs';
import '@primeuix/utils/uuid';
import './index-CBz_SNTb.mjs';
import './index-CHf7NZjU.mjs';
import './index-BBqC3hNY.mjs';
import './index-BZ-8HqfV.mjs';
import './index-XLr1qd4A.mjs';
import '@primeuix/utils/zindex';
import './index-zZrFrjQS.mjs';
import './index-DEuunsqE.mjs';
import './logoo-Bk06oiQl.mjs';

const _sfc_main = {
  components: {
    Navbar: _sfc_main$1
  },
  setup() {
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtPage = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "landing" }, _attrs))} data-v-7ed592ce>`);
  _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/landing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const landing = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-7ed592ce"]]);

export { landing as default };
//# sourceMappingURL=landing-DzVH_Vjz.mjs.map
