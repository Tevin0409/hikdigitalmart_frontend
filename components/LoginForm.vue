<template>
  <div
    class="flex w-full align-center justify-center"
    style="
      background-image: url('https://www.sdl.co.ke/assets/images/icons/vector-1.png');
    "
  >
    <div class="flex w-full h-screen flex-col items-center justify-center">
      <div class="flex justify-center items-center absolute top-16 left-8">
        <a
          href="/dashboard"
          class="text-primary text-md cursor-pointer hover:text-secondary"
        >
          <i
            class="pi pi-arrow-left text-primary pr-2 hover:text-secondary"
            style=""
          ></i>
          Back to Shop</a
        >
      </div>
      <div
        class="border shadow-xl p-36 rounded-xl bg-white flex flex-col items-center"
      >
        <img src="@/assets/images/logoo.png" alt="Login" class="h-28 w-28" />

        <div v-if="!isVerified && !forgotPassword">
          <p class="text-gray-500 text-2xl mb-10 text-center">
            Welcome to Secure Group
          </p>
          <form
            @submit.prevent="login"
            class="w-full flex flex-col items-center"
          >
            <div class="flex flex-col gap-4 w-full">
              <FloatLabel variant="on">
                <InputText
                  type="email"
                  id="email"
                  v-model="form.email"
                  class="w-full"
                />
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
              <p
                class="text-blue-500 text-sm cursor-pointer"
                @click="forgotPassword = true"
              >
                Forgot password?
              </p>
            </div>

            <!-- <button
              type="submit"
              class="w-full bg-red-500 text-white py-3 rounded hover:bg-red-600 mt-4"
            >
              Log In
            </button> -->
            <Button
              class="w-full bg-red-500 text-white py-3 rounded hover:bg-red-600 mt-4"
              type="submit"
              label="Log In"
              :loading="loading"
              @click="load"
            />
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
          <h3
            class="text-gray-500 flex justify-center text-2xl font-medium mb-4"
          >
            Reset Password
          </h3>
          <p class="text-gray-500 mb-6 text-center">
            Enter your email address to receive a password reset link.
          </p>

          <FloatLabel variant="on">
            <InputText
              type="email"
              id="resetEmail"
              v-model="resetEmail"
              class="w-full"
            />
            <label for="resetEmail">Email</label>
          </FloatLabel>

          <button
            @click="sendResetEmail"
            class="w-full bg-red-500 text-white py-3 rounded hover:bg-red-600 mt-4"
          >
            Send Reset Link
          </button>

          <p
            class="text-sm mt-4 text-center cursor-pointer text-blue-500"
            @click="forgotPassword = false"
          >
            Back to login
          </p>
        </div>

        <!-- OTP Verification -->
        <div v-else>
          <div v-if="!resetPassword">
            <h3 class="text-3xl font-medium mb-4">Verify OTP</h3>
            <p class="text-gray-500 mb-6">
              Enter the OTP sent to your email address:
              <span class="font-bold">{{ form.email }}</span>
            </p>
            <div class="w-full mb-4 flex justify-center items-center">
              <InputOtp
                :length="6"
                mask="*"
                v-model="otp"
                size="large"
                class="text-center p-3"
                placeholder="Enter OTP"
              />
            </div>

            <button
              @click="verifyOtp"
              class="w-full text-white py-3 rounded bg-red-600"
            >
              Verify OTP
            </button>
          </div>
          <div v-else>
            <h3 class="text-3xl font-medium mb-4 text-center">
              Reset Password
            </h3>
            <p class="text-gray-500 mb-6">
              Enter a new password for your account.
            </p>

            <FloatLabel variant="on">
              <Password
                v-model="form.newPassword"
                id="resetPassword"
                toggleMask
                class="w-full"
              />
              <label for="resetPassword">New Password</label>
            </FloatLabel>

            <FloatLabel variant="on" class="mt-3">
              <Password
                v-model="form.confirmNewPassword"
                id="confirmNewPassword"
                toggleMask
                class="w-full"
              />
              <label for="confirmNewPassword">Confirm Password</label>
            </FloatLabel>

            <!-- Show error message dynamically if passwords don't match -->
            <p v-if="passwordMismatch" class="text-red-500 text-sm mt-2">
              Passwords do not match.
            </p>

            <button
              @click="handleResetPassword"
              class="w-full text-white py-3 mt-4 rounded bg-red-600"
              :disabled="passwordMismatch"
            >
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="hidden md:block h-full w-full p-4 relative">
      <Carousel
        :verticalViewPortHeight="2000"
        :value="images"
        :numVisible="1"
        :numScroll="1"
        :showIndicators="false"
        :showNavigators="false"
        circular
        autoplayInterval="4000"
        class="rounded-lg w-full hidden sm:block"
      >
        <template #item="slotProps">
          <div
            class="relative w-full h-screen flex justify-center items-center"
          >
            <img
              :src="slotProps.data.src"
              :alt="slotProps.data.alt"
              class="rounded-xl object-cover w-100 h-100"
            />
            <div
              class="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white py-2 px-4 rounded"
            >
              {{ slotProps.data.alt }}
            </div>
          </div>
        </template>
      </Carousel>
    </div>
  </div>

  <Toast position="bottom-right" group="br" />
</template>

<script>
import { useUserStore } from "@/stores/auth";
import { useProductStore } from "@/stores/productStore";
import Toast from "primevue/toast";
import Carousel from "~/components/cards/Carousel.vue";

export default {
  components: { Carousel },
  data() {
    return {
      images: [
        {
          src: "https://www.sdl.co.ke/assets/images/resource/about-5.png",
          alt: "EZVIZ H8c 4G LTE 2K Resolution Pan&Tilt Camera 4mm",
        },
        {
          src: "https://www.sdl.co.ke/assets/images/resource/about-6.png",
          alt: "EZVIZ H6c Pro 2K+ Pan & Tilt Smart Home Camera",
        },
        {
          src: "https://www.sdl.co.ke/assets/images/resource/about-7.png",
          alt: "Hikvision DS-2CD1127G2H-LIU(2.8mm)(O-STD) 2MP Smart Hybrid Light ColorVu Camera",
        },
      ],
      form: {
        email: "",
        password: "",
        // otp: "",
        newPassword: "",
        confirmNewPassword: "",
      },
      resetEmail: "",
      isVerified: false,
      forgotPassword: false,
      userStore: useUserStore(),
      productStore: useProductStore(),
      resetPassword: false,
      loading: false,
    };
  },
  computed: {
    passwordMismatch() {
      return (
        this.form.newPassword &&
        this.form.confirmNewPassword &&
        this.form.newPassword !== this.form.confirmNewPassword
      );
    },
  },
  methods: {
    async handleResetPassword() {
      try {
        const resetPassword = {
          email: this.form.email,
          newPassword: this.form.newPassword,
          confirmNewPassword: this.form.confirmNewPassword,
          otp: this.otp,
        };
        const response = await this.userStore.resetPassword(resetPassword);
        console.log(response, "reset");
        this.isVerified = false;
        this.forgotPassword = false;

        // if (accessToken) {
        //   this.$router.push("/dashboard");
        // }
        // this.productStore.moveWishlistToCart()
        this.$toast.add({
          severity: "success",
          summary: response.data.message,
          group: "br",
          life: 3000,
        });
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
    async sendResetEmail() {
      try {
        const { $axios } = useNuxtApp();
        await $axios.post("/auth/forgot-password", { email: this.resetEmail });
        this.$toast.add({
          severity: "success",
          summary: "Reset link sent!",
          detail: "Check your email for the password reset link.",
          group: "br",
          life: 3000,
        });
        this.forgotPassword = false;
        this.isVerified = true;
        this.form.email = this.resetEmail;
        this.resetPassword = false;
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
        this.loading = true;
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
        this.loading = false;

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
        if (!this.resetPassword) {
          // this.$router.push("/change-password");
          this.userStore.logout();
          this.resetPassword = true;
          return;
        }
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
.image_cont {
}
</style>
