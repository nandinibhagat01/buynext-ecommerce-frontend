import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavItem = ({ icon: Icon, label, className, path, showBadge }) => {
  const cart = useSelector((store) => store.cart);
  const wishlist = useSelector((store) => store.wishlist);

  let badgeCount = 0;

  if (showBadge === "cart") {
    badgeCount = cart.length;
  } else if (showBadge === "wishlist") {
    badgeCount = wishlist.length;
  }

  return (
    <li>
      <Link
        to={path}
        className={`${className} position-relative text-white nav-item-link`}
      >
        <Icon className="navIcons d-block mx-auto mb-1" size={25} />
        {showBadge && badgeCount > 0 && (
          <span
            className="position-absolute badge rounded-pill bg-pink-100 text-dark"
            style={{
              top: "-3px",
              right: "12px",
              fontSize: "10px",
            }}
          >
            {badgeCount}
          </span>
        )}
        {label}
      </Link>
    </li>
  );
};

export default NavItem;
