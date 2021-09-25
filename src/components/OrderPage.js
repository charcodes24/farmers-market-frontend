import { useEffect } from "react"
import { useParams } from "react-router"
import { useSelector, useDispatch } from "react-redux"

export default function OrderPage() {
    const dispatch = useDispatch()
    const orders = useSelector(state => state.cart.orders)
    const { id } = useParams()

    const thisOrder = orders.find(order => order.id === parseInt(id))
    console.log("THIS ORDER", thisOrder)
    console.log("ITEMS", thisOrder.items)

    const removeDups = new Set();
    const filteredItems = thisOrder.items.filter((item) => {
        const dup = removeDups.has(item.id)
        removeDups.add(item.id)
        return !dup
    })

    console.log("REMOVE DUPS", removeDups)
    
    return (
        <div>
            <h1>This order was placed on {thisOrder.date_placed}</h1>
            <h3>Order Total: ${thisOrder.subtotal}</h3>
            <h3>Order Items: </h3>
            <button>Order Again</button>
        </div>
    )
}