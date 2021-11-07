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
      <div style={card}>
        <div>
          <Link to={`/vendors/${id}`}>
            <p>{name}</p>
          </Link>
        </div>
      </div>
    );
}