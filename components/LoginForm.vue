<template>
  <div class="flex w-full h-screen flex-col items-center justify-center">
    <img src="@/assets/images/logoo.png" alt="Login" class="h-28 w-28" />

    <div v-if="!isVerified && !forgotPassword">
      <p class="text-gray-500 text-2xl mb-10 text-center">
        Welcome to Secure Group
      </p>
      <form @submit.prevent="login" class="w-full flex flex-col items-center">
        <div class="flex flex-col gap-4 w-full">
          <FloatLabel variant="on">
            <InputText type="email" id="email" v-model="form.email" class="w-full" />
            <label for="email">Email</label>
          </FloatLabel>

          <FloatLabel variant="on">
            <Password v-model="form.password" toggleMask />
            <!-- <Password v-model="form.password" id="password" toggleMask class="w-full" /> -->
            <label for="password">Password</label>
          </FloatLabel>
        </div>

        <!-- Forgot Password -->
        <div class="mt-4 flex justify-end w-full">
          <p class="text-blue-500 text-sm cursor-pointer" @click="forgotPassword = true">
            Forgot password?
          </p>
        </div>

        <button type="submit" class="w-full bg-red-500 text-white py-3 rounded hover:bg-red-600 mt-4">
          Log In
        </button>
      </form>

      <p class="text-sm mt-4 text-center">
        Don't have an account?
        <span class="text-blue-500 cursor-pointer" @click="$emit('toggle')">
          Sign up
        </span>
      </p>
    </div>

    <!-- Forgot Password Section -->
    <div v-else-if="forgotPassword">
      <h3 class=" text-gray-500  flex justify-center text-2xl font-medium mb-4">Reset Password</h3>
      <p class="text-gray-500 mb-6 text-center">
        Enter your email address to receive a password reset link.
      </p>

      <FloatLabel variant="on">
        <InputText type="email" id="resetEmail" v-model="resetEmail" class="w-full" />
        <label for="resetEmail">Email</label>
      </FloatLabel>

      <button @click="sendResetEmail" class="w-full bg-red-500 text-white py-3 rounded hover:bg-red-600 mt-4">
        Send Reset Link
      </button>

      <p class="text-sm mt-4 text-center cursor-pointer text-blue-500" @click="forgotPassword = false">
        Back to login
      </p>
    </div>

    <!-- OTP Verification -->
    <div v-else>
      <h3 class="text-3xl font-medium mb-4">Verify OTP</h3>
      <p class="text-gray-500 mb-6">
        Enter the OTP sent to your email address:
        <span class="font-bold">{{ form.email }}</span>
      </p>
      <div class="w-full mb-4 flex justify-center items-center">
        <InputOtp :length="6" mask="*" v-model="otp" size="large" class="text-center p-3" placeholder="Enter OTP" />
      </div>

      <button @click="verifyOtp" class="w-full text-white py-3 rounded hover:bg-red-600">
        Verify OTP
      </button>
    </div>
  </div>
  <Toast position="bottom-right" group="br" />
</template>

<script>
import { useUserStore } from "@/stores/auth";
import { useProductStore } from "@/stores/productStore";
import Toast from 'primevue/toast';

export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      resetEmail: "",
      isVerified: false,
      forgotPassword: false,
      userStore: useUserStore(),
      productStore: useProductStore(),
    };
  },
  methods: {
    async sendResetEmail() {
      try {
        const { $axios } = useNuxtApp();
        await $axios.post("/auth/reset-password", { email: this.resetEmail });
        this.$toast.add({
          severity: "success",
          summary: "Reset link sent!",
          detail: "Check your email for the password reset link.",
          group: "br",
          life: 3000,
        });
        this.forgotPassword = false; // Redirect user back to login
      } catch (error) {
        this.$toast.add({
          severity: "error",
          summary: "Error",
          detail: error.response?.data?.message || "Failed to send reset link.",
          group: "br",
          life: 3000,
        });
      }
    },
    async login() {
      try {
        const { accessToken } = await this.userStore.login(
          this.form.email,
          this.form.password
        );

        if (accessToken) {
          this.$router.push("/dashboard");
        }
        // this.productStore.moveWishlistToCart()
      } catch (error) {
        if (error.message.includes("not yet verified")) {
          this.isVerified = true;
        } else {
          this.isVerified = false;
        }
        this.$toast.add({
          severity: "error",
          summary: error.message,
          group: "br",
          life: 3000,
        });
      }
    },
    async verifyOtp() {
      try {
        const { accessToken } = await this.userStore.verifyOtp({
          email: this.form.email,
          otp: this.otp,
        });
        if (accessToken) {
          this.$router.push("/dashboard");
        }
      } catch (error) {
        this.$toast.add({
          severity: "error",
          summary: error.message,
          group: "br",
          life: 3000,
        });
      }
    },
  },
};
</script>

<style scoped>
.image_cont {}
</style>
