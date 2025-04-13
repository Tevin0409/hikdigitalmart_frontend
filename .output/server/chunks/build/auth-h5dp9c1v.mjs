import { h as defineNuxtRouteMiddleware, u as useUserStore, e as navigateTo } from './server.mjs';
import 'vue';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import '@primevue/core/base/style';
import '@primeuix/utils/object';
import '@primeuix/styled';
import 'node:url';
import 'pinia';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@primeuix/utils/eventbus';
import '@primeuix/utils';
import '@primeuix/utils/dom';
import 'deep-pick-omit';
import 'axios';
import 'vue/server-renderer';

const auth = defineNuxtRouteMiddleware((to, from) => {
  console.log("\u2705 Middleware running!");
  const userStore = useUserStore();
  if (!userStore.isLoggedIn) {
    return navigateTo("/auth");
  }
});

export { auth as default };
//# sourceMappingURL=auth-h5dp9c1v.mjs.map
