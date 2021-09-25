

export default function OrderItem({ order }) {
    const { id, subtotal, date_placed, items: {} } = order
    
    return (
        <div>
            <h2>{date_placed}</h2>
            <h3>TOTAL: ${subtotal}</h3>
        </div>
    )
}