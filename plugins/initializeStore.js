export default defineNuxtPlugin(() => {
    const userStore = useUserStore();
  
    // Initialize store from persisted state if necessary
    if (userStore.isLoggedIn) {
    //   console.log("User is already logged in:", userStore.user);
    } else {
    //   console.log("No user logged in.");
    }
  });
  