import { RiHomeSmileLine } from "react-icons/ri";
import { LuLayoutDashboard } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { GoHeart } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";

const NavItems = [
  {
    label: "Home",
    icon: RiHomeSmileLine,
    className: "nav-link text-secondary",
  },
  {
    label: "Dashboard",
    icon: LuLayoutDashboard,
    className: "nav-link text-dark",
  },
  {
    label: "Wishlist",
    icon: GoHeart,
    className: "nav-link text-dark",
  },
  {
    label: "Cart",
    icon: BsCart3,
    className: "nav-link text-dark",
  },
  {
    label: "Profile",
    icon: CgProfile,
    className: "nav-link text-dark",
  },
];

export default NavItems;
