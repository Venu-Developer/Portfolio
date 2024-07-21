import React from "react";
import { Bio } from "../data/constant.jsx";
import { motion } from "framer-motion";
import "../App.css";
const color = {
  color1: "#11998E",
  color2: "#1EAE98",
  color3: "#57C5B6",
  color4: "#1A5F7A",
  color5: "#002A5B",
  textcolor: "gray-200xl",
};
const Container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
function Hero() {
  return (
    <div id="hero" className="w-100 ">
      <div className="my-20 flex flex-wrap  ">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start ">
            <motion.h1
              variants={Container(0)}
              initial="hidden"
              animate="visible"
              className="animate-text-reveal pb-16 text-6xl font-semibold  tracking-tight  lg:mt-8 lg:text-8xl text-[#002A5B]"
            >
              {Bio.name}
            </motion.h1>
            <motion.span
              variants={Container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-neutral-700 font-serif via-slate-500 to-sky-400 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Front End Developer
            </motion.span>
            <motion.p
              variants={Container(1)}
              initial="hidden"
              animate="visible"
              className={`my-2 max-w-xl py-6 font-light tracking-tight font-serif text-[#107195] leading-7`}
            >
              {Bio.description}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2  lg:p-8  flex justify-center items-center">
          <motion.div
            className="box "
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <div className="content">
              <img src="hero.jpg" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
