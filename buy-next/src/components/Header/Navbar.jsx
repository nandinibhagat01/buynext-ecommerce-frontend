import "./Navbar.css";
import NavItem from "./NavItem";
import { IoSearch } from "react-icons/io5";
import NavItems from "./NavItems";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky-top">
      <div className="px-3 py-2 text-bg-warning border-bottom" style={{height:"70px"}}>
        <div className="container-fluid h-100">
          <div className="d-flex align-items-center h-100">
            <Link to="/">
              <img src="/images/logo.png" alt="logo" height="30" />
            </Link>
            <form
              className="mx-auto navbar-search"
              role="search"
            >
              <div className="input-group ">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search the Products..."
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-primary border-start-0"
                  type="submit"
                >
                  <IoSearch />
                </button>
              </div>
            </form>
            <ul className="nav col-12 col-lg-auto my-2 ms-auto justify-content-center text-small flex-wrap">
              {NavItems.map((item, index) => (
                <NavItem
                  key={index}
                  icon={item.icon}
                  label={item.label}
                  path={item.path}
                  className={item.className}
                  showBadge={item.showBadge}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
