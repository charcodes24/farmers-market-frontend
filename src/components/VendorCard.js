import { Link } from "react-router-dom"

export default function VendorCard({ vendor }) {
  const { id, name } = vendor
  
  //CUSTOM STYLING OF CARDS
  const card = {
    width: "12rem",
    height: "12rem",
    fontSize: "24px"
  }


    return (
      <div className="col-sm-4 p-5 card border-light" style={card}>
        <div>
          <Link to={`/vendors/${id}`}>
            <p className="card-title text-center">{name}</p>
          </Link>
        </div>
      </div>
    );
}