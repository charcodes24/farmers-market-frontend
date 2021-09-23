
import { addItemToCart } from "../features/cart/cartSlice";

import { useDispatch, useSelector } from "react-redux";

export default function ItemCard({ item }) {
  const dispatch = useDispatch()
  const vendorLoggedIn = useSelector(state => state.login.vendorLoggedIn)
  const vendor = useSelector(state => state.login.vendor)
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
          {(item.vendor_id === vendor.id) ? <button>Update Item</button> : null}
        </div>
      </div>
    );
}