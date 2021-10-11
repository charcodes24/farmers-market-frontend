import { useState } from "react"

import { useSelector, useDispatch } from "react-redux"

import { updateItem } from "../features/item/itemSlice"

export default function ItemForm({ item }) {
    const hasError = useSelector(state => state.item.hasError)
    const errors = useSelector(state => state.item.errors)
    const { id, name, image_url, price } = item;

    //REDUX
    const dispatch = useDispatch()
    const vendorID = useSelector(state => state.login.vendor.id)

    //STATE
    const [form, setForm] = useState({
        id: id,
        name: "",
        image_url: "",
        price: 0,
        vendor_id: vendorID
    })

    console.log(form)

    function handleInput(e) {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(updateItem({ id: item.id, form, item }))
    }


    return (
      <div>
        <form className="update-item" onSubmit={handleSubmit}>
          <input
            onChange={handleInput}
            type="text"
            name="name"
            value={form.name}
            placeholder={name}
          />
          <input
            onChange={handleInput}
            type="text"
            name="image_url"
            value={form.image_url}
            placeholder={image_url}
          />
          <input
            onChange={handleInput}
            type="number"
            name="price"
            value={form.price}
            placeholder={price}
          />
          <button className="btn" type="submit">
            Ok
          </button>
        </form>
        {hasError ? (
          <div className="alert">
            <h3>Please fix the following:</h3>
            {errors.map((error) => (
              <p>{error}</p>
            ))}
          </div>
        ) : null}
      </div>
    );
}