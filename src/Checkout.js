import React from "react";
import "./Checkout.css";
function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://disruptiveadvertising.com/static/c653234a6e43c8c1c2c33cb2ac5e4477/7f757/Screen-Shot-2018-10-29-at-11.50.03-AM.png"
        ></img>
        <div>
          <h2 className="checkout__title"> Your Shopping Basket</h2>
        </div>
      </div>
      <div className="checkout__right">
        <h2>The subtotal will go here</h2>
      </div>
    </div>
  );
}

export default Checkout;
