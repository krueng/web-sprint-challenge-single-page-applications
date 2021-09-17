import React from "react";

function OrderForm(props) {

    const { values, submit, change, disabled, errors } = props;

    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <form id='pizza-form' className='form container' onSubmit={onSubmit}>

            <div className='form-group submit'>
                <h2>Order Form</h2>
                <div className='form-group input'>
                    <label>Name
                        <input
                            type='text'
                            id='name-input'
                            name='name'
                            value={values.name}
                            onChange={onChange}
                        />
                    </label>
                    <label>Email
                        <input
                            type='email'
                            id='email-input'
                            name='email'
                            value={values.email}
                            onChange={onChange}
                        />
                    </label>
                    <label>Size
                        <select onChange={onChange} value={values.size} id='size-dropdown' name='size'>
                            <option value=''>--Select pizza size--</option>
                            <option value='Extra-large'>Extra-large</option>
                            <option value='Large'>Large</option>
                            <option value='Medium'>Medium</option>
                            <option value='Small'>Small</option>
                        </select>
                    </label>
                    <label>Toppings
                        <label>Green Pepper
                            <input
                                type='checkbox'
                                name='topping1'
                                onChange={onChange}
                                checked={values.topping1}
                            />
                        </label>
                        <label>Diced Tomatoes
                            <input
                                type='checkbox'
                                name='topping2'
                                onChange={onChange}
                                checked={values.topping2}
                            />
                        </label>
                        <label>Black Olives
                            <input
                                type='checkbox'
                                name='topping3'
                                onChange={onChange}
                                checked={values.topping3}
                            />
                        </label>
                        <label>Three Cheese
                            <input
                                type='checkbox'
                                name='topping4'
                                onChange={onChange}
                                checked={values.topping4}
                            />
                        </label>
                        <label>Extra Cheese
                            <input
                                type='checkbox'
                                name='topping5'
                                onChange={onChange}
                                checked={values.topping5}
                            />
                        </label>
                    </label>
                    <label>Special Instruction
                        <input
                            type='text'
                            id='special-text' name='special'
                            value={values.special}
                            onChange={onChange}
                        />
                    </label>
                </div>
                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.size}</div>
                </div>
                <div className='form-group submit'>
                    <button id='order-button' disabled={disabled}>submit</button>
                </div>
            </div>
        </form>
    )
}

export default OrderForm;