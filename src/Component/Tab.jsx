import React, { useState } from "react";
import { Menu } from "../data/constant";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion, spring } from "framer-motion";
function Tab() {
  const [activeTab, setActiveTab] = useState(Menu[0].id);
  return (
    <div className=" flex flex-col md:flex-row md:space-x-2  w-fit  text-white px-3">
      {Menu.map((value, index) => {
        return (
          <AnchorLink
            href={`#${value.id}`}
            key={index}
            onClick={() => setActiveTab(value.id)}
            className={`${
              activeTab == value.id ? "text-white" : "hover:text-slate-700 "
            }   relative rounded-full px-3 py-1.5 text-sm font-medium  transition  focus-visible:outline-2`}
          >
            {activeTab == value.id && (
              <motion.span
                layoutId="active-pill"
                className="absolute inset-1 z-10 bg-white  mix-blend-exclusion"
                style={{ borderRadius: 9999 }}
                transition={{ type: spring, duration: 2 }}
              />
            )}
            {value.name}
          </AnchorLink>
        );
      })}
    </div>
  );
}

export default Tab;
