import React, { useState, useEffect } from "react";
import {Link, Switch, Route, useHistory} from 'react-router-dom';
import './App.css';
import * as yup from 'yup';
import Completion from '../src/Components/Completion';
import Order from '../src/Components/Order';
import formSchema from '../src/Components/Order';
import axios from 'axios';


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

  let history = useHistory()

  const [pizza, setPizza] = useState({});
  const [formValues, setFormValues] = useState(initialOrderForm);
  const [formErrors, setFormErrors] = useState(initialOrderFormErrors);
  const [disabled, setDisabled] = useState(true);

  const buyNow = (event) => {
    event.preventDefault()
    axios.post('https://reqres.in/api/orders', formValues)
    .then(res => {
      console.log(res.data)
    })
    .finally(() => {
      history.push('/pizza-form')
    })
  }

  const validate = (name, value) => {
    console.log(name, value)
    yup.reach(formSchema, name)
    .validate(value)
    .then(() => {
      setFormErrors({...formErrors, [name]:''})
    })
    .catch((error) => {
      console.log(error)
      setFormErrors({...formErrors, [name]: error.errors[0]})
    })
  }


const inputChange = (name, value) => {
  // validate(name, value) this cause crash
  console.log(name, value)
  setFormValues({
    ...formValues,
    [name]: value
  })
}

  // useEffect(() => {
  //    formSchema.isValid(formValues)
  //    .then((valid) => setDisabled(!valid))
  // }, [formValues]) causes crash



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
              <Completion pizza={pizza}/>
          </Route>

          <Route path='/pizza'>
              <Order 
              buyNow={buyNow}
              pizza={pizza}
              setPizza={setPizza}
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
