import { useEffect, useState } from "react";
import { Plus, Search, Pencil, Trash2 } from "lucide-react";

import {
  getCompanies,
  createCompany,
  updateCompany,
  deleteCompany,
} from "../../services/companyService";

import CompanyForm from "../components/CompanyForm";

function Companies() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [saving, setSaving] = useState(false);

  const [editingCompany, setEditingCompany] = useState(null);

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
      const response = await getCompanies();
      setCompanies(response.content);
    } catch (error) {
      console.error(error);
      alert("Unable to load companies.");
    } finally {
      setLoading(false);
    }
  };

  const handleSaveCompany = async (formData) => {
    try {
      setSaving(true);

      if (editingCompany) {
        await updateCompany(editingCompany.id, formData);
        alert("Company updated successfully.");
      } else {
        await createCompany(formData);
        alert("Company created successfully.");
      }

      await fetchCompanies();

      closeModal();
    } catch (error) {
      console.error(error);

      alert(
        editingCompany
          ? "Unable to update company."
          : "Unable to create company.",
      );
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteCompany = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this company?",
    );

    if (!confirmDelete) return;

    try {
      await deleteCompany(id);

      alert("Company deleted successfully.");

      fetchCompanies();
    } catch (error) {
      console.error(error);

      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Unable to delete company.");
      }
    }
  };

  const openAddModal = () => {
    setEditingCompany(null);
    setShowModal(true);
  };

  const openEditModal = (company) => {
    setEditingCompany(company);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingCompany(null);
  };

  if (loading) {
    return <div className="p-8 text-center text-lg">Loading companies...</div>;
  }

  return (
    <>
      {/* Header */}

      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Companies</h1>

          <p className="text-gray-500">Manage all registered companies</p>
        </div>

        <button
          type="button"
          onClick={openAddModal}
          className="flex items-center gap-2 rounded-lg bg-blue-900 px-5 py-3 text-white hover:bg-blue-800"
        >
          <Plus size={18} />
          Add Company
        </button>
      </div>

      {/* Search */}

      <div className="mb-6 flex items-center rounded-lg border bg-white px-4 py-3">
        <Search size={18} className="text-gray-400" />

        <input
          type="text"
          placeholder="Search company..."
          className="ml-3 w-full outline-none"
        />
      </div>

      {/* Table */}

      <div className="overflow-hidden rounded-xl bg-white shadow">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr className="text-left">
              <th className="p-4">Logo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Status</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {companies.length > 0 ? (
              companies.map((company) => (
                <tr key={company.id} className="border-t hover:bg-gray-50">
                  <td className="p-4">
                    {company.logoUrl ? (
                      <img
                        src={`http://localhost:8080${company.logoUrl}`}
                        alt={company.name}
                        className="h-12 w-12 rounded-lg object-cover"
                      />
                    ) : (
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-200 text-xs text-gray-500">
                        No Logo
                      </div>
                    )}
                  </td>

                  <td>{company.name}</td>

                  <td>{company.email}</td>

                  <td>{company.phone}</td>

                  <td>
                    {company.active ? (
                      <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                        Active
                      </span>
                    ) : (
                      <span className="rounded-full bg-red-100 px-3 py-1 text-sm text-red-700">
                        Inactive
                      </span>
                    )}
                  </td>

                  <td>
                    <div className="flex justify-center gap-4">
                      <button
                        type="button"
                        onClick={() => openEditModal(company)}
                      >
                        <Pencil
                          size={18}
                          className="text-blue-600 hover:text-blue-800"
                        />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDeleteCompany(company.id)}
                      >
                        <Trash2
                          size={18}
                          className="text-red-600 hover:text-red-800"
                        />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="py-10 text-center text-gray-500">
                  No companies found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-2xl rounded-xl bg-white p-8 shadow-xl">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold">
                {editingCompany ? "Edit Company" : "Add Company"}
              </h2>

              <button type="button" onClick={closeModal} className="text-3xl">
                ×
              </button>
            </div>

            <CompanyForm
              loading={saving}
              initialData={editingCompany || {}}
              onSubmit={handleSaveCompany}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Companies;
