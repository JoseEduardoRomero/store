import { useState } from 'react'
import initialState from '../initialState';

const useInitialState = () =>{
  const [state, setState ] = useState(initialState) //Estado inicial
  const addToCart = payload => { //es algo similar a redux pero con context
    setState({
      ...state,
      cart: [...state.cart, payload], //lo que tiene cart, agregale lo que tiene payload
    })
  }
  const removeFromCart = payload =>{
    setState({
      ...state,
      cart: state.cart.filter(items => items.id !== payload.id ),
    })
  }
  const addToBuyer = payload =>{
    setState({
      ...state,
      buyer: [...state.buyer, payload]
    })
  }
  const addNewOrder = payload =>{
    setState({
      ...state,
      orders: [...state.orders, payload]
    })
  }
  return {
    addToCart,
    removeFromCart,
    addToBuyer,
    addNewOrder,
    state
  } //retornamos todo esto

};
export default useInitialState;


