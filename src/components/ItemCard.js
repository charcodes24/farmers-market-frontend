import { useState } from "react";

import { addItemToCart } from "../features/cart/cartSlice";

import { useDispatch, useSelector } from "react-redux";

import ItemForm from "./ItemForm";

export default function ItemCard({ item }) {
  const dispatch = useDispatch()
  const vendorLoggedIn = useSelector(state => state.login.vendorLoggedIn)
  const vendor = useSelector(state => state.login.vendor)
  const { id, name, image_url, price } = item

  //STATE
  const [toggleForm, setToggleForm] = useState(false)

  function addToCart(item) {
    dispatch(addItemToCart(item))
  }

  function handleToggleForm() {
    setToggleForm(!toggleForm)
  }

    

    return (
      <div className="item-card">
        <img className="image-card" src={image_url} alt={name} />
        <div className="item-text">
          <h3>{name}</h3>
          <h4>${price}</h4>
          {!vendorLoggedIn ? (
            <button onClick={() => addToCart(item)}>Add</button>
          ) : null}
          {item.vendor_id === vendor.id ? (
            <button onClick={() => handleToggleForm()}>Update Item</button>
          ) : null}
        </div>
        {toggleForm ? <ItemForm item={item} /> : null}
      </div>
    );
}