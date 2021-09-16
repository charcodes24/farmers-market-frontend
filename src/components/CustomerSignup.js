import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { createCustomer } from "../features/login/loginSlice";

import Loading from "./Loading";

export default function CustomerSignup() {
    const dispatch = useDispatch()
    const hasError = useSelector(state => state.login.hasError)
    const errors = useSelector(state => state.login.errors)
    const [form, setForm] = useState({
        name:"",
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
        <div>
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleInput}
              type="text"
              name="name"
              value={form.name}
              placeholder="name"
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
              placeholder="re-type password"
            />
            <button>Sign Up!</button>
            <Link to="/signup_vendor">
              <p>Are you a vendor?</p>
            </Link>
          </form>
        </div>
        {hasError ? (
          <div>
            {errors.map((error) => (
              <h3>{error}</h3>
            ))}
          </div>
        ) : null}
      </div>
    );

    


}