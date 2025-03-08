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
        class="border shadow-lg p-8 rounded-xl bg-white text-center flex flex-col items-center"
      >
        <img
          src="@/assets/images/logoo.png"
          alt="Login"
          class="h-28 w-28 mb-6 mx-auto"
        />

        <p class="text-gray-500 text-2xl mb-10">
          Enter your details below to sign up
        </p>

        <form
          v-if="!otpSent"
          @submit.prevent="register"
          class="w-full flex flex-col items-center"
        >
          <div class="flex space-x-4 mb-4 w-full">
            <FloatLabel variant="on" class="w-full">
              <InputText
                type="text"
                id="firstName"
                v-model="form.firstName"
                class="w-full"
              />
              <label for="firstName">First Name</label>
            </FloatLabel>
            <FloatLabel variant="on" class="w-full">
              <InputText
                type="text"
                id="lastName"
                v-model="form.lastName"
                class="w-full"
              />
              <label for="lastName">Last Name</label>
            </FloatLabel>
          </div>

          <div class="flex flex-col space-y-4 mb-4 w-full">
            <FloatLabel variant="on" class="w-full">
              <InputText
                type="email"
                id="email"
                v-model="form.email"
                class="w-full"
              />
              <label for="email">Email</label>
            </FloatLabel>

            <FloatLabel variant="on" class="w-full">
              <InputText
                type="number"
                id="phoneNumber"
                v-model="form.phoneNumber"
                class="w-full"
              />
              <label for="phoneNumber">Mobile Phone</label>
            </FloatLabel>

            <!-- Password Field -->
            <InputText
              name="password"
              v-model="form.password"
              type="password"
              class="w-full"
              placeholder="Password"
            />

            <Select
              v-model="form.role"
              :options="roles"
              optionLabel="name"
              @change="handleRole"
              placeholder="Select a Role"
              class="w-full custom-dropdown"
            />
          </div>

          <button
            type="submit"
            class="w-full bg-red-500 text-white py-3 rounded hover:bg-red-600 mt-6"
          >
            Sign Up
          </button>
        </form>

        <!-- OTP Input Section -->
        <div v-else class="flex flex-col items-center text-center w-full">
          <h3 class="text-3xl font-medium mb-4">Verify OTP</h3>
          <p class="text-gray-500 mb-6">
            Enter the OTP sent to your email address.
            <span class="font-weight-bold font-bold">{{ form.email }}</span>
          </p>
          <div class="w-full flex justify-center mb-4">
            <div class="flex justify-center w-full">
              <InputOtp
                :length="6"
                v-model="otp"
                class="p-inputtex text-center p-3 w-full max-w-sm"
                placeholder="Enter OTP"
              />
            </div>
          </div>

          <button
            @click="verifyOtp"
            class="w-full bg-red-500 text-white py-3 rounded hover:bg-red-600"
          >
            Verify OTP
          </button>
        </div>

        <p class="text-sm mt-4">
          Already have an account?
          <span class="text-blue-500 cursor-pointer" @click="$emit('toggle')">
            Log in
          </span>
        </p>
      </div>
    </div>

    <div class="hidden md:block h-full w-full p-4 relative">
      <Carousel
        :verticalViewPortHeight="2000"
        :autoplayInterval="4000"
        :value="images"
        :numVisible="1"
        :numScroll="1"
        :showIndicators="false"
        :showNavigators="false"
        circular
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
import InputOtp from "primevue/inputotp";
import axios from "axios";

export default {
  components: {
    InputOtp,
  },
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
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        cpassword: "",
        phone: "",
        role: "",
      },
      otp: "",
      otpSent: false,
      roles: [],
    };
  },
  methods: {
    handleRole() {
      if (this.form.role.name == "TECHNICIAN") {
        console.log("role: ", this.form.role);
        this.$emit("show-questionnaire");
      }
    },
    async register() {
      try {
        const userStore = useUserStore();
        const { $axios } = useNuxtApp();

        // Register the user
        await userStore.register({
          firstName: this.form.firstName,
          lastName: this.form.lastName,
          email: this.form.email,
          password: this.form.password,
          phoneNumber: this.form.phoneNumber,
          roleId: this.form.role.id,
        });
        // Simulate sending OTP
        this.otpSent = true;
        console.log("OTP sent to email");
      } catch (error) {
        console.error("Error registering:", error);
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
        const { $axios } = useNuxtApp();
        const userStore = useUserStore();
        const { accessToken, user } = await userStore.verifyOtp({
          email: this.form.email,
          otp: this.otp,
        });
        if (accessToken) {
          this.$router.push("/dashboard"); // Navigate to the dashboard upon success
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
    // async verifyOtp() {
    //   try {
    //     const { $axios } = useNuxtApp();
    //     const userStore = useUserStore();

    //     // Verify OTP with backend
    //     const { accessToken, user } = await userStore.verifyOtp(
    //       { email: this.form.email, otp: this.otp }
    //     );
    //     console.log("User", user);
    //     if (accessToken) {
    //       console.log("Otp success:", user);

    //       this.$router.push("/dashboard"); // Navigate to the dashboard upon success
    //     }
    //   } catch (error) {
    //     console.error("Error verifying OTP:", error);
    //     this.$toast.add({
    //       severity: "error",
    //       summary: error.message,
    //       group: "br",
    //       life: 3000,
    //     });
    //   }
    // },

    async fetchRoles() {
      const { $axios } = useNuxtApp();
      try {
        const response = await $axios.get("/user/roles");
        this.roles = response.data;
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    },
  },
  mounted() {
    this.fetchRoles();
  },
};
</script>

<style scoped>
.image_cont {
}

.custom-dropdown .p-dropdown {
  border: none;
  border-bottom: 2px solid #d1d5db;
  border-radius: 0;
}

.custom-dropdown .p-dropdown:hover {
  border-bottom: 2px solid #ef4444;
}

.custom-dropdown .p-dropdown-focus {
  border-bottom: 2px solid #ef4444;
  box-shadow: none;
}

/* Force the Password component to take the full width */
.custom-password .p-inputtext {
  width: 100% !important;
  /* Ensure it takes up the full width */
}

.custom-password .p-password {
  width: 100% !important;
  /* Make sure the inner div also stretches */
}

.custom-password .p-inputtext {
  display: block;
  /* Make sure it's treated as a block-level element */
}
</style>
