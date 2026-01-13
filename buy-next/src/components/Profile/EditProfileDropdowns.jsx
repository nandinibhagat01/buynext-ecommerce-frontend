import { useDispatch } from "react-redux";
import { ProfileActions } from "../store/ProfileSlice";

const EditProfileDropdowns = ({ profile }) => {
  const dispatch = useDispatch();
  const occupation_options = [
    "Housewife",
    "Teacher",
    "Student",
    "Business",
    "Job/Service",
    "Others",
  ];

  const handleSelect = (e) => {
    dispatch(ProfileActions.setProfile({ [e.target.name]: e.target.value }));
  };
  
  return (
    <>
      <div className="col-12">
        <label htmlFor="state" className="form-label">
          Gender
        </label>
        <select
          name="gender"
          className="form-select"
          value={profile.gender}
          onChange={handleSelect}
        >
          <option value="">Select</option>
          <option>Male</option>
          <option>Female</option>
          <option>Others</option>
        </select>
      </div>
      <div className="col-12">
        <label htmlFor="state" className="form-label">
          Languages Spoken
        </label>
        <select
          name="language"
          className="form-select"
          value={profile.language}
          onChange={handleSelect}
        >
          <option value="">Select</option>
          <option>Hindi</option>
          <option>English</option>
          <option>Bengali</option>
          <option>Tamil</option>
        </select>
      </div>
      <div className="col-12">
        <label htmlFor="state" className="form-label">
          Occupation
        </label>
        <select
          name="occupation"
          className="form-select"
          value={profile.occupation}
          onChange={handleSelect}
        >
          {occupation_options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
export default EditProfileDropdowns;
