import React, { useState, useEffect } from "react";
import {Link, Switch, Route} from 'react-router-dom';
import './App.css';
import * as yup from 'yup';
import Completion from '../src/Components/Completion';
import Order from '../src/Components/Order';
import formSchema from '../src/Components/Order';


const initialOrderForm = {
  name: '',
  size: '',
  topping1: false,
  topping2: false,
  special: ''
}

const initialOrderFormErrors = {
  name: '',
  size: '',
  topping1: '',
  topping2: '',
  special: ''
}


const App = () => {

  const [pizza, setPizza] = useState({});
  const [formValues, setFormValues] = useState(initialOrderForm);
  const [formErrors, setFormErrors] = useState(initialOrderFormErrors);
  const [disabled, setDisabled] = useState(true);


const inputChange = (name, value) => {
  console.log(name, value)
}

  // useEffect(() => {
  //    formSchema.isValid(formValues)
  //    .then((valid) => setDisabled(!valid))
  // }, [formValues])



  return (
    <>
    <header>
      <h1>Lambda Eats</h1>
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
              <Order 
              inputChange = {inputChange}
              formValues = {formValues}
              setFormValues = {setFormValues}
              formErrors = {formErrors}
              disabled = {disabled}
              />
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
