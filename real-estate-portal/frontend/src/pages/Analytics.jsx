import AnalyticsChart from "../components/charts/AnalyticsChart";

export default function Analytics() {
  const data = [
    { name: "Jan", value: 100 },
    { name: "Feb", value: 200 }
  ];

  return (
    <div className="container mt-4">
      <h3>Analytics</h3>
      <AnalyticsChart data={data} />
    </div>
  );
}
