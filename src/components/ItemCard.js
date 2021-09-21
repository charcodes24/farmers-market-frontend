
import { incrementQuantity } from "../features/cart/cartSlice";

import { useDispatch } from "react-redux";

export default function ItemCard({ item, cart, setCart }) {
  const dispatch = useDispatch()
  const { id, name, image_url, price } = item
  
  function addToCart(item) {
    const existingItem = cart.find(item => item.id === id)
    if (existingItem) {
      dispatch(incrementQuantity(item))
    } else {
      setCart((mostUpdatedCart) => [...mostUpdatedCart, item]);
      dispatch(incrementQuantity(item))
    }
  }

    

    return (
      <div>
        <div>
          <img src={image_url} alt={name}/>
        </div>
        <div>
          <h3>{name}</h3>
          <h4>${price}</h4>
          {/* {vendorLoggedIn ? <button>Update Item</button> : <button onClick={addToCart}>Add</button>} */}
          <button onClick={() => addToCart(item)}>Add</button>
        </div>
      </div>
    );
}