// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Cart from './components/Cart'
import Page from './components/Page';
import "./index.css"
import { BrowserRouter,Route, Routes } from 'react-router-dom';

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  // Function to handle adding items to cart
  const handleAddToCart = (item) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        // If item already in cart, increase quantity
        return prevCartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // Otherwise, add item with initial quantity of 1
        return [...prevCartItems, { ...item, quantity: 1 }];
      }
    });
  };

  const handleRemove = (i) =>{
    setCartItems((prev)=>prev.filter((_,index) => index !== i));
  }
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Page click={handleAddToCart}/>}/>
          <Route exact path="/cart" element={<Cart cartItem={cartItems} remove = {handleRemove}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
