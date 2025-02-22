<template>
  <div class="auth-container" style="background-color: white">
    <!-- Show Signup Form -->
    <SignupForm
      v-if="isSignup"
      @toggle="toggleForm"
      @show-questionnaire="showQuestionnaire"
    />

    <!-- Show Questionnaire Form -->
    <QuestionnaireForm
      v-else-if="showQuestionnaireVisible"
      @back-to-signup="goToSignup"
    />

    <!-- Show Login Form -->
    <LoginForm v-else @toggle="toggleForm" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SignupForm from "~/components/SignupForm.vue";
import LoginForm from "~/components/LoginForm.vue";
import QuestionnaireForm from "~/components/stepper/QuestionnaireForm.vue";

// Set the login layout using Nuxt 3's definePageMeta
definePageMeta({
  layout: "login",
});

// Reactive state
const isSignup = ref(false);
const showQuestionnaireVisible = ref(false);

// Methods
const toggleForm = () => {
  isSignup.value = !isSignup.value;
  showQuestionnaireVisible.value = false;
};

const showQuestionnaire = () => {
  isSignup.value = false;
  showQuestionnaireVisible.value = true;
};

const goToSignup = () => {
  isSignup.value = true;
  showQuestionnaireVisible.value = false;
};
</script>
