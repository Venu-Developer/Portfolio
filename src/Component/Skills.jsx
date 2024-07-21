import React  from "react";
import { Allskills } from "../data/constant";
import { motion, spring } from "framer-motion";
//framer motion
const iconVariables = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
function Skills() {
 
  return (
    <div id="skills" className="pb-4">
      <motion.h6
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1, delay: 0.1 }}
        className="my-10 text-center animate-bounce text-4xl font-medium font-serif text-[#002A5B]"
      >
        Skills
      </motion.h6>
      <div className="flex flex-wrap justify-center ">
        {Allskills.map((value, index) => {
          return (
            <div key={index} className="w-full lg:w-1/2 ">
              <h6 className="my-20 text-center text-4xl text-[#088395] font-serif animate-pulse">
                {value.title}
              </h6>
              <motion.div
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 1.2, delay: 0.5 }}
                className=" flex flex-wrap justify-center gap-2 border m-2 rounded-lg bg-[#1EAE98] bg-opacity-20 "
              >
                {" "}
                {value.skills.map((skill) => {
                  return (
                    <motion.div
                      variants={iconVariables(2.5)}
                      initial="initial"
                      animate="animate"
                      className="border border-[#57C5B6] bg-[#91DDCF]  p-2 rounded-lg text-[rgb(0,42,91)]    grid lg:grid-cols-2 m-3"
                    >
                      <img
                        className="mr-2 relative rounded-lg "
                        src={skill.image}
                        width={50}
                      />
                      <p className="pr-2 mt-3 font-serif ">{skill.name}</p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Skills;
