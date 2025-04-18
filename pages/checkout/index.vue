<template>
  <div class="container mx-auto pt-12">
    <Breadcrumb :home="home" :model="items">
      <template #item="{ item, props }">
        <router-link
          v-if="item.route"
          v-slot="{ href, navigate }"
          :to="item.route"
          custom
        >
          <a :href="href" v-bind="props.action" @click="navigate">
            <span :class="[item.icon, 'text-color']" />
            <span class="text-primary font-semibold">{{ item.label }}</span>
          </a>
        </router-link>
        <a v-else :href="item.url" :target="item.target" v-bind="props.action">
          <span class="text-surface-700 dark:text-surface-0">{{
            item.label
          }}</span>
        </a>
      </template>
    </Breadcrumb>

    <div class="checkout-container flex flex-col md:flex-row gap-8 p-4 md:p-8">
      <!-- Billing Details -->
      <div class="billing-details flex-1 bg-white p-6 rounded-lg shadow mb-4">
        <h2 class="text-xl font-semibold mb-4">Billing Details</h2>
        <form class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="form-group">
            <label for="first-name" class="block text-sm font-medium mb-1"
              >First Name*</label
            >
            <input
              type="text"
              id="first-name"
              v-model="user.firstName"
              placeholder="First Name"
              required
              class="w-full p-2 border rounded"
            />
          </div>
          <div class="form-group">
            <label for="last-name" class="block text-sm font-medium mb-1"
              >Last Name*</label
            >
            <input
              type="text"
              id="last-name"
              v-model="user.lastName"
              placeholder="Last Name"
              required
              class="w-full p-2 border rounded"
            />
          </div>
          <div class="form-group">
            <label for="company-name" class="block text-sm font-medium mb-1"
              >Company Name</label
            >
            <input
              type="text"
              id="company-name"
              v-model="user.company_name"
              placeholder="Company Name"
              class="w-full p-2 border rounded"
            />
          </div>
          <div class="form-group">
            <label for="street-address" class="block text-sm font-medium mb-1"
              >Street Address*</label
            >
            <input
              type="text"
              v-model="user.street_address"
              id="street-address"
              placeholder="Street Address"
              required
              class="w-full p-2 border rounded"
            />
          </div>
          <div class="form-group">
            <label for="apartment" class="block text-sm font-medium mb-1"
              >Apartment, floor, etc. (optional)</label
            >
            <input
              type="text"
              v-model="user.apartment"
              id="apartment"
              placeholder="Apartment, floor, etc."
              class="w-full p-2 border rounded"
            />
          </div>
          <div class="form-group">
            <label for="city" class="block text-sm font-medium mb-1"
              >Town/City*</label
            >
            <input
              type="text"
              id="city"
              v-model="user.town"
              placeholder="Town/City"
              required
              class="w-full p-2 border rounded"
            />
          </div>
          <div class="form-group">
            <label for="phone" class="block text-sm font-medium mb-1"
              >Phone Number*</label
            >
            <input
              type="tel"
              id="phone"
              v-model="user.phoneNumber"
              placeholder="Phone Number"
              required
              class="w-full p-2 border rounded"
            />
          </div>
          <div class="form-group">
            <label for="email" class="block text-sm font-medium mb-1"
              >Email Address*</label
            >
            <input
              type="email"
              id="email"
              v-model="user.email"
              placeholder="Email Address"
              required
              class="w-full p-2 border rounded"
            />
          </div>
        </form>
      </div>

      <!-- Cart Summary -->
      <div
        class="cart-summary bg-white p-6 flex-1 rounded-lg w-full md:max-w-sm shadow"
      >
        <h3 class="text-lg font-semibold mb-4">Cart Summary</h3>
        <!-- Cart Items -->
        <div class="cart-items space-y-4">
          <div
            v-for="item in cartItems"
            :key="item.id"
            class="cart-item flex flex-col sm:flex-row items-center gap-4 border-b pb-3"
          >
            <img
              :src="
                item.productModel?.images?.find(image => image.isPrimary)
                  ?.uploadUrl ??
                item?.images?.find(image => image.isPrimary)?.uploadUrl
              "
              :alt="item.productModel?.name || 'Product Image'"
              class="w-full h-40 object-cover"
            />
            <div class="flex-1 text-center sm:text-left">
              <p class="text-sm">
                {{ item?.productModel?.name ?? item.name }}
              </p>
              <div class="flex justify-between">
                <p class="text-gray-600 text-xs">
                  Ksh
                  {{ formattedPrice(item.productModel?.price ?? item.price) }}
                </p>
                <p class="text-sm">
                  {{ item?.productModel?.quantity ?? item.quantity }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Section -->
        <div class="cart-summary-bottom mt-4">
          <p class="flex justify-between text-sm">
            Subtotal
            <strong class="text-lg">{{ formattedPrice(cartTotal) }}</strong>
          </p>
          <div class="flex items-center justify-between my-4">
            <label class="text-gray-600">Apply VAT (16%)</label>

            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" v-model="isVat" class="sr-only peer" />
              <div
                class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-primary transition-colors"
              ></div>
              <div
                class="absolute left-1 top-1 bg-white border border-gray-300 w-4 h-4 rounded-full transition-transform peer-checked:translate-x-5"
              ></div>
            </label>
          </div>

          <hr class="my-2" v-if="isVat" />
          <div class="flex justify-between text-gray-600" v-if="isVat">
            <span>VAT</span>
            <span>Ksh {{ formattedPrice(getVat(cartTotal)) }}</span>
          </div>

          <hr class="my-2" />
          <p class="flex justify-between text-lg font-semibold">
            Total
            <strong class="text-lg"
              >Ksh
              {{
                formattedPrice(cartTotal + (isVat ? getVat(cartTotal) : 0))
              }}</strong
            >
          </p>

          <!-- Payment Methods -->
          <div
            class="payment-methods flex flex-col sm:flex-row items-center gap-2 mt-4"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/M-PESA_LOGO-01.svg/512px-M-PESA_LOGO-01.svg.png?20191120100524"
              class="w-16 sm:w-1/4"
              alt="M-Pesa"
            />
            <label class="text-sm font-medium">{{ user?.phoneNumber }}</label>
          </div>

          <!-- Place Order Button -->
          <Button
            type="button"
            class="place-order-btn w-full bg-green-600 text-white py-2 mt-4 rounded-lg hover:bg-green-700"
            label="Place Order"
            :loading="loading"
            @click="placeOrder()"
          />
        </div>
      </div>
    </div>
    <Toast position="top-right" group="br" />
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import { useProductStore } from "@/stores/productStore";
import { useUserStore } from "@/stores/auth";
import defaultImage from "@/assets/images/logoo.png";

export default {
  setup() {
    const loading = ref(false);
    const { $formatPrice } = useNuxtApp();
    const userStore = useUserStore(); // Use the user store
    const productStore = useProductStore(); // Use the product store
    const cartTotal = computed(() => productStore.cartTotal);
    const cartItems = computed(() => productStore.cartItems);
    const isVat = ref(false);
    // Pre-fill user details from the store
    const user = computed(() => userStore.user || {});
    const home = ref({
      icon: "pi pi-home",
      route: "/dashboard",
    });
    const items = ref([
      { label: "Cart", route: "/cart" },
      { label: "Checkout", route: "/checkout" },
    ]);
    const formattedPrice = price => {
      return $formatPrice(price);
    };
    const requiredFields = ["firstName", "lastName", "email", "phoneNumber"];

    const getCartItems = async () => {
      try {
        const { $axios } = useNuxtApp();
        const response = await $axios.get(`/product/cart`);
        // Map API response to cartItems
        cartItems.value = response.data.map(item => ({
          id: item.id,
          quantity: item.quantity,
          product: {
            ...item.product,
            price: 100, // Map or replace with actual API price if available
            image: "https://via.placeholder.com/80x80", // map this
          },
        }));
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };
    const getVat = cartTotal => {
      return cartTotal * 0.16;
    };

    const coupon = ref("");

    const applyCoupon = () => {
      if (coupon.value === "DISCOUNT10") {
        cartItems.value.forEach(item => {
          item.product.price = item.product.price * 0.9;
        });
        alert("Coupon applied: 10% discount!");
      } else {
        alert("Invalid coupon code.");
      }
    };
    const toast = useToast();
    const placeOrder = async () => {
      const userLoggedIn = userStore.isLoggedIn;

      console.log("isVat.value,", isVat.value);

      if (userLoggedIn) {
        user.value = {
          ...user.value, // Spread existing user properties
          isVat: isVat.value, // Add or update isVat
        };
        try {
          loading.value = true;
          const response = await productStore.placeOrder(
            user.value,
            isVat.value
          );

          let order = {
            orderId: response.data.id,
            amount: formattedPrice(
              cartTotal + (isVat.value ? getVat(cartTotal) : 0)
            ), // Include VAT if applicable
            phoneNumber: user.value.phoneNumber,
          };

          const mpesaResponse = await productStore.checkOut(order);

          // console.log(mpesaResponse, "Mpesa");

          loading.value = false;

          toast.add({
            severity: "success",
            summary: "Your Order has been placed successfully, Thank you",
            group: "br",
            life: 3000,
          });
        } catch (error) {
          console.log("Error placing order:", error);
          loading.value = false;
          toast.add({
            severity: "error",
            summary: "Error placing order",
            detail: error.message,
            group: "br",
            life: 3000,
          });
        }
      } else {
        // console.log(user.value, "user");
        if (!user.value || Object.keys(user.value).length === 0) {
          toast.add({
            severity: "warn",
            summary: `Please Enter your details to place an order.`,
            group: "br",
            life: 3000,
          });
          return;
        }
        // Validate required fields
        for (const field of requiredFields) {
          if (!user.value[field]) {
            toast.add({
              severity: "warn",
              summary: `${field} is required to place an order.`,
              group: "br",
              life: 3000,
            });
            return;
          }
        }

        try {
          user.value = {
            ...user.value,
            isVat: isVat.value, // Add or update isVat
          };

          // console.log("Order placed successfully.");

          loading.value = true;
          // console.log("cart", cartItems.value);
          // const {products} = cartItems.value
          const response = await productStore.placeOrderAnonymous(
            user.value,
            isVat.value
          );
          // console.log(response.data.id);
          // response.data.orderPrice

          let order = {
            orderId: response.data.id,
            amount: formattedPrice(
              cartTotal + (isVat.value ? getVat(cartTotal) : 0)
            ), // Include VAT if applicable
            phoneNumber: user.value.phoneNumber,
          };
          const mpesaResponse = await productStore.checkOut(order);

          // console.log(mpesaResponse, "Mpesa");

          loading.value = false;

          toast.add({
            severity: "success",
            summary: "Your Order has been placed successfully, Thank you",
            group: "br",
            life: 3000,
          });
        } catch (error) {
          console.log("Error placing order:", error);
          loading.value = false;
          toast.add({
            severity: "error",
            summary: "Error placing order",
            detail: error.message,
            group: "br",
            life: 3000,
          });
        }
      }

      // Proceed with order placement
    };

    onMounted(() => {
      // getCartItems();
    });

    return {
      user,
      cartItems,
      cartTotal,
      coupon,
      applyCoupon,
      placeOrder,
      formattedPrice,
      loading,
      defaultImage,
      home,
      items,
      getVat,
      isVat,
    };
  },
};
</script>

<style scoped>
.checkout-page {
  /* max-width: 1200px;
    margin: 0 auto;
    padding: 20px; */
}

.breadcrumbs {
  margin-bottom: 20px;
  color: #999;
  font-size: 14px;
}

.checkout-container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
}

.billing-details {
  flex: 1;
}

.billing-details h2 {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.cart-summary h3 {
  margin-bottom: 20px;
}

.cart-items {
  margin-bottom: 15px;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.cart-item img {
  width: 50px;
  height: 50px;
}

.payment-methods label {
  display: block;
  margin: 10px 0;
}

.coupon-section {
  display: flex;
  gap: 10px;
  margin-top: 15px;
}

.coupon-section input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.coupon-section button {
  padding: 10px 15px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
}

.place-order-btn {
  width: 100%;
  padding: 10px 0;
  background-color: #f44336;
  color: white;
  border: none;
  font-size: 16px;
  font-weight: bold;
  margin-top: 15px;
  border-radius: 4px;
  cursor: pointer;
}

.cart-summary {
  /* display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  background: #f9f9f9;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px; */
}

.cart-items {
  flex-grow: 1;
  overflow-y: auto;
  /* Enable scrolling if items exceed available space */
  margin-bottom: 20px;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.cart-item img {
  width: 50px;
  height: 50px;
}

.cart-summary-bottom {
  border-top: 1px solid #ddd;
  padding-top: 15px;
}

.payment-methods label {
  display: block;
  margin: 10px 0;
}

.place-order-btn {
  width: 100%;
  padding: 10px 0;
  background-color: #f44336;
  color: white;
  border: none;
  font-size: 16px;
  font-weight: bold;
  margin-top: 15px;
  border-radius: 4px;
  cursor: pointer;
}

/* Media Query for larger screens */
@media (min-width: 768px) {
  .checkout-container {
    display: flex;
    /* Horizontal layout for larger devices */
    justify-content: space-between;
    /* flex-direction: row; */
  }

  .billing-details {
    flex: 1;
  }

  .cart-summary {
    width: 400px;
  }
}

/* Additional tweaks for very small screens */
@media (max-width: 480px) {
  .checkout-container {
    display: block;
    justify-content: space-between;
    flex-direction: row;
  }

  .form-group label {
    font-size: 12px;
    /* Adjust label font size for better fit */
  }

  .form-group input {
    font-size: 14px;
    /* Slightly reduce input font size */
    padding: 8px;
    /* Reduce padding for better spacing */
  }

  .cart-item {
    flex-direction: column;
    /* Stack cart items vertically */
    align-items: flex-start;
  }

  .cart-item img {
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
    /* Add space between image and text */
  }

  .place-order-btn {
    padding: 12px;
    font-size: 14px;
  }
}
</style>
