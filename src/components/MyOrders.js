import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import { getOrders } from "../features/cart/cartSlice"

import OrderLink from "./OrderLink"
import Loading from "./Loading"

export default function MyOrders() {
  //REDUX
  const dispatch = useDispatch()
  const customer = useSelector(state => state.login.customer)
  const orders = useSelector(state => state.cart.orders)
  const isLoading = useSelector(state => state.cart.isLoading)
  
  useEffect(() => {
    dispatch(getOrders(customer.id))
  }, [dispatch, customer.id]);

  const displayOrders = orders.map(order => <OrderLink key={order.id} order={order}/>)
    
    return isLoading ? (
      <Loading />
    ) : (
      <div>
        <div>
          {orders.length > 0 ? (
            <h1>My Orders</h1>
          ) : (
            <h3>You haven't placed any orders yet.</h3>
          )}
        </div>
        <div>
          <div>{displayOrders}</div>
        </div>
      </div>
    );
}