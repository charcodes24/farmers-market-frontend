import { useSelector } from "react-redux"


export default function MyOrders() {
    const orders = useSelector(state => state.cart.orders)

    console.log(orders[orders.length -1].created_at)
    return <h1>My Orders</h1>
}