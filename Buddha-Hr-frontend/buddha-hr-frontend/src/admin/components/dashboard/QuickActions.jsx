import { Building2, BriefcaseBusiness, FileText, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

function QuickActions() {
  const navigate = useNavigate();

  const actions = [
    {
      title: "Add Company",
      icon: Building2,
      color: "bg-blue-100 text-blue-700",
      action: () => navigate("/admin/companies"),
    },
    {
      title: "Post Job",
      icon: BriefcaseBusiness,
      color: "bg-green-100 text-green-700",
      action: () => navigate("/admin/jobs"),
    },
    {
      title: "Applications",
      icon: FileText,
      color: "bg-orange-100 text-orange-700",
      action: () => navigate("/admin/applications"),
    },
    {
      title: "Users",
      icon: Users,
      color: "bg-purple-100 text-purple-700",
      action: () => navigate("/admin/users"),
    },
  ];

  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <h2 className="mb-6 text-xl font-semibold">Quick Actions</h2>

      <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
        {actions.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              onClick={item.action}
              className="rounded-xl border p-5 transition hover:-translate-y-1 hover:border-blue-600 hover:shadow-lg"
            >
              <div
                className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full ${item.color}`}
              >
                <Icon size={28} />
              </div>

              <p className="font-medium">{item.title}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default QuickActions;
