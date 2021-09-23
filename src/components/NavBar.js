import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { userLogout } from "../features/login/loginSlice";
import { clearCart, clearOrders } from "../features/cart/cartSlice";

export default function CustomerNavBar({ setCart }) {
    const customerLoggedIn = useSelector(state => state.login.customerLoggedIn)
    const vendorLoggedIn = useSelector(state => state.login.vendorLoggedIn)
    const dispatch = useDispatch()
    const history = useHistory()

    function handleLogout(e) {
      e.preventDefault()
      dispatch(userLogout())
      dispatch(clearCart())
      dispatch(clearOrders())
      history.push('/')
    }

    return (
      <div>
        <NavLink to="/">Home</NavLink>
        {vendorLoggedIn ? <NavLink to="/mypage">My Page</NavLink> : null}
        {customerLoggedIn || vendorLoggedIn ? null : (
          <NavLink to="/login">Login</NavLink>
        )}
        {customerLoggedIn || vendorLoggedIn ? null : (
          <NavLink to="/signup_customer">Signup</NavLink>
        )}
        {customerLoggedIn ? <NavLink to="/cart">Cart</NavLink> : null}
        {customerLoggedIn || vendorLoggedIn ? (
          <button onClick={handleLogout}>Sign Out!</button>
        ) : null}
      </div>
    );
}