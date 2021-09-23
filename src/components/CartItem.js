import { useSelector, useDispatch } from "react-redux";

import { removeItemFromCart } from "../features/cart/cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch()
  const { id, name, price } = item


  function removeItem() {
    dispatch(removeItemFromCart(item))
  }


    return (
      <div className="cart-card">
        <div>
          <h1>{name}</h1>
          <h2>Price: {price}</h2>
          <h3>Quantity: {item.quantity}</h3>
        </div>
        <div>
          {/* <button onClick={removeItem}>{item.quantity === 1 ? "Remove Item" : "Decrease Quantity"}</button> */}
          <button onClick={removeItem}>Remove Item</button>
        </div>
      </div>
    );
}