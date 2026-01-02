import "./Navbar.css";
import NavItem from "./NavItem";
//import NavItems from "./Data/NavItems";
import { IoSearch } from "react-icons/io5";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <header>
      <div className="px-3 py-2 text-bg-warning border-bottom">
        <div className="container-fluid">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-between">
            <img src="src\images\logo.png" alt="logo"/>
            <ul className="nav col-12 col-lg-auto my-2 ms-auto justify-content-centre my-md-0 text-small">
              {NavItems.map((item, index)=>(
                <NavItem
                key={index}
                icon={item.icon}
                label={item.label}
                className={item.className}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="px-3 py-2 border-bottom mb-3">
        <div className="container-fluid d-flex flex-wrap justify-content-center px-0">
          <form
            className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto"
            role="search"
          >
           <div className="input-group">
            <input
              type="search"
              className="form-control"
              placeholder="Search the Products..."
              aria-label="Search"
            />
            <button className="btn btn-outline-warning border-start-0" type="submit" id="button-addon2">
              <IoSearch />
            </button>
            </div>
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
