import React from "react";
import Home from "./Home";
import Nav from "./Nav";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import About from "./About";
import Service from "./Service";
import Project from "./Project";
import Contact from "./Contact";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/services" element={<Service />} />
            <Route exact path="/projects" element={<Project />} />
            <Route exact path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
