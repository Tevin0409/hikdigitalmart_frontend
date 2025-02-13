// stores/productStore.js
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCategoriesStore = defineStore('categories', {
  state: () => ({
    categories: [],      // Array to hold cart items
   
  }),

  actions: {
    // Fetch cart items from the server and update the cart state
    async getCategories() {
      try {
        const { $axios } = useNuxtApp();
        const response = await $axios.get("/product/categories");
        this.categories = response.data;
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    },
  },

  getters: {
    // Getter for cart item count
    getCategories: (state) => state.categories,
    
    
  },

  persist: {
    storage: typeof window !== 'undefined' ? localStorage : undefined,
  },
});
