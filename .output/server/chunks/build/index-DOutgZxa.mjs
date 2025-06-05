import script from './index-Bj63-OuG.mjs';
import { computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    reviews: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const reviews = props.reviews;
    const average = computed(() => {
      if (!reviews.length) return 0;
      const total = reviews.reduce((acc, curr) => acc + (curr.rating || 0), 0);
      return total / reviews.length;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Rating = script;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center items-center" }, _attrs))} data-v-da95c843>`);
      _push(ssrRenderComponent(_component_Rating, {
        "model-value": average.value,
        readonly: "",
        class: "p-rating-custom"
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ratings/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RatingCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-da95c843"]]);

export { RatingCard as R };
//# sourceMappingURL=index-DOutgZxa.mjs.map
