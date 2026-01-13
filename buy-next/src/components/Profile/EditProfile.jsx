import { useNavigate } from "react-router-dom";
import EditProfileDropdowns from "./EditProfileDropdowns";
import { useDispatch, useSelector } from "react-redux";
import { ProfileActions } from "../store/ProfileSlice";
import { OTPActions } from "../store/OTPSlice";

const EditProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profile = useSelector((state) => state.profile);
  const otp = useSelector((state) => state.otp);

  const handleChange = (e) => {
    dispatch(
      ProfileActions.setProfile({
        [e.target.name]: e.target.value,
      })
    );
  };
  const sendOtpHandler = () => {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    dispatch(OTPActions.sendOtp(code));
    alert(`OTP (demo): ${code}`);
  };

  const verifyOtpHandler = () => {
    if (otp.enteredOtp === otp.generatedOtp) {
      dispatch(ProfileActions.verifyPhone());
      dispatch(OTPActions.resetOtp());
      alert("Phone verified ✅");
    } else {
      alert("Invalid OTP ❌");
    }
  };
  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <img
          className="d-block mx-auto mb-4"
          src="logo1.jpeg"
          alt="profile image"
          width="72"
          height="57"
        />

        <h2>Edit Profile</h2>
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

              <div className="col-12 text-center">
                {profile.avatar && (
                  <img
                    src={profile.avatar}
                    alt="Avatar"
                    className="rounded-circle mb-3"
                    width="100"
                    height="100"
                  />
                )}

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
              <div className="col-12">
                <label className="form-label">Phone Number</label>
                <input
                  name="phone"
                  className="form-control"
                  value={profile.phone}
                  disabled={!otp.isEditingPhone && profile.phoneVerified}
                  onChange={(e) =>
                    dispatch(ProfileActions.updatePhone(e.target.value))
                  }
                  placeholder="Phone Number"
                />
                {!profile.phoneVerified && !otp.isEditingPhone && (
                  <button
                    type="button"
                    className="btn btn-outline-secondary mt-2"
                    onClick={() => dispatch(OTPActions.startEditingPhone())}
                  >
                    Change phone number
                  </button>
                )}
                {/* OTP UI */}
                {otp.isEditingPhone && (
                  <>
                    {!otp.otpSent && (
                      <button
                        type="button"
                        className="btn btn-outline-primary mt-2"
                        onClick={sendOtpHandler}
                      >
                        Send OTP
                      </button>
                    )}

                    {otp.otpSent && (
                      <>
                        <input
                          className="form-control mt-2"
                          placeholder="Enter OTP"
                          value={otp.enteredOtp}
                          onChange={(e) =>
                            dispatch(OTPActions.enterOtp(e.target.value))
                          }
                        />

                        <button
                          type="button"
                          className="btn btn-success mt-2"
                          onClick={verifyOtpHandler}
                        >
                          Verify OTP
                        </button>
                      </>
                    )}
                  </>
                )}
              </div>

              <EditProfileDropdowns profile={profile} />
              <div className="col-12">
                <label htmlFor="address" className="form-label">
                  Address*
                </label>
                <input
                  name="address"
                  className="form-control"
                  value={profile.address}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <label htmlFor="address_opt" className="form-label">
                  Address (Optional)
                </label>
                <input
                  name="address_opt"
                  className="form-control"
                  value={profile.address_opt}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <label htmlFor="zip" className="form-label">
                  Zip*
                </label>
                <input
                  name="zip"
                  className="form-control"
                  value={profile.zip}
                  onChange={handleChange}
                />
                <div className="invalid-feedback">Zip code required.</div>
              </div>
              <div className="col-12">
                <label htmlFor="cuty" className="form-label">
                  City*
                </label>
                <input
                  name="city"
                  className="form-control"
                  value={profile.city}
                  onChange={handleChange}
                />
              </div>

              <div className="col-12">
                <label htmlFor="state" className="form-label">
                  State*
                </label>
                <select
                  name="state"
                  className="form-select"
                  value={profile.state}
                  onChange={handleChange}
                >
                  <option value="">Choose...</option>
                  <option>California</option>
                </select>
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
            </div>
            <hr className="my-4" />
            <button className="w-100 btn btn-primary btn-lg" type="submit">
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
