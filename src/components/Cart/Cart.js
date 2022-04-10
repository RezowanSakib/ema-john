import React from "react";
import "./cart.css";
const Cart = ({ children,cart }) => {
  let total = 0;
  let shipping = 0;
 
  for (const product of cart) {
    total = total + product.price;
    shipping = shipping + product.shipping;
  }
  const tax=(total*.1).toFixed(2);
  const grandTotal=total+shipping+Number(tax);
  return (
    <div className="cart">
      <h1>Order Summary</h1>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: ${total} </p>
      <p>Total Shipping: ${shipping} </p>
      <p>Tax: ${tax}</p>
      <h5>Grand total: ${grandTotal}</h5>
      {children}
    </div>
  );
};

export default Cart;
