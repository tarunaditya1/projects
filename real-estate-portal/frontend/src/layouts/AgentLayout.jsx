export default function AgentLayout({ children }) {
  return (
    <div className="d-flex">
      <aside className="bg-dark text-light p-3" style={{width:"250px"}}>
        <h5>Agent Panel</h5>
        <p>Dashboard</p>
        <p>Leads</p>
        <p>Properties</p>
      </aside>
      <main className="flex-fill p-4">{children}</main>
    </div>
  );
}
