import { useDispatch } from "react-redux";
import { ProfileActions } from "../store/ProfileSlice";
import { useState } from "react";


const EditProfileDropdowns = ({ profile }) => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const occupation_options = [
    "Select",
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

  const handleLanguageChange = (lang) => {
    const currentLanguages = Array.isArray(profile.language)
      ? profile.language
      : profile.language
      ? [profile.language]
      : [];

    const updatedLanguages = currentLanguages.includes(lang)
      ? currentLanguages.filter((l) => l !== lang)
      : [...currentLanguages, lang];

    dispatch(
      ProfileActions.setProfile({
        language: updatedLanguages,
      })
    );
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
        <label className="form-label">Languages Spoken</label>

        <div className="position-relative">
          <button
            type="button"
            className="form-select text-start"
            onClick={() => setOpen(!open)}
          >
            {profile.language.length > 0
              ? Array.isArray(profile.language)
                ? profile.language.join(", ")
                : profile.language
              : "Select Languages"}
          </button>

          {open && (
            <div className="dropdown-menu show w-100 p-2">
              {["Hindi", "English", "Bengali", "Tamil"].map((lang) => (
                <div className="form-check" key={lang}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={profile.language.includes(lang)}
                    onChange={() => handleLanguageChange(lang)}
                  />
                  <label className="form-check-label">{lang}</label>
                </div>
              ))}
            </div>
          )}
        </div>
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
