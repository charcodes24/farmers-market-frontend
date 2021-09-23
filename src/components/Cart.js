import { useDispatch, useSelector } from "react-redux";

import { clearCart, createOrder } from "../features/cart/cartSlice";

import CartItem from "./CartItem"

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const customer = useSelector((state) => state.login.customer);
  const total = useSelector((state) => state.cart.total);

  console.log("CARTITEMS", cartItems);

  const removeDups = new Set();

  const filteredCart = cartItems.filter((el) => {
    const duplicate = removeDups.has(el.id);
    removeDups.add(el.id);
    return !duplicate;
  });

  console.log("FILTEREDCART", filteredCart);

  const displayCart = filteredCart.map(item => <CartItem key={item.id} item={item} />)

  const cartIds = cartItems.map((item) => item.id);

  console.log(cartIds)

  function handleClearCart() {
    dispatch(clearCart());
  }

  function handlePlaceOrder() {
    dispatch(
      createOrder({ customer_id: customer.id, total, item_ids: cartIds })
    );
    // dispatch(clearCart())
  }

  return (
    <div>
      <div>
        <button onClick={handleClearCart}>Clear Cart</button>
      </div>
      <div>{displayCart}</div>
      <div>
        <h2>Total: {total}</h2>
      </div>
      <div>
        <button onClick={handlePlaceOrder}>Place Order</button>
      </div>
    </div>
  );
}