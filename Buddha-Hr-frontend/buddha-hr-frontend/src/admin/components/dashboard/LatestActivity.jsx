import { FileText, UserPlus } from "lucide-react";

function LatestActivity({ applications, users }) {
  const activities = [
    ...applications.map((application) => ({
      id: `application-${application.applicationId}`,
      type: "application",
      title: `${application.applicantName} applied for ${application.jobTitle}`,
      date: application.appliedAt,
    })),

    ...users.map((user) => ({
      id: `user-${user.id}`,
      type: "user",
      title: `${user.fullName} registered`,
      date: user.registeredAt,
    })),
  ]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 8);

  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <h2 className="mb-6 text-xl font-semibold">Latest Activity</h2>

      <div className="space-y-5">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-4">
            <div
              className={`rounded-full p-3 ${
                activity.type === "application" ? "bg-blue-100" : "bg-green-100"
              }`}
            >
              {activity.type === "application" ? (
                <FileText size={18} className="text-blue-700" />
              ) : (
                <UserPlus size={18} className="text-green-700" />
              )}
            </div>

            <div>
              <p className="font-medium">{activity.title}</p>

              <p className="text-sm text-gray-500">
                {new Date(activity.date).toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestActivity;
