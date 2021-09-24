import { useState } from "react"

export default function ItemForm({ item }) {
    const { name, image_url, price } = item
    const [form, setForm] = useState({
        name: "",
        image_url: "",
        price: price
    })

    function handleInput(e) {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    console.log("FORM", form)

    return (
      <div>
        <form>
                <input onChange={handleInput} type="text" name="name" value={form.name} placeholder={name}/>
                <input onChange={handleInput} type="text" name="image_url" value={form.image_url} placeholder={image_url}/>
                <input onChange={handleInput} type="number" price="price" value={form.price} placeholder={price} />
                <button type="submit">Ok</button>
        </form>
      </div>
    );
}