import { Link, useParams, Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  MapPin,
  Briefcase,
  CircleDollarSign,
  CalendarDays,
  Users,
} from "lucide-react";
import { getJob } from "../services/jobService";

function JobDetails() {
  const { id } = useParams();

  const location = useLocation();

  const token = localStorage.getItem("token");

  // Redirect to Login if not authenticated
  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchJob();
  }, [id]);

  const fetchJob = async () => {
    try {
      const data = await getJob(id);
      setJob(data);
    } catch (err) {
      console.error(err);
      setError("Unable to load job.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="px-6 py-20">
        <div className="text-center text-lg">Loading job details...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="px-6 py-20">
        <div className="text-center text-red-600">{error}</div>
      </section>
    );
  }

  return (
    <section className="bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-5xl rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="text-4xl font-bold">{job.title}</h1>

        <p className="mt-2 text-xl font-semibold text-blue-900">
          {job.companyName}
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="flex items-center gap-3">
            <MapPin className="text-blue-900" />
            <span>{job.location}</span>
          </div>

          <div className="flex items-center gap-3">
            <Briefcase className="text-blue-900" />
            <span>
              {job.employmentType
                ?.replaceAll("_", " ")
                .toLowerCase()
                .replace(/\b\w/g, (c) => c.toUpperCase())}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <CircleDollarSign className="text-green-600" />
            <span className="font-semibold text-green-600">
              NPR {Number(job.salary).toLocaleString()} / month
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Users className="text-blue-900" />
            <span>{job.vacancies} Vacancies</span>
          </div>

          <div className="flex items-center gap-3">
            <CalendarDays className="text-blue-900" />
            <span>Deadline: {new Date(job.deadline).toLocaleDateString()}</span>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold">Job Description</h2>

          <p className="mt-4 whitespace-pre-line text-gray-700">
            {job.description}
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold">Requirements</h2>

          <p className="mt-4 whitespace-pre-line text-gray-700">
            {job.requirements}
          </p>
        </div>

        <Link
          to={`/jobs/${id}/apply`}
          className="mt-10 inline-block rounded-xl bg-blue-900 px-8 py-3 font-semibold text-white transition hover:bg-blue-800"
        >
          Apply Now
        </Link>
      </div>
    </section>
  );
}

export default JobDetails;
