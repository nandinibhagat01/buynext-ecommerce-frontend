const EditProfileDropdowns = ({ formData, setFormData }) => {
  const occupation_options = [
    "Housewife",
    "Teacher",
    "Student",
    "Business",
    "Job/Service",
    "Others",
  ];

  const handleSelect = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <div className="col-12">
        <label for="state" class="form-label">
          Gender
        </label>
        <select
          name="gender"
          className="form-select"
          value={formData.gender}
          onChange={handleSelect}
        >
          <option value="">Select</option>
          <option>Male</option>
          <option>Female</option>
          <option>Others</option>
        </select>
      </div>
      <div className="col-12">
        <label for="state" class="form-label">
          Languages Spoken
        </label>
        <select
          name="language"
          className="form-select"
          value={formData.language}
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
        <label for="state" class="form-label">
          Occupation
        </label>
        <select
          name="occupation"
          className="form-select"
          value={formData.occupation}
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


// export const states = [
//   "Andhra Pradesh",
//   "Arunachal Pradesh",
//   "Assam",
//   "Bihar",
//   "Delhi",
//   "Gujarat",
//   "Karnataka",
//   "Maharashtra",
//   "Tamil Nadu",
//   "Telangana",
//   "Uttar Pradesh",
//   "West Bengal",
// ];
// import { states } from "./states";

// <select
//   name="state"
//   className="form-select"
//   value={formData.state}
//   onChange={handleSelect}
// >
//   <option value="">Select State</option>
//   {states.map((state) => (
//     <option key={state}>{state}</option>
//   ))}
// </select>
