import React from "react";
import { Link } from "react-router-dom";
import Logout from "../components/Logout";

function Home() {
  return (
    <div className="bg-blue-700 h-[100px] w-full flex justify-center place-items-center">
      <Link to="/student">
        <button className="bg-red-400 text-xl font-bold p-3 rounded-full m-5 ">
          Student
        </button>
      </Link>
      <Link to="/interview">
        <button className="bg-red-400 text-xl font-bold p-3 rounded-full m-5 ">
          Interview
        </button>
      </Link>
    </div>
  );
}

export default Home;
