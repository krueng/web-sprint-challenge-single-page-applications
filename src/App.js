import React from "react";
import { Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home.js'

const App = () => {
  return (
    <div className='App'>
      <nav>
        <h1 className='store-header'>Lambda Eats</h1>
        <div className='nav-links'>
          <Link id='order-pizza' to='/'>Home</Link>
          <Link id='pizza-form' to='/pizza'>Shop</Link>
        </div>
      </nav>

      
      <Switch>
        <Route path={'/pizza'}>
          {/* <Item items={stock} /> */}
        </Route>
        <Route path='/pizza'>
          {/* <ItemsList items={stock} /> */}
        </Route>
      </Switch>
      <Route exact path='/'>
        <Home />
      </Route>
    </div>
  );
};
export default App;
