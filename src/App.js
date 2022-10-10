import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error from "./Components/Error";
import Me  from "./Components/Me";

import About from "./Components/About";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />}>
        <Route path='Me' element={<Me/>} />
        <Route path='Skills' element={<Skills/>} />
        
        </Route>



        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}
// import { Form } from "react-router-dom";

export default App;
