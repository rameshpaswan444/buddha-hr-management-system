function RecentApplications({ applications }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Recent Applications</h2>

        <button className="text-sm font-medium text-blue-600 hover:text-blue-800">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b text-left text-sm text-gray-500">
            <tr>
              <th className="pb-3">Applicant</th>
              <th className="pb-3">Job</th>
              <th className="pb-3">Status</th>
              <th className="pb-3">Applied</th>
            </tr>
          </thead>

          <tbody>
            {applications.map((application) => (
              <tr
                key={application.applicationId}
                className="border-b hover:bg-gray-50"
              >
                <td className="py-4 font-medium">
                  {application.applicantName}
                </td>

                <td>{application.jobTitle}</td>

                <td>
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                    {application.status.replaceAll("_", " ")}
                  </span>
                </td>

                <td className="text-gray-500">
                  {new Date(application.appliedAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentApplications;
