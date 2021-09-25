import { useState } from "react"

import { useSelector, useDispatch } from "react-redux"

import { updateItem } from "../features/item/itemSlice"

export default function ItemForm({ item }) {
    const dispatch = useDispatch()
    const vendorID = useSelector(state => state.login.vendor.id)
    const { name, image_url, price } = item
    const [form, setForm] = useState({
        name: "",
        image_url: "",
        price: 0,
        vendor_id: vendorID
    })

    console.log("VENDOR ID", vendorID)
    function handleInput(e) {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    console.log("FORM", form)

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(updateItem({ id: item.id, form }))
    }


    return (
      <div>
        <form onSubmit={handleSubmit}>
                <input onChange={handleInput} type="text" name="name" value={form.name} placeholder={name}/>
                <input onChange={handleInput} type="text" name="image_url" value={form.image_url} placeholder={image_url}/>
                <input onChange={handleInput} type="number" price="price" value={form.price} placeholder={price} />
                <button type="submit">Ok</button>
            </form>
      </div>
    );
}