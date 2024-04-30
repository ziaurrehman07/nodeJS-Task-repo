import React, { useState } from "react";
import axios from "axios";

const RegisterInterview = () => {
  const [formData, setFormData] = useState({
    company: "",
    date: "",
    student: "",
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
        "http://localhost:8000/api/v1/interviews/all-interview",
        formData
      );
      // console.log("Student created:", response.data.data);
      setFormData({
        company: "",
        date: "",
        student: "",
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
          <label className="block mb-1">Company:</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
          />
        </div>
        <div>
          <label className="block mb-1">Date:</label>
          <input
            type="text"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"
          />
        </div>
        <div>
          <label className="block mb-1">Student:</label>
          <input
            type="text"
            name="student"
            value={formData.student}
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

export default RegisterInterview;
