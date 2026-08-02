// import axios from "axios";

// const api = axios.create({
//     baseURL: "http://localhost:8080/api",
// });

// api.interceptors.request.use((config) => {

//     const token = localStorage.getItem("token");

//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;

// });

// export default api;


import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080/api",
});

// Attach JWT to every request
api.interceptors.request.use((config) => {

    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;

});

// Handle expired token / unauthorized responses
api.interceptors.response.use(

    (response) => response,

    (error) => {

        if (error.response?.status === 401) {

            localStorage.removeItem("token");

            localStorage.removeItem("user");

            // Avoid infinite redirect loop if already on login page
            if (window.location.pathname !== "/login") {

                window.location.href =
                    "/login?sessionExpired=true";

            }

        }

        return Promise.reject(error);

    }

);

export default api;