function SectionTitle({ subtitle, title, description }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <p className="text-blue-700 font-semibold uppercase tracking-wider">
        {subtitle}
      </p>

      <h2 className="text-4xl font-bold mt-3 text-gray-900">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-gray-600 leading-8">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;