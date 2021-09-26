import { Link } from "react-router-dom"

export default function VendorCard({ vendor }) {
    const { id, name } = vendor


    return (
      <div className="col-md-3 p-5 justify-content-center">
        <div className="p-card p-4rounded px-3">
          <Link to={`/vendors/${id}`}>
            <p>{name}</p>
          </Link>
        </div>
      </div>
    );
}