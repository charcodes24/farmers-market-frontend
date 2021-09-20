import { useEffect } from "react";
import { Switch, Route, Redirect } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { logIn } from './features/login/loginSlice';

import CustomerNavBar from './components/NavBar';
import Login from './components/Login';
import CustomerSignup from './components/CustomerSignup';
import VendorSignup from './components/VendorSignup';
import VendorPage from './components/VendorPage';
import VendorHomePage from './components/VendorHomePage';
import CustomerHomePage from './components/CustomerHomePage';
import Cart from './components/Cart';
import Loading from "./components/Loading";
import { showVendor } from "./features/vendor/vendorSlice";

function App() {
  const dispatch = useDispatch()
  const customerLoggedIn = useSelector(state => state.login.customerLoggedIn)
  const vendorLoggedIn = useSelector((state) => state.login.vendorLoggedIn)
  
  useEffect(() => {
    fetch("/loggedin").then((res) => {
      if (res.ok) {
        res.json().then((user) => dispatch(logIn(user)))
      }
    });
  }, []);

  return (
    <div className="app">
      <Loading />
      <CustomerNavBar />
      <Switch>
        <Route path="/login">
          {customerLoggedIn || vendorLoggedIn ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route path="/signup_customer">
          {customerLoggedIn ? <Redirect to="/" /> : <CustomerSignup />}
        </Route>
        <Route path="/signup_vendor">
          <VendorSignup />
        </Route>
        <Route path="/vendors/:id">
          <VendorPage />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/mypage">
          <VendorHomePage />
        </Route>
        <Route path="/">
          <CustomerHomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
