export default function AdminLayout({ children }) {
  return (
    <div className="d-flex">
      <aside className="bg-primary text-light p-3" style={{width:"250px"}}>
        <h5>Admin Panel</h5>
        <p>Users</p>
        <p>Properties</p>
        <p>Analytics</p>
      </aside>
      <main className="flex-fill p-4">{children}</main>
    </div>
  );
}
