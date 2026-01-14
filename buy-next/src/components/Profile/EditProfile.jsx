import { useNavigate } from "react-router-dom";
import EditProfileDropdowns from "./EditProfileDropdowns";
import { useDispatch, useSelector } from "react-redux";
import { ProfileActions } from "../store/ProfileSlice";
import FormLocation from "./FormLocation";
import PhoneVerify from "./PhoneVerify";
import { VscAccount } from "react-icons/vsc";

const EditProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profile = useSelector((state) => state.profile);

  const handleChange = (e) => {
    dispatch(
      ProfileActions.setProfile({
        [e.target.name]: e.target.value,
      })
    );
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        {profile.avatar ? (
          <img
            src={profile.avatar}
            alt="Avatar"
            className="rounded-circle mb-3"
            width="100"
            height="100"
          />
        ) : (
          <VscAccount
            className=" text-purple-500"
            style={{ fontSize: "100px" }}
          />
        )}
        <h2>
          {profile.firstName} {profile.lastName}
        </h2>
        <p className="lead">Update your personal information</p>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              navigate("/Profile");
            }}
          >
            <p className="form-label">Update your profile picture</p>
            <div className="col-12 text-center">
              <input
                type="file"
                accept="image/*"
                className="form-control"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (!file) return;

                  const reader = new FileReader();
                  reader.onloadend = () =>
                    dispatch(ProfileActions.setAvatar(reader.result));
                  reader.readAsDataURL(file);
                }}
              />
            </div>
            <div className="row g-3">
              <div className="col-sm-6">
                <label htmlFor="firstName" className="form-label">
                  First name*
                </label>
                <input
                  name="firstName"
                  className="form-control"
                  value={profile.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-sm-6">
                <label htmlFor="lastName" className="form-label">
                  Last name*
                </label>
                <input
                  name="lastName"
                  className="form-control"
                  value={profile.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-12">
                <label htmlFor="email" className="form-label">
                  Email ID
                </label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  value={profile.email || ""}
                  onChange={handleChange}
                />
              </div>
              {/* Phone input */}
              <PhoneVerify profile={profile} />

              <EditProfileDropdowns profile={profile} />
              <FormLocation profile={profile} handleChange={handleChange} />
            </div>
            <hr className="my-4" />
            <button
              className="w-100 btn text-light btn-lg glow-btn"
              type="submit"
            >
              Save Changes
            </button>
            <div className="toast-container position-fixed bottom-0 end-0 p-3">
              <div id="successToast" className="toast">
                <div className="toast-body bg-success text-white">
                  Profile updated successfully ✅
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
