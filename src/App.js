import { Switch, Route, Redirect } from 'react-router';

import CustomerNavBar from './components/NavBar';
import Login from './components/Login';
import CustomerSignup from './components/CustomerSignup';
import VendorSignup from './components/VendorSignup';
import VendorPage from './components/VendorPage';
import VendorHomePage from './components/VendorHomePage';
import CustomerHomePage from './components/CustomerHomePage';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <CustomerNavBar />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup_customer">
          <CustomerSignup />
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
