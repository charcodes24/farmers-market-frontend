import { useState } from "react";

import { addItemToCart } from "../features/cart/cartSlice";

import { useDispatch, useSelector } from "react-redux";

import ItemForm from "./ItemForm";

export default function ItemCard({ item }) {
  const dispatch = useDispatch()
  const vendorLoggedIn = useSelector(state => state.login.vendorLoggedIn)
  const vendor = useSelector(state => state.login.vendor)
  const { id, name, image_url, price } = item

  function addToCart(item) {
    dispatch(addItemToCart(item))
  }

    

    return (
      <div className="col-md-4">
        <img src={image_url} alt={name} />
        <div>
          <h3>{name}</h3>
          <h4>${price}</h4>
          {!vendorLoggedIn ? (
            <button onClick={() => addToCart(item)} className="btn">
              Add
            </button>
          ) : null}
          {item.vendor_id === vendor.id ? (
            <button
              className="btn"
              type="button"
              data-toggle="collapse"
              data-target={"#update" + id}
              aria-expanded="false"
              aria-controls="updateItem"
            >
              Update Item
            </button>
          ) : null}
        </div>
        <div class="collapse" id={"update" + id}>
          <ItemForm item={item} />
        </div>
      </div>
    );
}