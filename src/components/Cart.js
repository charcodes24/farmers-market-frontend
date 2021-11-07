import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { clearCart, createOrder } from "../features/cart/cartSlice";

import CartItem from "./CartItem"

export default function Cart() {
  //USEHISTORY HOOK
  const history = useHistory();

  //REDUX
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const customer = useSelector((state) => state.login.customer);
  const total = useSelector((state) => state.cart.total);

  //DISPLAYING ITEMS
  const displayCart = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  //LOGIC FOR ITERATING AND CREATING AN ARRAY WITH EVERY INSTANCE OF AN ITEM'S QUANTITY TO SEND FOR CREATE ORDER
  function cartIds(array) {
    let ids = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i].quantity > 0) {
        for (let j = 0; j < array[i].quantity; j++) {
          ids.push(array[i].id);
        }
      } else {
        ids.push(array[i].id);
      }
    }
    return ids;
  }

  function handleClearCart() {
    dispatch(clearCart());
  }

  function handlePlaceOrder() {
    if (customer.name) {
      dispatch(
        createOrder({
          customer_id: customer.id,
          total,
          item_ids: cartIds(cartItems),
        })
      );
      history.push("/myorders")
      dispatch(clearCart());
    } else {
      history.push("/login");
    }
  }

  return (
    <div>
      {cartItems.length > 0 ? (
        <div>
          <div>
            <h1>Your Cart:</h1>
          </div>
          <div>{displayCart}</div>
          <div>
            <h2>Total: ${total}</h2>
          </div>
          <div>
            <button type="submit" onClick={handlePlaceOrder}>
              Place Order
            </button>
            <button type="button" onClick={handleClearCart}>
              Clear Cart
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h3>Your cart is empty.</h3>
        </div>
      )}
    </div>
  );
}