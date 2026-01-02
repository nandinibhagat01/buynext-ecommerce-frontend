const NavItem = ({ icon: Icon, label, className }) => {
  return (
    <li>
      <a href="#" className={className}>
        <Icon className="navIcons d-block mx-auto mb-1" size={30} />
        {label}
      </a>
    </li>
  );
};

export default NavItem;
