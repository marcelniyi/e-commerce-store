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
        <Route exact path="/details/:id" component={Details} />
        <Route exact path="/addprod" component={Addprod} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/" component={Home} />

      </Switch>

    </Router>
  );
}

export default App;
