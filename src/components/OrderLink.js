import { Link } from "react-router-dom"

export default function OrderLink({ order }) {
    const { id, subtotal, date_placed } = order
    
    return (
      <div className="col-sm-6 col-md-4 col-lg-3 p-5 card border-light">
        <div classname="row">
          <Link to={`/orders/${id}`}>
            <p>Order #{id}</p>
          </Link>
          <p>{date_placed}</p>
          <p>
            <strong>TOTAL: ${subtotal}</strong>
          </p>
        </div>
      </div>
    );
}