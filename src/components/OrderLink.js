import { Link } from "react-router-dom"

export default function OrderLink({ order }) {
    const { id, subtotal, date_placed } = order
    
    return (
        <div classname="col m-5">
            <Link to={`/orders/${id}`}>
            <p>Order #{id}</p>
            </Link>
            <p>{date_placed}</p>
            <p><strong>TOTAL: ${subtotal}</strong></p>
        </div>
    )
}