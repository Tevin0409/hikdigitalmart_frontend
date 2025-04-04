<template>
  <footer class="bg-gray-100 text-gray-800 py-10">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div class="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo" class="h-40" />
            <p class="text-sm mt-2">
              Town Branch at Mfangano street <br />
              Junction with Sheikh Karume <br />
              Ground Floor Facing Ramco
              <br />
              Hardware at Sheikh Karume.
            </p>
          </div>

          <div class="mt-4 space-y-2">
            <h4 class="font-bold">Contact us on</h4>
            <div class="flex flex-col space-x-2">
              <div>
                <i class="pi pi-phone pr-4" aria-hidden="true"></i>
                <span class="text-sm font-bold">+254 727 909 060</span>
              </div>
              <div>
                <span class="text-sm font-bold">
                  <i class="pi pi-envelope pr-4" aria-hidden="true"></i>
                  sdl@securedigitallimited.com <br />
                </span>
              </div>
            </div>
          </div>
          <div class="flex space-x-2 mt-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              class="h-10"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiNQc5CapoSJE3sujvojLNNXipoAGDZYgUWw&s"
              alt="App Store"
              class="h-10"
            />
          </div>
        </div>
        <div>
          <h3 class="font-semibold mb-4">Opening Hours</h3>
          <ul class="space-y-2 text-sm text-gray-600">
            <li>8:00 am to 5:30pm (MON - FRI)</li>
            <li>8:30 am to 1:00pm (SAT)</li>
            <li>Closed on Sundays and Public Holidays</li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2 text-sm text-gray-600">
            <nuxtLink to="/profile"> <li>Your Account</li></nuxtLink>
            <nuxtLink to="/orders"> <li>Purchase History</li></nuxtLink>
            <li>App Download</li>
            <li>Latest News Blog</li>
            <li>Shipping & Delivery</li>
          </ul>
        </div>

        <!-- <div>
          <h3 class="font-semibold mb-4">Service Us</h3>
          <ul class="space-y-2 text-sm text-gray-600">
            <li>Support Center</li>
            <li>Terms & Conditions</li>
            <li>Shipping</li>
            <li>Privacy Policy</li>
            <li>Help</li>
            <li>Product Returns</li>
            <li>FAQs</li>
          </ul>
        </div> -->
      </div>

      <!-- Social Icons -->
      <div class="flex justify-center space-x-4">
        <button class="text-[#1877F2] hover:opacity-80">
          <!-- Facebook Blue -->
          <i class="pi pi-facebook text-xl"></i>
        </button>
        <button class="text-[#1DA1F2] hover:opacity-80">
          <!-- Twitter Blue -->
          <i class="pi pi-twitter text-xl"></i>
        </button>
        <button class="text-[#E4405F] hover:opacity-80">
          <!-- Instagram Pink/Red -->
          <i class="pi pi-instagram text-xl"></i>
        </button>
        <button class="text-[#FF0000] hover:opacity-80">
          <!-- YouTube Red -->
          <i class="pi pi-youtube text-xl"></i>
        </button>
      </div>

      <!-- Bottom Section -->
      <div
        class="mt-10 border-t pt-6 flex flex-col md:flex-row justify-center items-center text-sm text-gray-500"
      >
        <p>
          © {{ currentYear }} <span class="text-orange-500">Secure Group</span>.
          All Rights Reserved.
        </p>

        <!-- Payment Icons -->
        <div class="flex space-x-2 mt-4 md:mt-0">
          <!-- <img src="/visa.png" alt="Visa" class="h-6">
                    <img src="/mastercard.png" alt="Mastercard" class="h-6">
                    <img src="/paypal.png" alt="PayPal" class="h-6">
                    <img src="/amex.png" alt="Amex" class="h-6"> -->
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "login",
});

const currentYear = new Date().getFullYear();
</script>
