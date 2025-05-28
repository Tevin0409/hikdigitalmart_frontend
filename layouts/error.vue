<template>
  <div>
    <h1>Error: {{ error.statusCode }}</h1>
    <p>{{ error.message }}</p>
  </div>
</template>

<script setup>
defineProps({
  error: Object,
});
</script>
