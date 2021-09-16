import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";

import { userLogin } from "../features/login/loginSlice";

export default function Login() {
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
          <button>Log-In!</button>
        </form>
      </div>
    );
}