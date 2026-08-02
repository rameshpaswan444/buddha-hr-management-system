import api from "./api";

export const getApplications = async () => {

  const response = await api.get("/applications");

  return response.data;

};

export const getApplication = async (id) => {

  const response = await api.get(`/applications/${id}`);

  return response.data;

};

export const updateApplicationStatus = async (
  id,
  status
) => {

  const response = await api.patch(
    `/applications/${id}/status`,
    null,
    {
      params: {
        status,
      },
    }
  );

  return response.data;

};

export const applyJob = async (formData) => {
  const response = await api.post("/applications", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};