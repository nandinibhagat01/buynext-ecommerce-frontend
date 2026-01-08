import CardButtons from "./CartButtons";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { CartActions } from "../store/CartSlice";

const CartCard = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div style={{ margin: "10px" }}>
      <div className="container">
        <div className="card mb-3">
          <div className="row g-0 align-items-center">
            {/* Image */}
            <div className="col-md-2 text-center">
              <img
                src={item.image}
                className="img-fluid rounded-start"
                alt="Product"
              />
            </div>

            {/* Product Details */}
            <div className="col-md-7">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.company}</p>
                <div className="d-flex align-items-center gap-2 mb-1">
                  <span className="fw-bold fs-5">
                    ₹{item.price}
                    <span className="card-text text-muted text-decoration-line-through">
                      ₹{item.original_price}
                    </span>
                  </span>
                  <span className="text-yellow-600 fw-bold">
                    {item.discount} % OFF
                  </span>
                </div>
                <p className="card-text mb-1">
                  <small className="text-body-secondary">Free Delivery</small>
                </p>
                <p className="text-success mb-0">In Stock</p>
                <div className="btn-group">
                  <button
                    className="btn btn-outline-danger rounded-start-5"
                    type="button"
                  >
                    <RiDeleteBinLine />
                  </button>

                  <button
                    className="btn border-secondary border-end-0"
                    data-bs-container="body"
                    data-bs-toggle="popover"
                    data-bs-placement="top"
                    data-bs-content="Top popover"
                    type="button"
                  >
                    1
                  </button>
                  <button
                    className="btn btn-outline-success rounded-end-5"
                    type="button"
                  >
                    <MdOutlineLibraryAdd />
                  </button>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <CardButtons></CardButtons>
            <button
              className="btn btn-outline-danger rounded-pill"
              type="button"
              onClick={() => dispatch(CartActions.removeFromCart(item.id))}
            >
              Remove this Item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;

<button
  type="button"
  class="btn btn-secondary"
  data-bs-container="body"
  data-bs-toggle="popover"
  data-bs-placement="top"
  data-bs-content="Top popover"
>
  Popover on top
</button>;
