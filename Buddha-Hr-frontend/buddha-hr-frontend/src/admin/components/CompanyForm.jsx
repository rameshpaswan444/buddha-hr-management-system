import { useEffect, useState } from "react";

function CompanyForm({ onSubmit, loading, initialData = {} }) {
  const [form, setForm] = useState({
    name: "",
    website: "",
    email: "",
    phone: "",
    address: "",
    description: "",
  });

  const [logo, setLogo] = useState(null);

  useEffect(() => {
    setForm({
      name: initialData?.name || "",
      website: initialData?.website || "",
      email: initialData?.email || "",
      phone: initialData?.phone || "",
      address: initialData?.address || "",
      description: initialData?.description || "",
    });

    setLogo(null);
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });

    if (logo) {
      formData.append("logo", logo);
    }

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        placeholder="Company Name"
        value={form.name}
        onChange={handleChange}
        className="w-full rounded-lg border p-3"
        required
      />

      <input
        name="website"
        placeholder="Website"
        value={form.website}
        onChange={handleChange}
        className="w-full rounded-lg border p-3"
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="w-full rounded-lg border p-3"
        required
      />

      <input
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
        className="w-full rounded-lg border p-3"
      />

      <input
        name="address"
        placeholder="Address"
        value={form.address}
        onChange={handleChange}
        className="w-full rounded-lg border p-3"
      />

      <textarea
        rows={4}
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        className="w-full rounded-lg border p-3"
      />

      <div>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setLogo(e.target.files[0])}
        />

        {initialData?.logoUrl && (
          <img
            src={`http://localhost:8080${initialData.logoUrl}`}
            alt={initialData.name}
            className="mt-3 h-16 w-16 rounded-lg object-cover"
          />
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-blue-900 py-3 text-white hover:bg-blue-800 disabled:opacity-50"
      >
        {loading ? "Saving..." : "Save Company"}
      </button>
    </form>
  );
}

export default CompanyForm;
