import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Home from './Components/Home/Home'
import Addprod from './Components/AddProduct/Addpro'
import Details from './Components/SingleProduct/Details'
import Cart from './Components/Cart/Cart'
function App() {
  return(
    <Router>
      <Switch>
        <Route path="/details/:id">
          <Details />
        </Route>
        <Route path="/addprod">
          <Addprod />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/">
          <Home />
        </Route>

      </Switch>

    </Router>
  );
}

export default App;
