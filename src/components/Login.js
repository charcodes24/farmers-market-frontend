import { useState } from "react"

export default function Login() {
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

    function handleSubmit() {
        console.log('hi')
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