import { useDispatch, useSelector } from "react-redux";

import { clearCart, createOrder } from "../features/cart/cartSlice";

import CartItem from "./CartItem"

export default function Cart({ cart, setCart }) {
  const dispatch = useDispatch()
  const customer = useSelector(state => state.login.customer)
  const total = useSelector(state => state.cart.total)

  console.log("CART", cart)

  const displayCart = cart.map(item => <CartItem key={item.id} item={item} cart={cart} setCart={setCart} />)
  
  const cartIds = cart.map(item => item.id)

  console.log(cartIds)
    
    function handleClearCart() {
      setCart([])
      dispatch(clearCart())
    }
  
  function handlePlaceOrder() {
    debugger
    dispatch(createOrder({customer_id: customer.id, total, item_ids: cartIds}))
  }


    return (
      <div>
        <div>
                <button onClick={handleClearCart}>Clear Cart</button>
        </div>
        <div>
          {displayCart}
        </div>
        <div>
          <h2>Total: {total}</h2>
        </div>
        <div>
            <button onClick={handlePlaceOrder}>Place Order</button>
        </div>
      </div>
    );
}