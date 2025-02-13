// stores/productStore.js
import { defineStore } from "pinia";
import { ref } from "vue";

export const useProductStore = defineStore("product", {
  state: () => ({
    cartItems: [], // Array to hold cart items
    cartCount: 0, // Cart item count
    cartTotal: 0, // Cart total amount
    wishListItems: [], // Array to hold wishlist items
    wishListCount: 0,
    categories: [],
    products: [],
    orders: [],
    models: [],
  }),

  actions: {
    // Fetch cart items from the server and update the cart state
    async getCartItems() {
      try {
        const { $axios } = useNuxtApp();
        const response = await $axios.get("/product/cart");

        this.cartItems = response.data; // Update the cart items
        this.cartCount = response.data.length; // Update the cart item count
        // Calculate the cart total (assuming each product has a price property)
        this.cartTotal = response.data.reduce(
          (total, item) => total + item.quantity * item.productModel.price,
          0
        );
      } catch (error) {
        console.error("Error fetching wishlist:", error);
        // Fallback to localStorage if no response
        const localWishlist = JSON.parse(localStorage.getItem("cart")) || [];
        this.cartItems = localWishlist;
        this.cartCount = localWishlist.length;
        this.cartTotal = localWishlist.reduce(
          (total, item) => total + item.quantity * item.price,
          0
        );
      }
    },

    async getProducts() {
      try {
        const { $axios } = useNuxtApp();
        const response = await $axios.get("/product/product-models");
        this.products = response.data.results // Update the cart items
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    },
     async getModels() {
      try {
        const { $axios } = useNuxtApp();
        const response = await $axios.get("/product/product-models");
        this.models = response.data.results // Update the cart items
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    },
    async getCategories() {
      try {
        const { $axios } = useNuxtApp();
        const response = await $axios.get("/product/categories");
        this.categories = response.data; // Update the cart items
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    },

    // Add a product to the cart
    async addToCart(product, quantity) {
      console.log("Add to cart", product);
      const userStore = useUserStore();

      let user = userStore.user;
      try {
        const { $axios } = useNuxtApp();
        if (userStore.isLoggedIn) {
          const response = await $axios.post("/product/cart/add", {
            productModelId: product.productModelId || product.id,
            quantity,
            userId: user.id,
          });
          this.getCartItems();
          return response;
        } else {
          console.warn(
            "User is not logged in. Adding product to localStorage cart."
          );
          const localCart = JSON.parse(localStorage.getItem("cart")) || [];
          const existingItem = localCart.find(item => item.id === product.id);
          if (existingItem) {
            existingItem.quantity += quantity; // Update quantity if already exists
            await this.getCartItems();
          } else {
            localCart.push({ ...product, quantity }); // Add new item
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
        console.log(response, "orders");
        this.orders = response.data; // Update the orders
        return response.data; // Return the data
      } catch (error) {
        console.error("Error fetching orders:", error);
        // return [];  // Return an empty array in case of error
      }
    },

    // Remove a product from the cart
    async removeFromCart(cartId) {
      try {
        const { $axios } = useNuxtApp();
        await $axios.delete(`/product/cart/remove/${cartId}`);
        this.getCartItems();

        // Remove the item from cart items
        // const itemIndex = this.cartItems.findIndex(item => item.id === productId);
        // if (itemIndex !== -1) {
        //   this.cartTotal -= (this.cartItems[itemIndex].quantity * this.cartItems[itemIndex].price);
        //   this.cartItems.splice(itemIndex, 1);  // Remove item from cart
        // }

        // // Recalculate cart count
        // this.cartCount = this.cartItems.length;
      } catch (error) {
        console.error("Error removing from cart:", error);
      }
    },

    // Fetch wishlist items from the server
    async getWishList() {
      try {
        const { $axios } = useNuxtApp();
        const response = await $axios.get("/product/wishlist");

        this.wishListItems = response.data; // Update the wishlist items
        this.wishListCount = response.data.length; // Update the wishlist count

        await this.getCartItems();
      } catch (error) {
        console.error("Error fetching wishlist:", error);
        // Fallback to localStorage if no response
        const localWishlist =
          JSON.parse(localStorage.getItem("wishlist")) || [];
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

      if (typeof window !== "undefined") {
        const storedWishlist = localStorage.getItem("cart");
        const wishIds = storedWishlist ? JSON.parse(storedWishlist) : [];
        console.log("cdcs", wishIds);

        if (Array.isArray(wishIds) && wishIds.length > 0) {
          try {
            for (let productModel of wishIds) {
              const quantity = productModel?.quantity || 1;
              await this.addToCart(productModel, quantity);
            }
            this.getCartItems();
            localStorage.removeItem("cart"); // Clear wishlist from localStorage
         
          } catch (error) {
            console.error("Error moving cart", error);
          }
        } else {
          console.log("No items in localStorage wishlist to move.");
        }
      } else {
        console.error("LocalStorage is not available.");
      }
    },
    async moveWishlistToCart() {
      const userStore = useUserStore();
      console.log("moveWishlistToCart");
      if (!userStore.isLoggedIn) {
        console.log("User is not logged in. Cannot move wishlist items.");
        return;
      }

      if (typeof window !== "undefined") {
        const storedWishlist = localStorage.getItem("wishlist");
        const wishIds = storedWishlist ? JSON.parse(storedWishlist) : [];

        if (Array.isArray(wishIds) && wishIds.length > 0) {
          try {
            for (let productModelId of wishIds) {
              console.log("cs", productModelId);
              // await this.addToCart(productModelId, 1, userStore.user.id);
              await this.addToWishlist(productModelId.id);
            }
            this.getWishList();
            this.getCartItems();
            localStorage.removeItem("wishlist"); // Clear wishlist from localStorage
            console.log("Wishlist items moved to cart successfully.");
          } catch (error) {
            console.error("Error moving wishlist to cart:", error);
          }
        } else {
          console.log("No items in localStorage wishlist to move.");
        }
      } else {
        console.error("LocalStorage is not available.");
      }
    },
    // Add a product to the wishlist
    // Add a product to the wishlist
    async addToWishlist(productModelId) {
      try {
        const { $axios } = useNuxtApp();
        const product = { productModelId };

        // Send a POST request to the API
        const res = await $axios.post("/product/wishlist/add", product);

        if (res) {
          this.getWishList();
          // Update wishlist count and persist to localStorage
          this.wishListCount = this.wishListItems.length;
          localStorage.setItem("wishlist", JSON.stringify(this.wishListItems));
          return res; // Return the response for further actions
        }
      } catch (error) {
        if (error.response?.status === 401) {
          console.warn(
            "User is not logged in. Adding product to localStorage wishlist."
          );
          // Add product to localStorage wishlist
          const localWishlist =
            JSON.parse(localStorage.getItem("wishlist")) || [];

          // Prevent duplicate entries
          if (!localWishlist.some(item => item.id === productModelId)) {
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
    // Remove a product from the wishlist
    async removeFromWishlist(productId) {
      console.log("productId", productId);
      const userStore = useUserStore();

      try {
        const { $axios } = useNuxtApp();

        // Get wishlist from localStorage
        let localWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        // Check and remove from localWishlist
        const localIndex = localWishlist.findIndex(
          item => item.id === productId
        );
        if (localIndex !== -1) {
          localWishlist.splice(localIndex, 1);
          localStorage.setItem("wishlist", JSON.stringify(localWishlist));
        }
        if (userStore.isLoggedIn) {
          await $axios.delete(`/product/wishlist/remove/${productId}`);
        }
        await this.getWishList();
        const index = this.wishListItems.findIndex(
          item => item.id === productId
        );
        if (index !== -1) {
          this.wishListItems.splice(index, 1);
        }
        this.wishListCount = this.wishListItems.length;
      } catch (error) {
        console.error("Error removing from wishlist:", error);
      }
    },
    // Place an order
    async placeOrder() {
      try {
        const { $axios } = useNuxtApp();
        const orderData = {
          products: this.cartItems.map(item => ({
            productModelId: item.productModel.id,
            quantity: item.quantity,
          })),
        };
        const response = await $axios.post("/product/orders", orderData);
        // if (response.data.success) {
        console.log("Order placed successfully:", response.data);
        //   // Clear cart items after successful order placement
        //   this.cartItems = [];
        //   this.cartCount = 0;
        //   this.cartTotal = 0;
        // } else {
        //   console.error("Failed to place order:", response.data);
        // }

        return response;
      } catch (error) {
        console.error("Error placing order:", error);
      }
    },
    async checkOut(order) {
      try {
        const { $axios } = useNuxtApp();
        let orderData = {
          orderId: order.orderId,
          amount: order.amount,
          phoneNumber: order.phoneNumber,
        };

        const response = await $axios.post("/product/checkout", orderData);
        // if (response.data.success) {
        console.log("Order placed successfully:", response);
        //   // Clear cart items after successful order placement
        //   this.cartItems = [];
        //   this.cartCount = 0;
        //   this.cartTotal = 0;
        // } else {
        //   console.error("Failed to place order:", response.data);
        // }

        return response;
      } catch (error) {
        console.error("Error placing order:", error);
      }
    },
  },

  getters: {
    // Getter for cart item count
    getCartCount: state => state.cartCount,

    // Getter for wishlist item count
    getWishListCount: state => state.wishListCount,

    // Getter for cart total value
    getCartTotal: state => state.cartTotal,
    getCategoriesList: state => state.categories,
    getProductList: state => state.products,
    getModelsList: state => state.models,
    getOrdersList: state => state.orders,
  },

  persist: {
    storage: typeof window !== "undefined" ? localStorage : undefined,
  },
});
