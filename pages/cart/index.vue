<template>
  <div class="cart">
    <div class="mx-auto container">
      <Breadcrumb :home="home" :model="items" class="">
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
          <a
            v-else
            :href="item.url"
            :target="item.target"
            v-bind="props.action"
          >
            <span class="text-surface-700 dark:text-surface-0">{{
              item.label
            }}</span>
          </a>
        </template>
      </Breadcrumb>
    </div>
    <div
      class="flex flex-col items-center bg-white rounded-lg p-6 mb-6 container mx-auto"
      v-if="cartItems.length < 1"
    >
      <img
        src="@/assets/images/empty-cart.png"
        alt="Empty Cart"
        class="w-20 h-20 mb-4"
      />
      <h2 class="text-xl font-semibold text-gray-700">Your cart is empty!</h2>
      <p class="text-gray-500 text-sm mb-4">
        Browse our categories and discover our best deals!
      </p>
      <NuxtLink to="/dashboard">
        <button
          class="bg-primary hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded"
        >
          Start Shopping
        </button>
      </NuxtLink>
    </div>
    <div v-else class="mx-auto container">
      <div class="bg-red-10 rounded-lg p-4">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-lg font-semibold text-gray-700">
            Cart ({{ cartItems.length }})
          </h3>
          <NuxtLink to="/cart">
            <a
              href="#"
              class="text-primary hover:text-orange-600 text-sm font-semibold flex items-center"
            >
            </a>
          </NuxtLink>
        </div>

        <div class="bg-white mx-auto">
          <div class="bg-white grid grid-cols-12 gap-4">
            <div class="col-span-12 md:col-span-9">
              <div
                class="rounded-lg p-4 gap-3 pb-4 mb-2 border cursor-pointer bg-white shadow-sm"
                v-for="item in cartItems"
                :key="item.id"
              >
                <div class="flex flex-wrap items-start gap-4">
                  <img
                    class="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                    :src="
                      item.productModel?.images.find(image => image.isPrimary)
                        ?.uploadUrl ??
                      item.images?.find(image => image.isPrimary)?.uploadUrl
                    "
                    alt="Product Image"
                  />
                  <div class="flex-grow min-w-0">
                    <h2 class="text-base sm:text-lg font-medium truncate">
                      {{ item.productModel?.name ?? item.name }}
                    </h2>
                    <p class="text-gray-600 text-sm sm:text-base truncate">
                      <span
                        class="font-bold"
                        v-for="feature in item.features ||
                        item.productModel?.features"
                      >
                        {{ feature.description }}
                      </span>
                    </p>
                  </div>

                  <!-- Price -->
                  <div class="text-right">
                    <p class="text-lg sm:text-xl font-semibold text-gray-900">
                      Ksh
                      {{
                        formattedPrice(item.productModel?.price ?? item.price)
                      }}
                    </p>
                  </div>
                </div>

                <!-- Actions -->
                <div class="flex flex-wrap items-center justify-between mt-4">
                  <button
                    @click="removeItem(item)"
                    class="text-red-500 flex items-center text-sm sm:text-base"
                  >
                    <span class="mr-2">🗑️</span> Remove
                  </button>

                  <div class="flex items-center">
                    <button
                      @click="updateQuantity(item.id, item.quantity - 1)"
                      class="bg-gray-300 px-2 sm:px-3 py-1 rounded-lg disabled:opacity-50"
                      :disabled="item.quantity <= 1"
                    >
                      -
                    </button>
                    <span class="px-3 sm:px-4 text-sm sm:text-base">{{
                      item.quantity
                    }}</span>
                    <button
                      @click="updateQuantity(item.id, item.quantity + 1)"
                      class="bg-primary text-white px-2 sm:px-3 py-1 rounded-lg"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-span-12 md:col-span-3">
              <div class="cart-total rounded-lg p4 bg-white shadow">
                <h3 class="text-lg font-semibold mb-2">Cart Total</h3>

                <p class="text-gray-600">
                  Subtotal: Ksh {{ formattedPrice(cartTotal) }}
                </p>

                <!-- VAT Toggle -->
                <div class="flex items-center justify-between my-4">
                  <label class="text-gray-600">Apply VAT (16%)</label>

                  <label
                    class="relative inline-flex items-center cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      v-model="applyVat"
                      class="sr-only peer"
                    />
                    <div
                      class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-primary transition-colors"
                    ></div>
                    <div
                      class="absolute left-1 top-1 bg-white border border-gray-300 w-4 h-4 rounded-full transition-transform peer-checked:translate-x-5"
                    ></div>
                  </label>
                </div>

                <hr class="my-2" />

                <p class="text-gray-600" v-if="applyVat">
                  VAT (16%): Ksh {{ formattedPrice(getVat(cartTotal)) }}
                </p>

                <hr class="my-2" />

                <p class="text-lg font-bold">
                  Total: Ksh
                  {{
                    formattedPrice(
                      cartTotal + (applyVat ? getVat(cartTotal) : 0)
                    )
                  }}
                </p>

                <button
                  class="w-full bg-primary text-white py-2 mt-4 rounded-lg hover:bg-secondary transition"
                  @click="proceedToCheckout"
                >
                  Checkout ({{
                    formattedPrice(
                      cartTotal + (applyVat ? getVat(cartTotal) : 0)
                    )
                  }})
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="cart-actions">
      <div class="coupon">
        <input v-model="coupon" type="text" placeholder="Coupon Code" />
        <button @click="applyCoupon">Apply Coupon</button>
      </div>
    </div> -->
  </div>
</template>
<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useProductStore } from "@/stores/productStore";

const { $formatPrice } = useNuxtApp();

// Router and Store
const router = useRouter();
const productStore = useProductStore();
const { $axios } = useNuxtApp();

const coupon = ref("");

// Computed properties
const cartTotal = computed(() => productStore.cartTotal);
const cartItems = computed(() => productStore.cartItems);
const applyVat = ref(false);
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
// Fetch cart items from API
const getCartItems = async () => {
  try {
    const response = await $axios.get(`/product/cart`);
    cartItems.value = response.data.map(item => ({
      id: item.id,
      quantity: item.quantity,
      product: {
        ...item.product,
        price: 100, // Replace with actual API price if available
        image: "https://via.placeholder.com/80x80", // Replace with actual product image
      },
    }));
  } catch (error) {
    console.error("Error fetching cart items:", error);
  }
};

// Update quantity of a specific item
const updateQuantity = async (id, quantity) => {
  await productStore.updateQuantity(id, quantity);
  return;
  const item = cartItems.value.find(item => item.id === id);
  if (item && quantity > 0) {
    item.quantity = quantity;
  }
};

// Remove an item from the cart
const removeItem = async item => {
  await productStore.removeFromCart(item.id);
};

const getVat = cartTotal => {
  return cartTotal * 0.16;
};

// Apply a discount coupon
const applyCoupon = () => {
  if (coupon.value.trim() === "DISCOUNT10") {
    cartItems.value = cartItems.value.map(item => ({
      ...item,
      product: {
        ...item.product,
        price: item.product.price * 0.9, // Apply 10% discount
      },
    }));
    alert("Coupon applied: 10% discount!");
  } else {
    alert("Invalid coupon code.");
  }
};

// Navigation actions
const returnToShop = () => {
  router.push("/");
};

const proceedToCheckout = () => {
  router.push("/checkout");
};

// Fetch cart items when the component is mounted
onMounted(() => {
  //   getCartItems();
});
</script>

<style>
.cart {
  margin: 20px;
}

.responsive-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.responsive-table th,
.responsive-table td {
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
}

.responsive-table img {
  width: 80px;
  height: 80px;
  margin-right: 10px;
}

.cart-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.return-shop-btn {
  padding: 10px 20px;
  background-color: #ddd;
  border: none;
  cursor: pointer;
}

.coupon {
  display: flex;
  gap: 10px;
  align-items: center;
}

.coupon input {
  padding: 8px;
  border: 1px solid #ddd;
  flex: 1;
}

.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-top: 20px;
}

.return-shop-btn {
  padding: 10px 20px;
  background-color: #ddd;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
}

.cart-total {
  width: 300px;
  background: #fff;
  border: 1px solid #ddd;
  /* padding: 20px; */
  text-align: left;
}

.cart-total h3 {
  margin-bottom: 15px;
}

.cart-total p {
  margin: 8px 0;
}

.cart-total hr {
  margin: 15px 0;
  border: 0.5px solid #ddd;
}

.checkout-btn {
  width: 100%;
  padding: 10px;
  background-color: #f44336;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
}

.coupon button {
  padding: 8px 12px;
  background-color: #f44336;
  color: white;
  border: none;
  cursor: pointer;
}

.cart-total {
  align-self: flex-end;
  text-align: left;
  width: 300px;
  background: #fff;
  border: 1px solid #ddd;
  padding: 20px;
  /* margin-top: 20px; */
  position: relative;
}

.cart-total h3 {
  margin-bottom: 20px;
}

.cart-total p {
  margin: 8px 0;
}

.cart-total hr {
  margin: 20px 0;
  border: 0.5px solid #ddd;
}

.checkout-btn {
  width: 100%;
  padding: 10px;
  background-color: #f44336;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
}

@media screen and (max-width: 768px) {
  .responsive-table {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }

  .cart-actions {
    flex-direction: column;
    align-items: flex-start;
  }

  .cart-total {
    text-align: left;
    width: 100%;
  }

  .flex-container {
    display: block;
    justify-content: space-between;
    align-items: start;
    margin-top: 20px;
  }
}
</style>
