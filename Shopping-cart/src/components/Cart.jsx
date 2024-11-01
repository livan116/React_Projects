import React, { useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";

export default function Cart({cartItem, remove}) {

  const [quantities, setQuantities] = useState(cartItem.map((item) => item.quantity));


  function handleUpdate(index,count){
    setQuantities((cartItem) =>
      cartItem.map((quantity, i) =>
        i === index ? Math.max(1, quantity + count) : quantity 
      )
    );
  
  }

  const amount = cartItem.reduce((acc,item,index)=>acc+item.price*quantities[index],0)

  const nav = useNavigate()
  return (
    <div className="container2">
      <div className="cart">
        <div className="header2"> My Cart</div>
        <div className="items">
        {cartItem.map((item,index)=>(
          <>
          <div key={item.id}>
          <div className="item-content">
          <div className="item">
            <img src={item.img} alt="" height={100} width={100} className="cart-image"/>
            <div className="item-names">
              <div className="item-name">{item.title}</div>
              <div className="item-price">{item.price}</div>
            </div>
          </div>
          <div className="btns">
          <button className="remove-btn" onClick={()=>remove(index)}>Remove item</button>
            <div className="changeBtns">
              <button className="del same" onClick={() => handleUpdate(index, -1)}>-</button>
              <div className="value">{quantities[index]}</div>
              <button className="add same" onClick={() => handleUpdate(index, 1)}>+</button>
            </div>
          </div>
          </div>
          </div>
          </>
        ))}
          
        </div>
        <div className="totalAmount">Total Amount:{amount}</div>
        <div className="proceed-btns">
        <button className="back" onClick={()=> nav(-1)}>Back</button>
        <button className="proceed" >Proceed to Payment</button>
        </div>
      </div>
    </div>
  );
}
