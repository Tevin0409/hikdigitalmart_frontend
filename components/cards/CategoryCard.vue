<template>
  <div class="cursor-pointer hover:text-red-500 pt-4">
    <div class="border p-4 flex items-center space-x-2">
      <img src="/assets/icons/cctv.svg" alt="Camera Icon" class="w-6 h-6" />
      <p class="font-bold">{{ item.name }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<style></style>
