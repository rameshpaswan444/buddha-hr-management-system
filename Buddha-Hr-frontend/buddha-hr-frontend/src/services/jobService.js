import api from "./api";

/**
 * Get all jobs with optional filters
 */
export const getJobs = async (
  page = 0,
  size = 9,
  filters = {},
  sortBy = "createdAt",
  direction = "desc"
) => {

  const response = await api.get("/jobs", {
    params: {
      page,
      size,
      sortBy,
      direction,

      keyword: filters.keyword || undefined,
      category: filters.category || undefined,
      location: filters.location || undefined,
      employmentType: filters.type || undefined,
    },
  });

  return response.data;
};

/**
 * Get single job
 */
export const getJob = async (id) => {

  const response = await api.get(`/jobs/${id}`);

  return response.data;
};

/**
 * Create job
 */
export const createJob = async (job) => {

  const response = await api.post("/jobs", job);

  return response.data;
};

/**
 * Update job
 */
export const updateJob = async (id, job) => {

  const response = await api.put(`/jobs/${id}`, job);

  return response.data;
};

/**
 * Archive (disable) job
 */
export const archiveJob = async (id) => {

  return api.patch(`/jobs/${id}/archive`);

};

/**
 * Restore (enable) job
 */
export const restoreJob = async (id) => {

  return api.patch(`/jobs/${id}/restore`);

};

/**
 * Delete job (if still used)
 */
export const deleteJob = async (id) => {

  return api.delete(`/jobs/${id}`);

};

export const getAdminJobs = async (
    page = 0,
    size = 10,
    sortBy = "createdAt",
    direction = "desc"
) => {

    const response = await api.get("/jobs/admin", {
        params: {
            page,
            size,
            sortBy,
            direction,
        },
    });

    return response.data;
};