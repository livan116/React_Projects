// eslint-disable-next-line no-unused-vars
import React from "react";
import Card from "./Card";
import "./styles.css";

export default function Page() {
  return (
    <>
      <div className="container">
        <div className="navbar">
          <div className="header">Shopping Cart</div>
          <div className="search-bar">
            <input type="text" placeholder="search for products..." className="input"/>
          </div>
        </div>
        <div className="cards">
        <Card />
        <Card />
        <Card />
        </div>
      </div>
    </>
  );
}
