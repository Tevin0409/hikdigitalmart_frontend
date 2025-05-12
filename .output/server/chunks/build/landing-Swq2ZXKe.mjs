import { s as script$2 } from './index-BZ8aq3vL.mjs';
import { s as script$1 } from './index-CI0zemKa.mjs';
import { s as script } from './index-DR30ug9d.mjs';
import { ref, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '@primeuix/utils/dom';
import '@primeuix/utils/object';
import './index-B0KNiV_3.mjs';
import './index-BjfqnR8d.mjs';
import '@primeuix/styled';
import '@primeuix/utils/uuid';
import './index-BgtDrjLh.mjs';
import './index-5ckDHAkT.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import '@primevue/core/base/style';
import 'node:url';
import 'pinia';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@primeuix/utils/eventbus';
import '@primeuix/utils';
import 'deep-pick-omit';
import 'axios';

const _sfc_main = {
  __name: "landing",
  __ssrInlineRender: true,
  setup(__props) {
    const testimonials = ref([
      { name: "John Doe", feedback: "Great quality cameras and quick service!" },
      { name: "Jane Smith", feedback: "Affordable prices and reliable products." },
      { name: "Michael Lee", feedback: "Fantastic support and easy installation." }
    ]);
    const products = ref([
      {
        name: "Outdoor CCTV Camera",
        image: "https://www.sdl.co.ke/assets/images/resource/about-6.png",
        description: "High-quality outdoor surveillance."
      },
      {
        name: "Indoor CCTV Camera",
        image: "https://via.placeholder.com/400x300?text=Indoor+CCTV+Camera",
        description: "Clear indoor monitoring."
      },
      {
        name: "Smart Doorbell Camera",
        image: "https://via.placeholder.com/400x300?text=Smart+Doorbell+Camera",
        description: "Secure your front door with smart features."
      }
    ]);
    const testimonialTemplate = (testimonial) => {
      return {
        template: `
      <div class="p-4 bg-white shadow-md rounded-xl">
        <p class="text-lg mb-2">"${testimonial.feedback}"</p>
        <p class="text-sm text-gray-500">- ${testimonial.name}</p>
      </div>
    `
      };
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = script;
      const _component_Button = script$1;
      const _component_Carousel = script$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-8 bg-gray-100 min-h-screen" }, _attrs))} data-v-aec88f73><header class="text-center mb-8" data-v-aec88f73><h1 class="text-4xl font-bold mb-2" data-v-aec88f73> Welcome to SecureView CCTV Cameras </h1><p class="text-lg text-gray-600" data-v-aec88f73> Your trusted partner for advanced security solutions </p></header><section class="mb-12" data-v-aec88f73><h2 class="text-2xl font-semibold mb-4" data-v-aec88f73>Our Products</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-v-aec88f73><!--[-->`);
      ssrRenderList(products.value, (product, index) => {
        _push(ssrRenderComponent(_component_Card, {
          key: index,
          class: "shadow-md"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", product.image)}${ssrRenderAttr("alt", product.name)} class="rounded-t-xl w-full h-48 object-cover" data-v-aec88f73${_scopeId}><div class="p-4" data-v-aec88f73${_scopeId}><h3 class="text-xl font-bold mb-2" data-v-aec88f73${_scopeId}>${ssrInterpolate(product.name)}</h3><p class="text-gray-600 mb-4" data-v-aec88f73${_scopeId}>${ssrInterpolate(product.description)}</p>`);
              _push2(ssrRenderComponent(_component_Button, {
                label: "Learn More",
                class: "p-button-outlined"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("img", {
                  src: product.image,
                  alt: product.name,
                  class: "rounded-t-xl w-full h-48 object-cover"
                }, null, 8, ["src", "alt"]),
                createVNode("div", { class: "p-4" }, [
                  createVNode("h3", { class: "text-xl font-bold mb-2" }, toDisplayString(product.name), 1),
                  createVNode("p", { class: "text-gray-600 mb-4" }, toDisplayString(product.description), 1),
                  createVNode(_component_Button, {
                    label: "Learn More",
                    class: "p-button-outlined"
                  })
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></section><section class="mb-12" data-v-aec88f73><h2 class="text-2xl font-semibold mb-4" data-v-aec88f73>Testimonials</h2>`);
      _push(ssrRenderComponent(_component_Carousel, {
        value: testimonials.value,
        "item-template": testimonialTemplate,
        class: "shadow-md"
      }, null, _parent));
      _push(`</section><footer class="text-center mt-8" data-v-aec88f73><p class="text-gray-500" data-v-aec88f73> \xA9 2025 SecureView CCTV Cameras. All rights reserved. </p></footer></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/landing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const landing = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-aec88f73"]]);

export { landing as default };
//# sourceMappingURL=landing-Swq2ZXKe.mjs.map
