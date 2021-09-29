import { useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { createCustomer } from "../features/login/loginSlice";

export default function CustomerSignup() {
    const dispatch = useDispatch()
    const errors = useSelector(state => state.login.errors)
    const [form, setForm] = useState({
    name:"",
    username: "",
    email: "", 
    password: "",
    password_confirmation: "",
    });
  
  console.log(errors)

    function handleInput(e) {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    }
  
  console.log("SIGN UP", form)

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(createCustomer(form))
    }

    return (
      <div>
        <div>
          <form className="signup-form" onSubmit={handleSubmit}>
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
              name="email"
              value={form.email}
              placeholder="email"
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
        {errors.length > 0 ? errors.map((error) => <h3>{error}</h3>) : null}
      </div>
    );

    


}