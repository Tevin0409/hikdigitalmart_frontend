// plugins/formatDate.js

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('formatDate', (value, locale = 'en-GB', options = {}) => {
    if (!value) return '';
    
    const date = new Date(value);

    if (isNaN(date.getTime())) return '';

    return date.toLocaleDateString(locale, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      ...options
    });
  });
});
