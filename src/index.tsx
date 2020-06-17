import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { render } from 'react-dom';
import Products from './containers/products';


function AppRouter () {
  return (
    <Router>
      <Switch>
        <Route path="/products/cart">
          Cart
        </Route>
        <Route path="/products">
          <Products/>
        </Route>
      </Switch>
    </Router>
  );
}

render(<AppRouter/> , document.getElementById('root'));
