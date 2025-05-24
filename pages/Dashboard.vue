<template>
  <div class="container mx-auto my-10 pa-10">
    <TopCard :categories="categories" />
    <TopDeal />

    <section>
      <div class="p-4 rounded-md">
        <div class="flex justify-between items-center mb-4 px-2">
          <h2 class="text-lg font-semibold">Top selling items</h2>
        </div>

        <div class="flex overflow-x-auto gap-4 p-2">
          <topSelling
            v-for="(product, index) in randomizedProducts"
            :key="index"
            :product="product"
            :goToProductPage="goToProductPage"
            :formatPrice="formatPrice"
          />
        </div>
      </div>
    </section>

    <section
      class="flash-sales mt-5 mx-2 full-screen"
      style="min-height: 900px"
    >
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-bold">Explore Our Products</h2>
        <div class="flex space-x-2">
          <button class="bg-red-500 text-white px-4 py-2">View All</button>
        </div>
      </div>
      <div class="flex">
        <!-- Left Section -->
        <FilterCard v-if="filter" />
        <!-- Right Section -->
        <div class="w-full">
          <div v-if="fetching && products.length < 1" class="text-center mt-6">
            <Loader />
          </div>

          <div
            v-else-if="products.length == 0"
            class="flex flex-col items-center justify-center text-center mt-12 text-gray-500"
          >
            <img
              src="@/assets/images/empty.jpg"
              alt="No items found"
              class="h-56 w-56"
            />
            <p class="pt-6">No items found</p>
          </div>

          <div
            v-else
            class="grid gap-3 grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 justify-center"
          >
            <ProductCard
              v-for="product in products"
              :key="product.id"
              :item="product"
            />
          </div>

          <div class="flex justify-center py-8" v-if="products.length != 0">
            <Button
              type="button"
              label="Show More"
              icon="pi pi-sync"
              :loading="fetchingMore"
              @click="showMoreProducts()"
            />
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>
<script>
import { ref } from "vue";
import FlashCard from "~/components/cards/FlashCard.vue";
import CategoryCard from "~/components/cards/CategoryCard.vue";
import ProductCard from "~/components/cards/ProductCard.vue";
import TopCard from "~/components/cards/TopCard1.vue";
import Footer from "~/components/shared/utils/Footer.vue";
import FilterCard from "~/components/cards/FilterCard.vue";
import TopDeal from "~/components/cards/TopDeal.vue";
import topSelling from "~/components/MonthlyFeaturedCards/topSelling.vue";
import Loader from "~/components/loaders/index.vue";

import { useRouter } from "vue-router";

export default {
  name: "Dashboard",
  components: {
    FlashCard,
    CategoryCard,
    ProductCard,
    TopCard,
    Footer,
    FilterCard,
    TopDeal,
    topSelling,
    Loader,
  },
  props: {
    searchTerm: {
      type: String,
      default: "",
    },
  },

  setup(props) {
    watch(
      () => props.searchTerm,
      (newVal, oldVal) => {
        filter.value = true;
        getProduct(newVal);
      }
    );
    onMounted(async () => {
      getProduct();
      updateTime();
      await fetchCat();

      //   import { ProductService } from '@/service/ProductService';

      // ProductService.getProductsSmall().then((data) => (products.value = data.slice(0, 9)));
      //  timer.value = setInterval(updateTime(), 1000);
    });
    const router = useRouter();
    const currentPage = ref(1);
    const totalPages = ref(1); // Track total pages
    const randomizedProducts = computed(() => {
      return [...products.value] // Create a shallow copy
        .sort(() => Math.random() - 0.5) // Shuffle array
        .slice(0, 6); // Limit to 6 items
    });
    // const emit = defineEmits(["refresh"]);
    const filter = ref(false);
    const categoryId = ref(null);
    const value = ref([20, 80]);
    const fetching = ref(false);
    const fetchingMore = ref(false);
    // const { $formatPrice } = useNuxtApp();

    const timeLeft = ref({
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    });
    const goToProductPage = (product) => {
      // console.log("prodcet", product);
      router.push({
        path: `/products/${product.id}`,
      });
    };
    const endTime = ref(
      new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000)
    );
    const updateTime = () => {
      const now = new Date().getTime();
      const distance = endTime.value - now;

      if (distance > 0) {
        timeLeft.value = {
          days: Math.floor(distance / (1000 * 60 * 60 * 24))
            .toString()
            .padStart(2, "0"),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          )
            .toString()
            .padStart(2, "0"),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            .toString()
            .padStart(2, "0"),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
            .toString()
            .padStart(2, "0"),
        };
      } else {
        clearInterval(this.timer);
        timeLeft.value = {
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        };
      }
    };
    const iconMap = {
      "HD ANALOGUE CAMERAS AND DVR": "pi pi-video",
      "IP NETWORK CAMERAS AND NVR": "pi pi-wifi",
      "ACCESS CONTROL PRODUCTS": "pi pi-lock",
      "VIDEO INTERCOM PRODUCTS": "pi pi-phone",
      "NETWORK AND CABLES PRODUCTS": "pi pi-sitemap",
      "MONITOR DISPLAY PRODUCTS": "pi pi-desktop",
      "ACCESSORIES PRODUCTS": "pi pi-cog",
      Phones: "pi pi-mobile",
    };
    const getIcon = (name) => {
      return iconMap[name] || "pi pi-question"; // Default icon if no match
    };
    const images = ref([]);
    const categories = ref([]);
    const { $axios } = useNuxtApp();
    const products = ref([]);
    const currentIndex = ref(0);
    const nextSlide = () => {
      currentIndex.value = (currentIndex.value + 1) % images.value.length;
    };
    const showMoreProducts = () => {
      currentPage.value++;
      getProduct();
    };
    const prevSlide = () => {
      currentIndex.value =
        (currentIndex.value - 1 + images.value.length) % images.value.length;
    };

    const getItems = (x) => {
      console.log("ca", x);
    };

    const formatPrice = (value) => {
      if (!value) return "0"; // Handle empty or null values
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "Ksh",
        minimumFractionDigits: 0,
      }).format(value);
    };
    const getCategoryProducts = (item) => {
      categoryId.value = [item.id];
      getProduct();
    };
    // Example usage:

    const goToSlide = (index) => {
      currentIndex.value = index;
    };
    const getProduct = async () => {
      fetching.value = true;
      fetchingMore.value = true;
      try {
        const { $axios } = useNuxtApp();

        // Build the request parameters dynamically
        const params = {};
        if (props.searchTerm) {
          params.searchTerm = props.searchTerm;
        }
        if (categoryId.value) {
          params.categoryIds = categoryId.value;
        }

        const response = await $axios.get("/product/product-models", {
          params: {
            ...params,
            page: currentPage.value,
            limit: 10,
          },
        });

        fetching.value = false;
        fetchingMore.value = false;
        products.value = [...products.value, ...response.data.results];
        console.log(products.value, "getting");
      } catch (error) {
        console.error("Error fetching products:", error);
        fetching.value = false;
        fetchingMore.value = false;
      }
    };

    const fetchCat = async () => {
      const { $axios } = useNuxtApp();
      try {
        const response = await $axios.get("/product/categories", {});
        categories.value = response.data;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    const responsiveOptions = ref([
      {
        breakpoint: "1400px",
        numVisible: 4,
        numScroll: 4,
      },
      {
        breakpoint: "1199px",
        numVisible: 4,
        numScroll: 4,
      },
      {
        breakpoint: "767px",
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: "475px",
        numVisible: 1,
        numScroll: 1,
      },
    ]);

    const getSeverity = (status) => {
      switch (status) {
        case "INSTOCK":
          return "success";

        case "LOWSTOCK":
          return "warn";

        case "OUTOFSTOCK":
          return "danger";

        default:
          return null;
      }
    };

    return {
      images,
      currentIndex,
      nextSlide,
      prevSlide,
      goToSlide,
      categories,
      products,
      responsiveOptions,
      getItems,
      getSeverity,
      value,
      filter,
      showMoreProducts,
      fetching,
      fetchingMore,
      formatPrice,
      randomizedProducts,
      goToProductPage,
      getIcon,
      getCategoryProducts,
    };
  },
};
</script>

<style scoped>
.flash-sales h2 {
  color: #ff0000;
}
</style>
