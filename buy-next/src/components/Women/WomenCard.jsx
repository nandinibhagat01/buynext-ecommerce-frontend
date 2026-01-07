import { useDispatch, useSelector } from "react-redux";
import { CartActions } from "../store/CartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart);
  const elementFound = cartItems.indexOf(product.id) >= 0;

  const addToCart = () => {
    dispatch(CartActions.addToCart(product.id));
  };
  const removeFromCart = () => {
    dispatch(CartActions.removeFromCart(product.id));
  };
  return (
    <div className="col">
      <div className="card h-100 shadow-sm">
        <img
          src={product.image}
          className="card-img-top"
          alt={product.name}
          style={{ height: "450px", objectFit: "cover" }}
        />
        <div className="card-body d-flex flex-column">
          <p>{product.company}</p>
          <h5 className="card-title">{product.name}</h5>
          <div className="d-flex align-items-center gap-2 mb-1">
            <span className="fw-bold fs-5">
              ₹{product.price}
              <span className="card-text text-muted text-decoration-line-through">
                ₹{product.original_price}
              </span>
            </span>
            <span className="text-yellow-600 fw-bold">
              {product.discount} % OFF
            </span>
          </div>
          <p>
            ⭐{product.rating.stars} <span>({product.rating.count})</span>
          </p>
          {elementFound ? (
            <button
              className="btn btn-sm btn-outline-warning text-secondary mt-auto"
              onClick={removeFromCart}
            >
              Remove from Cart
            </button>
          ) : (
            <button
              className="btn btn-sm btn-outline-primary mt-auto"
              onClick={addToCart}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
