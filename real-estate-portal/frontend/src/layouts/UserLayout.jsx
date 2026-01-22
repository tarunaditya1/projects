import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

export default function UserLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="container mt-4">{children}</div>
      <Footer />
    </>
  );
}
