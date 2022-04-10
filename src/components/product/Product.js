const Product = (props) => {
  const { product, handleAddToCart } = props;
  const { name, img, seller, price, ratings } = product;

  return (
    <div className="col-4 rounded bg-light px-3 pt-3">
      <img src={img} alt="" className="img-fluid" />
      <div className="p-3">
        <p>{name}</p>
        <p>price: ${price}</p>
        <p>{seller}</p>
        <p>{ratings}</p>
      </div>
      <button
        onClick={() => handleAddToCart(product)}
        type="button"
        className="btn btn-dark btn-primary footer"
      >
        Add to cart
      </button>
    </div>
  );
};

export default Product;
