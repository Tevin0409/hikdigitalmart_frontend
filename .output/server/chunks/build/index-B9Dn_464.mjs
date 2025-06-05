import { defineComponent, ref, mergeProps, withCtx, createVNode, toDisplayString, createBlock, createCommentVNode, openBlock, Fragment, renderList, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import script$5 from './index-B8fUCuXN.mjs';
import script$4 from './index-OAR6dbAc.mjs';
import script from './index-BXTpjXO9.mjs';
import script$3 from './index-DXUiORVY.mjs';
import script$2 from './index-DAb5Gtdu.mjs';
import script$1 from './index-DiLnL8kN.mjs';
import { _ as _export_sfc, a as useNuxtApp, d as useUserStore, e as useProductStore } from './server.mjs';
import { _ as _imports_0 } from './logoo-Bk06oiQl.mjs';
import script$d from './index-BpOzP0HJ.mjs';
import script$j from './index-CFn7ubeV.mjs';
import script$g from './index-BiulS179.mjs';
import script$f from './index-DKUtm8g9.mjs';
import script$e from './index-DiqmD1N-.mjs';
import script$c from './index-VROm3dEV.mjs';
import script$b from './index-DKnpU7NL.mjs';
import script$a from './index-BwH4pOa5.mjs';
import script$9 from './index-B9TrIdXC.mjs';
import script$8 from './index-CxBt_42S.mjs';
import script$7 from './index-bhzY-i8n.mjs';
import script$6 from './index-2ZtbGbMR.mjs';
import script$i from './index-CzZQQl2e.mjs';
import script$h from './index-3gbr5fgi.mjs';
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
import './index-CMv313tU.mjs';
import './index-CFvji5m2.mjs';
import './index--ctLNnjM.mjs';
import './index-B8dwdDfW.mjs';
import '@primeuix/styles/carousel';
import './index-HVZBZE_C.mjs';
import './index-_YLQpnfS.mjs';
import '@primeuix/styles/inputotp';
import './index-pHjQP3W-.mjs';
import './index-CjtQe7dy.mjs';
import './index-C21YqD03.mjs';
import './index-C1vnj6fg.mjs';
import './index-CInUQVkE.mjs';
import '@primeuix/styles/iconfield';
import './index-CSzFqrjf.mjs';
import './index-rAVNvoJo.mjs';
import '@primeuix/utils/eventbus';
import './index-CIdmMv73.mjs';
import '@primeuix/styles/virtualscroller';
import '@primeuix/styles/select';
import '@primeuix/styles/inputtext';
import '@primeuix/styles/floatlabel';
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
import '@primeuix/styles/iftalabel';
import '@primeuix/styles/inputchips';
import '@primeuix/styles/inputgroup';
import '@primeuix/styles/inputnumber';
import '@primeuix/styles/knob';
import '@primeuix/styles/listbox';
import '@primeuix/styles/multiselect';
import '@primeuix/styles/password';
import '@primeuix/styles/radiobutton';
import '@primeuix/styles/radiobuttongroup';
import '@primeuix/styles/rating';
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
import 'node:url';
import 'pinia';
import 'vue-router';
import '@primeuix/styles/base';
import 'axios';
import './index-CJPkJwKH.mjs';
import './index-BPiU8eAd.mjs';
import './index-6fx3juzz.mjs';

const _sfc_main$5 = {
  components: {
    InputOtp: script
  },
  data() {
    return {
      images: [
        {
          src: "https://www.sdl.co.ke/assets/images/resource/about-5.png",
          alt: "EZVIZ H8c 4G LTE 2K Resolution Pan&Tilt Camera 4mm"
        },
        {
          src: "https://www.sdl.co.ke/assets/images/resource/about-6.png",
          alt: "EZVIZ H6c Pro 2K+ Pan & Tilt Smart Home Camera"
        },
        {
          src: "https://www.sdl.co.ke/assets/images/resource/about-7.png",
          alt: "Hikvision DS-2CD1127G2H-LIU(2.8mm)(O-STD) 2MP Smart Hybrid Light ColorVu Camera"
        }
      ],
      form: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        cpassword: "",
        phone: "",
        role: ""
      },
      otp: "",
      otpSent: false,
      roles: []
    };
  },
  methods: {
    handleRole() {
      if (this.form.role.name == "TECHNICIAN") {
        this.$emit("show-questionnaire");
      }
      if (this.form.role.name == "WHOLESALER") {
        this.$emit("show-wholesaler");
      }
    },
    async register() {
      try {
        const userStore = useUserStore();
        const { $axios } = useNuxtApp();
        await userStore.register({
          firstName: this.form.firstName,
          lastName: this.form.lastName,
          email: this.form.email,
          password: this.form.password,
          phoneNumber: this.form.phoneNumber,
          roleId: this.form.role.id
        });
        this.otpSent = true;
        console.log("OTP sent to email");
      } catch (error) {
        console.error("Error registering:", error);
        this.$toast.add({
          severity: "error",
          summary: error.message,
          group: "br",
          life: 3e3
        });
      }
    },
    async verifyOtp() {
      try {
        const { $axios } = useNuxtApp();
        const userStore = useUserStore();
        const { accessToken, user } = await userStore.verifyOtp({
          email: this.form.email,
          otp: this.otp
        });
        if (accessToken) {
          this.$router.push("/dashboard");
        }
      } catch (error) {
        this.$toast.add({
          severity: "error",
          summary: error.message,
          group: "br",
          life: 3e3
        });
      }
    },
    // async verifyOtp() {
    //   try {
    //     const { $axios } = useNuxtApp();
    //     const userStore = useUserStore();
    //     // Verify OTP with backend
    //     const { accessToken, user } = await userStore.verifyOtp(
    //       { email: this.form.email, otp: this.otp }
    //     );
    //     console.log("User", user);
    //     if (accessToken) {
    //       console.log("Otp success:", user);
    //       this.$router.push("/dashboard"); // Navigate to the dashboard upon success
    //     }
    //   } catch (error) {
    //     console.error("Error verifying OTP:", error);
    //     this.$toast.add({
    //       severity: "error",
    //       summary: error.message,
    //       group: "br",
    //       life: 3000,
    //     });
    //   }
    // },
    async fetchRoles() {
      const { $axios } = useNuxtApp();
      try {
        const response = await $axios.get("/user/roles");
        this.roles = response.data;
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    }
  },
  mounted() {
    this.fetchRoles();
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FloatLabel = script$1;
  const _component_InputText = script$2;
  const _component_Select = script$3;
  const _component_InputOtp = script;
  const _component_Carousel = script$4;
  const _component_Toast = script$5;
  _push(`<!--[--><div class="flex w-full align-center justify-center" style="${ssrRenderStyle({ "background-image": "url('https://www.sdl.co.ke/assets/images/icons/vector-1.png')" })}" data-v-37293988><div class="flex w-full h-screen flex-col items-center justify-center" data-v-37293988><div class="flex justify-center items-center absolute top-16 left-8" data-v-37293988><a href="/dashboard" class="text-primary text-md cursor-pointer hover:text-secondary" data-v-37293988><i class="pi pi-arrow-left text-primary pr-2 hover:text-secondary" style="${ssrRenderStyle({})}" data-v-37293988></i> Back to Shop</a></div><div class="border shadow-lg p-8 rounded-xl bg-white text-center flex flex-col items-center" data-v-37293988><img${ssrRenderAttr("src", _imports_0)} alt="Login" class="h-28 w-28 mb-6 mx-auto" data-v-37293988><p class="text-gray-500 text-2xl mb-10" data-v-37293988> Enter your details below to sign up </p>`);
  if (!$data.otpSent) {
    _push(`<form class="w-full flex flex-col items-center" data-v-37293988><div class="flex space-x-4 mb-4 w-full" data-v-37293988>`);
    _push(ssrRenderComponent(_component_FloatLabel, {
      variant: "on",
      class: "w-full"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_InputText, {
            type: "text",
            id: "firstName",
            modelValue: $data.form.firstName,
            "onUpdate:modelValue": ($event) => $data.form.firstName = $event,
            class: "w-full"
          }, null, _parent2, _scopeId));
          _push2(`<label for="firstName" data-v-37293988${_scopeId}>First Name</label>`);
        } else {
          return [
            createVNode(_component_InputText, {
              type: "text",
              id: "firstName",
              modelValue: $data.form.firstName,
              "onUpdate:modelValue": ($event) => $data.form.firstName = $event,
              class: "w-full"
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            createVNode("label", { for: "firstName" }, "First Name")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_FloatLabel, {
      variant: "on",
      class: "w-full"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_InputText, {
            type: "text",
            id: "lastName",
            modelValue: $data.form.lastName,
            "onUpdate:modelValue": ($event) => $data.form.lastName = $event,
            class: "w-full"
          }, null, _parent2, _scopeId));
          _push2(`<label for="lastName" data-v-37293988${_scopeId}>Last Name</label>`);
        } else {
          return [
            createVNode(_component_InputText, {
              type: "text",
              id: "lastName",
              modelValue: $data.form.lastName,
              "onUpdate:modelValue": ($event) => $data.form.lastName = $event,
              class: "w-full"
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            createVNode("label", { for: "lastName" }, "Last Name")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div><div class="flex flex-col space-y-4 mb-4 w-full" data-v-37293988>`);
    _push(ssrRenderComponent(_component_FloatLabel, {
      variant: "on",
      class: "w-full"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_InputText, {
            type: "email",
            id: "email",
            modelValue: $data.form.email,
            "onUpdate:modelValue": ($event) => $data.form.email = $event,
            class: "w-full"
          }, null, _parent2, _scopeId));
          _push2(`<label for="email" data-v-37293988${_scopeId}>Email</label>`);
        } else {
          return [
            createVNode(_component_InputText, {
              type: "email",
              id: "email",
              modelValue: $data.form.email,
              "onUpdate:modelValue": ($event) => $data.form.email = $event,
              class: "w-full"
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            createVNode("label", { for: "email" }, "Email")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_FloatLabel, {
      variant: "on",
      class: "w-full"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_InputText, {
            type: "number",
            id: "phoneNumber",
            modelValue: $data.form.phoneNumber,
            "onUpdate:modelValue": ($event) => $data.form.phoneNumber = $event,
            class: "w-full"
          }, null, _parent2, _scopeId));
          _push2(`<label for="phoneNumber" data-v-37293988${_scopeId}>Mobile Phone</label>`);
        } else {
          return [
            createVNode(_component_InputText, {
              type: "number",
              id: "phoneNumber",
              modelValue: $data.form.phoneNumber,
              "onUpdate:modelValue": ($event) => $data.form.phoneNumber = $event,
              class: "w-full"
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            createVNode("label", { for: "phoneNumber" }, "Mobile Phone")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_InputText, {
      name: "password",
      modelValue: $data.form.password,
      "onUpdate:modelValue": ($event) => $data.form.password = $event,
      type: "password",
      class: "w-full",
      placeholder: "Password"
    }, null, _parent));
    _push(ssrRenderComponent(_component_Select, {
      modelValue: $data.form.role,
      "onUpdate:modelValue": ($event) => $data.form.role = $event,
      options: $data.roles,
      optionLabel: "name",
      onChange: $options.handleRole,
      placeholder: "Select a Role",
      class: "w-full custom-dropdown"
    }, null, _parent));
    _push(`</div><button type="submit" class="w-full bg-red-500 text-white py-3 rounded hover:bg-red-600 mt-6" data-v-37293988> Sign Up </button></form>`);
  } else {
    _push(`<div class="flex flex-col items-center text-center w-full" data-v-37293988><h3 class="text-3xl font-medium mb-4" data-v-37293988>Verify OTP</h3><p class="text-gray-500 mb-6" data-v-37293988> Enter the OTP sent to your email address. <span class="font-weight-bold font-bold" data-v-37293988>${ssrInterpolate($data.form.email)}</span></p><div class="w-full flex justify-center mb-4" data-v-37293988><div class="flex justify-center w-full" data-v-37293988>`);
    _push(ssrRenderComponent(_component_InputOtp, {
      length: 6,
      modelValue: $data.otp,
      "onUpdate:modelValue": ($event) => $data.otp = $event,
      class: "p-inputtex text-center p-3 w-full max-w-sm",
      placeholder: "Enter OTP"
    }, null, _parent));
    _push(`</div></div><button class="w-full bg-red-500 text-white py-3 rounded hover:bg-red-600" data-v-37293988> Verify OTP </button></div>`);
  }
  _push(`<p class="text-sm mt-4" data-v-37293988> Already have an account? <span class="text-blue-500 cursor-pointer" data-v-37293988> Log in </span></p></div></div><div class="hidden md:block h-full w-full p-4 relative" data-v-37293988>`);
  _push(ssrRenderComponent(_component_Carousel, {
    verticalViewPortHeight: 2e3,
    autoplayInterval: 4e3,
    value: $data.images,
    numVisible: 1,
    numScroll: 1,
    showIndicators: false,
    showNavigators: false,
    circular: "",
    class: "rounded-lg w-full hidden sm:block"
  }, {
    item: withCtx((slotProps, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="relative w-full h-screen flex justify-center items-center" data-v-37293988${_scopeId}><img${ssrRenderAttr("src", slotProps.data.src)}${ssrRenderAttr("alt", slotProps.data.alt)} class="rounded-xl object-cover w-100 h-100" data-v-37293988${_scopeId}><div class="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white py-2 px-4 rounded" data-v-37293988${_scopeId}>${ssrInterpolate(slotProps.data.alt)}</div></div>`);
      } else {
        return [
          createVNode("div", { class: "relative w-full h-screen flex justify-center items-center" }, [
            createVNode("img", {
              src: slotProps.data.src,
              alt: slotProps.data.alt,
              class: "rounded-xl object-cover w-100 h-100"
            }, null, 8, ["src", "alt"]),
            createVNode("div", { class: "absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white py-2 px-4 rounded" }, toDisplayString(slotProps.data.alt), 1)
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_Toast, {
    position: "bottom-right",
    group: "br"
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SignupForm.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const SignupForm = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-37293988"]]);
const _sfc_main$4 = {
  props: {
    images: {
      type: Array,
      default: () => [
        {
          src: "https://media.istockphoto.com/id/699518640/photo/security-camera-for-safety-on-blue-sky-and-city-background.jpg?s=612x612&w=0&k=20&c=JtBUJrHAAxOBToxJlj2iZ2tvL23MkAYVD32EXVpbwxY=",
          alt: "Surveillance Camera 1"
        },
        {
          src: "https://media.istockphoto.com/id/1405489463/photo/three-quarter-view-of-varifocal-surveillance-camera-with-a-house-on-background.jpg?s=612x612&w=0&k=20&c=3YxtJAA4DiOgew23ZFNOgMc6Mmg29_D0oy_RWvNTA2w=",
          alt: "Surveillance Camera 2"
        },
        {
          src: "https://media.istockphoto.com/id/1410977641/photo/high-technology-security-monitoring-system-cctv-camera.jpg?s=612x612&w=0&k=20&c=ueVgTwwn5Xq-S0Tz6Wfj9sILEubWxURkzkvVrzpSYRI=",
          alt: "Surveillance Camera 3"
        }
      ]
    }
  },
  components: {
    // Carousel,
  },
  data() {
    return {
      //   images: [
      //     {
      //       src: "https://media.istockphoto.com/id/699518640/photo/security-camera-for-safety-on-blue-sky-and-city-background.jpg?s=612x612&w=0&k=20&c=JtBUJrHAAxOBToxJlj2iZ2tvL23MkAYVD32EXVpbwxY=",
      //       alt: "Surveillance Camera 1",
      //     },
      //     {
      //       src: "https://media.istockphoto.com/id/1405489463/photo/three-quarter-view-of-varifocal-surveillance-camera-with-a-house-on-background.jpg?s=612x612&w=0&k=20&c=3YxtJAA4DiOgew23ZFNOgMc6Mmg29_D0oy_RWvNTA2w=",
      //       alt: "Surveillance Camera 2",
      //     },
      //     {
      //       src: "https://media.istockphoto.com/id/1410977641/photo/high-technology-security-monitoring-system-cctv-camera.jpg?s=612x612&w=0&k=20&c=ueVgTwwn5Xq-S0Tz6Wfj9sILEubWxURkzkvVrzpSYRI=",
      //       alt: "Surveillance Camera 3",
      //     },
      //   ],
    };
  },
  mounted() {
    this.images = [
      {
        src: "https://media.istockphoto.com/id/699518640/photo/security-camera-for-safety-on-blue-sky-and-city-background.jpg?s=612x612&w=0&k=20&c=JtBUJrHAAxOBToxJlj2iZ2tvL23MkAYVD32EXVpbwxY=",
        alt: "Surveillance Camera 1"
      },
      {
        src: "https://media.istockphoto.com/id/1405489463/photo/three-quarter-view-of-varifocal-surveillance-camera-with-a-house-on-background.jpg?s=612x612&w=0&k=20&c=3YxtJAA4DiOgew23ZFNOgMc6Mmg29_D0oy_RWvNTA2w=",
        alt: "Surveillance Camera 2"
      },
      {
        src: "https://media.istockphoto.com/id/1410977641/photo/high-technology-security-monitoring-system-cctv-camera.jpg?s=612x612&w=0&k=20&c=ueVgTwwn5Xq-S0Tz6Wfj9sILEubWxURkzkvVrzpSYRI=",
        alt: "Surveillance Camera 3"
      }
    ];
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Carousel = script$4;
  _push(`<div${ssrRenderAttrs(_attrs)}>${ssrInterpolate($props.images)} `);
  _push(ssrRenderComponent(_component_Carousel, {
    verticalViewPortHeight: 2e3,
    autoplayInterval: 4e3,
    value: $props.images,
    numVisible: 1,
    numScroll: 1,
    showIndicators: false,
    showNavigators: false,
    circular: "",
    class: "rounded-lg w-full hidden sm:block"
  }, {
    item: withCtx((slotProps, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", slotProps.data.src)}${ssrRenderAttr("alt", slotProps.data.alt)} class="rounded object-cover w-full h-screen"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: slotProps.data.src,
            alt: slotProps.data.alt,
            class: "rounded object-cover w-full h-screen"
          }, null, 8, ["src", "alt"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/Carousel.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Carousel = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$3 = {
  components: { Carousel },
  data() {
    return {
      images: [
        {
          src: "https://www.sdl.co.ke/assets/images/resource/about-5.png",
          alt: "EZVIZ H8c 4G LTE 2K Resolution Pan&Tilt Camera 4mm"
        },
        {
          src: "https://www.sdl.co.ke/assets/images/resource/about-6.png",
          alt: "EZVIZ H6c Pro 2K+ Pan & Tilt Smart Home Camera"
        },
        {
          src: "https://www.sdl.co.ke/assets/images/resource/about-7.png",
          alt: "Hikvision DS-2CD1127G2H-LIU(2.8mm)(O-STD) 2MP Smart Hybrid Light ColorVu Camera"
        }
      ],
      form: {
        email: "",
        password: "",
        // otp: "",
        newPassword: "",
        confirmNewPassword: ""
      },
      resetEmail: "",
      isVerified: false,
      forgotPassword: false,
      userStore: useUserStore(),
      productStore: useProductStore(),
      resetPassword: false,
      loading: false
    };
  },
  computed: {
    passwordMismatch() {
      return this.form.newPassword && this.form.confirmNewPassword && this.form.newPassword !== this.form.confirmNewPassword;
    }
  },
  methods: {
    async handleResetPassword() {
      try {
        const resetPassword = {
          email: this.form.email,
          newPassword: this.form.newPassword,
          confirmNewPassword: this.form.confirmNewPassword,
          otp: this.otp
        };
        const response = await this.userStore.resetPassword(resetPassword);
        console.log(response, "reset");
        this.isVerified = false;
        this.forgotPassword = false;
        this.$toast.add({
          severity: "success",
          summary: response.data.message,
          group: "br",
          life: 3e3
        });
      } catch (error) {
        if (error.message.includes("not yet verified")) {
          this.isVerified = true;
        } else {
          this.isVerified = false;
        }
        this.$toast.add({
          severity: "error",
          summary: error.message,
          group: "br",
          life: 3e3
        });
      }
    },
    async sendResetEmail() {
      var _a, _b;
      try {
        const { $axios } = useNuxtApp();
        await $axios.post("/auth/forgot-password", { email: this.resetEmail });
        this.$toast.add({
          severity: "success",
          summary: "Reset link sent!",
          detail: "Check your email for the password reset link.",
          group: "br",
          life: 3e3
        });
        this.forgotPassword = false;
        this.isVerified = true;
        this.form.email = this.resetEmail;
        this.resetPassword = false;
      } catch (error) {
        this.$toast.add({
          severity: "error",
          summary: "Error",
          detail: ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || "Failed to send reset link.",
          group: "br",
          life: 3e3
        });
      }
    },
    async login() {
      try {
        this.loading = true;
        const { accessToken } = await this.userStore.login(
          this.form.email,
          this.form.password
        );
        if (accessToken) {
          this.$router.push("/dashboard");
        }
      } catch (error) {
        if (error.message.includes("not yet verified")) {
          this.isVerified = true;
        } else {
          this.isVerified = false;
        }
        this.loading = false;
        this.$toast.add({
          severity: "error",
          summary: error.message,
          group: "br",
          life: 3e3
        });
      }
    },
    async verifyOtp() {
      try {
        const { accessToken } = await this.userStore.verifyOtp({
          email: this.form.email,
          otp: this.otp
        });
        if (!this.resetPassword) {
          this.userStore.logout();
          this.resetPassword = true;
          return;
        }
        if (accessToken) {
          this.$router.push("/dashboard");
        }
      } catch (error) {
        this.$toast.add({
          severity: "error",
          summary: error.message,
          group: "br",
          life: 3e3
        });
      }
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FloatLabel = script$1;
  const _component_InputText = script$2;
  const _component_Password = script$j;
  const _component_Button = script$d;
  const _component_InputOtp = script;
  const _component_Carousel = script$4;
  const _component_Toast = script$5;
  _push(`<!--[--><div class="flex w-full align-center justify-center" style="${ssrRenderStyle({ "background-image": "url('https://www.sdl.co.ke/assets/images/icons/vector-1.png')" })}" data-v-f915195d><div class="flex w-full h-screen flex-col items-center justify-center p-16" data-v-f915195d><div class="flex justify-center items-center absolute top-16 left-8" data-v-f915195d><a href="/dashboard" class="text-primary text-md cursor-pointer hover:text-secondary" data-v-f915195d><i class="pi pi-arrow-left text-primary pr-2 hover:text-secondary" style="${ssrRenderStyle({})}" data-v-f915195d></i> Back to Shop</a></div><div class="border shadow-xl p-12 lg:p-36 rounded-xl bg-white flex flex-col items-center" data-v-f915195d><img${ssrRenderAttr("src", _imports_0)} alt="Login" class="h-28 w-28" data-v-f915195d>`);
  if (!$data.isVerified && !$data.forgotPassword) {
    _push(`<div data-v-f915195d><p class="text-gray-500 text-2xl mb-10 text-center" data-v-f915195d> Welcome to Secure Group </p><form class="w-full flex flex-col items-center" data-v-f915195d><div class="flex flex-col gap-4 w-full" data-v-f915195d>`);
    _push(ssrRenderComponent(_component_FloatLabel, { variant: "on" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_InputText, {
            type: "email",
            id: "email",
            modelValue: $data.form.email,
            "onUpdate:modelValue": ($event) => $data.form.email = $event,
            class: "w-full"
          }, null, _parent2, _scopeId));
          _push2(`<label for="email" data-v-f915195d${_scopeId}>Email</label>`);
        } else {
          return [
            createVNode(_component_InputText, {
              type: "email",
              id: "email",
              modelValue: $data.form.email,
              "onUpdate:modelValue": ($event) => $data.form.email = $event,
              class: "w-full"
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            createVNode("label", { for: "email" }, "Email")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_FloatLabel, { variant: "on" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_Password, {
            modelValue: $data.form.password,
            "onUpdate:modelValue": ($event) => $data.form.password = $event,
            toggleMask: ""
          }, null, _parent2, _scopeId));
          _push2(`<label for="password" data-v-f915195d${_scopeId}>Password</label>`);
        } else {
          return [
            createVNode(_component_Password, {
              modelValue: $data.form.password,
              "onUpdate:modelValue": ($event) => $data.form.password = $event,
              toggleMask: ""
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            createVNode("label", { for: "password" }, "Password")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div><div class="mt-4 flex justify-end w-full" data-v-f915195d><p class="text-blue-500 text-sm cursor-pointer" data-v-f915195d> Forgot password? </p></div>`);
    _push(ssrRenderComponent(_component_Button, {
      class: "w-full bg-red-500 text-white py-3 rounded hover:bg-red-600 mt-4",
      type: "submit",
      label: "Log In",
      loading: $data.loading
    }, null, _parent));
    _push(`</form><p class="text-sm mt-4 text-center" data-v-f915195d> Don&#39;t have an account? <span class="text-blue-500 cursor-pointer" data-v-f915195d> Sign up </span></p></div>`);
  } else if ($data.forgotPassword) {
    _push(`<div data-v-f915195d><h3 class="text-gray-500 flex justify-center text-2xl font-medium mb-4" data-v-f915195d> Reset Password </h3><p class="text-gray-500 mb-6 text-center" data-v-f915195d> Enter your email address to receive a password reset link. </p>`);
    _push(ssrRenderComponent(_component_FloatLabel, { variant: "on" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_InputText, {
            type: "email",
            id: "resetEmail",
            modelValue: $data.resetEmail,
            "onUpdate:modelValue": ($event) => $data.resetEmail = $event,
            class: "w-full"
          }, null, _parent2, _scopeId));
          _push2(`<label for="resetEmail" data-v-f915195d${_scopeId}>Email</label>`);
        } else {
          return [
            createVNode(_component_InputText, {
              type: "email",
              id: "resetEmail",
              modelValue: $data.resetEmail,
              "onUpdate:modelValue": ($event) => $data.resetEmail = $event,
              class: "w-full"
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            createVNode("label", { for: "resetEmail" }, "Email")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`<button class="w-full bg-red-500 text-white py-3 rounded hover:bg-red-600 mt-4" data-v-f915195d> Send Reset Link </button><p class="text-sm mt-4 text-center cursor-pointer text-blue-500" data-v-f915195d> Back to login </p></div>`);
  } else {
    _push(`<div data-v-f915195d>`);
    if (!$data.resetPassword) {
      _push(`<div data-v-f915195d><h3 class="text-3xl font-medium mb-4" data-v-f915195d>Verify OTP</h3><p class="text-gray-500 mb-6" data-v-f915195d> Enter the OTP sent to your email address: <span class="font-bold" data-v-f915195d>${ssrInterpolate($data.form.email)}</span></p><div class="w-full mb-4 flex justify-center items-center" data-v-f915195d>`);
      _push(ssrRenderComponent(_component_InputOtp, {
        length: 6,
        mask: "*",
        modelValue: _ctx.otp,
        "onUpdate:modelValue": ($event) => _ctx.otp = $event,
        size: "large",
        class: "text-center p-3",
        placeholder: "Enter OTP"
      }, null, _parent));
      _push(`</div><button class="w-full text-white py-3 rounded bg-red-600" data-v-f915195d> Verify OTP </button></div>`);
    } else {
      _push(`<div data-v-f915195d><h3 class="text-3xl font-medium mb-4 text-center" data-v-f915195d> Reset Password </h3><p class="text-gray-500 mb-6" data-v-f915195d> Enter a new password for your account. </p>`);
      _push(ssrRenderComponent(_component_FloatLabel, { variant: "on" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Password, {
              modelValue: $data.form.newPassword,
              "onUpdate:modelValue": ($event) => $data.form.newPassword = $event,
              id: "resetPassword",
              toggleMask: "",
              class: "w-full"
            }, null, _parent2, _scopeId));
            _push2(`<label for="resetPassword" data-v-f915195d${_scopeId}>New Password</label>`);
          } else {
            return [
              createVNode(_component_Password, {
                modelValue: $data.form.newPassword,
                "onUpdate:modelValue": ($event) => $data.form.newPassword = $event,
                id: "resetPassword",
                toggleMask: "",
                class: "w-full"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode("label", { for: "resetPassword" }, "New Password")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_FloatLabel, {
        variant: "on",
        class: "mt-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Password, {
              modelValue: $data.form.confirmNewPassword,
              "onUpdate:modelValue": ($event) => $data.form.confirmNewPassword = $event,
              id: "confirmNewPassword",
              toggleMask: "",
              class: "w-full"
            }, null, _parent2, _scopeId));
            _push2(`<label for="confirmNewPassword" data-v-f915195d${_scopeId}>Confirm Password</label>`);
          } else {
            return [
              createVNode(_component_Password, {
                modelValue: $data.form.confirmNewPassword,
                "onUpdate:modelValue": ($event) => $data.form.confirmNewPassword = $event,
                id: "confirmNewPassword",
                toggleMask: "",
                class: "w-full"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode("label", { for: "confirmNewPassword" }, "Confirm Password")
            ];
          }
        }),
        _: 1
      }, _parent));
      if ($options.passwordMismatch) {
        _push(`<p class="text-red-500 text-sm mt-2" data-v-f915195d> Passwords do not match. </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="w-full text-white py-3 mt-4 rounded bg-red-600"${ssrIncludeBooleanAttr($options.passwordMismatch) ? " disabled" : ""} data-v-f915195d> Reset Password </button></div>`);
    }
    _push(`</div>`);
  }
  _push(`</div></div><div class="hidden md:block h-full w-full p-4 relative" data-v-f915195d>`);
  _push(ssrRenderComponent(_component_Carousel, {
    verticalViewPortHeight: 2e3,
    autoplayInterval: 4e3,
    value: $data.images,
    numVisible: 1,
    numScroll: 1,
    showIndicators: false,
    showNavigators: false,
    circular: "",
    class: "rounded-lg w-full hidden sm:block"
  }, {
    item: withCtx((slotProps, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="relative w-full h-screen flex justify-center items-center" data-v-f915195d${_scopeId}><img${ssrRenderAttr("src", slotProps.data.src)}${ssrRenderAttr("alt", slotProps.data.alt)} class="rounded-xl object-cover w-100 h-100" data-v-f915195d${_scopeId}><div class="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white py-2 px-4 rounded" data-v-f915195d${_scopeId}>${ssrInterpolate(slotProps.data.alt)}</div></div>`);
      } else {
        return [
          createVNode("div", { class: "relative w-full h-screen flex justify-center items-center" }, [
            createVNode("img", {
              src: slotProps.data.src,
              alt: slotProps.data.alt,
              class: "rounded-xl object-cover w-100 h-100"
            }, null, 8, ["src", "alt"]),
            createVNode("div", { class: "absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white py-2 px-4 rounded" }, toDisplayString(slotProps.data.alt), 1)
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_Toast, {
    position: "bottom-right",
    group: "br"
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LoginForm.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const LoginForm = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-f915195d"]]);
const _sfc_main$2 = {
  data() {
    return {
      responseMessage: {},
      activeStep: 1,
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      businessName: "",
      location: "",
      errors: {},
      businessType: null,
      experienceYears: null,
      experienceAreas: [],
      brandsWorkedWith: [],
      integrationExperience: null,
      familiarWithStandard: null,
      purchaseSource: "",
      purchaseHikvision: null,
      requiresTraining: null,
      images: [
        {
          src: "https://www.sdl.co.ke/assets/images/resource/about-5.png",
          alt: "EZVIZ H8c 4G LTE 2K Resolution Pan&Tilt Camera 4mm"
        },
        {
          src: "https://www.sdl.co.ke/assets/images/resource/about-6.png",
          alt: "EZVIZ H6c Pro 2K+ Pan & Tilt Smart Home Camera"
        },
        {
          src: "https://www.sdl.co.ke/assets/images/resource/about-7.png",
          alt: "Hikvision DS-2CD1127G2H-LIU(2.8mm)(O-STD) 2MP Smart Hybrid Light ColorVu Camera"
        }
      ],
      businessCategories: [
        { name: "System Integrator", key: "System Integrator" },
        { name: "Reseller", key: "Reseller" },
        { name: "Technician", key: "Technician" },
        { name: "Other", key: "Other" }
      ],
      yearExperiences: [
        { name: "1 Year", key: "1 Year" },
        { name: "1-3 Years", key: "1-3 Years" },
        { name: "4-7 Years", key: "4-7 Years" },
        { name: "8+", key: "8+" }
      ],
      experienceAreasList: [
        { name: "CCTV Systems", key: "CCTV Systems" },
        { name: "Access Control Systems", key: "Access Control Systems" },
        { name: "Video Intercom Systems", key: "Video Intercom Systems" },
        {
          name: "Networking and Computer Products",
          key: "Networking and Computer Products"
        },
        { name: "Electrical Installations", key: "Electrical Installations" }
      ],
      brandsWorkedWithList: [
        { name: "Hikvision", key: "Hikvision" },
        { name: "Dahua", key: "Dahua" },
        { name: "Uniview", key: "Uniview" },
        { name: "Tandy", key: "Tandy" },
        { name: "Other (Please Specify)", key: "Other" }
      ],
      integrationExperienceList: [
        { name: "Yes, Extensive Experience", key: "Yes, Extensive Experience" },
        { name: "Some Experience", key: "Some Experience" },
        { name: "No Experience", key: "No Experience" }
      ],
      wherePurchase: [
        { name: "National Distributor", key: "National Distributor" },
        { name: "Regional Supplier", key: "Regional Supplier" },
        { name: "Online Retailer ", key: "Online Retailer " },
        { name: "Other", key: "Other" }
      ],
      familiarWithStandards: [
        { name: "Yes, I'm certified", key: "Yes, I'm certified" },
        {
          name: "I am familiar but not certified",
          key: "I am familiar but not certified"
        },
        {
          name: "No, but I am willing to learn",
          key: "No, but I am willing to learn"
        }
      ],
      options: [
        { name: "Yes", key: "Yes" },
        { name: "No", key: "No" },
        { name: "Not yet, but interested", key: "Not yet, but interested" }
      ],
      experienceAreasError: false,
      brandsWorkedWithError: false,
      integrationExperienceError: false,
      familiarWithStandardError: false,
      purchaseError: false,
      currentlyPurchaseError: false,
      formData: {
        technicalExpertise: "",
        hikvisionTechDifference: "",
        troubleshootCCTV: "",
        networkDesign: "",
        supportAreas: "",
        businessSupport: ""
      },
      textareaFields: [
        {
          id: "technicalExpertise",
          model: "technicalExpertise",
          label: `Technical Expertise Verification<br>
      <span>For those working with Hikvision products: How do you configure a
      Hikvision NVR to enable remote viewing on a mobile device?</span>`
        },
        {
          id: "hikvisionTechDifference",
          model: "hikvisionTechDifference",
          label: "What is the difference between Hikvision\u2019s AcuSense and ColorVu technologies?"
        },
        {
          id: "troubleshootCCTV",
          model: "troubleshootCCTV",
          label: "How would you troubleshoot a CCTV camera that is not displaying video on the NVR?"
        },
        {
          id: "networkDesign",
          model: "networkDesign",
          label: "What are the key considerations when designing a network for IP-based surveillance systems?"
        },
        {
          id: "supportAreas",
          model: "supportAreas",
          label: "What areas would you like us to support you with as you partner with Secure Digital Limited under Hik Digital Mart?"
        },
        {
          id: "businessSupport",
          model: "businessSupport",
          label: "How can we best support your business? (Optional)"
        }
      ]
    };
  },
  methods: {
    handleSubmit(activateCallback) {
      if (this.validateForm()) {
        console.log("Form submitted:", { ...this.formData });
        this.submitForm();
      } else {
        console.log("Validation failed");
      }
    },
    validateForm() {
      let isValid = true;
      this.errors = {};
      this.purchaseError = this.purchaseSource.length == 0;
      if (this.purchaseError) isValid = false;
      this.currentlyPurchaseError = !this.purchaseHikvision;
      if (this.currentlyPurchaseError) isValid = false;
      this.textareaFields.forEach((field) => {
        if (!this.formData[field.model].trim() && field.id !== "businessSupport") {
          this.errors[field.model] = "This field cannot be empty.";
          isValid = false;
        }
      });
      return isValid;
    },
    validateAndProceed(activateCallback, x) {
      this.errors = {};
      if (x == 1) {
        if (!this.firstName) this.errors.firstName = "First name is required.";
        if (!this.lastName) this.errors.lastName = "Last name is required.";
        if (!this.phoneNumber)
          this.errors.phoneNumber = "Phone number is required.";
        if (!this.email) this.errors.email = "Email address is required.";
        if (!this.businessName)
          this.errors.businessName = "Business name is required.";
        if (!this.location) this.errors.location = "Location is required.";
        if (!this.businessType)
          this.errors.businessType = "Business Type is required.";
        if (!this.experienceYears)
          this.errors.experienceYears = "Experience Years is required.";
        if (Object.keys(this.errors).length === 0) {
          activateCallback(2);
        }
      }
      if (x == 2) {
        console.log("sxasxsax");
        this.experienceAreasError = false;
        this.brandsWorkedWithError = false;
        this.integrationExperienceError = false;
        this.familiarWithStandardError = false;
        if (this.experienceAreas.length === 0) {
          this.experienceAreasError = true;
        }
        if (this.brandsWorkedWith.length === 0) {
          this.brandsWorkedWithError = true;
        }
        if (!this.integrationExperience) {
          this.integrationExperienceError = true;
        }
        if (!this.familiarWithStandard) {
          this.familiarWithStandardError = true;
        }
        if (!this.experienceAreasError && !this.brandsWorkedWithError && !this.integrationExperienceError && !this.familiarWithStandardError) {
          activateCallback(3);
        }
      }
    },
    async submitForm() {
      console.log("cdscs", this.formData);
      const formData = {
        businessName: this.businessName,
        phoneNumber: this.phoneNumber,
        email: this.email,
        location: this.location,
        businessType: this.businessType,
        experienceYears: this.experienceYears,
        experienceAreas: this.experienceAreas,
        brandsWorkedWith: this.brandsWorkedWith,
        integrationExperience: this.integrationExperience,
        familiarWithStandard: this.familiarWithStandard,
        purchaseSource: this.purchaseSource,
        purchaseHikvision: this.purchaseHikvision,
        requiresTraining: this.requiresTraining
      };
      console.log("Form Data:", formData);
      try {
        const { $axios } = useNuxtApp();
        const response = await $axios.post(
          "/user/technician-questionnaire",
          formData
        );
        this.responseMessage = response.data.message;
        this.activateCallback(4);
        if (response.status === 200) {
        }
        this.$toast.add({
          severity: "success",
          summary: response.data.message,
          group: "br",
          life: 3e3
        });
      } catch (error) {
        this.$toast.add({
          severity: "error",
          summary: error.message,
          group: "br",
          life: 3e3
        });
        console.error("Error submitting form:", error);
      } finally {
      }
    },
    resetForm() {
      this.businessName = "";
      this.phoneNumber = "";
      this.email = "";
      this.location = "";
      this.businessType = null;
      this.experienceYears = null;
      this.experienceAreas = [];
      this.brandsWorkedWith = [];
      this.integrationExperience = null;
      this.purchaseSource = "";
      this.purchaseHikvision = null;
      this.requiresTraining = null;
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Stepper = script$6;
  const _component_StepList = script$7;
  const _component_Step = script$8;
  const _component_Divider = script$9;
  const _component_StepPanels = script$a;
  const _component_StepPanel = script$b;
  const _component_InputText = script$2;
  const _component_RadioButton = script$c;
  const _component_Button = script$d;
  const _component_Checkbox = script$e;
  const _component_IftaLabel = script$f;
  const _component_Textarea = script$g;
  const _component_Carousel = script$4;
  const _component_Toast = script$5;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "flex w-full align-center justify-center",
    style: { "background-image": "url('https://www.sdl.co.ke/assets/images/icons/vector-1.png')" }
  }, _attrs))} data-v-e018aaaf><div class="flex w-full flex-col items-center justify-center" data-v-e018aaaf><div class="flex justify-center items-center absolute top-16 left-8" data-v-e018aaaf><a class="text-primary text-md cursor-pointer hover:text-secondary" data-v-e018aaaf><i class="pi pi-arrow-left text-primary pr-2 hover:text-secondary" style="${ssrRenderStyle({})}" data-v-e018aaaf></i> Back to Signup</a></div><div class="border shadow-xl mt-36 p-6 lg:ml-16 rounded-xl bg-white" data-v-e018aaaf>`);
  _push(ssrRenderComponent(_component_Stepper, {
    value: $data.activeStep,
    "onUpdate:value": ($event) => $data.activeStep = $event,
    class: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_StepList, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_Step, {
                asChild: "",
                value: 1
              }, {
                default: withCtx(({ activateCallback, value, a11yAttrs }, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-row flex-auto gap-2" }, a11yAttrs.root))} data-v-e018aaaf${_scopeId3}><button${ssrRenderAttrs(mergeProps({ class: "bg-transparent border-0 inline-flex flex-col gap-2" }, a11yAttrs.header))} data-v-e018aaaf${_scopeId3}><span class="${ssrRenderClass([
                      "rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",
                      {
                        "bg-primary text-primary-contrast border-primary": value <= $data.activeStep,
                        "border-surface-200 dark:border-surface-700": value > $data.activeStep
                      }
                    ])}" data-v-e018aaaf${_scopeId3}><i class="pi pi-building" data-v-e018aaaf${_scopeId3}></i></span></button>`);
                    _push4(ssrRenderComponent(_component_Divider, null, null, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", mergeProps({ class: "flex flex-row flex-auto gap-2" }, a11yAttrs.root), [
                        createVNode("button", mergeProps({
                          class: "bg-transparent border-0 inline-flex flex-col gap-2",
                          onClick: activateCallback
                        }, a11yAttrs.header), [
                          createVNode("span", {
                            class: [
                              "rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",
                              {
                                "bg-primary text-primary-contrast border-primary": value <= $data.activeStep,
                                "border-surface-200 dark:border-surface-700": value > $data.activeStep
                              }
                            ]
                          }, [
                            createVNode("i", { class: "pi pi-building" })
                          ], 2)
                        ], 16, ["onClick"]),
                        createVNode(_component_Divider)
                      ], 16)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_Step, {
                asChild: "",
                value: 2
              }, {
                default: withCtx(({ activateCallback, value, a11yAttrs }, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-row flex-auto gap-2 pl-2" }, a11yAttrs.root))} data-v-e018aaaf${_scopeId3}><button${ssrRenderAttrs(mergeProps({ class: "bg-transparent border-0 inline-flex flex-col gap-2" }, a11yAttrs.header))} data-v-e018aaaf${_scopeId3}><span class="${ssrRenderClass([
                      "rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",
                      {
                        "bg-primary text-primary-contrast border-primary": value <= $data.activeStep,
                        "border-surface-200 dark:border-surface-700": value > $data.activeStep
                      }
                    ])}" data-v-e018aaaf${_scopeId3}><i class="pi pi-cog" data-v-e018aaaf${_scopeId3}></i></span></button>`);
                    _push4(ssrRenderComponent(_component_Divider, null, null, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", mergeProps({ class: "flex flex-row flex-auto gap-2 pl-2" }, a11yAttrs.root), [
                        createVNode("button", mergeProps({
                          class: "bg-transparent border-0 inline-flex flex-col gap-2",
                          onClick: activateCallback
                        }, a11yAttrs.header), [
                          createVNode("span", {
                            class: [
                              "rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",
                              {
                                "bg-primary text-primary-contrast border-primary": value <= $data.activeStep,
                                "border-surface-200 dark:border-surface-700": value > $data.activeStep
                              }
                            ]
                          }, [
                            createVNode("i", { class: "pi pi-cog" })
                          ], 2)
                        ], 16, ["onClick"]),
                        createVNode(_component_Divider)
                      ], 16)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_Step, {
                asChild: "",
                value: 3
              }, {
                default: withCtx(({ activateCallback, value, a11yAttrs }, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-row pl-2" }, a11yAttrs.root))} data-v-e018aaaf${_scopeId3}><button${ssrRenderAttrs(mergeProps({ class: "bg-transparent border-0 inline-flex flex-col gap-2" }, a11yAttrs.header))} data-v-e018aaaf${_scopeId3}><span class="${ssrRenderClass([
                      "rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",
                      {
                        "bg-primary text-primary-contrast border-primary": value <= $data.activeStep,
                        "border-surface-200 dark:border-surface-700": value > $data.activeStep
                      }
                    ])}" data-v-e018aaaf${_scopeId3}><i class="pi pi-question-circle" data-v-e018aaaf${_scopeId3}></i></span></button>`);
                    _push4(ssrRenderComponent(_component_Divider, null, null, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", mergeProps({ class: "flex flex-row pl-2" }, a11yAttrs.root), [
                        createVNode("button", mergeProps({
                          class: "bg-transparent border-0 inline-flex flex-col gap-2",
                          onClick: activateCallback
                        }, a11yAttrs.header), [
                          createVNode("span", {
                            class: [
                              "rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",
                              {
                                "bg-primary text-primary-contrast border-primary": value <= $data.activeStep,
                                "border-surface-200 dark:border-surface-700": value > $data.activeStep
                              }
                            ]
                          }, [
                            createVNode("i", { class: "pi pi-question-circle" })
                          ], 2)
                        ], 16, ["onClick"]),
                        createVNode(_component_Divider)
                      ], 16)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_Step, {
                asChild: "",
                value: 4
              }, {
                default: withCtx(({ activateCallback, value, a11yAttrs }, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-row pl-2" }, a11yAttrs.root))} data-v-e018aaaf${_scopeId3}><button${ssrRenderAttrs(mergeProps({ class: "bg-transparent border-0 inline-flex flex-col gap-2" }, a11yAttrs.header))} data-v-e018aaaf${_scopeId3}><span class="${ssrRenderClass([
                      "rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",
                      {
                        "bg-primary text-primary-contrast border-primary": value <= $data.activeStep,
                        "border-surface-200 dark:border-surface-700": value > $data.activeStep
                      }
                    ])}" data-v-e018aaaf${_scopeId3}><i class="pi pi-check-circle" data-v-e018aaaf${_scopeId3}></i></span></button></div>`);
                  } else {
                    return [
                      createVNode("div", mergeProps({ class: "flex flex-row pl-2" }, a11yAttrs.root), [
                        createVNode("button", mergeProps({
                          class: "bg-transparent border-0 inline-flex flex-col gap-2",
                          onClick: activateCallback
                        }, a11yAttrs.header), [
                          createVNode("span", {
                            class: [
                              "rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",
                              {
                                "bg-primary text-primary-contrast border-primary": value <= $data.activeStep,
                                "border-surface-200 dark:border-surface-700": value > $data.activeStep
                              }
                            ]
                          }, [
                            createVNode("i", { class: "pi pi-check-circle" })
                          ], 2)
                        ], 16, ["onClick"])
                      ], 16)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_Step, {
                  asChild: "",
                  value: 1
                }, {
                  default: withCtx(({ activateCallback, value, a11yAttrs }) => [
                    createVNode("div", mergeProps({ class: "flex flex-row flex-auto gap-2" }, a11yAttrs.root), [
                      createVNode("button", mergeProps({
                        class: "bg-transparent border-0 inline-flex flex-col gap-2",
                        onClick: activateCallback
                      }, a11yAttrs.header), [
                        createVNode("span", {
                          class: [
                            "rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",
                            {
                              "bg-primary text-primary-contrast border-primary": value <= $data.activeStep,
                              "border-surface-200 dark:border-surface-700": value > $data.activeStep
                            }
                          ]
                        }, [
                          createVNode("i", { class: "pi pi-building" })
                        ], 2)
                      ], 16, ["onClick"]),
                      createVNode(_component_Divider)
                    ], 16)
                  ]),
                  _: 1
                }),
                createVNode(_component_Step, {
                  asChild: "",
                  value: 2
                }, {
                  default: withCtx(({ activateCallback, value, a11yAttrs }) => [
                    createVNode("div", mergeProps({ class: "flex flex-row flex-auto gap-2 pl-2" }, a11yAttrs.root), [
                      createVNode("button", mergeProps({
                        class: "bg-transparent border-0 inline-flex flex-col gap-2",
                        onClick: activateCallback
                      }, a11yAttrs.header), [
                        createVNode("span", {
                          class: [
                            "rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",
                            {
                              "bg-primary text-primary-contrast border-primary": value <= $data.activeStep,
                              "border-surface-200 dark:border-surface-700": value > $data.activeStep
                            }
                          ]
                        }, [
                          createVNode("i", { class: "pi pi-cog" })
                        ], 2)
                      ], 16, ["onClick"]),
                      createVNode(_component_Divider)
                    ], 16)
                  ]),
                  _: 1
                }),
                createVNode(_component_Step, {
                  asChild: "",
                  value: 3
                }, {
                  default: withCtx(({ activateCallback, value, a11yAttrs }) => [
                    createVNode("div", mergeProps({ class: "flex flex-row pl-2" }, a11yAttrs.root), [
                      createVNode("button", mergeProps({
                        class: "bg-transparent border-0 inline-flex flex-col gap-2",
                        onClick: activateCallback
                      }, a11yAttrs.header), [
                        createVNode("span", {
                          class: [
                            "rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",
                            {
                              "bg-primary text-primary-contrast border-primary": value <= $data.activeStep,
                              "border-surface-200 dark:border-surface-700": value > $data.activeStep
                            }
                          ]
                        }, [
                          createVNode("i", { class: "pi pi-question-circle" })
                        ], 2)
                      ], 16, ["onClick"]),
                      createVNode(_component_Divider)
                    ], 16)
                  ]),
                  _: 1
                }),
                createVNode(_component_Step, {
                  asChild: "",
                  value: 4
                }, {
                  default: withCtx(({ activateCallback, value, a11yAttrs }) => [
                    createVNode("div", mergeProps({ class: "flex flex-row pl-2" }, a11yAttrs.root), [
                      createVNode("button", mergeProps({
                        class: "bg-transparent border-0 inline-flex flex-col gap-2",
                        onClick: activateCallback
                      }, a11yAttrs.header), [
                        createVNode("span", {
                          class: [
                            "rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",
                            {
                              "bg-primary text-primary-contrast border-primary": value <= $data.activeStep,
                              "border-surface-200 dark:border-surface-700": value > $data.activeStep
                            }
                          ]
                        }, [
                          createVNode("i", { class: "pi pi-check-circle" })
                        ], 2)
                      ], 16, ["onClick"])
                    ], 16)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_StepPanels, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_StepPanel, { value: 1 }, {
                default: withCtx(({ activateCallback }, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="flex flex-col gap-4 mx-auto" style="${ssrRenderStyle({ "min-width": "40vw" })}" data-v-e018aaaf${_scopeId3}><div class="text-center mt-4 mb-4 text-xl font-semibold" data-v-e018aaaf${_scopeId3}> Section 1: Business Identification </div><div class="flex gap-4" data-v-e018aaaf${_scopeId3}><div class="field w-1/2" data-v-e018aaaf${_scopeId3}><label for="firstName" class="font-bold" data-v-e018aaaf${_scopeId3}>First Name</label>`);
                    _push4(ssrRenderComponent(_component_InputText, {
                      id: "firstName",
                      modelValue: $data.firstName,
                      "onUpdate:modelValue": ($event) => $data.firstName = $event,
                      type: "text",
                      placeholder: "Enter first name",
                      class: "w-full"
                    }, null, _parent4, _scopeId3));
                    if ($data.errors.firstName) {
                      _push4(`<small class="text-red-500" data-v-e018aaaf${_scopeId3}>${ssrInterpolate($data.errors.firstName)}</small>`);
                    } else {
                      _push4(`<!---->`);
                    }
                    _push4(`</div><div class="field w-1/2" data-v-e018aaaf${_scopeId3}><label for="lastName" class="font-bold" data-v-e018aaaf${_scopeId3}>Last Name</label>`);
                    _push4(ssrRenderComponent(_component_InputText, {
                      id: "lastName",
                      modelValue: $data.lastName,
                      "onUpdate:modelValue": ($event) => $data.lastName = $event,
                      type: "text",
                      placeholder: "Enter last name",
                      class: "w-full"
                    }, null, _parent4, _scopeId3));
                    if ($data.errors.lastName) {
                      _push4(`<small class="text-red-500" data-v-e018aaaf${_scopeId3}>${ssrInterpolate($data.errors.lastName)}</small>`);
                    } else {
                      _push4(`<!---->`);
                    }
                    _push4(`</div></div><div class="flex gap-4" data-v-e018aaaf${_scopeId3}><div class="field w-1/2" data-v-e018aaaf${_scopeId3}><label for="phoneNumber" class="font-bold" data-v-e018aaaf${_scopeId3}>Phone Number</label>`);
                    _push4(ssrRenderComponent(_component_InputText, {
                      id: "phoneNumber",
                      modelValue: $data.phoneNumber,
                      "onUpdate:modelValue": ($event) => $data.phoneNumber = $event,
                      type: "tel",
                      placeholder: "Enter phone number",
                      class: "w-full"
                    }, null, _parent4, _scopeId3));
                    if ($data.errors.phoneNumber) {
                      _push4(`<small class="text-red-500" data-v-e018aaaf${_scopeId3}>${ssrInterpolate($data.errors.phoneNumber)}</small>`);
                    } else {
                      _push4(`<!---->`);
                    }
                    _push4(`</div><div class="field w-1/2" data-v-e018aaaf${_scopeId3}><label for="email" class="font-bold" data-v-e018aaaf${_scopeId3}>Email Address</label>`);
                    _push4(ssrRenderComponent(_component_InputText, {
                      id: "email",
                      modelValue: $data.email,
                      "onUpdate:modelValue": ($event) => $data.email = $event,
                      type: "email",
                      placeholder: "Enter email address",
                      class: "w-full"
                    }, null, _parent4, _scopeId3));
                    if ($data.errors.email) {
                      _push4(`<small class="text-red-500" data-v-e018aaaf${_scopeId3}>${ssrInterpolate($data.errors.email)}</small>`);
                    } else {
                      _push4(`<!---->`);
                    }
                    _push4(`</div></div><div class="flex gap-4" data-v-e018aaaf${_scopeId3}><div class="field w-1/2" data-v-e018aaaf${_scopeId3}><label for="businessName" class="font-bold" data-v-e018aaaf${_scopeId3}>Business/Company Name</label>`);
                    _push4(ssrRenderComponent(_component_InputText, {
                      id: "businessName",
                      modelValue: $data.businessName,
                      "onUpdate:modelValue": ($event) => $data.businessName = $event,
                      type: "text",
                      placeholder: "Enter business name",
                      class: "w-full"
                    }, null, _parent4, _scopeId3));
                    if ($data.errors.businessName) {
                      _push4(`<small class="text-red-500" data-v-e018aaaf${_scopeId3}>${ssrInterpolate($data.errors.businessName)}</small>`);
                    } else {
                      _push4(`<!---->`);
                    }
                    _push4(`</div><div class="field w-1/2" data-v-e018aaaf${_scopeId3}><label for="location" class="font-bold" data-v-e018aaaf${_scopeId3}>Business Location</label>`);
                    _push4(ssrRenderComponent(_component_InputText, {
                      id: "location",
                      modelValue: $data.location,
                      "onUpdate:modelValue": ($event) => $data.location = $event,
                      type: "text",
                      placeholder: "City, State, Country",
                      class: "w-full"
                    }, null, _parent4, _scopeId3));
                    if ($data.errors.location) {
                      _push4(`<small class="text-red-500" data-v-e018aaaf${_scopeId3}>${ssrInterpolate($data.errors.location)}</small>`);
                    } else {
                      _push4(`<!---->`);
                    }
                    _push4(`</div></div><div class="flex flex-col gap-4" data-v-e018aaaf${_scopeId3}><div class="font-bold mb-2" data-v-e018aaaf${_scopeId3}>Business Type</div><div class="flex flex-wrap gap-4" data-v-e018aaaf${_scopeId3}><!--[-->`);
                    ssrRenderList($data.businessCategories, (category) => {
                      _push4(`<div class="flex items-center gap-2" data-v-e018aaaf${_scopeId3}>`);
                      _push4(ssrRenderComponent(_component_RadioButton, {
                        modelValue: $data.businessType,
                        "onUpdate:modelValue": ($event) => $data.businessType = $event,
                        inputId: category.key,
                        name: "businessType",
                        value: category.key
                      }, null, _parent4, _scopeId3));
                      _push4(`<label${ssrRenderAttr("for", category.key)} data-v-e018aaaf${_scopeId3}>${ssrInterpolate(category.name)}</label></div>`);
                    });
                    _push4(`<!--]-->`);
                    if ($data.errors.businessType) {
                      _push4(`<small class="text-red-500" data-v-e018aaaf${_scopeId3}>${ssrInterpolate($data.errors.businessType)}</small>`);
                    } else {
                      _push4(`<!---->`);
                    }
                    _push4(`</div></div><div data-v-e018aaaf${_scopeId3}><div class="font-bold mb-2" data-v-e018aaaf${_scopeId3}>Years of Experience</div><div class="flex flex-wrap gap-4" data-v-e018aaaf${_scopeId3}><!--[-->`);
                    ssrRenderList($data.yearExperiences, (category) => {
                      _push4(`<div class="flex items-center gap-2" data-v-e018aaaf${_scopeId3}>`);
                      _push4(ssrRenderComponent(_component_RadioButton, {
                        modelValue: $data.experienceYears,
                        "onUpdate:modelValue": ($event) => $data.experienceYears = $event,
                        inputId: category.key,
                        name: "experienceYears",
                        value: category.key
                      }, null, _parent4, _scopeId3));
                      _push4(`<label${ssrRenderAttr("for", category.key)} data-v-e018aaaf${_scopeId3}>${ssrInterpolate(category.name)}</label></div>`);
                    });
                    _push4(`<!--]-->`);
                    if ($data.errors.experienceYears) {
                      _push4(`<small class="text-red-500" data-v-e018aaaf${_scopeId3}>${ssrInterpolate($data.errors.experienceYears)}</small>`);
                    } else {
                      _push4(`<!---->`);
                    }
                    _push4(`</div></div></div><div class="flex pt-6 justify-end" style="${ssrRenderStyle({ "max-width": "800px", "margin": "0 auto" })}" data-v-e018aaaf${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_Button, {
                      label: "Next",
                      icon: "pi pi-arrow-right",
                      iconPos: "right",
                      onClick: ($event) => $options.validateAndProceed(activateCallback, 1)
                    }, null, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: "flex flex-col gap-4 mx-auto",
                        style: { "min-width": "40vw" }
                      }, [
                        createVNode("div", { class: "text-center mt-4 mb-4 text-xl font-semibold" }, " Section 1: Business Identification "),
                        createVNode("div", { class: "flex gap-4" }, [
                          createVNode("div", { class: "field w-1/2" }, [
                            createVNode("label", {
                              for: "firstName",
                              class: "font-bold"
                            }, "First Name"),
                            createVNode(_component_InputText, {
                              id: "firstName",
                              modelValue: $data.firstName,
                              "onUpdate:modelValue": ($event) => $data.firstName = $event,
                              type: "text",
                              placeholder: "Enter first name",
                              class: "w-full"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            $data.errors.firstName ? (openBlock(), createBlock("small", {
                              key: 0,
                              class: "text-red-500"
                            }, toDisplayString($data.errors.firstName), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "field w-1/2" }, [
                            createVNode("label", {
                              for: "lastName",
                              class: "font-bold"
                            }, "Last Name"),
                            createVNode(_component_InputText, {
                              id: "lastName",
                              modelValue: $data.lastName,
                              "onUpdate:modelValue": ($event) => $data.lastName = $event,
                              type: "text",
                              placeholder: "Enter last name",
                              class: "w-full"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            $data.errors.lastName ? (openBlock(), createBlock("small", {
                              key: 0,
                              class: "text-red-500"
                            }, toDisplayString($data.errors.lastName), 1)) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("div", { class: "flex gap-4" }, [
                          createVNode("div", { class: "field w-1/2" }, [
                            createVNode("label", {
                              for: "phoneNumber",
                              class: "font-bold"
                            }, "Phone Number"),
                            createVNode(_component_InputText, {
                              id: "phoneNumber",
                              modelValue: $data.phoneNumber,
                              "onUpdate:modelValue": ($event) => $data.phoneNumber = $event,
                              type: "tel",
                              placeholder: "Enter phone number",
                              class: "w-full"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            $data.errors.phoneNumber ? (openBlock(), createBlock("small", {
                              key: 0,
                              class: "text-red-500"
                            }, toDisplayString($data.errors.phoneNumber), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "field w-1/2" }, [
                            createVNode("label", {
                              for: "email",
                              class: "font-bold"
                            }, "Email Address"),
                            createVNode(_component_InputText, {
                              id: "email",
                              modelValue: $data.email,
                              "onUpdate:modelValue": ($event) => $data.email = $event,
                              type: "email",
                              placeholder: "Enter email address",
                              class: "w-full"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            $data.errors.email ? (openBlock(), createBlock("small", {
                              key: 0,
                              class: "text-red-500"
                            }, toDisplayString($data.errors.email), 1)) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("div", { class: "flex gap-4" }, [
                          createVNode("div", { class: "field w-1/2" }, [
                            createVNode("label", {
                              for: "businessName",
                              class: "font-bold"
                            }, "Business/Company Name"),
                            createVNode(_component_InputText, {
                              id: "businessName",
                              modelValue: $data.businessName,
                              "onUpdate:modelValue": ($event) => $data.businessName = $event,
                              type: "text",
                              placeholder: "Enter business name",
                              class: "w-full"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            $data.errors.businessName ? (openBlock(), createBlock("small", {
                              key: 0,
                              class: "text-red-500"
                            }, toDisplayString($data.errors.businessName), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "field w-1/2" }, [
                            createVNode("label", {
                              for: "location",
                              class: "font-bold"
                            }, "Business Location"),
                            createVNode(_component_InputText, {
                              id: "location",
                              modelValue: $data.location,
                              "onUpdate:modelValue": ($event) => $data.location = $event,
                              type: "text",
                              placeholder: "City, State, Country",
                              class: "w-full"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            $data.errors.location ? (openBlock(), createBlock("small", {
                              key: 0,
                              class: "text-red-500"
                            }, toDisplayString($data.errors.location), 1)) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("div", { class: "flex flex-col gap-4" }, [
                          createVNode("div", { class: "font-bold mb-2" }, "Business Type"),
                          createVNode("div", { class: "flex flex-wrap gap-4" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList($data.businessCategories, (category) => {
                              return openBlock(), createBlock("div", {
                                key: category.key,
                                class: "flex items-center gap-2"
                              }, [
                                createVNode(_component_RadioButton, {
                                  modelValue: $data.businessType,
                                  "onUpdate:modelValue": ($event) => $data.businessType = $event,
                                  inputId: category.key,
                                  name: "businessType",
                                  value: category.key
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                                createVNode("label", {
                                  for: category.key
                                }, toDisplayString(category.name), 9, ["for"])
                              ]);
                            }), 128)),
                            $data.errors.businessType ? (openBlock(), createBlock("small", {
                              key: 0,
                              class: "text-red-500"
                            }, toDisplayString($data.errors.businessType), 1)) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("div", null, [
                          createVNode("div", { class: "font-bold mb-2" }, "Years of Experience"),
                          createVNode("div", { class: "flex flex-wrap gap-4" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList($data.yearExperiences, (category) => {
                              return openBlock(), createBlock("div", {
                                key: category.key,
                                class: "flex items-center gap-2"
                              }, [
                                createVNode(_component_RadioButton, {
                                  modelValue: $data.experienceYears,
                                  "onUpdate:modelValue": ($event) => $data.experienceYears = $event,
                                  inputId: category.key,
                                  name: "experienceYears",
                                  value: category.key
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                                createVNode("label", {
                                  for: category.key
                                }, toDisplayString(category.name), 9, ["for"])
                              ]);
                            }), 128)),
                            $data.errors.experienceYears ? (openBlock(), createBlock("small", {
                              key: 0,
                              class: "text-red-500"
                            }, toDisplayString($data.errors.experienceYears), 1)) : createCommentVNode("", true)
                          ])
                        ])
                      ]),
                      createVNode("div", {
                        class: "flex pt-6 justify-end",
                        style: { "max-width": "800px", "margin": "0 auto" }
                      }, [
                        createVNode(_component_Button, {
                          label: "Next",
                          icon: "pi pi-arrow-right",
                          iconPos: "right",
                          onClick: ($event) => $options.validateAndProceed(activateCallback, 1)
                        }, null, 8, ["onClick"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_StepPanel, {
                value: 2,
                style: { "min-width": "40vw" }
              }, {
                default: withCtx(({ activateCallback }, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="flex flex-col gap-4" data-v-e018aaaf${_scopeId3}><div class="text-center mt-4 mb-4 text-xl font-semibold" data-v-e018aaaf${_scopeId3}> Section 2: Technical Experience </div><div data-v-e018aaaf${_scopeId3}><label class="font-bold py-5" data-v-e018aaaf${_scopeId3}> Which of the following areas do you have experience with? </label><!--[-->`);
                    ssrRenderList($data.experienceAreasList, (category) => {
                      _push4(`<div class="flex items-center gap-2" data-v-e018aaaf${_scopeId3}>`);
                      _push4(ssrRenderComponent(_component_Checkbox, {
                        modelValue: $data.experienceAreas,
                        "onUpdate:modelValue": ($event) => $data.experienceAreas = $event,
                        inputId: category.key,
                        name: "category",
                        value: category.name
                      }, null, _parent4, _scopeId3));
                      _push4(`<label${ssrRenderAttr("for", category.key)} data-v-e018aaaf${_scopeId3}>${ssrInterpolate(category.name)}</label></div>`);
                    });
                    _push4(`<!--]-->`);
                    if ($data.experienceAreasError) {
                      _push4(`<p class="text-red-500" data-v-e018aaaf${_scopeId3}> Please select at least one area of experience. </p>`);
                    } else {
                      _push4(`<!---->`);
                    }
                    _push4(`</div><div data-v-e018aaaf${_scopeId3}><label class="font-bold pb-3" data-v-e018aaaf${_scopeId3}> Which brands have you primarily worked with? </label><!--[-->`);
                    ssrRenderList($data.brandsWorkedWithList, (category) => {
                      _push4(`<div class="flex items-center gap-2" data-v-e018aaaf${_scopeId3}>`);
                      _push4(ssrRenderComponent(_component_Checkbox, {
                        modelValue: $data.brandsWorkedWith,
                        "onUpdate:modelValue": ($event) => $data.brandsWorkedWith = $event,
                        inputId: category.key,
                        name: "category",
                        value: category.key
                      }, null, _parent4, _scopeId3));
                      _push4(`<label${ssrRenderAttr("for", category.key)} data-v-e018aaaf${_scopeId3}>${ssrInterpolate(category.name)}</label></div>`);
                    });
                    _push4(`<!--]-->`);
                    if ($data.brandsWorkedWith.includes("Other")) {
                      _push4(ssrRenderComponent(_component_InputText, {
                        id: "purchaseSource",
                        modelValue: $data.purchaseSource,
                        "onUpdate:modelValue": ($event) => $data.purchaseSource = $event,
                        type: "text",
                        placeholder: "Please Specify ...",
                        class: "w-full mt-4"
                      }, null, _parent4, _scopeId3));
                    } else {
                      _push4(`<!---->`);
                    }
                    if ($data.brandsWorkedWithError) {
                      _push4(`<p class="text-red-500" data-v-e018aaaf${_scopeId3}> Please select at least one brand. </p>`);
                    } else {
                      _push4(`<!---->`);
                    }
                    _push4(`</div><div class="field" data-v-e018aaaf${_scopeId3}><label class="font-bold pb-3" data-v-e018aaaf${_scopeId3}> Do you have experience integrating security systems into larger solutions? </label><!--[-->`);
                    ssrRenderList($data.integrationExperienceList, (category) => {
                      _push4(`<div class="flex items-center gap-2" data-v-e018aaaf${_scopeId3}>`);
                      _push4(ssrRenderComponent(_component_RadioButton, {
                        modelValue: $data.integrationExperience,
                        "onUpdate:modelValue": ($event) => $data.integrationExperience = $event,
                        inputId: category.key,
                        name: "integrationExperience",
                        value: category.name
                      }, null, _parent4, _scopeId3));
                      _push4(`<label${ssrRenderAttr("for", category.key)} data-v-e018aaaf${_scopeId3}>${ssrInterpolate(category.name)}</label></div>`);
                    });
                    _push4(`<!--]-->`);
                    if ($data.integrationExperienceError) {
                      _push4(`<p class="text-red-500" data-v-e018aaaf${_scopeId3}> Please select an option. </p>`);
                    } else {
                      _push4(`<!---->`);
                    }
                    _push4(`</div><div class="field" data-v-e018aaaf${_scopeId3}><label class="font-bold pb-3" data-v-e018aaaf${_scopeId3}> Are you familiar with Hikvision product certifications and installation standards? </label><!--[-->`);
                    ssrRenderList($data.familiarWithStandards, (category) => {
                      _push4(`<div class="flex items-center gap-2" data-v-e018aaaf${_scopeId3}>`);
                      _push4(ssrRenderComponent(_component_RadioButton, {
                        modelValue: $data.familiarWithStandard,
                        "onUpdate:modelValue": ($event) => $data.familiarWithStandard = $event,
                        inputId: category.key,
                        name: "familiarWithStandard",
                        value: category.name
                      }, null, _parent4, _scopeId3));
                      _push4(`<label${ssrRenderAttr("for", category.key)} data-v-e018aaaf${_scopeId3}>${ssrInterpolate(category.name)}</label></div>`);
                    });
                    _push4(`<!--]-->`);
                    if ($data.familiarWithStandardError) {
                      _push4(`<p class="text-red-500" data-v-e018aaaf${_scopeId3}> Please select an option. </p>`);
                    } else {
                      _push4(`<!---->`);
                    }
                    _push4(`</div></div><div class="flex pt-6 justify-between" data-v-e018aaaf${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_Button, {
                      label: "Back",
                      severity: "secondary",
                      icon: "pi pi-arrow-left",
                      onClick: ($event) => activateCallback(1)
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_Button, {
                      label: "Next",
                      icon: "pi pi-arrow-right",
                      iconPos: "right",
                      onClick: ($event) => $options.validateAndProceed(activateCallback, 2)
                    }, null, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex flex-col gap-4" }, [
                        createVNode("div", { class: "text-center mt-4 mb-4 text-xl font-semibold" }, " Section 2: Technical Experience "),
                        createVNode("div", null, [
                          createVNode("label", { class: "font-bold py-5" }, " Which of the following areas do you have experience with? "),
                          (openBlock(true), createBlock(Fragment, null, renderList($data.experienceAreasList, (category) => {
                            return openBlock(), createBlock("div", {
                              key: category.key,
                              class: "flex items-center gap-2"
                            }, [
                              createVNode(_component_Checkbox, {
                                modelValue: $data.experienceAreas,
                                "onUpdate:modelValue": ($event) => $data.experienceAreas = $event,
                                inputId: category.key,
                                name: "category",
                                value: category.name
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                              createVNode("label", {
                                for: category.key
                              }, toDisplayString(category.name), 9, ["for"])
                            ]);
                          }), 128)),
                          $data.experienceAreasError ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-red-500"
                          }, " Please select at least one area of experience. ")) : createCommentVNode("", true)
                        ]),
                        createVNode("div", null, [
                          createVNode("label", { class: "font-bold pb-3" }, " Which brands have you primarily worked with? "),
                          (openBlock(true), createBlock(Fragment, null, renderList($data.brandsWorkedWithList, (category) => {
                            return openBlock(), createBlock("div", {
                              key: category.key,
                              class: "flex items-center gap-2"
                            }, [
                              createVNode(_component_Checkbox, {
                                modelValue: $data.brandsWorkedWith,
                                "onUpdate:modelValue": ($event) => $data.brandsWorkedWith = $event,
                                inputId: category.key,
                                name: "category",
                                value: category.key
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                              createVNode("label", {
                                for: category.key
                              }, toDisplayString(category.name), 9, ["for"])
                            ]);
                          }), 128)),
                          $data.brandsWorkedWith.includes("Other") ? (openBlock(), createBlock(_component_InputText, {
                            key: 0,
                            id: "purchaseSource",
                            modelValue: $data.purchaseSource,
                            "onUpdate:modelValue": ($event) => $data.purchaseSource = $event,
                            type: "text",
                            placeholder: "Please Specify ...",
                            class: "w-full mt-4"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                          $data.brandsWorkedWithError ? (openBlock(), createBlock("p", {
                            key: 1,
                            class: "text-red-500"
                          }, " Please select at least one brand. ")) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "field" }, [
                          createVNode("label", { class: "font-bold pb-3" }, " Do you have experience integrating security systems into larger solutions? "),
                          (openBlock(true), createBlock(Fragment, null, renderList($data.integrationExperienceList, (category) => {
                            return openBlock(), createBlock("div", {
                              key: category.key,
                              class: "flex items-center gap-2"
                            }, [
                              createVNode(_component_RadioButton, {
                                modelValue: $data.integrationExperience,
                                "onUpdate:modelValue": ($event) => $data.integrationExperience = $event,
                                inputId: category.key,
                                name: "integrationExperience",
                                value: category.name
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                              createVNode("label", {
                                for: category.key
                              }, toDisplayString(category.name), 9, ["for"])
                            ]);
                          }), 128)),
                          $data.integrationExperienceError ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-red-500"
                          }, " Please select an option. ")) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "field" }, [
                          createVNode("label", { class: "font-bold pb-3" }, " Are you familiar with Hikvision product certifications and installation standards? "),
                          (openBlock(true), createBlock(Fragment, null, renderList($data.familiarWithStandards, (category) => {
                            return openBlock(), createBlock("div", {
                              key: category.key,
                              class: "flex items-center gap-2"
                            }, [
                              createVNode(_component_RadioButton, {
                                modelValue: $data.familiarWithStandard,
                                "onUpdate:modelValue": ($event) => $data.familiarWithStandard = $event,
                                inputId: category.key,
                                name: "familiarWithStandard",
                                value: category.name
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                              createVNode("label", {
                                for: category.key
                              }, toDisplayString(category.name), 9, ["for"])
                            ]);
                          }), 128)),
                          $data.familiarWithStandardError ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-red-500"
                          }, " Please select an option. ")) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "flex pt-6 justify-between" }, [
                        createVNode(_component_Button, {
                          label: "Back",
                          severity: "secondary",
                          icon: "pi pi-arrow-left",
                          onClick: ($event) => activateCallback(1)
                        }, null, 8, ["onClick"]),
                        createVNode(_component_Button, {
                          label: "Next",
                          icon: "pi pi-arrow-right",
                          iconPos: "right",
                          onClick: ($event) => $options.validateAndProceed(activateCallback, 2)
                        }, null, 8, ["onClick"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_StepPanel, {
                value: 3,
                style: { "min-width": "40vw" }
              }, {
                default: withCtx(({ activateCallback }, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="flex flex-col gap-4" data-v-e018aaaf${_scopeId3}><div class="text-center mt-4 mb-4 text-xl font-semibold" data-v-e018aaaf${_scopeId3}> Section 3: Technical Questions </div><div class="field" data-v-e018aaaf${_scopeId3}><label for="purchaseSource" class="font-bold pb-3" data-v-e018aaaf${_scopeId3}> Where do you currently purchase your security products? (Please select all that apply and provide details for each category) </label><!--[-->`);
                    ssrRenderList($data.wherePurchase, (category) => {
                      _push4(`<div class="flex items-center gap-2" data-v-e018aaaf${_scopeId3}>`);
                      _push4(ssrRenderComponent(_component_Checkbox, {
                        modelValue: $data.purchaseSource,
                        "onUpdate:modelValue": ($event) => $data.purchaseSource = $event,
                        inputId: category.key,
                        name: "purchaseSource",
                        value: category.name
                      }, null, _parent4, _scopeId3));
                      _push4(`<label${ssrRenderAttr("for", category.key)} data-v-e018aaaf${_scopeId3}>${ssrInterpolate(category.name)}</label></div>`);
                    });
                    _push4(`<!--]-->`);
                    if ($data.purchaseError) {
                      _push4(`<p class="text-red-500" data-v-e018aaaf${_scopeId3}> Please select an option. </p>`);
                    } else {
                      _push4(`<!---->`);
                    }
                    _push4(`</div><div class="field" data-v-e018aaaf${_scopeId3}><label class="font-bold pb-3" data-v-e018aaaf${_scopeId3}> Do you currently purchase Hikvision products? </label><!--[-->`);
                    ssrRenderList($data.options, (category) => {
                      _push4(`<div class="flex items-center gap-2" data-v-e018aaaf${_scopeId3}>`);
                      _push4(ssrRenderComponent(_component_RadioButton, {
                        modelValue: $data.purchaseHikvision,
                        "onUpdate:modelValue": ($event) => $data.purchaseHikvision = $event,
                        inputId: category.key,
                        name: "purchaseHikvision",
                        value: category.name
                      }, null, _parent4, _scopeId3));
                      _push4(`<label${ssrRenderAttr("for", category.key)} data-v-e018aaaf${_scopeId3}>${ssrInterpolate(category.name)}</label></div>`);
                    });
                    _push4(`<!--]-->`);
                    if ($data.currentlyPurchaseError) {
                      _push4(`<p class="text-red-500" data-v-e018aaaf${_scopeId3}> Please select an option. </p>`);
                    } else {
                      _push4(`<!---->`);
                    }
                    _push4(`</div><!--[-->`);
                    ssrRenderList($data.textareaFields, (field) => {
                      var _a;
                      _push4(`<div class="field" data-v-e018aaaf${_scopeId3}><label class="font-bold pb-3" data-v-e018aaaf${_scopeId3}><span data-v-e018aaaf${_scopeId3}>${(_a = field.label) != null ? _a : ""}</span></label>`);
                      _push4(ssrRenderComponent(_component_IftaLabel, { class: "mt-4" }, {
                        default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(ssrRenderComponent(_component_Textarea, {
                              id: field.id,
                              modelValue: $data.formData[field.model],
                              "onUpdate:modelValue": ($event) => $data.formData[field.model] = $event,
                              rows: "5",
                              cols: "30",
                              style: { "resize": "none" },
                              class: "w-full"
                            }, null, _parent5, _scopeId4));
                            _push5(`<label${ssrRenderAttr("for", field.id)} data-v-e018aaaf${_scopeId4}>Summary</label>`);
                          } else {
                            return [
                              createVNode(_component_Textarea, {
                                id: field.id,
                                modelValue: $data.formData[field.model],
                                "onUpdate:modelValue": ($event) => $data.formData[field.model] = $event,
                                rows: "5",
                                cols: "30",
                                style: { "resize": "none" },
                                class: "w-full"
                              }, null, 8, ["id", "modelValue", "onUpdate:modelValue"]),
                              createVNode("label", {
                                for: field.id
                              }, "Summary", 8, ["for"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent4, _scopeId3));
                      if ($data.errors[field.model]) {
                        _push4(`<p class="text-red-500" data-v-e018aaaf${_scopeId3}>${ssrInterpolate($data.errors[field.model])}</p>`);
                      } else {
                        _push4(`<!---->`);
                      }
                      _push4(`</div>`);
                    });
                    _push4(`<!--]--></div><div class="flex pt-6 justify-between" data-v-e018aaaf${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_Button, {
                      label: "Back",
                      severity: "secondary",
                      icon: "pi pi-arrow-left",
                      onClick: ($event) => activateCallback(2)
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_Button, {
                      label: "Submit",
                      icon: "pi pi-check",
                      iconPos: "right",
                      onClick: ($event) => $options.handleSubmit(activateCallback)
                    }, null, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex flex-col gap-4" }, [
                        createVNode("div", { class: "text-center mt-4 mb-4 text-xl font-semibold" }, " Section 3: Technical Questions "),
                        createVNode("div", { class: "field" }, [
                          createVNode("label", {
                            for: "purchaseSource",
                            class: "font-bold pb-3"
                          }, " Where do you currently purchase your security products? (Please select all that apply and provide details for each category) "),
                          (openBlock(true), createBlock(Fragment, null, renderList($data.wherePurchase, (category) => {
                            return openBlock(), createBlock("div", {
                              key: category.key,
                              class: "flex items-center gap-2"
                            }, [
                              createVNode(_component_Checkbox, {
                                modelValue: $data.purchaseSource,
                                "onUpdate:modelValue": ($event) => $data.purchaseSource = $event,
                                inputId: category.key,
                                name: "purchaseSource",
                                value: category.name
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                              createVNode("label", {
                                for: category.key
                              }, toDisplayString(category.name), 9, ["for"])
                            ]);
                          }), 128)),
                          $data.purchaseError ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-red-500"
                          }, " Please select an option. ")) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "field" }, [
                          createVNode("label", { class: "font-bold pb-3" }, " Do you currently purchase Hikvision products? "),
                          (openBlock(true), createBlock(Fragment, null, renderList($data.options, (category) => {
                            return openBlock(), createBlock("div", {
                              key: category.key,
                              class: "flex items-center gap-2"
                            }, [
                              createVNode(_component_RadioButton, {
                                modelValue: $data.purchaseHikvision,
                                "onUpdate:modelValue": ($event) => $data.purchaseHikvision = $event,
                                inputId: category.key,
                                name: "purchaseHikvision",
                                value: category.name
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                              createVNode("label", {
                                for: category.key
                              }, toDisplayString(category.name), 9, ["for"])
                            ]);
                          }), 128)),
                          $data.currentlyPurchaseError ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-red-500"
                          }, " Please select an option. ")) : createCommentVNode("", true)
                        ]),
                        (openBlock(true), createBlock(Fragment, null, renderList($data.textareaFields, (field) => {
                          return openBlock(), createBlock("div", {
                            key: field.id,
                            class: "field"
                          }, [
                            createVNode("label", { class: "font-bold pb-3" }, [
                              createVNode("span", {
                                innerHTML: field.label
                              }, null, 8, ["innerHTML"])
                            ]),
                            createVNode(_component_IftaLabel, { class: "mt-4" }, {
                              default: withCtx(() => [
                                createVNode(_component_Textarea, {
                                  id: field.id,
                                  modelValue: $data.formData[field.model],
                                  "onUpdate:modelValue": ($event) => $data.formData[field.model] = $event,
                                  rows: "5",
                                  cols: "30",
                                  style: { "resize": "none" },
                                  class: "w-full"
                                }, null, 8, ["id", "modelValue", "onUpdate:modelValue"]),
                                createVNode("label", {
                                  for: field.id
                                }, "Summary", 8, ["for"])
                              ]),
                              _: 2
                            }, 1024),
                            $data.errors[field.model] ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "text-red-500"
                            }, toDisplayString($data.errors[field.model]), 1)) : createCommentVNode("", true)
                          ]);
                        }), 128))
                      ]),
                      createVNode("div", { class: "flex pt-6 justify-between" }, [
                        createVNode(_component_Button, {
                          label: "Back",
                          severity: "secondary",
                          icon: "pi pi-arrow-left",
                          onClick: ($event) => activateCallback(2)
                        }, null, 8, ["onClick"]),
                        createVNode(_component_Button, {
                          label: "Submit",
                          icon: "pi pi-check",
                          iconPos: "right",
                          onClick: ($event) => $options.handleSubmit(activateCallback)
                        }, null, 8, ["onClick"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_StepPanel, { value: 4 }, {
                default: withCtx(({ activateCallback }, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="flex flex-col gap-4 mx-auto w-full max-w-lg min-h-[20rem]" data-v-e018aaaf${_scopeId3}><div class="text-center mt-4 mb-4 text-sm font-semibold" data-v-e018aaaf${_scopeId3}><div class="p-6 rounded-lg shadow-md" data-v-e018aaaf${_scopeId3}> Thank You! <p class="text-gray-700" data-v-e018aaaf${_scopeId3}> Your application will undergo a thorough review. Upon successful verification, you will gain access to: </p><ul class="list-disc text-left pl-5 text-gray-700 mt-3" data-v-e018aaaf${_scopeId3}><li data-v-e018aaaf${_scopeId3}><strong data-v-e018aaaf${_scopeId3}>Reseller Pricing</strong></li><li data-v-e018aaaf${_scopeId3}><strong data-v-e018aaaf${_scopeId3}>Comprehensive Marketing and Technical Resources</strong></li><li data-v-e018aaaf${_scopeId3}><strong data-v-e018aaaf${_scopeId3}>Product and Business Support</strong></li></ul><p class="text-gray-700 mt-4" data-v-e018aaaf${_scopeId3}> For any inquiries or further assistance, please do not hesitate to contact us: </p><div class="bg-white p-4 rounded-lg shadow mt-4" data-v-e018aaaf${_scopeId3}><p class="text-gray-800 font-semibold" data-v-e018aaaf${_scopeId3}> \u{1F4E7} Email: <a href="mailto:sdl@hikvisionkenya.com" class="text-blue-600 hover:underline" data-v-e018aaaf${_scopeId3}>sdl@hikvisionkenya.com</a></p><p class="text-gray-800 font-semibold" data-v-e018aaaf${_scopeId3}> \u{1F4DE} Phone: <a href="tel:+254727909060" class="text-blue-600 hover:underline" data-v-e018aaaf${_scopeId3}>+254 727 909 060</a></p></div><p class="text-gray-700 mt-6" data-v-e018aaaf${_scopeId3}> We look forward to the opportunity to collaborate with you. </p><hr class="my-4 border-gray-300" data-v-e018aaaf${_scopeId3}><p class="text-gray-800 font-bold" data-v-e018aaaf${_scopeId3}>Best regards,</p><p class="text-gray-700" data-v-e018aaaf${_scopeId3}> Secure Digital Limited | Hik Digital Mart Limited </p><p class="text-gray-700 font-semibold" data-v-e018aaaf${_scopeId3}> SDLKenya Online Shop Administration Department </p><div class="bg-white p-4 rounded-lg shadow mt-4" data-v-e018aaaf${_scopeId3}><p class="text-gray-800 font-semibold" data-v-e018aaaf${_scopeId3}> \u{1F4E7} Email: <a href="mailto:sdl@hikvisionkenya.com" class="text-blue-600 hover:underline" data-v-e018aaaf${_scopeId3}>sdl@hikvisionkenya.com</a></p><p class="text-gray-800 font-semibold" data-v-e018aaaf${_scopeId3}> \u{1F4DE} Phone: <a href="tel:+254727909060" class="text-blue-600 hover:underline" data-v-e018aaaf${_scopeId3}>+254 727 909 060</a></p></div></div></div></div><div class="flex pt-6 justify-between" data-v-e018aaaf${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_Button, {
                      label: "Back",
                      severity: "secondary",
                      icon: "pi pi-arrow-left",
                      onClick: ($event) => activateCallback(3)
                    }, null, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex flex-col gap-4 mx-auto w-full max-w-lg min-h-[20rem]" }, [
                        createVNode("div", { class: "text-center mt-4 mb-4 text-sm font-semibold" }, [
                          createVNode("div", { class: "p-6 rounded-lg shadow-md" }, [
                            createTextVNode(" Thank You! "),
                            createVNode("p", { class: "text-gray-700" }, " Your application will undergo a thorough review. Upon successful verification, you will gain access to: "),
                            createVNode("ul", { class: "list-disc text-left pl-5 text-gray-700 mt-3" }, [
                              createVNode("li", null, [
                                createVNode("strong", null, "Reseller Pricing")
                              ]),
                              createVNode("li", null, [
                                createVNode("strong", null, "Comprehensive Marketing and Technical Resources")
                              ]),
                              createVNode("li", null, [
                                createVNode("strong", null, "Product and Business Support")
                              ])
                            ]),
                            createVNode("p", { class: "text-gray-700 mt-4" }, " For any inquiries or further assistance, please do not hesitate to contact us: "),
                            createVNode("div", { class: "bg-white p-4 rounded-lg shadow mt-4" }, [
                              createVNode("p", { class: "text-gray-800 font-semibold" }, [
                                createTextVNode(" \u{1F4E7} Email: "),
                                createVNode("a", {
                                  href: "mailto:sdl@hikvisionkenya.com",
                                  class: "text-blue-600 hover:underline"
                                }, "sdl@hikvisionkenya.com")
                              ]),
                              createVNode("p", { class: "text-gray-800 font-semibold" }, [
                                createTextVNode(" \u{1F4DE} Phone: "),
                                createVNode("a", {
                                  href: "tel:+254727909060",
                                  class: "text-blue-600 hover:underline"
                                }, "+254 727 909 060")
                              ])
                            ]),
                            createVNode("p", { class: "text-gray-700 mt-6" }, " We look forward to the opportunity to collaborate with you. "),
                            createVNode("hr", { class: "my-4 border-gray-300" }),
                            createVNode("p", { class: "text-gray-800 font-bold" }, "Best regards,"),
                            createVNode("p", { class: "text-gray-700" }, " Secure Digital Limited | Hik Digital Mart Limited "),
                            createVNode("p", { class: "text-gray-700 font-semibold" }, " SDLKenya Online Shop Administration Department "),
                            createVNode("div", { class: "bg-white p-4 rounded-lg shadow mt-4" }, [
                              createVNode("p", { class: "text-gray-800 font-semibold" }, [
                                createTextVNode(" \u{1F4E7} Email: "),
                                createVNode("a", {
                                  href: "mailto:sdl@hikvisionkenya.com",
                                  class: "text-blue-600 hover:underline"
                                }, "sdl@hikvisionkenya.com")
                              ]),
                              createVNode("p", { class: "text-gray-800 font-semibold" }, [
                                createTextVNode(" \u{1F4DE} Phone: "),
                                createVNode("a", {
                                  href: "tel:+254727909060",
                                  class: "text-blue-600 hover:underline"
                                }, "+254 727 909 060")
                              ])
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "flex pt-6 justify-between" }, [
                        createVNode(_component_Button, {
                          label: "Back",
                          severity: "secondary",
                          icon: "pi pi-arrow-left",
                          onClick: ($event) => activateCallback(3)
                        }, null, 8, ["onClick"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_StepPanel, { value: 1 }, {
                  default: withCtx(({ activateCallback }) => [
                    createVNode("div", {
                      class: "flex flex-col gap-4 mx-auto",
                      style: { "min-width": "40vw" }
                    }, [
                      createVNode("div", { class: "text-center mt-4 mb-4 text-xl font-semibold" }, " Section 1: Business Identification "),
                      createVNode("div", { class: "flex gap-4" }, [
                        createVNode("div", { class: "field w-1/2" }, [
                          createVNode("label", {
                            for: "firstName",
                            class: "font-bold"
                          }, "First Name"),
                          createVNode(_component_InputText, {
                            id: "firstName",
                            modelValue: $data.firstName,
                            "onUpdate:modelValue": ($event) => $data.firstName = $event,
                            type: "text",
                            placeholder: "Enter first name",
                            class: "w-full"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          $data.errors.firstName ? (openBlock(), createBlock("small", {
                            key: 0,
                            class: "text-red-500"
                          }, toDisplayString($data.errors.firstName), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "field w-1/2" }, [
                          createVNode("label", {
                            for: "lastName",
                            class: "font-bold"
                          }, "Last Name"),
                          createVNode(_component_InputText, {
                            id: "lastName",
                            modelValue: $data.lastName,
                            "onUpdate:modelValue": ($event) => $data.lastName = $event,
                            type: "text",
                            placeholder: "Enter last name",
                            class: "w-full"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          $data.errors.lastName ? (openBlock(), createBlock("small", {
                            key: 0,
                            class: "text-red-500"
                          }, toDisplayString($data.errors.lastName), 1)) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "flex gap-4" }, [
                        createVNode("div", { class: "field w-1/2" }, [
                          createVNode("label", {
                            for: "phoneNumber",
                            class: "font-bold"
                          }, "Phone Number"),
                          createVNode(_component_InputText, {
                            id: "phoneNumber",
                            modelValue: $data.phoneNumber,
                            "onUpdate:modelValue": ($event) => $data.phoneNumber = $event,
                            type: "tel",
                            placeholder: "Enter phone number",
                            class: "w-full"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          $data.errors.phoneNumber ? (openBlock(), createBlock("small", {
                            key: 0,
                            class: "text-red-500"
                          }, toDisplayString($data.errors.phoneNumber), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "field w-1/2" }, [
                          createVNode("label", {
                            for: "email",
                            class: "font-bold"
                          }, "Email Address"),
                          createVNode(_component_InputText, {
                            id: "email",
                            modelValue: $data.email,
                            "onUpdate:modelValue": ($event) => $data.email = $event,
                            type: "email",
                            placeholder: "Enter email address",
                            class: "w-full"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          $data.errors.email ? (openBlock(), createBlock("small", {
                            key: 0,
                            class: "text-red-500"
                          }, toDisplayString($data.errors.email), 1)) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "flex gap-4" }, [
                        createVNode("div", { class: "field w-1/2" }, [
                          createVNode("label", {
                            for: "businessName",
                            class: "font-bold"
                          }, "Business/Company Name"),
                          createVNode(_component_InputText, {
                            id: "businessName",
                            modelValue: $data.businessName,
                            "onUpdate:modelValue": ($event) => $data.businessName = $event,
                            type: "text",
                            placeholder: "Enter business name",
                            class: "w-full"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          $data.errors.businessName ? (openBlock(), createBlock("small", {
                            key: 0,
                            class: "text-red-500"
                          }, toDisplayString($data.errors.businessName), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "field w-1/2" }, [
                          createVNode("label", {
                            for: "location",
                            class: "font-bold"
                          }, "Business Location"),
                          createVNode(_component_InputText, {
                            id: "location",
                            modelValue: $data.location,
                            "onUpdate:modelValue": ($event) => $data.location = $event,
                            type: "text",
                            placeholder: "City, State, Country",
                            class: "w-full"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          $data.errors.location ? (openBlock(), createBlock("small", {
                            key: 0,
                            class: "text-red-500"
                          }, toDisplayString($data.errors.location), 1)) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "flex flex-col gap-4" }, [
                        createVNode("div", { class: "font-bold mb-2" }, "Business Type"),
                        createVNode("div", { class: "flex flex-wrap gap-4" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList($data.businessCategories, (category) => {
                            return openBlock(), createBlock("div", {
                              key: category.key,
                              class: "flex items-center gap-2"
                            }, [
                              createVNode(_component_RadioButton, {
                                modelValue: $data.businessType,
                                "onUpdate:modelValue": ($event) => $data.businessType = $event,
                                inputId: category.key,
                                name: "businessType",
                                value: category.key
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                              createVNode("label", {
                                for: category.key
                              }, toDisplayString(category.name), 9, ["for"])
                            ]);
                          }), 128)),
                          $data.errors.businessType ? (openBlock(), createBlock("small", {
                            key: 0,
                            class: "text-red-500"
                          }, toDisplayString($data.errors.businessType), 1)) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("div", { class: "font-bold mb-2" }, "Years of Experience"),
                        createVNode("div", { class: "flex flex-wrap gap-4" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList($data.yearExperiences, (category) => {
                            return openBlock(), createBlock("div", {
                              key: category.key,
                              class: "flex items-center gap-2"
                            }, [
                              createVNode(_component_RadioButton, {
                                modelValue: $data.experienceYears,
                                "onUpdate:modelValue": ($event) => $data.experienceYears = $event,
                                inputId: category.key,
                                name: "experienceYears",
                                value: category.key
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                              createVNode("label", {
                                for: category.key
                              }, toDisplayString(category.name), 9, ["for"])
                            ]);
                          }), 128)),
                          $data.errors.experienceYears ? (openBlock(), createBlock("small", {
                            key: 0,
                            class: "text-red-500"
                          }, toDisplayString($data.errors.experienceYears), 1)) : createCommentVNode("", true)
                        ])
                      ])
                    ]),
                    createVNode("div", {
                      class: "flex pt-6 justify-end",
                      style: { "max-width": "800px", "margin": "0 auto" }
                    }, [
                      createVNode(_component_Button, {
                        label: "Next",
                        icon: "pi pi-arrow-right",
                        iconPos: "right",
                        onClick: ($event) => $options.validateAndProceed(activateCallback, 1)
                      }, null, 8, ["onClick"])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_StepPanel, {
                  value: 2,
                  style: { "min-width": "40vw" }
                }, {
                  default: withCtx(({ activateCallback }) => [
                    createVNode("div", { class: "flex flex-col gap-4" }, [
                      createVNode("div", { class: "text-center mt-4 mb-4 text-xl font-semibold" }, " Section 2: Technical Experience "),
                      createVNode("div", null, [
                        createVNode("label", { class: "font-bold py-5" }, " Which of the following areas do you have experience with? "),
                        (openBlock(true), createBlock(Fragment, null, renderList($data.experienceAreasList, (category) => {
                          return openBlock(), createBlock("div", {
                            key: category.key,
                            class: "flex items-center gap-2"
                          }, [
                            createVNode(_component_Checkbox, {
                              modelValue: $data.experienceAreas,
                              "onUpdate:modelValue": ($event) => $data.experienceAreas = $event,
                              inputId: category.key,
                              name: "category",
                              value: category.name
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                            createVNode("label", {
                              for: category.key
                            }, toDisplayString(category.name), 9, ["for"])
                          ]);
                        }), 128)),
                        $data.experienceAreasError ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-red-500"
                        }, " Please select at least one area of experience. ")) : createCommentVNode("", true)
                      ]),
                      createVNode("div", null, [
                        createVNode("label", { class: "font-bold pb-3" }, " Which brands have you primarily worked with? "),
                        (openBlock(true), createBlock(Fragment, null, renderList($data.brandsWorkedWithList, (category) => {
                          return openBlock(), createBlock("div", {
                            key: category.key,
                            class: "flex items-center gap-2"
                          }, [
                            createVNode(_component_Checkbox, {
                              modelValue: $data.brandsWorkedWith,
                              "onUpdate:modelValue": ($event) => $data.brandsWorkedWith = $event,
                              inputId: category.key,
                              name: "category",
                              value: category.key
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                            createVNode("label", {
                              for: category.key
                            }, toDisplayString(category.name), 9, ["for"])
                          ]);
                        }), 128)),
                        $data.brandsWorkedWith.includes("Other") ? (openBlock(), createBlock(_component_InputText, {
                          key: 0,
                          id: "purchaseSource",
                          modelValue: $data.purchaseSource,
                          "onUpdate:modelValue": ($event) => $data.purchaseSource = $event,
                          type: "text",
                          placeholder: "Please Specify ...",
                          class: "w-full mt-4"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                        $data.brandsWorkedWithError ? (openBlock(), createBlock("p", {
                          key: 1,
                          class: "text-red-500"
                        }, " Please select at least one brand. ")) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "field" }, [
                        createVNode("label", { class: "font-bold pb-3" }, " Do you have experience integrating security systems into larger solutions? "),
                        (openBlock(true), createBlock(Fragment, null, renderList($data.integrationExperienceList, (category) => {
                          return openBlock(), createBlock("div", {
                            key: category.key,
                            class: "flex items-center gap-2"
                          }, [
                            createVNode(_component_RadioButton, {
                              modelValue: $data.integrationExperience,
                              "onUpdate:modelValue": ($event) => $data.integrationExperience = $event,
                              inputId: category.key,
                              name: "integrationExperience",
                              value: category.name
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                            createVNode("label", {
                              for: category.key
                            }, toDisplayString(category.name), 9, ["for"])
                          ]);
                        }), 128)),
                        $data.integrationExperienceError ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-red-500"
                        }, " Please select an option. ")) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "field" }, [
                        createVNode("label", { class: "font-bold pb-3" }, " Are you familiar with Hikvision product certifications and installation standards? "),
                        (openBlock(true), createBlock(Fragment, null, renderList($data.familiarWithStandards, (category) => {
                          return openBlock(), createBlock("div", {
                            key: category.key,
                            class: "flex items-center gap-2"
                          }, [
                            createVNode(_component_RadioButton, {
                              modelValue: $data.familiarWithStandard,
                              "onUpdate:modelValue": ($event) => $data.familiarWithStandard = $event,
                              inputId: category.key,
                              name: "familiarWithStandard",
                              value: category.name
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                            createVNode("label", {
                              for: category.key
                            }, toDisplayString(category.name), 9, ["for"])
                          ]);
                        }), 128)),
                        $data.familiarWithStandardError ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-red-500"
                        }, " Please select an option. ")) : createCommentVNode("", true)
                      ])
                    ]),
                    createVNode("div", { class: "flex pt-6 justify-between" }, [
                      createVNode(_component_Button, {
                        label: "Back",
                        severity: "secondary",
                        icon: "pi pi-arrow-left",
                        onClick: ($event) => activateCallback(1)
                      }, null, 8, ["onClick"]),
                      createVNode(_component_Button, {
                        label: "Next",
                        icon: "pi pi-arrow-right",
                        iconPos: "right",
                        onClick: ($event) => $options.validateAndProceed(activateCallback, 2)
                      }, null, 8, ["onClick"])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_StepPanel, {
                  value: 3,
                  style: { "min-width": "40vw" }
                }, {
                  default: withCtx(({ activateCallback }) => [
                    createVNode("div", { class: "flex flex-col gap-4" }, [
                      createVNode("div", { class: "text-center mt-4 mb-4 text-xl font-semibold" }, " Section 3: Technical Questions "),
                      createVNode("div", { class: "field" }, [
                        createVNode("label", {
                          for: "purchaseSource",
                          class: "font-bold pb-3"
                        }, " Where do you currently purchase your security products? (Please select all that apply and provide details for each category) "),
                        (openBlock(true), createBlock(Fragment, null, renderList($data.wherePurchase, (category) => {
                          return openBlock(), createBlock("div", {
                            key: category.key,
                            class: "flex items-center gap-2"
                          }, [
                            createVNode(_component_Checkbox, {
                              modelValue: $data.purchaseSource,
                              "onUpdate:modelValue": ($event) => $data.purchaseSource = $event,
                              inputId: category.key,
                              name: "purchaseSource",
                              value: category.name
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                            createVNode("label", {
                              for: category.key
                            }, toDisplayString(category.name), 9, ["for"])
                          ]);
                        }), 128)),
                        $data.purchaseError ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-red-500"
                        }, " Please select an option. ")) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "field" }, [
                        createVNode("label", { class: "font-bold pb-3" }, " Do you currently purchase Hikvision products? "),
                        (openBlock(true), createBlock(Fragment, null, renderList($data.options, (category) => {
                          return openBlock(), createBlock("div", {
                            key: category.key,
                            class: "flex items-center gap-2"
                          }, [
                            createVNode(_component_RadioButton, {
                              modelValue: $data.purchaseHikvision,
                              "onUpdate:modelValue": ($event) => $data.purchaseHikvision = $event,
                              inputId: category.key,
                              name: "purchaseHikvision",
                              value: category.name
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                            createVNode("label", {
                              for: category.key
                            }, toDisplayString(category.name), 9, ["for"])
                          ]);
                        }), 128)),
                        $data.currentlyPurchaseError ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-red-500"
                        }, " Please select an option. ")) : createCommentVNode("", true)
                      ]),
                      (openBlock(true), createBlock(Fragment, null, renderList($data.textareaFields, (field) => {
                        return openBlock(), createBlock("div", {
                          key: field.id,
                          class: "field"
                        }, [
                          createVNode("label", { class: "font-bold pb-3" }, [
                            createVNode("span", {
                              innerHTML: field.label
                            }, null, 8, ["innerHTML"])
                          ]),
                          createVNode(_component_IftaLabel, { class: "mt-4" }, {
                            default: withCtx(() => [
                              createVNode(_component_Textarea, {
                                id: field.id,
                                modelValue: $data.formData[field.model],
                                "onUpdate:modelValue": ($event) => $data.formData[field.model] = $event,
                                rows: "5",
                                cols: "30",
                                style: { "resize": "none" },
                                class: "w-full"
                              }, null, 8, ["id", "modelValue", "onUpdate:modelValue"]),
                              createVNode("label", {
                                for: field.id
                              }, "Summary", 8, ["for"])
                            ]),
                            _: 2
                          }, 1024),
                          $data.errors[field.model] ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-red-500"
                          }, toDisplayString($data.errors[field.model]), 1)) : createCommentVNode("", true)
                        ]);
                      }), 128))
                    ]),
                    createVNode("div", { class: "flex pt-6 justify-between" }, [
                      createVNode(_component_Button, {
                        label: "Back",
                        severity: "secondary",
                        icon: "pi pi-arrow-left",
                        onClick: ($event) => activateCallback(2)
                      }, null, 8, ["onClick"]),
                      createVNode(_component_Button, {
                        label: "Submit",
                        icon: "pi pi-check",
                        iconPos: "right",
                        onClick: ($event) => $options.handleSubmit(activateCallback)
                      }, null, 8, ["onClick"])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_StepPanel, { value: 4 }, {
                  default: withCtx(({ activateCallback }) => [
                    createVNode("div", { class: "flex flex-col gap-4 mx-auto w-full max-w-lg min-h-[20rem]" }, [
                      createVNode("div", { class: "text-center mt-4 mb-4 text-sm font-semibold" }, [
                        createVNode("div", { class: "p-6 rounded-lg shadow-md" }, [
                          createTextVNode(" Thank You! "),
                          createVNode("p", { class: "text-gray-700" }, " Your application will undergo a thorough review. Upon successful verification, you will gain access to: "),
                          createVNode("ul", { class: "list-disc text-left pl-5 text-gray-700 mt-3" }, [
                            createVNode("li", null, [
                              createVNode("strong", null, "Reseller Pricing")
                            ]),
                            createVNode("li", null, [
                              createVNode("strong", null, "Comprehensive Marketing and Technical Resources")
                            ]),
                            createVNode("li", null, [
                              createVNode("strong", null, "Product and Business Support")
                            ])
                          ]),
                          createVNode("p", { class: "text-gray-700 mt-4" }, " For any inquiries or further assistance, please do not hesitate to contact us: "),
                          createVNode("div", { class: "bg-white p-4 rounded-lg shadow mt-4" }, [
                            createVNode("p", { class: "text-gray-800 font-semibold" }, [
                              createTextVNode(" \u{1F4E7} Email: "),
                              createVNode("a", {
                                href: "mailto:sdl@hikvisionkenya.com",
                                class: "text-blue-600 hover:underline"
                              }, "sdl@hikvisionkenya.com")
                            ]),
                            createVNode("p", { class: "text-gray-800 font-semibold" }, [
                              createTextVNode(" \u{1F4DE} Phone: "),
                              createVNode("a", {
                                href: "tel:+254727909060",
                                class: "text-blue-600 hover:underline"
                              }, "+254 727 909 060")
                            ])
                          ]),
                          createVNode("p", { class: "text-gray-700 mt-6" }, " We look forward to the opportunity to collaborate with you. "),
                          createVNode("hr", { class: "my-4 border-gray-300" }),
                          createVNode("p", { class: "text-gray-800 font-bold" }, "Best regards,"),
                          createVNode("p", { class: "text-gray-700" }, " Secure Digital Limited | Hik Digital Mart Limited "),
                          createVNode("p", { class: "text-gray-700 font-semibold" }, " SDLKenya Online Shop Administration Department "),
                          createVNode("div", { class: "bg-white p-4 rounded-lg shadow mt-4" }, [
                            createVNode("p", { class: "text-gray-800 font-semibold" }, [
                              createTextVNode(" \u{1F4E7} Email: "),
                              createVNode("a", {
                                href: "mailto:sdl@hikvisionkenya.com",
                                class: "text-blue-600 hover:underline"
                              }, "sdl@hikvisionkenya.com")
                            ]),
                            createVNode("p", { class: "text-gray-800 font-semibold" }, [
                              createTextVNode(" \u{1F4DE} Phone: "),
                              createVNode("a", {
                                href: "tel:+254727909060",
                                class: "text-blue-600 hover:underline"
                              }, "+254 727 909 060")
                            ])
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "flex pt-6 justify-between" }, [
                      createVNode(_component_Button, {
                        label: "Back",
                        severity: "secondary",
                        icon: "pi pi-arrow-left",
                        onClick: ($event) => activateCallback(3)
                      }, null, 8, ["onClick"])
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_StepList, null, {
            default: withCtx(() => [
              createVNode(_component_Step, {
                asChild: "",
                value: 1
              }, {
                default: withCtx(({ activateCallback, value, a11yAttrs }) => [
                  createVNode("div", mergeProps({ class: "flex flex-row flex-auto gap-2" }, a11yAttrs.root), [
                    createVNode("button", mergeProps({
                      class: "bg-transparent border-0 inline-flex flex-col gap-2",
                      onClick: activateCallback
                    }, a11yAttrs.header), [
                      createVNode("span", {
                        class: [
                          "rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",
                          {
                            "bg-primary text-primary-contrast border-primary": value <= $data.activeStep,
                            "border-surface-200 dark:border-surface-700": value > $data.activeStep
                          }
                        ]
                      }, [
                        createVNode("i", { class: "pi pi-building" })
                      ], 2)
                    ], 16, ["onClick"]),
                    createVNode(_component_Divider)
                  ], 16)
                ]),
                _: 1
              }),
              createVNode(_component_Step, {
                asChild: "",
                value: 2
              }, {
                default: withCtx(({ activateCallback, value, a11yAttrs }) => [
                  createVNode("div", mergeProps({ class: "flex flex-row flex-auto gap-2 pl-2" }, a11yAttrs.root), [
                    createVNode("button", mergeProps({
                      class: "bg-transparent border-0 inline-flex flex-col gap-2",
                      onClick: activateCallback
                    }, a11yAttrs.header), [
                      createVNode("span", {
                        class: [
                          "rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",
                          {
                            "bg-primary text-primary-contrast border-primary": value <= $data.activeStep,
                            "border-surface-200 dark:border-surface-700": value > $data.activeStep
                          }
                        ]
                      }, [
                        createVNode("i", { class: "pi pi-cog" })
                      ], 2)
                    ], 16, ["onClick"]),
                    createVNode(_component_Divider)
                  ], 16)
                ]),
                _: 1
              }),
              createVNode(_component_Step, {
                asChild: "",
                value: 3
              }, {
                default: withCtx(({ activateCallback, value, a11yAttrs }) => [
                  createVNode("div", mergeProps({ class: "flex flex-row pl-2" }, a11yAttrs.root), [
                    createVNode("button", mergeProps({
                      class: "bg-transparent border-0 inline-flex flex-col gap-2",
                      onClick: activateCallback
                    }, a11yAttrs.header), [
                      createVNode("span", {
                        class: [
                          "rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",
                          {
                            "bg-primary text-primary-contrast border-primary": value <= $data.activeStep,
                            "border-surface-200 dark:border-surface-700": value > $data.activeStep
                          }
                        ]
                      }, [
                        createVNode("i", { class: "pi pi-question-circle" })
                      ], 2)
                    ], 16, ["onClick"]),
                    createVNode(_component_Divider)
                  ], 16)
                ]),
                _: 1
              }),
              createVNode(_component_Step, {
                asChild: "",
                value: 4
              }, {
                default: withCtx(({ activateCallback, value, a11yAttrs }) => [
                  createVNode("div", mergeProps({ class: "flex flex-row pl-2" }, a11yAttrs.root), [
                    createVNode("button", mergeProps({
                      class: "bg-transparent border-0 inline-flex flex-col gap-2",
                      onClick: activateCallback
                    }, a11yAttrs.header), [
                      createVNode("span", {
                        class: [
                          "rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",
                          {
                            "bg-primary text-primary-contrast border-primary": value <= $data.activeStep,
                            "border-surface-200 dark:border-surface-700": value > $data.activeStep
                          }
                        ]
                      }, [
                        createVNode("i", { class: "pi pi-check-circle" })
                      ], 2)
                    ], 16, ["onClick"])
                  ], 16)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_StepPanels, null, {
            default: withCtx(() => [
              createVNode(_component_StepPanel, { value: 1 }, {
                default: withCtx(({ activateCallback }) => [
                  createVNode("div", {
                    class: "flex flex-col gap-4 mx-auto",
                    style: { "min-width": "40vw" }
                  }, [
                    createVNode("div", { class: "text-center mt-4 mb-4 text-xl font-semibold" }, " Section 1: Business Identification "),
                    createVNode("div", { class: "flex gap-4" }, [
                      createVNode("div", { class: "field w-1/2" }, [
                        createVNode("label", {
                          for: "firstName",
                          class: "font-bold"
                        }, "First Name"),
                        createVNode(_component_InputText, {
                          id: "firstName",
                          modelValue: $data.firstName,
                          "onUpdate:modelValue": ($event) => $data.firstName = $event,
                          type: "text",
                          placeholder: "Enter first name",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        $data.errors.firstName ? (openBlock(), createBlock("small", {
                          key: 0,
                          class: "text-red-500"
                        }, toDisplayString($data.errors.firstName), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "field w-1/2" }, [
                        createVNode("label", {
                          for: "lastName",
                          class: "font-bold"
                        }, "Last Name"),
                        createVNode(_component_InputText, {
                          id: "lastName",
                          modelValue: $data.lastName,
                          "onUpdate:modelValue": ($event) => $data.lastName = $event,
                          type: "text",
                          placeholder: "Enter last name",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        $data.errors.lastName ? (openBlock(), createBlock("small", {
                          key: 0,
                          class: "text-red-500"
                        }, toDisplayString($data.errors.lastName), 1)) : createCommentVNode("", true)
                      ])
                    ]),
                    createVNode("div", { class: "flex gap-4" }, [
                      createVNode("div", { class: "field w-1/2" }, [
                        createVNode("label", {
                          for: "phoneNumber",
                          class: "font-bold"
                        }, "Phone Number"),
                        createVNode(_component_InputText, {
                          id: "phoneNumber",
                          modelValue: $data.phoneNumber,
                          "onUpdate:modelValue": ($event) => $data.phoneNumber = $event,
                          type: "tel",
                          placeholder: "Enter phone number",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        $data.errors.phoneNumber ? (openBlock(), createBlock("small", {
                          key: 0,
                          class: "text-red-500"
                        }, toDisplayString($data.errors.phoneNumber), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "field w-1/2" }, [
                        createVNode("label", {
                          for: "email",
                          class: "font-bold"
                        }, "Email Address"),
                        createVNode(_component_InputText, {
                          id: "email",
                          modelValue: $data.email,
                          "onUpdate:modelValue": ($event) => $data.email = $event,
                          type: "email",
                          placeholder: "Enter email address",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        $data.errors.email ? (openBlock(), createBlock("small", {
                          key: 0,
                          class: "text-red-500"
                        }, toDisplayString($data.errors.email), 1)) : createCommentVNode("", true)
                      ])
                    ]),
                    createVNode("div", { class: "flex gap-4" }, [
                      createVNode("div", { class: "field w-1/2" }, [
                        createVNode("label", {
                          for: "businessName",
                          class: "font-bold"
                        }, "Business/Company Name"),
                        createVNode(_component_InputText, {
                          id: "businessName",
                          modelValue: $data.businessName,
                          "onUpdate:modelValue": ($event) => $data.businessName = $event,
                          type: "text",
                          placeholder: "Enter business name",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        $data.errors.businessName ? (openBlock(), createBlock("small", {
                          key: 0,
                          class: "text-red-500"
                        }, toDisplayString($data.errors.businessName), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "field w-1/2" }, [
                        createVNode("label", {
                          for: "location",
                          class: "font-bold"
                        }, "Business Location"),
                        createVNode(_component_InputText, {
                          id: "location",
                          modelValue: $data.location,
                          "onUpdate:modelValue": ($event) => $data.location = $event,
                          type: "text",
                          placeholder: "City, State, Country",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        $data.errors.location ? (openBlock(), createBlock("small", {
                          key: 0,
                          class: "text-red-500"
                        }, toDisplayString($data.errors.location), 1)) : createCommentVNode("", true)
                      ])
                    ]),
                    createVNode("div", { class: "flex flex-col gap-4" }, [
                      createVNode("div", { class: "font-bold mb-2" }, "Business Type"),
                      createVNode("div", { class: "flex flex-wrap gap-4" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList($data.businessCategories, (category) => {
                          return openBlock(), createBlock("div", {
                            key: category.key,
                            class: "flex items-center gap-2"
                          }, [
                            createVNode(_component_RadioButton, {
                              modelValue: $data.businessType,
                              "onUpdate:modelValue": ($event) => $data.businessType = $event,
                              inputId: category.key,
                              name: "businessType",
                              value: category.key
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                            createVNode("label", {
                              for: category.key
                            }, toDisplayString(category.name), 9, ["for"])
                          ]);
                        }), 128)),
                        $data.errors.businessType ? (openBlock(), createBlock("small", {
                          key: 0,
                          class: "text-red-500"
                        }, toDisplayString($data.errors.businessType), 1)) : createCommentVNode("", true)
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode("div", { class: "font-bold mb-2" }, "Years of Experience"),
                      createVNode("div", { class: "flex flex-wrap gap-4" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList($data.yearExperiences, (category) => {
                          return openBlock(), createBlock("div", {
                            key: category.key,
                            class: "flex items-center gap-2"
                          }, [
                            createVNode(_component_RadioButton, {
                              modelValue: $data.experienceYears,
                              "onUpdate:modelValue": ($event) => $data.experienceYears = $event,
                              inputId: category.key,
                              name: "experienceYears",
                              value: category.key
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                            createVNode("label", {
                              for: category.key
                            }, toDisplayString(category.name), 9, ["for"])
                          ]);
                        }), 128)),
                        $data.errors.experienceYears ? (openBlock(), createBlock("small", {
                          key: 0,
                          class: "text-red-500"
                        }, toDisplayString($data.errors.experienceYears), 1)) : createCommentVNode("", true)
                      ])
                    ])
                  ]),
                  createVNode("div", {
                    class: "flex pt-6 justify-end",
                    style: { "max-width": "800px", "margin": "0 auto" }
                  }, [
                    createVNode(_component_Button, {
                      label: "Next",
                      icon: "pi pi-arrow-right",
                      iconPos: "right",
                      onClick: ($event) => $options.validateAndProceed(activateCallback, 1)
                    }, null, 8, ["onClick"])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_StepPanel, {
                value: 2,
                style: { "min-width": "40vw" }
              }, {
                default: withCtx(({ activateCallback }) => [
                  createVNode("div", { class: "flex flex-col gap-4" }, [
                    createVNode("div", { class: "text-center mt-4 mb-4 text-xl font-semibold" }, " Section 2: Technical Experience "),
                    createVNode("div", null, [
                      createVNode("label", { class: "font-bold py-5" }, " Which of the following areas do you have experience with? "),
                      (openBlock(true), createBlock(Fragment, null, renderList($data.experienceAreasList, (category) => {
                        return openBlock(), createBlock("div", {
                          key: category.key,
                          class: "flex items-center gap-2"
                        }, [
                          createVNode(_component_Checkbox, {
                            modelValue: $data.experienceAreas,
                            "onUpdate:modelValue": ($event) => $data.experienceAreas = $event,
                            inputId: category.key,
                            name: "category",
                            value: category.name
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                          createVNode("label", {
                            for: category.key
                          }, toDisplayString(category.name), 9, ["for"])
                        ]);
                      }), 128)),
                      $data.experienceAreasError ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "text-red-500"
                      }, " Please select at least one area of experience. ")) : createCommentVNode("", true)
                    ]),
                    createVNode("div", null, [
                      createVNode("label", { class: "font-bold pb-3" }, " Which brands have you primarily worked with? "),
                      (openBlock(true), createBlock(Fragment, null, renderList($data.brandsWorkedWithList, (category) => {
                        return openBlock(), createBlock("div", {
                          key: category.key,
                          class: "flex items-center gap-2"
                        }, [
                          createVNode(_component_Checkbox, {
                            modelValue: $data.brandsWorkedWith,
                            "onUpdate:modelValue": ($event) => $data.brandsWorkedWith = $event,
                            inputId: category.key,
                            name: "category",
                            value: category.key
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                          createVNode("label", {
                            for: category.key
                          }, toDisplayString(category.name), 9, ["for"])
                        ]);
                      }), 128)),
                      $data.brandsWorkedWith.includes("Other") ? (openBlock(), createBlock(_component_InputText, {
                        key: 0,
                        id: "purchaseSource",
                        modelValue: $data.purchaseSource,
                        "onUpdate:modelValue": ($event) => $data.purchaseSource = $event,
                        type: "text",
                        placeholder: "Please Specify ...",
                        class: "w-full mt-4"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                      $data.brandsWorkedWithError ? (openBlock(), createBlock("p", {
                        key: 1,
                        class: "text-red-500"
                      }, " Please select at least one brand. ")) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "field" }, [
                      createVNode("label", { class: "font-bold pb-3" }, " Do you have experience integrating security systems into larger solutions? "),
                      (openBlock(true), createBlock(Fragment, null, renderList($data.integrationExperienceList, (category) => {
                        return openBlock(), createBlock("div", {
                          key: category.key,
                          class: "flex items-center gap-2"
                        }, [
                          createVNode(_component_RadioButton, {
                            modelValue: $data.integrationExperience,
                            "onUpdate:modelValue": ($event) => $data.integrationExperience = $event,
                            inputId: category.key,
                            name: "integrationExperience",
                            value: category.name
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                          createVNode("label", {
                            for: category.key
                          }, toDisplayString(category.name), 9, ["for"])
                        ]);
                      }), 128)),
                      $data.integrationExperienceError ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "text-red-500"
                      }, " Please select an option. ")) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "field" }, [
                      createVNode("label", { class: "font-bold pb-3" }, " Are you familiar with Hikvision product certifications and installation standards? "),
                      (openBlock(true), createBlock(Fragment, null, renderList($data.familiarWithStandards, (category) => {
                        return openBlock(), createBlock("div", {
                          key: category.key,
                          class: "flex items-center gap-2"
                        }, [
                          createVNode(_component_RadioButton, {
                            modelValue: $data.familiarWithStandard,
                            "onUpdate:modelValue": ($event) => $data.familiarWithStandard = $event,
                            inputId: category.key,
                            name: "familiarWithStandard",
                            value: category.name
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                          createVNode("label", {
                            for: category.key
                          }, toDisplayString(category.name), 9, ["for"])
                        ]);
                      }), 128)),
                      $data.familiarWithStandardError ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "text-red-500"
                      }, " Please select an option. ")) : createCommentVNode("", true)
                    ])
                  ]),
                  createVNode("div", { class: "flex pt-6 justify-between" }, [
                    createVNode(_component_Button, {
                      label: "Back",
                      severity: "secondary",
                      icon: "pi pi-arrow-left",
                      onClick: ($event) => activateCallback(1)
                    }, null, 8, ["onClick"]),
                    createVNode(_component_Button, {
                      label: "Next",
                      icon: "pi pi-arrow-right",
                      iconPos: "right",
                      onClick: ($event) => $options.validateAndProceed(activateCallback, 2)
                    }, null, 8, ["onClick"])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_StepPanel, {
                value: 3,
                style: { "min-width": "40vw" }
              }, {
                default: withCtx(({ activateCallback }) => [
                  createVNode("div", { class: "flex flex-col gap-4" }, [
                    createVNode("div", { class: "text-center mt-4 mb-4 text-xl font-semibold" }, " Section 3: Technical Questions "),
                    createVNode("div", { class: "field" }, [
                      createVNode("label", {
                        for: "purchaseSource",
                        class: "font-bold pb-3"
                      }, " Where do you currently purchase your security products? (Please select all that apply and provide details for each category) "),
                      (openBlock(true), createBlock(Fragment, null, renderList($data.wherePurchase, (category) => {
                        return openBlock(), createBlock("div", {
                          key: category.key,
                          class: "flex items-center gap-2"
                        }, [
                          createVNode(_component_Checkbox, {
                            modelValue: $data.purchaseSource,
                            "onUpdate:modelValue": ($event) => $data.purchaseSource = $event,
                            inputId: category.key,
                            name: "purchaseSource",
                            value: category.name
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                          createVNode("label", {
                            for: category.key
                          }, toDisplayString(category.name), 9, ["for"])
                        ]);
                      }), 128)),
                      $data.purchaseError ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "text-red-500"
                      }, " Please select an option. ")) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "field" }, [
                      createVNode("label", { class: "font-bold pb-3" }, " Do you currently purchase Hikvision products? "),
                      (openBlock(true), createBlock(Fragment, null, renderList($data.options, (category) => {
                        return openBlock(), createBlock("div", {
                          key: category.key,
                          class: "flex items-center gap-2"
                        }, [
                          createVNode(_component_RadioButton, {
                            modelValue: $data.purchaseHikvision,
                            "onUpdate:modelValue": ($event) => $data.purchaseHikvision = $event,
                            inputId: category.key,
                            name: "purchaseHikvision",
                            value: category.name
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                          createVNode("label", {
                            for: category.key
                          }, toDisplayString(category.name), 9, ["for"])
                        ]);
                      }), 128)),
                      $data.currentlyPurchaseError ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "text-red-500"
                      }, " Please select an option. ")) : createCommentVNode("", true)
                    ]),
                    (openBlock(true), createBlock(Fragment, null, renderList($data.textareaFields, (field) => {
                      return openBlock(), createBlock("div", {
                        key: field.id,
                        class: "field"
                      }, [
                        createVNode("label", { class: "font-bold pb-3" }, [
                          createVNode("span", {
                            innerHTML: field.label
                          }, null, 8, ["innerHTML"])
                        ]),
                        createVNode(_component_IftaLabel, { class: "mt-4" }, {
                          default: withCtx(() => [
                            createVNode(_component_Textarea, {
                              id: field.id,
                              modelValue: $data.formData[field.model],
                              "onUpdate:modelValue": ($event) => $data.formData[field.model] = $event,
                              rows: "5",
                              cols: "30",
                              style: { "resize": "none" },
                              class: "w-full"
                            }, null, 8, ["id", "modelValue", "onUpdate:modelValue"]),
                            createVNode("label", {
                              for: field.id
                            }, "Summary", 8, ["for"])
                          ]),
                          _: 2
                        }, 1024),
                        $data.errors[field.model] ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-red-500"
                        }, toDisplayString($data.errors[field.model]), 1)) : createCommentVNode("", true)
                      ]);
                    }), 128))
                  ]),
                  createVNode("div", { class: "flex pt-6 justify-between" }, [
                    createVNode(_component_Button, {
                      label: "Back",
                      severity: "secondary",
                      icon: "pi pi-arrow-left",
                      onClick: ($event) => activateCallback(2)
                    }, null, 8, ["onClick"]),
                    createVNode(_component_Button, {
                      label: "Submit",
                      icon: "pi pi-check",
                      iconPos: "right",
                      onClick: ($event) => $options.handleSubmit(activateCallback)
                    }, null, 8, ["onClick"])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_StepPanel, { value: 4 }, {
                default: withCtx(({ activateCallback }) => [
                  createVNode("div", { class: "flex flex-col gap-4 mx-auto w-full max-w-lg min-h-[20rem]" }, [
                    createVNode("div", { class: "text-center mt-4 mb-4 text-sm font-semibold" }, [
                      createVNode("div", { class: "p-6 rounded-lg shadow-md" }, [
                        createTextVNode(" Thank You! "),
                        createVNode("p", { class: "text-gray-700" }, " Your application will undergo a thorough review. Upon successful verification, you will gain access to: "),
                        createVNode("ul", { class: "list-disc text-left pl-5 text-gray-700 mt-3" }, [
                          createVNode("li", null, [
                            createVNode("strong", null, "Reseller Pricing")
                          ]),
                          createVNode("li", null, [
                            createVNode("strong", null, "Comprehensive Marketing and Technical Resources")
                          ]),
                          createVNode("li", null, [
                            createVNode("strong", null, "Product and Business Support")
                          ])
                        ]),
                        createVNode("p", { class: "text-gray-700 mt-4" }, " For any inquiries or further assistance, please do not hesitate to contact us: "),
                        createVNode("div", { class: "bg-white p-4 rounded-lg shadow mt-4" }, [
                          createVNode("p", { class: "text-gray-800 font-semibold" }, [
                            createTextVNode(" \u{1F4E7} Email: "),
                            createVNode("a", {
                              href: "mailto:sdl@hikvisionkenya.com",
                              class: "text-blue-600 hover:underline"
                            }, "sdl@hikvisionkenya.com")
                          ]),
                          createVNode("p", { class: "text-gray-800 font-semibold" }, [
                            createTextVNode(" \u{1F4DE} Phone: "),
                            createVNode("a", {
                              href: "tel:+254727909060",
                              class: "text-blue-600 hover:underline"
                            }, "+254 727 909 060")
                          ])
                        ]),
                        createVNode("p", { class: "text-gray-700 mt-6" }, " We look forward to the opportunity to collaborate with you. "),
                        createVNode("hr", { class: "my-4 border-gray-300" }),
                        createVNode("p", { class: "text-gray-800 font-bold" }, "Best regards,"),
                        createVNode("p", { class: "text-gray-700" }, " Secure Digital Limited | Hik Digital Mart Limited "),
                        createVNode("p", { class: "text-gray-700 font-semibold" }, " SDLKenya Online Shop Administration Department "),
                        createVNode("div", { class: "bg-white p-4 rounded-lg shadow mt-4" }, [
                          createVNode("p", { class: "text-gray-800 font-semibold" }, [
                            createTextVNode(" \u{1F4E7} Email: "),
                            createVNode("a", {
                              href: "mailto:sdl@hikvisionkenya.com",
                              class: "text-blue-600 hover:underline"
                            }, "sdl@hikvisionkenya.com")
                          ]),
                          createVNode("p", { class: "text-gray-800 font-semibold" }, [
                            createTextVNode(" \u{1F4DE} Phone: "),
                            createVNode("a", {
                              href: "tel:+254727909060",
                              class: "text-blue-600 hover:underline"
                            }, "+254 727 909 060")
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "flex pt-6 justify-between" }, [
                    createVNode(_component_Button, {
                      label: "Back",
                      severity: "secondary",
                      icon: "pi pi-arrow-left",
                      onClick: ($event) => activateCallback(3)
                    }, null, 8, ["onClick"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="hidden md:block h-full w-full" data-v-e018aaaf>`);
  _push(ssrRenderComponent(_component_Carousel, {
    verticalViewPortHeight: 2e3,
    autoplayInterval: 4e3,
    value: $data.images,
    numVisible: 1,
    numScroll: 1,
    showIndicators: false,
    showNavigators: false,
    circular: "",
    class: "rounded-lg w-full"
  }, {
    item: withCtx((slotProps, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="relative w-full h-screen flex justify-center items-center" data-v-e018aaaf${_scopeId}><img${ssrRenderAttr("src", slotProps.data.src)}${ssrRenderAttr("alt", slotProps.data.alt)} class="rounded-xl object-cover w-100 h-100" data-v-e018aaaf${_scopeId}><div class="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white py-2 px-4 rounded" data-v-e018aaaf${_scopeId}>${ssrInterpolate(slotProps.data.alt)}</div></div>`);
      } else {
        return [
          createVNode("div", { class: "relative w-full h-screen flex justify-center items-center" }, [
            createVNode("img", {
              src: slotProps.data.src,
              alt: slotProps.data.alt,
              class: "rounded-xl object-cover w-100 h-100"
            }, null, 8, ["src", "alt"]),
            createVNode("div", { class: "absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white py-2 px-4 rounded" }, toDisplayString(slotProps.data.alt), 1)
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_Toast, {
    position: "bottom-right",
    group: "br"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/stepper/QuestionnaireForm.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const QuestionnaireForm = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-e018aaaf"]]);
const _sfc_main$1 = {
  data() {
    return {
      responseMessage: {},
      activeStep: 1,
      wholesalerPersonalInfo: {
        companyName: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        phoneNumber2: "",
        email: "",
        email2: "",
        address: "",
        password: ""
      },
      initialValues: {
        companyName: "",
        firstName: "",
        lastName: "",
        email: "",
        email2: "",
        phoneNumber: "",
        phoneNumber2: "",
        address: "",
        password: ""
      },
      initialBusinessValues: {
        selectedBusinessType: "",
        selectedBrands: [],
        selectedSecurityBrands: [],
        otherBrand: ""
      },
      wholesalerBusinessInfo: {
        selectedBusinessType: "",
        selectedBrands: [],
        selectedSecurityBrands: [],
        otherBrand: ""
      },
      wholesalerTechnicalInfo: {
        selectedCategories: [],
        hikvisionChallenges: "",
        adviceToSecureDigital: "",
        otherBrand: ""
      },
      errors: {
        wholesalerPersonalInfo: {
          companyName: "",
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          email2: "",
          address: ""
        },
        wholesalerBusinessInfo: {
          selectedBusinessType: "",
          selectedBrands: [],
          selectedSecurityBrands: []
        },
        wholesalerTechnicalInfo: {
          selectedCategories: [],
          hikvisionChallenges: "",
          adviceToSecureDigital: ""
        }
      },
      businessTypes: [
        { key: "stock_supply", name: "STOCK & SUPPLY ONLY." },
        { key: "stock_supply_install", name: "STOCK, SUPPLY & INSTALL." },
        { key: "supply_install", name: "SUPPLY & INSTALL" },
        { key: "install_only", name: "INSTALL ONLY" },
        { key: "other", name: "Other" }
      ],
      selectedBrands: [],
      brandList: [
        { key: "hikvision", name: "HIKVISION" },
        { key: "dahua", name: "DAHUA" },
        { key: "uniview", name: "UNIVIEW" },
        { key: "axis", name: "AXIS" },
        { key: "zkteco", name: "ZKTECO" },
        { key: "other", name: "Other" }
      ],
      selectedSecurityBrands: [],
      securityBrands: [
        { key: "hikvision", name: "HIKVISION" },
        { key: "dahua", name: "DAHUA" },
        { key: "uniview", name: "UNIVIEW" },
        { key: "axis", name: "AXIS" },
        { key: "zkteco", name: "ZKTECO" },
        { key: "other", name: "Other" }
      ],
      selectedCategories: [],
      productCategories: [
        { key: "analogue_cctv", name: "ANALOGUE CCTV/ DVR" },
        { key: "network_cctv", name: "NETWORK (IP) CCTV /NVR" },
        { key: "intercoms", name: "INTERCOMS" },
        { key: "access_control", name: "ACCESS CONTROL" },
        { key: "other", name: "Other" }
      ],
      images: [
        {
          src: "https://www.sdl.co.ke/assets/images/resource/about-5.png",
          alt: "EZVIZ H8c 4G LTE 2K Resolution Pan&Tilt Camera 4mm"
        },
        {
          src: "https://www.sdl.co.ke/assets/images/resource/about-6.png",
          alt: "EZVIZ H6c Pro 2K+ Pan & Tilt Smart Home Camera"
        },
        {
          src: "https://www.sdl.co.ke/assets/images/resource/about-7.png",
          alt: "Hikvision DS-2CD1127G2H-LIU(2.8mm)(O-STD) 2MP Smart Hybrid Light ColorVu Camera"
        }
      ],
      businessCategories: [
        { name: "System Integrator", key: "System Integrator" },
        { name: "Reseller", key: "Reseller" },
        { name: "Technician", key: "Technician" },
        { name: "Other", key: "Other" }
      ],
      yearExperiences: [
        { name: "1 Year", key: "1 Year" },
        { name: "1-3 Years", key: "1-3 Years" },
        { name: "4-7 Years", key: "4-7 Years" },
        { name: "8+", key: "8+" }
      ],
      experienceAreasList: [
        { name: "CCTV Systems", key: "CCTV Systems" },
        { name: "Access Control Systems", key: "Access Control Systems" },
        { name: "Video Intercom Systems", key: "Video Intercom Systems" },
        {
          name: "Networking and Computer Products",
          key: "Networking and Computer Products"
        },
        { name: "Electrical Installations", key: "Electrical Installations" }
      ],
      brandsWorkedWithList: [
        { name: "Hikvision", key: "Hikvision" },
        { name: "Dahua", key: "Dahua" },
        { name: "Uniview", key: "Uniview" },
        { name: "Tandy", key: "Tandy" },
        { name: "Other (Please Specify)", key: "Other" }
      ],
      integrationExperienceList: [
        { name: "Yes, Extensive Experience", key: "Yes, Extensive Experience" },
        { name: "Some Experience", key: "Some Experience" },
        { name: "No Experience", key: "No Experience" }
      ],
      wherePurchase: [
        { name: "National Distributor", key: "National Distributor" },
        { name: "Regional Supplier", key: "Regional Supplier" },
        { name: "Online Retailer ", key: "Online Retailer " },
        { name: "Other", key: "Other" }
      ],
      familiarWithStandards: [
        { name: "Yes, I'm certified", key: "Yes, I'm certified" },
        {
          name: "I am familiar but not certified",
          key: "I am familiar but not certified"
        },
        {
          name: "No, but I am willing to learn",
          key: "No, but I am willing to learn"
        }
      ],
      options: [
        { name: "Yes", key: "Yes" },
        { name: "No", key: "No" },
        { name: "Not yet, but interested", key: "Not yet, but interested" }
      ],
      experienceAreasError: false,
      brandsWorkedWithError: false,
      integrationExperienceError: false,
      familiarWithStandardError: false,
      purchaseError: false,
      currentlyPurchaseError: false,
      formData: {
        technicalExpertise: "",
        hikvisionTechDifference: "",
        troubleshootCCTV: "",
        networkDesign: "",
        supportAreas: "",
        businessSupport: ""
      },
      textareaFields: [
        {
          id: "technicalExpertise",
          model: "technicalExpertise",
          label: `Technical Expertise Verification<br>
      <span>For those working with Hikvision products: How do you configure a
      Hikvision NVR to enable remote viewing on a mobile device?</span>`
        },
        {
          id: "hikvisionTechDifference",
          model: "hikvisionTechDifference",
          label: "What is the difference between Hikvision\u2019s AcuSense and ColorVu technologies?"
        },
        {
          id: "troubleshootCCTV",
          model: "troubleshootCCTV",
          label: "How would you troubleshoot a CCTV camera that is not displaying video on the NVR?"
        },
        {
          id: "networkDesign",
          model: "networkDesign",
          label: "What are the key considerations when designing a network for IP-based surveillance systems?"
        },
        {
          id: "supportAreas",
          model: "supportAreas",
          label: "What areas would you like us to support you with as you partner with Secure Digital Limited under Hik Digital Mart?"
        },
        {
          id: "businessSupport",
          model: "businessSupport",
          label: "How can we best support your business? (Optional)"
        }
      ]
    };
  },
  methods: {
    resolver({ values }) {
      const errors = {};
      const requiredFields = [
        "companyName",
        "firstName",
        "lastName",
        "email",
        "email2",
        "phoneNumber",
        "phoneNumber2",
        "address",
        "password"
      ];
      for (const field of requiredFields) {
        if (!values[field]) {
          errors[field] = [
            { message: `${this.toTitleCase(field)} is required.` }
          ];
        }
      }
      return { errors };
    },
    businessResolver({ values }) {
      const errors = {};
      if (!values.selectedBusinessType) {
        errors.selectedBusinessType = {
          message: "Business type is required."
        };
      }
      if (!values.selectedBrands || values.selectedBrands.length === 0) {
        errors.selectedBrands = {
          message: "At least one brand is required."
        };
      }
      if (!values.selectedSecurityBrands || values.selectedSecurityBrands.length === 0) {
        errors.selectedSecurityBrands = {
          message: "At least one security brand is required."
        };
      }
      return { errors };
    },
    toTitleCase(str) {
      return str.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase());
    },
    async handleSubmit(activateCallback, x) {
      const data = {
        ...this.wholesalerPersonalInfo,
        ...this.wholesalerBusinessInfo,
        ...this.wholesalerTechnicalInfo
      };
      if (this.validateForm()) {
        this.formData = data;
        await this.submitForm(activateCallback);
      } else {
        console.log("Validation failed");
      }
    },
    validateForm() {
      let isValid = true;
      this.errors = {};
      return isValid;
    },
    hasErrors(obj) {
      return Object.values(obj).some((value) => {
        if (typeof value === "object") {
          return this.hasErrors(value);
        }
        return value !== "";
      });
    },
    validateAndProceed(formContext, activateCallback, currentStep) {
      console.log("Validating step", formContext.valid);
      console.log("Current step:", activateCallback);
      console.log("Current currentStep:", currentStep);
      if (formContext.valid) {
        console.log("Moving to step", currentStep + 1);
        activateCallback(currentStep + 1);
      } else {
        console.log("Validation errors:", formContext.errors);
      }
    },
    async submitForm(activateCallback) {
      ({
        businessName: this.businessName,
        phoneNumber: this.phoneNumber,
        email: this.email,
        location: this.location,
        businessType: this.businessType,
        experienceYears: this.experienceYears,
        experienceAreas: this.experienceAreas,
        brandsWorkedWith: this.brandsWorkedWith,
        integrationExperience: this.integrationExperience,
        familiarWithStandard: this.familiarWithStandard,
        purchaseSource: this.purchaseSource,
        purchaseHikvision: this.purchaseHikvision,
        requiresTraining: this.requiresTraining
      });
      try {
        const { $axios } = useNuxtApp();
        const response = await $axios.post(
          "/user/shop-owners-questionnaire",
          this.formData
        );
        this.responseMessage = response.data.message;
        toast.add({
          severity: "success",
          summary: response.data.message,
          group: "br",
          life: 3e3
        });
        if (response.status === 200) {
          activateCallback(4);
        }
      } catch (error) {
        this.$toast.add({
          severity: "error",
          summary: error.message,
          group: "br",
          life: 3e3
        });
        console.error("Error submitting form:", error);
      } finally {
      }
    },
    resetForm() {
      this.businessName = "";
      this.phoneNumber = "";
      this.phoneNumber2 = "";
      this.email = "";
      this.email2 = "";
      this.address;
      this.location = "";
      this.businessType = null;
      this.experienceYears = null;
      this.experienceAreas = [];
      this.brandsWorkedWith = [];
      this.integrationExperience = null;
      this.purchaseSource = "";
      this.purchaseHikvision = null;
      this.requiresTraining = null;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Stepper = script$6;
  const _component_StepList = script$7;
  const _component_Step = script$8;
  const _component_Divider = script$9;
  const _component_StepPanels = script$a;
  const _component_StepPanel = script$b;
  const _component_Toast = script$5;
  const _component_Form = script$h;
  const _component_InputText = script$2;
  const _component_Message = script$i;
  const _component_Button = script$d;
  const _component_RadioButton = script$c;
  const _component_Checkbox = script$e;
  const _component_Textarea = script$g;
  const _component_Carousel = script$4;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "flex w-full align-center justify-center",
    style: { "background-image": "url('https://www.sdl.co.ke/assets/images/icons/vector-1.png')" }
  }, _attrs))} data-v-efa04459><div class="flex w-full flex-col items-center justify-center" data-v-efa04459><div class="flex justify-center items-center absolute top-16 left-8" data-v-efa04459><a class="text-primary text-md cursor-pointer hover:text-secondary" data-v-efa04459><i class="pi pi-arrow-left text-primary pr-2 hover:text-secondary" style="${ssrRenderStyle({})}" data-v-efa04459></i> Back to Signup</a></div><div class="border shadow-xl mt-36 p-6 lg:ml-16 rounded-xl bg-white" data-v-efa04459>`);
  _push(ssrRenderComponent(_component_Stepper, {
    value: $data.activeStep,
    "onUpdate:value": ($event) => $data.activeStep = $event,
    class: ""
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_StepList, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_Step, {
                asChild: "",
                value: 1
              }, {
                default: withCtx(({ activateCallback, value, a11yAttrs }, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-row flex-auto gap-2" }, a11yAttrs.root))} data-v-efa04459${_scopeId3}><button${ssrRenderAttrs(mergeProps({ class: "bg-transparent border-0 inline-flex flex-col gap-2" }, a11yAttrs.header))} data-v-efa04459${_scopeId3}><span class="${ssrRenderClass([
                      "rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",
                      {
                        "bg-primary text-primary-contrast border-primary": value <= $data.activeStep,
                        "border-surface-200 dark:border-surface-700": value > $data.activeStep
                      }
                    ])}" data-v-efa04459${_scopeId3}><i class="pi pi-building" data-v-efa04459${_scopeId3}></i></span></button>`);
                    _push4(ssrRenderComponent(_component_Divider, null, null, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", mergeProps({ class: "flex flex-row flex-auto gap-2" }, a11yAttrs.root), [
                        createVNode("button", mergeProps({
                          class: "bg-transparent border-0 inline-flex flex-col gap-2",
                          onClick: activateCallback
                        }, a11yAttrs.header), [
                          createVNode("span", {
                            class: [
                              "rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",
                              {
                                "bg-primary text-primary-contrast border-primary": value <= $data.activeStep,
                                "border-surface-200 dark:border-surface-700": value > $data.activeStep
                              }
                            ]
                          }, [
                            createVNode("i", { class: "pi pi-building" })
                          ], 2)
                        ], 16, ["onClick"]),
                        createVNode(_component_Divider)
                      ], 16)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_Step, {
                asChild: "",
                value: 2
              }, {
                default: withCtx(({ activateCallback, value, a11yAttrs }, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-row flex-auto gap-2 pl-2" }, a11yAttrs.root))} data-v-efa04459${_scopeId3}><button${ssrRenderAttrs(mergeProps({ class: "bg-transparent border-0 inline-flex flex-col gap-2" }, a11yAttrs.header))} data-v-efa04459${_scopeId3}><span class="${ssrRenderClass([
                      "rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",
                      {
                        "bg-primary text-primary-contrast border-primary": value <= $data.activeStep,
                        "border-surface-200 dark:border-surface-700": value > $data.activeStep
                      }
                    ])}" data-v-efa04459${_scopeId3}><i class="pi pi-cog" data-v-efa04459${_scopeId3}></i></span></button>`);
                    _push4(ssrRenderComponent(_component_Divider, null, null, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", mergeProps({ class: "flex flex-row flex-auto gap-2 pl-2" }, a11yAttrs.root), [
                        createVNode("button", mergeProps({
                          class: "bg-transparent border-0 inline-flex flex-col gap-2",
                          onClick: activateCallback
                        }, a11yAttrs.header), [
                          createVNode("span", {
                            class: [
                              "rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",
                              {
                                "bg-primary text-primary-contrast border-primary": value <= $data.activeStep,
                                "border-surface-200 dark:border-surface-700": value > $data.activeStep
                              }
                            ]
                          }, [
                            createVNode("i", { class: "pi pi-cog" })
                          ], 2)
                        ], 16, ["onClick"]),
                        createVNode(_component_Divider)
                      ], 16)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_Step, {
                asChild: "",
                value: 3
              }, {
                default: withCtx(({ activateCallback, value, a11yAttrs }, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-row pl-2" }, a11yAttrs.root))} data-v-efa04459${_scopeId3}><button${ssrRenderAttrs(mergeProps({ class: "bg-transparent border-0 inline-flex flex-col gap-2" }, a11yAttrs.header))} data-v-efa04459${_scopeId3}><span class="${ssrRenderClass([
                      "rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",
                      {
                        "bg-primary text-primary-contrast border-primary": value <= $data.activeStep,
                        "border-surface-200 dark:border-surface-700": value > $data.activeStep
                      }
                    ])}" data-v-efa04459${_scopeId3}><i class="pi pi-question-circle" data-v-efa04459${_scopeId3}></i></span></button>`);
                    _push4(ssrRenderComponent(_component_Divider, null, null, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", mergeProps({ class: "flex flex-row pl-2" }, a11yAttrs.root), [
                        createVNode("button", mergeProps({
                          class: "bg-transparent border-0 inline-flex flex-col gap-2",
                          onClick: activateCallback
                        }, a11yAttrs.header), [
                          createVNode("span", {
                            class: [
                              "rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",
                              {
                                "bg-primary text-primary-contrast border-primary": value <= $data.activeStep,
                                "border-surface-200 dark:border-surface-700": value > $data.activeStep
                              }
                            ]
                          }, [
                            createVNode("i", { class: "pi pi-question-circle" })
                          ], 2)
                        ], 16, ["onClick"]),
                        createVNode(_component_Divider)
                      ], 16)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_Step, {
                asChild: "",
                value: 4
              }, {
                default: withCtx(({ activateCallback, value, a11yAttrs }, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-row pl-2" }, a11yAttrs.root))} data-v-efa04459${_scopeId3}><button${ssrRenderAttrs(mergeProps({ class: "bg-transparent border-0 inline-flex flex-col gap-2" }, a11yAttrs.header))} data-v-efa04459${_scopeId3}><span class="${ssrRenderClass([
                      "rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",
                      {
                        "bg-primary text-primary-contrast border-primary": value <= $data.activeStep,
                        "border-surface-200 dark:border-surface-700": value > $data.activeStep
                      }
                    ])}" data-v-efa04459${_scopeId3}><i class="pi pi-check-circle" data-v-efa04459${_scopeId3}></i></span></button></div>`);
                  } else {
                    return [
                      createVNode("div", mergeProps({ class: "flex flex-row pl-2" }, a11yAttrs.root), [
                        createVNode("button", mergeProps({
                          class: "bg-transparent border-0 inline-flex flex-col gap-2",
                          onClick: activateCallback
                        }, a11yAttrs.header), [
                          createVNode("span", {
                            class: [
                              "rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",
                              {
                                "bg-primary text-primary-contrast border-primary": value <= $data.activeStep,
                                "border-surface-200 dark:border-surface-700": value > $data.activeStep
                              }
                            ]
                          }, [
                            createVNode("i", { class: "pi pi-check-circle" })
                          ], 2)
                        ], 16, ["onClick"])
                      ], 16)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_Step, {
                  asChild: "",
                  value: 1
                }, {
                  default: withCtx(({ activateCallback, value, a11yAttrs }) => [
                    createVNode("div", mergeProps({ class: "flex flex-row flex-auto gap-2" }, a11yAttrs.root), [
                      createVNode("button", mergeProps({
                        class: "bg-transparent border-0 inline-flex flex-col gap-2",
                        onClick: activateCallback
                      }, a11yAttrs.header), [
                        createVNode("span", {
                          class: [
                            "rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",
                            {
                              "bg-primary text-primary-contrast border-primary": value <= $data.activeStep,
                              "border-surface-200 dark:border-surface-700": value > $data.activeStep
                            }
                          ]
                        }, [
                          createVNode("i", { class: "pi pi-building" })
                        ], 2)
                      ], 16, ["onClick"]),
                      createVNode(_component_Divider)
                    ], 16)
                  ]),
                  _: 1
                }),
                createVNode(_component_Step, {
                  asChild: "",
                  value: 2
                }, {
                  default: withCtx(({ activateCallback, value, a11yAttrs }) => [
                    createVNode("div", mergeProps({ class: "flex flex-row flex-auto gap-2 pl-2" }, a11yAttrs.root), [
                      createVNode("button", mergeProps({
                        class: "bg-transparent border-0 inline-flex flex-col gap-2",
                        onClick: activateCallback
                      }, a11yAttrs.header), [
                        createVNode("span", {
                          class: [
                            "rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",
                            {
                              "bg-primary text-primary-contrast border-primary": value <= $data.activeStep,
                              "border-surface-200 dark:border-surface-700": value > $data.activeStep
                            }
                          ]
                        }, [
                          createVNode("i", { class: "pi pi-cog" })
                        ], 2)
                      ], 16, ["onClick"]),
                      createVNode(_component_Divider)
                    ], 16)
                  ]),
                  _: 1
                }),
                createVNode(_component_Step, {
                  asChild: "",
                  value: 3
                }, {
                  default: withCtx(({ activateCallback, value, a11yAttrs }) => [
                    createVNode("div", mergeProps({ class: "flex flex-row pl-2" }, a11yAttrs.root), [
                      createVNode("button", mergeProps({
                        class: "bg-transparent border-0 inline-flex flex-col gap-2",
                        onClick: activateCallback
                      }, a11yAttrs.header), [
                        createVNode("span", {
                          class: [
                            "rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",
                            {
                              "bg-primary text-primary-contrast border-primary": value <= $data.activeStep,
                              "border-surface-200 dark:border-surface-700": value > $data.activeStep
                            }
                          ]
                        }, [
                          createVNode("i", { class: "pi pi-question-circle" })
                        ], 2)
                      ], 16, ["onClick"]),
                      createVNode(_component_Divider)
                    ], 16)
                  ]),
                  _: 1
                }),
                createVNode(_component_Step, {
                  asChild: "",
                  value: 4
                }, {
                  default: withCtx(({ activateCallback, value, a11yAttrs }) => [
                    createVNode("div", mergeProps({ class: "flex flex-row pl-2" }, a11yAttrs.root), [
                      createVNode("button", mergeProps({
                        class: "bg-transparent border-0 inline-flex flex-col gap-2",
                        onClick: activateCallback
                      }, a11yAttrs.header), [
                        createVNode("span", {
                          class: [
                            "rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",
                            {
                              "bg-primary text-primary-contrast border-primary": value <= $data.activeStep,
                              "border-surface-200 dark:border-surface-700": value > $data.activeStep
                            }
                          ]
                        }, [
                          createVNode("i", { class: "pi pi-check-circle" })
                        ], 2)
                      ], 16, ["onClick"])
                    ], 16)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_StepPanels, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_StepPanel, { value: 1 }, {
                default: withCtx(({ activateCallback }, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="flex flex-col gap-4 mx-auto" style="${ssrRenderStyle({ "min-width": "40vw" })}" data-v-efa04459${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_Toast, null, null, _parent4, _scopeId3));
                    _push4(`<div class="text-center mt-4 mb-4 text-xl font-semibold" data-v-efa04459${_scopeId3}> Section 1: Personal Information </div>`);
                    _push4(ssrRenderComponent(_component_Form, {
                      initialValues: $data.initialValues,
                      resolver: $options.resolver,
                      validateOnValueUpdate: false,
                      validateOnBlur: true,
                      validateOnMount: ["companyName"],
                      class: "flex-col gap-4",
                      onSubmit: (e) => $options.validateAndProceed(e, activateCallback, 1)
                    }, {
                      default: withCtx(($form, _push5, _parent5, _scopeId4) => {
                        var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
                        if (_push5) {
                          _push5(`<div class="flex gap-4" data-v-efa04459${_scopeId4}><div class="field w-full" data-v-efa04459${_scopeId4}><label for="companyName" class="font-bold" data-v-efa04459${_scopeId4}>Company Name (Full company name)</label>`);
                          _push5(ssrRenderComponent(_component_InputText, {
                            name: "companyName",
                            modelValue: $data.wholesalerPersonalInfo.companyName,
                            "onUpdate:modelValue": ($event) => $data.wholesalerPersonalInfo.companyName = $event,
                            type: "text",
                            class: "w-full"
                          }, null, _parent5, _scopeId4));
                          if ((_a = $form.companyName) == null ? void 0 : _a.invalid) {
                            _push5(ssrRenderComponent(_component_Message, {
                              severity: "error",
                              size: "small",
                              variant: "simple"
                            }, {
                              default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`${ssrInterpolate($form.companyName.error.message)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString($form.companyName.error.message), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                          } else {
                            _push5(`<!---->`);
                          }
                          _push5(`</div></div><div class="flex gap-4" data-v-efa04459${_scopeId4}><div class="field w-1/2" data-v-efa04459${_scopeId4}><label for="firstName" class="font-bold" data-v-efa04459${_scopeId4}>First Name</label>`);
                          _push5(ssrRenderComponent(_component_InputText, {
                            name: "firstName",
                            modelValue: $data.wholesalerPersonalInfo.firstName,
                            "onUpdate:modelValue": ($event) => $data.wholesalerPersonalInfo.firstName = $event,
                            type: "text",
                            class: "w-full"
                          }, null, _parent5, _scopeId4));
                          if ((_b = $form.firstName) == null ? void 0 : _b.invalid) {
                            _push5(ssrRenderComponent(_component_Message, {
                              severity: "error",
                              size: "small",
                              variant: "simple"
                            }, {
                              default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`${ssrInterpolate($form.firstName.error.message)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString($form.firstName.error.message), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                          } else {
                            _push5(`<!---->`);
                          }
                          _push5(`</div><div class="field w-1/2" data-v-efa04459${_scopeId4}><label for="lastName" class="font-bold" data-v-efa04459${_scopeId4}>Last Name</label>`);
                          _push5(ssrRenderComponent(_component_InputText, {
                            name: "lastName",
                            modelValue: $data.wholesalerPersonalInfo.lastName,
                            "onUpdate:modelValue": ($event) => $data.wholesalerPersonalInfo.lastName = $event,
                            type: "text",
                            class: "w-full"
                          }, null, _parent5, _scopeId4));
                          if ((_c = $form.lastName) == null ? void 0 : _c.invalid) {
                            _push5(ssrRenderComponent(_component_Message, {
                              severity: "error",
                              size: "small",
                              variant: "simple"
                            }, {
                              default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`${ssrInterpolate($form.lastName.error.message)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString($form.lastName.error.message), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                          } else {
                            _push5(`<!---->`);
                          }
                          _push5(`</div></div><div class="flex gap-4" data-v-efa04459${_scopeId4}><div class="field w-1/2" data-v-efa04459${_scopeId4}><label for="email" class="font-bold" data-v-efa04459${_scopeId4}>Email Address</label>`);
                          _push5(ssrRenderComponent(_component_InputText, {
                            name: "email",
                            modelValue: $data.wholesalerPersonalInfo.email,
                            "onUpdate:modelValue": ($event) => $data.wholesalerPersonalInfo.email = $event,
                            type: "email",
                            class: "w-full"
                          }, null, _parent5, _scopeId4));
                          if ((_d = $form.email) == null ? void 0 : _d.invalid) {
                            _push5(ssrRenderComponent(_component_Message, {
                              severity: "error",
                              size: "small",
                              variant: "simple"
                            }, {
                              default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`${ssrInterpolate($form.email.error.message)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString($form.email.error.message), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                          } else {
                            _push5(`<!---->`);
                          }
                          _push5(`</div><div class="field w-1/2" data-v-efa04459${_scopeId4}><label for="email2" class="font-bold" data-v-efa04459${_scopeId4}>Email Address 2</label>`);
                          _push5(ssrRenderComponent(_component_InputText, {
                            name: "email2",
                            modelValue: $data.wholesalerPersonalInfo.email2,
                            "onUpdate:modelValue": ($event) => $data.wholesalerPersonalInfo.email2 = $event,
                            type: "email",
                            class: "w-full"
                          }, null, _parent5, _scopeId4));
                          if ((_e = $form.email2) == null ? void 0 : _e.invalid) {
                            _push5(ssrRenderComponent(_component_Message, {
                              severity: "error",
                              size: "small",
                              variant: "simple"
                            }, {
                              default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`${ssrInterpolate($form.email2.error.message)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString($form.email2.error.message), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                          } else {
                            _push5(`<!---->`);
                          }
                          _push5(`</div></div><div class="flex gap-4" data-v-efa04459${_scopeId4}><div class="field w-1/2" data-v-efa04459${_scopeId4}><label for="phoneNumber" class="font-bold" data-v-efa04459${_scopeId4}>Phone Number 1</label>`);
                          _push5(ssrRenderComponent(_component_InputText, {
                            name: "phoneNumber",
                            modelValue: $data.wholesalerPersonalInfo.phoneNumber,
                            "onUpdate:modelValue": ($event) => $data.wholesalerPersonalInfo.phoneNumber = $event,
                            type: "tel",
                            class: "w-full"
                          }, null, _parent5, _scopeId4));
                          if ((_f = $form.phoneNumber) == null ? void 0 : _f.invalid) {
                            _push5(ssrRenderComponent(_component_Message, {
                              severity: "error",
                              size: "small",
                              variant: "simple"
                            }, {
                              default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`${ssrInterpolate($form.phoneNumber.error.message)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString($form.phoneNumber.error.message), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                          } else {
                            _push5(`<!---->`);
                          }
                          _push5(`</div><div class="field w-1/2" data-v-efa04459${_scopeId4}><label for="phoneNumber2" class="font-bold" data-v-efa04459${_scopeId4}>Phone Number 2</label>`);
                          _push5(ssrRenderComponent(_component_InputText, {
                            name: "phoneNumber2",
                            modelValue: $data.wholesalerPersonalInfo.phoneNumber2,
                            "onUpdate:modelValue": ($event) => $data.wholesalerPersonalInfo.phoneNumber2 = $event,
                            type: "tel",
                            class: "w-full"
                          }, null, _parent5, _scopeId4));
                          if ((_g = $form.phoneNumber2) == null ? void 0 : _g.invalid) {
                            _push5(ssrRenderComponent(_component_Message, {
                              severity: "error",
                              size: "small",
                              variant: "simple"
                            }, {
                              default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`${ssrInterpolate($form.phoneNumber2.error.message)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString($form.phoneNumber2.error.message), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                          } else {
                            _push5(`<!---->`);
                          }
                          _push5(`</div></div><div class="flex gap-4" data-v-efa04459${_scopeId4}><div class="field w-1/2" data-v-efa04459${_scopeId4}><label for="address" class="font-bold" data-v-efa04459${_scopeId4}>Business Address</label>`);
                          _push5(ssrRenderComponent(_component_InputText, {
                            name: "address",
                            modelValue: $data.wholesalerPersonalInfo.address,
                            "onUpdate:modelValue": ($event) => $data.wholesalerPersonalInfo.address = $event,
                            type: "text",
                            class: "w-full"
                          }, null, _parent5, _scopeId4));
                          if ((_h = $form.address) == null ? void 0 : _h.invalid) {
                            _push5(ssrRenderComponent(_component_Message, {
                              severity: "error",
                              size: "small",
                              variant: "simple"
                            }, {
                              default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`${ssrInterpolate($form.address.error.message)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString($form.address.error.message), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                          } else {
                            _push5(`<!---->`);
                          }
                          _push5(`</div><div class="field w-1/2" data-v-efa04459${_scopeId4}><label for="password" class="font-bold" data-v-efa04459${_scopeId4}>Password</label>`);
                          _push5(ssrRenderComponent(_component_InputText, {
                            name: "password",
                            modelValue: $data.wholesalerPersonalInfo.password,
                            "onUpdate:modelValue": ($event) => $data.wholesalerPersonalInfo.password = $event,
                            type: "password",
                            class: "w-full"
                          }, null, _parent5, _scopeId4));
                          if ((_i = $form.password) == null ? void 0 : _i.invalid) {
                            _push5(ssrRenderComponent(_component_Message, {
                              severity: "error",
                              size: "small",
                              variant: "simple"
                            }, {
                              default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`${ssrInterpolate($form.password.error.message)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString($form.password.error.message), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                          } else {
                            _push5(`<!---->`);
                          }
                          _push5(`</div></div><div class="flex pt-6 justify-end" style="${ssrRenderStyle({ "max-width": "800px", "margin": "0 auto" })}" data-v-efa04459${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_Button, {
                            label: "Next",
                            icon: "pi pi-arrow-right",
                            iconPos: "right",
                            type: "submit"
                          }, null, _parent5, _scopeId4));
                          _push5(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex gap-4" }, [
                              createVNode("div", { class: "field w-full" }, [
                                createVNode("label", {
                                  for: "companyName",
                                  class: "font-bold"
                                }, "Company Name (Full company name)"),
                                createVNode(_component_InputText, {
                                  name: "companyName",
                                  modelValue: $data.wholesalerPersonalInfo.companyName,
                                  "onUpdate:modelValue": ($event) => $data.wholesalerPersonalInfo.companyName = $event,
                                  type: "text",
                                  class: "w-full"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                ((_j = $form.companyName) == null ? void 0 : _j.invalid) ? (openBlock(), createBlock(_component_Message, {
                                  key: 0,
                                  severity: "error",
                                  size: "small",
                                  variant: "simple"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString($form.companyName.error.message), 1)
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true)
                              ])
                            ]),
                            createVNode("div", { class: "flex gap-4" }, [
                              createVNode("div", { class: "field w-1/2" }, [
                                createVNode("label", {
                                  for: "firstName",
                                  class: "font-bold"
                                }, "First Name"),
                                createVNode(_component_InputText, {
                                  name: "firstName",
                                  modelValue: $data.wholesalerPersonalInfo.firstName,
                                  "onUpdate:modelValue": ($event) => $data.wholesalerPersonalInfo.firstName = $event,
                                  type: "text",
                                  class: "w-full"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                ((_k = $form.firstName) == null ? void 0 : _k.invalid) ? (openBlock(), createBlock(_component_Message, {
                                  key: 0,
                                  severity: "error",
                                  size: "small",
                                  variant: "simple"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString($form.firstName.error.message), 1)
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true)
                              ]),
                              createVNode("div", { class: "field w-1/2" }, [
                                createVNode("label", {
                                  for: "lastName",
                                  class: "font-bold"
                                }, "Last Name"),
                                createVNode(_component_InputText, {
                                  name: "lastName",
                                  modelValue: $data.wholesalerPersonalInfo.lastName,
                                  "onUpdate:modelValue": ($event) => $data.wholesalerPersonalInfo.lastName = $event,
                                  type: "text",
                                  class: "w-full"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                ((_l = $form.lastName) == null ? void 0 : _l.invalid) ? (openBlock(), createBlock(_component_Message, {
                                  key: 0,
                                  severity: "error",
                                  size: "small",
                                  variant: "simple"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString($form.lastName.error.message), 1)
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true)
                              ])
                            ]),
                            createVNode("div", { class: "flex gap-4" }, [
                              createVNode("div", { class: "field w-1/2" }, [
                                createVNode("label", {
                                  for: "email",
                                  class: "font-bold"
                                }, "Email Address"),
                                createVNode(_component_InputText, {
                                  name: "email",
                                  modelValue: $data.wholesalerPersonalInfo.email,
                                  "onUpdate:modelValue": ($event) => $data.wholesalerPersonalInfo.email = $event,
                                  type: "email",
                                  class: "w-full"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                ((_m = $form.email) == null ? void 0 : _m.invalid) ? (openBlock(), createBlock(_component_Message, {
                                  key: 0,
                                  severity: "error",
                                  size: "small",
                                  variant: "simple"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString($form.email.error.message), 1)
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true)
                              ]),
                              createVNode("div", { class: "field w-1/2" }, [
                                createVNode("label", {
                                  for: "email2",
                                  class: "font-bold"
                                }, "Email Address 2"),
                                createVNode(_component_InputText, {
                                  name: "email2",
                                  modelValue: $data.wholesalerPersonalInfo.email2,
                                  "onUpdate:modelValue": ($event) => $data.wholesalerPersonalInfo.email2 = $event,
                                  type: "email",
                                  class: "w-full"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                ((_n = $form.email2) == null ? void 0 : _n.invalid) ? (openBlock(), createBlock(_component_Message, {
                                  key: 0,
                                  severity: "error",
                                  size: "small",
                                  variant: "simple"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString($form.email2.error.message), 1)
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true)
                              ])
                            ]),
                            createVNode("div", { class: "flex gap-4" }, [
                              createVNode("div", { class: "field w-1/2" }, [
                                createVNode("label", {
                                  for: "phoneNumber",
                                  class: "font-bold"
                                }, "Phone Number 1"),
                                createVNode(_component_InputText, {
                                  name: "phoneNumber",
                                  modelValue: $data.wholesalerPersonalInfo.phoneNumber,
                                  "onUpdate:modelValue": ($event) => $data.wholesalerPersonalInfo.phoneNumber = $event,
                                  type: "tel",
                                  class: "w-full"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                ((_o = $form.phoneNumber) == null ? void 0 : _o.invalid) ? (openBlock(), createBlock(_component_Message, {
                                  key: 0,
                                  severity: "error",
                                  size: "small",
                                  variant: "simple"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString($form.phoneNumber.error.message), 1)
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true)
                              ]),
                              createVNode("div", { class: "field w-1/2" }, [
                                createVNode("label", {
                                  for: "phoneNumber2",
                                  class: "font-bold"
                                }, "Phone Number 2"),
                                createVNode(_component_InputText, {
                                  name: "phoneNumber2",
                                  modelValue: $data.wholesalerPersonalInfo.phoneNumber2,
                                  "onUpdate:modelValue": ($event) => $data.wholesalerPersonalInfo.phoneNumber2 = $event,
                                  type: "tel",
                                  class: "w-full"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                ((_p = $form.phoneNumber2) == null ? void 0 : _p.invalid) ? (openBlock(), createBlock(_component_Message, {
                                  key: 0,
                                  severity: "error",
                                  size: "small",
                                  variant: "simple"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString($form.phoneNumber2.error.message), 1)
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true)
                              ])
                            ]),
                            createVNode("div", { class: "flex gap-4" }, [
                              createVNode("div", { class: "field w-1/2" }, [
                                createVNode("label", {
                                  for: "address",
                                  class: "font-bold"
                                }, "Business Address"),
                                createVNode(_component_InputText, {
                                  name: "address",
                                  modelValue: $data.wholesalerPersonalInfo.address,
                                  "onUpdate:modelValue": ($event) => $data.wholesalerPersonalInfo.address = $event,
                                  type: "text",
                                  class: "w-full"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                ((_q = $form.address) == null ? void 0 : _q.invalid) ? (openBlock(), createBlock(_component_Message, {
                                  key: 0,
                                  severity: "error",
                                  size: "small",
                                  variant: "simple"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString($form.address.error.message), 1)
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true)
                              ]),
                              createVNode("div", { class: "field w-1/2" }, [
                                createVNode("label", {
                                  for: "password",
                                  class: "font-bold"
                                }, "Password"),
                                createVNode(_component_InputText, {
                                  name: "password",
                                  modelValue: $data.wholesalerPersonalInfo.password,
                                  "onUpdate:modelValue": ($event) => $data.wholesalerPersonalInfo.password = $event,
                                  type: "password",
                                  class: "w-full"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                ((_r = $form.password) == null ? void 0 : _r.invalid) ? (openBlock(), createBlock(_component_Message, {
                                  key: 0,
                                  severity: "error",
                                  size: "small",
                                  variant: "simple"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString($form.password.error.message), 1)
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true)
                              ])
                            ]),
                            createVNode("div", {
                              class: "flex pt-6 justify-end",
                              style: { "max-width": "800px", "margin": "0 auto" }
                            }, [
                              createVNode(_component_Button, {
                                label: "Next",
                                icon: "pi pi-arrow-right",
                                iconPos: "right",
                                type: "submit"
                              })
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: "flex flex-col gap-4 mx-auto",
                        style: { "min-width": "40vw" }
                      }, [
                        createVNode(_component_Toast),
                        createVNode("div", { class: "text-center mt-4 mb-4 text-xl font-semibold" }, " Section 1: Personal Information "),
                        createVNode(_component_Form, {
                          initialValues: $data.initialValues,
                          resolver: $options.resolver,
                          validateOnValueUpdate: false,
                          validateOnBlur: true,
                          validateOnMount: ["companyName"],
                          class: "flex-col gap-4",
                          onSubmit: (e) => $options.validateAndProceed(e, activateCallback, 1)
                        }, {
                          default: withCtx(($form) => {
                            var _a, _b, _c, _d, _e, _f, _g, _h, _i;
                            return [
                              createVNode("div", { class: "flex gap-4" }, [
                                createVNode("div", { class: "field w-full" }, [
                                  createVNode("label", {
                                    for: "companyName",
                                    class: "font-bold"
                                  }, "Company Name (Full company name)"),
                                  createVNode(_component_InputText, {
                                    name: "companyName",
                                    modelValue: $data.wholesalerPersonalInfo.companyName,
                                    "onUpdate:modelValue": ($event) => $data.wholesalerPersonalInfo.companyName = $event,
                                    type: "text",
                                    class: "w-full"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  ((_a = $form.companyName) == null ? void 0 : _a.invalid) ? (openBlock(), createBlock(_component_Message, {
                                    key: 0,
                                    severity: "error",
                                    size: "small",
                                    variant: "simple"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString($form.companyName.error.message), 1)
                                    ]),
                                    _: 2
                                  }, 1024)) : createCommentVNode("", true)
                                ])
                              ]),
                              createVNode("div", { class: "flex gap-4" }, [
                                createVNode("div", { class: "field w-1/2" }, [
                                  createVNode("label", {
                                    for: "firstName",
                                    class: "font-bold"
                                  }, "First Name"),
                                  createVNode(_component_InputText, {
                                    name: "firstName",
                                    modelValue: $data.wholesalerPersonalInfo.firstName,
                                    "onUpdate:modelValue": ($event) => $data.wholesalerPersonalInfo.firstName = $event,
                                    type: "text",
                                    class: "w-full"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  ((_b = $form.firstName) == null ? void 0 : _b.invalid) ? (openBlock(), createBlock(_component_Message, {
                                    key: 0,
                                    severity: "error",
                                    size: "small",
                                    variant: "simple"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString($form.firstName.error.message), 1)
                                    ]),
                                    _: 2
                                  }, 1024)) : createCommentVNode("", true)
                                ]),
                                createVNode("div", { class: "field w-1/2" }, [
                                  createVNode("label", {
                                    for: "lastName",
                                    class: "font-bold"
                                  }, "Last Name"),
                                  createVNode(_component_InputText, {
                                    name: "lastName",
                                    modelValue: $data.wholesalerPersonalInfo.lastName,
                                    "onUpdate:modelValue": ($event) => $data.wholesalerPersonalInfo.lastName = $event,
                                    type: "text",
                                    class: "w-full"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  ((_c = $form.lastName) == null ? void 0 : _c.invalid) ? (openBlock(), createBlock(_component_Message, {
                                    key: 0,
                                    severity: "error",
                                    size: "small",
                                    variant: "simple"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString($form.lastName.error.message), 1)
                                    ]),
                                    _: 2
                                  }, 1024)) : createCommentVNode("", true)
                                ])
                              ]),
                              createVNode("div", { class: "flex gap-4" }, [
                                createVNode("div", { class: "field w-1/2" }, [
                                  createVNode("label", {
                                    for: "email",
                                    class: "font-bold"
                                  }, "Email Address"),
                                  createVNode(_component_InputText, {
                                    name: "email",
                                    modelValue: $data.wholesalerPersonalInfo.email,
                                    "onUpdate:modelValue": ($event) => $data.wholesalerPersonalInfo.email = $event,
                                    type: "email",
                                    class: "w-full"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  ((_d = $form.email) == null ? void 0 : _d.invalid) ? (openBlock(), createBlock(_component_Message, {
                                    key: 0,
                                    severity: "error",
                                    size: "small",
                                    variant: "simple"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString($form.email.error.message), 1)
                                    ]),
                                    _: 2
                                  }, 1024)) : createCommentVNode("", true)
                                ]),
                                createVNode("div", { class: "field w-1/2" }, [
                                  createVNode("label", {
                                    for: "email2",
                                    class: "font-bold"
                                  }, "Email Address 2"),
                                  createVNode(_component_InputText, {
                                    name: "email2",
                                    modelValue: $data.wholesalerPersonalInfo.email2,
                                    "onUpdate:modelValue": ($event) => $data.wholesalerPersonalInfo.email2 = $event,
                                    type: "email",
                                    class: "w-full"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  ((_e = $form.email2) == null ? void 0 : _e.invalid) ? (openBlock(), createBlock(_component_Message, {
                                    key: 0,
                                    severity: "error",
                                    size: "small",
                                    variant: "simple"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString($form.email2.error.message), 1)
                                    ]),
                                    _: 2
                                  }, 1024)) : createCommentVNode("", true)
                                ])
                              ]),
                              createVNode("div", { class: "flex gap-4" }, [
                                createVNode("div", { class: "field w-1/2" }, [
                                  createVNode("label", {
                                    for: "phoneNumber",
                                    class: "font-bold"
                                  }, "Phone Number 1"),
                                  createVNode(_component_InputText, {
                                    name: "phoneNumber",
                                    modelValue: $data.wholesalerPersonalInfo.phoneNumber,
                                    "onUpdate:modelValue": ($event) => $data.wholesalerPersonalInfo.phoneNumber = $event,
                                    type: "tel",
                                    class: "w-full"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  ((_f = $form.phoneNumber) == null ? void 0 : _f.invalid) ? (openBlock(), createBlock(_component_Message, {
                                    key: 0,
                                    severity: "error",
                                    size: "small",
                                    variant: "simple"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString($form.phoneNumber.error.message), 1)
                                    ]),
                                    _: 2
                                  }, 1024)) : createCommentVNode("", true)
                                ]),
                                createVNode("div", { class: "field w-1/2" }, [
                                  createVNode("label", {
                                    for: "phoneNumber2",
                                    class: "font-bold"
                                  }, "Phone Number 2"),
                                  createVNode(_component_InputText, {
                                    name: "phoneNumber2",
                                    modelValue: $data.wholesalerPersonalInfo.phoneNumber2,
                                    "onUpdate:modelValue": ($event) => $data.wholesalerPersonalInfo.phoneNumber2 = $event,
                                    type: "tel",
                                    class: "w-full"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  ((_g = $form.phoneNumber2) == null ? void 0 : _g.invalid) ? (openBlock(), createBlock(_component_Message, {
                                    key: 0,
                                    severity: "error",
                                    size: "small",
                                    variant: "simple"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString($form.phoneNumber2.error.message), 1)
                                    ]),
                                    _: 2
                                  }, 1024)) : createCommentVNode("", true)
                                ])
                              ]),
                              createVNode("div", { class: "flex gap-4" }, [
                                createVNode("div", { class: "field w-1/2" }, [
                                  createVNode("label", {
                                    for: "address",
                                    class: "font-bold"
                                  }, "Business Address"),
                                  createVNode(_component_InputText, {
                                    name: "address",
                                    modelValue: $data.wholesalerPersonalInfo.address,
                                    "onUpdate:modelValue": ($event) => $data.wholesalerPersonalInfo.address = $event,
                                    type: "text",
                                    class: "w-full"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  ((_h = $form.address) == null ? void 0 : _h.invalid) ? (openBlock(), createBlock(_component_Message, {
                                    key: 0,
                                    severity: "error",
                                    size: "small",
                                    variant: "simple"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString($form.address.error.message), 1)
                                    ]),
                                    _: 2
                                  }, 1024)) : createCommentVNode("", true)
                                ]),
                                createVNode("div", { class: "field w-1/2" }, [
                                  createVNode("label", {
                                    for: "password",
                                    class: "font-bold"
                                  }, "Password"),
                                  createVNode(_component_InputText, {
                                    name: "password",
                                    modelValue: $data.wholesalerPersonalInfo.password,
                                    "onUpdate:modelValue": ($event) => $data.wholesalerPersonalInfo.password = $event,
                                    type: "password",
                                    class: "w-full"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  ((_i = $form.password) == null ? void 0 : _i.invalid) ? (openBlock(), createBlock(_component_Message, {
                                    key: 0,
                                    severity: "error",
                                    size: "small",
                                    variant: "simple"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString($form.password.error.message), 1)
                                    ]),
                                    _: 2
                                  }, 1024)) : createCommentVNode("", true)
                                ])
                              ]),
                              createVNode("div", {
                                class: "flex pt-6 justify-end",
                                style: { "max-width": "800px", "margin": "0 auto" }
                              }, [
                                createVNode(_component_Button, {
                                  label: "Next",
                                  icon: "pi pi-arrow-right",
                                  iconPos: "right",
                                  type: "submit"
                                })
                              ])
                            ];
                          }),
                          _: 2
                        }, 1032, ["initialValues", "resolver", "onSubmit"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_StepPanel, {
                value: 2,
                style: { "min-width": "40vw" }
              }, {
                default: withCtx(({ activateCallback }, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="flex flex-col gap-4" data-v-efa04459${_scopeId3}><div class="text-center mt-4 mb-4 text-xl font-semibold" data-v-efa04459${_scopeId3}> Section 2: Business Details </div>`);
                    _push4(ssrRenderComponent(_component_Form, {
                      initialValues: $data.initialBusinessValues,
                      resolver: $options.businessResolver,
                      validateOnValueUpdate: false,
                      validateOnBlur: true,
                      class: "flex-col gap-4",
                      onSubmit: (e) => $options.validateAndProceed(e, activateCallback, 2)
                    }, {
                      default: withCtx(($form, _push5, _parent5, _scopeId4) => {
                        var _a, _b, _c, _d, _e, _f;
                        if (_push5) {
                          _push5(`<div data-v-efa04459${_scopeId4}><label class="font-bold py-5" data-v-efa04459${_scopeId4}> Which of the following describes your business well? </label><!--[-->`);
                          ssrRenderList($data.businessTypes, (type) => {
                            _push5(`<div class="flex items-center gap-2" data-v-efa04459${_scopeId4}>`);
                            _push5(ssrRenderComponent(_component_RadioButton, {
                              modelValue: $data.wholesalerBusinessInfo.selectedBusinessType,
                              "onUpdate:modelValue": ($event) => $data.wholesalerBusinessInfo.selectedBusinessType = $event,
                              inputId: type.key,
                              name: "businessType",
                              value: type.name
                            }, null, _parent5, _scopeId4));
                            _push5(`<label${ssrRenderAttr("for", type.key)} data-v-efa04459${_scopeId4}>${ssrInterpolate(type.name)}</label></div>`);
                          });
                          _push5(`<!--]-->`);
                          if ((_a = $form.businessType) == null ? void 0 : _a.invalid) {
                            _push5(ssrRenderComponent(_component_Message, {
                              severity: "error",
                              size: "small",
                              variant: "simple"
                            }, {
                              default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`${ssrInterpolate($form.businessType.error.message)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString($form.businessType.error.message), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                          } else {
                            _push5(`<!---->`);
                          }
                          if ($data.wholesalerBusinessInfo.selectedBusinessType === "Other") {
                            _push5(ssrRenderComponent(_component_InputText, {
                              modelValue: $data.wholesalerBusinessInfo.otherBrand,
                              "onUpdate:modelValue": ($event) => $data.wholesalerBusinessInfo.otherBrand = $event,
                              type: "text",
                              placeholder: "Please Specify ...",
                              class: "w-full mt-4"
                            }, null, _parent5, _scopeId4));
                          } else {
                            _push5(`<!---->`);
                          }
                          _push5(`</div><div data-v-efa04459${_scopeId4}><label class="font-bold pb-3" data-v-efa04459${_scopeId4}>Which brands do you deal with?</label><!--[-->`);
                          ssrRenderList($data.brandList, (brand) => {
                            _push5(`<div class="flex items-center gap-2" data-v-efa04459${_scopeId4}>`);
                            _push5(ssrRenderComponent(_component_Checkbox, {
                              modelValue: $data.wholesalerBusinessInfo.selectedBrands,
                              "onUpdate:modelValue": ($event) => $data.wholesalerBusinessInfo.selectedBrands = $event,
                              inputId: brand.key,
                              name: "brands",
                              value: brand.name
                            }, null, _parent5, _scopeId4));
                            _push5(`<label${ssrRenderAttr("for", brand.key)} data-v-efa04459${_scopeId4}>${ssrInterpolate(brand.name)}</label></div>`);
                          });
                          _push5(`<!--]-->`);
                          if ((_b = $form.brands) == null ? void 0 : _b.invalid) {
                            _push5(ssrRenderComponent(_component_Message, {
                              severity: "error",
                              size: "small",
                              variant: "simple"
                            }, {
                              default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`${ssrInterpolate($form.brands.error.message)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString($form.brands.error.message), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                          } else {
                            _push5(`<!---->`);
                          }
                          if ($data.wholesalerBusinessInfo.selectedBrands.includes("Other")) {
                            _push5(ssrRenderComponent(_component_InputText, {
                              modelValue: $data.wholesalerBusinessInfo.otherBrand,
                              "onUpdate:modelValue": ($event) => $data.wholesalerBusinessInfo.otherBrand = $event,
                              type: "text",
                              placeholder: "Please Specify ...",
                              class: "w-full mt-4"
                            }, null, _parent5, _scopeId4));
                          } else {
                            _push5(`<!---->`);
                          }
                          _push5(`</div><div data-v-efa04459${_scopeId4}><label class="font-bold pb-3" data-v-efa04459${_scopeId4}> Which security brand do you have strength in? </label><!--[-->`);
                          ssrRenderList($data.securityBrands, (brand) => {
                            _push5(`<div class="flex items-center gap-2" data-v-efa04459${_scopeId4}>`);
                            _push5(ssrRenderComponent(_component_Checkbox, {
                              modelValue: $data.wholesalerBusinessInfo.selectedSecurityBrands,
                              "onUpdate:modelValue": ($event) => $data.wholesalerBusinessInfo.selectedSecurityBrands = $event,
                              inputId: brand.key,
                              name: "securityBrands",
                              value: brand.name
                            }, null, _parent5, _scopeId4));
                            _push5(`<label${ssrRenderAttr("for", brand.key)} data-v-efa04459${_scopeId4}>${ssrInterpolate(brand.name)}</label></div>`);
                          });
                          _push5(`<!--]-->`);
                          if ((_c = $form.securityBrands) == null ? void 0 : _c.invalid) {
                            _push5(ssrRenderComponent(_component_Message, {
                              severity: "error",
                              size: "small",
                              variant: "simple"
                            }, {
                              default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`${ssrInterpolate($form.securityBrands.error.message)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString($form.securityBrands.error.message), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                          } else {
                            _push5(`<!---->`);
                          }
                          _push5(`</div><div class="flex pt-6 justify-between" data-v-efa04459${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_Button, {
                            label: "Back",
                            severity: "secondary",
                            icon: "pi pi-arrow-left",
                            type: "submit",
                            onClick: ($event) => activateCallback(1)
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_Button, {
                            label: "Next",
                            icon: "pi pi-arrow-right",
                            iconPo: "right",
                            type: "submit"
                          }, null, _parent5, _scopeId4));
                          _push5(`</div>`);
                        } else {
                          return [
                            createVNode("div", null, [
                              createVNode("label", { class: "font-bold py-5" }, " Which of the following describes your business well? "),
                              (openBlock(true), createBlock(Fragment, null, renderList($data.businessTypes, (type) => {
                                return openBlock(), createBlock("div", {
                                  key: type.key,
                                  class: "flex items-center gap-2"
                                }, [
                                  createVNode(_component_RadioButton, {
                                    modelValue: $data.wholesalerBusinessInfo.selectedBusinessType,
                                    "onUpdate:modelValue": ($event) => $data.wholesalerBusinessInfo.selectedBusinessType = $event,
                                    inputId: type.key,
                                    name: "businessType",
                                    value: type.name
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                                  createVNode("label", {
                                    for: type.key
                                  }, toDisplayString(type.name), 9, ["for"])
                                ]);
                              }), 128)),
                              ((_d = $form.businessType) == null ? void 0 : _d.invalid) ? (openBlock(), createBlock(_component_Message, {
                                key: 0,
                                severity: "error",
                                size: "small",
                                variant: "simple"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString($form.businessType.error.message), 1)
                                ]),
                                _: 2
                              }, 1024)) : createCommentVNode("", true),
                              $data.wholesalerBusinessInfo.selectedBusinessType === "Other" ? (openBlock(), createBlock(_component_InputText, {
                                key: 1,
                                modelValue: $data.wholesalerBusinessInfo.otherBrand,
                                "onUpdate:modelValue": ($event) => $data.wholesalerBusinessInfo.otherBrand = $event,
                                type: "text",
                                placeholder: "Please Specify ...",
                                class: "w-full mt-4"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                            ]),
                            createVNode("div", null, [
                              createVNode("label", { class: "font-bold pb-3" }, "Which brands do you deal with?"),
                              (openBlock(true), createBlock(Fragment, null, renderList($data.brandList, (brand) => {
                                return openBlock(), createBlock("div", {
                                  key: brand.key,
                                  class: "flex items-center gap-2"
                                }, [
                                  createVNode(_component_Checkbox, {
                                    modelValue: $data.wholesalerBusinessInfo.selectedBrands,
                                    "onUpdate:modelValue": ($event) => $data.wholesalerBusinessInfo.selectedBrands = $event,
                                    inputId: brand.key,
                                    name: "brands",
                                    value: brand.name
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                                  createVNode("label", {
                                    for: brand.key
                                  }, toDisplayString(brand.name), 9, ["for"])
                                ]);
                              }), 128)),
                              ((_e = $form.brands) == null ? void 0 : _e.invalid) ? (openBlock(), createBlock(_component_Message, {
                                key: 0,
                                severity: "error",
                                size: "small",
                                variant: "simple"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString($form.brands.error.message), 1)
                                ]),
                                _: 2
                              }, 1024)) : createCommentVNode("", true),
                              $data.wholesalerBusinessInfo.selectedBrands.includes("Other") ? (openBlock(), createBlock(_component_InputText, {
                                key: 1,
                                modelValue: $data.wholesalerBusinessInfo.otherBrand,
                                "onUpdate:modelValue": ($event) => $data.wholesalerBusinessInfo.otherBrand = $event,
                                type: "text",
                                placeholder: "Please Specify ...",
                                class: "w-full mt-4"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                            ]),
                            createVNode("div", null, [
                              createVNode("label", { class: "font-bold pb-3" }, " Which security brand do you have strength in? "),
                              (openBlock(true), createBlock(Fragment, null, renderList($data.securityBrands, (brand) => {
                                return openBlock(), createBlock("div", {
                                  key: brand.key,
                                  class: "flex items-center gap-2"
                                }, [
                                  createVNode(_component_Checkbox, {
                                    modelValue: $data.wholesalerBusinessInfo.selectedSecurityBrands,
                                    "onUpdate:modelValue": ($event) => $data.wholesalerBusinessInfo.selectedSecurityBrands = $event,
                                    inputId: brand.key,
                                    name: "securityBrands",
                                    value: brand.name
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                                  createVNode("label", {
                                    for: brand.key
                                  }, toDisplayString(brand.name), 9, ["for"])
                                ]);
                              }), 128)),
                              ((_f = $form.securityBrands) == null ? void 0 : _f.invalid) ? (openBlock(), createBlock(_component_Message, {
                                key: 0,
                                severity: "error",
                                size: "small",
                                variant: "simple"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString($form.securityBrands.error.message), 1)
                                ]),
                                _: 2
                              }, 1024)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", { class: "flex pt-6 justify-between" }, [
                              createVNode(_component_Button, {
                                label: "Back",
                                severity: "secondary",
                                icon: "pi pi-arrow-left",
                                type: "submit",
                                onClick: ($event) => activateCallback(1)
                              }, null, 8, ["onClick"]),
                              createVNode(_component_Button, {
                                label: "Next",
                                icon: "pi pi-arrow-right",
                                iconPo: "right",
                                type: "submit"
                              })
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex flex-col gap-4" }, [
                        createVNode("div", { class: "text-center mt-4 mb-4 text-xl font-semibold" }, " Section 2: Business Details "),
                        createVNode(_component_Form, {
                          initialValues: $data.initialBusinessValues,
                          resolver: $options.businessResolver,
                          validateOnValueUpdate: false,
                          validateOnBlur: true,
                          class: "flex-col gap-4",
                          onSubmit: (e) => $options.validateAndProceed(e, activateCallback, 2)
                        }, {
                          default: withCtx(($form) => {
                            var _a, _b, _c;
                            return [
                              createVNode("div", null, [
                                createVNode("label", { class: "font-bold py-5" }, " Which of the following describes your business well? "),
                                (openBlock(true), createBlock(Fragment, null, renderList($data.businessTypes, (type) => {
                                  return openBlock(), createBlock("div", {
                                    key: type.key,
                                    class: "flex items-center gap-2"
                                  }, [
                                    createVNode(_component_RadioButton, {
                                      modelValue: $data.wholesalerBusinessInfo.selectedBusinessType,
                                      "onUpdate:modelValue": ($event) => $data.wholesalerBusinessInfo.selectedBusinessType = $event,
                                      inputId: type.key,
                                      name: "businessType",
                                      value: type.name
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                                    createVNode("label", {
                                      for: type.key
                                    }, toDisplayString(type.name), 9, ["for"])
                                  ]);
                                }), 128)),
                                ((_a = $form.businessType) == null ? void 0 : _a.invalid) ? (openBlock(), createBlock(_component_Message, {
                                  key: 0,
                                  severity: "error",
                                  size: "small",
                                  variant: "simple"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString($form.businessType.error.message), 1)
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true),
                                $data.wholesalerBusinessInfo.selectedBusinessType === "Other" ? (openBlock(), createBlock(_component_InputText, {
                                  key: 1,
                                  modelValue: $data.wholesalerBusinessInfo.otherBrand,
                                  "onUpdate:modelValue": ($event) => $data.wholesalerBusinessInfo.otherBrand = $event,
                                  type: "text",
                                  placeholder: "Please Specify ...",
                                  class: "w-full mt-4"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                              ]),
                              createVNode("div", null, [
                                createVNode("label", { class: "font-bold pb-3" }, "Which brands do you deal with?"),
                                (openBlock(true), createBlock(Fragment, null, renderList($data.brandList, (brand) => {
                                  return openBlock(), createBlock("div", {
                                    key: brand.key,
                                    class: "flex items-center gap-2"
                                  }, [
                                    createVNode(_component_Checkbox, {
                                      modelValue: $data.wholesalerBusinessInfo.selectedBrands,
                                      "onUpdate:modelValue": ($event) => $data.wholesalerBusinessInfo.selectedBrands = $event,
                                      inputId: brand.key,
                                      name: "brands",
                                      value: brand.name
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                                    createVNode("label", {
                                      for: brand.key
                                    }, toDisplayString(brand.name), 9, ["for"])
                                  ]);
                                }), 128)),
                                ((_b = $form.brands) == null ? void 0 : _b.invalid) ? (openBlock(), createBlock(_component_Message, {
                                  key: 0,
                                  severity: "error",
                                  size: "small",
                                  variant: "simple"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString($form.brands.error.message), 1)
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true),
                                $data.wholesalerBusinessInfo.selectedBrands.includes("Other") ? (openBlock(), createBlock(_component_InputText, {
                                  key: 1,
                                  modelValue: $data.wholesalerBusinessInfo.otherBrand,
                                  "onUpdate:modelValue": ($event) => $data.wholesalerBusinessInfo.otherBrand = $event,
                                  type: "text",
                                  placeholder: "Please Specify ...",
                                  class: "w-full mt-4"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                              ]),
                              createVNode("div", null, [
                                createVNode("label", { class: "font-bold pb-3" }, " Which security brand do you have strength in? "),
                                (openBlock(true), createBlock(Fragment, null, renderList($data.securityBrands, (brand) => {
                                  return openBlock(), createBlock("div", {
                                    key: brand.key,
                                    class: "flex items-center gap-2"
                                  }, [
                                    createVNode(_component_Checkbox, {
                                      modelValue: $data.wholesalerBusinessInfo.selectedSecurityBrands,
                                      "onUpdate:modelValue": ($event) => $data.wholesalerBusinessInfo.selectedSecurityBrands = $event,
                                      inputId: brand.key,
                                      name: "securityBrands",
                                      value: brand.name
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                                    createVNode("label", {
                                      for: brand.key
                                    }, toDisplayString(brand.name), 9, ["for"])
                                  ]);
                                }), 128)),
                                ((_c = $form.securityBrands) == null ? void 0 : _c.invalid) ? (openBlock(), createBlock(_component_Message, {
                                  key: 0,
                                  severity: "error",
                                  size: "small",
                                  variant: "simple"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString($form.securityBrands.error.message), 1)
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true)
                              ]),
                              createVNode("div", { class: "flex pt-6 justify-between" }, [
                                createVNode(_component_Button, {
                                  label: "Back",
                                  severity: "secondary",
                                  icon: "pi pi-arrow-left",
                                  type: "submit",
                                  onClick: ($event) => activateCallback(1)
                                }, null, 8, ["onClick"]),
                                createVNode(_component_Button, {
                                  label: "Next",
                                  icon: "pi pi-arrow-right",
                                  iconPo: "right",
                                  type: "submit"
                                })
                              ])
                            ];
                          }),
                          _: 2
                        }, 1032, ["initialValues", "resolver", "onSubmit"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_StepPanel, {
                value: 3,
                style: { "min-width": "40vw" }
              }, {
                default: withCtx(({ activateCallback }, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="flex flex-col gap-4" data-v-efa04459${_scopeId3}><div class="text-center mt-4 mb-4 text-xl font-semibold" data-v-efa04459${_scopeId3}> Section 3: Technical Questions </div><div data-v-efa04459${_scopeId3}><label class="font-bold pb-3" data-v-efa04459${_scopeId3}> Which product categories do you mostly deal with? </label><!--[-->`);
                    ssrRenderList($data.productCategories, (category) => {
                      _push4(`<div class="flex items-center gap-2" data-v-efa04459${_scopeId3}>`);
                      _push4(ssrRenderComponent(_component_Checkbox, {
                        modelValue: $data.wholesalerTechnicalInfo.selectedCategories,
                        "onUpdate:modelValue": ($event) => $data.wholesalerTechnicalInfo.selectedCategories = $event,
                        inputId: category.key,
                        name: "wholesalerTechnicalInfo.selectedCategories",
                        value: category.name
                      }, null, _parent4, _scopeId3));
                      _push4(`<label${ssrRenderAttr("for", category.key)} data-v-efa04459${_scopeId3}>${ssrInterpolate(category.name)}</label></div>`);
                    });
                    _push4(`<!--]--></div><div data-v-efa04459${_scopeId3}><label class="font-bold pb-3" data-v-efa04459${_scopeId3}>What are the challenges you have faced when dealing with Hikvision?</label>`);
                    _push4(ssrRenderComponent(_component_Textarea, {
                      modelValue: $data.wholesalerTechnicalInfo.hikvisionChallenges,
                      "onUpdate:modelValue": ($event) => $data.wholesalerTechnicalInfo.hikvisionChallenges = $event,
                      rows: "4",
                      class: "w-full",
                      placeholder: "Describe challenges..."
                    }, null, _parent4, _scopeId3));
                    _push4(`</div><div data-v-efa04459${_scopeId3}><label class="font-bold pb-3" data-v-efa04459${_scopeId3}>What would be your advice to Secure Digital Limited?</label>`);
                    _push4(ssrRenderComponent(_component_Textarea, {
                      modelValue: $data.wholesalerTechnicalInfo.adviceToSecureDigital,
                      "onUpdate:modelValue": ($event) => $data.wholesalerTechnicalInfo.adviceToSecureDigital = $event,
                      rows: "4",
                      class: "w-full",
                      placeholder: "Share your advice..."
                    }, null, _parent4, _scopeId3));
                    _push4(`</div></div><div class="flex pt-6 justify-between" data-v-efa04459${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_Button, {
                      label: "Back",
                      severity: "secondary",
                      icon: "pi pi-arrow-left",
                      onClick: ($event) => activateCallback(2)
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_Button, {
                      label: "Submit",
                      icon: "pi pi-check",
                      iconPos: "right",
                      onClick: ($event) => $options.handleSubmit(activateCallback, 4)
                    }, null, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex flex-col gap-4" }, [
                        createVNode("div", { class: "text-center mt-4 mb-4 text-xl font-semibold" }, " Section 3: Technical Questions "),
                        createVNode("div", null, [
                          createVNode("label", { class: "font-bold pb-3" }, " Which product categories do you mostly deal with? "),
                          (openBlock(true), createBlock(Fragment, null, renderList($data.productCategories, (category) => {
                            return openBlock(), createBlock("div", {
                              key: category.key,
                              class: "flex items-center gap-2"
                            }, [
                              createVNode(_component_Checkbox, {
                                modelValue: $data.wholesalerTechnicalInfo.selectedCategories,
                                "onUpdate:modelValue": ($event) => $data.wholesalerTechnicalInfo.selectedCategories = $event,
                                inputId: category.key,
                                name: "wholesalerTechnicalInfo.selectedCategories",
                                value: category.name
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                              createVNode("label", {
                                for: category.key
                              }, toDisplayString(category.name), 9, ["for"])
                            ]);
                          }), 128))
                        ]),
                        createVNode("div", null, [
                          createVNode("label", { class: "font-bold pb-3" }, "What are the challenges you have faced when dealing with Hikvision?"),
                          createVNode(_component_Textarea, {
                            modelValue: $data.wholesalerTechnicalInfo.hikvisionChallenges,
                            "onUpdate:modelValue": ($event) => $data.wholesalerTechnicalInfo.hikvisionChallenges = $event,
                            rows: "4",
                            class: "w-full",
                            placeholder: "Describe challenges..."
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", null, [
                          createVNode("label", { class: "font-bold pb-3" }, "What would be your advice to Secure Digital Limited?"),
                          createVNode(_component_Textarea, {
                            modelValue: $data.wholesalerTechnicalInfo.adviceToSecureDigital,
                            "onUpdate:modelValue": ($event) => $data.wholesalerTechnicalInfo.adviceToSecureDigital = $event,
                            rows: "4",
                            class: "w-full",
                            placeholder: "Share your advice..."
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      createVNode("div", { class: "flex pt-6 justify-between" }, [
                        createVNode(_component_Button, {
                          label: "Back",
                          severity: "secondary",
                          icon: "pi pi-arrow-left",
                          onClick: ($event) => activateCallback(2)
                        }, null, 8, ["onClick"]),
                        createVNode(_component_Button, {
                          label: "Submit",
                          icon: "pi pi-check",
                          iconPos: "right",
                          onClick: ($event) => $options.handleSubmit(activateCallback, 4)
                        }, null, 8, ["onClick"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_StepPanel, { value: 4 }, {
                default: withCtx(({ activateCallback }, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="flex flex-col gap-4 mx-auto w-full max-w-lg min-h-[20rem]" data-v-efa04459${_scopeId3}><div class="text-center mt-4 mb-4 text-sm font-semibold" data-v-efa04459${_scopeId3}><div class="p-6 rounded-lg shadow-md" data-v-efa04459${_scopeId3}> Thank You! <p class="text-gray-700" data-v-efa04459${_scopeId3}> Your application will undergo a thorough review. Upon successful verification, you will gain access to: </p><ul class="list-disc text-left pl-5 text-gray-700 mt-3" data-v-efa04459${_scopeId3}><li data-v-efa04459${_scopeId3}><strong data-v-efa04459${_scopeId3}>Reseller Pricing</strong></li><li data-v-efa04459${_scopeId3}><strong data-v-efa04459${_scopeId3}>Comprehensive Marketing and Technical Resources</strong></li><li data-v-efa04459${_scopeId3}><strong data-v-efa04459${_scopeId3}>Product and Business Support</strong></li></ul><p class="text-gray-700 mt-4" data-v-efa04459${_scopeId3}> For any inquiries or further assistance, please do not hesitate to contact us: </p><div class="bg-white p-4 rounded-lg shadow mt-4" data-v-efa04459${_scopeId3}><p class="text-gray-800 font-semibold" data-v-efa04459${_scopeId3}> \u{1F4E7} Email: <a href="mailto:sdl@hikvisionkenya.com" class="text-blue-600 hover:underline" data-v-efa04459${_scopeId3}>sdl@hikvisionkenya.com</a></p><p class="text-gray-800 font-semibold" data-v-efa04459${_scopeId3}> \u{1F4DE} Phone: <a href="tel:+254727909060" class="text-blue-600 hover:underline" data-v-efa04459${_scopeId3}>+254 727 909 060</a></p></div><p class="text-gray-700 mt-6" data-v-efa04459${_scopeId3}> We look forward to the opportunity to collaborate with you. </p><hr class="my-4 border-gray-300" data-v-efa04459${_scopeId3}><p class="text-gray-800 font-bold" data-v-efa04459${_scopeId3}>Best regards,</p><p class="text-gray-700" data-v-efa04459${_scopeId3}> Secure Digital Limited | Hik Digital Mart Limited </p><p class="text-gray-700 font-semibold" data-v-efa04459${_scopeId3}> SDLKenya Online Shop Administration Department </p><div class="bg-white p-4 rounded-lg shadow mt-4" data-v-efa04459${_scopeId3}><p class="text-gray-800 font-semibold" data-v-efa04459${_scopeId3}> \u{1F4E7} Email: <a href="mailto:sdl@hikvisionkenya.com" class="text-blue-600 hover:underline" data-v-efa04459${_scopeId3}>sdl@hikvisionkenya.com</a></p><p class="text-gray-800 font-semibold" data-v-efa04459${_scopeId3}> \u{1F4DE} Phone: <a href="tel:+254727909060" class="text-blue-600 hover:underline" data-v-efa04459${_scopeId3}>+254 727 909 060</a></p></div></div></div></div><div class="flex pt-6 justify-between" data-v-efa04459${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_Button, {
                      label: "Back",
                      severity: "secondary",
                      icon: "pi pi-arrow-left",
                      onClick: ($event) => activateCallback(3)
                    }, null, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex flex-col gap-4 mx-auto w-full max-w-lg min-h-[20rem]" }, [
                        createVNode("div", { class: "text-center mt-4 mb-4 text-sm font-semibold" }, [
                          createVNode("div", { class: "p-6 rounded-lg shadow-md" }, [
                            createTextVNode(" Thank You! "),
                            createVNode("p", { class: "text-gray-700" }, " Your application will undergo a thorough review. Upon successful verification, you will gain access to: "),
                            createVNode("ul", { class: "list-disc text-left pl-5 text-gray-700 mt-3" }, [
                              createVNode("li", null, [
                                createVNode("strong", null, "Reseller Pricing")
                              ]),
                              createVNode("li", null, [
                                createVNode("strong", null, "Comprehensive Marketing and Technical Resources")
                              ]),
                              createVNode("li", null, [
                                createVNode("strong", null, "Product and Business Support")
                              ])
                            ]),
                            createVNode("p", { class: "text-gray-700 mt-4" }, " For any inquiries or further assistance, please do not hesitate to contact us: "),
                            createVNode("div", { class: "bg-white p-4 rounded-lg shadow mt-4" }, [
                              createVNode("p", { class: "text-gray-800 font-semibold" }, [
                                createTextVNode(" \u{1F4E7} Email: "),
                                createVNode("a", {
                                  href: "mailto:sdl@hikvisionkenya.com",
                                  class: "text-blue-600 hover:underline"
                                }, "sdl@hikvisionkenya.com")
                              ]),
                              createVNode("p", { class: "text-gray-800 font-semibold" }, [
                                createTextVNode(" \u{1F4DE} Phone: "),
                                createVNode("a", {
                                  href: "tel:+254727909060",
                                  class: "text-blue-600 hover:underline"
                                }, "+254 727 909 060")
                              ])
                            ]),
                            createVNode("p", { class: "text-gray-700 mt-6" }, " We look forward to the opportunity to collaborate with you. "),
                            createVNode("hr", { class: "my-4 border-gray-300" }),
                            createVNode("p", { class: "text-gray-800 font-bold" }, "Best regards,"),
                            createVNode("p", { class: "text-gray-700" }, " Secure Digital Limited | Hik Digital Mart Limited "),
                            createVNode("p", { class: "text-gray-700 font-semibold" }, " SDLKenya Online Shop Administration Department "),
                            createVNode("div", { class: "bg-white p-4 rounded-lg shadow mt-4" }, [
                              createVNode("p", { class: "text-gray-800 font-semibold" }, [
                                createTextVNode(" \u{1F4E7} Email: "),
                                createVNode("a", {
                                  href: "mailto:sdl@hikvisionkenya.com",
                                  class: "text-blue-600 hover:underline"
                                }, "sdl@hikvisionkenya.com")
                              ]),
                              createVNode("p", { class: "text-gray-800 font-semibold" }, [
                                createTextVNode(" \u{1F4DE} Phone: "),
                                createVNode("a", {
                                  href: "tel:+254727909060",
                                  class: "text-blue-600 hover:underline"
                                }, "+254 727 909 060")
                              ])
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "flex pt-6 justify-between" }, [
                        createVNode(_component_Button, {
                          label: "Back",
                          severity: "secondary",
                          icon: "pi pi-arrow-left",
                          onClick: ($event) => activateCallback(3)
                        }, null, 8, ["onClick"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_StepPanel, { value: 1 }, {
                  default: withCtx(({ activateCallback }) => [
                    createVNode("div", {
                      class: "flex flex-col gap-4 mx-auto",
                      style: { "min-width": "40vw" }
                    }, [
                      createVNode(_component_Toast),
                      createVNode("div", { class: "text-center mt-4 mb-4 text-xl font-semibold" }, " Section 1: Personal Information "),
                      createVNode(_component_Form, {
                        initialValues: $data.initialValues,
                        resolver: $options.resolver,
                        validateOnValueUpdate: false,
                        validateOnBlur: true,
                        validateOnMount: ["companyName"],
                        class: "flex-col gap-4",
                        onSubmit: (e) => $options.validateAndProceed(e, activateCallback, 1)
                      }, {
                        default: withCtx(($form) => {
                          var _a, _b, _c, _d, _e, _f, _g, _h, _i;
                          return [
                            createVNode("div", { class: "flex gap-4" }, [
                              createVNode("div", { class: "field w-full" }, [
                                createVNode("label", {
                                  for: "companyName",
                                  class: "font-bold"
                                }, "Company Name (Full company name)"),
                                createVNode(_component_InputText, {
                                  name: "companyName",
                                  modelValue: $data.wholesalerPersonalInfo.companyName,
                                  "onUpdate:modelValue": ($event) => $data.wholesalerPersonalInfo.companyName = $event,
                                  type: "text",
                                  class: "w-full"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                ((_a = $form.companyName) == null ? void 0 : _a.invalid) ? (openBlock(), createBlock(_component_Message, {
                                  key: 0,
                                  severity: "error",
                                  size: "small",
                                  variant: "simple"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString($form.companyName.error.message), 1)
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true)
                              ])
                            ]),
                            createVNode("div", { class: "flex gap-4" }, [
                              createVNode("div", { class: "field w-1/2" }, [
                                createVNode("label", {
                                  for: "firstName",
                                  class: "font-bold"
                                }, "First Name"),
                                createVNode(_component_InputText, {
                                  name: "firstName",
                                  modelValue: $data.wholesalerPersonalInfo.firstName,
                                  "onUpdate:modelValue": ($event) => $data.wholesalerPersonalInfo.firstName = $event,
                                  type: "text",
                                  class: "w-full"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                ((_b = $form.firstName) == null ? void 0 : _b.invalid) ? (openBlock(), createBlock(_component_Message, {
                                  key: 0,
                                  severity: "error",
                                  size: "small",
                                  variant: "simple"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString($form.firstName.error.message), 1)
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true)
                              ]),
                              createVNode("div", { class: "field w-1/2" }, [
                                createVNode("label", {
                                  for: "lastName",
                                  class: "font-bold"
                                }, "Last Name"),
                                createVNode(_component_InputText, {
                                  name: "lastName",
                                  modelValue: $data.wholesalerPersonalInfo.lastName,
                                  "onUpdate:modelValue": ($event) => $data.wholesalerPersonalInfo.lastName = $event,
                                  type: "text",
                                  class: "w-full"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                ((_c = $form.lastName) == null ? void 0 : _c.invalid) ? (openBlock(), createBlock(_component_Message, {
                                  key: 0,
                                  severity: "error",
                                  size: "small",
                                  variant: "simple"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString($form.lastName.error.message), 1)
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true)
                              ])
                            ]),
                            createVNode("div", { class: "flex gap-4" }, [
                              createVNode("div", { class: "field w-1/2" }, [
                                createVNode("label", {
                                  for: "email",
                                  class: "font-bold"
                                }, "Email Address"),
                                createVNode(_component_InputText, {
                                  name: "email",
                                  modelValue: $data.wholesalerPersonalInfo.email,
                                  "onUpdate:modelValue": ($event) => $data.wholesalerPersonalInfo.email = $event,
                                  type: "email",
                                  class: "w-full"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                ((_d = $form.email) == null ? void 0 : _d.invalid) ? (openBlock(), createBlock(_component_Message, {
                                  key: 0,
                                  severity: "error",
                                  size: "small",
                                  variant: "simple"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString($form.email.error.message), 1)
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true)
                              ]),
                              createVNode("div", { class: "field w-1/2" }, [
                                createVNode("label", {
                                  for: "email2",
                                  class: "font-bold"
                                }, "Email Address 2"),
                                createVNode(_component_InputText, {
                                  name: "email2",
                                  modelValue: $data.wholesalerPersonalInfo.email2,
                                  "onUpdate:modelValue": ($event) => $data.wholesalerPersonalInfo.email2 = $event,
                                  type: "email",
                                  class: "w-full"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                ((_e = $form.email2) == null ? void 0 : _e.invalid) ? (openBlock(), createBlock(_component_Message, {
                                  key: 0,
                                  severity: "error",
                                  size: "small",
                                  variant: "simple"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString($form.email2.error.message), 1)
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true)
                              ])
                            ]),
                            createVNode("div", { class: "flex gap-4" }, [
                              createVNode("div", { class: "field w-1/2" }, [
                                createVNode("label", {
                                  for: "phoneNumber",
                                  class: "font-bold"
                                }, "Phone Number 1"),
                                createVNode(_component_InputText, {
                                  name: "phoneNumber",
                                  modelValue: $data.wholesalerPersonalInfo.phoneNumber,
                                  "onUpdate:modelValue": ($event) => $data.wholesalerPersonalInfo.phoneNumber = $event,
                                  type: "tel",
                                  class: "w-full"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                ((_f = $form.phoneNumber) == null ? void 0 : _f.invalid) ? (openBlock(), createBlock(_component_Message, {
                                  key: 0,
                                  severity: "error",
                                  size: "small",
                                  variant: "simple"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString($form.phoneNumber.error.message), 1)
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true)
                              ]),
                              createVNode("div", { class: "field w-1/2" }, [
                                createVNode("label", {
                                  for: "phoneNumber2",
                                  class: "font-bold"
                                }, "Phone Number 2"),
                                createVNode(_component_InputText, {
                                  name: "phoneNumber2",
                                  modelValue: $data.wholesalerPersonalInfo.phoneNumber2,
                                  "onUpdate:modelValue": ($event) => $data.wholesalerPersonalInfo.phoneNumber2 = $event,
                                  type: "tel",
                                  class: "w-full"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                ((_g = $form.phoneNumber2) == null ? void 0 : _g.invalid) ? (openBlock(), createBlock(_component_Message, {
                                  key: 0,
                                  severity: "error",
                                  size: "small",
                                  variant: "simple"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString($form.phoneNumber2.error.message), 1)
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true)
                              ])
                            ]),
                            createVNode("div", { class: "flex gap-4" }, [
                              createVNode("div", { class: "field w-1/2" }, [
                                createVNode("label", {
                                  for: "address",
                                  class: "font-bold"
                                }, "Business Address"),
                                createVNode(_component_InputText, {
                                  name: "address",
                                  modelValue: $data.wholesalerPersonalInfo.address,
                                  "onUpdate:modelValue": ($event) => $data.wholesalerPersonalInfo.address = $event,
                                  type: "text",
                                  class: "w-full"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                ((_h = $form.address) == null ? void 0 : _h.invalid) ? (openBlock(), createBlock(_component_Message, {
                                  key: 0,
                                  severity: "error",
                                  size: "small",
                                  variant: "simple"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString($form.address.error.message), 1)
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true)
                              ]),
                              createVNode("div", { class: "field w-1/2" }, [
                                createVNode("label", {
                                  for: "password",
                                  class: "font-bold"
                                }, "Password"),
                                createVNode(_component_InputText, {
                                  name: "password",
                                  modelValue: $data.wholesalerPersonalInfo.password,
                                  "onUpdate:modelValue": ($event) => $data.wholesalerPersonalInfo.password = $event,
                                  type: "password",
                                  class: "w-full"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                ((_i = $form.password) == null ? void 0 : _i.invalid) ? (openBlock(), createBlock(_component_Message, {
                                  key: 0,
                                  severity: "error",
                                  size: "small",
                                  variant: "simple"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString($form.password.error.message), 1)
                                  ]),
                                  _: 2
                                }, 1024)) : createCommentVNode("", true)
                              ])
                            ]),
                            createVNode("div", {
                              class: "flex pt-6 justify-end",
                              style: { "max-width": "800px", "margin": "0 auto" }
                            }, [
                              createVNode(_component_Button, {
                                label: "Next",
                                icon: "pi pi-arrow-right",
                                iconPos: "right",
                                type: "submit"
                              })
                            ])
                          ];
                        }),
                        _: 2
                      }, 1032, ["initialValues", "resolver", "onSubmit"])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_StepPanel, {
                  value: 2,
                  style: { "min-width": "40vw" }
                }, {
                  default: withCtx(({ activateCallback }) => [
                    createVNode("div", { class: "flex flex-col gap-4" }, [
                      createVNode("div", { class: "text-center mt-4 mb-4 text-xl font-semibold" }, " Section 2: Business Details "),
                      createVNode(_component_Form, {
                        initialValues: $data.initialBusinessValues,
                        resolver: $options.businessResolver,
                        validateOnValueUpdate: false,
                        validateOnBlur: true,
                        class: "flex-col gap-4",
                        onSubmit: (e) => $options.validateAndProceed(e, activateCallback, 2)
                      }, {
                        default: withCtx(($form) => {
                          var _a, _b, _c;
                          return [
                            createVNode("div", null, [
                              createVNode("label", { class: "font-bold py-5" }, " Which of the following describes your business well? "),
                              (openBlock(true), createBlock(Fragment, null, renderList($data.businessTypes, (type) => {
                                return openBlock(), createBlock("div", {
                                  key: type.key,
                                  class: "flex items-center gap-2"
                                }, [
                                  createVNode(_component_RadioButton, {
                                    modelValue: $data.wholesalerBusinessInfo.selectedBusinessType,
                                    "onUpdate:modelValue": ($event) => $data.wholesalerBusinessInfo.selectedBusinessType = $event,
                                    inputId: type.key,
                                    name: "businessType",
                                    value: type.name
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                                  createVNode("label", {
                                    for: type.key
                                  }, toDisplayString(type.name), 9, ["for"])
                                ]);
                              }), 128)),
                              ((_a = $form.businessType) == null ? void 0 : _a.invalid) ? (openBlock(), createBlock(_component_Message, {
                                key: 0,
                                severity: "error",
                                size: "small",
                                variant: "simple"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString($form.businessType.error.message), 1)
                                ]),
                                _: 2
                              }, 1024)) : createCommentVNode("", true),
                              $data.wholesalerBusinessInfo.selectedBusinessType === "Other" ? (openBlock(), createBlock(_component_InputText, {
                                key: 1,
                                modelValue: $data.wholesalerBusinessInfo.otherBrand,
                                "onUpdate:modelValue": ($event) => $data.wholesalerBusinessInfo.otherBrand = $event,
                                type: "text",
                                placeholder: "Please Specify ...",
                                class: "w-full mt-4"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                            ]),
                            createVNode("div", null, [
                              createVNode("label", { class: "font-bold pb-3" }, "Which brands do you deal with?"),
                              (openBlock(true), createBlock(Fragment, null, renderList($data.brandList, (brand) => {
                                return openBlock(), createBlock("div", {
                                  key: brand.key,
                                  class: "flex items-center gap-2"
                                }, [
                                  createVNode(_component_Checkbox, {
                                    modelValue: $data.wholesalerBusinessInfo.selectedBrands,
                                    "onUpdate:modelValue": ($event) => $data.wholesalerBusinessInfo.selectedBrands = $event,
                                    inputId: brand.key,
                                    name: "brands",
                                    value: brand.name
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                                  createVNode("label", {
                                    for: brand.key
                                  }, toDisplayString(brand.name), 9, ["for"])
                                ]);
                              }), 128)),
                              ((_b = $form.brands) == null ? void 0 : _b.invalid) ? (openBlock(), createBlock(_component_Message, {
                                key: 0,
                                severity: "error",
                                size: "small",
                                variant: "simple"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString($form.brands.error.message), 1)
                                ]),
                                _: 2
                              }, 1024)) : createCommentVNode("", true),
                              $data.wholesalerBusinessInfo.selectedBrands.includes("Other") ? (openBlock(), createBlock(_component_InputText, {
                                key: 1,
                                modelValue: $data.wholesalerBusinessInfo.otherBrand,
                                "onUpdate:modelValue": ($event) => $data.wholesalerBusinessInfo.otherBrand = $event,
                                type: "text",
                                placeholder: "Please Specify ...",
                                class: "w-full mt-4"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                            ]),
                            createVNode("div", null, [
                              createVNode("label", { class: "font-bold pb-3" }, " Which security brand do you have strength in? "),
                              (openBlock(true), createBlock(Fragment, null, renderList($data.securityBrands, (brand) => {
                                return openBlock(), createBlock("div", {
                                  key: brand.key,
                                  class: "flex items-center gap-2"
                                }, [
                                  createVNode(_component_Checkbox, {
                                    modelValue: $data.wholesalerBusinessInfo.selectedSecurityBrands,
                                    "onUpdate:modelValue": ($event) => $data.wholesalerBusinessInfo.selectedSecurityBrands = $event,
                                    inputId: brand.key,
                                    name: "securityBrands",
                                    value: brand.name
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                                  createVNode("label", {
                                    for: brand.key
                                  }, toDisplayString(brand.name), 9, ["for"])
                                ]);
                              }), 128)),
                              ((_c = $form.securityBrands) == null ? void 0 : _c.invalid) ? (openBlock(), createBlock(_component_Message, {
                                key: 0,
                                severity: "error",
                                size: "small",
                                variant: "simple"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString($form.securityBrands.error.message), 1)
                                ]),
                                _: 2
                              }, 1024)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", { class: "flex pt-6 justify-between" }, [
                              createVNode(_component_Button, {
                                label: "Back",
                                severity: "secondary",
                                icon: "pi pi-arrow-left",
                                type: "submit",
                                onClick: ($event) => activateCallback(1)
                              }, null, 8, ["onClick"]),
                              createVNode(_component_Button, {
                                label: "Next",
                                icon: "pi pi-arrow-right",
                                iconPo: "right",
                                type: "submit"
                              })
                            ])
                          ];
                        }),
                        _: 2
                      }, 1032, ["initialValues", "resolver", "onSubmit"])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_StepPanel, {
                  value: 3,
                  style: { "min-width": "40vw" }
                }, {
                  default: withCtx(({ activateCallback }) => [
                    createVNode("div", { class: "flex flex-col gap-4" }, [
                      createVNode("div", { class: "text-center mt-4 mb-4 text-xl font-semibold" }, " Section 3: Technical Questions "),
                      createVNode("div", null, [
                        createVNode("label", { class: "font-bold pb-3" }, " Which product categories do you mostly deal with? "),
                        (openBlock(true), createBlock(Fragment, null, renderList($data.productCategories, (category) => {
                          return openBlock(), createBlock("div", {
                            key: category.key,
                            class: "flex items-center gap-2"
                          }, [
                            createVNode(_component_Checkbox, {
                              modelValue: $data.wholesalerTechnicalInfo.selectedCategories,
                              "onUpdate:modelValue": ($event) => $data.wholesalerTechnicalInfo.selectedCategories = $event,
                              inputId: category.key,
                              name: "wholesalerTechnicalInfo.selectedCategories",
                              value: category.name
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                            createVNode("label", {
                              for: category.key
                            }, toDisplayString(category.name), 9, ["for"])
                          ]);
                        }), 128))
                      ]),
                      createVNode("div", null, [
                        createVNode("label", { class: "font-bold pb-3" }, "What are the challenges you have faced when dealing with Hikvision?"),
                        createVNode(_component_Textarea, {
                          modelValue: $data.wholesalerTechnicalInfo.hikvisionChallenges,
                          "onUpdate:modelValue": ($event) => $data.wholesalerTechnicalInfo.hikvisionChallenges = $event,
                          rows: "4",
                          class: "w-full",
                          placeholder: "Describe challenges..."
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", { class: "font-bold pb-3" }, "What would be your advice to Secure Digital Limited?"),
                        createVNode(_component_Textarea, {
                          modelValue: $data.wholesalerTechnicalInfo.adviceToSecureDigital,
                          "onUpdate:modelValue": ($event) => $data.wholesalerTechnicalInfo.adviceToSecureDigital = $event,
                          rows: "4",
                          class: "w-full",
                          placeholder: "Share your advice..."
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    createVNode("div", { class: "flex pt-6 justify-between" }, [
                      createVNode(_component_Button, {
                        label: "Back",
                        severity: "secondary",
                        icon: "pi pi-arrow-left",
                        onClick: ($event) => activateCallback(2)
                      }, null, 8, ["onClick"]),
                      createVNode(_component_Button, {
                        label: "Submit",
                        icon: "pi pi-check",
                        iconPos: "right",
                        onClick: ($event) => $options.handleSubmit(activateCallback, 4)
                      }, null, 8, ["onClick"])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_StepPanel, { value: 4 }, {
                  default: withCtx(({ activateCallback }) => [
                    createVNode("div", { class: "flex flex-col gap-4 mx-auto w-full max-w-lg min-h-[20rem]" }, [
                      createVNode("div", { class: "text-center mt-4 mb-4 text-sm font-semibold" }, [
                        createVNode("div", { class: "p-6 rounded-lg shadow-md" }, [
                          createTextVNode(" Thank You! "),
                          createVNode("p", { class: "text-gray-700" }, " Your application will undergo a thorough review. Upon successful verification, you will gain access to: "),
                          createVNode("ul", { class: "list-disc text-left pl-5 text-gray-700 mt-3" }, [
                            createVNode("li", null, [
                              createVNode("strong", null, "Reseller Pricing")
                            ]),
                            createVNode("li", null, [
                              createVNode("strong", null, "Comprehensive Marketing and Technical Resources")
                            ]),
                            createVNode("li", null, [
                              createVNode("strong", null, "Product and Business Support")
                            ])
                          ]),
                          createVNode("p", { class: "text-gray-700 mt-4" }, " For any inquiries or further assistance, please do not hesitate to contact us: "),
                          createVNode("div", { class: "bg-white p-4 rounded-lg shadow mt-4" }, [
                            createVNode("p", { class: "text-gray-800 font-semibold" }, [
                              createTextVNode(" \u{1F4E7} Email: "),
                              createVNode("a", {
                                href: "mailto:sdl@hikvisionkenya.com",
                                class: "text-blue-600 hover:underline"
                              }, "sdl@hikvisionkenya.com")
                            ]),
                            createVNode("p", { class: "text-gray-800 font-semibold" }, [
                              createTextVNode(" \u{1F4DE} Phone: "),
                              createVNode("a", {
                                href: "tel:+254727909060",
                                class: "text-blue-600 hover:underline"
                              }, "+254 727 909 060")
                            ])
                          ]),
                          createVNode("p", { class: "text-gray-700 mt-6" }, " We look forward to the opportunity to collaborate with you. "),
                          createVNode("hr", { class: "my-4 border-gray-300" }),
                          createVNode("p", { class: "text-gray-800 font-bold" }, "Best regards,"),
                          createVNode("p", { class: "text-gray-700" }, " Secure Digital Limited | Hik Digital Mart Limited "),
                          createVNode("p", { class: "text-gray-700 font-semibold" }, " SDLKenya Online Shop Administration Department "),
                          createVNode("div", { class: "bg-white p-4 rounded-lg shadow mt-4" }, [
                            createVNode("p", { class: "text-gray-800 font-semibold" }, [
                              createTextVNode(" \u{1F4E7} Email: "),
                              createVNode("a", {
                                href: "mailto:sdl@hikvisionkenya.com",
                                class: "text-blue-600 hover:underline"
                              }, "sdl@hikvisionkenya.com")
                            ]),
                            createVNode("p", { class: "text-gray-800 font-semibold" }, [
                              createTextVNode(" \u{1F4DE} Phone: "),
                              createVNode("a", {
                                href: "tel:+254727909060",
                                class: "text-blue-600 hover:underline"
                              }, "+254 727 909 060")
                            ])
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "flex pt-6 justify-between" }, [
                      createVNode(_component_Button, {
                        label: "Back",
                        severity: "secondary",
                        icon: "pi pi-arrow-left",
                        onClick: ($event) => activateCallback(3)
                      }, null, 8, ["onClick"])
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_StepList, null, {
            default: withCtx(() => [
              createVNode(_component_Step, {
                asChild: "",
                value: 1
              }, {
                default: withCtx(({ activateCallback, value, a11yAttrs }) => [
                  createVNode("div", mergeProps({ class: "flex flex-row flex-auto gap-2" }, a11yAttrs.root), [
                    createVNode("button", mergeProps({
                      class: "bg-transparent border-0 inline-flex flex-col gap-2",
                      onClick: activateCallback
                    }, a11yAttrs.header), [
                      createVNode("span", {
                        class: [
                          "rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",
                          {
                            "bg-primary text-primary-contrast border-primary": value <= $data.activeStep,
                            "border-surface-200 dark:border-surface-700": value > $data.activeStep
                          }
                        ]
                      }, [
                        createVNode("i", { class: "pi pi-building" })
                      ], 2)
                    ], 16, ["onClick"]),
                    createVNode(_component_Divider)
                  ], 16)
                ]),
                _: 1
              }),
              createVNode(_component_Step, {
                asChild: "",
                value: 2
              }, {
                default: withCtx(({ activateCallback, value, a11yAttrs }) => [
                  createVNode("div", mergeProps({ class: "flex flex-row flex-auto gap-2 pl-2" }, a11yAttrs.root), [
                    createVNode("button", mergeProps({
                      class: "bg-transparent border-0 inline-flex flex-col gap-2",
                      onClick: activateCallback
                    }, a11yAttrs.header), [
                      createVNode("span", {
                        class: [
                          "rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",
                          {
                            "bg-primary text-primary-contrast border-primary": value <= $data.activeStep,
                            "border-surface-200 dark:border-surface-700": value > $data.activeStep
                          }
                        ]
                      }, [
                        createVNode("i", { class: "pi pi-cog" })
                      ], 2)
                    ], 16, ["onClick"]),
                    createVNode(_component_Divider)
                  ], 16)
                ]),
                _: 1
              }),
              createVNode(_component_Step, {
                asChild: "",
                value: 3
              }, {
                default: withCtx(({ activateCallback, value, a11yAttrs }) => [
                  createVNode("div", mergeProps({ class: "flex flex-row pl-2" }, a11yAttrs.root), [
                    createVNode("button", mergeProps({
                      class: "bg-transparent border-0 inline-flex flex-col gap-2",
                      onClick: activateCallback
                    }, a11yAttrs.header), [
                      createVNode("span", {
                        class: [
                          "rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",
                          {
                            "bg-primary text-primary-contrast border-primary": value <= $data.activeStep,
                            "border-surface-200 dark:border-surface-700": value > $data.activeStep
                          }
                        ]
                      }, [
                        createVNode("i", { class: "pi pi-question-circle" })
                      ], 2)
                    ], 16, ["onClick"]),
                    createVNode(_component_Divider)
                  ], 16)
                ]),
                _: 1
              }),
              createVNode(_component_Step, {
                asChild: "",
                value: 4
              }, {
                default: withCtx(({ activateCallback, value, a11yAttrs }) => [
                  createVNode("div", mergeProps({ class: "flex flex-row pl-2" }, a11yAttrs.root), [
                    createVNode("button", mergeProps({
                      class: "bg-transparent border-0 inline-flex flex-col gap-2",
                      onClick: activateCallback
                    }, a11yAttrs.header), [
                      createVNode("span", {
                        class: [
                          "rounded-full border-2 w-12 h-12 inline-flex items-center justify-center",
                          {
                            "bg-primary text-primary-contrast border-primary": value <= $data.activeStep,
                            "border-surface-200 dark:border-surface-700": value > $data.activeStep
                          }
                        ]
                      }, [
                        createVNode("i", { class: "pi pi-check-circle" })
                      ], 2)
                    ], 16, ["onClick"])
                  ], 16)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_StepPanels, null, {
            default: withCtx(() => [
              createVNode(_component_StepPanel, { value: 1 }, {
                default: withCtx(({ activateCallback }) => [
                  createVNode("div", {
                    class: "flex flex-col gap-4 mx-auto",
                    style: { "min-width": "40vw" }
                  }, [
                    createVNode(_component_Toast),
                    createVNode("div", { class: "text-center mt-4 mb-4 text-xl font-semibold" }, " Section 1: Personal Information "),
                    createVNode(_component_Form, {
                      initialValues: $data.initialValues,
                      resolver: $options.resolver,
                      validateOnValueUpdate: false,
                      validateOnBlur: true,
                      validateOnMount: ["companyName"],
                      class: "flex-col gap-4",
                      onSubmit: (e) => $options.validateAndProceed(e, activateCallback, 1)
                    }, {
                      default: withCtx(($form) => {
                        var _a, _b, _c, _d, _e, _f, _g, _h, _i;
                        return [
                          createVNode("div", { class: "flex gap-4" }, [
                            createVNode("div", { class: "field w-full" }, [
                              createVNode("label", {
                                for: "companyName",
                                class: "font-bold"
                              }, "Company Name (Full company name)"),
                              createVNode(_component_InputText, {
                                name: "companyName",
                                modelValue: $data.wholesalerPersonalInfo.companyName,
                                "onUpdate:modelValue": ($event) => $data.wholesalerPersonalInfo.companyName = $event,
                                type: "text",
                                class: "w-full"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              ((_a = $form.companyName) == null ? void 0 : _a.invalid) ? (openBlock(), createBlock(_component_Message, {
                                key: 0,
                                severity: "error",
                                size: "small",
                                variant: "simple"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString($form.companyName.error.message), 1)
                                ]),
                                _: 2
                              }, 1024)) : createCommentVNode("", true)
                            ])
                          ]),
                          createVNode("div", { class: "flex gap-4" }, [
                            createVNode("div", { class: "field w-1/2" }, [
                              createVNode("label", {
                                for: "firstName",
                                class: "font-bold"
                              }, "First Name"),
                              createVNode(_component_InputText, {
                                name: "firstName",
                                modelValue: $data.wholesalerPersonalInfo.firstName,
                                "onUpdate:modelValue": ($event) => $data.wholesalerPersonalInfo.firstName = $event,
                                type: "text",
                                class: "w-full"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              ((_b = $form.firstName) == null ? void 0 : _b.invalid) ? (openBlock(), createBlock(_component_Message, {
                                key: 0,
                                severity: "error",
                                size: "small",
                                variant: "simple"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString($form.firstName.error.message), 1)
                                ]),
                                _: 2
                              }, 1024)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", { class: "field w-1/2" }, [
                              createVNode("label", {
                                for: "lastName",
                                class: "font-bold"
                              }, "Last Name"),
                              createVNode(_component_InputText, {
                                name: "lastName",
                                modelValue: $data.wholesalerPersonalInfo.lastName,
                                "onUpdate:modelValue": ($event) => $data.wholesalerPersonalInfo.lastName = $event,
                                type: "text",
                                class: "w-full"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              ((_c = $form.lastName) == null ? void 0 : _c.invalid) ? (openBlock(), createBlock(_component_Message, {
                                key: 0,
                                severity: "error",
                                size: "small",
                                variant: "simple"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString($form.lastName.error.message), 1)
                                ]),
                                _: 2
                              }, 1024)) : createCommentVNode("", true)
                            ])
                          ]),
                          createVNode("div", { class: "flex gap-4" }, [
                            createVNode("div", { class: "field w-1/2" }, [
                              createVNode("label", {
                                for: "email",
                                class: "font-bold"
                              }, "Email Address"),
                              createVNode(_component_InputText, {
                                name: "email",
                                modelValue: $data.wholesalerPersonalInfo.email,
                                "onUpdate:modelValue": ($event) => $data.wholesalerPersonalInfo.email = $event,
                                type: "email",
                                class: "w-full"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              ((_d = $form.email) == null ? void 0 : _d.invalid) ? (openBlock(), createBlock(_component_Message, {
                                key: 0,
                                severity: "error",
                                size: "small",
                                variant: "simple"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString($form.email.error.message), 1)
                                ]),
                                _: 2
                              }, 1024)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", { class: "field w-1/2" }, [
                              createVNode("label", {
                                for: "email2",
                                class: "font-bold"
                              }, "Email Address 2"),
                              createVNode(_component_InputText, {
                                name: "email2",
                                modelValue: $data.wholesalerPersonalInfo.email2,
                                "onUpdate:modelValue": ($event) => $data.wholesalerPersonalInfo.email2 = $event,
                                type: "email",
                                class: "w-full"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              ((_e = $form.email2) == null ? void 0 : _e.invalid) ? (openBlock(), createBlock(_component_Message, {
                                key: 0,
                                severity: "error",
                                size: "small",
                                variant: "simple"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString($form.email2.error.message), 1)
                                ]),
                                _: 2
                              }, 1024)) : createCommentVNode("", true)
                            ])
                          ]),
                          createVNode("div", { class: "flex gap-4" }, [
                            createVNode("div", { class: "field w-1/2" }, [
                              createVNode("label", {
                                for: "phoneNumber",
                                class: "font-bold"
                              }, "Phone Number 1"),
                              createVNode(_component_InputText, {
                                name: "phoneNumber",
                                modelValue: $data.wholesalerPersonalInfo.phoneNumber,
                                "onUpdate:modelValue": ($event) => $data.wholesalerPersonalInfo.phoneNumber = $event,
                                type: "tel",
                                class: "w-full"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              ((_f = $form.phoneNumber) == null ? void 0 : _f.invalid) ? (openBlock(), createBlock(_component_Message, {
                                key: 0,
                                severity: "error",
                                size: "small",
                                variant: "simple"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString($form.phoneNumber.error.message), 1)
                                ]),
                                _: 2
                              }, 1024)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", { class: "field w-1/2" }, [
                              createVNode("label", {
                                for: "phoneNumber2",
                                class: "font-bold"
                              }, "Phone Number 2"),
                              createVNode(_component_InputText, {
                                name: "phoneNumber2",
                                modelValue: $data.wholesalerPersonalInfo.phoneNumber2,
                                "onUpdate:modelValue": ($event) => $data.wholesalerPersonalInfo.phoneNumber2 = $event,
                                type: "tel",
                                class: "w-full"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              ((_g = $form.phoneNumber2) == null ? void 0 : _g.invalid) ? (openBlock(), createBlock(_component_Message, {
                                key: 0,
                                severity: "error",
                                size: "small",
                                variant: "simple"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString($form.phoneNumber2.error.message), 1)
                                ]),
                                _: 2
                              }, 1024)) : createCommentVNode("", true)
                            ])
                          ]),
                          createVNode("div", { class: "flex gap-4" }, [
                            createVNode("div", { class: "field w-1/2" }, [
                              createVNode("label", {
                                for: "address",
                                class: "font-bold"
                              }, "Business Address"),
                              createVNode(_component_InputText, {
                                name: "address",
                                modelValue: $data.wholesalerPersonalInfo.address,
                                "onUpdate:modelValue": ($event) => $data.wholesalerPersonalInfo.address = $event,
                                type: "text",
                                class: "w-full"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              ((_h = $form.address) == null ? void 0 : _h.invalid) ? (openBlock(), createBlock(_component_Message, {
                                key: 0,
                                severity: "error",
                                size: "small",
                                variant: "simple"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString($form.address.error.message), 1)
                                ]),
                                _: 2
                              }, 1024)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", { class: "field w-1/2" }, [
                              createVNode("label", {
                                for: "password",
                                class: "font-bold"
                              }, "Password"),
                              createVNode(_component_InputText, {
                                name: "password",
                                modelValue: $data.wholesalerPersonalInfo.password,
                                "onUpdate:modelValue": ($event) => $data.wholesalerPersonalInfo.password = $event,
                                type: "password",
                                class: "w-full"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              ((_i = $form.password) == null ? void 0 : _i.invalid) ? (openBlock(), createBlock(_component_Message, {
                                key: 0,
                                severity: "error",
                                size: "small",
                                variant: "simple"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString($form.password.error.message), 1)
                                ]),
                                _: 2
                              }, 1024)) : createCommentVNode("", true)
                            ])
                          ]),
                          createVNode("div", {
                            class: "flex pt-6 justify-end",
                            style: { "max-width": "800px", "margin": "0 auto" }
                          }, [
                            createVNode(_component_Button, {
                              label: "Next",
                              icon: "pi pi-arrow-right",
                              iconPos: "right",
                              type: "submit"
                            })
                          ])
                        ];
                      }),
                      _: 2
                    }, 1032, ["initialValues", "resolver", "onSubmit"])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_StepPanel, {
                value: 2,
                style: { "min-width": "40vw" }
              }, {
                default: withCtx(({ activateCallback }) => [
                  createVNode("div", { class: "flex flex-col gap-4" }, [
                    createVNode("div", { class: "text-center mt-4 mb-4 text-xl font-semibold" }, " Section 2: Business Details "),
                    createVNode(_component_Form, {
                      initialValues: $data.initialBusinessValues,
                      resolver: $options.businessResolver,
                      validateOnValueUpdate: false,
                      validateOnBlur: true,
                      class: "flex-col gap-4",
                      onSubmit: (e) => $options.validateAndProceed(e, activateCallback, 2)
                    }, {
                      default: withCtx(($form) => {
                        var _a, _b, _c;
                        return [
                          createVNode("div", null, [
                            createVNode("label", { class: "font-bold py-5" }, " Which of the following describes your business well? "),
                            (openBlock(true), createBlock(Fragment, null, renderList($data.businessTypes, (type) => {
                              return openBlock(), createBlock("div", {
                                key: type.key,
                                class: "flex items-center gap-2"
                              }, [
                                createVNode(_component_RadioButton, {
                                  modelValue: $data.wholesalerBusinessInfo.selectedBusinessType,
                                  "onUpdate:modelValue": ($event) => $data.wholesalerBusinessInfo.selectedBusinessType = $event,
                                  inputId: type.key,
                                  name: "businessType",
                                  value: type.name
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                                createVNode("label", {
                                  for: type.key
                                }, toDisplayString(type.name), 9, ["for"])
                              ]);
                            }), 128)),
                            ((_a = $form.businessType) == null ? void 0 : _a.invalid) ? (openBlock(), createBlock(_component_Message, {
                              key: 0,
                              severity: "error",
                              size: "small",
                              variant: "simple"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString($form.businessType.error.message), 1)
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true),
                            $data.wholesalerBusinessInfo.selectedBusinessType === "Other" ? (openBlock(), createBlock(_component_InputText, {
                              key: 1,
                              modelValue: $data.wholesalerBusinessInfo.otherBrand,
                              "onUpdate:modelValue": ($event) => $data.wholesalerBusinessInfo.otherBrand = $event,
                              type: "text",
                              placeholder: "Please Specify ...",
                              class: "w-full mt-4"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                          ]),
                          createVNode("div", null, [
                            createVNode("label", { class: "font-bold pb-3" }, "Which brands do you deal with?"),
                            (openBlock(true), createBlock(Fragment, null, renderList($data.brandList, (brand) => {
                              return openBlock(), createBlock("div", {
                                key: brand.key,
                                class: "flex items-center gap-2"
                              }, [
                                createVNode(_component_Checkbox, {
                                  modelValue: $data.wholesalerBusinessInfo.selectedBrands,
                                  "onUpdate:modelValue": ($event) => $data.wholesalerBusinessInfo.selectedBrands = $event,
                                  inputId: brand.key,
                                  name: "brands",
                                  value: brand.name
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                                createVNode("label", {
                                  for: brand.key
                                }, toDisplayString(brand.name), 9, ["for"])
                              ]);
                            }), 128)),
                            ((_b = $form.brands) == null ? void 0 : _b.invalid) ? (openBlock(), createBlock(_component_Message, {
                              key: 0,
                              severity: "error",
                              size: "small",
                              variant: "simple"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString($form.brands.error.message), 1)
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true),
                            $data.wholesalerBusinessInfo.selectedBrands.includes("Other") ? (openBlock(), createBlock(_component_InputText, {
                              key: 1,
                              modelValue: $data.wholesalerBusinessInfo.otherBrand,
                              "onUpdate:modelValue": ($event) => $data.wholesalerBusinessInfo.otherBrand = $event,
                              type: "text",
                              placeholder: "Please Specify ...",
                              class: "w-full mt-4"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                          ]),
                          createVNode("div", null, [
                            createVNode("label", { class: "font-bold pb-3" }, " Which security brand do you have strength in? "),
                            (openBlock(true), createBlock(Fragment, null, renderList($data.securityBrands, (brand) => {
                              return openBlock(), createBlock("div", {
                                key: brand.key,
                                class: "flex items-center gap-2"
                              }, [
                                createVNode(_component_Checkbox, {
                                  modelValue: $data.wholesalerBusinessInfo.selectedSecurityBrands,
                                  "onUpdate:modelValue": ($event) => $data.wholesalerBusinessInfo.selectedSecurityBrands = $event,
                                  inputId: brand.key,
                                  name: "securityBrands",
                                  value: brand.name
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                                createVNode("label", {
                                  for: brand.key
                                }, toDisplayString(brand.name), 9, ["for"])
                              ]);
                            }), 128)),
                            ((_c = $form.securityBrands) == null ? void 0 : _c.invalid) ? (openBlock(), createBlock(_component_Message, {
                              key: 0,
                              severity: "error",
                              size: "small",
                              variant: "simple"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString($form.securityBrands.error.message), 1)
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "flex pt-6 justify-between" }, [
                            createVNode(_component_Button, {
                              label: "Back",
                              severity: "secondary",
                              icon: "pi pi-arrow-left",
                              type: "submit",
                              onClick: ($event) => activateCallback(1)
                            }, null, 8, ["onClick"]),
                            createVNode(_component_Button, {
                              label: "Next",
                              icon: "pi pi-arrow-right",
                              iconPo: "right",
                              type: "submit"
                            })
                          ])
                        ];
                      }),
                      _: 2
                    }, 1032, ["initialValues", "resolver", "onSubmit"])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_StepPanel, {
                value: 3,
                style: { "min-width": "40vw" }
              }, {
                default: withCtx(({ activateCallback }) => [
                  createVNode("div", { class: "flex flex-col gap-4" }, [
                    createVNode("div", { class: "text-center mt-4 mb-4 text-xl font-semibold" }, " Section 3: Technical Questions "),
                    createVNode("div", null, [
                      createVNode("label", { class: "font-bold pb-3" }, " Which product categories do you mostly deal with? "),
                      (openBlock(true), createBlock(Fragment, null, renderList($data.productCategories, (category) => {
                        return openBlock(), createBlock("div", {
                          key: category.key,
                          class: "flex items-center gap-2"
                        }, [
                          createVNode(_component_Checkbox, {
                            modelValue: $data.wholesalerTechnicalInfo.selectedCategories,
                            "onUpdate:modelValue": ($event) => $data.wholesalerTechnicalInfo.selectedCategories = $event,
                            inputId: category.key,
                            name: "wholesalerTechnicalInfo.selectedCategories",
                            value: category.name
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "inputId", "value"]),
                          createVNode("label", {
                            for: category.key
                          }, toDisplayString(category.name), 9, ["for"])
                        ]);
                      }), 128))
                    ]),
                    createVNode("div", null, [
                      createVNode("label", { class: "font-bold pb-3" }, "What are the challenges you have faced when dealing with Hikvision?"),
                      createVNode(_component_Textarea, {
                        modelValue: $data.wholesalerTechnicalInfo.hikvisionChallenges,
                        "onUpdate:modelValue": ($event) => $data.wholesalerTechnicalInfo.hikvisionChallenges = $event,
                        rows: "4",
                        class: "w-full",
                        placeholder: "Describe challenges..."
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", null, [
                      createVNode("label", { class: "font-bold pb-3" }, "What would be your advice to Secure Digital Limited?"),
                      createVNode(_component_Textarea, {
                        modelValue: $data.wholesalerTechnicalInfo.adviceToSecureDigital,
                        "onUpdate:modelValue": ($event) => $data.wholesalerTechnicalInfo.adviceToSecureDigital = $event,
                        rows: "4",
                        class: "w-full",
                        placeholder: "Share your advice..."
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  createVNode("div", { class: "flex pt-6 justify-between" }, [
                    createVNode(_component_Button, {
                      label: "Back",
                      severity: "secondary",
                      icon: "pi pi-arrow-left",
                      onClick: ($event) => activateCallback(2)
                    }, null, 8, ["onClick"]),
                    createVNode(_component_Button, {
                      label: "Submit",
                      icon: "pi pi-check",
                      iconPos: "right",
                      onClick: ($event) => $options.handleSubmit(activateCallback, 4)
                    }, null, 8, ["onClick"])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_StepPanel, { value: 4 }, {
                default: withCtx(({ activateCallback }) => [
                  createVNode("div", { class: "flex flex-col gap-4 mx-auto w-full max-w-lg min-h-[20rem]" }, [
                    createVNode("div", { class: "text-center mt-4 mb-4 text-sm font-semibold" }, [
                      createVNode("div", { class: "p-6 rounded-lg shadow-md" }, [
                        createTextVNode(" Thank You! "),
                        createVNode("p", { class: "text-gray-700" }, " Your application will undergo a thorough review. Upon successful verification, you will gain access to: "),
                        createVNode("ul", { class: "list-disc text-left pl-5 text-gray-700 mt-3" }, [
                          createVNode("li", null, [
                            createVNode("strong", null, "Reseller Pricing")
                          ]),
                          createVNode("li", null, [
                            createVNode("strong", null, "Comprehensive Marketing and Technical Resources")
                          ]),
                          createVNode("li", null, [
                            createVNode("strong", null, "Product and Business Support")
                          ])
                        ]),
                        createVNode("p", { class: "text-gray-700 mt-4" }, " For any inquiries or further assistance, please do not hesitate to contact us: "),
                        createVNode("div", { class: "bg-white p-4 rounded-lg shadow mt-4" }, [
                          createVNode("p", { class: "text-gray-800 font-semibold" }, [
                            createTextVNode(" \u{1F4E7} Email: "),
                            createVNode("a", {
                              href: "mailto:sdl@hikvisionkenya.com",
                              class: "text-blue-600 hover:underline"
                            }, "sdl@hikvisionkenya.com")
                          ]),
                          createVNode("p", { class: "text-gray-800 font-semibold" }, [
                            createTextVNode(" \u{1F4DE} Phone: "),
                            createVNode("a", {
                              href: "tel:+254727909060",
                              class: "text-blue-600 hover:underline"
                            }, "+254 727 909 060")
                          ])
                        ]),
                        createVNode("p", { class: "text-gray-700 mt-6" }, " We look forward to the opportunity to collaborate with you. "),
                        createVNode("hr", { class: "my-4 border-gray-300" }),
                        createVNode("p", { class: "text-gray-800 font-bold" }, "Best regards,"),
                        createVNode("p", { class: "text-gray-700" }, " Secure Digital Limited | Hik Digital Mart Limited "),
                        createVNode("p", { class: "text-gray-700 font-semibold" }, " SDLKenya Online Shop Administration Department "),
                        createVNode("div", { class: "bg-white p-4 rounded-lg shadow mt-4" }, [
                          createVNode("p", { class: "text-gray-800 font-semibold" }, [
                            createTextVNode(" \u{1F4E7} Email: "),
                            createVNode("a", {
                              href: "mailto:sdl@hikvisionkenya.com",
                              class: "text-blue-600 hover:underline"
                            }, "sdl@hikvisionkenya.com")
                          ]),
                          createVNode("p", { class: "text-gray-800 font-semibold" }, [
                            createTextVNode(" \u{1F4DE} Phone: "),
                            createVNode("a", {
                              href: "tel:+254727909060",
                              class: "text-blue-600 hover:underline"
                            }, "+254 727 909 060")
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "flex pt-6 justify-between" }, [
                    createVNode(_component_Button, {
                      label: "Back",
                      severity: "secondary",
                      icon: "pi pi-arrow-left",
                      onClick: ($event) => activateCallback(3)
                    }, null, 8, ["onClick"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="hidden md:block h-full w-full" data-v-efa04459>`);
  _push(ssrRenderComponent(_component_Carousel, {
    verticalViewPortHeight: 2e3,
    autoplayInterval: 4e3,
    value: $data.images,
    numVisible: 1,
    numScroll: 1,
    showIndicators: false,
    showNavigators: false,
    circular: "",
    class: "rounded-lg w-full"
  }, {
    item: withCtx((slotProps, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="relative w-full h-screen flex justify-center items-center" data-v-efa04459${_scopeId}><img${ssrRenderAttr("src", slotProps.data.src)}${ssrRenderAttr("alt", slotProps.data.alt)} class="rounded-xl object-cover w-100 h-100" data-v-efa04459${_scopeId}><div class="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white py-2 px-4 rounded" data-v-efa04459${_scopeId}>${ssrInterpolate(slotProps.data.alt)}</div></div>`);
      } else {
        return [
          createVNode("div", { class: "relative w-full h-screen flex justify-center items-center" }, [
            createVNode("img", {
              src: slotProps.data.src,
              alt: slotProps.data.alt,
              class: "rounded-xl object-cover w-100 h-100"
            }, null, 8, ["src", "alt"]),
            createVNode("div", { class: "absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white py-2 px-4 rounded" }, toDisplayString(slotProps.data.alt), 1)
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_Toast, {
    position: "bottom-right",
    group: "br"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/stepper/WholesalerForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const WholesalerForm = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-efa04459"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const isSignup = ref(false);
    const showQuestionnaireVisible = ref(false);
    const showWholesaler = ref(true);
    const toggleForm = () => {
      isSignup.value = !isSignup.value;
      showQuestionnaireVisible.value = false;
      showWholesaler.value = false;
    };
    const showQuestionnaire = () => {
      isSignup.value = false;
      showQuestionnaireVisible.value = true;
      showWholesaler.value = false;
    };
    const showWholesalerForm = () => {
      isSignup.value = false;
      showQuestionnaireVisible.value = false;
      showWholesaler.value = true;
    };
    const goToSignup = () => {
      isSignup.value = true;
      showQuestionnaireVisible.value = false;
      showWholesaler.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "auth-container",
        style: { "background-color": "white" }
      }, _attrs))}>`);
      if (isSignup.value) {
        _push(ssrRenderComponent(SignupForm, {
          onToggle: toggleForm,
          onShowQuestionnaire: showQuestionnaire,
          onShowWholesaler: showWholesalerForm
        }, null, _parent));
      } else if (showQuestionnaireVisible.value) {
        _push(ssrRenderComponent(QuestionnaireForm, { onBackToSignup: goToSignup }, null, _parent));
      } else if (showWholesaler.value) {
        _push(ssrRenderComponent(WholesalerForm, { onBackToSignup: goToSignup }, null, _parent));
      } else {
        _push(ssrRenderComponent(LoginForm, { onToggle: toggleForm }, null, _parent));
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-B9Dn_464.mjs.map
