import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'


const Order = (props) => {
    
    const {inputChange, formValues, formErrors, buyNow} = props

    const {model} = useParams()

    // useEffect(() => {
    //     inputChange('model', model)
    // }, []) // causes crash because on inputChange

    return (
        <div>
            Build Your Own Pizza{model}
            <form onSubmit={buyNow}>
                <label>
                    Name: {formErrors.name}
                    <input onChange={(e) => inputChange(e.target.name, e.target.value)} type='text' name='name' value={formValues.name}/>
                </label>
                <label>
                    size: {formErrors.size}
                    <select onChange={(e) => inputChange(e.target.name, e.target.value)} name='size' value={formValues.size}>
                        <option value='10 inch'>10 inch</option>
                        <option value='12 inch'>12 inch</option>
                        <option value='14 inch'>14 inch</option>
                    </select>
                </label>
                <label>
                    Topping 1: {formErrors.toppings1}
                    <select onChange={(e) => inputChange(e.target.name, e.target.value)} name='toppings1' value={formValues.toppings1}>
                        <option value='None'>None</option>
                        <option value='Pepperoni'>Pepperoni</option>
                        <option value='Sausage'>Sausage</option>
                        <option value='Canadian Bacon'>Canadian Bacon</option>
                        <option value='Spicy Italian Sausage'>Spicy Italian Sausage</option>
                        <option value='Grilled Chicken'>Grilled Chicken</option>
                        <option value='Onions'>Onions</option>
                        <option value='Green Pepper'>Green Pepper</option>
                        <option value='Diced Tomatoes'>Diced Tomatoes</option>
                        <option value='Black Olives'>Black Olives</option>
                        <option value='Roasted Garlic'>Roasted Garlic</option>
                        <option value='Artichoke Hearts'>Artichoke Hearts</option>
                        <option value='Three Cheese'>Three Cheese</option>
                        <option value='Pineapple'>Pineapple</option>
                        <option value='Extra Cheese'>Extra Cheese</option>

                    </select>
                </label> 
                <label>
                    Topping 2: {formErrors.toppings2}
                    <select onChange={(e) => inputChange(e.target.name, e.target.value)} name='toppings2' value={formValues.toppings2}>
                        <option value='None'>None</option>
                        <option value='Pepperoni'>Pepperoni</option>
                        <option value='Sausage'>Sausage</option>
                        <option value='Canadian Bacon'>Canadian Bacon</option>
                        <option value='Spicy Italian Sausage'>Spicy Italian Sausage</option>
                        <option value='Grilled Chicken'>Grilled Chicken</option>
                        <option value='Onions'>Onions</option>
                        <option value='Green Pepper'>Green Pepper</option>
                        <option value='Diced Tomatoes'>Diced Tomatoes</option>
                        <option value='Black Olives'>Black Olives</option>
                        <option value='Roasted Garlic'>Roasted Garlic</option>
                        <option value='Artichoke Hearts'>Artichoke Hearts</option>
                        <option value='Three Cheese'>Three Cheese</option>
                        <option value='Pineapple'>Pineapple</option>
                        <option value='Extra Cheese'>Extra Cheese</option>
                    </select>
                </label>
                <label>
                    Special Instructions: {formErrors.special}
                    <input onChange={(e) => inputChange(e.target.name, e.target.value)} type='text' name='special' value={formValues.special}/>
                </label>
                <button type='submit' disabled={props.disabled}>Add to Order</button>
            </form>
        </div>
    )
}

export default Order