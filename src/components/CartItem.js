import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { decrementQuantity } from "../features/cart/cartSlice";

export default function CartItem({ item, cart, setCart }) {
  const dispatch = useDispatch()
  const { id, name, image_url, price } = item
  const quantity = useSelector((state) => state.cart.quantity[name].quantity)

  console.log("QUANTITY", quantity)

  function removeItem() {
    if (quantity > 1) {
      dispatch(decrementQuantity(item))
    } else {
      const updatedCart = cart.filter(item => item.id !== id)
      setCart(updatedCart)
    }
  }

    return (
      <div>
        <div>
          <img src={image_url} alt={item.name}/>
        </div>
        <div>
          <h1>{name}</h1>
          <h2>Price: {price}</h2>
          <h3>Quantity: {quantity}</h3>
        </div>
        <div>
          <button onClick={removeItem}>{quantity === 1 ? "Remove Item" : "Decrease Quantity"}</button>
        </div>
      </div>
    );
}