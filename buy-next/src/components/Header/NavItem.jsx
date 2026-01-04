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
      {/* <Link to={path} className={className}> */}
      {/* <span className="position-relative d-inline-block"> */}
      {/* <Icon className="navIcons d-block mx-auto mb-1" size={20} />
        {showBadge && (
          <span
            className="position-absolute badge rounded-pill bg-danger"
            style={{ top: "-4px", right: "-6px", fontSize: "10px" }}
          >
            3
          </span>
        )} */}
      {/* {showBadge && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              3<span className="visually-hidden">items in cart</span>
            </span>
          )}
        </span> */}
      {/* {label}
      </Link> */}
    </li>
  );
};

export default NavItem;
