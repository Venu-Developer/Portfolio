import React, { useRef } from "react";
import "./App.css";
import Hero from "./Component/Hero";
import About from "./Component/About";
import Education from "./Component/Education";
import Project from "./Component/Project";
import Skills from "./Component/Skills";
import Contact from "./Component/Contact";
import Nav from "./Component/nav";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
 
  return (
    <div className="relative overflow-x-hidden text-gray-200-300 antialiased  selection:bg-cyan-300 selection:text-cyan-900 w-100 bg-[#1EAE98] bg-opacity-[15%]">
      <Nav />
      <div className=" container mx-auto px-8">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Project />
      </div>
      <Contact />
      <ToastContainer />
    </div>
  );
}

export default App;
