<template>
  <div class="flex justify-center items-center">
    <Rating :model-value="average" readonly class="p-rating-custom" />
  </div>
</template>

<script setup>
import { computed } from "vue";
// Define props and destructure reviews
const props = defineProps({
  reviews: {
    type: Array,
    required: true,
  },
});

const reviews = props.reviews;

const average = computed(() => {
  if (!reviews.length) return 0;
  const total = reviews.reduce((acc, curr) => acc + (curr.rating || 0), 0);
  return total / reviews.length;
});
</script>

<style scoped>
::v-deep(.p-rating-custom .p-rating-icon) {
  color: #facc15 !important; /* Tailwind's yellow-400 */
}
</style>
