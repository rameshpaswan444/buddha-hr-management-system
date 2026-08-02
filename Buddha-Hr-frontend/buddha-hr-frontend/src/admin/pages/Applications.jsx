import { useEffect, useState } from "react";
import { Search, FileText } from "lucide-react";

import {
  getApplications,
  updateApplicationStatus,
} from "../../services/applicationService";

function Applications() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const data = await getApplications();
      setApplications(data);
    } catch (error) {
      console.error(error);
      alert("Unable to load applications.");
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      await updateApplicationStatus(id, status);
      fetchApplications();
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ?? "Unable to update application status.",
      );
    }
  };

  const badgeColor = (status) => {
    switch (status) {
      case "APPLIED":
        return "bg-yellow-100 text-yellow-700";

      case "UNDER_REVIEW":
        return "bg-blue-100 text-blue-700";

      case "SHORTLISTED":
        return "bg-green-100 text-green-700";

      case "INTERVIEW_SCHEDULED":
        return "bg-indigo-100 text-indigo-700";

      case "SELECTED":
        return "bg-emerald-100 text-emerald-700";

      case "REJECTED":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  if (loading) {
    return <p>Loading applications...</p>;
  }

  return (
    <div>
      {/* Header */}

      <div className="mb-8">
        <h1 className="text-3xl font-bold">Applications</h1>

        <p className="text-gray-500">Manage all job applications</p>
      </div>

      {/* Search */}

      <div className="mb-6 flex items-center rounded-lg border bg-white px-4 py-3">
        <Search size={18} className="text-gray-400" />

        <input
          placeholder="Search applicant..."
          className="ml-3 w-full outline-none"
        />
      </div>

      {/* Table */}

      <div className="overflow-hidden rounded-xl bg-white shadow">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr className="text-left">
              <th className="p-4">Applicant</th>

              <th>Email</th>

              <th>Job</th>

              <th>Resume</th>

              <th>Status</th>

              <th>Change Status</th>
            </tr>
          </thead>

          <tbody>
            {applications.map((application) => (
              <tr key={application.id} className="border-t hover:bg-gray-50">
                <td className="p-4 font-medium">{application.applicantName}</td>

                <td>{application.applicantEmail}</td>

                <td>{application.jobTitle}</td>

                <td>
                  {console.log(application.resumePath)}

                  <a
                    href={`http://localhost:8080/${application.resumePath.replace(/^\/+/, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2 text-blue-700 hover:bg-blue-100"
                  >
                    <FileText size={16} />
                    Resume
                  </a>
                </td>

                <td>
                  <span
                    className={`rounded-full px-3 py-1 text-sm ${badgeColor(
                      application.status,
                    )}`}
                  >
                    {application.status.replaceAll("_", " ")}
                  </span>
                </td>

                <td>
                  <select
                    value={application.status}
                    onChange={(e) =>
                      handleStatusChange(application.id, e.target.value)
                    }
                    className="rounded-lg border px-3 py-2"
                  >
                    <option value="APPLIED">Applied</option>

                    <option value="UNDER_REVIEW">Under Review</option>

                    <option value="SHORTLISTED">Shortlisted</option>

                    <option value="INTERVIEW_SCHEDULED">
                      Interview Scheduled
                    </option>

                    <option value="SELECTED">Selected</option>

                    <option value="REJECTED">Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Applications;
