import script$3 from './index-B8fUCuXN.mjs';
import script$2 from './index-CAevIIeY.mjs';
import script$1 from './index-BpOzP0HJ.mjs';
import script from './index-Hi_QcM6J.mjs';
import { ref, computed, resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, createBlock, openBlock, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { a as useNuxtApp, u as useRouter, f as useToast, d as useUserStore, e as useProductStore } from './server.mjs';
import { R as RatingCard } from './index-DOutgZxa.mjs';
import '@primeuix/utils';
import '@primeuix/utils/dom';
import '@primeuix/utils/object';
import '@primeuix/utils/zindex';
import './index-D21vFaAL.mjs';
import './index-f6-L4oOs.mjs';
import '@primeuix/styled';
import '@primeuix/styles/toast';
import './index-CgJu4NhB.mjs';
import './index-BLn-pl6M.mjs';
import './index-B0P5HmBk.mjs';
import './index-C319vlSQ.mjs';
import './index-B5Uz4ly5.mjs';
import './index-2dA4pXcI.mjs';
import './index-DpRrGZTR.mjs';
import '@primeuix/utils/uuid';
import '@primeuix/styles/ripple';
import '@primeuix/styles/avatar';
import './index-C1vnj6fg.mjs';
import './index-CJPkJwKH.mjs';
import '@primeuix/styles/badge';
import '@primeuix/styles/button';
import './index--ctLNnjM.mjs';
import '@primeuix/styles/breadcrumb';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '@primevue/core/base/style';
import '@primevue/core/basecomponent/style';
import '@primeuix/styles/autocomplete';
import '@primeuix/styles/cascadeselect';
import '@primeuix/styles/checkbox';
import '@primeuix/styles/checkboxgroup';
import '@primeuix/styles/colorpicker';
import '@primeuix/styles/datepicker';
import '@primeuix/styles/floatlabel';
import '@primeuix/styles/iconfield';
import '@primeuix/styles/iftalabel';
import '@primeuix/styles/inputchips';
import '@primeuix/styles/inputgroup';
import '@primeuix/styles/inputnumber';
import '@primeuix/styles/inputotp';
import '@primeuix/styles/inputtext';
import '@primeuix/styles/knob';
import '@primeuix/styles/listbox';
import '@primeuix/styles/multiselect';
import '@primeuix/styles/password';
import '@primeuix/styles/radiobutton';
import '@primeuix/styles/radiobuttongroup';
import '@primeuix/styles/rating';
import '@primeuix/styles/select';
import '@primeuix/styles/selectbutton';
import '@primeuix/styles/slider';
import '@primeuix/styles/textarea';
import '@primeuix/styles/togglebutton';
import '@primeuix/styles/toggleswitch';
import '@primeuix/styles/treeselect';
import '@primeuix/styles/buttongroup';
import '@primeuix/styles/speeddial';
import '@primeuix/styles/splitbutton';
import '@primeuix/styles/datatable';
import '@primeuix/styles/dataview';
import '@primeuix/styles/orderlist';
import '@primeuix/styles/organizationchart';
import '@primeuix/styles/paginator';
import '@primeuix/styles/picklist';
import '@primeuix/styles/tree';
import '@primeuix/styles/treetable';
import '@primeuix/styles/timeline';
import '@primeuix/styles/virtualscroller';
import '@primeuix/styles/accordion';
import '@primeuix/styles/card';
import '@primeuix/styles/divider';
import '@primeuix/styles/fieldset';
import '@primeuix/styles/panel';
import '@primeuix/styles/scrollpanel';
import '@primeuix/styles/splitter';
import '@primeuix/styles/stepper';
import '@primeuix/styles/tabview';
import '@primeuix/styles/tabs';
import '@primeuix/styles/toolbar';
import '@primeuix/styles/confirmdialog';
import '@primeuix/styles/confirmpopup';
import '@primeuix/styles/dialog';
import '@primeuix/styles/drawer';
import '@primeuix/styles/popover';
import '@primeuix/styles/fileupload';
import '@primeuix/styles/contextmenu';
import '@primeuix/styles/dock';
import '@primeuix/styles/menu';
import '@primeuix/styles/menubar';
import '@primeuix/styles/megamenu';
import '@primeuix/styles/panelmenu';
import '@primeuix/styles/steps';
import '@primeuix/styles/tabmenu';
import '@primeuix/styles/tieredmenu';
import '@primeuix/styles/message';
import '@primeuix/styles/inlinemessage';
import '@primeuix/styles/carousel';
import '@primeuix/styles/galleria';
import '@primeuix/styles/image';
import '@primeuix/styles/imagecompare';
import '@primeuix/styles/blockui';
import '@primeuix/styles/chip';
import '@primeuix/styles/inplace';
import '@primeuix/styles/metergroup';
import '@primeuix/styles/overlaybadge';
import '@primeuix/styles/scrolltop';
import '@primeuix/styles/skeleton';
import '@primeuix/styles/progressbar';
import '@primeuix/styles/progressspinner';
import '@primeuix/styles/tag';
import '@primeuix/styles/terminal';
import '@primevue/forms/form/style';
import '@primevue/forms/formfield/style';
import '@primeuix/styles/tooltip';
import 'node:url';
import 'pinia';
import '@primeuix/utils/eventbus';
import '@primeuix/styles/base';
import 'axios';
import './index-Bj63-OuG.mjs';
import './index-_YLQpnfS.mjs';

const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const { $formatPrice } = useNuxtApp();
    useRouter();
    const formattedPrice = (price) => {
      return $formatPrice(price);
    };
    const { $formatDate } = useNuxtApp();
    const formattedDate = (date) => {
      return $formatDate(date);
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
    const initials = (user) => {
      const { firstName, lastName } = user;
      return `${(firstName == null ? void 0 : firstName.charAt(0)) || ""}${(lastName == null ? void 0 : lastName.charAt(0)) || ""}`.toUpperCase();
    };
    const product = ref(null);
    ref(false);
    const loadingAdd = ref(false);
    const { $axios } = useNuxtApp();
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
      var _a2, _b;
      var _a;
      const _component_Breadcrumb = script;
      const _component_router_link = resolveComponent("router-link");
      const _component_Button = script$1;
      const _component_Avatar = script$2;
      const _component_Toast = script$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto p-6" }, _attrs))}>`);
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
                    _push3(`<a${ssrRenderAttrs(mergeProps({ href }, props.action))}${_scopeId2}><span class="${ssrRenderClass([item.icon, "text-color"])}"${_scopeId2}></span><span class="text-primary font-semibold"${_scopeId2}>${ssrInterpolate(item.label)}</span></a>`);
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
              }, props.action))}${_scopeId}><span class="text-surface-700 dark:text-surface-0"${_scopeId}>${ssrInterpolate(item.label)}</span></a>`);
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
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 gap-8"><div class="flex flex-col space-y-4"><h2 class="text-xl font-bold">${ssrInterpolate(product.value.name)}</h2><p class="text-lg text-gray-700 font-medium"> Ksh ${ssrInterpolate(formattedPrice(product.value.price))}</p><p class="text-gray-600 leading-relaxed"></p><div class="flex items-center space-x-4"><!--[-->`);
        ssrRenderList(product.value.features, (feature) => {
          _push(`<p>${ssrInterpolate(feature.description)}</p>`);
        });
        _push(`<!--]--></div><div class="flex items-center space-x-4"><input type="number" min="1"${ssrRenderAttr("value", quantity.value)} class="w-16 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-500"><p class="text-gray-600"><i class="pi pi-wallet mr-4"></i> Ksh ${ssrInterpolate(formattedPrice(product.value.price * quantity.value))}</p><p><button${ssrRenderAttr("loading", _ctx.loadingWish)}>`);
        if (!isInWishList(product.value)) {
          _push(`<i class="pi pi-heart cursor-pointer mr-2" style="${ssrRenderStyle({ "font-size": "1.8rem" })}"></i>`);
        } else {
          _push(`<i class="pi pi-heart-fill cursor-pointer mr-2" style="${ssrRenderStyle({ "font-size": "1.8rem", "color": "red" })}"></i>`);
        }
        _push(`</button></p>`);
        _push(ssrRenderComponent(_component_Button, {
          onClick: ($event) => addToCart(product.value),
          loading: loadingAdd.value,
          label: "Add to Cart"
        }, null, _parent));
        _push(`</div><div class="mt-4 space-y-2"><div class="flex space-x-1 align-center">`);
        _push(ssrRenderComponent(RatingCard, {
          reviews: product.value.Review
        }, null, _parent));
        _push(`</div><p class="text-bl font-bold"><i class="fas fa-truck"></i> Description </p><p class="text-gray-600">${(_a2 = formatDescription(product.value.description)) != null ? _a2 : ""}</p><p class="text-gray-600"><i class="fas fa-undo"></i></p></div></div><div class="flexflex-col md:flex-row items-center"><div class="w-full h-96 mb-4 md:mb-0 md:mr-4 border rounded-lg overflow-hidden"><img${ssrRenderAttr("src", product.value.image)} alt="Product Image" class="w-full h-full object-contain"></div><div class="flex mt-8 md:flex-row gap-2 justify-center md:overflow-visible"><!--[-->`);
        ssrRenderList(product.value.images.slice(-4), (img, index) => {
          _push(`<img${ssrRenderAttr("src", img)} alt="Thumbnail" class="w-20 h-20 md:w-32 md:h-32 object-cover border rounded-lg cursor-pointer hover:border-gray-500">`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (product.value) {
        _push(`<div class="mt-8"><div class="flex space-x-8 border-b pb-2"><h3 class="${ssrRenderClass([tabClass("details"), "cursor-pointer text-lg font-semibold"])}"> Details </h3><h3 class="${ssrRenderClass([tabClass("reviews"), "cursor-pointer text-lg font-semibold"])}"> Reviews </h3></div>`);
        if (activeTab.value === "details") {
          _push(`<div class="mt-6 space-y-6"><p>${(_b = formatDescription(product.value.description)) != null ? _b : ""}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        if (activeTab.value === "reviews") {
          _push(`<div class="mt-6 space-y-8">`);
          if ((_a = product.value.Review) == null ? void 0 : _a.length) {
            _push(`<div><!--[-->`);
            ssrRenderList(product.value.Review, (review) => {
              _push(`<div class="border-b pb-4"><div class="flex items-center space-x-4">`);
              _push(ssrRenderComponent(_component_Avatar, {
                label: initials(review.user),
                class: "bg-blue-100 text-blue-700 font-bold",
                shape: "circle",
                size: "xlarge"
              }, null, _parent));
              _push(`<div><div class="flex justify-between items-center mt-1"><div class="flex space-x-1"><!--[-->`);
              ssrRenderList(5, (i) => {
                _push(`<svg xmlns="http://www.w3.org/2000/svg"${ssrRenderAttr("fill", i <= review.rating ? "currentColor" : "none")} viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 text-yellow-400"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>`);
              });
              _push(`<!--]--></div><p class="text-sm text-gray-500 ml-4">${ssrInterpolate(formattedDate(review.createdAt))}</p></div><p class="mt-4 text-gray-800">${ssrInterpolate(review.comment)}</p><h4 class="font-bold text-gray-800"> by ${ssrInterpolate(review.user.firstName + " " + review.user.lastName)}</h4></div></div></div>`);
            });
            _push(`<!--]--></div>`);
          } else {
            _push(`<div class="text-center text-gray-500 py-6"> No reviews yet. Be the first to review this product! </div>`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (activeTab.value === "discussion") {
          _push(`<div class="mt-6 space-y-6"><h2 class="text-2xl font-bold text-gray-800">Discussion</h2><div class="flex items-start space-x-4"><div class="flex-1"><textarea placeholder="Write your comment..." rows="3" class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">${ssrInterpolate(_ctx.newComment)}</textarea><button class="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"> Post Review </button></div></div><!--[-->`);
          ssrRenderList(_ctx.discussionComments, (comment) => {
            _push(`<div class="border-b pb-4"><div class="flex items-center space-x-4"><img${ssrRenderAttr("src", comment.avatar)} alt="User Avatar" class="w-10 h-10 rounded-full"><div><h4 class="font-bold text-gray-800">${ssrInterpolate(comment.name)}</h4><p class="text-sm text-gray-500">${ssrInterpolate(comment.date)}</p></div></div><p class="mt-2 text-gray-700">${ssrInterpolate(comment.content)}</p><div class="flex items-center space-x-4 text-gray-500 text-sm mt-2"><span class="cursor-pointer hover:text-gray-700">Reply</span><span>Likes: ${ssrInterpolate(comment.likes)}</span><span>Replies: ${ssrInterpolate(comment.replies)}</span></div>`);
            if (comment.replies && comment.replies.length) {
              _push(`<div class="mt-4 pl-6 border-l"><!--[-->`);
              ssrRenderList(comment.replies, (reply) => {
                _push(`<div class="mt-2"><div class="flex items-center space-x-4"><img${ssrRenderAttr("src", reply.avatar)} alt="Reply Avatar" class="w-8 h-8 rounded-full"><div><h4 class="font-bold text-gray-800">${ssrInterpolate(reply.name)}</h4><p class="text-sm text-gray-500">${ssrInterpolate(reply.date)}</p></div></div><p class="mt-2 text-gray-700">${ssrInterpolate(reply.content)}</p></div>`);
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
        _push(`<div class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50"><div class="relative flex justify-center items-center"><div class="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-100"></div><img src="https://freelancerdxb.s3.eu-central-1.amazonaws.com/documents/image%20%285%29__5d197f13926ac20a20a6f301d00ce69b516f83eb.png" class="rounded-full h-24 w-24"></div></div>`);
      }
      _push(`<section><div class="rounded-md pt-10"><div class="flex justify-between items-center mb-4"><h2 class="text-xl font-semibold">Related Products</h2></div><div class="flex overflow-x-auto gap-4 p-2"><!--[-->`);
      ssrRenderList(unref(productList), (product2, index) => {
        var _a22;
        _push(`<div class="min-w-[200px] md:min-w-[220px] bg-white rounded-md shadow-md cursor-pointer p-2"><div class="relative"><img${ssrRenderAttr("src", (_a22 = product2.images[0]) == null ? void 0 : _a22.uploadUrl)}${ssrRenderAttr("alt", product2.name)} class="w-full h-36 object-cover rounded-md"></div> ${ssrInterpolate(product2.product.name)} <h3 class="text-sm font-medium mt-2 truncate">${ssrInterpolate(product2.name)}</h3><p class="text-lg font-semibold text-gray-900"></p><p class="text-gray-500 text-xs line-through">${ssrInterpolate(product2.oldPrice)}</p></div>`);
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

export { _sfc_main as default };
//# sourceMappingURL=_id_-DonqbACa.mjs.map
