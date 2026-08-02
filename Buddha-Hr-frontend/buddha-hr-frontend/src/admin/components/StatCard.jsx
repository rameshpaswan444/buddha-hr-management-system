function StatCard({ title, value, icon, color }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500">{title}</p>

          <h2 className="mt-2 text-3xl font-bold">{value}</h2>
        </div>

        <div className={`rounded-xl p-4 ${color}`}>{icon}</div>
      </div>
    </div>
  );
}

export default StatCard;
