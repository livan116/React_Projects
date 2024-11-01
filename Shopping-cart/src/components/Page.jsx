// eslint-disable-next-line no-unused-vars
import React from "react";
import "./styles.css";
import cartIcon from "../images/cart.png";
import { useNavigate } from "react-router-dom";

export default function Page({ click }) {
  const nav = useNavigate();
  const arr = [
    {
      id: 1,
      img: "src/images/shirt.jpeg",
      title: "Shirt",
      price: "1000",
    },
    {
      id: 2,
      img: "src/images/t-shirt.jpeg",
      title: "T-shirt",
      price: "700",
    },
    {
      id: 3,
      img: "src/images/jeans.jpeg",
      title: "Jeans",
      price: "999",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="navbar">
          <div className="header">Shopping Cart</div>
          <div className="search-bar">
            <input
              type="text"
              placeholder="search for products..."
              className="input"
            />
          </div>
          <div className="cart-icon" onClick={() => nav("/cart")}>
            <img src={cartIcon} alt="" height={70} className="cart-img" />
          </div>
        </div>
        <div className="cards">
          {arr.map((item) => (
            <div key={item.id}>
              <div className="card">
                <div className="card-component">
                  <div className="image">
                    <img src={item.img} alt="" height="300" className="img" />
                  </div>
                  <div className="product-name">{item.title}</div>
                  <div className="price">{item.price}</div>
                  <button
                    className="add-cart"
                    onClick={() => click(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
