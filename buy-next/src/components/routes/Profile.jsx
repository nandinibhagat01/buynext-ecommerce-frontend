import { getUser, logout } from "../../utils/auth";
import Account from "../Profile/Account";
import Activities from "../Profile/Activities";
import FeedBack from "../Profile/Feedback";
import SignIn from "../Profile/SignIn";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const user = getUser();
  const navigate = useNavigate();

  if (!user) {
    return <SignIn />;
  }
  const handleLogout = () => {
    logout(); // remove user from localStorage
    navigate("/"); // redirect to home
  };

  return (
    <>
      <div className="container py-5">
        <h2>My Profile</h2>

        <p>
          <strong>Name:</strong> {user.firstName} {user.lastName}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Joined:</strong> {user.joined}
        </p>
        <hr />
        <Activities />
        <hr />
        <Account />
        <hr />
        <FeedBack />
        <hr />
        <button className="btn btn-danger mt-4 w-100" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </>
  );
};

export default Profile;
