import React, { useState } from "react";
import axios from "axios";

const StudentRegister = () => {
  const [formData, setFormData] = useState({
    batch: "",
    name: "",
    email: "",
    phone: "",
    college: "",
    dsaFinalScore: "",
    webDFinalScore: "",
    reactFinalScore: "",
    status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:8000/api/v1/studentlist/all-student",
        formData
      );
      // console.log("Student created:", response.data.data);
      setFormData({
        batch: "",
        name: "",
        email: "",
        phone: "",
        college: "",
        dsaFinalScore: "",
        webDFinalScore: "",
        reactFinalScore: "",
        status: "",
      });
    } catch (error) {
      console.error("Error creating student:", error.response.data.message);
    }
  };
  return (
    <div className="max-w-md mx-auto bg-white p-8 my-10 rounded-lg shadow-md">
      <h2 className="text-red-400 text-2xl font-bold mb-6">Register Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Batch:</label>
          <input
            type="text"
            name="batch"
            value={formData.batch}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
          />
        </div>
        <div>
          <label className="block mb-1">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
          />
        </div>
        <div>
          <label className="block mb-1">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
          />
        </div>
        <div>
          <label className="block mb-1">Phone Number:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
          />
        </div>
        <div>
          <label className="block mb-1">College Name:</label>
          <input
            type="text"
            name="college"
            value={formData.college}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
          />
        </div>
        <div>
          <label className="block mb-1">Dsa Final Score:</label>
          <input
            type="text"
            name="dsaFinalScore"
            value={formData.dsaFinalScore}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
          />
        </div>
        <div>
          <label className="block mb-1">WebD Final Score:</label>
          <input
            type="text"
            name="webDFinalScore"
            value={formData.webDFinalScore}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
          />
        </div>
        <div>
          <label className="block mb-1">React Final Score:</label>
          <input
            type="text"
            name="reactFinalScore"
            value={formData.reactFinalScore}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
          />
        </div>
        <div>
          <label className="block mb-1">Status:</label>
          <input
            type="text"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default StudentRegister;
