import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import { getOrders } from "../features/cart/cartSlice"

export default function MyOrders() {
  const dispatch = useDispatch()
  const customer = useSelector(state => state.login.customer)
  const orders = useSelector(state => state.cart.orders)

  console.log(orders)
  
  useEffect(() => {
    dispatch(getOrders(customer.id))
  }, []);

    const displayOrders = orders.map(order => order.items.map(item => {
        return (
          <div className="order-items">
            <img className="image-order" src={item.image_url} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        );
    }))
    
    return (
      <div className="orders-container">
        <div>
          <h1>My Orders</h1>
            </div>
            <div>
                {displayOrders}
            </div>
      </div>
    );
}