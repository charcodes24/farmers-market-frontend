import { Link } from "react-router-dom"

import "./VendorCard.css";

export default function VendorCard({ vendor }) {
  const { id, name, description } = vendor

  return (
    <div className="flip-card">
      <Link to={`/vendors/${id}`}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
            {name}
        </div>
        <div className="flip-card-back">
          <p className="card-description">{description}</p>
        </div>
      </div>
      </Link>
    </div>
  );
}



{/* <Link to={`/vendors/${id}`} className="card-link">
  <p>{name}</p>
</Link>; */}