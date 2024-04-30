import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/studentlist/all-student")
      .then((response) => {
        setStudents(response.data);
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
          Student List
        </h2>
        <Link to="/createtudent">
          <button className="ml-4 bg-green-400 text-md font-bold rounded-xl px-1">
            Create
          </button>
        </Link>
      </div>
      <table className="table-auto w-full">
        <thead className="bg-blue-400 text-white">
          <tr>
            <th className="px-4 py-2">Batch</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Phone Number</th>
            <th className="px-4 py-2">College Name</th>
            <th className="px-4 py-2">Dsa Final Score</th>
            <th className="px-4 py-2">WebD Final Score</th>
            <th className="px-4 py-2">React Final Score</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id} className="bg-yellow-300">
              <td className="border px-4 py-2">{student.batch}</td>
              <td className="border px-4 py-2">{student.name}</td>
              <td className="border px-4 py-2">{student.email}</td>
              <td className="border px-4 py-2">{student.phone}</td>
              <td className="border px-4 py-2">{student.college}</td>
              <td className="border px-4 py-2">{student.dsaFinalScore}</td>
              <td className="border px-4 py-2">{student.webDFinalScore}</td>
              <td className="border px-4 py-2">{student.reactFinalScore}</td>
              <td className="border px-4 py-2">{student.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
