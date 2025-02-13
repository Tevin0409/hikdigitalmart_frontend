<template>
  <div class="flex w-full h-screen flex-col items-center justify-center p-6">
    <img src="@/assets/images/logoo.png" alt="Login" class="h-28 w-28" />
    <div class="">
      <p class="text-gray-500 text-2xl mb-10 text-center">
        Enter your details below to sign up
      </p>
      <form v-if="!otpSent" @submit.prevent="register" class="w-full flex flex-col items-center">
        <div class="flex space-x-4 mb-4">
          <FloatLabel variant="on" class="w-full">
            <InputText type="text" id="firstName" v-model="form.firstName" class="w-full" />
            <label for="firstName">First Name</label>
          </FloatLabel>
          <FloatLabel variant="on" class="w-full">
            <InputText type="text" id="lastName" v-model="form.lastName" class="w-full" />
            <label for="lastName">Last Name</label>
          </FloatLabel>
        </div>

        <div class="flex flex-col space-y-4 mb-4 w-full">
          <FloatLabel variant="on" class="w-full">
            <InputText type="email" id="email" v-model="form.email" class="w-full" />
            <label for="email">Email</label>
          </FloatLabel>

          <FloatLabel variant="on" class="w-full">
            <InputText type="number" id="phoneNumber" v-model="form.phoneNumber" class="w-full" />
            <label for="phoneNumber">Mobile Phone</label>
          </FloatLabel>

          <!-- Password Fields with Full Width Fix -->
          <div class="flex">

            <FloatLabel variant="on" class="w-full custom-password">
              <Password id="password" v-model="form.password" toggleMask class="" />
              <label for="password">Password</label>
            </FloatLabel>



            <!-- <FloatLabel variant="on" class="w-full">
               <Password id="cpassword" v-model="form.cpassword" toggleMask class="w-full" />
               <label for="cpassword">Confirm Password</label>
             </FloatLabel> -->
          </div>

          <Select v-model="form.role" :options="roles" optionLabel="name" @change="handleRole"
            placeholder="Select a Role" class="w-full custom-dropdown" />
        </div>

        <button type="submit" class="w-full bg-red-500 text-white py-3 rounded hover:bg-red-600 mt-12">
          Sign Up
        </button>
      </form>


      <!-- OTP Input Section -->
      <div v-else>
        <h3 class="text-3xl font-medium mb-4">Verify OTP</h3>
        <p class="text-gray-500 mb-6">
          Enter the OTP sent to your email address.
          <span class="font-weight-bold" style="font-weight: bold">{{ form.email }}
          </span>
        </p>
        <div class="w-full mb-4">
          <InputOtp :length="6" mask="*" v-model="otp" class="p-inputtex w-full text-center p-3"
            placeholder="Enter OTP" />
        </div>
        <button @click="verifyOtp" class="w-full bg-red-500 text-white py-3 rounded hover:bg-red-600">
          Verify OTP
        </button>
      </div>

      <p class="text-sm mt-4 text-center">
        Already have an account?
        <span class="text-blue-500 cursor-pointer" @click="$emit('toggle')">
          Log in
        </span>
      </p>
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
          phoneNumber: this.form.phone || "",
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
.image_cont {}

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
