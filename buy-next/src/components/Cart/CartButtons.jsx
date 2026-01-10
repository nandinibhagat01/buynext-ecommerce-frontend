import { FaShare } from "react-icons/fa";
import { BsCartCheckFill } from "react-icons/bs";
import { IoMdHeart } from "react-icons/io";

const CardButtons = () => {
  return (
    <>
      <div className="col-md-3">
        <div className="d-grid gap-2 p-3">
          <button
            className="btn btn-outline-danger rounded-pill cart-btn bg-light text-pink-500"
            type="button"
          >
            Move to Wishlist <IoMdHeart />
          </button>
          <button
            className="btn btn-outline-secondary rounded-pill cart-btn bg-light text-purple-500"
            type="button"
          >
            See More Like This
          </button>
          <button
            className="btn btn-primary rounded-pill glow-btn "
            type="button"
          >
            Buy Now <BsCartCheckFill />
          </button>
          <button
            className="btn btn-primary rounded-pill cart-btn bg-light text-blue-600"
            type="button"
          >
            Share <FaShare />
          </button>
        </div>
      </div>
    </>
  );
};

export default CardButtons;
