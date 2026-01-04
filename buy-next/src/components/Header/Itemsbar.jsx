const Itemsbar = () => {
  const categories = [
    { name: "Women"},
    { name: "Men"},
    { name: "Kids"},
    { name: "Home Accessories"},
    { name: "Kitchen Items"},
    { name: "Beauty & Makeup"},
    { name: "HealthCare" },
  ];

  return (
    <div className="container">
      <header className="d-flex justify-content-center py-3">
        <ul className="nav nav-pills">
          {categories.map((item,index) => (
            <li key={index} className="nav-item">
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
