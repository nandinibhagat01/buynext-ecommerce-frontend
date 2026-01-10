import CardButtons from "./CartButtons";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { CartOperatorsActions } from "../store/CartOperatorsSlice";
import { CartActions } from "../store/CartSlice";
import { useEffect, useRef } from "react";
import { Popover } from "bootstrap";

const CartCard = ({ item }) => {
  const dispatch = useDispatch();

  const qty = useSelector(
    (store) => store.cartOperators.quantities[item.id] || 1
  );

  useEffect(() => {
    dispatch(CartOperatorsActions.initializeQty(item.id));
  }, [dispatch, item.id]);

  const handleIncrement = () => {
    dispatch(CartOperatorsActions.increment(item.id));
  };
  const handleDecrement = () => {
    dispatch(CartOperatorsActions.decrement(item.id));
  };

  const popoverRef = useRef(null);
  let popoverInstance = useRef(null);

  useEffect(() => {
    if (popoverRef.current) {
      popoverInstance.current = new Popover(popoverRef.current, {
        trigger: "manual",
        placement: "top",
        content: "Number of items",
      });
    }

    return () => {
      popoverInstance.current?.dispose();
    };
  }, []);

  const showPopover = () => {
    popoverInstance.current?.show();
  };

  const hidePopover = () => {
    popoverInstance.current?.hide();
  };

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
                    onClick={handleDecrement}
                    disabled={qty === 1}
                  >
                    <RiDeleteBinLine />
                  </button>

                  <button
                    ref={popoverRef}
                    className="btn border-secondary border-end-0"
                    type="button"
                    onClick={showPopover}
                    onMouseLeave={hidePopover}
                  >
                    {qty}
                  </button>
                  <button
                    className="btn btn-outline-success rounded-end-5"
                    type="button"
                    onClick={handleIncrement}
                  >
                    <MdOutlineLibraryAdd />
                  </button>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <CardButtons></CardButtons>
            <button
              className="btn btn-outline-danger rounded-pill bg-pink-100 text-red-600 cart-btn"
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
