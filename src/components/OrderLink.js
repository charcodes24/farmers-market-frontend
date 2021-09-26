import { Link } from "react-router-dom"

export default function OrderLink({ order }) {
    const { id, subtotal, date_placed } = order
    
    return (
        <div className="col-md-4">
            <Link to={`/orders/${id}`}>
            <p>Order #{id}</p>
            </Link>
            <p>{date_placed}</p>
            <p>TOTAL: ${subtotal}</p>
        </div>
    )
}