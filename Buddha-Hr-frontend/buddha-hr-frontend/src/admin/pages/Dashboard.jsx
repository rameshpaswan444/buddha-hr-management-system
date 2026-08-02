import { Building2, BriefcaseBusiness, FileText, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { getDashboard } from "../../services/dashboardService";
import MonthlyRecruitmentChart from "../components/dashboard/MonthlyRecruitmentChart";
import RecentApplications from "../components/dashboard/RecentApplications";
import RecentUsers from "../components/dashboard/RecentUsers";
import MostAppliedJobs from "../components/dashboard/MostAppliedJobs";
import ApplicationStatusChart from "../components/dashboard/ApplicationStatusChart";
import QuickActions from "../components/dashboard/QuickActions";
import LatestActivity from "../components/dashboard/LatestActivity";

function Dashboard() {
  const [dashboard, setDashboard] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const response = await getDashboard();

      setDashboard(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h2>Loading dashboard...</h2>;
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>

        <p className="text-gray-500">Welcome to Buddha HR Admin Panel</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-xl bg-white p-6 shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Companies</p>
              <h2 className="mt-2 text-4xl font-bold text-blue-700">
                {dashboard.summary.totalCompanies}
              </h2>
            </div>

            <div className="rounded-full bg-blue-100 p-4">
              <Building2 size={28} className="text-blue-700" />
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Jobs</p>
              <h2 className="mt-2 text-4xl font-bold text-green-600">
                {dashboard.summary.totalJobs}
              </h2>
            </div>

            <div className="rounded-full bg-green-100 p-4">
              <BriefcaseBusiness size={28} className="text-green-600" />
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Applications</p>
              <h2 className="mt-2 text-4xl font-bold text-orange-600">
                {dashboard.summary.totalApplications}
              </h2>
            </div>

            <div className="rounded-full bg-orange-100 p-4">
              <FileText size={28} className="text-orange-600" />
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Users</p>
              <h2 className="mt-2 text-4xl font-bold text-purple-700">
                {dashboard.summary.totalUsers}
              </h2>
            </div>

            <div className="rounded-full bg-purple-100 p-4">
              <Users size={28} className="text-purple-700" />
            </div>
          </div>
        </div>
      </div>

      <QuickActions />

      {/* Charts Section */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Monthly Recruitment */}
        <MonthlyRecruitmentChart data={dashboard.monthlyRecruitment} />

        {/* Application Status */}

        <ApplicationStatusChart status={dashboard.applicationStatus} />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <RecentApplications applications={dashboard.recentApplications} />

        <RecentUsers users={dashboard.recentUsers} />

        <div className="mt-6">
          <MostAppliedJobs jobs={dashboard.mostAppliedJobs} />
        </div>

        <div className="mt-6">
          <LatestActivity
            applications={dashboard.recentApplications}
            users={dashboard.recentUsers}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
