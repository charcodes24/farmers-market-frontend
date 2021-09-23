import { useDispatch, useSelector } from "react-redux";

import { clearCart, createOrder } from "../features/cart/cartSlice";

import CartItem from "./CartItem"

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const customer = useSelector((state) => state.login.customer);
  const total = useSelector((state) => state.cart.total);

  console.log("CARTITEMS", cartItems)

  //DISPLAYING ITEMS 
  const displayCart = cartItems.map(item => <CartItem key={item.id} item={item} />)

  //LOGIC FOR ITERATING AND CREATING AN ARRAY WITH EVERY INSTANCE OF AN ITEM'S QUANTITY TO SEND FOR CREATE ORDER
  function cartIds(array) {
    let ids = []
    for (let i = 0; i < array.length; i++) {
      if (array[i].quantity > 0) {
        for (let j = 0; j < array[i].quantity; j++) {
          ids.push(array[i].id)
        }
      } else {
        ids.push(array[i].id)
      }
    }
    return ids
  }
  
  console.log("HIIII" ,cartIds(cartItems));

  function handleClearCart() {
    dispatch(clearCart());
  }

  function handlePlaceOrder() {
    dispatch(
      createOrder({ customer_id: customer.id, total, item_ids: cartIds(cartItems) })
    );
    // dispatch(clearCart())
  }

  return (
    <div>
      <div>
        <button onClick={handleClearCart}>Clear Cart</button>
      </div>
      <div className="cart-items">{displayCart}</div>
      <div>
        <h2>Total: {total}</h2>
      </div>
      <div>
        <button onClick={handlePlaceOrder}>Place Order</button>
      </div>
    </div>
  );
}