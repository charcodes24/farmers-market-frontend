import { useState } from "react"
import { useHistory } from "react-router"
import { useDispatch, useSelector } from "react-redux"

import { createVendor } from "../features/login/loginSlice";


export default function VendorSignup() {
    const dispatch = useDispatch()
    const [form, setForm] = useState({
      name: "",
      description: "",
      username: "",
      password: "",
      password_confirmation: "",
      is_vendor: true,
    });

    function handleInput(e) {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(createVendor(form))
    }


    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleInput}
            type="text"
            name="name"
            value={form.name}
            placeholder="name"
          />
          <textarea
            onChange={handleInput}
            type="text"
            name="description"
            value={form.description}
            placeholder="description"
          />
          <input
            onChange={handleInput}
            type="text"
            name="username"
            value={form.username}
            placeholder="username"
          />
          <input
            onChange={handleInput}
            type="text"
            name="password"
            value={form.password}
            placeholder="password"
          />
          <input
            onChange={handleInput}
            type="text"
            name="password_confirmation"
            value={form.password_confirmation}
            placeholder="password confirmation"
          />
          <button>Sign Up!</button>
        </form>
      </div>
    );
}