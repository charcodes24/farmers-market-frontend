import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { createCustomer, clearErrors } from "../features/login/loginSlice";

export default function CustomerSignup() {
  //REDUX
  const dispatch = useDispatch()
  const errors = useSelector(state => state.login.errors)
  const hasError = useSelector(state => state.login.hasError)
  
  //STATE
    const [form, setForm] = useState({
    name:"",
    username: "",
    email: "", 
    password: "",
    password_confirmation: "",
    });

    function handleInput(e) {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    }
  
  useEffect(() => {
    return function () {
      dispatch(clearErrors());
    }
  }, []);

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
            <button className="btn">Sign Up!</button>
            <p className="link">
              Are you a vendor? Sign-up <Link to="/signup_vendor">here.</Link>
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