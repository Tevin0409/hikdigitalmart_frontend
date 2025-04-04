import { _ as __nuxt_component_0 } from './nuxt-link-DpsmJg1c.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';

const _imports_0 = publicAssetsURL("/logo.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxtLink = __nuxt_component_0;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-gray-100 text-gray-800 py-10" }, _attrs))}><div class="container mx-auto px-4"><div class="grid grid-cols-1 md:grid-cols-4 gap-8"><div><div class="flex items-center space-x-2"><img${ssrRenderAttr("src", _imports_0)} alt="Logo" class="h-40"><p class="text-sm mt-2"> Town Branch at Mfangano street <br> Junction with Sheikh Karume <br> Ground Floor Facing Ramco <br> Hardware at Sheikh Karume. </p></div><div class="mt-4 space-y-2"><h4 class="font-bold">Contact us on</h4><div class="flex flex-col space-x-2"><div><i class="pi pi-phone pr-4" aria-hidden="true"></i><span class="text-sm font-bold">+254 727 909 060</span></div><div><span class="text-sm font-bold"><i class="pi pi-envelope pr-4" aria-hidden="true"></i> sdl@securedigitallimited.com <br></span></div></div></div><div class="flex space-x-2 mt-4"><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" class="h-10"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiNQc5CapoSJE3sujvojLNNXipoAGDZYgUWw&amp;s" alt="App Store" class="h-10"></div></div><div><h3 class="font-semibold mb-4">Opening Hours</h3><ul class="space-y-2 text-sm text-gray-600"><li>8:00 am to 5:30pm (MON - FRI)</li><li>8:30 am to 1:00pm (SAT)</li><li>Closed on Sundays and Public Holidays</li></ul></div><div><h3 class="font-semibold mb-4">Quick Links</h3><ul class="space-y-2 text-sm text-gray-600">`);
      _push(ssrRenderComponent(_component_nuxtLink, { to: "/profile" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<li${_scopeId}>Your Account</li>`);
          } else {
            return [
              createVNode("li", null, "Your Account")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxtLink, { to: "/orders" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<li${_scopeId}>Purchase History</li>`);
          } else {
            return [
              createVNode("li", null, "Purchase History")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<li>App Download</li><li>Latest News Blog</li><li>Shipping &amp; Delivery</li></ul></div></div><div class="flex justify-center space-x-4"><button class="text-[#1877F2] hover:opacity-80"><i class="pi pi-facebook text-xl"></i></button><button class="text-[#1DA1F2] hover:opacity-80"><i class="pi pi-twitter text-xl"></i></button><button class="text-[#E4405F] hover:opacity-80"><i class="pi pi-instagram text-xl"></i></button><button class="text-[#FF0000] hover:opacity-80"><i class="pi pi-youtube text-xl"></i></button></div><div class="mt-10 border-t pt-6 flex flex-col md:flex-row justify-center items-center text-sm text-gray-500"><p> \xA9 ${ssrInterpolate(unref(currentYear))} <span class="text-orange-500">Secure Group</span>. All Rights Reserved. </p><div class="flex space-x-2 mt-4 md:mt-0"></div></div></div></footer>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Footer-Dh1_azIl.mjs.map
