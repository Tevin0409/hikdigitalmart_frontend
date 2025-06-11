export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("getPriceByRole", (product, userRoleId) => {
    const basePrice = product.price;

    if (!product.PricePercentage || !Array.isArray(product.PricePercentage)) {
      return basePrice;
    }

    const roleEntry = [...product.PricePercentage]
      .reverse()
      .find((p) => p.roleId === userRoleId);

    return roleEntry ? (basePrice * roleEntry.percentage) / 100 : basePrice;
  });
});
