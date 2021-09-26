import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { userLogin } from "../features/login/loginSlice";

import Loading from "./Loading";

export default function Login() {
  //DISPATCH ACTIONS FROM REDUX STORE
  const dispatch = useDispatch();

  //REDUX STORE
  const cartItems = useSelector(state => state.cart.cartItems)
  const isLoading = useSelector(state => state.login.isLoading)
  const hasError = useSelector(state => state.login.hasError)
  const errors = useSelector(state => state.login.errors)

  //LOCAL STATEFUL VARIABLE
  const [form, setForm] = useState({
      username: "",
      password: ""
  })


    function handleInput(e) {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    }

    function handleSubmit(e) {
        e.preventDefault()
      dispatch(userLogin(form))
    }

    {
      return isLoading ? (
        <Loading />
      ) : (
        <div className="login">
          <form className="login-form" onSubmit={handleSubmit}>
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
            <button>Log-In!</button>
          </form>
          {cartItems.length > 0 ? (
            <h3>Please sign in to place an order!</h3>
          ) : null}
          <p>
            Don't have an account?{" "}
            <Link to="/signup_customer">Sign-up here!</Link>
          </p>
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
}