import React from "react";
import { Bio } from "../data/constant";
import { delay, motion } from "framer-motion";
function About() {
  const color = {
    color1: "#11998E",
    color2: "#1EAE98",
    color3: "#57C5B6",
    color4: "#1A5F7A",
    color5: "#002A5B",
    textcolor: "gray-200xl",
  };
  return (
    <div id="about" className=" pb-4">
      <h1 className="my-20 text-center text-4xl font-medium font-serif text-[#002A5B] animate-bounce">
        ABOUT
        <span className=" text-[#57C5B6]  font-thin "> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8  flex justify-center items-center ">
          <motion.img
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            src="About.jpg"
            width="300px"
            className="rounded-2xl lg:w-full shadow-md"
          />
        </div>
        <div className="w-full lg:w-1/2 ">
          <div className="flex justify-center lg:justify-center">
            <motion.p
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="my-2 max-w-xl py-6 pb-3 font-light tracking-tight font-serif text-[#107195]  "
            >
              {Bio.aboutMe.map((value, index) => {
                return (
                  <p key={index} className="py-3 indent-16">
                    {value}
                  </p>
                );
              })}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
