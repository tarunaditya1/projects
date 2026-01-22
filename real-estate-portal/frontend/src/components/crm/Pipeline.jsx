export default function Pipeline({ leads }) {
  return (
    <div className="row">
      {leads.map((lead) => (
        <div className="col-md-3" key={lead._id}>
          <div className="card p-3 mb-3">
            <h6>{lead.name}</h6>
            <p>{lead.stage}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
