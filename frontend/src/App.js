import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import InterviewList from "./components/InterviewList";
import RegisterInterview from "./components/RegisterInterview";
import StudentList from "./components/StudentList";
import StudentRegister from "./components/StudentRegister";
import Home from "./pages/Home";
import Signup from "./components/Signup";
import Signin from "./components/Signin";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  const handleAuthentication = () => {
    setAuthenticated(true);
  };

  return (
    <Routes>
      {/* Public routes */}

      <Route
        path="/signup"
        element={<Signup handleAuthentication={handleAuthentication} />}
      />
      <Route
        path="/signin"
        element={<Signin handleAuthentication={handleAuthentication} />}
      />

      {/* Private routes, accessible only after authentication */}
      {authenticated ? (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<StudentList />} />
          <Route path="/interview" element={<InterviewList />} />
          <Route path="/createtudent" element={<StudentRegister />} />
          <Route path="/createinterview" element={<RegisterInterview />} />
        </>
      ) : null}
    </Routes>
  );
}

export default App;
