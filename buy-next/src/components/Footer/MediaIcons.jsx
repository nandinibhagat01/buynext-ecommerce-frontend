import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const MediaIcons = () => {
  return (
    <>
      <p>© 2026 buyNXT. All rights reserved.</p>
      <ul class="list-unstyled d-flex" >
        <li class="ms-3">
          <a class="link-body-emphasis" href="#" aria-label="Instagram">
            <FaInstagramSquare />
          </a>
        </li>
        <li class="ms-3">
          <a class="link-body-emphasis" href="#" aria-label="Facebook">
            <FaFacebookSquare />
          </a>
        </li>
        <li class="ms-3">
          <a class="link-body-emphasis" href="#" aria-label="Facebook">
            <FaSquareXTwitter />
          </a>
        </li>
      </ul>
    </>
  );
};
export default MediaIcons;
