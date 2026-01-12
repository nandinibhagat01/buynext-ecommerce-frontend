import { useNavigate } from "react-router-dom";
import EditProfileDropdowns from "./EditProfileDropdowns";
import { useEffect, useState } from "react";
import { getUser, updateUser } from "../../utils/auth";

const EditProfile = () => {
  const navigate = useNavigate();
  const user = getUser();

  useEffect(() => {
    if (!user) navigate("/Profile");
  }, [navigate]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    gender: "",
    language: "",
    occupation: "",
    state: "",
    city: "",
    zip: "",
  });

  // Prefill
  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        address: user.address || "",
        gender: user.gender || "",
        language: user.language || "",
        occupation: user.occupation || "",
        state: user.state || "",
        city: user.city || "",
        zip: user.zip || "",
      });
    }
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(formData);
    navigate("/Profile");
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <img
          class="d-block mx-auto mb-4"
          src=""
          alt="profile image"
          width="72"
          height="57"
        />
        <h2>Edit Profile</h2>
        <p className="lead">Update your personal information</p>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-sm-6">
                <label htmlFor="firstName" className="form-label">
                  First name*
                </label>
                <input
                  name="firstName"
                  className="form-control"
                  value={formData.firstName}
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
                  value={formData.lastName}
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
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <EditProfileDropdowns
                formData={formData}
                setFormData={setFormData}
              />
              <div className="col-12">
                <label htmlFor="address" className="form-label">
                  Address*
                </label>
                <input
                  name="address"
                  className="form-control"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <label htmlFor="address" className="form-label">
                  Address (Optional)
                </label>
                <input
                  name="city"
                  className="form-control"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
              <div class="col-12">
                <label for="zip" class="form-label">
                  Zip*
                </label>
                <input
                  name="zip"
                  className="form-control"
                  value={formData.zip}
                  onChange={handleChange}
                />
                <div class="invalid-feedback">Zip code required.</div>
              </div>

              <div className="col-12">
                <label for="state" class="form-label">
                  State*
                </label>
                <select
                  name="state"
                  className="form-select"
                  value={formData.state}
                  onChange={handleChange}
                >
                  <option value="">Choose...</option>
                  <option>California</option>
                </select>
                <div class="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
            </div>
            <hr className="my-4" />
            <button className="w-100 btn btn-primary btn-lg" type="submit">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;

<div class="col-12">
  <label for="zip" class="form-label">
    City*
  </label>
  <input
    type="text"
    class="form-control"
    id="zip"
    placeholder=""
    required=""
    fdprocessedid="kwin62"
  />
  <div class="invalid-feedback">Enter a valid city name.</div>
</div>;
