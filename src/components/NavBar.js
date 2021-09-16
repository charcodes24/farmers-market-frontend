import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { userLogout } from "../features/login/loginSlice";

export default function CustomerNavBar() {
    const customerLoggedIn = useSelector(state => state.login.customerLoggedIn)
    const vendorLoggedIn = useSelector(state => state.login.vendorLoggedIn)
    const dispatch = useDispatch()

    function handleLogout(e) {
        e.preventDefault()
        dispatch(userLogout())
    }

    return (
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/mypage">My Page</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup_customer">Signup</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        {customerLoggedIn || vendorLoggedIn ? (
          <button onClick={handleLogout}>Sign Out!</button>
        ) : null}
      </div>
    );
}