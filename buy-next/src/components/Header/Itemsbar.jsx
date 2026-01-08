import { Link } from "react-router-dom";

const Itemsbar = () => {
  const categories = [
    { name: "Women", path:"/Women" },
    { name: "Men", path: "/men" },
    { name: "Kids", path: "/kids" },
    { name: "Home Accessories", path: "/home-accessories" },
    { name: "Kitchen Items", path: "/kitchen-items" },
    { name: "Beauty & Makeup", path: "/beauty-makeup" },
    { name: "HealthCare", path: "/healthcare" },
    { name: "Stationary", path: "/stationary" },
    { name: "Electronics", path: "/electronics" },
  ];

  return (
    <div className="container-fluid custom-border">
      <header className="d-flex justify-content-center py-3">
        <ul className="nav">
          {categories.map((item, index) => (
            <li key={index} className="nav nav-item itemsbar-link itemsbar-items ">
              <Link to={item.path} className={"nav-link"}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
};

export default Itemsbar;
