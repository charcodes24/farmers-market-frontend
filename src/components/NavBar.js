import { NavLink } from "react-router-dom";

export default function CustomerNavBar() {


    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/mypage">My Page</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup_customer">Signup</NavLink>
            <NavLink to="/cart">Cart</NavLink>
        </div>
    )
}