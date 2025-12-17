import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { NavLink, Link } from "react-router-dom";
import Hamburger from "hamburger-react";

function Navbar() {
  const navItems = ["Home", "About", "Skills", "Project","Certificates", "Contact"];
        const slideUp = {
          hidden: { opacity: 0, y: 50 },
          visible: (custom) => ({
            opacity: 1,
            y: 0,
            transition: { delay: 0.1 * custom, duration:0.6,ease: "easeInOut" },
          }),
  };
  const [isOpen, setisOpen] = useState(false);
  const toogle = () => {
    setisOpen(!isOpen)
  }
  return (
    <>
      {/* // Desktop Menu */}
      <div className=" hidden md:flex flex-wrap justify-evenly items-center space-y-3 p-2 bg-[#12293D]    ">
        {/* Logo */}
        <motion.div
          className="flex space-x-1"
          initial="hidden"
          animate="visible"
          variants={slideUp}
          custom={4}
        >
          <span className="text-3xl font-medium tracking-wide">Port</span>
          <span
            className="text-3xl font-medium tracking-wide"
            style={{ color: "#3a8cb9" }}
          >
            folio
          </span>
        </motion.div>

        {/* Nav Links */}
        <div className="flex flex-wrap cursor-pointer flex-col items-center gap-5 justify-around text-2xl md:flex-row space-x-15">
          {navItems.map((item, index) => (
            <Link key={index} to={`/${item}`}>
              <motion.h1
                // initial="hidden"
                // animate="visible"
                // variants={slideUp}
                // custom={index + 5}
                key={item}
                tabIndex={0}
                className="text-white group inline-block text-xl font-semibold relative hover:text-blue-400 focus:text-blue-400 transform transition-transform duration-500 hover:scale-105 focus:scale-105 outline-none"
              >
                {item}
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-600 transition-all duration-500 group-hover:w-full group-focus:w-full"></span>
              </motion.h1>
            </Link>
          ))}
        </div>

        {/* Button */}
        <motion.div
        // className="opacity-0 "
        // initial="hidden"
        // animate="visible"
        // variants={slideUp}
        // custom={12}
        >
          <Link to="https://drive.google.com/file/d/1cm3N3o3H3nJkFUAOd9DkO6zjCKmEH_Zg/view?usp=drivesdk ">
            {" "}
            <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-1.5 px-4 rounded flex items-center gap-2">
              Download CV
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 fill-white"
                viewBox="0 0 24 24"
              >
                <path d="M12 16l4-5h-3V4h-2v7H8l4 5zm8 2H4v2h16v-2z" />
              </svg>
            </button>
          </Link>
        </motion.div>
      </div>
      <div className=" p-3 md:hidden flex justify-between">
        <motion.div
          className="flex space-x-1"
          // initial="hidden"
          // animate="visible"
          // variants={slideUp}
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <span className="text-3xl font-medium tracking-wide">Port</span>
          <span
            className="text-3xl font-medium tracking-wide"
            style={{ color: "#3a8cb9" }}
          >
            folio
          </span>
        </motion.div>
        {/* <button className="relative group md:hidden " onClick={toogle}>
          <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
            <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
              <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:rotate-[42deg]"></div>
              <div className="bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-translate-x-10"></div>
              <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg]"></div>
            </div>
          </div>
        </button> */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Hamburger onToggle={setisOpen} />
        </motion.div>
      </div>
      {/* mobile menu*/}
      {isOpen && (
        <motion.div
          className=" md:hidden flex flex-col items-center space-y-3 p-2 bg-[#12293D] "
          initial={{ y: -300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Logo */}

          {/* Nav Links */}
          <div className="flex flex-wrap cursor-pointer flex-col items-center gap-5 justify-around text-2xl ">
            {navItems.map((item, index) => (
              <Link to={`/${item}`}>
                <motion.div
                  key={index}
                  tabIndex={0}
                  onClick={() => {
                    setisOpen(false);
                  }}
                  className="text-white group text-xl items-center flex font-semibold  hover:text-blue-400 focus:text-blue-400 transform transition-transform  outline-none"
                >
                  {item}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Button */}
          <motion.div
            className="opacity-0 "
            // initial="hidden"
            // animate="visible"
            // variants={slideUp}
            custom={12}
          >
            <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-1.5 px-4 rounded flex items-center gap-2">
              Download CV
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 fill-white"
                viewBox="0 0 24 24"
              >
                <path d="M12 16l4-5h-3V4h-2v7H8l4 5zm8 2H4v2h16v-2z" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default Navbar;
