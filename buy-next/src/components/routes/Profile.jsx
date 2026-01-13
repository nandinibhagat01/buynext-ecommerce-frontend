import { useDispatch, useSelector } from "react-redux";
import Account from "../Profile/Account";
import Activities from "../Profile/Activities";
import FeedBack from "../Profile/Feedback";
import SignIn from "../Profile/SignIn";
import { useNavigate } from "react-router-dom";
import { AuthActions } from "../store/AuthSlice";
import { ProfileActions } from "../store/ProfileSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const profile = useSelector((state) => state.profile);

  if (!auth.isLoggedIn) {
    return <SignIn />;
  }
  const handleLogout = () => {
    dispatch(AuthActions.logout());
    dispatch(ProfileActions.clearProfile());
    navigate("/");
  };

  return (
    <>
      <div className="container py-5">
        <h2>My Profile</h2>
        {profile.avatar && (
          <img
            src={profile.avatar}
            alt="Profile"
            className="rounded-circle mb-3"
            width="100"
            height="100"
          />
        )}

        <p>
          <strong>Name:</strong> {profile.firstName} {profile.lastName}
        </p>
        <p>
          <strong>Email:</strong> {auth.email}
        </p>
        <p>
          <strong>Joined:</strong> {auth.joined}
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
