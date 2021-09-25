import { Link } from "react-router-dom"

export default function OrderCard({ order }) {
    const { id, subtotal, date_placed } = order
    
    return (
        <div>
            <Link to={`/orders/${id}`}>
            <h2>{date_placed}</h2>
            </Link>
            <h3>TOTAL: ${subtotal}</h3>
        </div>
    )
}