<template>
  <Dialog
    v-model:visible="isQuotationVisible"
    modal
    class="w-full md:w-[60vw] lg:w-[50vw]"
    :style="{ width: '50rem' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
  >
    <!-- Header -->
    <template #header>
      <div class="flex items-center gap-4">
        <Avatar
          :label="initials"
          class="bg-blue-100 text-blue-700 font-bold"
          shape="circle"
          size="xlarge"
        />
        <h3 class="text-xl font-semibold">
          Welcome Back
          <span class="text-blue-500">
            {{ userStore.user.firstName }}
          </span>
        </h3>
      </div>
    </template>

    <!-- Step 1 View -->
    <div
      v-if="!quotationStarted"
      class="flex flex-col items-center justify-center text-center space-y-6 p-6"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/942/942748.png"
        alt="Quotation Illustration"
        class="w-40 h-40 mx-auto"
      />
      <p class="text-lg">Do you wish to make a quotation?</p>
      <div class="flex gap-4 justify-center">
        <Button label="Yes" class="p-button-success" @click="startQuotation" />
        <Button
          label="No"
          class="p-button-secondary"
          @click="toggleQuotation"
        />
      </div>
    </div>

    <!-- Step 2 View -->
    <div v-else class="space-y-4">
      <div class="flex items-center w-full justify-between">
        <h3 class="text-xl font-semibold mr-4">Search items</h3>
        <div class="flex justify-end">
          <Select
            v-model="selectedCategory"
            :options="categories"
            optionLabel="name"
            placeholder="Choose Category"
            class="min-w-[150px] z-10 rounded-l-md mr-3 border-l"
          />
          <AutoComplete
            v-model="searchTerm"
            @input="fetchProducts"
            :suggestions="filteredItems"
            @complete="searchItems"
            optionLabel="name"
            placeholder="I'm Searching for ..."
            class="flex-grow mx-2 p-input-icon-left"
            @item-select="addProductToQuote"
          >
            <template #option="slotProps">
              <div class="flex items-center w-full">
                <img
                  :alt="slotProps.option.name"
                  :src="slotProps.option.images"
                  class="mr-2 rounded-md"
                  style="width: 40px; height: 40px; object-fit: cover"
                />
                <div class="w-full">{{ slotProps.option.name }}</div>
              </div>
            </template>
          </AutoComplete>
        </div>
      </div>

      <Divider />

      <!-- Scrollable Item List -->
      <div class="scroll-area max-h-[60vh] overflow-y-auto pr-2">
        <div
          v-if="filteredQuotationList.length > 0"
          v-for="(item, index) in filteredQuotationList"
          :key="item.id"
          class="flex justify-between items-center border-b pb-2 mb-2"
        >
          <div class="flex">
            <h4 class="font-semibold text-sm pr-2">{{ index + 1 }}</h4>
            <img
              :src="item.images[0]"
              class="mr-2"
              height="25px"
              width="25px"
            />
            <div>
              <h4 class="font-semibold text-sm">{{ item.name }}</h4>
              <p class="text-sm text-gray-500">{{ item.description }}</p>
            </div>
          </div>
          <div class="flex items-center gap-2 sm:flex-row flex-col-reverse">
            <!-- Left side: minus and plus stacked vertically on small screens -->
            <div class="flex sm:flex-row flex-col items-center gap-1">
              <Button
                icon="pi pi-plus"
                class="p-button-rounded p-button-sm !p-0.5 !h-6 !w-6 !text-xs"
                @click="increaseQty(index)"
                variant="outlined"
              />
              <InputText
                v-model.number="item.quantity"
                class="w-12 h-6 text-center text-xs"
              />
              <Button
                icon="pi pi-minus"
                class="p-button-rounded p-button-sm !p-0.5 !h-6 !w-6 !text-xs"
                @click="decreaseQty(index)"
              />
            </div>

            <!-- Right side: remove button -->
            <Button
              icon="pi pi-trash"
              class="p-button-danger p-button-rounded p-button-sm !p-0.5 !h-6 !w-6 !text-xs"
              @click="removeItem(index)"
            />
          </div>
        </div>

        <!-- Empty State -->
        <div v-else class="flex justify-center">
          <img
            src="@/assets/illustrations/no-item.jpg"
            alt="Empty Cart"
            class="max-w-full h-auto w-24 sm:w-32 md:w-48 lg:w-64 mb-4"
          />
        </div>
      </div>

      <!-- Bottom Action Buttons -->
      <div class="flex justify-end space-x-2 pt-4 border-t mt-4">
        <div>
          <InputText
            type="text"
            v-model="message"
            placeholder="Attach Message"
          />
          <div v-if="error" class="text-red-600 text-sm ml-2">{{ error }}</div>
        </div>

        <Button
          label="Place Quotation"
          class="p-button-success"
          @click="submitQuotation"
          :disabled="quotationList.length === 0"
        />
      </div>
    </div>
  </Dialog>
</template>

<script setup>
import { ref, computed } from "vue";
import { useUserStore } from "@/stores/auth";
import { useProductStore } from "@/stores/productStore";

const isQuotationVisible = ref(true);
const quotationStarted = ref(false);
const search = ref("");
const productStore = useProductStore();
const categories = ref([]);
const message = ref("");
onMounted(async () => {
  await productStore.getCategories();
  await fetchCat();
});
const emit = defineEmits(["close"]);
const quotationList = ref([]);
const error = ref(null);
const addProductToQuote = (event) => {
  const newProduct = event.value;
  const exists = quotationList.value.some((item) => item.id === newProduct.id);

  if (!exists) {
    quotationList.value.push({
      ...newProduct,
      quantity: 1,
    });
    searchTerm.value = "";
  }
};

const toggleQuotation = () => {
  isQuotationVisible.value = false;
};

const startQuotation = () => {
  quotationStarted.value = true;
};

const increaseQty = (index) => {
  quotationList.value[index].quantity++;
};

const decreaseQty = (index) => {
  if (quotationList.value[index].quantity > 1) {
    quotationList.value[index].quantity--;
  }
};

const removeItem = (index) => {
  quotationList.value.splice(index, 1);
};

const submitQuotation = async () => {
  if (!message.value.trim()) {
    error.value = "Message cannot be empty!";
  }
  const makeQuotation = await productStore.makeQuotation(
    message.value,
    quotationList.value
  );
  if (makeQuotation.status == 201) {
    isQuotationVisible.value = false;
    message.value = "";
    quotationList.value = [];
    emit("close", false);
  } else {
    error.value = "Failed to submit quotation. Please try again.";
  }
};

const saveQuotation = () => {
  console.log("Quotation saved:", quotationList.value);
  isQuotationVisible.value = false;
};

// Filtered list based on search
const filteredQuotationList = computed(() =>
  quotationList.value.filter((item) =>
    item.name.toLowerCase().includes(search.value.toLowerCase())
  )
);
const userStore = useUserStore();

const initials = computed(() => {
  const { firstName, lastName } = userStore.user;
  return `${firstName?.charAt(0) || ""}${
    lastName?.charAt(0) || ""
  }`.toUpperCase();
});
const searchTerm = ref("");
const selectedCategory = ref([]);
const fetchCat = async () => {
  try {
    await productStore.getCategories();
    categories.value = productStore.categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};
const filteredItems = ref([]);
const searchItems = async (event) => {
  let query = event.query;
  filteredItems.value = [];
  const { $axios } = useNuxtApp();
  if (!query) return;

  try {
    let response;
    const categoryIds = Array.isArray(selectedCategory?.value)
      ? selectedCategory.value
          .filter((cat) => cat.id !== null)
          .map((cat) => cat.id)
      : selectedCategory?.value?.id && selectedCategory.value.id !== null
      ? [selectedCategory.value.id]
      : [];

    const defaultImage =
      "https://www.shutterstock.com/shutterstock/photos/2059817444/display_1500/stock-vector-no-image-available-photo-coming-soon-illustration-vector-2059817444.jpg";

    if (categoryIds.length > 0) {
      response = await $axios.get("/product", {
        params: { searchTerm: query, categoryId: categoryIds },
      });
      filteredItems.value = response.data.results.flatMap((product) =>
        product.models.map((model) => ({
          id: model.id,
          name: `${product.name} - (${model.name})`,
          images:
            model.images.length > 0
              ? model.images.map((img) => img.uploadUrl)
              : [defaultImage],
        }))
      );
    } else {
      response = await $axios.get("/product/product-models", {
        params: { searchTerm: query },
      });
      const products = response.data?.results ?? [];
      filteredItems.value = products.map((product) => ({
        id: product.id,
        name: product.product.name,
        price: product.price,
        category: product.product?.subCategory?.category?.name ?? "Unknown",
        images:
          product.images.length > 0
            ? product.images.find((image) => image.isPrimary)?.uploadUrl ||
              defaultImage
            : [defaultImage],
      }));
    }
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};
const fetchProducts = async () => {
  // emit("update:searchTerm", searchTerm.value);

  try {
    const { $axios } = useNuxtApp();
    const response = await $axios.get("/product", {
      params: {
        searchTerm: searchTerm.value,
        // categoryId: selectedCategory.value,
      },
    });
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};
</script>
