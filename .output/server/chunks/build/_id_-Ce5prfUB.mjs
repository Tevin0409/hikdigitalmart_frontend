import { s as script$2 } from './index-DJ-ZgwLv.mjs';
import { s as script$1 } from './index-CEOEMxBM.mjs';
import { s as script } from './index-hZtXntCu.mjs';
import { ref, computed, resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { _ as _export_sfc, a as useNuxtApp, c as useToast, b as useProductStore, u as useUserStore } from './server.mjs';
import '@primeuix/utils/dom';
import '@primeuix/utils/object';
import '@primeuix/utils/zindex';
import './index-CPSBx0zQ.mjs';
import './index-BjfqnR8d.mjs';
import '@primeuix/styled';
import '@primeuix/utils/uuid';
import './index-BdVaJSFC.mjs';
import './index-BgtDrjLh.mjs';
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
    const toast = useToast();
    const productStore = useProductStore();
    const route = useRoute();
    const quantity = ref(1);
    const activeTab = ref("details");
    ref([]);
    const productList = computed(() => productStore.products);
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
        toast.add({
          severity: "success",
          summary: "Product Added to cart",
          group: "br",
          life: 3e3
        });
      } catch (error) {
        toast.add({
          severity: "danger",
          summary: "error adding to cart, Please try again",
          group: "br",
          life: 3e3
        });
        loadingAdd.value = false;
        console.error("Error adding product to cart:", error);
      }
    };
    const home = ref({
      icon: "pi pi-home",
      route: "/dashboard"
    });
    const items = ref([
      { label: "Products", route: "/dashboard" }
      // { label: `${product.name}`, route: "" },
    ]);
    const tabClass = (tab) => ({
      "text-black border-b-2 border-black": activeTab.value === tab,
      "text-gray-600": activeTab.value !== tab
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_Breadcrumb = script;
      const _component_router_link = resolveComponent("router-link");
      const _component_Button = script$1;
      const _component_Toast = script$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto p-6" }, _attrs))} data-v-9abcfe3f>`);
      _push(ssrRenderComponent(_component_Breadcrumb, {
        home: home.value,
        model: items.value
      }, {
        item: withCtx(({ item, props }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (item.route) {
              _push2(ssrRenderComponent(_component_router_link, {
                to: item.route,
                custom: ""
              }, {
                default: withCtx(({ href, navigate }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<a${ssrRenderAttrs(mergeProps({ href }, props.action))} data-v-9abcfe3f${_scopeId2}><span class="${ssrRenderClass([item.icon, "text-color"])}" data-v-9abcfe3f${_scopeId2}></span><span class="text-primary font-semibold" data-v-9abcfe3f${_scopeId2}>${ssrInterpolate(item.label)}</span></a>`);
                  } else {
                    return [
                      createVNode("a", mergeProps({ href }, props.action, { onClick: navigate }), [
                        createVNode("span", {
                          class: [item.icon, "text-color"]
                        }, null, 2),
                        createVNode("span", { class: "text-primary font-semibold" }, toDisplayString(item.label), 1)
                      ], 16, ["href", "onClick"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<a${ssrRenderAttrs(mergeProps({
                href: item.url,
                target: item.target
              }, props.action))} data-v-9abcfe3f${_scopeId}><span class="text-surface-700 dark:text-surface-0" data-v-9abcfe3f${_scopeId}>${ssrInterpolate(item.label)}</span></a>`);
            }
          } else {
            return [
              item.route ? (openBlock(), createBlock(_component_router_link, {
                key: 0,
                to: item.route,
                custom: ""
              }, {
                default: withCtx(({ href, navigate }) => [
                  createVNode("a", mergeProps({ href }, props.action, { onClick: navigate }), [
                    createVNode("span", {
                      class: [item.icon, "text-color"]
                    }, null, 2),
                    createVNode("span", { class: "text-primary font-semibold" }, toDisplayString(item.label), 1)
                  ], 16, ["href", "onClick"])
                ]),
                _: 2
              }, 1032, ["to"])) : (openBlock(), createBlock("a", mergeProps({
                key: 1,
                href: item.url,
                target: item.target
              }, props.action), [
                createVNode("span", { class: "text-surface-700 dark:text-surface-0" }, toDisplayString(item.label), 1)
              ], 16, ["href", "target"]))
            ];
          }
        }),
        _: 1
      }, _parent));
      if (product.value) {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 gap-8" data-v-9abcfe3f><div class="flexflex-col md:flex-row items-center" data-v-9abcfe3f><div class="w-full h-96 mb-4 md:mb-0 md:mr-4 border rounded-lg overflow-hidden" data-v-9abcfe3f><img${ssrRenderAttr("src", product.value.image)} alt="Product Image" class="w-full h-full object-contain" data-v-9abcfe3f></div><div class="flex mt-8 md:flex-row gap-2 justify-center md:overflow-visible" data-v-9abcfe3f><!--[-->`);
        ssrRenderList(product.value.images.slice(-4), (img, index) => {
          _push(`<img${ssrRenderAttr("src", img)} alt="Thumbnail" class="w-20 h-20 md:w-32 md:h-32 object-cover border rounded-lg cursor-pointer hover:border-gray-500" data-v-9abcfe3f>`);
        });
        _push(`<!--]--></div></div><div class="flex flex-col space-y-4" data-v-9abcfe3f><h2 class="text-3xl font-bold" data-v-9abcfe3f>${ssrInterpolate(product.value.name)}</h2><p class="text-lg text-gray-700 font-medium" data-v-9abcfe3f> Ksh ${ssrInterpolate(formattedPrice(product.value.price))}</p><p class="text-gray-600 leading-relaxed" data-v-9abcfe3f></p><div class="flex items-center space-x-4" data-v-9abcfe3f><!--[-->`);
        ssrRenderList(product.value.features, (feature) => {
          _push(`<p data-v-9abcfe3f>${ssrInterpolate(feature.description)}</p>`);
        });
        _push(`<!--]--></div><div class="flex items-center space-x-4" data-v-9abcfe3f><input type="number" min="1"${ssrRenderAttr("value", quantity.value)} class="w-16 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-500" data-v-9abcfe3f>`);
        _push(ssrRenderComponent(_component_Button, {
          onClick: addToCart,
          loading: loadingAdd.value,
          label: "Add to Cart"
        }, null, _parent));
        _push(ssrRenderComponent(_component_Button, {
          onClick: _ctx.addToWishlist,
          loading: _ctx.loadingWish,
          icon: "pi pi-heart",
          severity: "success",
          "aria-label": "Search",
          rounded: "",
          class: "favicon"
        }, null, _parent));
        _push(`</div><div class="mt-4 space-y-2" data-v-9abcfe3f><p class="text-black-600" data-v-9abcfe3f><i class="fas fa-truck" data-v-9abcfe3f></i> Description</p><p class="text-gray-600" data-v-9abcfe3f>${(_a = formatDescription(product.value.description)) != null ? _a : ""}</p><p class="text-gray-600" data-v-9abcfe3f><i class="fas fa-undo" data-v-9abcfe3f></i></p></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (product.value) {
        _push(`<div class="mt-8" data-v-9abcfe3f><div class="flex space-x-8 border-b pb-2" data-v-9abcfe3f><h3 class="${ssrRenderClass([tabClass("details"), "cursor-pointer text-lg font-semibold"])}" data-v-9abcfe3f> Details </h3><h3 class="${ssrRenderClass([tabClass("reviews"), "cursor-pointer text-lg font-semibold"])}" data-v-9abcfe3f> Reviews </h3><h3 class="${ssrRenderClass([tabClass("discussion"), "cursor-pointer text-lg font-semibold"])}" data-v-9abcfe3f> Discussion </h3></div>`);
        if (activeTab.value === "details") {
          _push(`<div class="mt-6 space-y-6" data-v-9abcfe3f><p data-v-9abcfe3f>${(_b = formatDescription(product.value.description)) != null ? _b : ""}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        if (activeTab.value === "reviews") {
          _push(`<div class="mt-6 space-y-8" data-v-9abcfe3f><!--[-->`);
          ssrRenderList(reviews, (review) => {
            _push(`<div class="border-b pb-4" data-v-9abcfe3f><div class="flex items-center space-x-4" data-v-9abcfe3f><img${ssrRenderAttr("src", review.avatar)} alt="User Avatar" class="w-10 h-10 rounded-full" data-v-9abcfe3f><div data-v-9abcfe3f><h4 class="font-bold text-gray-800" data-v-9abcfe3f>${ssrInterpolate(review.name)}</h4><p class="text-sm text-gray-500" data-v-9abcfe3f>${ssrInterpolate(review.date)}</p><div class="flex space-x-1 mt-1" data-v-9abcfe3f><!--[-->`);
            ssrRenderList(5, (i) => {
              _push(`<svg xmlns="http://www.w3.org/2000/svg"${ssrRenderAttr("fill", i <= review.rating ? "currentColor" : "none")} viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 text-yellow-400" data-v-9abcfe3f><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" data-v-9abcfe3f></path></svg>`);
            });
            _push(`<!--]--></div></div></div><p class="mt-4 text-gray-800" data-v-9abcfe3f>${ssrInterpolate(review.comment)}</p><div class="flex items-center space-x-4 text-gray-500 text-sm mt-2" data-v-9abcfe3f><span class="cursor-pointer hover:text-gray-700" data-v-9abcfe3f>Reply</span><span data-v-9abcfe3f>Likes: ${ssrInterpolate(review.likes)}</span><span data-v-9abcfe3f>Replies: ${ssrInterpolate(review.replies)}</span></div></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        if (activeTab.value === "discussion") {
          _push(`<div class="mt-6 space-y-6" data-v-9abcfe3f><h2 class="text-2xl font-bold text-gray-800" data-v-9abcfe3f>Discussion</h2><div class="flex items-start space-x-4" data-v-9abcfe3f><div class="flex-1" data-v-9abcfe3f><textarea placeholder="Write your comment..." rows="3" class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" data-v-9abcfe3f>${ssrInterpolate(_ctx.newComment)}</textarea><button class="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700" data-v-9abcfe3f> Post Comment </button></div></div><!--[-->`);
          ssrRenderList(_ctx.discussionComments, (comment) => {
            _push(`<div class="border-b pb-4" data-v-9abcfe3f><div class="flex items-center space-x-4" data-v-9abcfe3f><img${ssrRenderAttr("src", comment.avatar)} alt="User Avatar" class="w-10 h-10 rounded-full" data-v-9abcfe3f><div data-v-9abcfe3f><h4 class="font-bold text-gray-800" data-v-9abcfe3f>${ssrInterpolate(comment.name)}</h4><p class="text-sm text-gray-500" data-v-9abcfe3f>${ssrInterpolate(comment.date)}</p></div></div><p class="mt-2 text-gray-700" data-v-9abcfe3f>${ssrInterpolate(comment.content)}</p><div class="flex items-center space-x-4 text-gray-500 text-sm mt-2" data-v-9abcfe3f><span class="cursor-pointer hover:text-gray-700" data-v-9abcfe3f>Reply</span><span data-v-9abcfe3f>Likes: ${ssrInterpolate(comment.likes)}</span><span data-v-9abcfe3f>Replies: ${ssrInterpolate(comment.replies)}</span></div>`);
            if (comment.replies && comment.replies.length) {
              _push(`<div class="mt-4 pl-6 border-l" data-v-9abcfe3f><!--[-->`);
              ssrRenderList(comment.replies, (reply) => {
                _push(`<div class="mt-2" data-v-9abcfe3f><div class="flex items-center space-x-4" data-v-9abcfe3f><img${ssrRenderAttr("src", reply.avatar)} alt="Reply Avatar" class="w-8 h-8 rounded-full" data-v-9abcfe3f><div data-v-9abcfe3f><h4 class="font-bold text-gray-800" data-v-9abcfe3f>${ssrInterpolate(reply.name)}</h4><p class="text-sm text-gray-500" data-v-9abcfe3f>${ssrInterpolate(reply.date)}</p></div></div><p class="mt-2 text-gray-700" data-v-9abcfe3f>${ssrInterpolate(reply.content)}</p></div>`);
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
        _push(`<div class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50" data-v-9abcfe3f><div class="relative flex justify-center items-center" data-v-9abcfe3f><div class="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-100" data-v-9abcfe3f></div><img src="https://freelancerdxb.s3.eu-central-1.amazonaws.com/documents/image%20%285%29__5d197f13926ac20a20a6f301d00ce69b516f83eb.png" class="rounded-full h-24 w-24" data-v-9abcfe3f></div></div>`);
      }
      _push(`<section data-v-9abcfe3f><div class="rounded-md pt-10" data-v-9abcfe3f><div class="flex justify-between items-center mb-4" data-v-9abcfe3f><h2 class="text-xl font-semibold" data-v-9abcfe3f>Related Products</h2></div><div class="flex overflow-x-auto gap-4 p-2" data-v-9abcfe3f><!--[-->`);
      ssrRenderList(unref(productList), (product2, index) => {
        var _a2;
        _push(`<div class="min-w-[200px] md:min-w-[220px] bg-white rounded-md shadow-md cursor-pointer p-2" data-v-9abcfe3f><div class="relative" data-v-9abcfe3f><img${ssrRenderAttr("src", (_a2 = product2.images[0]) == null ? void 0 : _a2.uploadUrl)}${ssrRenderAttr("alt", product2.name)} class="w-full h-36 object-cover rounded-md" data-v-9abcfe3f></div> ${ssrInterpolate(product2.product.name)} <h3 class="text-sm font-medium mt-2 truncate" data-v-9abcfe3f>${ssrInterpolate(product2.name)}</h3><p class="text-lg font-semibold text-gray-900" data-v-9abcfe3f></p><p class="text-gray-500 text-xs line-through" data-v-9abcfe3f>${ssrInterpolate(product2.oldPrice)}</p></div>`);
      });
      _push(`<!--]--></div></div></section>`);
      _push(ssrRenderComponent(_component_Toast, {
        position: "bottom-right",
        group: "br"
      }, null, _parent));
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
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9abcfe3f"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-Ce5prfUB.mjs.map
