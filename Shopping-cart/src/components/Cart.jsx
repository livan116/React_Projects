import React from "react";
import "./styles.css";
import shirt from "../images/shirt.jpeg";
export default function Cart() {
  return (
    <div className="container2">
      <div className="cart">
        <div className="header2"> My Cart</div>
        <div className="items">
          <div className="item">
            <img src={shirt} alt="" height={100} width={100} />
            <div className="item-names">
              <div className="item-name">Hello</div>
              <div className="item-price">99</div>
            </div>
          </div>
          <div className="btns">
          <button className="remove-btn">Remove item</button>
            <div className="changeBtns">
              <button className="del same">-</button>
              <div className="value">1</div>
              <button className="add same">+</button>
            </div>
          </div>
        </div>
        <div className="totalAmount">Total Amount: 900</div>
        <button className="proceed">Proceed to Payment</button>
      </div>
    </div>
  );
}
