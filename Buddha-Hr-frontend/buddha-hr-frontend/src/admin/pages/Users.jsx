import { useEffect, useMemo, useState } from "react";
import { Search, Pencil, Trash2, Eye } from "lucide-react";
import {
  getUsers,
  updateUser,
  deleteUser,
  updateUserRole,
} from "../../services/userService";
import UserDetailsModal from "../components/UserDetailsModal";
import UserForm from "../components/UserForm";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const [search, setSearch] = useState("");
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response.content);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (id) => {
    const confirmDelete = window.confirm("Delete this user?");

    if (!confirmDelete) return;

    try {
      await deleteUser(id);

      fetchUsers();

      alert("User deleted successfully.");
    } catch (error) {
      console.error(error);

      alert("Unable to delete user.");
    }
  };
  const handleUpdateUser = async (data) => {
    try {
      await updateUser(editingUser.id, data);

      setEditingUser(null);

      fetchUsers();

      alert("User updated successfully.");
    } catch (error) {
      console.error(error);

      alert("Unable to update user.");
    }
  };

  const handleRoleChange = async (userId, role) => {
    try {
      await updateUserRole(userId, role);

      setUsers((prev) =>
        prev.map((user) => (user.id === userId ? { ...user, role } : user)),
      );

      alert("User role updated successfully.");
    } catch (error) {
      console.error(error);

      alert("Unable to update user role.");
    }
  };

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const keyword = search.toLowerCase();

      return (
        `${user.firstName} ${user.lastName}`.toLowerCase().includes(keyword) ||
        user.email.toLowerCase().includes(keyword) ||
        user.phone.includes(keyword) ||
        user.role.toLowerCase().includes(keyword)
      );
    });
  }, [users, search]);

  if (loading) {
    return (
      <div className="p-10 text-center text-gray-500">Loading users...</div>
    );
  }

  return (
    <div>
      {/* Header */}

      <div className="mb-8">
        <h1 className="text-3xl font-bold">Users</h1>

        <p className="text-gray-500">Manage all registered users</p>
      </div>

      {/* Search */}

      <div className="mb-6 flex items-center rounded-lg border bg-white px-4 py-3 shadow-sm">
        <Search size={18} className="text-gray-400" />

        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="ml-3 w-full outline-none"
        />
      </div>

      {/* Table */}

      <div className="overflow-hidden rounded-xl bg-white shadow">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr className="text-left">
              <th className="p-4">Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Status</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.length === 0 ? (
              <tr>
                <td colSpan="6" className="py-8 text-center text-gray-500">
                  No users found.
                </td>
              </tr>
            ) : (
              filteredUsers.map((user) => (
                <tr key={user.id} className="border-t hover:bg-gray-50">
                  <td className="p-4 font-medium">
                    {user.firstName} {user.lastName}
                  </td>

                  <td>{user.email}</td>

                  <td>{user.phone}</td>

                  <td>
                    <select
                      value={user.role}
                      onChange={(e) =>
                        handleRoleChange(user.id, e.target.value)
                      }
                      className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium outline-none focus:border-blue-900"
                    >
                      <option value="ADMIN">ADMIN</option>
                      <option value="STAFF">STAFF</option>
                      <option value="JOB_SEEKER">JOB SEEKER</option>
                    </select>
                  </td>

                  <td>
                    {user.enabled ? (
                      <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                        Active
                      </span>
                    ) : (
                      <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700">
                        Inactive
                      </span>
                    )}
                  </td>

                  <td>
                    <div className="flex justify-center gap-4">
                      <button onClick={() => setSelectedUser(user)}>
                        <Eye
                          size={18}
                          className="text-green-600 hover:text-green-800"
                        />
                      </button>

                      <button onClick={() => setEditingUser(user)}>
                        <Pencil
                          size={18}
                          className="text-blue-600 hover:text-blue-800"
                        />
                      </button>

                      <button onClick={() => handleDeleteUser(user.id)}>
                        <Trash2
                          size={18}
                          className="text-red-600 hover:text-red-800"
                        />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <UserDetailsModal
        user={selectedUser}
        onClose={() => setSelectedUser(null)}
      />

      <UserForm
        user={editingUser}
        onSave={handleUpdateUser}
        onClose={() => setEditingUser(null)}
      />
    </div>
  );
}

export default Users;
