import { useSelector, useDispatch } from "react-redux";

import { removeItemFromCart, decreaseQuantity } from "../features/cart/cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch()
  const { id, name, price } = item

  function handleDecreaseQuantity() {
    dispatch(decreaseQuantity(id))
  }


    return (
      <div>
        <div>
          <h1 className="col">{name}</h1>
          <h2>Price: {price}</h2>
          <h3>Quantity: {item.quantity}</h3>
        </div>
        <div>
          <button onClick={handleDecreaseQuantity}>{item.quantity === 1 ? "Remove Item" : "Decrease Quantity"}</button>
        </div>
      </div>
    );
}