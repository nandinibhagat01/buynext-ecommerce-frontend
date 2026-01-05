import { Link } from "react-router-dom";

const NavItem = ({ icon: Icon, label, className, path, showBadge }) => {
  return (
    <li>
      <Link to={path} className={`${className} position-relative`}>
        <Icon className="navIcons d-block mx-auto mb-1" size={25} />
        {showBadge && (
          <span
            className="position-absolute badge rounded-pill bg-danger"
            style={{
              top: "-3px",
              right: "12px",
              fontSize: "10px",
            }}
          >
            3
          </span>
        )}
        {label}
      </Link>
    </li>
  );
};

export default NavItem;
