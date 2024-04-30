import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = ({ handleAuthentication }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const history = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/v1/user/signin", formData)
      .then((response) => {
        console.log("Signin successful:", response.data);
        handleAuthentication();
        history("/"); // Redirect to home page after successful signin
      })
      .catch((error) => {
        console.error("Error signing in:", error);
      });
  };

  return (
    <div>
      <h2>Signin</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Signin</button>
      </form>
    </div>
  );
};

export default Signin;
