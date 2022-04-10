import React from "react";

const ReviewItem = ({ product, handleRemove }) => {
  const { name, price, img, quantity } = product;
  return (
    <div>
      <div className="d-flex">
        <img src={img} alt="" className="img-fluid" />
        <div>
          <h3>Name: {name.length > 20 ? name.slice(0, 20) : name}</h3>
          <h4>Price: ${price}</h4>
          <h6>quantity: {quantity}</h6>
        </div>
      </div>
      <div>
        <button onClick={() => handleRemove(product)}>delete</button>
      </div>
    </div>
  );
};

export default ReviewItem;
