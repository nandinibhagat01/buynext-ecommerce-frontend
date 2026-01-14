const FormLocation = ({ profile, handleChange }) => {
  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Delhi",
    "Gujarat",
    "Karnataka",
    "Maharashtra",
    "Tamil Nadu",
    "Telangana",
    "Uttar Pradesh",
    "West Bengal",
  ];

  return (
    <>
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
          <option value="">Select</option>
          {states.map((state) => (
            <option key={state}>{state}</option>
          ))}
        </select>
        <div className="invalid-feedback">Please provide a valid state.</div>
      </div>
    </>
  );
};
export default FormLocation;
