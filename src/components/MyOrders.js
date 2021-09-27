import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import { getOrders } from "../features/cart/cartSlice"

import OrderItem from "./OrderLink"

export default function MyOrders() {
  const dispatch = useDispatch()
  const customer = useSelector(state => state.login.customer)
  const orders = useSelector(state => state.cart.orders)

  console.log(orders)
  
  useEffect(() => {
    dispatch(getOrders(customer.id))
  }, [dispatch, customer.id]);

  const displayOrders = orders.map(order => <OrderItem key={order.id} order={order}/>)
    
    return (
      <div className="container mt-5">
        <div className="row">
          {orders.length > 0 ? (
            <h1>My Orders</h1>
          ) : (
            <h3>You haven't placed any orders yet.</h3>
          )}
        </div>
        <div className="row">{displayOrders}</div>
      </div>
    );
}