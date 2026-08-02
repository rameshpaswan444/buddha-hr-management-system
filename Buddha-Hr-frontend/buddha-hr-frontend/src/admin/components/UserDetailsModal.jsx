function UserDetailsModal({ user, onClose }) {
  if (!user) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-lg rounded-xl bg-white p-8 shadow-xl">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">User Details</h2>

          <button onClick={onClose} className="text-3xl">
            ×
          </button>
        </div>

        <div className="space-y-5">
          <div>
            <label className="text-sm text-gray-500">Full Name</label>

            <p className="font-medium">
              {user.firstName} {user.lastName}
            </p>
          </div>

          <div>
            <label className="text-sm text-gray-500">Email</label>

            <p>{user.email}</p>
          </div>

          <div>
            <label className="text-sm text-gray-500">Phone</label>

            <p>{user.phone}</p>
          </div>

          <div>
            <label className="text-sm text-gray-500">Role</label>

            <p>{user.role.replaceAll("_", " ")}</p>
          </div>

          <div>
            <label className="text-sm text-gray-500">Address</label>

            <p>{user.address || "-"}</p>
          </div>

          <div>
            <label className="text-sm text-gray-500">Status</label>

            <p>{user.enabled ? "Active" : "Inactive"}</p>
          </div>

          <div>
            <label className="text-sm text-gray-500">Joined</label>

            <p>{new Date(user.createdAt).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetailsModal;
