import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { decrementQuantity } from "../features/cart/cartSlice";

export default function CartItem({ item, cart, setCart }) {
  const dispatch = useDispatch()
    const { id, name, image_url, price } = item
  const quantity = useSelector((state) => state.cart.quantity[name])

  function removeItem() {
    if (quantity > 1) {
      dispatch(decrementQuantity(item))
    } else {
      const updatedCart = cart.filter(item => item.id !== id)
      setCart(updatedCart)
    }
  }
    
  console.log("QUANTITY", quantity)
    return (
      <div>
        <div>
          <img src={image_url} />
        </div>
        <div>
          <h1>{name}</h1>
          <h2>Price: {price}</h2>
          <h3>Quantity: {quantity}</h3>
        </div>
        <div>
            <button onClick={removeItem}>Remove Item</button>
        </div>
      </div>
    );
}