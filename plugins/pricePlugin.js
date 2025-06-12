// plugins/getProductPrice.js

import { USER_ROLES } from "@/constants/user.js";
import { useUserStore } from "@/stores/auth";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("getProductPrice", (item) => {
    const userStore = useUserStore();
    const user = userStore.user;

    let price = item.originalPrice || 0;

    if (user && user.role && user.role.name) {
      const userRole = user.role.name;

      if (userRole === USER_ROLES.TECHNICIAN.name) {
        price = item.originalPrice;
      } else if (
        userRole === USER_ROLES.USER.name ||
        userRole === USER_ROLES.WHOLESALER.name
      ) {
        price = item.roleAdjustedPrice || item.originalPrice || 0;
      } else {
        price = item.roleAdjustedPrice || item.originalPrice || 0;
      }
    }

    // Format the price using the other plugin
    const formatted = nuxtApp.$formatPrice(price);
    return `Ksh ${formatted}`;
  });
});
