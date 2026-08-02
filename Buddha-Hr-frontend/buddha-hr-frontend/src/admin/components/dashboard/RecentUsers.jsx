function RecentUsers({ users }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Recent Users</h2>

        <button className="text-sm font-medium text-blue-600 hover:text-blue-800">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b text-left text-sm text-gray-500">
            <tr>
              <th className="pb-3">Name</th>
              <th className="pb-3">Role</th>
              <th className="pb-3">Joined</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b hover:bg-gray-50">
                <td className="py-4">
                  <div>
                    <p className="font-medium">{user.fullName}</p>

                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                </td>

                <td>
                  <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">
                    {user.role.replaceAll("_", " ")}
                  </span>
                </td>

                <td className="text-gray-500">
                  {new Date(user.registeredAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentUsers;
