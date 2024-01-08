import axios from "axios";

const apiRequest = axios.create({
  baseURL: process.env.REACT_APP_GRAPHQL_DOMAIN,
  headers: {
    "Content-Type": "application/json",
    // withCredentials: true,
  },
  timeout: 1000, // 1 second
});

apiRequest.interceptors.request.use(
  function (config) {
    // console.log("interceptor request >", config);
    // TODO : fix retrieving token solution from browser asynStorage
    const token = undefined;

    if (token) {
      config.headers.common["Authorization"] = `Bearer ${token}`;
      // config.headers.common["Authorization"] = `${token}`;
    }
    return config;
  },
  function (error) {
    // console.log("interceptor request >", error);
    // TODO: Add handleApiError(error)
    return Promise.reject(error);
  }
);

apiRequest.interceptors.response.use(
  (response) => {
    if (response.status === 404) {
      console.log("404 페이지로 넘어가야 함!");
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
  }
);

export default apiRequest;
// how to use : const res = await apiRequest.post('/api/board', board);
