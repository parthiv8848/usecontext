import { CartState } from "../Context";

const SingleProduct = ({ prod }) => {
  const { cart, setCart } = CartState();

  return (
    <div className="products">
      <img src={"https://m.media-amazon.com/images/I/61Dw5Z8LzJL._AC_UF1000,1000_QL80_.jpg"} alt={prod.name} />
      <div className="productDesc">
        <span style={{ fontWeight: 700 }}>{prod.name}</span>
        <span>₹ {prod.price.substring(0, 3)}</span>
      </div>
      {cart.includes(prod) ? (
        <button
          className="add remove"
          onClick={() => setCart(cart.filter((c) => c.id !== prod.id))}
        >
          Remove from Cart
        </button>
      ) : (
        <button className="add" onClick={() => setCart([...cart, prod])}>
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default SingleProduct;
