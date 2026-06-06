import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { semester: 1, sgpa: 8.7, cgpa: 8.7 },
  { semester: 2, sgpa: 9.7, cgpa: 9.2 },
  { semester: 3, sgpa: 9.0, cgpa: 9.1 },
  { semester: 4, sgpa: 9.2, cgpa: 9.1 },
  { semester: 5, sgpa: 8.9, cgpa: 9.0 },
  { semester: 6, sgpa: 9.2, cgpa: 9.0 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload || payload.length === 0) return null;

  return (
    <div className="chart-tooltip">
      <div className="tooltip-sem">Semester {label}</div>
      <div className="tooltip-cgpa">cgpa : {payload[1].value}</div>
      <div className="tooltip-sgpa">sgpa : {payload[0].value}</div>
    </div>
  );
};

export default function GradeChart() {
  return (
    <div className="graph-card">
      <h3>Grade Progression</h3>

      <div className="legend">
        <span className="sgpa">● SGPA</span>
        <span className="cgpa">● CGPA</span>
      </div>

      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#222" />

          {/* ✅ FIXED */}
          <XAxis dataKey="semester" stroke="#aaa" />
          <YAxis domain={[8, 10]} stroke="#aaa" />

          {/* ✅ CUSTOM TOOLTIP USED */}
          <Tooltip content={<CustomTooltip />} />

          <Line
            type="monotone"
            dataKey="sgpa"
            stroke="#6ee7a8"
            strokeWidth={3}
            dot={{ r: 4 }}
          />

          <Line
            type="monotone"
            dataKey="cgpa"
            stroke="#60a5fa"
            strokeWidth={3}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
