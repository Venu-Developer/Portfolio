import React, { useState } from "react";
import { projects } from "../data/constant";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { motion } from "framer-motion";
import "../App.css";
function Project() {
  //state
  // const project=useRef()
  const [showActiveProject, setShowActiveProject] = useState(0);
  //onclick Functions
  function sliderLeft() {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 300;
  }
  function sliderRigth() {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 300;
  }
  return (
    <div id="project">
      <motion.h6
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1, delay: 0.1 }}
        className="my-20 text-center text-4xl font-medium font-serif text-[#002A5B] animate-bounce"
      >
        Project
      </motion.h6>
      <div className="relative flex items-center ">
        <div>
          <FaLessThan
            onClick={sliderLeft}
            className="text-[#11998E] m-2 hover:opacity-15 cursor-pointer"
          />
        </div>
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll overflow-hidden scroll whitespace-nowrap scroll-smooth  scrollbar-hide group"
        >
          {projects.map((value, index) => {
            return (
              <div className="inline-block border m-2 p-1 rounded-md bg-[#11998E] bg-opacity-70 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 ">
                <img
                  key={index}
                  className=" w-[300px]  p-2 cursor-pointer hover:scale-105 ease-in-out duration-300  "
                  src={value.image}
                  alt="project"
                />
                <div className="text-center mb-2">
                  <button
                    className={`mx-auto border   text-[#002A5B] px-2 rounded-lg font-serif  transform hover:bg-[#bbe2be] bg-opacity-120 border-[#D6EFD8] ${
                      showActiveProject == index
                        ? "bg-[#E6FF94]"
                        : "bg-[#D6EFD8]"
                    }`}
                    onClick={() => setShowActiveProject(index)}
                  >
                    Show More
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="">
          <FaGreaterThan
            onClick={sliderRigth}
            className="text-[#11998E] m-3 hover:opacity-15 cursor-pointer"
          />
        </div>
      </div>
      <div className="flex w-full  justify-center ">
        {projects.map((value, index) => {
          return (
            showActiveProject == index && (
              <motion.div
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className=" w-full lg:w-1/2 border p-3 m-3 rounded-lg bg-[#ACE2E1]"
              >
                <p className="mb-2 font-semibold  text-lg font-serif text-[#11998E] text-center">
                  {value.title} - {value.date}
                </p>
                <p className="mb-4 font-serif  text-[#088395]">
                  {value.description}
                </p>
                <div className="flex flex-wrap">
                  {value.tags.map((skill, index) => {
                    return (
                      <span
                        className="p-1 m-2  font-serif border border-[#57C5B6] bg-[#91DDCF]  rounded-lg text-[rgb(0,42,91)]"
                        key={index}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
                <p className="mt-2 font-serif text-indigo-950">
                  Github Link -{" "}
                  <a href={`${value.github}`} target="_blank">
                    {value.github}
                  </a>
                </p>
                {value.webapp != "no" && (
                  <div className="text-center">
                    <button className="border-[#F1F5A8]  hover:bg-[#F1F5A8] px-2  rounded-lg font-serif   bg-[#E6FF94] text-[#002A5B]">
                      <a href={value.webapp} target="_blank">
                        View Project
                      </a>
                    </button>
                  </div>
                )}
              </motion.div>
            )
          );
        })}
      </div>
    </div>
  );
}

export default Project;
