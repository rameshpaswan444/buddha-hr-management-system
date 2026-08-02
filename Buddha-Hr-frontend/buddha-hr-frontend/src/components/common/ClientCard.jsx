function ClientCard({ logo, name }) {
  return (
    <div className="group flex h-50 items-center justify-center rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <img
        src={logo}
        alt={name}
        className="max-h-50 object-contain grayscale transition duration-300 group-hover:grayscale-0"
      />
    </div>
  );
}

export default ClientCard;