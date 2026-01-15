import { useDispatch, useSelector } from "react-redux";
import Account from "../Profile/Account";
import Activities from "../Profile/Activities";
import FeedBack from "../Profile/Feedback";
import SignIn from "../Profile/SignIn";
import { useNavigate } from "react-router-dom";
import { AuthActions } from "../store/AuthSlice";
import { ProfileActions } from "../store/ProfileSlice";
import { VscAccount } from "react-icons/vsc";
import { CartActions } from "../store/CartSlice";
import { WishlistActions } from "../store/WishlistSlice";

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
    dispatch(WishlistActions.clearWishlist());
    dispatch(CartActions.clearCart());
    navigate("/");
  };

  return (
    <>
      <div className="container py-5">
        <div className="border p-5 shadow-lg">
          <div className="d-flex justify-content-between align-self-end">
            <div>
              {profile.avatar ? (
                <img
                  src={profile.avatar}
                  alt="Profile"
                  className="rounded-circle mb-3 m-3"
                  width="100"
                  height="100"
                />
              ) : (
                <VscAccount
                  className=" text-purple-500"
                  style={{ fontSize: "100px" }}
                />
              )}
              <strong
                className="p-2"
                style={{ fontSize: "30px", fontFamily: "serif" }}
              >
                {profile.firstName} {profile.lastName}
              </strong>
            </div>
            <img src="logo1.jpeg" alt="" style={{ width: "200px" }} />
          </div>

          <p
            className="text-end text-pink-600"
            style={{ fontFamily: "fantasy" }}
          >
            Joined: {auth.joined}
          </p>
        </div>
        <br />
        <br />
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
