import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const userStore = useUserStore();
  const router = useRouter();

  const axiosInstance = axios.create({
    baseURL: "https://hickdigitalmart-backend.onrender.com/api",
    headers: {
      "Content-Type": "application/json",
    },
  });

  let isRefreshing = false;
  let refreshSubscribers = [];

  const onRefreshed = (token) => {
  // console.log("token", token)

    refreshSubscribers.forEach((callback) => callback(token));
    refreshSubscribers = [];
  };

  axiosInstance.interceptors.request.use(
    (config) => {
      let accessToken = userStore.accessToken;
      let accessTokenExpiresAt = userStore.accessTokenExpiresAt;

      if (accessToken && new Date(accessTokenExpiresAt) < new Date()) {

        if (!isRefreshing) {
          isRefreshing = true;

          return axios
            .post(`https://hickdigitalmart-backend.onrender.com/api/auth/refresh`, {
              id: userStore.user.id,
              refreshToken: userStore.refreshToken,
            })
            .then((response) => {
              userStore.setTokens(response.data);
              isRefreshing = false;
              onRefreshed(response.data.accessToken);
              config.headers.Authorization = `Bearer ${response.data.accessToken}`;
              return config;
            })
            .catch((error) => {
              isRefreshing = false;
              userStore.logout();
              router.push("/auth");
              return Promise.reject(error);
            });
        }

        return new Promise((resolve) => {
          refreshSubscribers.push((token) => {
            config.headers.Authorization = `Bearer ${token}`;
            resolve(config);
          });
        });
      }

      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }

      return config;
    },
    (error) => Promise.reject(error)
  );

  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      // if (error.response?.status === 401) {
      //   userStore.logout();
      //   router.push("/auth");
      // }
      return Promise.reject(error);
    }
  );

  return {
    provide: {
      axios: axiosInstance,
    },
  };
});
