import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPropertyById } from "../api/property.api";
import MapView from "../components/maps/MapView";

export default function PropertyDetails() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    getPropertyById(id).then(res => setProperty(res.data));
  }, [id]);

  if (!property) return "Loading...";

  return (
    <div className="container mt-4">
      <h2>{property.title}</h2>
      <p>₹ {property.price}</p>
      <p>{property.description}</p>
      <MapView lat={property.lat} lng={property.lng} />
    </div>
  );
}
