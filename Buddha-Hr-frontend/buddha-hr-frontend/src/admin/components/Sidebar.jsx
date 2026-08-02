import {
  LayoutDashboard,
  Building2,
  BriefcaseBusiness,
  FileText,
  Users,
} from "lucide-react";

import { NavLink } from "react-router-dom";

function Sidebar() {
  const menuItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/admin",
    },
    {
      name: "Companies",
      icon: Building2,
      path: "/admin/companies",
    },
    {
      name: "Jobs",
      icon: BriefcaseBusiness,
      path: "/admin/jobs",
    },
    {
      name: "Applications",
      icon: FileText,
      path: "/admin/applications",
    },
    {
      name: "Users",
      icon: Users,
      path: "/admin/users",
    },
  ];

  return (
    <aside className="h-screen w-64 bg-blue-900 text-white">
      <div className="border-b border-blue-800 p-6">
        <h1 className="text-2xl font-bold">Buddha HR</h1>

        <p className="text-sm text-blue-200">Admin Panel</p>
      </div>

      <nav className="mt-6">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/admin"}
              className={({ isActive }) =>
                `mx-3 mb-2 flex items-center gap-3 rounded-lg px-4 py-3 transition ${
                  isActive ? "bg-white text-blue-900" : "hover:bg-blue-800"
                }`
              }
            >
              <Icon size={20} />

              {item.name}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;
