import React from "react";
import './sass/main.scss';
import Landing from "./components/layouts/landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserDashboard from "./pages/UserDashboard";
import MedicalPackage from "./pages/MedicalPackage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/login/:id" element={<Login/>}></Route>
       
        <Route path="/signup/:id" element={<Signup/>}></Route>
        
        <Route path="/login/User/dashboard" element={<UserDashboard/>}></Route>
        <Route path="/login/User/dashboard/:id" element={<MedicalPackage/>}></Route>

      </Routes>
    </Router>
    // <div className="App">
    //   <Landing/>
    // </div>
  );
}

export default App;
