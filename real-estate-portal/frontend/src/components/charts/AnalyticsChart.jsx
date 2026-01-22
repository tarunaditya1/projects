import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

export default function AnalyticsChart({ data }) {
  return (
    <LineChart width={400} height={250} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line dataKey="value" />
    </LineChart>
  );
}
