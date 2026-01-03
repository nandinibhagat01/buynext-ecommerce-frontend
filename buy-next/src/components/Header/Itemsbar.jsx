const Itemsbar = () => {
  const categories = [
    { name: "Women", value: "women" },
    { name: "Men", value: "men" },
    { name: "Kids", value: "kids" },
    { name: "Home Accessories", value: "home" },
    { name: "Kitchen Items", value: "kitchen" },
    { name: "Beauty & Makeup", value: "beauty" },
    { name: "HealthCare", value: "health" },
  ];

  return (
    <div className="container">
      <header className="d-flex justify-content-center py-3">
        <ul className="nav nav-pills">
          {categories.map((item,index) => (
            <li key={item.value} className="nav-item">
              <a
                href="#"
                className={'nav-link'}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
};

export default Itemsbar;
