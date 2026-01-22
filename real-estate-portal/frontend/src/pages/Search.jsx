import { useState } from "react";
import { searchProperty } from "../api/property.api";
import PropertyCard from "../components/cards/PropertyCard";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const search = async () => {
    const res = await searchProperty(`q=${query}`);
    setResults(res.data);
  };

  return (
    <div className="container mt-4">
      <h3>Search Properties</h3>
      <input className="form-control mb-2" placeholder="Search by city or type"
        onChange={(e)=>setQuery(e.target.value)} />
      <button className="btn btn-primary" onClick={search}>Search</button>

      <div className="row mt-3">
        {results.map(p => (
          <div className="col-md-4" key={p._id}>
            <PropertyCard property={p} />
          </div>
        ))}
      </div>
    </div>
  );
}
