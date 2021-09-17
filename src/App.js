import React, { useEffect, useState } from 'react';
import { Link, Route } from 'react-router-dom';
import Home from './components/Home'
import OrderForm from "./components/OrderForm";
import axios from 'axios';
import formSchema from './validations/formSchema';
import * as yup from 'yup';

const initialFormValues = {
  name: '',
  email: '',
  size: '',
  topping1: false,
  topping2: false,
  topping3: false,
  topping4: false,
  topping5: false,
  special:''
  
}
const initialFormErrors = {
  name: '',
  email: '',
  size: '',
  topping1: true,
  topping2: true,
  topping3: true,
  topping4: true,
  topping5: true,
  special:''
}
const initialOrder = [];
const initialDisabled = false;

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [orders, setOrders] = useState(initialOrder);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);


  const postNewOrder = newOrder => {
    axios
      .post('https://reqres.in/api/orders', newOrder)
      .then(res => {
        setOrders([res.data, ...orders]);
        setFormValues(initialFormValues)
      })
      .catch(err => {
        console.error(err);
        setFormValues(initialFormValues);
      })
  }
  const validate = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value
    })
  }
  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      topping1: formValues.topping1,
      topping2: formValues.topping2,
      topping3: formValues.topping3,
      topping4: formValues.topping4,
      topping5: formValues.topping5,
      special: formValues.special
    }
    postNewOrder(newOrder)
  }
  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])

  return (
    <div className='App'>
      <nav>
        <h1 className='store-header'>Lambda Eats</h1>
        <div className='nav-links'>
          <Link to='/'>Home</Link> |
          <Link id='order-pizza' to='/pizza'>Place Order</Link>
        </div>
      </nav>
      <Route path='/pizza'>
        <OrderForm
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
          key={orders.id}
        />
      </Route>
      <Route exact path='/'>
        <Home />
      </Route>
    </div>
  );
};
export default App;
