import { useDispatch, useSelector } from "react-redux";
import { OTPActions } from "../store/OTPSlice";
import { ProfileActions } from "../store/ProfileSlice";

const PhoneVerify = ({ profile }) => {
  const otp = useSelector((state) => state.otp);
  const dispatch = useDispatch();

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
    <>
      <div className="col-12">
        <label className="form-label">Phone Number</label>
        <div className="input-group">
        <input
          name="phone"
          className="form-control"
          value={profile.phone}
          disabled={!otp.isEditingPhone && profile.phoneVerified}
          onChange={(e) => dispatch(ProfileActions.updatePhone(e.target.value))}
          placeholder="Phone Number"
        />
        {!profile.phoneVerified && !otp.isEditingPhone && (
          <button
            type="button"
            className="btn text-light bg-purple-500"
            onClick={() => dispatch(OTPActions.startEditingPhone())}
          >
            Change phone number
          </button>
        )}
        </div>
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
    </>
  );
};

export default PhoneVerify;
