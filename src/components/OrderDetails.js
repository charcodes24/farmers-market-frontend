import { useEffect } from "react"
import { useParams } from "react-router"
import { useSelector, useDispatch } from "react-redux"

export default function OrderDetails() {
    const dispatch = useDispatch()
    const orders = useSelector(state => state.cart.orders)
    const { id } = useParams()

    const thisOrder = orders.find(order => order.id === parseInt(id))
    console.log("THIS ORDER", thisOrder)
    console.log("ITEMS", thisOrder.items)

    const filteredItems = thisOrder.items.reduce((sums, item) => {
        sums[item.name] = (sums[item.name] || 0) + 1;
        return sums
    }, {})
    console.log(filteredItems)

    const itemsArray = Object.entries(filteredItems)
    const displayItems = itemsArray.map(item => {
        return (
          <div>
                <p>Item: {item[0]}</p>
                <p>Quantity: {item[1]}</p>
          </div>
        );
    })
    console.log("DISPLAY ITEMS", displayItems);

    
    return (
      <div>
        <h1>This order was placed on {thisOrder.date_placed}</h1>
        <h3>Order Number: {thisOrder.id}</h3>
        {displayItems}
        <h3>Order Total: ${thisOrder.subtotal}</h3>
            <button>Order Again</button>
      </div>
    );
}