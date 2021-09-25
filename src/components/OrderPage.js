import { useEffect } from "react"
import { useParams } from "react-router"
import { useSelector, useDispatch } from "react-redux"

export default function OrderPage() {
    const dispatch = useDispatch()
    const orders = useSelector(state => state.cart.orders)
    const { id } = useParams()

    const thisOrder = orders.filter(order => order.id === parseInt(id))
    
    console.log("THIS ORDER", thisOrder)
    console.log("ORDER PAGE ID", id)
    console.log("ORDERS", orders)
    
    return <h1>Order Page</h1>
}