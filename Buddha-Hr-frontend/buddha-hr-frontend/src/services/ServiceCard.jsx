function ServiceCard({ icon, title, description }) {
  const Icon = icon;

  return (
    <div className="rounded-2xl bg-white p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="mb-5 inline-flex rounded-xl bg-blue-100 p-4">
        <Icon className="text-blue-900" size={34} />
      </div>

      <h3 className="text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-gray-600">
        {description}
      </p>

    </div>
  );
}

export default ServiceCard;