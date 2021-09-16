import { Switch, Route, Redirect } from 'react-router';

import VendorPage from './components/VendorPage';
import CustomerHomePage from './components/CustomerHomePage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/vendors/:id">
          <VendorPage />
        </Route>
        <Route path="/">
          <CustomerHomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
