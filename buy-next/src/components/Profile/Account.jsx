import { Link } from "react-router-dom";

const Account = () => {
  return (
    <>
      <div className="list-group">
        <h5>Account Settings</h5>

        <Link
          to="/EditProfile"
          className="list-group-item list-group-item-action d-flex gap-3 py-3"
          aria-current="true"
        >
          <img
            src="https://github.com/twbs.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle flex-shrink-0"
          />
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h6 className="mb-0">Edit Profile</h6>
              <p className="mb-0 opacity-75">
                Change name, phone number, e-mail...
              </p>
            </div>
          </div>
        </Link>
        <a
          href="#"
          className="list-group-item list-group-item-action d-flex gap-3 py-3"
          aria-current="true"
        >
          <img
            src="https://github.com/twbs.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle flex-shrink-0"
          />
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h6 className="mb-0">Saved Addresses</h6>
              <p className="mb-0 opacity-75">Change or Modify address.</p>
            </div>
          </div>
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action d-flex gap-3 py-3"
          aria-current="true"
        >
          <img
            src="https://github.com/twbs.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle flex-shrink-0"
          />
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h6 className="mb-0">Notification Settings</h6>
              <p className="mb-0 opacity-75">Mute notifications.</p>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};
export default Account;
