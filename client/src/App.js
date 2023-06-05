import React from "react";
import './sass/main.scss';
import Landing from "./components/layouts/landing";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
      </Routes>
    </Router>
    // <div className="App">
    //   <Landing/>
    // </div>
  );
}

export default App;
