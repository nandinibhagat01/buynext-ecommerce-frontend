import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const MediaIcons = () => {
  return (
    <>
      <p>© 2026 buyNXT. All rights reserved.</p>
      <ul className="list-unstyled d-flex" >
        <li className="ms-3">
          <a className="link-body-emphasis" href="#" aria-label="Instagram">
            <FaInstagramSquare />
          </a>
        </li>
        <li className="ms-3">
          <a className="link-body-emphasis" href="#" aria-label="Facebook">
            <FaFacebookSquare />
          </a>
        </li>
        <li className="ms-3">
          <a className="link-body-emphasis" href="#" aria-label="Facebook">
            <FaSquareXTwitter />
          </a>
        </li>
      </ul>
    </>
  );
};
export default MediaIcons;
