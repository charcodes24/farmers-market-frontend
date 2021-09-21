import { useDispatch } from "react-redux";

import { clearCart } from "../features/cart/cartSlice";

import CartItem from "./CartItem"

export default function Cart({ cart, setCart, quantity }) {
  const dispatch = useDispatch()

    const displayCart = cart.map(item => <CartItem key={item.id} item={item} cart={cart} setCart={setCart}/>)
    
    function handleClearCart() {
      setCart([])
      dispatch(clearCart())
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
          <h2>Total: </h2>
        </div>
        <div>
            <button>Place Order</button>
        </div>
      </div>
    );
}