import { MapPin, Briefcase, Clock } from "lucide-react";
import { Link } from "react-router-dom";

function JobCard({
  id,
  title,
  company,
  companyName,
  location,
  type,
  employmentType,
  salary,
}) {
  const token = localStorage.getItem("token");

  return (
    <div className="rounded-2xl border bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>

      <p className="mt-2 font-semibold text-blue-900">
        {companyName || company}
      </p>

      <div className="mt-5 space-y-3 text-gray-600">
        <div className="flex items-center gap-2">
          <MapPin size={18} />
          {location}
        </div>

        <div className="flex items-center gap-2">
          <Briefcase size={18} />
          {(employmentType || type)?.replaceAll("_", " ")}
        </div>

        <div className="flex items-center gap-2">
          <Clock size={18} />
          NPR {Number(salary).toLocaleString()}
        </div>
      </div>

      <Link
        to={token ? `/jobs/${id}` : "/login"}
        className="mt-6 block w-full rounded-xl bg-blue-900 py-3 text-center font-semibold text-white transition hover:bg-blue-800"
      >
        View Details
      </Link>
    </div>
  );
}

export default JobCard;
