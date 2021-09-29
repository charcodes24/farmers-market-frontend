import { Link } from "react-router-dom"

export default function OrderLink({ order }) {
    const { id, subtotal, date_placed } = order
    
    return (
        <div className="card col-4 p-4 text-center">
            <Link to={`/orders/${id}`}>
            <p>Order #{id}</p>
            </Link>
            <p>{date_placed}</p>
            <p><strong>TOTAL: ${subtotal}</strong></p>
        </div>
    )
}