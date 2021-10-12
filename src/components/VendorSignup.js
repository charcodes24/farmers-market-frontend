import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"

import { createVendor, clearErrors } from "../features/login/loginSlice";


export default function VendorSignup() {
  const dispatch = useDispatch()
  const hasError = useSelector(state => state.login.hasError)
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
      if (e.target.name === "name") {
        setForm({
          ...form,
          [e.target.name]: e.target.value
            .split(" ")
            .map(
              (word) =>
                word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
            )
            .join(" "),
        });
      } else {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
      }
    }
  
  useEffect(() => {
    return function () {
      dispatch(clearErrors())
    }
  }, [dispatch]);

    function handleSubmit(e) {
      e.preventDefault()
        dispatch(createVendor(form))
    }


    return (
      <div>
        <div>
          <form className="signup-vendor" onSubmit={handleSubmit}>
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
              placeholder="Shop description..."
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
              name="username"
              value={form.username}
              placeholder="username"
            />
            <input
              onChange={handleInput}
              type="password"
              name="password"
              value={form.password}
              placeholder="password"
            />
            <input
              onChange={handleInput}
              type="password"
              name="password_confirmation"
              value={form.password_confirmation}
              placeholder="password confirmation"
            />
            <button type="submit" className="btn signup">
              Sign Up!
            </button>
            <p className="link">
              Are you a customer? Sign-up{" "}
              <Link to="/signup_customer">here.</Link>
            </p>
          </form>
        </div>
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