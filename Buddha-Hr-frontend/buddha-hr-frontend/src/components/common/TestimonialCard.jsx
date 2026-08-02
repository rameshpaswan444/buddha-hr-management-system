import { Star } from "lucide-react";

function TestimonialCard({ name, country, message, image }) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-200 hover:shadow-xl transition duration-300">
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="h-16 w-16 rounded-full object-cover"
        />

        <div>
          <h3 className="font-bold text-lg">{name}</h3>

          <p className="text-gray-500">Working in {country}</p>
        </div>
      </div>

      <div className="flex gap-1 mt-5 text-yellow-500">
        <Star fill="currentColor" size={18} />
        <Star fill="currentColor" size={18} />
        <Star fill="currentColor" size={18} />
        <Star fill="currentColor" size={18} />
        <Star fill="currentColor" size={18} />
      </div>

      <p className="mt-5 text-gray-600 leading-7">"{message}"</p>
    </div>
  );
}

export default TestimonialCard;
