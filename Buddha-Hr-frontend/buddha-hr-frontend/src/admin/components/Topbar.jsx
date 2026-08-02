import { Bell, UserCircle, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Topbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    if (!window.confirm("Are you sure you want to logout?")) {
      return;
    }

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    localStorage.clear();

    navigate("/login", { replace: true });
  };

  return (
    <header className="flex items-center justify-between border-b bg-white px-8 py-5 shadow-sm">
      {/* Left */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>

        <p className="text-gray-500">
          Welcome to Buddha Human Resource Admin Panel
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">
        {/* Notification */}
        <Bell
          className="cursor-pointer text-gray-600 hover:text-blue-700"
          size={22}
        />

        {/* User Info */}
        <div className="flex items-center gap-3">
          <UserCircle size={40} className="text-blue-700" />

          <div>
            <p className="font-semibold">
              {user?.firstName} {user?.lastName}
            </p>

            <p className="text-sm text-gray-500">
              {user?.role?.replace("_", " ")}
            </p>
          </div>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </header>
  );
}

export default Topbar;
