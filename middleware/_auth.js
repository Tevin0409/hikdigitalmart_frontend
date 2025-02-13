// /middleware/_auth.js
export default defineNuxtRouteMiddleware((to, from) => {
    console.log('Global auth middleware executed for:', to.path);
  });
  