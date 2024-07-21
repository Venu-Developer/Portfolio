import React, { useState,useRef } from "react";
import { Menu } from "../data/constant";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {  motion, spring } from "framer-motion";
import { GiCircleSparks } from "react-icons/gi";

function Nav() {
  //state
  let [menu, setMenu] = useState(false);
  const [activeTab, setActiveTab] = useState(Menu[0].id);
  const color={
    primaryColor:"#11998E",
    secondaryColor:"#1EAE98",
    color3:'#57C5B6',
    color4:"#1A5F7A",
    color5:"#002A5B",
    textcolor:"gray-200xl"
  }


  const Container=(delay)=>({
    hidden:{z:-300,opacity : 0},
    visible:{
      z:0,
      opacity:1,
      transition:{duration:1,delay:delay}
    }
  })
  return (
    <motion.div variants={Container(0.5)} initial="hidden" animate="visible" className={`fixed w-full bg-[#11998E] z-[100]`}>  
      <div className="flex justify-between md:justify-around text-2xl items-center w-full">
        <div>
          <p className=" flex items-center font-serif"><span className="px-1 "> <GiCircleSparks className=" text-yellow-300 shadow-md shadow-yellow-300 rounded-full font-bold"/></span> <span className="text-gray-200xl text-4xl">P</span><span className="text-4xl">ortfolio</span></p>
        </div>
          <div className={`md:static absolute right-0  top-0 text-center ${menu?'top-[-499] opacity-0':'top-8'} bg-[#11998E] rounded-xl`}>
            <div className={`flex flex-col md:flex-row  p-7 md:p-4 rounded-lg bg-[${color.color1}] md:z-auto z-[-1]  `}>
            {Menu.map((value, index) => {
              return (
                <AnchorLink
                  
                  href={`#${value.id}`}
                  key={index}
                  onClick={() => setActiveTab(value.id)}
                  className={`${
                    activeTab === value.id
                      ?"text-[#002A5B]"
                      : "hover:text-yellow-50 border-b hover:border-[#002A5B]"
                  }   relative rounded-full px-3 py-1.5 text-sm font-medium  transition  focus-visible:outline-2 `}
                >
                  {activeTab === value.id && (
                    <motion.span
                      layoutId="active-pill"
                      className={`absolute inset-0 z-10  bg-[#57C5B6]`}
                      style={{ borderRadius: 9999 }}
                      transition={{type:spring, duration: 1 }}
                    />
                  )}
                  <span className="relative z-10 w-fit font-serif ">{value.name}</span>
                </AnchorLink>
              );
            })}
            </div>
          </div>
        <div className="flex items-center text-3xl md:hidden cursor-pointer ">
          <ion-icon onClick={()=>{setMenu(!menu)}}  name={menu?"menu":"close"}></ion-icon>
        </div>
      </div>
      
    </motion.div>
  );
}
export default Nav;
