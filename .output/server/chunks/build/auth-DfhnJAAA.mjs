import { k as defineNuxtRouteMiddleware, u as useUserStore, f as navigateTo } from './server.mjs';
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
  console.log("Auth middleware executed");
  const userStore = useUserStore();
  console.log("Auth middleware", userStore.isLoggedIn);
  if (!userStore.isLoggedIn) {
    console.log("User not logged in, redirecting to /auth");
    return navigateTo("/auth");
  }
});

export { auth as default };
//# sourceMappingURL=auth-DfhnJAAA.mjs.map
