import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const COLORS = [
  "#2563EB",
  "#F59E0B",
  "#8B5CF6",
  "#0EA5E9",
  "#10B981",
  "#EF4444",
];

function ApplicationStatusChart({ status }) {
  const data = [
    {
      name: "Applied",
      value: status.applied,
    },
    {
      name: "Under Review",
      value: status.underReview,
    },
    {
      name: "Shortlisted",
      value: status.shortlisted,
    },
    {
      name: "Interview",
      value: status.interviewScheduled,
    },
    {
      name: "Selected",
      value: status.selected,
    },
    {
      name: "Rejected",
      value: status.rejected,
    },
  ].filter((item) => item.value > 0);

  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <h2 className="mb-6 text-xl font-semibold">Application Status</h2>

      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={70}
            outerRadius={110}
            paddingAngle={3}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip />

          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ApplicationStatusChart;
