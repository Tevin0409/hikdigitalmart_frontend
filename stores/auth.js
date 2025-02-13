import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null, // Holds user data
    accessToken: null, // Holds the authentication accessToken
    refreshToken: null,
    accessTokenExpiresAt: null,
    refreshTokenExpiresAt: null,
  }),

  actions: {
    setTokens(response) {
      const {
        accessToken,
        refreshToken,
        accessTokenExpiresAt,
        refreshTokenExpiresAt,
        user,
      } = response
      this.user = user;
      this.accessToken = accessToken;
      this.refreshToken = refreshToken;
      this.accessTokenExpiresAt = accessTokenExpiresAt;
      this.refreshTokenExpiresAt = refreshTokenExpiresAt;
    },
    async login(email, password) {
      try {
        const { $axios } = useNuxtApp();

        const response = await $axios.post("/user/login", { email, password });
        const {
          accessToken,
          user,
          refreshToken,
          refreshTokenExpiresAt,
          accessTokenExpiresAt,
        } = response.data;

        if (accessToken && user) {
          this.user = user;
          this.accessToken = accessToken;
          this.refreshToken = refreshToken;
          this.accessTokenExpiresAt = accessTokenExpiresAt;
          this.refreshTokenExpiresAt = refreshTokenExpiresAt;

          // console.log(accessToken,"accessToken")
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
          error.response?.data?.error?.message || "Login failed."
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
          refreshToken: this.refreshToken,
        });

        const { accessToken, refreshToken } = response.data;

        if (accessToken) {
          this.accessToken = accessToken;
          this.refreshToken = refreshToken; // Update refreshToken
        } else {
          console.error("Failed to refresh access accessToken.");
        }
      } catch (error) {
        console.error("Error refreshing accessToken:", error);
        this.logout(); // Log out if accessToken refresh fails
      }
    },
    async register({
      email,
      password,
      phoneNumber,
      lastName,
      firstName,
      roleId,
    }) {
      try {
        const { $axios } = useNuxtApp();
        const userData = {
          email,
          password,
          phoneNumber: phoneNumber || "", // Fallback to empty string if not provided
          firstName,
          lastName,
          roleId,
        };

        const response = await $axios.post("/auth/create-user", userData);

        const { accessToken, user } = response.data;
        // console.log(response.data, "resque user   ")

        return true;
      } catch (error) {
        // console.error("Registration failed:", error.response?.data || error.message);
        throw new Error(
          error.response?.data?.error?.message || "Registration failed."
        );
      }
    },
    async verifyOtp({ email, otp }) {
      try {
        const { $axios } = useNuxtApp();
        const userData = {
          email,
          otp,
        };

        const response = await $axios.post("/auth/verify", userData);

        const { accessToken, user } = response.data;
        if (accessToken && user) {
          this.user = user;
          this.accessToken = accessToken;
          return { accessToken, user };
        } else {
          throw new Error("Registration failed.");
        }
      } catch (error) {
        throw new Error(error.response?.data?.error?.message || "Invalid OTP.");
      }
    },

    logout() {
      // Clear user and accessToken data from the store
      this.user = null;
      this.accessToken = null;

      const userStore = useUserStore();
      const productStore = useProductStore();

      // Clear user and accessToken data from the store
      userStore.$reset(); // Reset userStore state
      productStore.$reset(); // Reset productStore state

      // Clear localStorage or any persistent storage
      if (typeof window !== "undefined") {
        localStorage.removeItem("user");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("product");
      }

      // Optional: Navigate to the auth page
      const { $router } = useNuxtApp();
      if ($router) {
        $router.push("/auth");
      }
    },
  },

  getters: {
    isLoggedIn: state => state.accessToken !== null,
  },

  persist: {
    storage: typeof window !== "undefined" ? localStorage : undefined,
  },
});
