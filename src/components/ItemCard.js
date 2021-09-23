
import { addItemToCart } from "../features/cart/cartSlice";

import { useDispatch, useSelector } from "react-redux";

export default function ItemCard({ item }) {
  const dispatch = useDispatch()
  const vendorLoggedIn = useSelector(state => state.login.vendorLoggedIn)
  const { id, name, image_url, price } = item

  function addToCart(item) {
    dispatch(addItemToCart(item))
  }

    

    return (
      <div>
        <div>
          <img src={image_url} alt={name}/>
        </div>
        <div>
          <h3>{name}</h3>
          <h4>${price}</h4>
          {!vendorLoggedIn ? <button onClick={() => addToCart(item)}>Add</button> : null}
        </div>
      </div>
    );
}