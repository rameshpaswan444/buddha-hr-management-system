import api from "./api";

export const getUsers = async (
  page = 0,
  size = 10,
  sortBy = "createdAt",
  direction = "desc"
) => {

  const response = await api.get("/users", {
    params: {
      page,
      size,
      sortBy,
      direction,
    },
  });

  return response.data;
};

export const getUser = async (id) => {

  const response = await api.get(`/users/${id}`);

  return response.data;
};

export const updateUser = async (
  id,
  data
) => {

  const response = await api.put(
    `/users/${id}`,
    data
  );

  return response.data;
};

export const deleteUser = async (id) => {

  await api.delete(`/users/${id}`);
};

export const updateUserRole = async (id, role) => {

  const response = await api.patch(
    `/users/${id}/role`,
    {
      role,
    }
  );

  return response.data;

};