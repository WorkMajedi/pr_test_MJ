import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    headers: {
        "Content-Type": "application/json",
    },
});

// Add a request interceptor

api.interceptors.request.use(
    (config) => {
        // Add headers or modify the request config before sending the request
        // For example, add an access token to the headers

        return config;
    },
    (error) => Promise.reject(error),
);

// Add a response interceptor

api.interceptors.response.use(
    (response) => {
        // Do something with the response data
        // For example, hide the spinner

        return response;
    },
    (error) => {
        // Handle HTTP errors
        // For example, show an error message

        if (error?.response?.status === 401) {
            console.error("Unauthorized access");
        } else if (error?.response?.status >= 500) {
            console.error("Server error");
        } else {
            console.error(error?.message);
        }
        return Promise.reject(error);
    },
);

export default api;
