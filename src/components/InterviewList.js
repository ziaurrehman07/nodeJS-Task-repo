import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const InterviewList = () => {
  const [interview, setInterview] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/interviews/all-interview")
      .then((response) => {
        setInterview(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching student data:", error);
      });
  }, []);

  return (
    <div>
      <div className="flex justify-center place-items-center">
        <h2 className="text-blue-700 text-3xl font-bold flex place-content-center">
          Interview List
        </h2>
        <Link to="/createinterview">
          <button className="ml-4 bg-green-400 text-md font-bold rounded-xl px-1">
            Create
          </button>
        </Link>
      </div>
      <table className="table-auto w-full">
        <thead className="bg-blue-400 text-white">
          <tr>
            <th className="px-4 py-2">Company</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Student</th>
          </tr>
        </thead>
        <tbody>
          {interview.map((interviewdata) => (
            <tr key={interviewdata._id} className="bg-yellow-300">
              <td className="border px-4 py-2">{interviewdata.company}</td>
              <td className="border px-4 py-2">{interviewdata.date}</td>
              <td className="border px-4 py-2">{interviewdata.student}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InterviewList;
