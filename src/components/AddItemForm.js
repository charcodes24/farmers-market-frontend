import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addItem } from "../features/item/itemSlice";

export default function AddItmForm() {
    const dispatch = useDispatch()
    const vendor = useSelector(state => state.login.vendor)
    //REACT STATE 
    const [form, setForm] = useState({
      name: "",
      image_url: "",
        price: 0,
      vendor_id: vendor.id
    });

    function handleInput(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(addItem(form))
    }


    return (
      <div className="add-item">
        <form className="add-itemform" onSubmit={handleSubmit}>
                <input
                onChange={handleInput} 
                type="text" 
                value={form.name} 
                name="name" 
                placeholder="name" 
                />
                <input
                onChange={handleInput} 
                type="text" 
                value={form.image_url} 
                name="image_url" 
                placeholder="image url" 
                />
                <input
                onChange={handleInput} 
                type="number" 
                value={form.price} 
                name="price" 
                placeholder="price" 
                />
          <button type="submit">OK</button>
        </form>
      </div>
    );
}