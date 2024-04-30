import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ handleLogout }) => {
  const history = useNavigate();

  const handleClick = () => {
    handleLogout();
    history("/signin"); // Redirect to signin page after logout
  };

  return (
    <button
      onClick={handleClick}
      className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
    >
      Logout
    </button>
  );
};

export default Logout;
