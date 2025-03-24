import { s as script$2 } from './index-DJ-ZgwLv.mjs';
import { s as script$1 } from './index-CEOEMxBM.mjs';
import { s as script } from './index-hZtXntCu.mjs';
import { ref, computed, resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { _ as _export_sfc, a as useNuxtApp, d as useRouter, c as useToast, u as useUserStore, b as useProductStore } from './server.mjs';
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
    useRouter();
    const formattedPrice = (price) => {
      return $formatPrice(price);
    };
    const toast = useToast();
    const userStore = useUserStore();
    const productStore = useProductStore();
    useRoute();
    const quantity = ref(1);
    const activeTab = ref("details");
    ref([]);
    const wishList = computed(() => productStore.wishListItems);
    const productList = computed(() => productStore.products);
    const isInWishList = (item) => {
      if (!item || !item.id) {
        return false;
      }
      if (userStore.isLoggedIn) {
        const exists = wishList.value.some(
          (wish) => wish.productModel.id === item.id
        );
        return exists;
      } else {
        const exists = wishList.value.some((wish) => wish.id === item.id);
        return exists;
      }
    };
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
    useNuxtApp();
    const formatDescription = (description) => {
      return description ? description.replace(/\r\n/g, "<br>") : "";
    };
    const addToCart = async (product2) => {
      loadingAdd.value = true;
      try {
        await productStore.addToCart(product2, quantity.value);
        toast.add({
          severity: "success",
          summary: "Product Added to Cart",
          group: "br",
          life: 3e3
        });
        loadingAdd.value = false;
      } catch (error) {
        loadingAdd.value = false;
        toast.add({
          severity: "danger",
          summary: "error adding to cart, Please try again",
          group: "br",
          life: 3e3
        });
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto p-6" }, _attrs))} data-v-ea2e5087>`);
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
                    _push3(`<a${ssrRenderAttrs(mergeProps({ href }, props.action))} data-v-ea2e5087${_scopeId2}><span class="${ssrRenderClass([item.icon, "text-color"])}" data-v-ea2e5087${_scopeId2}></span><span class="text-primary font-semibold" data-v-ea2e5087${_scopeId2}>${ssrInterpolate(item.label)}</span></a>`);
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
              }, props.action))} data-v-ea2e5087${_scopeId}><span class="text-surface-700 dark:text-surface-0" data-v-ea2e5087${_scopeId}>${ssrInterpolate(item.label)}</span></a>`);
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
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 gap-8" data-v-ea2e5087><div class="flex flex-col space-y-4" data-v-ea2e5087><h2 class="text-3xl font-bold" data-v-ea2e5087>${ssrInterpolate(product.value.name)}</h2><p class="text-lg text-gray-700 font-medium" data-v-ea2e5087> Ksh ${ssrInterpolate(formattedPrice(product.value.price))}</p><p class="text-gray-600 leading-relaxed" data-v-ea2e5087></p><div class="flex items-center space-x-4" data-v-ea2e5087><!--[-->`);
        ssrRenderList(product.value.features, (feature) => {
          _push(`<p data-v-ea2e5087>${ssrInterpolate(feature.description)}</p>`);
        });
        _push(`<!--]--></div><div class="flex items-center space-x-4" data-v-ea2e5087><input type="number" min="1"${ssrRenderAttr("value", quantity.value)} class="w-16 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-500" data-v-ea2e5087><p class="text-gray-600" data-v-ea2e5087><i class="pi pi-wallet mr-4" data-v-ea2e5087></i> Ksh ${ssrInterpolate(formattedPrice(product.value.price * quantity.value))}</p><p data-v-ea2e5087><button${ssrRenderAttr("loading", _ctx.loadingWish)} data-v-ea2e5087>`);
        if (!isInWishList(product.value)) {
          _push(`<i class="pi pi-heart cursor-pointer mr-2" style="${ssrRenderStyle({ "font-size": "1.8rem" })}" data-v-ea2e5087></i>`);
        } else {
          _push(`<i class="pi pi-heart-fill cursor-pointer mr-2" style="${ssrRenderStyle({ "font-size": "1.8rem", "color": "red" })}" data-v-ea2e5087></i>`);
        }
        _push(`</button></p>`);
        _push(ssrRenderComponent(_component_Button, {
          onClick: ($event) => addToCart(product.value),
          loading: loadingAdd.value,
          label: "Add to Cart"
        }, null, _parent));
        _push(`</div><div class="mt-4 space-y-2" data-v-ea2e5087><p class="text-bl font-bold" data-v-ea2e5087><i class="fas fa-truck" data-v-ea2e5087></i> Description </p><p class="text-gray-600" data-v-ea2e5087>${(_a = formatDescription(product.value.description)) != null ? _a : ""}</p><p class="text-gray-600" data-v-ea2e5087><i class="fas fa-undo" data-v-ea2e5087></i></p></div></div><div class="flexflex-col md:flex-row items-center" data-v-ea2e5087><div class="w-full h-96 mb-4 md:mb-0 md:mr-4 border rounded-lg overflow-hidden" data-v-ea2e5087><img${ssrRenderAttr("src", product.value.image)} alt="Product Image" class="w-full h-full object-contain" data-v-ea2e5087></div><div class="flex mt-8 md:flex-row gap-2 justify-center md:overflow-visible" data-v-ea2e5087><!--[-->`);
        ssrRenderList(product.value.images.slice(-4), (img, index) => {
          _push(`<img${ssrRenderAttr("src", img)} alt="Thumbnail" class="w-20 h-20 md:w-32 md:h-32 object-cover border rounded-lg cursor-pointer hover:border-gray-500" data-v-ea2e5087>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (product.value) {
        _push(`<div class="mt-8" data-v-ea2e5087><div class="flex space-x-8 border-b pb-2" data-v-ea2e5087><h3 class="${ssrRenderClass([tabClass("details"), "cursor-pointer text-lg font-semibold"])}" data-v-ea2e5087> Details </h3><h3 class="${ssrRenderClass([tabClass("reviews"), "cursor-pointer text-lg font-semibold"])}" data-v-ea2e5087> Reviews </h3><h3 class="${ssrRenderClass([tabClass("discussion"), "cursor-pointer text-lg font-semibold"])}" data-v-ea2e5087> Discussion </h3></div>`);
        if (activeTab.value === "details") {
          _push(`<div class="mt-6 space-y-6" data-v-ea2e5087><p data-v-ea2e5087>${(_b = formatDescription(product.value.description)) != null ? _b : ""}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        if (activeTab.value === "reviews") {
          _push(`<div class="mt-6 space-y-8" data-v-ea2e5087><!--[-->`);
          ssrRenderList(reviews, (review) => {
            _push(`<div class="border-b pb-4" data-v-ea2e5087><div class="flex items-center space-x-4" data-v-ea2e5087><img${ssrRenderAttr("src", review.avatar)} alt="User Avatar" class="w-10 h-10 rounded-full" data-v-ea2e5087><div data-v-ea2e5087><h4 class="font-bold text-gray-800" data-v-ea2e5087>${ssrInterpolate(review.name)}</h4><p class="text-sm text-gray-500" data-v-ea2e5087>${ssrInterpolate(review.date)}</p><div class="flex space-x-1 mt-1" data-v-ea2e5087><!--[-->`);
            ssrRenderList(5, (i) => {
              _push(`<svg xmlns="http://www.w3.org/2000/svg"${ssrRenderAttr("fill", i <= review.rating ? "currentColor" : "none")} viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 text-yellow-400" data-v-ea2e5087><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" data-v-ea2e5087></path></svg>`);
            });
            _push(`<!--]--></div></div></div><p class="mt-4 text-gray-800" data-v-ea2e5087>${ssrInterpolate(review.comment)}</p><div class="flex items-center space-x-4 text-gray-500 text-sm mt-2" data-v-ea2e5087><span class="cursor-pointer hover:text-gray-700" data-v-ea2e5087>Reply</span><span data-v-ea2e5087>Likes: ${ssrInterpolate(review.likes)}</span><span data-v-ea2e5087>Replies: ${ssrInterpolate(review.replies)}</span></div></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        if (activeTab.value === "discussion") {
          _push(`<div class="mt-6 space-y-6" data-v-ea2e5087><h2 class="text-2xl font-bold text-gray-800" data-v-ea2e5087>Discussion</h2><div class="flex items-start space-x-4" data-v-ea2e5087><div class="flex-1" data-v-ea2e5087><textarea placeholder="Write your comment..." rows="3" class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" data-v-ea2e5087>${ssrInterpolate(_ctx.newComment)}</textarea><button class="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700" data-v-ea2e5087> Post Comment </button></div></div><!--[-->`);
          ssrRenderList(_ctx.discussionComments, (comment) => {
            _push(`<div class="border-b pb-4" data-v-ea2e5087><div class="flex items-center space-x-4" data-v-ea2e5087><img${ssrRenderAttr("src", comment.avatar)} alt="User Avatar" class="w-10 h-10 rounded-full" data-v-ea2e5087><div data-v-ea2e5087><h4 class="font-bold text-gray-800" data-v-ea2e5087>${ssrInterpolate(comment.name)}</h4><p class="text-sm text-gray-500" data-v-ea2e5087>${ssrInterpolate(comment.date)}</p></div></div><p class="mt-2 text-gray-700" data-v-ea2e5087>${ssrInterpolate(comment.content)}</p><div class="flex items-center space-x-4 text-gray-500 text-sm mt-2" data-v-ea2e5087><span class="cursor-pointer hover:text-gray-700" data-v-ea2e5087>Reply</span><span data-v-ea2e5087>Likes: ${ssrInterpolate(comment.likes)}</span><span data-v-ea2e5087>Replies: ${ssrInterpolate(comment.replies)}</span></div>`);
            if (comment.replies && comment.replies.length) {
              _push(`<div class="mt-4 pl-6 border-l" data-v-ea2e5087><!--[-->`);
              ssrRenderList(comment.replies, (reply) => {
                _push(`<div class="mt-2" data-v-ea2e5087><div class="flex items-center space-x-4" data-v-ea2e5087><img${ssrRenderAttr("src", reply.avatar)} alt="Reply Avatar" class="w-8 h-8 rounded-full" data-v-ea2e5087><div data-v-ea2e5087><h4 class="font-bold text-gray-800" data-v-ea2e5087>${ssrInterpolate(reply.name)}</h4><p class="text-sm text-gray-500" data-v-ea2e5087>${ssrInterpolate(reply.date)}</p></div></div><p class="mt-2 text-gray-700" data-v-ea2e5087>${ssrInterpolate(reply.content)}</p></div>`);
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
        _push(`<div class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50" data-v-ea2e5087><div class="relative flex justify-center items-center" data-v-ea2e5087><div class="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-100" data-v-ea2e5087></div><img src="https://freelancerdxb.s3.eu-central-1.amazonaws.com/documents/image%20%285%29__5d197f13926ac20a20a6f301d00ce69b516f83eb.png" class="rounded-full h-24 w-24" data-v-ea2e5087></div></div>`);
      }
      _push(`<section data-v-ea2e5087><div class="rounded-md pt-10" data-v-ea2e5087><div class="flex justify-between items-center mb-4" data-v-ea2e5087><h2 class="text-xl font-semibold" data-v-ea2e5087>Related Products</h2></div><div class="flex overflow-x-auto gap-4 p-2" data-v-ea2e5087><!--[-->`);
      ssrRenderList(unref(productList), (product2, index) => {
        var _a2;
        _push(`<div class="min-w-[200px] md:min-w-[220px] bg-white rounded-md shadow-md cursor-pointer p-2" data-v-ea2e5087><div class="relative" data-v-ea2e5087><img${ssrRenderAttr("src", (_a2 = product2.images[0]) == null ? void 0 : _a2.uploadUrl)}${ssrRenderAttr("alt", product2.name)} class="w-full h-36 object-cover rounded-md" data-v-ea2e5087></div> ${ssrInterpolate(product2.product.name)} <h3 class="text-sm font-medium mt-2 truncate" data-v-ea2e5087>${ssrInterpolate(product2.name)}</h3><p class="text-lg font-semibold text-gray-900" data-v-ea2e5087></p><p class="text-gray-500 text-xs line-through" data-v-ea2e5087>${ssrInterpolate(product2.oldPrice)}</p></div>`);
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
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ea2e5087"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-CjDGHm4-.mjs.map
