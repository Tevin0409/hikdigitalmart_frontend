import { b as buildAssetsURL } from '../nitro/nitro.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-DxhiTiNz.mjs';
import { R as Ripple } from './index-2dA4pXcI.mjs';
import script$5 from './index-Ck5Pjavq.mjs';
import script$4 from './index-DXUiORVY.mjs';
import script$3 from './index-CJPkJwKH.mjs';
import script$2 from './index-DIgsxSZg.mjs';
import script$1 from './index-BpOzP0HJ.mjs';
import script from './index-BAlWC-sG.mjs';
import { ref, computed, mergeProps, withCtx, createVNode, toDisplayString, withDirectives, createBlock, openBlock, createCommentVNode, Fragment, renderList, unref, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderClass, ssrGetDirectiveProps, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_0$1 } from './logoo-Bk06oiQl.mjs';
import { useRouter } from 'vue-router';
import { e as useProductStore, d as useUserStore, a as useNuxtApp } from './server.mjs';
import script$8 from './index-DAb5Gtdu.mjs';
import script$7 from './index-B9TrIdXC.mjs';
import script$9 from './index-CAevIIeY.mjs';
import script$6 from './index-DwBCCSyQ.mjs';

const _imports_0 = "" + buildAssetsURL("no-item.C-q5xNqU.jpg");
const _sfc_main$1 = {
  __name: "QuotationDialog",
  __ssrInlineRender: true,
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const isQuotationVisible = ref(true);
    const quotationStarted = ref(false);
    const search = ref("");
    const productStore = useProductStore();
    const categories = ref([]);
    const message = ref("");
    const emit = __emit;
    const quotationList = ref([]);
    const error = ref(null);
    const addProductToQuote = (event) => {
      const newProduct = event.value;
      const exists = quotationList.value.some((item) => item.id === newProduct.id);
      if (!exists) {
        quotationList.value.push({
          ...newProduct,
          quantity: 1
        });
        searchTerm.value = "";
      }
    };
    const toggleQuotation = () => {
      isQuotationVisible.value = false;
    };
    const startQuotation = () => {
      quotationStarted.value = true;
    };
    const increaseQty = (index) => {
      quotationList.value[index].quantity++;
    };
    const decreaseQty = (index) => {
      if (quotationList.value[index].quantity > 1) {
        quotationList.value[index].quantity--;
      }
    };
    const removeItem = (index) => {
      quotationList.value.splice(index, 1);
    };
    const submitQuotation = async () => {
      if (!message.value.trim()) {
        error.value = "Message cannot be empty!";
      }
      const makeQuotation = await productStore.makeQuotation(
        message.value,
        quotationList.value
      );
      if (makeQuotation.status == 201) {
        isQuotationVisible.value = false;
        message.value = "";
        quotationList.value = [];
        emit("close", false);
      } else {
        error.value = "Failed to submit quotation. Please try again.";
      }
    };
    const filteredQuotationList = computed(
      () => quotationList.value.filter(
        (item) => item.name.toLowerCase().includes(search.value.toLowerCase())
      )
    );
    const userStore = useUserStore();
    const initials = computed(() => {
      const { firstName, lastName } = userStore.user;
      return `${(firstName == null ? void 0 : firstName.charAt(0)) || ""}${(lastName == null ? void 0 : lastName.charAt(0)) || ""}`.toUpperCase();
    });
    const searchTerm = ref("");
    const selectedCategory = ref([]);
    const filteredItems = ref([]);
    const searchItems = async (event) => {
      var _a2;
      var _a, _b;
      let query = event.query;
      filteredItems.value = [];
      const { $axios } = useNuxtApp();
      if (!query) return;
      try {
        let response;
        const categoryIds = Array.isArray(selectedCategory == null ? void 0 : selectedCategory.value) ? selectedCategory.value.filter((cat) => cat.id !== null).map((cat) => cat.id) : ((_a = selectedCategory == null ? void 0 : selectedCategory.value) == null ? void 0 : _a.id) && selectedCategory.value.id !== null ? [selectedCategory.value.id] : [];
        const defaultImage = "https://www.shutterstock.com/shutterstock/photos/2059817444/display_1500/stock-vector-no-image-available-photo-coming-soon-illustration-vector-2059817444.jpg";
        if (categoryIds.length > 0) {
          response = await $axios.get("/product", {
            params: { searchTerm: query, categoryId: categoryIds }
          });
          filteredItems.value = response.data.results.flatMap(
            (product) => product.models.map((model) => ({
              id: model.id,
              name: `${product.name} - (${model.name})`,
              images: model.images.length > 0 ? model.images.map((img) => img.uploadUrl) : [defaultImage]
            }))
          );
        } else {
          response = await $axios.get("/product/product-models", {
            params: { searchTerm: query }
          });
          const products = (_a2 = (_b = response.data) == null ? void 0 : _b.results) != null ? _a2 : [];
          filteredItems.value = products.map((product) => {
            var _a3;
            var _a22, _b2, _c, _d;
            return {
              id: product.id,
              name: product.product.name,
              price: product.price,
              category: (_a3 = (_c = (_b2 = (_a22 = product.product) == null ? void 0 : _a22.subCategory) == null ? void 0 : _b2.category) == null ? void 0 : _c.name) != null ? _a3 : "Unknown",
              images: product.images.length > 0 ? ((_d = product.images.find((image) => image.isPrimary)) == null ? void 0 : _d.uploadUrl) || defaultImage : [defaultImage]
            };
          });
        }
      } catch (error2) {
        console.error("Error fetching products:", error2);
      }
    };
    const fetchProducts = async () => {
      try {
        const { $axios } = useNuxtApp();
        const response = await $axios.get("/product", {
          params: {
            searchTerm: searchTerm.value
            // categoryId: selectedCategory.value,
          }
        });
      } catch (error2) {
        console.error("Error fetching products:", error2);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Dialog = script$6;
      const _component_Avatar = script$9;
      const _component_Button = script$1;
      const _component_Select = script$4;
      const _component_AutoComplete = script;
      const _component_Divider = script$7;
      const _component_InputText = script$8;
      _push(ssrRenderComponent(_component_Dialog, mergeProps({
        visible: isQuotationVisible.value,
        "onUpdate:visible": ($event) => isQuotationVisible.value = $event,
        modal: "",
        class: "w-full md:w-[60vw] lg:w-[50vw]",
        style: { width: "50rem" },
        breakpoints: { "1199px": "75vw", "575px": "90vw" }
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Avatar, {
              label: initials.value,
              class: "bg-blue-100 text-blue-700 font-bold",
              shape: "circle",
              size: "xlarge"
            }, null, _parent2, _scopeId));
            _push2(`<h3 class="text-xl font-semibold"${_scopeId}> Welcome Back <span class="text-blue-500"${_scopeId}>${ssrInterpolate(unref(userStore).user.firstName)}</span></h3></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-4" }, [
                createVNode(_component_Avatar, {
                  label: initials.value,
                  class: "bg-blue-100 text-blue-700 font-bold",
                  shape: "circle",
                  size: "xlarge"
                }, null, 8, ["label"]),
                createVNode("h3", { class: "text-xl font-semibold" }, [
                  createTextVNode(" Welcome Back "),
                  createVNode("span", { class: "text-blue-500" }, toDisplayString(unref(userStore).user.firstName), 1)
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!quotationStarted.value) {
              _push2(`<div class="flex flex-col items-center justify-center text-center space-y-6 p-6"${_scopeId}><img src="https://cdn-icons-png.flaticon.com/512/942/942748.png" alt="Quotation Illustration" class="w-40 h-40 mx-auto"${_scopeId}><p class="text-lg"${_scopeId}>Do you wish to make a quotation?</p><div class="flex gap-4 justify-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Button, {
                label: "Yes",
                class: "p-button-success",
                onClick: startQuotation
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_Button, {
                label: "No",
                class: "p-button-secondary",
                onClick: toggleQuotation
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<div class="space-y-4"${_scopeId}><div class="flex items-center w-full justify-between"${_scopeId}><h3 class="text-xl font-semibold mr-4"${_scopeId}>Search items</h3><div class="flex justify-end"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Select, {
                modelValue: selectedCategory.value,
                "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                options: categories.value,
                optionLabel: "name",
                placeholder: "Choose Category",
                class: "min-w-[150px] z-10 rounded-l-md mr-3 border-l"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_AutoComplete, {
                modelValue: searchTerm.value,
                "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                onInput: fetchProducts,
                suggestions: filteredItems.value,
                onComplete: searchItems,
                optionLabel: "name",
                placeholder: "I'm Searching for ...",
                class: "flex-grow mx-2 p-input-icon-left",
                onItemSelect: addProductToQuote
              }, {
                option: withCtx((slotProps, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex items-center w-full"${_scopeId2}><img${ssrRenderAttr("alt", slotProps.option.name)}${ssrRenderAttr("src", slotProps.option.images)} class="mr-2 rounded-md" style="${ssrRenderStyle({ "width": "40px", "height": "40px", "object-fit": "cover" })}"${_scopeId2}><div class="w-full"${_scopeId2}>${ssrInterpolate(slotProps.option.name)}</div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex items-center w-full" }, [
                        createVNode("img", {
                          alt: slotProps.option.name,
                          src: slotProps.option.images,
                          class: "mr-2 rounded-md",
                          style: { "width": "40px", "height": "40px", "object-fit": "cover" }
                        }, null, 8, ["alt", "src"]),
                        createVNode("div", { class: "w-full" }, toDisplayString(slotProps.option.name), 1)
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div>`);
              _push2(ssrRenderComponent(_component_Divider, null, null, _parent2, _scopeId));
              _push2(`<div class="scroll-area max-h-[60vh] overflow-y-auto pr-2"${_scopeId}>`);
              if (filteredQuotationList.value.length > 0) {
                _push2(`<!--[-->`);
                ssrRenderList(filteredQuotationList.value, (item, index) => {
                  _push2(`<div class="flex justify-between items-center border-b pb-2 mb-2"${_scopeId}><div class="flex"${_scopeId}><h4 class="font-semibold text-sm pr-2"${_scopeId}>${ssrInterpolate(index + 1)}</h4><img${ssrRenderAttr("src", item.images[0])} class="mr-2" height="25px" width="25px"${_scopeId}><div${_scopeId}><h4 class="font-semibold text-sm"${_scopeId}>${ssrInterpolate(item.name)}</h4><p class="text-sm text-gray-500"${_scopeId}>${ssrInterpolate(item.description)}</p></div></div><div class="flex items-center gap-2 sm:flex-row flex-col-reverse"${_scopeId}><div class="flex sm:flex-row flex-col items-center gap-1"${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_Button, {
                    icon: "pi pi-plus",
                    class: "p-button-rounded p-button-sm !p-0.5 !h-6 !w-6 !text-xs",
                    onClick: ($event) => increaseQty(index),
                    variant: "outlined"
                  }, null, _parent2, _scopeId));
                  _push2(ssrRenderComponent(_component_InputText, {
                    modelValue: item.quantity,
                    "onUpdate:modelValue": ($event) => item.quantity = $event,
                    modelModifiers: { number: true },
                    class: "w-12 h-6 text-center text-xs"
                  }, null, _parent2, _scopeId));
                  _push2(ssrRenderComponent(_component_Button, {
                    icon: "pi pi-minus",
                    class: "p-button-rounded p-button-sm !p-0.5 !h-6 !w-6 !text-xs",
                    onClick: ($event) => decreaseQty(index)
                  }, null, _parent2, _scopeId));
                  _push2(`</div>`);
                  _push2(ssrRenderComponent(_component_Button, {
                    icon: "pi pi-trash",
                    class: "p-button-danger p-button-rounded p-button-sm !p-0.5 !h-6 !w-6 !text-xs",
                    onClick: ($event) => removeItem(index)
                  }, null, _parent2, _scopeId));
                  _push2(`</div></div>`);
                });
                _push2(`<!--]-->`);
              } else {
                _push2(`<div class="flex justify-center"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="Empty Cart" class="max-w-full h-auto w-24 sm:w-32 md:w-48 lg:w-64 mb-4"${_scopeId}></div>`);
              }
              _push2(`</div><div class="flex justify-end space-x-2 pt-4 border-t mt-4"${_scopeId}><div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_InputText, {
                type: "text",
                modelValue: message.value,
                "onUpdate:modelValue": ($event) => message.value = $event,
                placeholder: "Attach Message"
              }, null, _parent2, _scopeId));
              if (error.value) {
                _push2(`<div class="text-red-600 text-sm ml-2"${_scopeId}>${ssrInterpolate(error.value)}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_Button, {
                label: "Place Quotation",
                class: "p-button-success",
                onClick: submitQuotation,
                disabled: quotationList.value.length === 0
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            }
          } else {
            return [
              !quotationStarted.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "flex flex-col items-center justify-center text-center space-y-6 p-6"
              }, [
                createVNode("img", {
                  src: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
                  alt: "Quotation Illustration",
                  class: "w-40 h-40 mx-auto"
                }),
                createVNode("p", { class: "text-lg" }, "Do you wish to make a quotation?"),
                createVNode("div", { class: "flex gap-4 justify-center" }, [
                  createVNode(_component_Button, {
                    label: "Yes",
                    class: "p-button-success",
                    onClick: startQuotation
                  }),
                  createVNode(_component_Button, {
                    label: "No",
                    class: "p-button-secondary",
                    onClick: toggleQuotation
                  })
                ])
              ])) : (openBlock(), createBlock("div", {
                key: 1,
                class: "space-y-4"
              }, [
                createVNode("div", { class: "flex items-center w-full justify-between" }, [
                  createVNode("h3", { class: "text-xl font-semibold mr-4" }, "Search items"),
                  createVNode("div", { class: "flex justify-end" }, [
                    createVNode(_component_Select, {
                      modelValue: selectedCategory.value,
                      "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                      options: categories.value,
                      optionLabel: "name",
                      placeholder: "Choose Category",
                      class: "min-w-[150px] z-10 rounded-l-md mr-3 border-l"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                    createVNode(_component_AutoComplete, {
                      modelValue: searchTerm.value,
                      "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                      onInput: fetchProducts,
                      suggestions: filteredItems.value,
                      onComplete: searchItems,
                      optionLabel: "name",
                      placeholder: "I'm Searching for ...",
                      class: "flex-grow mx-2 p-input-icon-left",
                      onItemSelect: addProductToQuote
                    }, {
                      option: withCtx((slotProps) => [
                        createVNode("div", { class: "flex items-center w-full" }, [
                          createVNode("img", {
                            alt: slotProps.option.name,
                            src: slotProps.option.images,
                            class: "mr-2 rounded-md",
                            style: { "width": "40px", "height": "40px", "object-fit": "cover" }
                          }, null, 8, ["alt", "src"]),
                          createVNode("div", { class: "w-full" }, toDisplayString(slotProps.option.name), 1)
                        ])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue", "suggestions"])
                  ])
                ]),
                createVNode(_component_Divider),
                createVNode("div", { class: "scroll-area max-h-[60vh] overflow-y-auto pr-2" }, [
                  filteredQuotationList.value.length > 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(filteredQuotationList.value, (item, index) => {
                    return openBlock(), createBlock("div", {
                      key: item.id,
                      class: "flex justify-between items-center border-b pb-2 mb-2"
                    }, [
                      createVNode("div", { class: "flex" }, [
                        createVNode("h4", { class: "font-semibold text-sm pr-2" }, toDisplayString(index + 1), 1),
                        createVNode("img", {
                          src: item.images[0],
                          class: "mr-2",
                          height: "25px",
                          width: "25px"
                        }, null, 8, ["src"]),
                        createVNode("div", null, [
                          createVNode("h4", { class: "font-semibold text-sm" }, toDisplayString(item.name), 1),
                          createVNode("p", { class: "text-sm text-gray-500" }, toDisplayString(item.description), 1)
                        ])
                      ]),
                      createVNode("div", { class: "flex items-center gap-2 sm:flex-row flex-col-reverse" }, [
                        createVNode("div", { class: "flex sm:flex-row flex-col items-center gap-1" }, [
                          createVNode(_component_Button, {
                            icon: "pi pi-plus",
                            class: "p-button-rounded p-button-sm !p-0.5 !h-6 !w-6 !text-xs",
                            onClick: ($event) => increaseQty(index),
                            variant: "outlined"
                          }, null, 8, ["onClick"]),
                          createVNode(_component_InputText, {
                            modelValue: item.quantity,
                            "onUpdate:modelValue": ($event) => item.quantity = $event,
                            modelModifiers: { number: true },
                            class: "w-12 h-6 text-center text-xs"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_Button, {
                            icon: "pi pi-minus",
                            class: "p-button-rounded p-button-sm !p-0.5 !h-6 !w-6 !text-xs",
                            onClick: ($event) => decreaseQty(index)
                          }, null, 8, ["onClick"])
                        ]),
                        createVNode(_component_Button, {
                          icon: "pi pi-trash",
                          class: "p-button-danger p-button-rounded p-button-sm !p-0.5 !h-6 !w-6 !text-xs",
                          onClick: ($event) => removeItem(index)
                        }, null, 8, ["onClick"])
                      ])
                    ]);
                  }), 128)) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "flex justify-center"
                  }, [
                    createVNode("img", {
                      src: _imports_0,
                      alt: "Empty Cart",
                      class: "max-w-full h-auto w-24 sm:w-32 md:w-48 lg:w-64 mb-4"
                    })
                  ]))
                ]),
                createVNode("div", { class: "flex justify-end space-x-2 pt-4 border-t mt-4" }, [
                  createVNode("div", null, [
                    createVNode(_component_InputText, {
                      type: "text",
                      modelValue: message.value,
                      "onUpdate:modelValue": ($event) => message.value = $event,
                      placeholder: "Attach Message"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    error.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "text-red-600 text-sm ml-2"
                    }, toDisplayString(error.value), 1)) : createCommentVNode("", true)
                  ]),
                  createVNode(_component_Button, {
                    label: "Place Quotation",
                    class: "p-button-success",
                    onClick: submitQuotation,
                    disabled: quotationList.value.length === 0
                  }, null, 8, ["disabled"])
                ])
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/QuotationDialog.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Navbar",
  __ssrInlineRender: true,
  props: {
    // refresh: {
    //   type: Boolean,
    //   default: false,
    // },
  },
  emits: ["update:searchTerm"],
  setup(__props, { emit: __emit }) {
    const showQuoatation = ref(false);
    const productStore = useProductStore();
    const quotationList = ref([]);
    const userStore = useUserStore();
    const searchTerm = ref("");
    const selectedCategory = ref([]);
    ref(false);
    const categories = ref([]);
    const cartCount = computed(() => productStore.cartCount);
    const cartTotal = computed(() => productStore.cartTotal);
    const shopOwnerVerified = computed(() => {
      var _a2;
      var _a;
      return (_a2 = (_a = userStore.user) == null ? void 0 : _a.shopOwnerVerified) != null ? _a2 : false;
    });
    const filteredItems = ref([]);
    const wishListCount = computed(() => productStore.wishListCount);
    const router = useRouter();
    const { $formatPrice } = useNuxtApp();
    const menu = ref();
    const toggle = (event) => {
      menu.value.toggle(event);
    };
    const formattedPrice = (price) => {
      return $formatPrice(price);
    };
    ref(0);
    const navigateToProduct = (event) => {
      if (!selectedCategory.value || !selectedCategory.value.id) {
        router.push({
          path: `/products/${event.value.id}`
        });
      } else {
        router.push({
          path: `/results/${selectedCategory.value.id}`,
          query: {
            // category: selectedCategory.value.id, // Pass only the category ID
            searchTerm: searchTerm.value.name,
            productId: event.value.id
          }
        });
      }
    };
    ref(false);
    const fetchProducts = async () => {
      try {
        const { $axios } = useNuxtApp();
        const response = await $axios.get("/product", {
          params: {
            searchTerm: searchTerm.value
            // categoryId: selectedCategory.value,
          }
        });
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    const searchItems = async (event) => {
      var _a2;
      var _a, _b;
      let query = event.query;
      filteredItems.value = [];
      const { $axios } = useNuxtApp();
      if (!query) return;
      try {
        let response;
        const categoryIds = Array.isArray(selectedCategory == null ? void 0 : selectedCategory.value) ? selectedCategory.value.filter((cat) => cat.id !== null).map((cat) => cat.id) : ((_a = selectedCategory == null ? void 0 : selectedCategory.value) == null ? void 0 : _a.id) && selectedCategory.value.id !== null ? [selectedCategory.value.id] : [];
        const defaultImage = "https://www.shutterstock.com/shutterstock/photos/2059817444/display_1500/stock-vector-no-image-available-photo-coming-soon-illustration-vector-2059817444.jpg";
        if (categoryIds.length > 0) {
          response = await $axios.get("/product", {
            params: { searchTerm: query, categoryId: categoryIds }
          });
          filteredItems.value = response.data.results.flatMap(
            (product) => product.models.map((model) => ({
              id: model.id,
              name: `${product.name} - (${model.name})`,
              images: model.images.length > 0 ? model.images.map((img) => img.uploadUrl) : [defaultImage]
            }))
          );
        } else {
          response = await $axios.get("/product/product-models", {
            params: { searchTerm: query }
          });
          const products = (_a2 = (_b = response.data) == null ? void 0 : _b.results) != null ? _a2 : [];
          filteredItems.value = products.map((product) => {
            var _a3;
            var _a22, _b2, _c, _d;
            return {
              id: product.id,
              name: product.product.name,
              price: product.price,
              category: (_a3 = (_c = (_b2 = (_a22 = product.product) == null ? void 0 : _a22.subCategory) == null ? void 0 : _b2.category) == null ? void 0 : _c.name) != null ? _a3 : "Unknown",
              images: product.images.length > 0 ? ((_d = product.images.find((image) => image.isPrimary)) == null ? void 0 : _d.uploadUrl) || defaultImage : [defaultImage]
            };
          });
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    const logout = () => userStore.logout();
    const goToWishList = () => {
      router.push({
        path: `/wishlist`
      });
    };
    const goToCart = () => {
      if (userStore.user.shopOwnerVerified) {
        router.push({
          path: `/quotation`
        });
      } else {
        router.push({
          path: `/cart`
        });
      }
    };
    const goToProfile = () => {
      router.push({
        path: `/my-account`
      });
    };
    const welcomeLabel = computed(() => {
      return `Welcome ${userStore.isLoggedIn ? userStore.user.firstName : "User"}`;
    });
    const items = ref([
      {
        label: welcomeLabel,
        items: [
          {
            label: "My Account",
            icon: "pi pi-user",
            command: goToProfile
          },
          {
            label: "Wishlist",
            icon: "pi pi-heart",
            command: goToWishList,
            badge: computed(
              () => wishListCount.value > 0 ? wishListCount.value : null
            )
          },
          {
            label: "Cart",
            icon: "pi pi-shopping-cart",
            command: goToCart,
            // count: cartCount,
            badge: computed(() => cartTotal.value > 0 ? cartTotal.value : null)
          },
          {
            label: "Log out",
            icon: "pi pi-sign-out",
            command: logout
          }
        ]
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_AutoComplete = script;
      const _component_Button = script$1;
      const _component_Menu = script$2;
      const _component_Badge = script$3;
      const _component_Select = script$4;
      const _component_OverlayBadge = script$5;
      const _directive_ripple = Ripple;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "bg-white" }, _attrs))}><div class="container mx-auto px-2 py-4"><div class="md:hidden flex items-center justify-between w-full">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/dashboard" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0$1)} alt="Hikvision Logo" class="h-16 object-contain"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0$1,
                alt: "Hikvision Logo",
                class: "h-16 object-contain"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex-row justify-center">`);
      _push(ssrRenderComponent(_component_AutoComplete, {
        modelValue: searchTerm.value,
        "onUpdate:modelValue": ($event) => searchTerm.value = $event,
        onInput: fetchProducts,
        suggestions: filteredItems.value,
        onComplete: searchItems,
        optionLabel: "name",
        placeholder: "I'm Searching for ...",
        class: "flex-grow mx-2 p-input-icon-left",
        onItemSelect: navigateToProduct
      }, {
        option: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center w-full"${_scopeId}><img${ssrRenderAttr("alt", slotProps.option.name)}${ssrRenderAttr("src", slotProps.option.images)} class="mr-2 rounded-md" style="${ssrRenderStyle({ "width": "40px", "height": "40px", "object-fit": "cover" })}"${_scopeId}><div class="w-full"${_scopeId}>${ssrInterpolate(slotProps.option.name)}</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center w-full" }, [
                createVNode("img", {
                  alt: slotProps.option.name,
                  src: slotProps.option.images,
                  class: "mr-2 rounded-md",
                  style: { "width": "40px", "height": "40px", "object-fit": "cover" }
                }, null, 8, ["alt", "src"]),
                createVNode("div", { class: "w-full" }, toDisplayString(slotProps.option.name), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Button, {
        type: "button",
        icon: "pi pi-bars",
        onClick: toggle,
        "aria-haspopup": "true",
        "aria-controls": "overlay_menu",
        class: "bg-transparent border-none shadow-none p-2 text-black"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Menu, {
        ref_key: "menu",
        ref: menu,
        id: "overlay_menu",
        model: items.value,
        popup: true,
        class: "wmd:w-60"
      }, {
        item: withCtx(({ item, props: props2 }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a${ssrRenderAttrs(mergeProps({ class: "flex items-center" }, props2.action, ssrGetDirectiveProps(_ctx, _directive_ripple)))}${_scopeId}><span class="${ssrRenderClass(item.icon)}"${_scopeId}></span><span${_scopeId}>${ssrInterpolate(item.label)}</span>`);
            if (item.badge) {
              _push2(ssrRenderComponent(_component_Badge, {
                class: "ml-auto",
                value: formattedPrice(item.badge),
                severity: "warning"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (item.count) {
              _push2(ssrRenderComponent(_component_Badge, {
                class: "ml-auto",
                value: _ctx.count,
                severity: "warning"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</a>`);
          } else {
            return [
              withDirectives((openBlock(), createBlock("a", mergeProps({ class: "flex items-center" }, props2.action), [
                createVNode("span", {
                  class: item.icon
                }, null, 2),
                createVNode("span", null, toDisplayString(item.label), 1),
                item.badge ? (openBlock(), createBlock(_component_Badge, {
                  key: 0,
                  class: "ml-auto",
                  value: formattedPrice(item.badge),
                  severity: "warning"
                }, null, 8, ["value"])) : createCommentVNode("", true),
                item.count ? (openBlock(), createBlock(_component_Badge, {
                  key: 1,
                  class: "ml-auto",
                  value: _ctx.count,
                  severity: "warning"
                }, null, 8, ["value"])) : createCommentVNode("", true)
              ], 16)), [
                [_directive_ripple]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="hidden md:flex items-center"><div class="mr-auto md:w-48 flex-shrink-0">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/dashboard" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0$1)} alt="Hikvision Logo" class="h-20 object-contain"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0$1,
                alt: "Hikvision Logo",
                class: "h-20 object-contain"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-full bg-red flex justify-center items-center py-4"><div class="relative flex items-center w-">`);
      _push(ssrRenderComponent(_component_Select, {
        modelValue: selectedCategory.value,
        "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
        options: categories.value,
        optionLabel: "name",
        placeholder: "Choose Category",
        class: "min-w-[150px] z-10 rounded-l-md mr-3 border-l"
      }, null, _parent));
      _push(ssrRenderComponent(_component_AutoComplete, {
        modelValue: searchTerm.value,
        "onUpdate:modelValue": ($event) => searchTerm.value = $event,
        onInput: fetchProducts,
        suggestions: filteredItems.value,
        onComplete: searchItems,
        optionLabel: "name",
        placeholder: "I'm Searching for ...",
        class: "flex-grow p-input-icon-left border-l-10 border-r-0",
        onItemSelect: navigateToProduct
      }, {
        dropdownicon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="pi pi-chevron-down text-gray-500"${_scopeId}></i>`);
          } else {
            return [
              createVNode("i", { class: "pi pi-chevron-down text-gray-500" })
            ];
          }
        }),
        option: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center w-full"${_scopeId}><img${ssrRenderAttr("alt", slotProps.option.name)}${ssrRenderAttr("src", slotProps.option.images)} class="mr-2 rounded-md" style="${ssrRenderStyle({ "width": "40px", "height": "40px", "object-fit": "cover" })}"${_scopeId}><div class="w-full"${_scopeId}>${ssrInterpolate(slotProps.option.name)}</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center w-full" }, [
                createVNode("img", {
                  alt: slotProps.option.name,
                  src: slotProps.option.images,
                  class: "mr-2 rounded-md",
                  style: { "width": "40px", "height": "40px", "object-fit": "cover" }
                }, null, 8, ["alt", "src"]),
                createVNode("div", { class: "w-full" }, toDisplayString(slotProps.option.name), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><nav class="hidden md:flex lg:flex w-1/5 justify-between items-center p-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        onClick: goToProfile,
        class: "cursor-pointer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="pi pi-user text-3xl"${_scopeId}></i>`);
          } else {
            return [
              createVNode("i", { class: "pi pi-user text-3xl" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        onClick: goToWishList,
        class: "cursor-pointer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_OverlayBadge, {
              value: wishListCount.value,
              severity: "danger"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<i class="pi pi-heart text-3xl"${_scopeId2}></i>`);
                } else {
                  return [
                    createVNode("i", { class: "pi pi-heart text-3xl" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_OverlayBadge, {
                value: wishListCount.value,
                severity: "danger"
              }, {
                default: withCtx(() => [
                  createVNode("i", { class: "pi pi-heart text-3xl" })
                ]),
                _: 1
              }, 8, ["value"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        onClick: goToCart,
        class: "cursor-pointer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_OverlayBadge, {
              value: cartCount.value,
              severity: "danger"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<i class="pi pi-shopping-cart text-3xl"${_scopeId2}></i>`);
                } else {
                  return [
                    createVNode("i", { class: "pi pi-shopping-cart text-3xl" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_OverlayBadge, {
                value: cartCount.value,
                severity: "danger"
              }, {
                default: withCtx(() => [
                  createVNode("i", { class: "pi pi-shopping-cart text-3xl" })
                ]),
                _: 1
              }, 8, ["value"])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (shopOwnerVerified.value) {
        _push(`<button class="relative text-3xl text-gray-700 hover:text-blue-600"><i class="pi pi-clipboard text-3xl"></i>`);
        if (quotationList.value.length) {
          _push(`<span class="absolute top-0 right-0 bg-red-500 text-white text-xs px-1.5 rounded-full">${ssrInterpolate(quotationList.value.length)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</nav><div class="ml-4 hidden sm:flex flex-col font-bold"><span class="text-xs text-gray-400">My Cart</span><span>Ksh ${ssrInterpolate(formattedPrice(cartTotal.value))}</span></div></div></div><hr>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        visible: showQuoatation.value,
        "onUpdate:visible": ($event) => showQuoatation.value = $event,
        quotationList: quotationList.value,
        onClose: ($event) => showQuoatation.value = false
      }, null, _parent));
      _push(`</header>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Navbar-Cto6Wn2h.mjs.map
