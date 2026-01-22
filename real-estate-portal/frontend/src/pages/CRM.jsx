import Pipeline from "../components/crm/Pipeline";

export default function CRM() {
  return (
    <div className="container mt-4">
      <h3>CRM Pipeline</h3>
      <Pipeline leads={[]} />
    </div>
  );
}
