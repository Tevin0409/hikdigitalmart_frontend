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
    quoatations: [],
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
        this.products = response.data.results; // Update the cart items
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    },
    async getModels() {
      try {
        const { $axios } = useNuxtApp();
        const response = await $axios.get("/product/product-models");
        this.models = response.data.results; // Update the cart items
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    },
    async getOrderDetails(order) {
      try {
        const { $axios } = useNuxtApp();
        const response = await $axios.get(`/product/orders/${order.id}`);
        // this.orders = response.data; // Update the orders
        return response; 
      } catch (error) {
        console.error("Error fetching orders:", error);
        // return [];  // Return an empty array in case of error
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
      const userStore = useUserStore();

      let user = userStore.user;
      try {
        const { $axios } = useNuxtApp();
        if (userStore.isLoggedIn) {
          const response = await $axios.post("/product/cart/add", {
            productModelId: product.id,
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

             const productMod = {
          id: product.id,
          name: product.name,
          created_at: new Date().toISOString(),
          userId: "user.id",
          productModelId: product.id,
          productModel: {
            ...product,
          },
        };
        // Product is not in the wishlist, add it
        // localWishlist.push(productMod);

            localCart.push({ ...productMod, quantity }); // Add new item
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
        this.orders = response.data; // Update the orders
        return response.data; // Return the data
      } catch (error) {
        console.error("Error fetching orders:", error);
        // return [];  // Return an empty array in case of error
      }
    },
    async getQuotation() {
      try {
        const { $axios } = useNuxtApp();
        const response = await $axios.get("/product/quotation");
        this.quoatations = response.data; // Update the orders
        console.log( this.quoatations, "  this.quoatations");
        return response.data; // Return the data
      } catch (error) {
        console.error("Error fetching orders:", error);
        // return [];  // Return an empty array in case of error
      }
    },

    async updateQuantity(id, quantity) {
      try {
        const { $axios } = useNuxtApp();

        // Check if the user is logged in
        const userStore = useUserStore();
        if (userStore.isLoggedIn) {
          // Update the quantity on the server-side cart
          await $axios.put(`/product/cart/update`, { id, quantity });
          this.getCartItems(); // Fetch updated cart items from the server
        } else {
          // Update the quantity in the localStorage cart
          const storedCart = localStorage.getItem("cart");
          const localCart = storedCart ? JSON.parse(storedCart) : [];

          // Map through the cart to update the quantity of the specific item
          const updatedCart = localCart.map(item => {
            if (item.id === id) {
              return { ...item, quantity };
            }
            return item;
          });

          // Update the local storage
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

        // Check if the user is logged in
        const userStore = useUserStore();
        if (userStore.isLoggedIn) {
          // Remove from the server-side cart
          await $axios.delete(`/product/cart/remove/${cartId}`);
          this.getCartItems(); // Fetch updated cart items from the server
        } else {
          // Remove from the localStorage cart
          const storedCart = localStorage.getItem("cart");
          const localCart = storedCart ? JSON.parse(storedCart) : [];

          // Filter out the item with the matching cartId
          const updatedCart = localCart.filter(item => item.id !== cartId);

          // Update the local storage
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

        this.cartItems = []; // Clear the cart items locally
        await this.getCartItems(); // Fetch updated cart items
      } catch (error) {
        console.error("Error clearing the cart:", error);
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
      if (!userStore.isLoggedIn) {
        return;
      }
      if (typeof window !== "undefined") {
        const storedWishlist = localStorage.getItem("wishlist");
        const wishIds = storedWishlist ? JSON.parse(storedWishlist) : [];

        if (Array.isArray(wishIds) && wishIds.length > 0) {
          try {
            for (let productModelId of wishIds) {
              await this.addToWishlist(productModelId.id);
            }
            this.getWishList();
            this.getCartItems();
            localStorage.removeItem("wishlist"); // Clear wishlist from localStorage
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
    async removeFromWishlist(productId) {
      const userStore = useUserStore();
      try {
        const { $axios } = useNuxtApp();

        if (userStore.isLoggedIn) {
          // If logged in, remove from the server-side wishlist
          await $axios.delete(`/product/wishlist/remove/${productId}`);
        } else {
          // If not logged in, remove from the localStorage wishlist
          let localWishlist =
            JSON.parse(localStorage.getItem("wishlist")) || [];
          const updatedWishlist = localWishlist.filter(
            item => item.id !== productId
          );
          localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
        }

        // Fetch updated wishlist and update local state
        await this.getWishList();

        // Update the wishlist items and count
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

    async placeOrder(user, vat) {
      try {
        const { $axios } = useNuxtApp();

        let products = this.cartItems.map(item => ({
          productModelId: item?.productModel?.id ?? item?.id ?? "",
          quantity: item?.quantity ?? 1,
        }));
        // };

        let order = {
          products: products,
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
        // this.router.push('/orders')
        return response;
      } catch (error) {
        console.error("Error placing order:", error);
        throw new Error(error.response?.data?.error?.message);
      }
    },

    async makeQuotation(message, quotationList) {

      try {
        const { $axios } = useNuxtApp();
        let products = quotationList.map(item => ({
          productModelId: item?.id,
          quantity: item.quantity,
        }));
        const response = await $axios.post("/product/quotation", {
          products: products,
          message: message,
        });

        console.log(response, " response");
        return response
      }
      catch (error) { 
        console.error("Error placing order:", error);
      }


    //   message: message.value,
    // items: quotationList.value.map((item) => ({
    //   id: item.id,
    //   quantity: item.quantity,
    // })),
    },

    async placeOrderAnonymous(user, vat) {
      try {
        const { $axios } = useNuxtApp();
        let products = this.cartItems.map(item => ({
          productModelId: item?.productModel?.id ?? item?.id ?? "",
          quantity: item?.quantity ?? 1,
        }));
        // };

        let order = {
          products: products,
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
        throw new Error(error.response?.data?.error?.message);
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
    getQuotationList: state => state.quoatations,
    

  },

  persist: {
    storage: typeof window !== "undefined" ? localStorage : undefined,
  },
});
