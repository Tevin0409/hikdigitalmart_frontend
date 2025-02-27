<template>
  <footer class="bg-gray-100 text-gray-800 py-10">
    <div class="container mx-auto px-4">
      <!-- Top Section -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Store Info -->
        <div>
          <div class="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo" class="h-10" />
            <h2 class="text-lg font-semibold">Secure Group</h2>
          </div>
          <p class="text-sm text-gray-500">Secure Store</p>
          <p class="text-sm mt-2">Ground Floor Suite 1 & 2, Vision</p>
          <p class="text-sm">Plaza, Mombasa Road, Nairobi, Kenya</p>

          <!-- Contact Info -->
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

          <!-- App Buttons -->
          <!-- <div class="flex space-x-2 mt-4">
                        <img src="/google-play.png" alt="Google Play" class="h-10">
                        <img src="/app-store.png" alt="App Store" class="h-10">
                    </div> -->
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

        <!-- Links -->
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

        <div>
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
        </div>
      </div>

      <!-- Bottom Section -->
      <div
        class="mt-10 border-t pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500"
      >
        <p>
          © 2024 <span class="text-orange-500">Secure Group</span>. All Rights
          Reserved.
        </p>

        <!-- Social Icons -->
        <div class="flex space-x-4">
          <PrimeButton
            icon="pi pi-facebook"
            class="p-button-text text-gray-500 hover:text-orange-500"
          />
          <PrimeButton
            icon="pi pi-twitter"
            class="p-button-text text-gray-500 hover:text-orange-500"
          />
          <PrimeButton
            icon="pi pi-instagram"
            class="p-button-text text-gray-500 hover:text-orange-500"
          />
          <PrimeButton
            icon="pi pi-youtube"
            class="p-button-text text-gray-500 hover:text-orange-500"
          />
        </div>

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
</script>
