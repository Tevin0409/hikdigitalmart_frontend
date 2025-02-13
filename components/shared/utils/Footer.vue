<template>
  <!-- Other content -->

  <!-- Footer -->
  <footer class="bg-black text-white py-10 mt-10">
    <div class="mx-auto px-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <!-- Exclusive -->
        <div>
          <h2 class="text-lg font-bold mb-4">Secure Group</h2>
          <p class="mb-2">Subscribe</p>
          <p class="text-gray-400 text-sm mb-4">Get 10% off your first order</p>
          <div class="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              class="flex-1 p-2 rounded-l-lg border-0 text-black"
            />
            <button class="bg-gray-600 p-2 rounded-r-lg hover:bg-gray-800">
              ➤
            </button>
          </div>
        </div>

        <!-- Support -->
        <div>
          <h2 class="text-lg font-bold mb-4">Support</h2>
          <p class="text-gray-400 text-sm mb-2">P.O Box, Nairobi.</p>
          <p class="text-gray-400 text-sm mb-2">securegroup@secure.org.com</p>
          <p class="text-gray-400 text-sm">+254-712-345-678</p>
        </div>

        <!-- Account -->
        <div>
          <h2 class="text-lg font-bold mb-4">Account</h2>
          <ul class="space-y-2">
            <li>
              <a href="#" class="text-gray-400 hover:text-white">My Account</a>
            </li>
            <li>
              <NuxtLink to="/auth" class="text-gray-400 hover:text-white"
                >Login / Register</NuxtLink
              >
            </li>
            <li><a href="#" class="text-gray-400 hover:text-white">Cart</a></li>
            <li>
              <a href="#" class="text-gray-400 hover:text-white">Wishlist</a>
            </li>
            <li><a href="#" class="text-gray-400 hover:text-white">Shop</a></li>
          </ul>
        </div>

        <!-- Quick Link -->
        <div>
          <h2 class="text-lg font-bold mb-4">Quick Link</h2>
          <ul class="space-y-2">
            <li>
              <a href="#" class="text-gray-400 hover:text-white"
                >Privacy Policy</a
              >
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-white"
                >Terms Of Use</a
              >
            </li>
            <li><a href="#" class="text-gray-400 hover:text-white">FAQ</a></li>
            <li>
              <a href="#" class="text-gray-400 hover:text-white">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Download App and Social Media -->
      <div class="mt-10 flex flex-col sm:flex-row justify-between items-center">
        <div class="flex items-center space-x-6">
          <div>
            <p class="text-sm text-gray-400">Save $3 With App New User Only</p>
            <div class="flex space-x-2">
              <img
                src="https://media.istockphoto.com/id/828088276/vector/qr-code-illustration.jpg?s=612x612&w=0&k=20&c=FnA7agr57XpFi081ZT5sEmxhLytMBlK4vzdQxt8A70M="
                alt="QR Code"
                class="h-20 w-20"
              />
              <div class="flex flex-col space-y-2">
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
          </div>
        </div>

        <div class="mt-6 sm:mt-0 flex space-x-4">
          <a href="#" class="text-gray-400 hover:text-white">s</a>
          <a href="#" class="text-gray-400 hover:text-white">e</a>
          <a href="#" class="text-gray-400 hover:text-white">c</a>
          <a href="#" class="text-gray-400 hover:text-white">u</a>
          <a href="#" class="text-gray-400 hover:text-white">r</a>
          <a href="#" class="text-gray-400 hover:text-white">e</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  font-family: Arial, sans-serif;
}
</style>
