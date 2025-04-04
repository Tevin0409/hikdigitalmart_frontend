<template>
  <div class="auth-container" style="background-color: white">
    <!-- Show Signup Form -->
    <SignupForm
      v-if="isSignup"
      @toggle="toggleForm"
      @show-questionnaire="showQuestionnaire"
      @show-wholesaler="showWholesalerForm"
    />

    <!-- Show Questionnaire Form -->
    <QuestionnaireForm
      v-else-if="showQuestionnaireVisible"
      @back-to-signup="goToSignup"
    />

    <!-- Show Wholesaler Form -->
    <WholesalerForm v-else-if="showWholesaler" @back-to-signup="goToSignup" />

    <!-- Show Login Form -->
    <LoginForm v-else @toggle="toggleForm" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SignupForm from "~/components/SignupForm.vue";
import LoginForm from "~/components/LoginForm.vue";
import QuestionnaireForm from "~/components/stepper/QuestionnaireForm.vue";
import WholesalerForm from "~/components/stepper/WholesalerForm.vue";

// Set the login layout using Nuxt 3's definePageMeta
definePageMeta({
  layout: "login",
});

// Reactive state
const isSignup = ref(false);
const showQuestionnaireVisible = ref(false);
const showWholesaler = ref(false); // New state for wholesaler form

// Methods
const toggleForm = () => {
  isSignup.value = !isSignup.value;
  showQuestionnaireVisible.value = false;
  showWholesaler.value = false;
};

const showQuestionnaire = () => {
  isSignup.value = false;
  showQuestionnaireVisible.value = true;
  showWholesaler.value = false;
};

const showWholesalerForm = () => {
  isSignup.value = false;
  showQuestionnaireVisible.value = false;
  showWholesaler.value = true;
};

const goToSignup = () => {
  isSignup.value = true;
  showQuestionnaireVisible.value = false;
  showWholesaler.value = false;
};
</script>
