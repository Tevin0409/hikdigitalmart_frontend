// middleware/auth.js
export default defineNuxtRouteMiddleware((to, from) => {
    console.log('Auth middleware executed'); // Debugging log
    const userStore = useUserStore();


    console.log('Auth middleware', userStore.isLoggedIn)
  
    // Check if the user is logged in
    if (!userStore.isLoggedIn) {
      console.log('User not logged in, redirecting to /auth');
      return navigateTo('/auth');
    }
  });
  