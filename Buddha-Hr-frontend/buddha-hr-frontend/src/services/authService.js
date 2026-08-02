import api from "./api";

export const login = async (credentials) => {
    const response = await api.post("/auth/login", credentials);
    return response.data;
};

export const register = async (user) => {
    const response = await api.post("/users/register", user);
    return response.data;
};

export const forgotPassword = async (data) => {

    const response = await api.post(
        "/auth/forgot-password",
        data
    );

    return response.data;

};

export const resetPassword = async (data) => {

    const response = await api.post(
        "/auth/reset-password",
        data
    );

    return response.data;

};