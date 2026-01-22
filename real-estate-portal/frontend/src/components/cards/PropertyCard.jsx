import { Link } from "react-router-dom";

export default function PropertyCard({ property }) {
  return (
    <div className="card shadow-sm">
      <img src={property.image} className="card-img-top" alt="" />
      <div className="card-body">
        <h5>{property.title}</h5>
        <p>₹ {property.price}</p>
        <Link to={`/property/${property._id}`} className="btn btn-primary">
          View
        </Link>
      </div>
    </div>
  );
}
