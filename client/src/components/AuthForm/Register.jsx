import React, { useState } from "react";
import "./Register.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
    agreedTerms: false,
  });
  const [passwordError, setPasswordError] = useState("");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: val,
    });

    if (name === 'password' && value.length > 0 && value.length < 8) {
        setPasswordError("Password should be at least 8 characters");
      } else {
        setPasswordError("");
      }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.repeatPassword) {
      setPasswordError("Passwords do not match!");
    } else {
      setPasswordError("");
      console.log(formData);
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center bg-image"
      style={{ backgroundImage: "url()" }}
    >
      <div className="mask gradient-custom-3"></div>
      <div className="m-5" style={{ maxWidth: "600px" }}>
        <div className="px-5">
          <h2 className="text-uppercase text-center mb-5">Create Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="form1" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="form1"
                name="name"
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="form2" className="form-label">
                Your Email
              </label>
              <input
                type="email"
                className="form-control form-control-lg"
                id="form2"
                name="email"
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="form3" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control form-control-lg"
                id="form3"
                name="password"
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="form4" className="form-label">
                Repeat your password
              </label>
              <input
                type="password"
                className="form-control form-control-lg"
                id="form4"
                name="repeatPassword"
                onChange={handleInputChange}
              />
            </div>
            <div className="d-flex flex-row justify-content-center mb-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexCheckDefault"
                  name="agreedTerms"
                  onChange={handleInputChange}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  I agree all statements in Terms of service
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-lg w-100 gradient-custom-4">
              Register
            </button>
            <p> Have already an account? <Link to="/login">Login</Link></p>
            {passwordError && <p className="d-flex flex-row justify-content-center gradient-custom-5"> {passwordError}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
