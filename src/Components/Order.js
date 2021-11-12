import React from 'react'
import { useParams } from 'react-router-dom'


const Order = (props) => {
    
    const {model} = useParams()

    return (
        <div>
            Build Your Own Pizza{model}
            <form>
                <label>
                    Name: 
                    <input type='text' name='Name' id='Name'/>
                </label>
                <label>
                    size: 
                    <select name='size' id='size'>
                        <option value='10 inch'>10 inch</option>
                        <option value='12 inch'>12 inch</option>
                        <option value='14 inch'>14 inch</option>
                    </select>
                </label>
                <label>
                    Topping 1:
                    <select name='toppings1' id='toppings'>
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
                    Topping 2: 
                    <select name='toppings2' id='toppings'>
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
                    Special Instructions: 
                    <input type='text' name='Special Instructions' id='Special Instructions' />
                </label>
                <button type='submit'>Add to Order</button>
            </form>
        </div>
    )
}

export default Order