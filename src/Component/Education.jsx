import React from "react";
import {  education } from "../data/constant";
import { motion} from "framer-motion";
function Education() {
  const color = {
    color1: "#11998E",
    color2: "#1EAE98",
    color3: "#57C5B6",
    color4: "#1A5F7A",
    color5: "#002A5B",
    textcolor: "gray-200xl",
    bg: "E3FEF7",
    cardcolor: "text-[#088395]",
  };
  
  return (
    <div id="education" className="borber-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl font-medium font-serif text-[#002A5B]">
        Education
      </h1>
      <div>
        {education.map((education, index) => {
          return (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="w-full lg:w-1/4"
              >
                <p className="mb-2 text-lg font-serif text-[#11998E]">
                  {education.date}
                </p>
              </motion.div>
              <motion.div
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="p-2  rounded-lg bg-[#ACE2E1]  w-full max-w-xl lg:3 border-2 border-[#11998E] shadow-md"
              >
                <p className="mb-2 flex max-lg:flex-wrap font-serif  text-[#088395]">
                  <span>
                    <img
                      className="rounded-lg"
                      src={education.img}
                      width={45}
                      height={40}
                    />
                  </span>
                  <span className="font-thin text-2xl lg:mx-2 text-[#088395]">
                    {education.school}
                  </span>
                </p>
                <h5 className="text-[#37B7C3] font-thin font-serif">
                  {education.degree}
                </h5>
                <h4 className="text-[#071952] font-serif">
                  Grade- {education.grade}
                </h4>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Education;
