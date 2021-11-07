import { useDispatch } from "react-redux";

import { decreaseQuantity } from "../features/cart/cartSlice";

export default function CartItem({ item }) {
  const { id, name, price } = item;

  //REDUX
  const dispatch = useDispatch()

  function handleDecreaseQuantity() {
    dispatch(decreaseQuantity(id))
  }


    return (
        <div>
          <h6>{name}</h6>
          <p>Price: ${price}</p>
          <p>Quantity: {item.quantity}</p>
          <button type="button" onClick={handleDecreaseQuantity}>
            {item.quantity === 1 ? "Remove Item" : "Decrease Quantity"}
          </button>
        </div>
    );
}