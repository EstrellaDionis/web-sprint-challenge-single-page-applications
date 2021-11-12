import React from "react";
import {Link, Switch, Route} from 'react-router-dom';
import './App.css'
import Completion from '../src/Components/Completion'

const InitialOrderForm = {
  name: '',
  size: '',
  topping1: false,
  topping2: false,
  special: ''
}

const App = () => {
  return (
    <>
    <header>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/pizza'>Order</Link>
        <Link to='/pizza-form'>Order Complete</Link>
      </nav>
    </header>
    <main>
        <Switch>
          <Route path='/pizza-form'>
              <Completion />
          </Route>

          <Route path='/pizza'>
              <div>Order</div>
          </Route>

          <Route path='/'>
              <div>Home</div>
          </Route>

        </Switch>
    </main>
    </>
  );
};
export default App;
