<template>
  <Dialog
    v-model:visible="isVisible"
    modal
    class="w-full md:w-[60vw] lg:w-[15vw]"
  >
    <template #header>
      <div class="flex items-center justify-between w-full">
        <h2 class="text-xl font-bold">Add Review</h2>
        <div class="w-6"></div>
      </div>
    </template>

    <div class="w-full">
      <p class="mb-4 font-semibold">
        Please provide your feedback for the product
      </p>
      <span>
        {{ reviewItem?.productModel?.name || "N/A" }}
      </span>
      <div class="flex justify-center py-4">
        <Rating v-model="product.rating" class="p-rating" />
      </div>

      <!-- <Form
        v-slot="$form"
        :resolver="resolver"
        :initialValues="initialValues"
        @submit="onFormSubmit"
        class="flex flex-col gap-4 w-40"
      >
        <div class="flex flex-col items-center gap-2">
          <Rating name="rating" />
          <Message
            v-if="$form.rating?.invalid"
            severity="error"
            size="small"
            variant="simple"
            >{{ $form.rating.error?.message }}</Message
          >
        </div>
        <Button type="submit" severity="secondary" label="Submit" />
      </Form> -->

      <textarea
        v-model="product.comment"
        rows="4"
        class="w-full border rounded-md p-2 mb-4"
        placeholder="Write your review here..."
      ></textarea>
      <div class="flex justify-end">
        <Button
          class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
          @click="submitReview"
        >
          Submit Review
        </Button>
      </div>
    </div>
  </Dialog>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from "vue";

import { useProductStore } from "@/stores/productStore";

const productStore = useProductStore();

const props = defineProps({
  visible: Boolean,
  item: Object,
});

const emit = defineEmits(["update:visible", "reviewSubmitted"]);

const isVisible = ref(props.visible);
const reviewText = ref("");
const reviewItem = ref(props.item);

const product = ref({
  rating: 0,
  comment: "",
});
// Keep the local visibility in sync with the parent
watch(
  () => props.visible,
  (val) => {
    isVisible.value = val;
  }
);

watch(
  () => isVisible.value,
  (val) => {
    emit("update:visible", val);
  }
);

watch(
  () => props.item,
  (val) => {
    reviewItem.value = val;
  }
);

function closeDialog() {
  isVisible.value = false; // this triggers update:visible
  reviewText.value = "";
}

function submitReview() {
  console.log("Cdscs", reviewItem.value);
  try {
    productStore.submitReview({
      productModelId: reviewItem.value.productModelId,
      rating: product.value.rating,
      comment: product.value.comment,
      images: [],
    });
    emit("reviewSubmitted");

    product.value = {
      rating: 0,
      comment: "",
    };
    closeDialog();
  } catch (error) {
    console.error("Failed to submit review:", error);
  }
}
</script>
<style scoped>
::v-deep(.p-rating .p-rating-icon) {
  color: #facc15 !important; /* Tailwind's yellow-400 */
}
</style>

<!-- const { productModelId, rating, comment, images } = req.body; -->
