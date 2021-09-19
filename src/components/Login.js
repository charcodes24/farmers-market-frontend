import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";

import { userLogin } from "../features/login/loginSlice";

import Loading from "./Loading";

export default function Login() {
    const isLoading = useSelector(state => state.login.isLoading)
    const hasError = useSelector(state => state.login.hasError)
    const errors = useSelector(state => state.login.errors)
    const dispatch = useDispatch()
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
            <button>Log-In!</button>
          </form>
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