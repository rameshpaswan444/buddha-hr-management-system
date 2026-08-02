import { MapPin, Briefcase, CircleDollarSign } from "lucide-react";
import { Link } from "react-router-dom";

function JobCard({ id, title, company, location, employmentType, salary }) {
  return (
    <div className="rounded-2xl border bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>

      <p className="mt-2 font-semibold text-blue-900">{company}</p>

      <div className="mt-5 space-y-3 text-gray-600">
        <div className="mt-6 space-y-4">
          <div className="flex items-center gap-3 text-gray-600">
            <MapPin size={18} className="text-blue-900" />

            <span>{location}</span>
          </div>

          <div className="flex items-center gap-3 text-gray-600">
            <Briefcase size={18} className="text-blue-900" />

            <span>
              {employmentType
                ?.replaceAll("_", " ")
                .toLowerCase()
                .replace(/\b\w/g, (c) => c.toUpperCase())}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <CircleDollarSign size={18} className="text-green-600" />

            <span className="font-semibold text-green-600">
              NPR {Number(salary).toLocaleString()} / month
            </span>
          </div>
        </div>
      </div>

      <Link
        to={`/jobs/${id}`}
        className="mt-6 inline-block rounded-lg bg-blue-900 px-5 py-3 font-semibold text-white hover:bg-blue-800"
      >
        View Details
      </Link>
    </div>
  );
}

export default JobCard;
