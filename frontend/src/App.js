import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import InterviewList from "./components/InterviewList";
import RegisterInterview from "./components/RegisterInterview";
import StudentList from "./components/StudentList";
import StudentRegister from "./components/StudentRegister";
import Home from "./pages/Home";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Logout from "./components/Logout";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  const handleAuthentication = () => {
    setAuthenticated(true);
  };

  const handleLogout = () => {
    // Perform logout actions, such as clearing tokens or user data
    setAuthenticated(false);
  };

  return (
    <div>
      <Routes>
        {/* Public routes */}

        <Route
          path="/"
          element={<Signup handleAuthentication={handleAuthentication} />}
        />
        <Route
          path="/signin"
          element={<Signin handleAuthentication={handleAuthentication} />}
        />

        {/* Private routes, accessible only after authentication */}
        {authenticated ? (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/student" element={<StudentList />} />
            <Route path="/interview" element={<InterviewList />} />
            <Route path="/createtudent" element={<StudentRegister />} />
            <Route path="/createinterview" element={<RegisterInterview />} />
          </>
        ) : null}
      </Routes>
      <div className=" flex justify-center  mt-32">
        {authenticated && <Logout handleLogout={handleLogout} />}
      </div>
    </div>
  );
}

export default App;
