import { s as script } from './index-CI0zemKa.mjs';
import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { _ as _export_sfc, a as useNuxtApp, u as useUserStore } from './server.mjs';
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
import 'pinia';
import 'unhead';
import '@unhead/shared';
import '@primeuix/utils/eventbus';
import '@primeuix/utils';
import 'deep-pick-omit';
import 'axios';

const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const { $formatPrice } = useNuxtApp();
    const formattedPrice = (price) => {
      return $formatPrice(price);
    };
    const route = useRoute();
    const quantity = ref(1);
    const activeTab = ref("details");
    const reviews = [
      {
        id: 1,
        name: "Helen Mwoki.",
        date: "Yesterday",
        rating: 5,
        comment: "Excellent gamepad!",
        likes: 42,
        replies: 0,
        avatar: "https://via.placeholder.com/40"
      },
      {
        id: 1,
        name: "Susan Njeri M.",
        date: "Yesterday",
        rating: 5,
        comment: "Besst Product ever !",
        likes: 42,
        replies: 0,
        avatar: "https://via.placeholder.com/40"
      }
    ];
    const product = ref(null);
    ref(false);
    const loadingAdd = ref(false);
    const { $axios } = useNuxtApp();
    const formatDescription = (description) => {
      return description ? description.replace(/\r\n/g, "<br>") : "";
    };
    const addToCart = async () => {
      const userStore = useUserStore();
      let user = userStore.user;
      loadingAdd.value = true;
      const productID = route.params.id;
      try {
        const body = {
          productModelId: productID,
          quantity: quantity.value,
          userId: user.id
        };
        const response = await $axios.post(`/product/cart/add`, body);
        loadingAdd.value = false;
      } catch (error) {
        loadingAdd.value = false;
        console.error("Error adding product to cart:", error);
      }
    };
    const tabClass = (tab) => ({
      "text-black border-b-2 border-black": activeTab.value === tab,
      "text-gray-600": activeTab.value !== tab
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_Button = script;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto p-6" }, _attrs))} data-v-843aa129><h1 class="text-2xl font-semibold mb-6" data-v-843aa129>Product Details</h1>`);
      if (product.value) {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 gap-8" data-v-843aa129><div class="flex flex-col items-center" data-v-843aa129><img${ssrRenderAttr("src", product.value.image)} alt="Product Image" class="w-full h-full object-cover mb-4 border rounded-lg" data-v-843aa129><div class="grid grid-cols-5 gap-2" data-v-843aa129><!--[-->`);
        ssrRenderList(product.value.images, (img, index) => {
          _push(`<img${ssrRenderAttr("src", img.autoCropUrl)} alt="Thumbnail" class="w-16 h-16 object-cover border rounded-lg cursor-pointer hover:border-gray-500" data-v-843aa129>`);
        });
        _push(`<!--]--></div></div><div class="flex flex-col space-y-4" data-v-843aa129><h2 class="text-3xl font-bold" data-v-843aa129>${ssrInterpolate(product.value.name)}</h2><p class="text-lg text-gray-700 font-medium" data-v-843aa129> Ksh ${ssrInterpolate(formattedPrice(product.value.price))}</p><p class="text-gray-600 leading-relaxed" data-v-843aa129></p><div class="flex items-center space-x-4" data-v-843aa129><!--[-->`);
        ssrRenderList(product.value.features, (feature) => {
          _push(`<p data-v-843aa129>${ssrInterpolate(feature.description)}</p>`);
        });
        _push(`<!--]--></div><div class="flex items-center space-x-4" data-v-843aa129><input type="number" min="1"${ssrRenderAttr("value", quantity.value)} class="w-16 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-500" data-v-843aa129>`);
        _push(ssrRenderComponent(_component_Button, {
          onClick: addToCart,
          loading: loadingAdd.value,
          label: "Add to Cart"
        }, null, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (product.value) {
        _push(`<div class="mt-8" data-v-843aa129><div class="flex space-x-8 border-b pb-2" data-v-843aa129><h3 class="${ssrRenderClass([tabClass("details"), "cursor-pointer text-lg font-semibold"])}" data-v-843aa129> Details </h3><h3 class="${ssrRenderClass([tabClass("reviews"), "cursor-pointer text-lg font-semibold"])}" data-v-843aa129> Reviews </h3><h3 class="${ssrRenderClass([tabClass("discussion"), "cursor-pointer text-lg font-semibold"])}" data-v-843aa129> Discussion </h3></div>`);
        if (activeTab.value === "details") {
          _push(`<div class="mt-6 space-y-6" data-v-843aa129><p data-v-843aa129>${(_a = formatDescription(product.value.description)) != null ? _a : ""}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        if (activeTab.value === "reviews") {
          _push(`<div class="mt-6 space-y-8" data-v-843aa129><!--[-->`);
          ssrRenderList(reviews, (review) => {
            _push(`<div class="border-b pb-4" data-v-843aa129><div class="flex items-center space-x-4" data-v-843aa129><img${ssrRenderAttr("src", review.avatar)} alt="User Avatar" class="w-10 h-10 rounded-full" data-v-843aa129><div data-v-843aa129><h4 class="font-bold text-gray-800" data-v-843aa129>${ssrInterpolate(review.name)}</h4><p class="text-sm text-gray-500" data-v-843aa129>${ssrInterpolate(review.date)}</p><div class="flex space-x-1 mt-1" data-v-843aa129><!--[-->`);
            ssrRenderList(5, (i) => {
              _push(`<svg xmlns="http://www.w3.org/2000/svg"${ssrRenderAttr("fill", i <= review.rating ? "currentColor" : "none")} viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 text-yellow-400" data-v-843aa129><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" data-v-843aa129></path></svg>`);
            });
            _push(`<!--]--></div></div></div><p class="mt-4 text-gray-800" data-v-843aa129>${ssrInterpolate(review.comment)}</p><div class="flex items-center space-x-4 text-gray-500 text-sm mt-2" data-v-843aa129><span class="cursor-pointer hover:text-gray-700" data-v-843aa129>Reply</span><span data-v-843aa129>Likes: ${ssrInterpolate(review.likes)}</span><span data-v-843aa129>Replies: ${ssrInterpolate(review.replies)}</span></div></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        if (activeTab.value === "discussion") {
          _push(`<div class="mt-6 space-y-6" data-v-843aa129><h2 class="text-2xl font-bold text-gray-800" data-v-843aa129>Discussion</h2><div class="flex items-start space-x-4" data-v-843aa129><div class="flex-1" data-v-843aa129><textarea placeholder="Write your comment..." rows="3" class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" data-v-843aa129>${ssrInterpolate(_ctx.newComment)}</textarea><button class="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700" data-v-843aa129> Post Comment </button></div></div><!--[-->`);
          ssrRenderList(_ctx.discussionComments, (comment) => {
            _push(`<div class="border-b pb-4" data-v-843aa129><div class="flex items-center space-x-4" data-v-843aa129><img${ssrRenderAttr("src", comment.avatar)} alt="User Avatar" class="w-10 h-10 rounded-full" data-v-843aa129><div data-v-843aa129><h4 class="font-bold text-gray-800" data-v-843aa129>${ssrInterpolate(comment.name)}</h4><p class="text-sm text-gray-500" data-v-843aa129>${ssrInterpolate(comment.date)}</p></div></div><p class="mt-2 text-gray-700" data-v-843aa129>${ssrInterpolate(comment.content)}</p><div class="flex items-center space-x-4 text-gray-500 text-sm mt-2" data-v-843aa129><span class="cursor-pointer hover:text-gray-700" data-v-843aa129>Reply</span><span data-v-843aa129>Likes: ${ssrInterpolate(comment.likes)}</span><span data-v-843aa129>Replies: ${ssrInterpolate(comment.replies)}</span></div>`);
            if (comment.replies && comment.replies.length) {
              _push(`<div class="mt-4 pl-6 border-l" data-v-843aa129><!--[-->`);
              ssrRenderList(comment.replies, (reply) => {
                _push(`<div class="mt-2" data-v-843aa129><div class="flex items-center space-x-4" data-v-843aa129><img${ssrRenderAttr("src", reply.avatar)} alt="Reply Avatar" class="w-8 h-8 rounded-full" data-v-843aa129><div data-v-843aa129><h4 class="font-bold text-gray-800" data-v-843aa129>${ssrInterpolate(reply.name)}</h4><p class="text-sm text-gray-500" data-v-843aa129>${ssrInterpolate(reply.date)}</p></div></div><p class="mt-2 text-gray-700" data-v-843aa129>${ssrInterpolate(reply.content)}</p></div>`);
              });
              _push(`<!--]--></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<div class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50" data-v-843aa129><div class="relative flex justify-center items-center" data-v-843aa129><div class="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-100" data-v-843aa129></div><img src="https://freelancerdxb.s3.eu-central-1.amazonaws.com/documents/image%20%285%29__5d197f13926ac20a20a6f301d00ce69b516f83eb.png" class="rounded-full h-24 w-24" data-v-843aa129></div></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-843aa129"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-D18q6mDQ.mjs.map
