import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import { getOrders } from "../features/cart/cartSlice"

import OrderLink from "./OrderLink"

export default function MyOrders() {
  //REDUX
  const dispatch = useDispatch()
  const customer = useSelector(state => state.login.customer)
  const orders = useSelector(state => state.cart.orders)
  
  useEffect(() => {
    dispatch(getOrders(customer.id))
  }, [dispatch, customer.id]);

  const displayOrders = orders.map(order => <OrderLink key={order.id} order={order}/>)
    
    return (
      <div className="text-center">
        <div >
          {orders.length > 0 ? (
            <h1>My Orders</h1>
          ) : (
            <h3 className="form">You haven't placed any orders yet.</h3>
          )}
        </div>
        <div>
          <div className="row m-5 justify-content-center">{displayOrders}</div>
        </div>
      </div>
    );
}