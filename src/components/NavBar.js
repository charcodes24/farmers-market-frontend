import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { userLogout } from "../features/login/loginSlice";
import { clearCart, clearOrders } from "../features/cart/cartSlice";

export default function CustomerNavBar() {
  //USEHISTORY HOOK
  const history = useHistory();

  //REDUX STORE
  const customerLoggedIn = useSelector(state => state.login.customerLoggedIn)
  const vendorLoggedIn = useSelector(state => state.login.vendorLoggedIn)
  const cartItems = useSelector(state => state.cart.cartItems)
  const dispatch = useDispatch()

    function handleLogout(e) {
      e.preventDefault()
      dispatch(userLogout())
      dispatch(clearCart())
      dispatch(clearOrders())
      history.push('/')
    }

    return (
      <div className="row sticky-top bg-white pt-3">
        <NavLink className="col-auto" to="/">
          Home
        </NavLink>
        {customerLoggedIn || cartItems.length > 0 ? (
          <NavLink className="col-auto" to="/cart">
            Cart
          </NavLink>
        ) : null}
        {customerLoggedIn || vendorLoggedIn ? null : (
          <NavLink className="col-auto" to="/login">
            Login
          </NavLink>
        )}
        {customerLoggedIn ? (
          <NavLink className="col-auto" to="/myorders">
            My Orders
          </NavLink>
        ) : null}
        {vendorLoggedIn ? (
          <NavLink className="col" to="/mypage">
            My Page
          </NavLink>
        ) : null}
        {customerLoggedIn || vendorLoggedIn ? (
          <button className="btn position-relative float-right" type="button" onClick={handleLogout}>
            Sign Out!
            </button>
        ) : null}
      </div>
    );
}