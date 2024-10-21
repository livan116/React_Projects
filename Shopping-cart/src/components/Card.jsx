// eslint-disable-next-line no-unused-vars
import React from 'react'
import shirt from "../images/shirt.jpeg";
import "./styles.css"
export default function Card() {
  return (
    <div>
    <div className='card'>
    <div className="card-component">
    <div className="image">
        <img src={shirt} alt="" height="300" className='img'/>
    </div>
    <div className="product-name">Hello</div>
    <div className="price">500</div>
    <button className="add-cart">Add to Cart</button>
    </div>
    
    </div>    
    </div>
    
  )
}
