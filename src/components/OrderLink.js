import { Link } from "react-router-dom"

export default function OrderLink({ order }) {
    const { id, subtotal, date_placed } = order
    
    return (
      <div>
        <div>
          <Link to={`/orders/${id}`}>
            <p>Order #{id}</p>
          </Link>
          <p>Date Placed:</p>
          <p>{date_placed}</p>
          <p>
            <strong>TOTAL: ${subtotal}</strong>
          </p>
        </div>
      </div>
    );
}