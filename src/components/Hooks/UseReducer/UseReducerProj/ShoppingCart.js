import React, { useReducer } from "react";

const initialState = 0;
function reducer(state, action) {
    switch (action.type) {
      case 'addItem':
        return {
          ...state,
          cart: [...state.cart, { id: action.id, name: action.name, quantity: 1 }]
        };
      case 'removeItem':
        return {
          ...state,
          cart: state.cart.filter(item => item.id !== action.id)
        };
      case 'updateQuantity':
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.id ? { ...item, quantity: action.quantity } : item
          )
        };
      default:
        return state;
    }
  }
function ShoppingCart() {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    // Function to add an item to the cart
    const addItemToCart = (id, name) => {
      dispatch({ type: 'addItem', id, name });
    };
  
    // Function to remove an item from the cart
    const removeItemFromCart = (id) => {
      dispatch({ type: 'removeItem', id });
    };
  
    // Function to update the quantity of an item
    const updateItemQuantity = (id, quantity) => {
      dispatch({ type: 'updateQuantity', id, quantity });
    };
  
    return (
      <div>
        <h2>Shopping Cart</h2>
        <button onClick={() => addItemToCart(1, 'Apple')}>Add Apple</button>
        <button onClick={() => addItemToCart(2, 'Banana')}>Add Banana</button>
        <button onClick={() => addItemToCart(3, 'Orange')}>Add Orange</button>
  
        <ul>
          {state.cart?.map(item => (
            <li key={item.id}>
              {item.name} - Quantity: 
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => updateItemQuantity(item.id, parseInt(e.target.value))}
              />
              <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default ShoppingCart;
  