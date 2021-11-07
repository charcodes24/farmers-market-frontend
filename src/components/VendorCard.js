import { Link } from "react-router-dom"

import "./VendorCard.css";

export default function VendorCard({ vendor }) {
  const { id, name } = vendor

  return (
    <div className="flip-card">
      <Link to={`/vendors/${id}`}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <Link to={`/vendors/${id}`} className="card-link">
            <p>{name}</p>
          </Link>
        </div>
        <div className="flip-card-back">
          <h1>{name}</h1>
        </div>
      </div>
      </Link>
    </div>
  );
}



{/* <Link to={`/vendors/${id}`} className="card-link">
  <p>{name}</p>
</Link>; */}