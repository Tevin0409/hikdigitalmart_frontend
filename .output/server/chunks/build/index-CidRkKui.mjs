import { _ as __nuxt_component_0 } from './nuxt-link-DxhiTiNz.mjs';
import script from './index-Hi_QcM6J.mjs';
import { ref, computed, resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, createBlock, openBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain } from 'vue/server-renderer';
import { _ as _imports_0 } from './empty-cart-ya0lrv2O.mjs';
import { useRouter } from 'vue-router';
import { a as useNuxtApp, e as useProductStore } from './server.mjs';
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
import '@primeuix/utils/object';
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
import '@primeuix/styles/button';
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
import '@primeuix/styles/breadcrumb';
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
import '@primeuix/styles/toast';
import '@primeuix/styles/carousel';
import '@primeuix/styles/galleria';
import '@primeuix/styles/image';
import '@primeuix/styles/imagecompare';
import '@primeuix/styles/avatar';
import '@primeuix/styles/badge';
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
import '@primeuix/styles/ripple';
import '@primeuix/styled';
import 'node:url';
import './index--ctLNnjM.mjs';
import './index-BLn-pl6M.mjs';
import './index-f6-L4oOs.mjs';
import '@primeuix/utils/dom';
import 'pinia';
import '@primeuix/utils/eventbus';
import '@primeuix/utils';
import '@primeuix/styles/base';
import 'axios';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { $formatPrice } = useNuxtApp();
    useRouter();
    const productStore = useProductStore();
    const { $axios } = useNuxtApp();
    ref("");
    const cartTotal = computed(() => productStore.cartTotal);
    const cartItems = computed(() => productStore.cartItems);
    const isVat = ref(false);
    const home = ref({
      icon: "pi pi-home",
      route: "/dashboard"
    });
    const items = ref([
      { label: "Cart", route: "/cart" },
      { label: "Checkout", route: "/checkout" }
    ]);
    const formattedPrice = (price) => {
      return $formatPrice(price);
    };
    const getVat = (cartTotal2) => {
      return cartTotal2 * 0.16;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Breadcrumb = script;
      const _component_router_link = resolveComponent("router-link");
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "cart" }, _attrs))}><div class="mx-auto container">`);
      _push(ssrRenderComponent(_component_Breadcrumb, {
        home: home.value,
        model: items.value,
        class: ""
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
      _push(`</div>`);
      if (cartItems.value.length < 1) {
        _push(`<div class="flex flex-col items-center bg-white rounded-lg p-6 mb-6 container mx-auto"><img${ssrRenderAttr("src", _imports_0)} alt="Empty Cart" class="w-20 h-20 mb-4"><h2 class="text-xl font-semibold text-gray-700">Your cart is empty!</h2><p class="text-gray-500 text-sm mb-4"> Browse our categories and discover our best deals! </p>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/dashboard" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<button class="bg-primary hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded"${_scopeId}> Start Shopping </button>`);
            } else {
              return [
                createVNode("button", { class: "bg-primary hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded" }, " Start Shopping ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="mx-auto container"><div class="bg-red-10 rounded-lg p-4"><div class="flex justify-between items-center mb-4"><h3 class="text-lg font-semibold text-gray-700"> Cart (${ssrInterpolate(cartItems.value.length)}) </h3>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/cart" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<a href="#" class="text-primary hover:text-orange-600 text-sm font-semibold flex items-center"${_scopeId}></a>`);
            } else {
              return [
                createVNode("a", {
                  href: "#",
                  class: "text-primary hover:text-orange-600 text-sm font-semibold flex items-center"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="bg-white mx-auto"><div class="bg-white grid grid-cols-12 gap-4"><div class="col-span-12 md:col-span-9"><!--[-->`);
        ssrRenderList(cartItems.value, (item) => {
          var _a2, _b2, _c2;
          var _a, _b, _c, _d, _e, _f, _g, _h;
          _push(`<div class="rounded-lg p-4 gap-3 pb-4 mb-2 border cursor-pointer bg-white shadow-sm"><div class="flex flex-wrap items-start gap-4"><img class="w-16 h-16 sm:w-20 sm:h-20 object-contain"${ssrRenderAttr(
            "src",
            (_a2 = (_c = (_b = (_a = item.productModel) == null ? void 0 : _a.images) == null ? void 0 : _b.find((image) => image.isPrimary)) == null ? void 0 : _c.uploadUrl) != null ? _a2 : (_e = (_d = item.images) == null ? void 0 : _d.find((image) => image.isPrimary)) == null ? void 0 : _e.uploadUrl
          )} alt="Product Image"><div class="flex-grow min-w-0"><h2 class="text-base sm:text-lg font-medium truncate">${ssrInterpolate((_b2 = (_f = item.productModel) == null ? void 0 : _f.name) != null ? _b2 : item.name)}</h2><p class="text-gray-600 text-sm sm:text-base truncate"><!--[-->`);
          ssrRenderList(item.features || ((_g = item.productModel) == null ? void 0 : _g.features), (feature) => {
            _push(`<span class="font-bold">${ssrInterpolate(feature.description)}</span>`);
          });
          _push(`<!--]--></p></div><div class="text-right"><p class="text-lg sm:text-xl font-semibold text-gray-900"> Ksh ${ssrInterpolate(formattedPrice((_c2 = (_h = item.productModel) == null ? void 0 : _h.price) != null ? _c2 : item.price))}</p></div></div><div class="flex flex-wrap items-center justify-between mt-4"><button class="text-red-500 flex items-center text-sm sm:text-base"><span class="mr-2">\u{1F5D1}\uFE0F</span> Remove </button><div class="flex items-center"><button class="bg-gray-300 px-2 sm:px-3 py-1 rounded-lg disabled:opacity-50"${ssrIncludeBooleanAttr(item.quantity <= 1) ? " disabled" : ""}> - </button><span class="px-3 sm:px-4 text-sm sm:text-base">${ssrInterpolate(item.quantity)}</span><button class="bg-primary text-white px-2 sm:px-3 py-1 rounded-lg"> + </button></div></div></div>`);
        });
        _push(`<!--]--></div><div class="col-span-12 md:col-span-3"><div class="cart-total rounded-lg p4 bg-white shadow"><h3 class="text-lg font-semibold mb-2">Cart Total</h3><p class="text-gray-600"> Subtotal: Ksh ${ssrInterpolate(formattedPrice(cartTotal.value))}</p><div class="flex items-center justify-between my-4"><label class="text-gray-600">Apply VAT (16%)</label><label class="relative inline-flex items-center cursor-pointer"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(isVat.value) ? ssrLooseContain(isVat.value, null) : isVat.value) ? " checked" : ""} class="sr-only peer"><div class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-primary transition-colors"></div><div class="absolute left-1 top-1 bg-white border border-gray-300 w-4 h-4 rounded-full transition-transform peer-checked:translate-x-5"></div></label></div>`);
        if (isVat.value) {
          _push(`<hr class="my-2">`);
        } else {
          _push(`<!---->`);
        }
        if (isVat.value) {
          _push(`<div class="flex justify-between text-gray-600"><span>VAT</span><span>Ksh ${ssrInterpolate(formattedPrice(getVat(cartTotal.value)))}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<hr class="my-2"><p class="text-lg font-bold"> Total: Ksh ${ssrInterpolate(formattedPrice(cartTotal.value + (isVat.value ? getVat(cartTotal.value) : 0)))}</p><button class="w-full bg-primary text-white py-2 mt-4 rounded-lg hover:bg-secondary transition"> Checkout (${ssrInterpolate(formattedPrice(cartTotal.value + (isVat.value ? getVat(cartTotal.value) : 0)))}) </button></div></div></div></div></div></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cart/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CidRkKui.mjs.map
