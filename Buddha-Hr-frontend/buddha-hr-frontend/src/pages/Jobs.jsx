import { useEffect, useState } from "react";
import JobCard from "../components/jobs/JobCard";
import JobFilter from "../components/jobs/JobFilter";
import { getJobs } from "../services/jobService";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [filters, setFilters] = useState({
    keyword: "",
    category: "",
    location: "",
    type: "",
  });

  const handleFilterChange = (field, value) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  useEffect(() => {
    fetchJobs();
  }, [filters]);

  const fetchJobs = async () => {
    try {
      setLoading(true);

      const data = await getJobs(0, 9, filters);

      setJobs(data.content);
    } catch (err) {
      console.error(err);

      setError("Unable to load jobs.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p className="py-20 text-center">Loading jobs...</p>;
  }

  if (error) {
    return <p className="py-20 text-center text-red-600">{error}</p>;
  }

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold">Latest Jobs</h1>

          <p className="mt-4 text-gray-600">
            Discover exciting career opportunities across Nepal.
          </p>
        </div>

        <JobFilter filters={filters} onFilterChange={handleFilterChange} />

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {jobs.length > 0 ? (
            jobs.map((job) => <JobCard key={job.id} {...job} />)
          ) : (
            <div className="col-span-full py-16 text-center text-gray-500">
              No jobs found.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Jobs;
