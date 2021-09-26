import { useSelector, useDispatch } from "react-redux";

import { removeItemFromCart, decreaseQuantity } from "../features/cart/cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch()
  const { id, name, price } = item

  function handleDecreaseQuantity() {
    dispatch(decreaseQuantity(id))
  }


    return (
        <div className="col-4 justify-content-center">
          <h6>{name}</h6>
          <p>Price: {price}</p>
          <p>Quantity: {item.quantity}</p>
          <button className="btn" type="button" onClick={handleDecreaseQuantity}>
            {item.quantity === 1 ? "Remove Item" : "Decrease Quantity"}
          </button>
        </div>
    );
}