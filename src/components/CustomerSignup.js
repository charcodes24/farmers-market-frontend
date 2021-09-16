import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { createCustomer } from "../features/login/loginSlice";

import Loading from "./Loading";

export default function CustomerSignup() {
    const dispatch = useDispatch()
    const [form, setForm] = useState({
    username: "",
    password: "",
    password_confirmation: "",
    });

    function handleInput(e) {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(createCustomer(form))
    }

    return (
      <div>
        <form onSubmit={handleSubmit}>
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
            placeholder="re-type password"
          />
          <button>Sign Up!</button>
          <Link to="/signup_vendor">
            <button>Are you a vendor?</button>
          </Link>
        </form>
      </div>
    );

    


}