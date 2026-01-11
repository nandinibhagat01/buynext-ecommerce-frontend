import { RiHomeSmileLine } from "react-icons/ri";
import { LuLayoutDashboard } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { FcLike } from "react-icons/fc";
import { BsCart3 } from "react-icons/bs";

const NavItems = [
  {
    label: "Home",
    icon: RiHomeSmileLine,
    path: "/",
    className: "nav-link text-secondary",
  },
  {
    label: "Dashboard",
    icon: LuLayoutDashboard,
    path: "/Dashboard",
    className: "nav-link text-dark",
  },
  {
    label: "Wishlist",
    icon: FcLike,
    path: "/Wishlist",
    className: "nav-link text-dark",
  },
  {
    label: "Cart",
    icon: BsCart3,
    path: "/Cart",
    className: "nav-link text-dark",
    showBadge: true,
  },
  {
    label: "Profile",
    icon: CgProfile,
    path: "/Profile",
    className: "nav-link text-dark",
  },
];

export default NavItems;
