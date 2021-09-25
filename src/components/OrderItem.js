import { Link } from "react-router-dom"

export default function OrderItem({ order }) {
    const { id, subtotal, date_placed, items: {} } = order
    
    return (
        <div>
            <Link to={`/orders/${id}`}>
            <h2>{date_placed}</h2>
            </Link>
            <h3>TOTAL: ${subtotal}</h3>
        </div>
    )
}