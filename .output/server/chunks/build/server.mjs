import { defineComponent, inject, ref, h, Suspense, hasInjectionContext, getCurrentInstance, readonly, provide, shallowReactive, Fragment, onMounted, nextTick, watch, createElementBlock, shallowRef, cloneVNode, defineAsyncComponent, computed, unref, createApp, toRef, onErrorCaptured, onServerPrefetch, createVNode, resolveDynamicComponent, reactive, effectScope, isReadonly, isRef, isShallow, isReactive, toRaw, mergeProps, getCurrentScope, withCtx, markRaw, useSSRContext } from 'vue';
import { i as hasProtocol, j as isScriptProtocol, k as joinURL, w as withQuery, s as sanitizeStatusCode, l as getContext, $ as $fetch, m as baseURL, n as createHooks, o as executeAsync, e as createError$1, t as toRouteMatcher, q as createRouter$1 } from '../nitro/nitro.mjs';
import { defineStore, createPinia, setActivePinia, shouldHydrate } from 'pinia';
import { RouterView, useRoute as useRoute$1, createMemoryHistory, createRouter, START_LOCATION } from 'vue-router';
import { EventBus } from '@primeuix/utils/eventbus';
import { Theme, dt, ThemeService } from '@primeuix/styled';
import { mergeKeys } from '@primeuix/utils';
import { resolve, minifyCSS, isNotEmpty, equals, removeAccents, resolveFieldData } from '@primeuix/utils/object';
import { style } from '@primeuix/styles/base';
import { isClient, setAttributes, setAttribute, isExist } from '@primeuix/utils/dom';
import axios from 'axios';
import { ssrRenderSuspense, ssrRenderComponent, ssrRenderVNode } from 'vue/server-renderer';
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
import 'node:url';

function isPlainObject(value) {
  if (value === null || typeof value !== "object") {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  if (prototype !== null && prototype !== Object.prototype && Object.getPrototypeOf(prototype) !== null) {
    return false;
  }
  if (Symbol.iterator in value) {
    return false;
  }
  if (Symbol.toStringTag in value) {
    return Object.prototype.toString.call(value) === "[object Module]";
  }
  return true;
}

function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isPlainObject(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isPlainObject(value) && isPlainObject(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p, c) => _defu(p, c, "", merger), {})
  );
}
const defu = createDefu();

if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
if (!("global" in globalThis)) {
  globalThis.global = globalThis;
}
const appLayoutTransition = {};
const nuxtLinkDefaults = { "componentName": "NuxtLink" };
const appId = "nuxt-app";
function getNuxtAppCtx(id = appId) {
  return getContext(id, {
    asyncContext: false
  });
}
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  var _a;
  let hydratingCount = 0;
  const nuxtApp = {
    _id: options.id || appId || "nuxt-app",
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.17.4";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: shallowReactive({
      ...((_a = options.ssrContext) == null ? void 0 : _a.payload) || {},
      data: shallowReactive({}),
      state: reactive({}),
      once: /* @__PURE__ */ new Set(),
      _errors: shallowReactive({})
    }),
    static: {
      data: {}
    },
    runWithContext(fn) {
      if (nuxtApp._scope.active && !getCurrentScope()) {
        return nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn));
      }
      return callWithNuxt(nuxtApp, fn);
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: shallowReactive({}),
    _payloadRevivers: {},
    ...options
  };
  {
    nuxtApp.payload.serverRendered = true;
  }
  if (nuxtApp.ssrContext) {
    nuxtApp.payload.path = nuxtApp.ssrContext.url;
    nuxtApp.ssrContext.nuxt = nuxtApp;
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: nuxtApp.ssrContext.runtimeConfig.public,
      app: nuxtApp.ssrContext.runtimeConfig.app
    };
  }
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
function registerPluginHooks(nuxtApp, plugin2) {
  if (plugin2.hooks) {
    nuxtApp.hooks.addHooks(plugin2.hooks);
  }
}
async function applyPlugin(nuxtApp, plugin2) {
  if (typeof plugin2 === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin2(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  var _a, _b, _c, _d;
  const resolvedPlugins = /* @__PURE__ */ new Set();
  const unresolvedPlugins = [];
  const parallels = [];
  const errors = [];
  let promiseDepth = 0;
  async function executePlugin(plugin2) {
    var _a2;
    const unresolvedPluginsForThisPlugin = ((_a2 = plugin2.dependsOn) == null ? void 0 : _a2.filter((name) => plugins2.some((p) => p._name === name) && !resolvedPlugins.has(name))) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin2]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin2).then(async () => {
        if (plugin2._name) {
          resolvedPlugins.add(plugin2._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin2._name)) {
              dependsOn.delete(plugin2._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      });
      if (plugin2.parallel) {
        parallels.push(promise.catch((e) => errors.push(e)));
      } else {
        await promise;
      }
    }
  }
  for (const plugin2 of plugins2) {
    if (((_a = nuxtApp.ssrContext) == null ? void 0 : _a.islandContext) && ((_b = plugin2.env) == null ? void 0 : _b.islands) === false) {
      continue;
    }
    registerPluginHooks(nuxtApp, plugin2);
  }
  for (const plugin2 of plugins2) {
    if (((_c = nuxtApp.ssrContext) == null ? void 0 : _c.islandContext) && ((_d = plugin2.env) == null ? void 0 : _d.islands) === false) {
      continue;
    }
    await executePlugin(plugin2);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (errors.length) {
    throw errors[0];
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin2) {
  if (typeof plugin2 === "function") {
    return plugin2;
  }
  const _name = plugin2._name || plugin2.name;
  delete plugin2.name;
  return Object.assign(plugin2.setup || (() => {
  }), plugin2, { [NuxtPluginIndicator]: true, _name });
}
const definePayloadPlugin = defineNuxtPlugin;
function callWithNuxt(nuxt, setup2, args) {
  const fn = () => setup2();
  const nuxtAppCtx = getNuxtAppCtx(nuxt._id);
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
function tryUseNuxtApp(id) {
  var _a;
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext.app.$nuxt;
  }
  nuxtAppInstance || (nuxtAppInstance = getNuxtAppCtx(id).tryUse());
  return nuxtAppInstance || null;
}
function useNuxtApp(id) {
  const nuxtAppInstance = tryUseNuxtApp(id);
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event) {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const LayoutMetaSymbol = Symbol("layout-meta");
const PageRouteSymbol = Symbol("route");
const useRouter = () => {
  var _a;
  return (_a = useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
};
const URL_QUOTE_RE = /"/g;
const navigateTo = (to, options) => {
  to || (to = "/");
  const toPath = typeof to === "string" ? to : "path" in to ? resolveRouteObject(to) : useRouter().resolve(to).href;
  const isExternalHost = hasProtocol(toPath, { acceptRelative: true });
  const isExternal = (options == null ? void 0 : options.external) || isExternalHost;
  if (isExternal) {
    if (!(options == null ? void 0 : options.external)) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const { protocol } = new URL(toPath, "http://localhost");
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(URL_QUOTE_RE, "%22");
        const encodedHeader = encodeURL(location2, isExternalHost);
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode((options == null ? void 0 : options.redirectCode) || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: encodedHeader }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options == null ? void 0 : options.replace) {
      (void 0).replace(toPath);
    } else {
      (void 0).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
function resolveRouteObject(to) {
  return withQuery(to.path || "", to.query || {}) + (to.hash || "");
}
function encodeURL(location2, isExternalHost = false) {
  const url = new URL(location2, "http://localhost");
  if (!isExternalHost) {
    return url.pathname + url.search + url.hash;
  }
  if (location2.startsWith("//")) {
    return url.toString().replace(url.protocol, "");
  }
  return url.toString();
}
const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (error) => {
  const nuxtError = createError(error);
  try {
    const nuxtApp = useNuxtApp();
    const error2 = useError();
    if (false) ;
    error2.value || (error2.value = nuxtError);
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const isNuxtError = (error) => !!error && typeof error === "object" && NUXT_ERROR_SIGNATURE in error;
const createError = (error) => {
  const nuxtError = createError$1(error);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  return nuxtError;
};
async function getRouteRules(arg) {
  const path = typeof arg === "string" ? arg : arg.path;
  {
    useNuxtApp().ssrContext._preloadManifest = true;
    const _routeRulesMatcher = toRouteMatcher(
      createRouter$1({ routes: (/* @__PURE__ */ useRuntimeConfig()).nitro.routeRules })
    );
    return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
  }
}
function definePayloadReducer(name, reduce) {
  {
    useNuxtApp().ssrContext._payloadReducers[name] = reduce;
  }
}
const payloadPlugin = definePayloadPlugin(() => {
  definePayloadReducer(
    "skipHydrate",
    // We need to return something truthy to be treated as a match
    (data) => !shouldHydrate(data) && 1
  );
});
const unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    nuxtApp.vueApp.use(head);
  }
});
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
const __nuxt_page_meta$1 = {
  layout: "login"
};
const __nuxt_page_meta = {
  layout: "login"
};
const _routes = [
  {
    name: "about",
    path: "/about",
    component: () => import('./about-CNwNiigH.mjs')
  },
  {
    name: "error",
    path: "/error",
    component: () => import('./error-ZYk9UGbQ.mjs')
  },
  {
    name: "index",
    path: "/",
    component: () => import('./index-BRHULaEN.mjs')
  },
  {
    name: "landing",
    path: "/landing",
    component: () => import('./landing-B1g6eSTE.mjs')
  },
  {
    name: "Profile",
    path: "/Profile",
    component: () => import('./Profile-CPpMrYZo.mjs')
  },
  {
    name: "Dashboard",
    path: "/Dashboard",
    component: () => import('./Dashboard-DmErg0Jo.mjs')
  },
  {
    name: "auth",
    path: "/auth",
    meta: __nuxt_page_meta$1 || {},
    component: () => import('./index-B9Dn_464.mjs')
  },
  {
    name: "cart",
    path: "/cart",
    component: () => import('./index-CidRkKui.mjs')
  },
  {
    name: "Home",
    path: "/Home",
    component: () => import('./index-31JEPl1H.mjs')
  },
  {
    name: "results-id",
    path: "/results/:id()",
    component: () => import('./_id_-DNbs5bik.mjs')
  },
  {
    name: "products-id",
    path: "/products/:id()",
    component: () => import('./_id_-DonqbACa.mjs')
  },
  {
    name: "checkout",
    path: "/checkout",
    component: () => import('./index-BXEFPNdc.mjs')
  },
  {
    name: "products",
    path: "/products",
    meta: __nuxt_page_meta || {},
    component: () => import('./index-D30e6JBu.mjs')
  },
  {
    name: "wishlist",
    path: "/wishlist",
    component: () => import('./index-BsqpEnf9.mjs')
  },
  {
    name: "my-account-id",
    path: "/my-account/:id()",
    component: () => import('./_id_-BwT6aFb_.mjs')
  },
  {
    name: "quotation",
    path: "/quotation",
    component: () => import('./index-Ce2qaUDk.mjs')
  },
  {
    name: "my-account",
    path: "/my-account",
    meta: { "middleware": ["auth"] },
    component: () => import('./index-C6GLObtk.mjs')
  }
];
const _wrapInTransition = (props, children) => {
  return { default: () => {
    var _a;
    return (_a = children.default) == null ? void 0 : _a.call(children);
  } };
};
const ROUTE_KEY_PARENTHESES_RE = /(:\w+)\([^)]+\)/g;
const ROUTE_KEY_SYMBOLS_RE = /(:\w+)[?+*]/g;
const ROUTE_KEY_NORMAL_RE = /:\w+/g;
function generateRouteKey(route) {
  const source = (route == null ? void 0 : route.meta.key) ?? route.path.replace(ROUTE_KEY_PARENTHESES_RE, "$1").replace(ROUTE_KEY_SYMBOLS_RE, "$1").replace(ROUTE_KEY_NORMAL_RE, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
  return typeof source === "function" ? source(route) : source;
}
function isChangingPage(to, from) {
  if (to === from || from === START_LOCATION) {
    return false;
  }
  if (generateRouteKey(to) !== generateRouteKey(from)) {
    return true;
  }
  const areComponentsSame = to.matched.every(
    (comp, index) => {
      var _a, _b;
      return comp.components && comp.components.default === ((_b = (_a = from.matched[index]) == null ? void 0 : _a.components) == null ? void 0 : _b.default);
    }
  );
  if (areComponentsSame) {
    return false;
  }
  return true;
}
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    var _a;
    const nuxtApp = useNuxtApp();
    const behavior = ((_a = useRouter().options) == null ? void 0 : _a.scrollBehaviorType) ?? "auto";
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
      }
      return false;
    }
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (routeAllowsScrollToTop === false) {
      return false;
    }
    let position = savedPosition || void 0;
    if (!position && isChangingPage(to, from)) {
      position = { left: 0, top: 0 };
    }
    const hookToWait = nuxtApp._runningTransition ? "page:transition:finish" : "page:loading:end";
    return new Promise((resolve2) => {
      if (from === START_LOCATION) {
        resolve2(_calculatePosition(to, "instant", position));
        return;
      }
      nuxtApp.hooks.hookOnce(hookToWait, () => {
        requestAnimationFrame(() => resolve2(_calculatePosition(to, "instant", position)));
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = (void 0).querySelector(selector);
    if (elem) {
      return (Number.parseFloat(getComputedStyle(elem).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle((void 0).documentElement).scrollPaddingTop) || 0);
    }
  } catch {
  }
  return 0;
}
function _calculatePosition(to, scrollBehaviorType, position) {
  if (position) {
    return position;
  }
  if (to.hash) {
    return {
      el: to.hash,
      top: _getHashElementScrollMarginTop(to.hash),
      behavior: scrollBehaviorType
    };
  }
  return { left: 0, top: 0, behavior: scrollBehaviorType };
}
const configRouterOptions = {
  hashMode: false,
  scrollBehaviorType: "auto"
};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to, from) => {
  var _a;
  let __temp, __restore;
  if (!((_a = to.meta) == null ? void 0 : _a.validate)) {
    return;
  }
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  const error = createError({
    fatal: false,
    statusCode: result && result.statusCode || 404,
    statusMessage: result && result.statusMessage || `Page Not Found: ${to.fullPath}`,
    data: {
      path: to.fullPath
    }
  });
  return error;
});
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  {
    return;
  }
});
const globalMiddleware = [
  validate,
  manifest_45route_45rule
];
const namedMiddleware = {
  auth: () => import('./auth-CZQrXKcF.mjs')
};
const plugin$1 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a, _b, _c;
    let __temp, __restore;
    let routerBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    const history = ((_a = routerOptions.history) == null ? void 0 : _a.call(routerOptions, routerBase)) ?? createMemoryHistory(routerBase);
    const routes = routerOptions.routes ? ([__temp, __restore] = executeAsync(() => routerOptions.routes(_routes)), __temp = await __temp, __restore(), __temp) ?? _routes : _routes;
    let startPosition;
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        if (routerOptions.scrollBehavior) {
          router.options.scrollBehavior = routerOptions.scrollBehavior;
          if ("scrollRestoration" in (void 0).history) {
            const unsub = router.beforeEach(() => {
              unsub();
              (void 0).history.scrollRestoration = "manual";
            });
          }
          return routerOptions.scrollBehavior(to, START_LOCATION, startPosition || savedPosition);
        }
      },
      history,
      routes
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const initialURL = nuxtApp.ssrContext.url;
    const _route = shallowRef(router.currentRoute.value);
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      var _a2, _b2, _c2, _d;
      if (((_b2 = (_a2 = to.matched[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default) === ((_d = (_c2 = from.matched[0]) == null ? void 0 : _c2.components) == null ? void 0 : _d.default)) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key],
        enumerable: true
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware || (nuxtApp._middleware = {
      global: [],
      named: {}
    });
    useError();
    if (!((_b = nuxtApp.ssrContext) == null ? void 0 : _b.islandContext)) {
      router.afterEach(async (to, _from, failure) => {
        delete nuxtApp._processingMiddleware;
        if (failure) {
          await nuxtApp.callHook("page:loading:end");
        }
        if ((failure == null ? void 0 : failure.type) === 4) {
          return;
        }
        if (to.redirectedFrom && to.fullPath !== initialURL) {
          await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
        }
      });
    }
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    const resolvedInitialRoute = router.currentRoute.value;
    syncCurrentRoute();
    if ((_c = nuxtApp.ssrContext) == null ? void 0 : _c.islandContext) {
      return { provide: { router } };
    }
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      var _a2, _b2;
      await nuxtApp.callHook("page:loading:start");
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout;
      }
      nuxtApp._processingMiddleware = true;
      if (!((_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.islandContext)) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          for (const entry2 of toArray(componentMiddleware)) {
            middlewareEntries.add(entry2);
          }
        }
        {
          const routeRules = await nuxtApp.runWithContext(() => getRouteRules({ path: to.path }));
          if (routeRules.appMiddleware) {
            for (const key in routeRules.appMiddleware) {
              if (routeRules.appMiddleware[key]) {
                middlewareEntries.add(key);
              } else {
                middlewareEntries.delete(key);
              }
            }
          }
        }
        for (const entry2 of middlewareEntries) {
          const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_b2 = namedMiddleware[entry2]) == null ? void 0 : _b2.call(namedMiddleware).then((r) => r.default || r)) : entry2;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry2}'.`);
          }
          try {
            const result = await nuxtApp.runWithContext(() => middleware(to, from));
            if (true) {
              if (result === false || result instanceof Error) {
                const error2 = result || createError({
                  statusCode: 404,
                  statusMessage: `Page Not Found: ${initialURL}`
                });
                await nuxtApp.runWithContext(() => showError(error2));
                return false;
              }
            }
            if (result === true) {
              continue;
            }
            if (result === false) {
              return result;
            }
            if (result) {
              if (isNuxtError(result) && result.fatal) {
                await nuxtApp.runWithContext(() => showError(result));
              }
              return result;
            }
          } catch (err) {
            const error2 = createError(err);
            if (error2.fatal) {
              await nuxtApp.runWithContext(() => showError(error2));
            }
            return error2;
          }
        }
      }
    });
    router.onError(async () => {
      delete nuxtApp._processingMiddleware;
      await nuxtApp.callHook("page:loading:end");
    });
    router.afterEach(async (to, _from) => {
      if (to.matched.length === 0) {
        await nuxtApp.runWithContext(() => showError(createError({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${to.fullPath}`,
          data: {
            path: to.fullPath
          }
        })));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        if ("name" in resolvedInitialRoute) {
          resolvedInitialRoute.name = void 0;
        }
        await router.replace({
          ...resolvedInitialRoute,
          force: true
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});
const reducers = [
  ["NuxtError", (data) => isNuxtError(data) && data.toJSON()],
  ["EmptyShallowRef", (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["EmptyRef", (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["ShallowRef", (data) => isRef(data) && isShallow(data) && data.value],
  ["ShallowReactive", (data) => isReactive(data) && isShallow(data) && toRaw(data)],
  ["Ref", (data) => isRef(data) && data.value],
  ["Reactive", (data) => isReactive(data) && toRaw(data)]
];
const revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const [reducer, fn] of reducers) {
      definePayloadReducer(reducer, fn);
    }
  }
});
defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const clientOnlySymbol = Symbol.for("nuxt:client-only");
defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(props, { slots, attrs }) {
    const mounted = shallowRef(false);
    const vm = getCurrentInstance();
    if (vm) {
      vm._nuxtClientOnly = true;
    }
    provide(clientOnlySymbol, true);
    return () => {
      var _a;
      if (mounted.value) {
        const vnodes = (_a = slots.default) == null ? void 0 : _a.call(slots);
        if (vnodes && vnodes.length === 1) {
          return [cloneVNode(vnodes[0], attrs)];
        }
        return vnodes;
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const plugin = /* @__PURE__ */ defineNuxtPlugin({
  name: "pinia",
  setup(nuxtApp) {
    const pinia = createPinia();
    nuxtApp.vueApp.use(pinia);
    setActivePinia(pinia);
    {
      nuxtApp.payload.pinia = toRaw(pinia.state.value);
    }
    return {
      provide: {
        pinia
      }
    };
  }
});
const LazyAutoComplete = defineAsyncComponent(() => import('./index-BAlWC-sG.mjs').then((r) => r["default"] || r.default || r));
const LazyCalendar = defineAsyncComponent(() => import('./index-Gi6Rrb3G.mjs').then((r) => r["default"] || r.default || r));
const LazyCascadeSelect = defineAsyncComponent(() => import('./index-CP3rb64j.mjs').then((r) => r["default"] || r.default || r));
const LazyCheckbox = defineAsyncComponent(() => import('./index-DiqmD1N-.mjs').then((r) => r["default"] || r.default || r));
const LazyCheckboxGroup = defineAsyncComponent(() => import('./index-CT_MCAr2.mjs').then((r) => r["default"] || r.default || r));
const LazyChips = defineAsyncComponent(() => import('./index-C-vBOeTx.mjs').then((r) => r["default"] || r.default || r));
const LazyColorPicker = defineAsyncComponent(() => import('./index-Deg1tU22.mjs').then((r) => r["default"] || r.default || r));
const LazyDatePicker = defineAsyncComponent(() => import('./index-k9M7xoiO.mjs').then((r) => r["default"] || r.default || r));
const LazyDropdown = defineAsyncComponent(() => import('./index-DwFITBNK.mjs').then((r) => r["default"] || r.default || r));
const LazyFloatLabel = defineAsyncComponent(() => import('./index-DiLnL8kN.mjs').then((r) => r["default"] || r.default || r));
const LazyFluid = defineAsyncComponent(() => import('./index-CGcItJVP.mjs').then((r) => r["default"] || r.default || r));
const LazyIconField = defineAsyncComponent(() => import('./index-CInUQVkE.mjs').then((r) => r["default"] || r.default || r));
const LazyIftaLabel = defineAsyncComponent(() => import('./index-DKUtm8g9.mjs').then((r) => r["default"] || r.default || r));
const LazyInputChips = defineAsyncComponent(() => import('./index-95_-Gb5C.mjs').then((r) => r["default"] || r.default || r));
const LazyInputGroup = defineAsyncComponent(() => import('./index-CL6rq_26.mjs').then((r) => r["default"] || r.default || r));
const LazyInputGroupAddon = defineAsyncComponent(() => import('./index-CtIdAxVi.mjs').then((r) => r["default"] || r.default || r));
const LazyInputIcon = defineAsyncComponent(() => import('./index-CSzFqrjf.mjs').then((r) => r["default"] || r.default || r));
const LazyInputMask = defineAsyncComponent(() => import('./index-BjaEiKv8.mjs').then((r) => r["default"] || r.default || r));
const LazyInputNumber = defineAsyncComponent(() => import('./index-DzOTn8le.mjs').then((r) => r["default"] || r.default || r));
const LazyInputOtp = defineAsyncComponent(() => import('./index-BXTpjXO9.mjs').then((r) => r["default"] || r.default || r));
const LazyInputSwitch = defineAsyncComponent(() => import('./index-GXuk9DSL.mjs').then((r) => r["default"] || r.default || r));
const LazyInputText = defineAsyncComponent(() => import('./index-DAb5Gtdu.mjs').then((r) => r["default"] || r.default || r));
const LazyKnob = defineAsyncComponent(() => import('./index-Dx3-4D8m.mjs').then((r) => r["default"] || r.default || r));
const LazyListbox = defineAsyncComponent(() => import('./index-8QVbZurE.mjs').then((r) => r["default"] || r.default || r));
const LazyMultiSelect = defineAsyncComponent(() => import('./index-0AkboAc7.mjs').then((r) => r["default"] || r.default || r));
const LazyPassword = defineAsyncComponent(() => import('./index-CFn7ubeV.mjs').then((r) => r["default"] || r.default || r));
const LazyRadioButton = defineAsyncComponent(() => import('./index-VROm3dEV.mjs').then((r) => r["default"] || r.default || r));
const LazyRadioButtonGroup = defineAsyncComponent(() => import('./index-0j3ZDTYi.mjs').then((r) => r["default"] || r.default || r));
const LazyRating = defineAsyncComponent(() => import('./index-Bj63-OuG.mjs').then((r) => r["default"] || r.default || r));
const LazySelect = defineAsyncComponent(() => import('./index-DXUiORVY.mjs').then((r) => r["default"] || r.default || r));
const LazySelectButton = defineAsyncComponent(() => import('./index-BaQVxojr.mjs').then((r) => r["default"] || r.default || r));
const LazySlider = defineAsyncComponent(() => import('./index-CsgOHMeQ.mjs').then((r) => r["default"] || r.default || r));
const LazyTextarea = defineAsyncComponent(() => import('./index-BiulS179.mjs').then((r) => r["default"] || r.default || r));
const LazyToggleButton = defineAsyncComponent(() => import('./index-D4QyD7Fl.mjs').then((r) => r["default"] || r.default || r));
const LazyToggleSwitch = defineAsyncComponent(() => import('./index-C2gh8JYs.mjs').then((r) => r["default"] || r.default || r));
const LazyTreeSelect = defineAsyncComponent(() => import('./index-Dr2Z6Iyv.mjs').then((r) => r["default"] || r.default || r));
const LazyButton = defineAsyncComponent(() => import('./index-BpOzP0HJ.mjs').then((r) => r["default"] || r.default || r));
const LazyButtonGroup = defineAsyncComponent(() => import('./index-BEuqxxpY.mjs').then((r) => r["default"] || r.default || r));
const LazySpeedDial = defineAsyncComponent(() => import('./index-BE0edPSv.mjs').then((r) => r["default"] || r.default || r));
const LazySplitButton = defineAsyncComponent(() => import('./index-DWaGwebK.mjs').then((r) => r["default"] || r.default || r));
const LazyColumn = defineAsyncComponent(() => import('./index-Ces_BLBT.mjs').then((r) => r["default"] || r.default || r));
const LazyRow = defineAsyncComponent(() => import('./index-Cj5zgofJ.mjs').then((r) => r["default"] || r.default || r));
const LazyColumnGroup = defineAsyncComponent(() => import('./index-FysR-ppE.mjs').then((r) => r["default"] || r.default || r));
const LazyDataTable = defineAsyncComponent(() => import('./index-DIuI9G7D.mjs').then((r) => r["default"] || r.default || r));
const LazyDataView = defineAsyncComponent(() => import('./index-Yc21tcuN.mjs').then((r) => r["default"] || r.default || r));
const LazyOrderList = defineAsyncComponent(() => import('./index-DSQHJWEL.mjs').then((r) => r["default"] || r.default || r));
const LazyOrganizationChart = defineAsyncComponent(() => import('./index-lBG9q3LJ.mjs').then((r) => r["default"] || r.default || r));
const LazyPaginator = defineAsyncComponent(() => import('./index-CgkDWWNF.mjs').then((r) => r["default"] || r.default || r));
const LazyPickList = defineAsyncComponent(() => import('./index-nj14jnSx.mjs').then((r) => r["default"] || r.default || r));
const LazyTree = defineAsyncComponent(() => import('./index-DMl_D9uv.mjs').then((r) => r["default"] || r.default || r));
const LazyTreeTable = defineAsyncComponent(() => import('./index-BoA0pk_o.mjs').then((r) => r["default"] || r.default || r));
const LazyTimeline = defineAsyncComponent(() => import('./index-D2l85_f0.mjs').then((r) => r["default"] || r.default || r));
const LazyVirtualScroller = defineAsyncComponent(() => import('./index-CIdmMv73.mjs').then((r) => r["default"] || r.default || r));
const LazyAccordion = defineAsyncComponent(() => import('./index-T2iVZuhn.mjs').then((r) => r["default"] || r.default || r));
const LazyAccordionPanel = defineAsyncComponent(() => import('./index-bAsNQI_M.mjs').then((r) => r["default"] || r.default || r));
const LazyAccordionHeader = defineAsyncComponent(() => import('./index-uDPrM_Ei.mjs').then((r) => r["default"] || r.default || r));
const LazyAccordionContent = defineAsyncComponent(() => import('./index-Cw5uRlm1.mjs').then((r) => r["default"] || r.default || r));
const LazyAccordionTab = defineAsyncComponent(() => import('./index-D0lIXLNc.mjs').then((r) => r["default"] || r.default || r));
const LazyCard = defineAsyncComponent(() => import('./index-CTtMWA3G.mjs').then((r) => r["default"] || r.default || r));
const LazyDeferredContent = defineAsyncComponent(() => import('./index-BBvlGf6V.mjs').then((r) => r["default"] || r.default || r));
const LazyDivider = defineAsyncComponent(() => import('./index-B9TrIdXC.mjs').then((r) => r["default"] || r.default || r));
const LazyFieldset = defineAsyncComponent(() => import('./index-BTGoFHEs.mjs').then((r) => r["default"] || r.default || r));
const LazyPanel = defineAsyncComponent(() => import('./index-BCGvwuiO.mjs').then((r) => r["default"] || r.default || r));
const LazyScrollPanel = defineAsyncComponent(() => import('./index-B4eGAfvd.mjs').then((r) => r["default"] || r.default || r));
const LazySplitter = defineAsyncComponent(() => import('./index-DE2Wv4Bw.mjs').then((r) => r["default"] || r.default || r));
const LazySplitterPanel = defineAsyncComponent(() => import('./index-BC8ICbm5.mjs').then((r) => r["default"] || r.default || r));
const LazyStepper = defineAsyncComponent(() => import('./index-2ZtbGbMR.mjs').then((r) => r["default"] || r.default || r));
const LazyStepList = defineAsyncComponent(() => import('./index-bhzY-i8n.mjs').then((r) => r["default"] || r.default || r));
const LazyStep = defineAsyncComponent(() => import('./index-CxBt_42S.mjs').then((r) => r["default"] || r.default || r));
const LazyStepItem = defineAsyncComponent(() => import('./index-DJQVPu8-.mjs').then((r) => r["default"] || r.default || r));
const LazyStepPanels = defineAsyncComponent(() => import('./index-BwH4pOa5.mjs').then((r) => r["default"] || r.default || r));
const LazyStepPanel = defineAsyncComponent(() => import('./index-DKnpU7NL.mjs').then((r) => r["default"] || r.default || r));
const LazyTabView = defineAsyncComponent(() => import('./index-BykLS3W2.mjs').then((r) => r["default"] || r.default || r));
const LazyTabs = defineAsyncComponent(() => import('./index-BSXc_4Nd.mjs').then((r) => r["default"] || r.default || r));
const LazyTabList = defineAsyncComponent(() => import('./index-BXNJX2Z5.mjs').then((r) => r["default"] || r.default || r));
const LazyTab = defineAsyncComponent(() => import('./index-DTwIZfJs.mjs').then((r) => r["default"] || r.default || r));
const LazyTabPanels = defineAsyncComponent(() => import('./index-B9oi0zdm.mjs').then((r) => r["default"] || r.default || r));
const LazyTabPanel = defineAsyncComponent(() => import('./index-2qusABBj.mjs').then((r) => r["default"] || r.default || r));
const LazyToolbar = defineAsyncComponent(() => import('./index-Bg_3Me_a.mjs').then((r) => r["default"] || r.default || r));
const LazyConfirmDialog = defineAsyncComponent(() => import('./index-B9DPUKHo.mjs').then((r) => r["default"] || r.default || r));
const LazyConfirmPopup = defineAsyncComponent(() => import('./index-e37_tY9z.mjs').then((r) => r["default"] || r.default || r));
const LazyDialog = defineAsyncComponent(() => import('./index-DwBCCSyQ.mjs').then((r) => r["default"] || r.default || r));
const LazyDrawer = defineAsyncComponent(() => import('./index-Idkjl_eS.mjs').then((r) => r["default"] || r.default || r));
const LazyDynamicDialog = defineAsyncComponent(() => import('./index-CR0DPA2Y.mjs').then((r) => r["default"] || r.default || r));
const LazyOverlayPanel = defineAsyncComponent(() => import('./index-7qJOSLz4.mjs').then((r) => r["default"] || r.default || r));
const LazyPopover = defineAsyncComponent(() => import('./index-rY9zUOUZ.mjs').then((r) => r["default"] || r.default || r));
const LazySidebar = defineAsyncComponent(() => import('./index-CSAfqJ2e.mjs').then((r) => r["default"] || r.default || r));
const LazyFileUpload = defineAsyncComponent(() => import('./index-BNhiE0iK.mjs').then((r) => r["default"] || r.default || r));
const LazyBreadcrumb = defineAsyncComponent(() => import('./index-Hi_QcM6J.mjs').then((r) => r["default"] || r.default || r));
const LazyContextMenu = defineAsyncComponent(() => import('./index--UMqrbf_.mjs').then((r) => r["default"] || r.default || r));
const LazyDock = defineAsyncComponent(() => import('./index-Dup_WKgc.mjs').then((r) => r["default"] || r.default || r));
const LazyMenu = defineAsyncComponent(() => import('./index-DIgsxSZg.mjs').then((r) => r["default"] || r.default || r));
const LazyMenubar = defineAsyncComponent(() => import('./index-CqPQoBfT.mjs').then((r) => r["default"] || r.default || r));
const LazyMegaMenu = defineAsyncComponent(() => import('./index-bVViC0ce.mjs').then((r) => r["default"] || r.default || r));
const LazyPanelMenu = defineAsyncComponent(() => import('./index-BOgUNBqH.mjs').then((r) => r["default"] || r.default || r));
const LazySteps = defineAsyncComponent(() => import('./index-DckIJua0.mjs').then((r) => r["default"] || r.default || r));
const LazyTabMenu = defineAsyncComponent(() => import('./index-DvL1d2Y5.mjs').then((r) => r["default"] || r.default || r));
const LazyTieredMenu = defineAsyncComponent(() => import('./index-C95fWGeT.mjs').then((r) => r["default"] || r.default || r));
const LazyMessage = defineAsyncComponent(() => import('./index-CzZQQl2e.mjs').then((r) => r["default"] || r.default || r));
const LazyInlineMessage = defineAsyncComponent(() => import('./index-B8bTsNwB.mjs').then((r) => r["default"] || r.default || r));
const LazyToast = defineAsyncComponent(() => import('./index-B8fUCuXN.mjs').then((r) => r["default"] || r.default || r));
const LazyCarousel = defineAsyncComponent(() => import('./index-OAR6dbAc.mjs').then((r) => r["default"] || r.default || r));
const LazyGalleria = defineAsyncComponent(() => import('./index-65g5z3Zi.mjs').then((r) => r["default"] || r.default || r));
const LazyImage = defineAsyncComponent(() => import('./index-DoDcSH87.mjs').then((r) => r["default"] || r.default || r));
const LazyImageCompare = defineAsyncComponent(() => import('./index-CQCUoVi9.mjs').then((r) => r["default"] || r.default || r));
const LazyAvatar = defineAsyncComponent(() => import('./index-CAevIIeY.mjs').then((r) => r["default"] || r.default || r));
const LazyAvatarGroup = defineAsyncComponent(() => import('./index-jBChYUEs.mjs').then((r) => r["default"] || r.default || r));
const LazyBadge = defineAsyncComponent(() => import('./index-CJPkJwKH.mjs').then((r) => r["default"] || r.default || r));
const LazyBlockUI = defineAsyncComponent(() => import('./index-CYCnS-_m.mjs').then((r) => r["default"] || r.default || r));
const LazyChip = defineAsyncComponent(() => import('./index-26tAjweE.mjs').then((r) => r["default"] || r.default || r));
const LazyInplace = defineAsyncComponent(() => import('./index-gI9d66gd.mjs').then((r) => r["default"] || r.default || r));
const LazyMeterGroup = defineAsyncComponent(() => import('./index-CLs9FOO_.mjs').then((r) => r["default"] || r.default || r));
const LazyOverlayBadge = defineAsyncComponent(() => import('./index-Ck5Pjavq.mjs').then((r) => r["default"] || r.default || r));
const LazyScrollTop = defineAsyncComponent(() => import('./index-BhFOs7dz.mjs').then((r) => r["default"] || r.default || r));
const LazySkeleton = defineAsyncComponent(() => import('./index-CoA2L0I7.mjs').then((r) => r["default"] || r.default || r));
const LazyProgressBar = defineAsyncComponent(() => import('./index-DlS2l_kv.mjs').then((r) => r["default"] || r.default || r));
const LazyProgressSpinner = defineAsyncComponent(() => import('./index-Ce0D4oac.mjs').then((r) => r["default"] || r.default || r));
const LazyTag = defineAsyncComponent(() => import('./index-Y9SOrOKQ.mjs').then((r) => r["default"] || r.default || r));
const LazyTerminal = defineAsyncComponent(() => import('./index-BJiseraa.mjs').then((r) => r["default"] || r.default || r));
const LazyForm = defineAsyncComponent(() => import('./index-3gbr5fgi.mjs').then((r) => r["default"] || r.default || r));
const LazyFormField = defineAsyncComponent(() => import('./index-DGbc1v0p.mjs').then((r) => r["default"] || r.default || r));
const lazyGlobalComponents = [
  ["AutoComplete", LazyAutoComplete],
  ["Calendar", LazyCalendar],
  ["CascadeSelect", LazyCascadeSelect],
  ["Checkbox", LazyCheckbox],
  ["CheckboxGroup", LazyCheckboxGroup],
  ["Chips", LazyChips],
  ["ColorPicker", LazyColorPicker],
  ["DatePicker", LazyDatePicker],
  ["Dropdown", LazyDropdown],
  ["FloatLabel", LazyFloatLabel],
  ["Fluid", LazyFluid],
  ["IconField", LazyIconField],
  ["IftaLabel", LazyIftaLabel],
  ["InputChips", LazyInputChips],
  ["InputGroup", LazyInputGroup],
  ["InputGroupAddon", LazyInputGroupAddon],
  ["InputIcon", LazyInputIcon],
  ["InputMask", LazyInputMask],
  ["InputNumber", LazyInputNumber],
  ["InputOtp", LazyInputOtp],
  ["InputSwitch", LazyInputSwitch],
  ["InputText", LazyInputText],
  ["Knob", LazyKnob],
  ["Listbox", LazyListbox],
  ["MultiSelect", LazyMultiSelect],
  ["Password", LazyPassword],
  ["RadioButton", LazyRadioButton],
  ["RadioButtonGroup", LazyRadioButtonGroup],
  ["Rating", LazyRating],
  ["Select", LazySelect],
  ["SelectButton", LazySelectButton],
  ["Slider", LazySlider],
  ["Textarea", LazyTextarea],
  ["ToggleButton", LazyToggleButton],
  ["ToggleSwitch", LazyToggleSwitch],
  ["TreeSelect", LazyTreeSelect],
  ["Button", LazyButton],
  ["ButtonGroup", LazyButtonGroup],
  ["SpeedDial", LazySpeedDial],
  ["SplitButton", LazySplitButton],
  ["Column", LazyColumn],
  ["Row", LazyRow],
  ["ColumnGroup", LazyColumnGroup],
  ["DataTable", LazyDataTable],
  ["DataView", LazyDataView],
  ["OrderList", LazyOrderList],
  ["OrganizationChart", LazyOrganizationChart],
  ["Paginator", LazyPaginator],
  ["PickList", LazyPickList],
  ["Tree", LazyTree],
  ["TreeTable", LazyTreeTable],
  ["Timeline", LazyTimeline],
  ["VirtualScroller", LazyVirtualScroller],
  ["Accordion", LazyAccordion],
  ["AccordionPanel", LazyAccordionPanel],
  ["AccordionHeader", LazyAccordionHeader],
  ["AccordionContent", LazyAccordionContent],
  ["AccordionTab", LazyAccordionTab],
  ["Card", LazyCard],
  ["DeferredContent", LazyDeferredContent],
  ["Divider", LazyDivider],
  ["Fieldset", LazyFieldset],
  ["Panel", LazyPanel],
  ["ScrollPanel", LazyScrollPanel],
  ["Splitter", LazySplitter],
  ["SplitterPanel", LazySplitterPanel],
  ["Stepper", LazyStepper],
  ["StepList", LazyStepList],
  ["Step", LazyStep],
  ["StepItem", LazyStepItem],
  ["StepPanels", LazyStepPanels],
  ["StepPanel", LazyStepPanel],
  ["TabView", LazyTabView],
  ["Tabs", LazyTabs],
  ["TabList", LazyTabList],
  ["Tab", LazyTab],
  ["TabPanels", LazyTabPanels],
  ["TabPanel", LazyTabPanel],
  ["Toolbar", LazyToolbar],
  ["ConfirmDialog", LazyConfirmDialog],
  ["ConfirmPopup", LazyConfirmPopup],
  ["Dialog", LazyDialog],
  ["Drawer", LazyDrawer],
  ["DynamicDialog", LazyDynamicDialog],
  ["OverlayPanel", LazyOverlayPanel],
  ["Popover", LazyPopover],
  ["Sidebar", LazySidebar],
  ["FileUpload", LazyFileUpload],
  ["Breadcrumb", LazyBreadcrumb],
  ["ContextMenu", LazyContextMenu],
  ["Dock", LazyDock],
  ["Menu", LazyMenu],
  ["Menubar", LazyMenubar],
  ["MegaMenu", LazyMegaMenu],
  ["PanelMenu", LazyPanelMenu],
  ["Steps", LazySteps],
  ["TabMenu", LazyTabMenu],
  ["TieredMenu", LazyTieredMenu],
  ["Message", LazyMessage],
  ["InlineMessage", LazyInlineMessage],
  ["Toast", LazyToast],
  ["Carousel", LazyCarousel],
  ["Galleria", LazyGalleria],
  ["Image", LazyImage],
  ["ImageCompare", LazyImageCompare],
  ["Avatar", LazyAvatar],
  ["AvatarGroup", LazyAvatarGroup],
  ["Badge", LazyBadge],
  ["BlockUI", LazyBlockUI],
  ["Chip", LazyChip],
  ["Inplace", LazyInplace],
  ["MeterGroup", LazyMeterGroup],
  ["OverlayBadge", LazyOverlayBadge],
  ["ScrollTop", LazyScrollTop],
  ["Skeleton", LazySkeleton],
  ["ProgressBar", LazyProgressBar],
  ["ProgressSpinner", LazyProgressSpinner],
  ["Tag", LazyTag],
  ["Terminal", LazyTerminal],
  ["Form", LazyForm],
  ["FormField", LazyFormField]
];
const components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components",
  setup(nuxtApp) {
    for (const [name, component] of lazyGlobalComponents) {
      nuxtApp.vueApp.component(name, component);
      nuxtApp.vueApp.component("Lazy" + name, component);
    }
  }
});
var FilterMatchMode = {
  STARTS_WITH: "startsWith",
  CONTAINS: "contains",
  NOT_CONTAINS: "notContains",
  ENDS_WITH: "endsWith",
  EQUALS: "equals",
  NOT_EQUALS: "notEquals",
  LESS_THAN: "lt",
  LESS_THAN_OR_EQUAL_TO: "lte",
  GREATER_THAN: "gt",
  GREATER_THAN_OR_EQUAL_TO: "gte",
  DATE_IS: "dateIs",
  DATE_IS_NOT: "dateIsNot",
  DATE_BEFORE: "dateBefore",
  DATE_AFTER: "dateAfter"
};
var FilterOperator = {
  AND: "and",
  OR: "or"
};
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray$1(r)) || e) {
      t && (r = t);
      var _n = 0, F = function F2() {
      };
      return { s: F, n: function n() {
        return _n >= r.length ? { done: true } : { done: false, value: r[_n++] };
      }, e: function e2(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function s() {
    t = t.call(r);
  }, n: function n() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function e2(r2) {
    u = true, o = r2;
  }, f: function f() {
    try {
      a || null == t["return"] || t["return"]();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray$1(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray$1(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$1(r, a) : void 0;
  }
}
function _arrayLikeToArray$1(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
var FilterService = {
  filter: function filter(value, fields, filterValue, filterMatchMode, filterLocale) {
    var filteredItems = [];
    if (!value) {
      return filteredItems;
    }
    var _iterator = _createForOfIteratorHelper(value), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var item = _step.value;
        if (typeof item === "string") {
          if (this.filters[filterMatchMode](item, filterValue, filterLocale)) {
            filteredItems.push(item);
            continue;
          }
        } else {
          var _iterator2 = _createForOfIteratorHelper(fields), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              var field = _step2.value;
              var fieldValue = resolveFieldData(item, field);
              if (this.filters[filterMatchMode](fieldValue, filterValue, filterLocale)) {
                filteredItems.push(item);
                break;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return filteredItems;
  },
  filters: {
    startsWith: function startsWith(value, filter2, filterLocale) {
      if (filter2 === void 0 || filter2 === null || filter2 === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      var filterValue = removeAccents(filter2.toString()).toLocaleLowerCase(filterLocale);
      var stringValue = removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.slice(0, filterValue.length) === filterValue;
    },
    contains: function contains(value, filter2, filterLocale) {
      if (filter2 === void 0 || filter2 === null || filter2 === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      var filterValue = removeAccents(filter2.toString()).toLocaleLowerCase(filterLocale);
      var stringValue = removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue) !== -1;
    },
    notContains: function notContains(value, filter2, filterLocale) {
      if (filter2 === void 0 || filter2 === null || filter2 === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      var filterValue = removeAccents(filter2.toString()).toLocaleLowerCase(filterLocale);
      var stringValue = removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue) === -1;
    },
    endsWith: function endsWith(value, filter2, filterLocale) {
      if (filter2 === void 0 || filter2 === null || filter2 === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      var filterValue = removeAccents(filter2.toString()).toLocaleLowerCase(filterLocale);
      var stringValue = removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue, stringValue.length - filterValue.length) !== -1;
    },
    equals: function equals2(value, filter2, filterLocale) {
      if (filter2 === void 0 || filter2 === null || filter2 === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter2.getTime) return value.getTime() === filter2.getTime();
      else return removeAccents(value.toString()).toLocaleLowerCase(filterLocale) == removeAccents(filter2.toString()).toLocaleLowerCase(filterLocale);
    },
    notEquals: function notEquals(value, filter2, filterLocale) {
      if (filter2 === void 0 || filter2 === null || filter2 === "") {
        return false;
      }
      if (value === void 0 || value === null) {
        return true;
      }
      if (value.getTime && filter2.getTime) return value.getTime() !== filter2.getTime();
      else return removeAccents(value.toString()).toLocaleLowerCase(filterLocale) != removeAccents(filter2.toString()).toLocaleLowerCase(filterLocale);
    },
    "in": function _in(value, filter2) {
      if (filter2 === void 0 || filter2 === null || filter2.length === 0) {
        return true;
      }
      for (var i = 0; i < filter2.length; i++) {
        if (equals(value, filter2[i])) {
          return true;
        }
      }
      return false;
    },
    between: function between(value, filter2) {
      if (filter2 == null || filter2[0] == null || filter2[1] == null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime) return filter2[0].getTime() <= value.getTime() && value.getTime() <= filter2[1].getTime();
      else return filter2[0] <= value && value <= filter2[1];
    },
    lt: function lt(value, filter2) {
      if (filter2 === void 0 || filter2 === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter2.getTime) return value.getTime() < filter2.getTime();
      else return value < filter2;
    },
    lte: function lte(value, filter2) {
      if (filter2 === void 0 || filter2 === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter2.getTime) return value.getTime() <= filter2.getTime();
      else return value <= filter2;
    },
    gt: function gt(value, filter2) {
      if (filter2 === void 0 || filter2 === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter2.getTime) return value.getTime() > filter2.getTime();
      else return value > filter2;
    },
    gte: function gte(value, filter2) {
      if (filter2 === void 0 || filter2 === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter2.getTime) return value.getTime() >= filter2.getTime();
      else return value >= filter2;
    },
    dateIs: function dateIs(value, filter2) {
      if (filter2 === void 0 || filter2 === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.toDateString() === filter2.toDateString();
    },
    dateIsNot: function dateIsNot(value, filter2) {
      if (filter2 === void 0 || filter2 === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.toDateString() !== filter2.toDateString();
    },
    dateBefore: function dateBefore(value, filter2) {
      if (filter2 === void 0 || filter2 === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.getTime() < filter2.getTime();
    },
    dateAfter: function dateAfter(value, filter2) {
      if (filter2 === void 0 || filter2 === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.getTime() > filter2.getTime();
    }
  },
  register: function register(rule, fn) {
    this.filters[rule] = fn;
  }
};
function _typeof$2(o) {
  "@babel/helpers - typeof";
  return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$2(o);
}
function ownKeys$2(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$2(Object(t), true).forEach(function(r2) {
      _defineProperty$2(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$2(e, r, t) {
  return (r = _toPropertyKey$2(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey$2(t) {
  var i = _toPrimitive$2(t, "string");
  return "symbol" == _typeof$2(i) ? i : i + "";
}
function _toPrimitive$2(t, r) {
  if ("object" != _typeof$2(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$2(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function tryOnMounted(fn) {
  var sync = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  if (getCurrentInstance() && getCurrentInstance().components) onMounted(fn);
  else if (sync) fn();
  else nextTick(fn);
}
var _id = 0;
function useStyle(css3) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var isLoaded = ref(false);
  var cssRef = ref(css3);
  var styleRef = ref(null);
  var defaultDocument = isClient() ? (void 0).document : void 0;
  var _options$document = options.document, document = _options$document === void 0 ? defaultDocument : _options$document, _options$immediate = options.immediate, immediate = _options$immediate === void 0 ? true : _options$immediate, _options$manual = options.manual, manual = _options$manual === void 0 ? false : _options$manual, _options$name = options.name, name = _options$name === void 0 ? "style_".concat(++_id) : _options$name, _options$id = options.id, id = _options$id === void 0 ? void 0 : _options$id, _options$media = options.media, media = _options$media === void 0 ? void 0 : _options$media, _options$nonce = options.nonce, nonce = _options$nonce === void 0 ? void 0 : _options$nonce, _options$first = options.first, first = _options$first === void 0 ? false : _options$first, _options$onMounted = options.onMounted, onStyleMounted = _options$onMounted === void 0 ? void 0 : _options$onMounted, _options$onUpdated = options.onUpdated, onStyleUpdated = _options$onUpdated === void 0 ? void 0 : _options$onUpdated, _options$onLoad = options.onLoad, onStyleLoaded = _options$onLoad === void 0 ? void 0 : _options$onLoad, _options$props = options.props, props = _options$props === void 0 ? {} : _options$props;
  var stop = function stop2() {
  };
  var load2 = function load22(_css) {
    var _props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!document) return;
    var _styleProps = _objectSpread$2(_objectSpread$2({}, props), _props);
    var _name = _styleProps.name || name, _id2 = _styleProps.id || id, _nonce = _styleProps.nonce || nonce;
    styleRef.value = document.querySelector('style[data-primevue-style-id="'.concat(_name, '"]')) || document.getElementById(_id2) || document.createElement("style");
    if (!styleRef.value.isConnected) {
      cssRef.value = _css || css3;
      setAttributes(styleRef.value, {
        type: "text/css",
        id: _id2,
        media,
        nonce: _nonce
      });
      first ? document.head.prepend(styleRef.value) : document.head.appendChild(styleRef.value);
      setAttribute(styleRef.value, "data-primevue-style-id", _name);
      setAttributes(styleRef.value, _styleProps);
      styleRef.value.onload = function(event) {
        return onStyleLoaded === null || onStyleLoaded === void 0 ? void 0 : onStyleLoaded(event, {
          name: _name
        });
      };
      onStyleMounted === null || onStyleMounted === void 0 || onStyleMounted(_name);
    }
    if (isLoaded.value) return;
    stop = watch(cssRef, function(value) {
      styleRef.value.textContent = value;
      onStyleUpdated === null || onStyleUpdated === void 0 || onStyleUpdated(_name);
    }, {
      immediate: true
    });
    isLoaded.value = true;
  };
  var unload = function unload2() {
    if (!document || !isLoaded.value) return;
    stop();
    isExist(styleRef.value) && document.head.removeChild(styleRef.value);
    isLoaded.value = false;
    styleRef.value = null;
  };
  if (immediate && !manual) tryOnMounted(load2);
  return {
    id,
    name,
    el: styleRef,
    css: cssRef,
    unload,
    load: load2,
    isLoaded: readonly(isLoaded)
  };
}
function _typeof$1(o) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$1(o);
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ;
      else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function ownKeys$1(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$1(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$1(Object(t), true).forEach(function(r2) {
      _defineProperty$1(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$1(e, r, t) {
  return (r = _toPropertyKey$1(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey$1(t) {
  var i = _toPrimitive$1(t, "string");
  return "symbol" == _typeof$1(i) ? i : i + "";
}
function _toPrimitive$1(t, r) {
  if ("object" != _typeof$1(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$1(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var css = function css2(_ref) {
  var dt2 = _ref.dt;
  return "\n.p-hidden-accessible {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    opacity: 0;\n    overflow: hidden;\n    padding: 0;\n    pointer-events: none;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n\n.p-overflow-hidden {\n    overflow: hidden;\n    padding-right: ".concat(dt2("scrollbar.width"), ";\n}\n");
};
var classes = {};
var inlineStyles = {};
var BaseStyle = {
  name: "base",
  css,
  style,
  classes,
  inlineStyles,
  load: function load(style2) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var transform = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(cs) {
      return cs;
    };
    var computedStyle = transform(resolve(style2, {
      dt
    }));
    return isNotEmpty(computedStyle) ? useStyle(minifyCSS(computedStyle), _objectSpread$1({
      name: this.name
    }, options)) : {};
  },
  loadCSS: function loadCSS() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return this.load(this.css, options);
  },
  loadStyle: function loadStyle() {
    var _this = this;
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var style2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return this.load(this.style, options, function() {
      var computedStyle = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return Theme.transformCSS(options.name || _this.name, "".concat(computedStyle).concat(style2));
    });
  },
  getCommonTheme: function getCommonTheme(params) {
    return Theme.getCommon(this.name, params);
  },
  getComponentTheme: function getComponentTheme(params) {
    return Theme.getComponent(this.name, params);
  },
  getDirectiveTheme: function getDirectiveTheme(params) {
    return Theme.getDirective(this.name, params);
  },
  getPresetTheme: function getPresetTheme(preset, selector, params) {
    return Theme.getCustomPreset(this.name, preset, selector, params);
  },
  getLayerOrderThemeCSS: function getLayerOrderThemeCSS() {
    return Theme.getLayerOrderCSS(this.name);
  },
  getStyleSheet: function getStyleSheet() {
    var extendedCSS = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    var props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.css) {
      var _css = resolve(this.css, {
        dt
      }) || "";
      var _style = minifyCSS("".concat(_css).concat(extendedCSS));
      var _props = Object.entries(props).reduce(function(acc, _ref2) {
        var _ref3 = _slicedToArray(_ref2, 2), k = _ref3[0], v = _ref3[1];
        return acc.push("".concat(k, '="').concat(v, '"')) && acc;
      }, []).join(" ");
      return isNotEmpty(_style) ? '<style type="text/css" data-primevue-style-id="'.concat(this.name, '" ').concat(_props, ">").concat(_style, "</style>") : "";
    }
    return "";
  },
  getCommonThemeStyleSheet: function getCommonThemeStyleSheet(params) {
    var props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Theme.getCommonStyleSheet(this.name, params, props);
  },
  getThemeStyleSheet: function getThemeStyleSheet(params) {
    var props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var css3 = [Theme.getStyleSheet(this.name, params, props)];
    if (this.style) {
      var name = this.name === "base" ? "global-style" : "".concat(this.name, "-style");
      var _css = resolve(this.style, {
        dt
      });
      var _style = minifyCSS(Theme.transformCSS(name, _css));
      var _props = Object.entries(props).reduce(function(acc, _ref4) {
        var _ref5 = _slicedToArray(_ref4, 2), k = _ref5[0], v = _ref5[1];
        return acc.push("".concat(k, '="').concat(v, '"')) && acc;
      }, []).join(" ");
      isNotEmpty(_style) && css3.push('<style type="text/css" data-primevue-style-id="'.concat(name, '" ').concat(_props, ">").concat(_style, "</style>"));
    }
    return css3.join("");
  },
  extend: function extend(inStyle) {
    return _objectSpread$1(_objectSpread$1({}, this), {}, {
      css: void 0,
      style: void 0
    }, inStyle);
  }
};
var PrimeVueService = EventBus();
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var defaultOptions = {
  ripple: false,
  inputStyle: null,
  inputVariant: null,
  locale: {
    startsWith: "Starts with",
    contains: "Contains",
    notContains: "Not contains",
    endsWith: "Ends with",
    equals: "Equals",
    notEquals: "Not equals",
    noFilter: "No Filter",
    lt: "Less than",
    lte: "Less than or equal to",
    gt: "Greater than",
    gte: "Greater than or equal to",
    dateIs: "Date is",
    dateIsNot: "Date is not",
    dateBefore: "Date is before",
    dateAfter: "Date is after",
    clear: "Clear",
    apply: "Apply",
    matchAll: "Match All",
    matchAny: "Match Any",
    addRule: "Add Rule",
    removeRule: "Remove Rule",
    accept: "Yes",
    reject: "No",
    choose: "Choose",
    upload: "Upload",
    cancel: "Cancel",
    completed: "Completed",
    pending: "Pending",
    fileSizeTypes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    chooseYear: "Choose Year",
    chooseMonth: "Choose Month",
    chooseDate: "Choose Date",
    prevDecade: "Previous Decade",
    nextDecade: "Next Decade",
    prevYear: "Previous Year",
    nextYear: "Next Year",
    prevMonth: "Previous Month",
    nextMonth: "Next Month",
    prevHour: "Previous Hour",
    nextHour: "Next Hour",
    prevMinute: "Previous Minute",
    nextMinute: "Next Minute",
    prevSecond: "Previous Second",
    nextSecond: "Next Second",
    am: "am",
    pm: "pm",
    today: "Today",
    weekHeader: "Wk",
    firstDayOfWeek: 0,
    showMonthAfterYear: false,
    dateFormat: "mm/dd/yy",
    weak: "Weak",
    medium: "Medium",
    strong: "Strong",
    passwordPrompt: "Enter a password",
    emptyFilterMessage: "No results found",
    searchMessage: "{0} results are available",
    selectionMessage: "{0} items selected",
    emptySelectionMessage: "No selected item",
    emptySearchMessage: "No results found",
    fileChosenMessage: "{0} files",
    noFileChosenMessage: "No file chosen",
    emptyMessage: "No available options",
    aria: {
      trueLabel: "True",
      falseLabel: "False",
      nullLabel: "Not Selected",
      star: "1 star",
      stars: "{star} stars",
      selectAll: "All items selected",
      unselectAll: "All items unselected",
      close: "Close",
      previous: "Previous",
      next: "Next",
      navigation: "Navigation",
      scrollTop: "Scroll Top",
      moveTop: "Move Top",
      moveUp: "Move Up",
      moveDown: "Move Down",
      moveBottom: "Move Bottom",
      moveToTarget: "Move to Target",
      moveToSource: "Move to Source",
      moveAllToTarget: "Move All to Target",
      moveAllToSource: "Move All to Source",
      pageLabel: "Page {page}",
      firstPageLabel: "First Page",
      lastPageLabel: "Last Page",
      nextPageLabel: "Next Page",
      prevPageLabel: "Previous Page",
      rowsPerPageLabel: "Rows per page",
      jumpToPageDropdownLabel: "Jump to Page Dropdown",
      jumpToPageInputLabel: "Jump to Page Input",
      selectRow: "Row Selected",
      unselectRow: "Row Unselected",
      expandRow: "Row Expanded",
      collapseRow: "Row Collapsed",
      showFilterMenu: "Show Filter Menu",
      hideFilterMenu: "Hide Filter Menu",
      filterOperator: "Filter Operator",
      filterConstraint: "Filter Constraint",
      editRow: "Row Edit",
      saveEdit: "Save Edit",
      cancelEdit: "Cancel Edit",
      listView: "List View",
      gridView: "Grid View",
      slide: "Slide",
      slideNumber: "{slideNumber}",
      zoomImage: "Zoom Image",
      zoomIn: "Zoom In",
      zoomOut: "Zoom Out",
      rotateRight: "Rotate Right",
      rotateLeft: "Rotate Left",
      listLabel: "Option List"
    }
  },
  filterMatchModeOptions: {
    text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
    numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
    date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
  },
  zIndex: {
    modal: 1100,
    overlay: 1e3,
    menu: 1e3,
    tooltip: 1100
  },
  theme: void 0,
  unstyled: false,
  pt: void 0,
  ptOptions: {
    mergeSections: true,
    mergeProps: false
  },
  csp: {
    nonce: void 0
  }
};
var PrimeVueSymbol = Symbol();
function setup(app, options) {
  var PrimeVue2 = {
    config: reactive(options)
  };
  app.config.globalProperties.$primevue = PrimeVue2;
  app.provide(PrimeVueSymbol, PrimeVue2);
  clearConfig();
  setupConfig(app, PrimeVue2);
  return PrimeVue2;
}
var stopWatchers = [];
function clearConfig() {
  ThemeService.clear();
  stopWatchers.forEach(function(fn) {
    return fn === null || fn === void 0 ? void 0 : fn();
  });
  stopWatchers = [];
}
function setupConfig(app, PrimeVue2) {
  var isThemeChanged = ref(false);
  var loadCommonTheme = function loadCommonTheme2() {
    var _PrimeVue$config;
    if (((_PrimeVue$config = PrimeVue2.config) === null || _PrimeVue$config === void 0 ? void 0 : _PrimeVue$config.theme) === "none") return;
    if (!Theme.isStyleNameLoaded("common")) {
      var _BaseStyle$getCommonT, _PrimeVue$config2;
      var _ref = ((_BaseStyle$getCommonT = BaseStyle.getCommonTheme) === null || _BaseStyle$getCommonT === void 0 ? void 0 : _BaseStyle$getCommonT.call(BaseStyle)) || {}, primitive = _ref.primitive, semantic = _ref.semantic, global = _ref.global, style2 = _ref.style;
      var styleOptions = {
        nonce: (_PrimeVue$config2 = PrimeVue2.config) === null || _PrimeVue$config2 === void 0 || (_PrimeVue$config2 = _PrimeVue$config2.csp) === null || _PrimeVue$config2 === void 0 ? void 0 : _PrimeVue$config2.nonce
      };
      BaseStyle.load(primitive === null || primitive === void 0 ? void 0 : primitive.css, _objectSpread({
        name: "primitive-variables"
      }, styleOptions));
      BaseStyle.load(semantic === null || semantic === void 0 ? void 0 : semantic.css, _objectSpread({
        name: "semantic-variables"
      }, styleOptions));
      BaseStyle.load(global === null || global === void 0 ? void 0 : global.css, _objectSpread({
        name: "global-variables"
      }, styleOptions));
      BaseStyle.loadStyle(_objectSpread({
        name: "global-style"
      }, styleOptions), style2);
      Theme.setLoadedStyleName("common");
    }
  };
  ThemeService.on("theme:change", function(newTheme) {
    if (!isThemeChanged.value) {
      app.config.globalProperties.$primevue.config.theme = newTheme;
      isThemeChanged.value = true;
    }
  });
  var stopConfigWatcher = watch(PrimeVue2.config, function(newValue, oldValue) {
    PrimeVueService.emit("config:change", {
      newValue,
      oldValue
    });
  }, {
    immediate: true,
    deep: true
  });
  var stopRippleWatcher = watch(function() {
    return PrimeVue2.config.ripple;
  }, function(newValue, oldValue) {
    PrimeVueService.emit("config:ripple:change", {
      newValue,
      oldValue
    });
  }, {
    immediate: true,
    deep: true
  });
  var stopThemeWatcher = watch(function() {
    return PrimeVue2.config.theme;
  }, function(newValue, oldValue) {
    if (!isThemeChanged.value) {
      Theme.setTheme(newValue);
    }
    if (!PrimeVue2.config.unstyled) {
      loadCommonTheme();
    }
    isThemeChanged.value = false;
    PrimeVueService.emit("config:theme:change", {
      newValue,
      oldValue
    });
  }, {
    immediate: true,
    deep: false
  });
  var stopUnstyledWatcher = watch(function() {
    return PrimeVue2.config.unstyled;
  }, function(newValue, oldValue) {
    if (!newValue && PrimeVue2.config.theme) {
      loadCommonTheme();
    }
    PrimeVueService.emit("config:unstyled:change", {
      newValue,
      oldValue
    });
  }, {
    immediate: true,
    deep: true
  });
  stopWatchers.push(stopConfigWatcher);
  stopWatchers.push(stopRippleWatcher);
  stopWatchers.push(stopThemeWatcher);
  stopWatchers.push(stopUnstyledWatcher);
}
var PrimeVue = {
  install: function install(app, options) {
    var configOptions = mergeKeys(defaultOptions, options);
    setup(app, configOptions);
  }
};
var ConfirmationEventBus = EventBus();
var PrimeVueConfirmSymbol = Symbol();
var ConfirmationService = {
  install: function install2(app) {
    var ConfirmationService2 = {
      require: function require2(options) {
        ConfirmationEventBus.emit("confirm", options);
      },
      close: function close() {
        ConfirmationEventBus.emit("close");
      }
    };
    app.config.globalProperties.$confirm = ConfirmationService2;
    app.provide(PrimeVueConfirmSymbol, ConfirmationService2);
  }
};
var DynamicDialogEventBus = EventBus();
var PrimeVueDialogSymbol = Symbol();
var DialogService = {
  install: function install3(app) {
    var DialogService2 = {
      open: function open(content, options) {
        var instance = {
          content: content && markRaw(content),
          options: options || {},
          data: options && options.data,
          close: function close(params) {
            DynamicDialogEventBus.emit("close", {
              instance,
              params
            });
          }
        };
        DynamicDialogEventBus.emit("open", {
          instance
        });
        return instance;
      }
    };
    app.config.globalProperties.$dialog = DialogService2;
    app.provide(PrimeVueDialogSymbol, DialogService2);
  }
};
var ToastEventBus = EventBus();
var PrimeVueToastSymbol = Symbol();
function useToast() {
  var PrimeVueToast = inject(PrimeVueToastSymbol);
  if (!PrimeVueToast) {
    throw new Error("No PrimeVue Toast provided!");
  }
  return PrimeVueToast;
}
var ToastService = {
  install: function install4(app) {
    var ToastService2 = {
      add: function add(message) {
        ToastEventBus.emit("add", message);
      },
      remove: function remove(message) {
        ToastEventBus.emit("remove", message);
      },
      removeGroup: function removeGroup(group) {
        ToastEventBus.emit("remove-group", group);
      },
      removeAllGroups: function removeAllGroups() {
        ToastEventBus.emit("remove-all-groups");
      }
    };
    app.config.globalProperties.$toast = ToastService2;
    app.provide(PrimeVueToastSymbol, ToastService2);
  }
};
const primevue_plugin_0tbz5Y3Ab_H50qf9PQhqyN3k7XWjmG9dWGLJNwEfVI0 = /* @__PURE__ */ defineNuxtPlugin(({ vueApp }) => {
  var _a;
  const runtimeConfig = /* @__PURE__ */ useRuntimeConfig();
  const config = ((_a = runtimeConfig == null ? void 0 : runtimeConfig.public) == null ? void 0 : _a.primevue) ?? {};
  const { usePrimeVue = true, options = {} } = config;
  const pt = {};
  const theme = { theme: options == null ? void 0 : options.theme };
  usePrimeVue && vueApp.use(PrimeVue, { ...options, ...pt, ...theme });
  vueApp.use(ConfirmationService);
  vueApp.use(DialogService);
  vueApp.use(ToastService);
});
const useProductStore = defineStore("product", {
  state: () => ({
    cartItems: [],
    // Array to hold cart items
    cartCount: 0,
    // Cart item count
    cartTotal: 0,
    // Cart total amount
    wishListItems: [],
    // Array to hold wishlist items
    wishListCount: 0,
    categories: [],
    products: [],
    orders: [],
    models: [],
    quoatations: []
  }),
  actions: {
    // Fetch cart items from the server and update the cart state
    async getCartItems() {
      try {
        const { $axios } = useNuxtApp();
        const response = await $axios.get("/product/cart");
        this.cartItems = response.data;
        this.cartCount = response.data.length;
        this.cartTotal = response.data.reduce(
          (total, item) => total + item.quantity * item.productModel.price,
          0
        );
      } catch (error) {
        console.error("Error fetching wishlist:", error);
        const localWishlist = JSON.parse(localStorage.getItem("cart")) || [];
        this.cartItems = localWishlist;
        this.cartCount = localWishlist.length;
        this.cartTotal = localWishlist.reduce(
          (total, item) => total + item.quantity * item.productModel.price,
          0
        );
      }
    },
    async getProducts() {
      try {
        const { $axios } = useNuxtApp();
        const response = await $axios.get("/product/product-models");
        console.log(response, "products ");
        this.products = response.data.results;
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    },
    async getModels() {
      try {
        const { $axios } = useNuxtApp();
        const response = await $axios.get("/product/product-models");
        this.models = response.data.results;
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    },
    async getOrderDetails(order) {
      try {
        const { $axios } = useNuxtApp();
        const response = await $axios.get(`/product/orders/${order.id}`);
        return response;
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    },
    async getCategories() {
      try {
        const { $axios } = useNuxtApp();
        const response = await $axios.get("/product/categories");
        this.categories = response.data;
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    },
    // Add a product to the cart
    async addToCart(product, quantity) {
      const userStore = useUserStore();
      let user = userStore.user;
      try {
        const { $axios } = useNuxtApp();
        if (userStore.isLoggedIn) {
          const response = await $axios.post("/product/cart/add", {
            productModelId: product.id,
            quantity,
            userId: user.id
          });
          this.getCartItems();
          return response;
        } else {
          console.warn(
            "User is not logged in. Adding product to localStorage cart."
          );
          const localCart = JSON.parse(localStorage.getItem("cart")) || [];
          const existingItem = localCart.find((item) => item.id === product.id);
          if (existingItem) {
            existingItem.quantity += quantity;
            await this.getCartItems();
          } else {
            const productMod = {
              id: product.id,
              name: product.name,
              created_at: (/* @__PURE__ */ new Date()).toISOString(),
              userId: "user.id",
              productModelId: product.id,
              productModel: {
                ...product
              }
            };
            localCart.push({ ...productMod, quantity });
            await this.getCartItems();
          }
          localStorage.setItem("cart", JSON.stringify(localCart));
          await this.getCartItems();
        }
      } catch (error) {
        console.error("Error adding to wishlist:", error);
      }
    },
    async getOrders() {
      try {
        const { $axios } = useNuxtApp();
        const response = await $axios.get("/product/orders");
        this.orders = response.data;
        return response.data;
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    },
    async getQuotation() {
      try {
        const { $axios } = useNuxtApp();
        const response = await $axios.get("/product/quotation");
        this.quoatations = response.data;
        console.log(this.quoatations, "  this.quoatations");
        return response.data;
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    },
    async submitReview(payload) {
      try {
        const { $axios } = useNuxtApp();
        const response = await $axios.post("/product/add-review", payload);
        console.log(response, "  this.quoatations");
        return response.data;
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    },
    async updateQuantity(id, quantity) {
      try {
        const { $axios } = useNuxtApp();
        const userStore = useUserStore();
        if (userStore.isLoggedIn) {
          await $axios.put(`/product/cart/update`, { id, quantity });
          this.getCartItems();
        } else {
          const storedCart = localStorage.getItem("cart");
          const localCart = storedCart ? JSON.parse(storedCart) : [];
          const updatedCart = localCart.map((item) => {
            if (item.id === id) {
              return { ...item, quantity };
            }
            return item;
          });
          localStorage.setItem("cart", JSON.stringify(updatedCart));
          this.getCartItems();
        }
      } catch (error) {
        console.error("Error updating cart quantity:", error);
      }
    },
    // Remove a product from the cart
    async removeFromCart(cartId) {
      try {
        const { $axios } = useNuxtApp();
        const userStore = useUserStore();
        if (userStore.isLoggedIn) {
          await $axios.delete(`/product/cart/remove/${cartId}`);
          this.getCartItems();
        } else {
          const storedCart = localStorage.getItem("cart");
          const localCart = storedCart ? JSON.parse(storedCart) : [];
          const updatedCart = localCart.filter((item) => item.id !== cartId);
          localStorage.setItem("cart", JSON.stringify(updatedCart));
          this.getCartItems();
        }
      } catch (error) {
        console.error("Error removing from cart:", error);
      }
    },
    async clearCart() {
      try {
        const { $axios } = useNuxtApp();
        for (const item of this.cartItems) {
          await $axios.delete(`/product/cart/remove/${item.id}`);
        }
        this.cartItems = [];
        await this.getCartItems();
      } catch (error) {
        console.error("Error clearing the cart:", error);
      }
    },
    // Fetch wishlist items from the server
    async getWishList() {
      try {
        const { $axios } = useNuxtApp();
        const response = await $axios.get("/product/wishlist");
        this.wishListItems = response.data;
        this.wishListCount = response.data.length;
        await this.getCartItems();
      } catch (error) {
        const localWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        this.wishListItems = localWishlist;
        this.wishListCount = localWishlist.length;
      }
    },
    async moveCartLive() {
      const userStore = useUserStore();
      if (!userStore.isLoggedIn) {
        console.log("User is not logged in. Cannot move wishlist items.");
        return;
      }
      {
        console.error("LocalStorage is not available.");
      }
    },
    async moveWishlistToCart() {
      const userStore = useUserStore();
      if (!userStore.isLoggedIn) {
        return;
      }
      {
        console.error("LocalStorage is not available.");
      }
    },
    async addToWishlist(productModelId) {
      var _a;
      try {
        const { $axios } = useNuxtApp();
        const product = { productModelId };
        const res = await $axios.post("/product/wishlist/add", product);
        if (res) {
          this.getWishList();
          this.wishListCount = this.wishListItems.length;
          localStorage.setItem("wishlist", JSON.stringify(this.wishListItems));
          return res;
        }
      } catch (error) {
        if (((_a = error.response) == null ? void 0 : _a.status) === 401) {
          console.warn(
            "User is not logged in. Adding product to localStorage wishlist."
          );
          const localWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
          if (!localWishlist.some((item) => item.id === productModelId)) {
            localWishlist.push({ id: productModelId });
            localStorage.setItem("wishlist", JSON.stringify(localWishlist));
            console.log("Product added to localStorage wishlist.");
          } else {
            console.log("Product already exists in localStorage wishlist.");
          }
        } else {
          console.error("Error adding to wishlist:", error);
        }
      }
    },
    async removeFromWishlist(productId) {
      const userStore = useUserStore();
      try {
        const { $axios } = useNuxtApp();
        if (userStore.isLoggedIn) {
          await $axios.delete(`/product/wishlist/remove/${productId}`);
        } else {
          let localWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
          const updatedWishlist = localWishlist.filter(
            (item) => item.id !== productId
          );
          localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
        }
        await this.getWishList();
        const index = this.wishListItems.findIndex(
          (item) => item.id === productId
        );
        if (index !== -1) {
          this.wishListItems.splice(index, 1);
        }
        this.wishListCount = this.wishListItems.length;
      } catch (error) {
        console.error("Error removing from wishlist:", error);
      }
    },
    async placeOrder(user, vat) {
      var _a, _b, _c;
      try {
        const { $axios } = useNuxtApp();
        let products = this.cartItems.map((item) => {
          var _a2;
          return {
            productModelId: ((_a2 = item == null ? void 0 : item.productModel) == null ? void 0 : _a2.id) ?? (item == null ? void 0 : item.id) ?? "",
            quantity: (item == null ? void 0 : item.quantity) ?? 1
          };
        });
        let order = {
          products,
          first_name: user.firstName,
          last_name: user.lastName,
          email: user.email,
          town: user.town,
          phone_number: user.phoneNumber,
          street_address: user.street_address,
          city: user.city,
          isVat: vat
        };
        const response = await $axios.post("/product/orders", order);
        this.clearCart();
        return response;
      } catch (error) {
        console.error("Error placing order:", error);
        throw new Error((_c = (_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.error) == null ? void 0 : _c.message);
      }
    },
    async makeQuotation(message, quotationList) {
      try {
        const { $axios } = useNuxtApp();
        let products = quotationList.map((item) => ({
          productModelId: item == null ? void 0 : item.id,
          quantity: item.quantity
        }));
        const response = await $axios.post("/product/quotation", {
          products,
          message
        });
        console.log(response, " response");
        return response;
      } catch (error) {
        console.error("Error placing order:", error);
      }
    },
    async placeOrderAnonymous(user, vat) {
      var _a, _b, _c;
      try {
        const { $axios } = useNuxtApp();
        let products = this.cartItems.map((item) => {
          var _a2;
          return {
            productModelId: ((_a2 = item == null ? void 0 : item.productModel) == null ? void 0 : _a2.id) ?? (item == null ? void 0 : item.id) ?? "",
            quantity: (item == null ? void 0 : item.quantity) ?? 1
          };
        });
        let order = {
          products,
          first_name: user.firstName,
          last_name: user.lastName,
          email: user.email,
          town: user.town,
          phone_number: user.phoneNumber,
          street_address: user.street_address,
          city: user.city,
          isVat: vat
        };
        const response = await $axios.post("/product/orders/anonymous", order);
        this.clearCart();
        return response;
      } catch (error) {
        console.error("Error placing order:", error);
        throw new Error((_c = (_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.error) == null ? void 0 : _c.message);
      }
    },
    async checkOut(order) {
      try {
        const { $axios } = useNuxtApp();
        let orderData = {
          orderId: order.orderId,
          amount: order.amount,
          phoneNumber: order.phoneNumber
        };
        const response = await $axios.post("/product/checkout", orderData);
        return response;
      } catch (error) {
        console.error("Error placing order:", error);
      }
    }
  },
  getters: {
    // Getter for cart item count
    getCartCount: (state) => state.cartCount,
    // Getter for wishlist item count
    getWishListCount: (state) => state.wishListCount,
    // Getter for cart total value
    getCartTotal: (state) => state.cartTotal,
    getCategoriesList: (state) => state.categories,
    getProductList: (state) => state.products,
    getModelsList: (state) => state.models,
    getOrdersList: (state) => state.orders,
    getQuotationList: (state) => state.quoatations
  },
  persist: {
    storage: void 0
  }
});
const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
    // Holds user data
    accessToken: null,
    // Holds the authentication accessToken
    refreshToken: null,
    accessTokenExpiresAt: null,
    refreshTokenExpiresAt: null
  }),
  actions: {
    setTokens(response) {
      const {
        accessToken,
        refreshToken,
        accessTokenExpiresAt,
        refreshTokenExpiresAt,
        user
      } = response;
      this.user = user;
      this.accessToken = accessToken;
      this.refreshToken = refreshToken;
      this.accessTokenExpiresAt = accessTokenExpiresAt;
      this.refreshTokenExpiresAt = refreshTokenExpiresAt;
    },
    async login(email, password) {
      var _a, _b, _c;
      try {
        const { $axios } = useNuxtApp();
        const response = await $axios.post("/user/login", { email, password });
        const {
          accessToken,
          user,
          refreshToken,
          refreshTokenExpiresAt,
          accessTokenExpiresAt
        } = response.data;
        if (accessToken && user) {
          this.user = user;
          this.accessToken = accessToken;
          this.refreshToken = refreshToken;
          this.accessTokenExpiresAt = accessTokenExpiresAt;
          this.refreshTokenExpiresAt = refreshTokenExpiresAt;
          const productStore = useProductStore();
          productStore.moveWishlistToCart();
          productStore.moveCartLive();
          productStore.getWishList();
          productStore.getCartItems();
          return { accessToken, user };
        } else {
          throw new Error("Invalid login credentials.");
        }
      } catch (error) {
        throw new Error(
          ((_c = (_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.error) == null ? void 0 : _c.message) || "Login failed."
        );
      }
    },
    // Function to refresh the access accessToken using the refresh accessToken
    async refreshAccessToken() {
      if (!this.refreshToken || !this.user) {
        console.error("No refresh accessToken or user ID found.");
        return;
      }
      const { $axios } = useNuxtApp();
      try {
        const response = await $axios.post("/auth/refresh", {
          id: this.user.id,
          refreshToken: this.refreshToken
        });
        const { accessToken, refreshToken } = response.data;
        if (accessToken) {
          this.accessToken = accessToken;
          this.refreshToken = refreshToken;
        } else {
          console.error("Failed to refresh access accessToken.");
        }
      } catch (error) {
        console.error("Error refreshing accessToken:", error);
        this.logout();
      }
    },
    async register({
      email,
      password,
      phoneNumber,
      lastName,
      firstName,
      roleId
    }) {
      var _a, _b, _c;
      try {
        const { $axios } = useNuxtApp();
        const userData = {
          email,
          password,
          phoneNumber: phoneNumber || "",
          // Fallback to empty string if not provided
          firstName,
          lastName,
          roleId
        };
        const response = await $axios.post("/auth/create-user", userData);
        const { accessToken, user } = response.data;
        return true;
      } catch (error) {
        throw new Error(
          ((_c = (_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.error) == null ? void 0 : _c.message) || "Registration failed."
        );
      }
    },
    async verifyOtp({ email, otp }) {
      var _a, _b, _c;
      try {
        const { $axios } = useNuxtApp();
        const userData = {
          email,
          otp
        };
        const response = await $axios.post("/auth/verify", userData);
        const {
          accessToken,
          user,
          refreshToken,
          refreshTokenExpiresAt,
          accessTokenExpiresAt
        } = response.data;
        if (accessToken && user) {
          this.user = user;
          this.accessToken = accessToken;
          this.refreshToken = refreshToken;
          this.accessTokenExpiresAt = accessTokenExpiresAt;
          this.refreshTokenExpiresAt = refreshTokenExpiresAt;
          return { accessToken, user, refreshToken, refreshTokenExpiresAt, accessTokenExpiresAt };
        } else {
          throw new Error("Registration failed.");
        }
      } catch (error) {
        throw new Error(((_c = (_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.error) == null ? void 0 : _c.message) || "Invalid OTP.");
      }
    },
    async updateUser(user, id) {
      var _a, _b, _c;
      try {
        const { $axios } = useNuxtApp();
        const response = await $axios.put(`user/update-user/${id}`, user);
        return response;
      } catch (error) {
        throw new Error((_c = (_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.error) == null ? void 0 : _c.message);
      }
    },
    async updatePassword(password) {
      var _a, _b, _c;
      try {
        const { $axios } = useNuxtApp();
        const response = await $axios.post(`auth/change-password`, password);
        return response;
      } catch (error) {
        throw new Error((_c = (_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.error) == null ? void 0 : _c.message);
      }
    },
    async resetPassword(resetPassDTO) {
      var _a, _b, _c;
      try {
        const { $axios } = useNuxtApp();
        const response = await $axios.post("/auth/reset-password", resetPassDTO);
        console.log(response, "success");
        return response;
      } catch (error) {
        throw new Error(((_c = (_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.error) == null ? void 0 : _c.message) || "Invalid OTP or password reset failed.");
      }
    },
    logout() {
      this.user = null;
      this.accessToken = null;
      const userStore = useUserStore();
      const productStore = useProductStore();
      userStore.$reset();
      productStore.$reset();
      const { $router } = useNuxtApp();
      if ($router) {
        $router.push("/auth");
      }
    }
  },
  getters: {
    isLoggedIn: (state) => state.accessToken !== null
  },
  persist: {
    storage: void 0
  }
});
const axios_noAkUduv0vf78s7vht2Hls1EDqDfAXigM3_vcuRZv2s = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  const userStore = useUserStore();
  const router = useRouter();
  const axiosInstance = axios.create({
    // baseURL: "https://hickdigitalmart-backend.onrender.com/api",
    baseURL: "https://api.hikvisionkenyashop.com/api/",
    // baseURL: "http://164.92.217.115:4500/api",
    headers: {
      "Content-Type": "application/json"
    }
  });
  let isRefreshing = false;
  let refreshSubscribers = [];
  const onRefreshed = (token) => {
    refreshSubscribers.forEach((callback) => callback(token));
    refreshSubscribers = [];
  };
  axiosInstance.interceptors.request.use(
    (config) => {
      let accessToken = userStore.accessToken;
      let accessTokenExpiresAt = userStore.accessTokenExpiresAt;
      if (accessToken && new Date(accessTokenExpiresAt) < /* @__PURE__ */ new Date()) {
        if (!isRefreshing) {
          isRefreshing = true;
          return axios.post(`https://hickdigitalmart-backend.onrender.com/api/auth/refresh`, {
            id: userStore.user.id,
            refreshToken: userStore.refreshToken
          }).then((response) => {
            userStore.setTokens(response.data);
            isRefreshing = false;
            onRefreshed(response.data.accessToken);
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            return config;
          }).catch((error) => {
            isRefreshing = false;
            userStore.logout();
            router.push("/auth");
            return Promise.reject(error);
          });
        }
        return new Promise((resolve2) => {
          refreshSubscribers.push((token) => {
            config.headers.Authorization = `Bearer ${token}`;
            resolve2(config);
          });
        });
      }
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      return Promise.reject(error);
    }
  );
  return {
    provide: {
      axios: axiosInstance
    }
  };
});
const initializeStore_lEz8_Ko_QmwdQ69GEQXTt50IdmsNwA_h8ylgq2W1JOk = /* @__PURE__ */ defineNuxtPlugin(() => {
  const userStore = useUserStore();
  if (userStore.isLoggedIn) ;
});
const formatPrice_Ef_gxwB9_I2Ab0tdeRKZAYUIuy56kXRVMTTTHdS45Jg = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("formatPrice", (value) => {
    if (value === void 0 || value === null) return "";
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  });
});
const formatDate_rCwxjoR3rl4fQa4nwjlUoZRBtZiapJTUpoNIdNO5IZ8 = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("formatDate", (value, locale = "en-GB", options = {}) => {
    if (!value) return "";
    const date = new Date(value);
    if (isNaN(date.getTime())) return "";
    return date.toLocaleDateString(locale, {
      year: "numeric",
      month: "short",
      day: "numeric",
      ...options
    });
  });
});
const error_handler_DNMY46R1VrmPTze2vUP_MqY_D_J1FfFG_ohDUaaTsSU = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("vue:error", (err) => {
  });
});
const plugins = [
  payloadPlugin,
  unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU,
  plugin$1,
  revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms,
  plugin,
  components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4,
  primevue_plugin_0tbz5Y3Ab_H50qf9PQhqyN3k7XWjmG9dWGLJNwEfVI0,
  axios_noAkUduv0vf78s7vht2Hls1EDqDfAXigM3_vcuRZv2s,
  initializeStore_lEz8_Ko_QmwdQ69GEQXTt50IdmsNwA_h8ylgq2W1JOk,
  formatPrice_Ef_gxwB9_I2Ab0tdeRKZAYUIuy56kXRVMTTTHdS45Jg,
  formatDate_rCwxjoR3rl4fQa4nwjlUoZRBtZiapJTUpoNIdNO5IZ8,
  error_handler_DNMY46R1VrmPTze2vUP_MqY_D_J1FfFG_ohDUaaTsSU
];
const layouts = {
  default: defineAsyncComponent(() => import('./default-BHJnd_-Q.mjs').then((m) => m.default || m)),
  error: defineAsyncComponent(() => import('./error-D-ECh9dQ.mjs').then((m) => m.default || m)),
  landing: defineAsyncComponent(() => import('./landing-CfolbR98.mjs').then((m) => m.default || m)),
  login: defineAsyncComponent(() => import('./login-DjbwmSx4.mjs').then((m) => m.default || m))
};
const LayoutLoader = defineComponent({
  name: "LayoutLoader",
  inheritAttrs: false,
  props: {
    name: String,
    layoutProps: Object
  },
  setup(props, context) {
    return () => h(layouts[props.name], props.layoutProps, context.slots);
  }
});
const nuxtLayoutProps = {
  name: {
    type: [String, Boolean, Object],
    default: null
  },
  fallback: {
    type: [String, Object],
    default: null
  }
};
const __nuxt_component_0$1 = defineComponent({
  name: "NuxtLayout",
  inheritAttrs: false,
  props: nuxtLayoutProps,
  setup(props, context) {
    const nuxtApp = useNuxtApp();
    const injectedRoute = inject(PageRouteSymbol);
    const shouldUseEagerRoute = !injectedRoute || injectedRoute === useRoute();
    const route = shouldUseEagerRoute ? useRoute$1() : injectedRoute;
    const layout = computed(() => {
      let layout2 = unref(props.name) ?? (route == null ? void 0 : route.meta.layout) ?? "default";
      if (layout2 && !(layout2 in layouts)) {
        if (props.fallback) {
          layout2 = unref(props.fallback);
        }
      }
      return layout2;
    });
    const layoutRef = shallowRef();
    context.expose({ layoutRef });
    const done = nuxtApp.deferHydration();
    let lastLayout;
    return () => {
      const hasLayout = layout.value && layout.value in layouts;
      const transitionProps = (route == null ? void 0 : route.meta.layoutTransition) ?? appLayoutTransition;
      const previouslyRenderedLayout = lastLayout;
      lastLayout = layout.value;
      return _wrapInTransition(hasLayout && transitionProps, {
        default: () => h(Suspense, { suspensible: true, onResolve: () => {
          nextTick(done);
        } }, {
          default: () => h(
            LayoutProvider,
            {
              layoutProps: mergeProps(context.attrs, { ref: layoutRef }),
              key: layout.value || void 0,
              name: layout.value,
              shouldProvide: !props.name,
              isRenderingNewLayout: (name) => {
                return name !== previouslyRenderedLayout && name === layout.value;
              },
              hasTransition: !!transitionProps
            },
            context.slots
          )
        })
      }).default();
    };
  }
});
const LayoutProvider = defineComponent({
  name: "NuxtLayoutProvider",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean]
    },
    layoutProps: {
      type: Object
    },
    hasTransition: {
      type: Boolean
    },
    shouldProvide: {
      type: Boolean
    },
    isRenderingNewLayout: {
      type: Function,
      required: true
    }
  },
  setup(props, context) {
    const name = props.name;
    if (props.shouldProvide) {
      provide(LayoutMetaSymbol, {
        isCurrent: (route) => name === (route.meta.layout ?? "default")
      });
    }
    const injectedRoute = inject(PageRouteSymbol);
    const isNotWithinNuxtPage = injectedRoute && injectedRoute === useRoute();
    if (isNotWithinNuxtPage) {
      const vueRouterRoute = useRoute$1();
      const reactiveChildRoute = {};
      for (const _key in vueRouterRoute) {
        const key = _key;
        Object.defineProperty(reactiveChildRoute, key, {
          enumerable: true,
          get: () => {
            return props.isRenderingNewLayout(props.name) ? vueRouterRoute[key] : injectedRoute[key];
          }
        });
      }
      provide(PageRouteSymbol, shallowReactive(reactiveChildRoute));
    }
    return () => {
      var _a, _b;
      if (!name || typeof name === "string" && !(name in layouts)) {
        return (_b = (_a = context.slots).default) == null ? void 0 : _b.call(_a);
      }
      return h(
        LayoutLoader,
        { key: name, layoutProps: props.layoutProps, name },
        context.slots
      );
    };
  }
});
const defineRouteProvider = (name = "RouteProvider") => defineComponent({
  name,
  props: {
    vnode: {
      type: Object,
      required: true
    },
    route: {
      type: Object,
      required: true
    },
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key],
        enumerable: true
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const RouteProvider = defineRouteProvider();
const __nuxt_component_0 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, slots, expose }) {
    const nuxtApp = useNuxtApp();
    const pageRef = ref();
    inject(PageRouteSymbol, null);
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    nuxtApp.deferHydration();
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          return h(Suspense, { suspensible: true }, {
            default() {
              return h(RouteProvider, {
                vnode: slots.default ? normalizeSlot(slots.default, routeProps) : routeProps.Component,
                route: routeProps.route,
                vnodeRef: pageRef
              });
            }
          });
        }
      });
    };
  }
});
function normalizeSlot(slot, data) {
  const slotContent = slot(data);
  return slotContent.length === 1 ? h(slotContent[0]) : h(Fragment, void 0, slotContent);
}
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __nuxt_component_0$1;
  const _component_NuxtPage = __nuxt_component_0;
  _push(ssrRenderComponent(_component_NuxtLayout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_NuxtPage)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/pages/runtime/app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "nuxt-error-page",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const props = __props;
    const _error = props.error;
    _error.stack ? _error.stack.split("\n").splice(1).map((line) => {
      const text = line.replace("webpack:/", "").replace(".vue", ".js").trim();
      return {
        text,
        internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
      };
    }).map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n") : "";
    const statusCode = Number(_error.statusCode || 500);
    const is404 = statusCode === 404;
    const statusMessage = _error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
    const description = _error.message || _error.toString();
    const stack = void 0;
    const _Error404 = defineAsyncComponent(() => import('./error-404-BQn-sdS1.mjs'));
    const _Error = defineAsyncComponent(() => import('./error-500-D4JTjCuy.mjs'));
    const ErrorTemplate = is404 ? _Error404 : _Error;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ErrorTemplate), mergeProps({ statusCode: unref(statusCode), statusMessage: unref(statusMessage), description: unref(description), stack: unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = () => null;
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    const abortRender = error.value && !nuxtApp.ssrContext.error;
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(abortRender)) {
            _push(`<div></div>`);
          } else if (unref(error)) {
            _push(ssrRenderComponent(unref(_sfc_main$1), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(AppComponent), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    var _a;
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (error) {
      await nuxt.hooks.callHook("app:error", error);
      (_a = nuxt.payload).error || (_a.error = createError(error));
    }
    if (ssrContext == null ? void 0 : ssrContext._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry$1 = (ssrContext) => entry(ssrContext);

export { BaseStyle as B, ConfirmationEventBus as C, DynamicDialogEventBus as D, FilterService as F, PrimeVueService as P, ToastEventBus as T, _export_sfc as _, useNuxtApp as a, useRuntimeConfig as b, nuxtLinkDefaults as c, useUserStore as d, entry$1 as default, useProductStore as e, useToast as f, defineNuxtRouteMiddleware as g, FilterMatchMode as h, FilterOperator as i, __nuxt_component_0 as j, navigateTo as n, resolveRouteObject as r, tryUseNuxtApp as t, useRouter as u };
//# sourceMappingURL=server.mjs.map
