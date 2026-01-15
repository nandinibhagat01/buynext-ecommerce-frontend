import { FaShare } from "react-icons/fa";
import { BsCartCheckFill } from "react-icons/bs";
import { IoMdHeart } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { WishlistActions } from "../store/WishlistSlice";

const CardButtons = ({ category, product }) => { 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist);
  const isWishlisted = wishlistItems.includes(product.id);
  
  const handleSeeMore = () => {
    navigate(`/${category.toLowerCase()}`);
  };
  const handleWishlist = () => {
    if (isWishlisted) {
      dispatch(WishlistActions.removeFromWishlist(product.id));
    } else {
      dispatch(WishlistActions.addToWishlist(product.id));
    }
  };
  return (
    <>
      <div className="col-md-3">
        <div className="d-grid gap-2 p-3">
          <button
            className="btn btn-outline-danger rounded-pill cart-btn bg-light text-pink-500"
            type="button"
            onClick={handleWishlist}
          >
            {isWishlisted ? "Remove from Wishlist" : "Move to Wishlist"}<IoMdHeart />
          </button>

          <button
            className="btn btn-outline-secondary rounded-pill cart-btn bg-light text-purple-500"
            type="button"
            onClick={handleSeeMore}
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
