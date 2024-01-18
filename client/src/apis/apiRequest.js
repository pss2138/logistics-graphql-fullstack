import axios from "axios";

const requestInterceptorHandlers = [
  function (config) {
    // TODO : fix retrieving token solution from browser asynStorage
    const token = undefined;

    if (token) {
      config.headers.common["Authorization"] = `Bearer ${token}`;
    }
    // config.headers.common["A"]
    return config;
  },
  function (error) {
    // TODO: Add handleApiError(error)
    return Promise.reject(error);
  },
];

const responseInterceptorHandlers = [
  (response) => {
    if (response.status === 404) {
      console.log("ERROR 404");
    }

    return response.data;
  },

  (error) => {
    // TODO: Add handleApiError(error)
    // console.log("interceptor response >", error);
    // if (error.response?.status === 401) {
    // check if token is expired -> request new token from server
    //     if (isTokenExpired()) await tokenRefresh();

    // retrieve & setup config with updated valid token
    //     const accessToken = getToken();
    //     error.config.headers = {
    //         'Content-Type': 'application/json',
    //         Authorization: `Bearer ${accessToken}`,
    //     };

    //   request again with the error occurred request holding the valid token
    //     const response = await axios.request(error.config);

    //     return response;
    // }
    return Promise.reject(error);
  },
];

const apiRequest = axios.create({
  baseURL: process.env.REACT_APP_SERVER_DOMAIN,
  headers: {
    "Content-Type": "application/json",
    // withCredentials: true,
  },
  timeout: 1000,
});
apiRequest.interceptors.request.use(...requestInterceptorHandlers);
apiRequest.interceptors.response.use(...responseInterceptorHandlers);

export default apiRequest;
// [ how to use ]
// const res = await apiRequest.post('/order', order);
