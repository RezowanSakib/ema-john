import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UseProducts from "../../Hooks/UseProducts";
import { getStoredCart, addToDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../product/Product";
import "../Shop/shop.css";

const Shop = () => {
  const [products] = UseProducts();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);
  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };
  return (
    <div className="d-flex justify-content-around shop-container row">
      <div className="products-container col-10 ">
        <div className="row g-5 m-4">
          {products.map((product) => (
            <Product
              key={product.id}
              handleAddToCart={handleAddToCart}
              product={product}
            ></Product>
          ))}
        </div>
      </div>
      <div className="cart-container col-2 mt-5 bg-secondary">
        <Cart cart={cart}>
          <Link to='/order'>
            <button>Review Item</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
