import { useEffect, useState } from "react";
import { getCompanies } from "../../services/companyService";

function JobForm({ onSubmit, loading, initialData = {} }) {
  const [companies, setCompanies] = useState([]);

  const [form, setForm] = useState({
    title: initialData.title || "",
    companyId: initialData.companyId || "",
    location: initialData.location || "",
    employmentType: initialData.employmentType || "FULL_TIME",
    category: initialData.category || "IT",
    experience: initialData.experience || "",
    salary: initialData.salary || "",
    vacancies: initialData.vacancies || "",
    deadline: initialData.deadline || "",
    description: initialData.description || "",
    requirements: initialData.requirements || "",
  });

  useEffect(() => {
    loadCompanies();
  }, []);

  const loadCompanies = async () => {
    try {
      const response = await getCompanies();
      setCompanies(response.content);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="title"
        placeholder="Job Title"
        value={form.title}
        onChange={handleChange}
        className="w-full rounded-lg border p-3"
        required
      />

      <select
        name="companyId"
        value={form.companyId}
        onChange={handleChange}
        className="w-full rounded-lg border p-3"
        required
      >
        <option value="">Select Company</option>

        {companies.map((company) => (
          <option key={company.id} value={company.id}>
            {company.name}
          </option>
        ))}
      </select>

      <input
        name="location"
        placeholder="Location"
        value={form.location}
        onChange={handleChange}
        className="w-full rounded-lg border p-3"
        required
      />

      <select
        name="employmentType"
        value={form.employmentType}
        onChange={handleChange}
        className="w-full rounded-lg border p-3"
      >
        <option value="FULL_TIME">Full Time</option>
        <option value="PART_TIME">Part Time</option>
        <option value="CONTRACT">Contract</option>
        <option value="INTERNSHIP">Internship</option>
      </select>

      <select
        name="category"
        value={form.category}
        onChange={handleChange}
        className="w-full rounded-lg border p-3"
      >
        <option value="IT">IT</option>
        <option value="ACCOUNTING">Accounting</option>
        <option value="HR">HR</option>
        <option value="MARKETING">Marketing</option>
        <option value="SALES">Sales</option>
        <option value="CUSTOMER_SERVICE">Customer Service</option>
        <option value="ENGINEERING">Engineering</option>
        <option value="HEALTHCARE">Healthcare</option>
        <option value="EDUCATION">Education</option>
        <option value="OTHER">Other</option>
      </select>

      <input
        name="experience"
        placeholder="Experience (e.g. 2 Years)"
        value={form.experience}
        onChange={handleChange}
        className="w-full rounded-lg border p-3"
      />

      <input
        type="number"
        name="salary"
        placeholder="Salary"
        value={form.salary}
        onChange={handleChange}
        className="w-full rounded-lg border p-3"
      />

      <input
        type="number"
        name="vacancies"
        placeholder="Vacancies"
        value={form.vacancies}
        onChange={handleChange}
        className="w-full rounded-lg border p-3"
      />

      <input
        type="date"
        name="deadline"
        value={form.deadline}
        onChange={handleChange}
        className="w-full rounded-lg border p-3"
      />

      <textarea
        rows={4}
        name="description"
        placeholder="Job Description"
        value={form.description}
        onChange={handleChange}
        className="w-full rounded-lg border p-3"
      />

      <textarea
        rows={4}
        name="requirements"
        placeholder="Requirements"
        value={form.requirements}
        onChange={handleChange}
        className="w-full rounded-lg border p-3"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-blue-900 py-3 text-white hover:bg-blue-800 disabled:opacity-50"
      >
        {loading ? "Saving..." : "Save Job"}
      </button>
    </form>
  );
}

export default JobForm;
