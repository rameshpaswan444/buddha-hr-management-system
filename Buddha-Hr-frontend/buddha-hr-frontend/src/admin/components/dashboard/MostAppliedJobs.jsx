function MostAppliedJobs({ jobs }) {
  const maxApplications =
    jobs.length > 0 ? Math.max(...jobs.map((job) => job.applicationCount)) : 1;

  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <h2 className="mb-6 text-xl font-semibold">Most Applied Jobs</h2>

      <div className="space-y-6">
        {jobs.map((job) => {
          const percentage = (job.applicationCount / maxApplications) * 100;

          return (
            <div key={job.jobTitle}>
              <div className="mb-2 flex justify-between">
                <span className="font-medium">{job.jobTitle}</span>

                <span className="text-sm text-gray-500">
                  {job.applicationCount} Applications
                </span>
              </div>

              <div className="h-3 w-full rounded-full bg-gray-200">
                <div
                  className="h-3 rounded-full bg-blue-600 transition-all duration-700"
                  style={{
                    width: `${percentage}%`,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MostAppliedJobs;
