function JobFilter({
  filters = {
    keyword: "",
    category: "",
    location: "",
    type: "",
  },
  onFilterChange = () => {},
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <input
        type="text"
        placeholder="Search jobs..."
        value={filters.keyword}
        onChange={(e) => onFilterChange("keyword", e.target.value)}
        className="rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-900"
      />

      <select
        value={filters.category}
        onChange={(e) => onFilterChange("category", e.target.value)}
        className="rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-900"
      >
        <option value="">All Categories</option>
        <option value="HELPER">Helper</option>
        <option value="SUPERVISOR">Supervisor</option>
        <option value="ACCOUNTANT">Accountant</option>
        <option value="FITTER">Fitter</option>
        <option value="TECHNICIAN">Technician</option>
        <option value="OPERATOR">Operator</option>
        <option value="IT">IT</option>
        <option value="HR">HR</option>
        <option value="FINANCE">Finance</option>
        <option value="MARKETING">Marketing</option>
      </select>

      <select
        value={filters.location}
        onChange={(e) => onFilterChange("location", e.target.value)}
        className="rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-900"
      >
        <option value="">All Locations</option>
        <option>Nawalparasi</option>
        <option>Palpa</option>
        <option>Rupandehi</option>
        <option>Chitwan</option>
        <option>Kapilbastu</option>
        <option>Kathmandu</option>
        <option>Lalitpur</option>
        <option>Pokhara</option>
        <option>Biratnagar</option>
      </select>

      <select
        value={filters.type}
        onChange={(e) => onFilterChange("type", e.target.value)}
        className="rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-900"
      >
        <option value="">Job Type</option>
        <option value="FULL_TIME">Full Time</option>
        <option value="PART_TIME">Part Time</option>
        <option value="REMOTE">Remote</option>
        <option value="CONTRACT">Contract</option>
      </select>
    </div>
  );
}

export default JobFilter;
