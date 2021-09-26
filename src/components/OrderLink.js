import { Link } from "react-router-dom"

export default function OrderLink({ order }) {
    const { id, subtotal, date_placed } = order
    
    return (
        <div className="order-link">
            <Link to={`/orders/${id}`}>
            <h2>Order #{id}</h2>
            </Link>
            <h4>{date_placed}</h4>
            <h4>TOTAL: ${subtotal}</h4>
        </div>
    )
}