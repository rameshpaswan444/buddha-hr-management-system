import { useEffect, useState } from "react";
import { Plus, Search, Pencil, Archive, Trash2, RotateCcw } from "lucide-react";

import {
  getAdminJobs,
  getJobs,
  createJob,
  updateJob,
  archiveJob,
  restoreJob,
} from "../../services/jobService";

import JobForm from "../components/JobForm";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [saving, setSaving] = useState(false);

  const [editingJob, setEditingJob] = useState(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await getAdminJobs();

      setJobs(response.content);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveJob = async (job) => {
    try {
      setSaving(true);

      if (editingJob) {
        await updateJob(editingJob.id, job);
      } else {
        await createJob(job);
      }

      await fetchJobs();

      setShowModal(false);

      setEditingJob(null);
    } catch (error) {
      console.error(error);

      alert(error.response?.data?.message ?? "Unable to save job.");
    } finally {
      setSaving(false);
    }
  };

  const handleArchiveJob = async (id) => {
    const confirmArchive = window.confirm(
      "Archive this job?\n\nThe job will no longer appear on the website, but all applications will be preserved.",
    );

    if (!confirmArchive) return;

    try {
      await archiveJob(id);

      fetchJobs();

      alert("Job archived successfully.");
    } catch (error) {
      console.error(error);

      alert(error.response?.data?.message ?? "Unable to archive job.");
    }
  };

  const handleRestoreJob = async (id) => {
    try {
      await restoreJob(id);

      fetchJobs();

      alert("Job restored successfully.");
    } catch (error) {
      console.error(error);

      alert(error.response?.data?.message ?? "Unable to restore job.");
    }
  };

  const openAddModal = () => {
    setEditingJob(null);

    setShowModal(true);
  };

  const openEditModal = (job) => {
    setEditingJob(job);

    setShowModal(true);
  };

  const closeModal = () => {
    setEditingJob(null);

    setShowModal(false);
  };

  if (loading) {
    return <p>Loading jobs...</p>;
  }

  return (
    <div>
      {/* Header */}

      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Jobs</h1>

          <p className="text-gray-500">Manage all job postings</p>
        </div>

        <button
          onClick={openAddModal}
          className="flex items-center gap-2 rounded-lg bg-blue-900 px-5 py-3 text-white hover:bg-blue-800"
        >
          <Plus size={18} />
          Add Job
        </button>
      </div>

      {/* Search */}

      <div className="mb-6 flex items-center rounded-lg border bg-white px-4 py-3">
        <Search size={18} className="text-gray-400" />

        <input
          placeholder="Search job..."
          className="ml-3 w-full outline-none"
        />
      </div>

      {/* Table */}

      <div className="overflow-hidden rounded-xl bg-white shadow">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr className="text-left">
              <th className="p-4">Title</th>
              <th>Company</th>
              <th>Location</th>
              <th>Type</th>
              <th>Category</th>
              <th>Deadline</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {jobs.map((job) => (
              <tr key={job.id} className="border-t hover:bg-gray-50">
                <td className="p-4 font-medium">{job.title}</td>

                <td>{job.companyName}</td>

                <td>{job.location}</td>

                <td>
                  {job.employmentType
                    ?.replaceAll("_", " ")
                    .toLowerCase()
                    .replace(/\b\w/g, (c) => c.toUpperCase())}
                </td>

                <td>{job.category}</td>

                <td>{job.deadline}</td>

                <td>
                  {job.active ? (
                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                      Active
                    </span>
                  ) : (
                    <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700">
                      Archived
                    </span>
                  )}
                </td>

                <td>
                  <div className="flex gap-3">
                    <button onClick={() => openEditModal(job)} title="Edit Job">
                      <Pencil
                        size={18}
                        className="text-blue-600 hover:text-blue-800"
                      />
                    </button>

                    {job.active ? (
                      <button
                        onClick={() => handleDeleteJob(job.id)}
                        title="Archive Job"
                      >
                        <Trash2
                          size={18}
                          className="text-red-600 hover:text-red-800"
                        />
                      </button>
                    ) : (
                      <button
                        onClick={() => handleRestoreJob(job.id)}
                        title="Restore Job"
                      >
                        <RotateCcw
                          size={18}
                          className="text-green-600 hover:text-green-800"
                        />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl bg-white p-8 shadow-xl">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold">
                {editingJob ? "Edit Job" : "Add Job"}
              </h2>

              <button onClick={closeModal} className="text-3xl">
                ×
              </button>
            </div>

            <JobForm
              loading={saving}
              initialData={editingJob || {}}
              onSubmit={handleSaveJob}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Jobs;
