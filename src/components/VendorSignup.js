import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { createVendor } from "../features/login/loginSlice";


export default function VendorSignup() {
  const dispatch = useDispatch()
  const errors = useSelector(state => state.login.errors)
    const [form, setForm] = useState({
      name: "",
      description: "",
      email: "",
      username: "",
      password: "",
      password_confirmation: "",
      is_vendor: true,
    });
  
  console.log(errors.length)

    function handleInput(e) {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    }
  
  console.log("VENDOR SIGNUP", form)

    function handleSubmit(e) {
      e.preventDefault()
      debugger
        dispatch(createVendor(form))
    }


    return (
      <div>
        <div className="signup">
          <form onSubmit={handleSubmit} className="container">
            <input
              className="row"
              onChange={handleInput}
              type="text"
              name="name"
              value={form.name}
              placeholder="name"
            />
            <textarea
              className="row"
              onChange={handleInput}
              type="text"
              name="description"
              value={form.description}
              placeholder="description"
            />
            <input
              className="row"
              onChange={handleInput}
              type="text"
              name="email"
              value={form.email}
              placeholder="email"
            />
            <input
              className="row"
              onChange={handleInput}
              type="text"
              name="username"
              value={form.username}
              placeholder="username"
            />
            <input
              className="row"
              onChange={handleInput}
              type="text"
              name="password"
              value={form.password}
              placeholder="password"
            />
            <input
              className="row"
              onChange={handleInput}
              type="text"
              name="password_confirmation"
              value={form.password_confirmation}
              placeholder="password confirmation"
            />
            <button type="submit" className="btn">
              Sign Up!
            </button>
          </form>
        </div>
        <div>
          {errors.length > 0 ? errors.map((error) => <h3>{error}</h3>) : null}
        </div>
      </div>
    );
}