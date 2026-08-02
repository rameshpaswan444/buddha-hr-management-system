import api from "./api";

export const getCompanies = async (
  page = 0,
  size = 10,
  sortBy = "name",
  direction = "asc"
) => {
  const response = await api.get("/companies", {
    params: {
      page,
      size,
      sortBy,
      direction,
    },
  });

  return response.data;
};

export const getCompany = async (id) => {
  const response = await api.get(`/companies/${id}`);
  return response.data;
};

export const createCompany = async (formData) => {
  const response = await api.post("/companies", formData);

  return response.data;
};

export const updateCompany = async (id, formData) => {
  const response = await api.put(`/companies/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export const deleteCompany = async (id) => {

  const response = await api.delete(`/companies/${id}`);

  return response.data;

};

export const searchCompanies = async (keyword) => {
  const response = await api.get("/companies/search", {
    params: { keyword },
  });

  return response.data;
};



