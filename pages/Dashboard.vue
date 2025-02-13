<template>
  <div class="container mx-auto my-10 pa-10">
    <!-- <TopCard :categories="categories" /> -->
    <!-- <section class="flash-sales mt-12 mx-4 ">
      <Carousel :value="categories" :numVisible="4" :numScroll="5" :responsiveOptions="responsiveOptions">
        <template #item="slotProps">
          <div class="border border-surface-200 dark:border-surface-700 rounded m-2 bg-white">
            <div class="p-4">
              <div class="mb-4 font-medium">{{ slotProps.data.name }}</div>
              <div class="flex justify-between items-center">
                <div class="mt-0 font-semibold text-xl">
                  {{ slotProps.data.price }}
                </div>
              </div>
            </div>
          </div>
        </template>
</Carousel>
</section> -->
    <!-- </div> -->
    <!-- Categories -->

    <!-- <section class="flash-sales mt-12 mx-4">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-bold">Browse By Category</h2>
        <div class="flex space-x-2">
          <button class="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-arrow-left"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
          </button>
          <button class="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-arrow-right"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      <div
        class="grid gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
      >
        <CategoryCard
          v-for="(i, index) in categories"
          :item="i"
          :key="index"
          @click="getItems(i)"
        />
      </div>
    </section> -->
    <section>
      <div class="p-4 rounded-md">
        <div class="flex justify-between items-center mb-4 px-2">
          <h2 class="text-lg font-semibold">Top selling items</h2>
          <!-- <NuxtLink
            to="/top-selling"
            class="text-orange-200 hover:text-orange-400 text-sm font-semibold"
          >
            See All &rarr;
          </NuxtLink> -->
        </div>

        <div class="flex overflow-x-auto gap-4 p-2">
          <div
            v-for="(product, index) in randomizedProducts"
            :key="index"
            class="min-w-[200px] md:min-w-[220px] bg-white rounded-md shadow-md cursor-pointer p-2"
            @click="goToProductPage(product)"
          >
            <div class="relative">
              <img
                :src="product.image"
                :alt="product.name"
                class="w-full h-36 object-cover rounded-md"
              />
              <!-- <span
                class="absolute top-2 right-2 bg-orange-400 text-white text-xs px-2 py-1 rounded-md"
              >
                -{{ product.discount }}%
              </span> -->
            </div>
            {{ product.product.name }}
            <h3 class="text-sm font-medium mt-2 truncate">
              {{ product.name }}
            </h3>
            <p class="text-lg font-semibold text-gray-900">
              {{ formatPrice(product.price) }}
            </p>
            <p class="text-gray-500 text-xs line-through">
              {{ product.oldPrice }}
            </p>
          </div>
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
            <div class="relative flex justify-center items-center">
              <div
                class="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-100"
              ></div>
              <img
                src="https://freelancerdxb.s3.eu-central-1.amazonaws.com/documents/image%20%285%29__5d197f13926ac20a20a6f301d00ce69b516f83eb.png"
                class="rounded-full h-24 w-24"
              />
            </div>
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
            <!-- <button
              :loading="fetching"
              @click="showMoreProducts()"
              class="bg-red-500 text-white px-4 py-2"
            >
              Show More
            </button> -->
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
    const goToProductPage = product => {
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

    const getItems = x => {
      console.log("ca", x);
    };

    const formatPrice = value => {
      if (!value) return "0"; // Handle empty or null values
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "Ksh",
        minimumFractionDigits: 0,
      }).format(value);
    };

    // Example usage:

    const goToSlide = index => {
      currentIndex.value = index;
    };
    const getProduct = async () => {
      fetching.value = true;
      fetchingMore.value = true;
      const defaultImage =
        "https://www.shutterstock.com/shutterstock/photos/2059817444/display_1500/stock-vector-no-image-available-photo-coming-soon-illustration-vector-2059817444.jpg";

      try {
        const { $axios } = useNuxtApp();

        // Build the request parameters dynamically
        const params = {};
        if (props.searchTerm) {
          params.searchTerm = props.searchTerm;
        }

        const response = await $axios.get("/product/product-models", {
          params: {
            ...params, // Preserve existing params
            page: currentPage.value,
            limit: 10, // Set your desired limit
          },
        });

        fetching.value = false;
        fetchingMore.value = false;
        products.value = [...products.value, ...response.data.results];
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
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: "1199px",
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: "767px",
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: "575px",
        numVisible: 1,
        numScroll: 1,
      },
    ]);

    const getSeverity = status => {
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
    };
  },
};
</script>

<style scoped>
.flash-sales h2 {
  color: #ff0000;
}
</style>
