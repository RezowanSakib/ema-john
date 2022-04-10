import React from "react";
import UseCart from "../../Hooks/UseCart";
import UseProducts from "../../Hooks/UseProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../product/ReviewItem";

const Order = () => {
  const [products] = UseProducts();
  const [cart, setCart] = UseCart(products);
  const handleRemove = (product) => {
    const rest = cart.filter((pd) => pd.id !== product.id);
    setCart(rest);
    removeFromDb(product.id);
  };

  return (
    <div className="shop-container d-flex justify-content-between">
      <div className="products-container row">
        <div className="col-4 mx-5 my-3 p-5">
          {cart.map((product) => (
            <ReviewItem
              product={product}
              key={product.id}
              handleRemove={handleRemove}
            ></ReviewItem>
          ))}
        </div>
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Order;
