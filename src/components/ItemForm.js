import { useState } from "react"

import { useSelector, useDispatch } from "react-redux"

import { updateItem } from "../features/item/itemSlice"

export default function ItemForm({ item }) {
    const { name, image_url, price } = item;

    //REDUX
    const dispatch = useDispatch()
    const vendorID = useSelector(state => state.login.vendor.id)

    //STATE
    const [form, setForm] = useState({
        name: "",
        image_url: "",
        price: 0,
        vendor_id: vendorID
    })

    function handleInput(e) {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(updateItem({ id: item.id, form }))
    }


    return (
      <div>
        <form className="update-item" onSubmit={handleSubmit}>
                <input onChange={handleInput} type="text" name="name" value={form.name} placeholder={name}/>
                <input onChange={handleInput} type="text" name="image_url" value={form.image_url} placeholder={image_url}/>
                <input onChange={handleInput} type="number" name="price" value={form.price} placeholder={price} />
                <button className="btn" type="submit">Ok</button>
            </form>
      </div>
    );
}