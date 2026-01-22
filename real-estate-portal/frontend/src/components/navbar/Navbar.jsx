import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        
        <Link to="/" className="text-3xl font-extrabold text-blue-600">
          RealEstatePro
        </Link>

        <div className="hidden md:flex space-x-10 text-lg font-medium">
          <Link to="/" className="hover:text-blue-600 transition">Buy</Link>
          <Link to="/" className="hover:text-blue-600 transition">Rent</Link>
          <Link to="/" className="hover:text-blue-600 transition">Agents</Link>
          <Link to="/" className="hover:text-blue-600 transition">Contact</Link>
        </div>

        <div className="space-x-4">
          <Link to="/login" className="px-5 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition">
            Login
          </Link>
          <Link to="/register" className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
