import "./Navbar.css";
import { RiHomeSmileLine } from "react-icons/ri";
import { LuLayoutDashboard } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { GoHeart } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";

const Navbar = () => {
  return (
    <header>
      <div className="px-3 py-2 text-bg-warning border-bottom">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <img src="src\images\logo.png"/>
            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              <li>
                <a href="#" className="nav-link text-secondary">
                  <svg
                    className="bi d-block mx-auto mb-1"
                    width="30"
                    height="30"
                    aria-hidden="true"
                  >
                    <RiHomeSmileLine className="navIcons"/>
                    <use xlink:href="#home"></use>
                  </svg>
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-dark">
                  <svg
                    className="bi d-block mx-auto mb-1"
                    width="30"
                    height="30"
                    aria-hidden="true"
                  >
                    <LuLayoutDashboard className="navIcons"/>
                    <use xlink:href="#speedometer2"></use>
                  </svg>
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-dark">
                  <svg
                    className="bi d-block mx-auto mb-1"
                    width="30"
                    height="30"
                    aria-hidden="true"
                  >
                    <GoHeart className="navIcons"/>
                    <use xlink:href="#table"></use>
                  </svg>
                  Wishlist
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-dark">
                  <svg
                    className="bi d-block mx-auto mb-1"
                    width="30"
                    height="30"
                    aria-hidden="true"
                  >
                    <BsCart3 className="navIcons"/>
                    <use xlink:href="#grid"></use>
                  </svg>
                  Cart
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-dark">
                  <svg
                    className="bi d-block mx-auto mb-1"
                    width="30"
                    height="30"
                    aria-hidden="true"
                  >
                    <CgProfile className="navIcons"/>
                    <use xlink:href="#people-circle"></use>
                  </svg>
                  Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="px-3 py-2 border-bottom mb-3">
        <div className="container d-flex flex-wrap justify-content-center">
          <form
            className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto"
            role="search"
          >
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>
          <div className="text-end">
            <button type="button" className="btn btn-light text-dark me-2">
              Login
            </button>
            <button type="button" className="btn btn-primary">
              Sign-up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
