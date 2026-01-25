import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import { NavLink, Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import { Home, User, Wrench, FolderKanban, Award, Phone } from "lucide-react";


function Navbar() {
   const [scrolled, setScrolled] = useState(false);
const navItems = [
  {
    label: "Home",
    icon: Home,
    path: "/",
  },
  {
    label: "About",
    icon: User,
    path: "/about",
  },
  {
    label: "Skills",
    icon: Wrench,
    path: "/skills",
  },
  {
    label: "Project",
    icon: FolderKanban,
    path: "/projects",
  },
  {
    label: "Certificates",
    icon: Award,
    path: "/certificates",
  },
  {
    label: "Contact",
    icon: Phone,
    path: "/contact",
  },
];
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
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY>20)
    }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
  },[])
  return (
    <>
      {/* // Desktop Menu */}
      <div
        className={`hidden md:flex w-full fixed top-0 left-0 z-50 flex-wrap justify-evenly items-center p-4 transition-all duration-500
  ${
    scrolled
      ? "backdrop-blur-xl bg-white/10 shadow-lg border-b border-white/20"
      : "bg-transparent"
  }`}
      >
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
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="group flex items-center gap-1.5"
            >
              <item.icon
                size={24}
                className="text-white transition-all duration-300 group-hover:text-blue-400 group-hover:scale-110"
              />

              <span
                tabIndex={0}
                className="text-white inline-block text-xl font-semibold relative 
    hover:text-blue-400 focus:text-blue-400 
    transform transition-transform duration-500 
    hover:scale-105 focus:scale-105 outline-none"
              >
                {item.label}

                <span
                  className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-600 
      transition-all duration-500 group-hover:w-full group-focus:w-full"
                />
              </span>
            </Link>
          ))}
        </div>

        {/* Button */}
      </div>
      <div
        className={`p-3 md:hidden fixed top-0 left-0 w-full z-50 flex justify-between transition-all duration-500
  ${
    scrolled
      ? "backdrop-blur-xl bg-white/10 shadow-lg border-b border-white/20"
      : "bg-transparent"
  }`}
      >
        <motion.div
          className="flex space-x-1"
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
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Hamburger onToggle={setisOpen} />
        </motion.div>
      </div>
      {/* mobile menu*/}
      <AnimatePresence>
        {" "}
        {isOpen && (
          <motion.div
            className=" md:hidden flex flex-col fixed items-center z-20  space-y-3 p-2 py-5 rounded-r-3xl mt-20 z-10 bg-[#12293D] "
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Nav Links */}
            <div className="flex flex-wrap cursor-pointer flex-col items-center gap-5 justify-around text-2xl ">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-4 text-xl font-semibold transition-all duration-300
                  ${
                    isActive
                      ? "text-blue-400 scale-110"
                      : "text-white hover:text-blue-400"
                  }`
                  }
                >
                  <item.icon size={24} />
                  {item.label}
                </NavLink>
              ))}

              <a href="https://drive.google.com/file/d/1cm3N3o3H3nJkFUAOd9DkO6zjCKmEH_Zg/view?usp=drivesdk">
                <button className="bg-pink-600 mb-4 hover:bg-pink-700 text-white font-semibold py-1.5 px-4 rounded flex items-center gap-2">
                  Download CV
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 fill-white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 16l4-5h-3V4h-2v7H8l4 5zm8 2H4v2h16v-2z" />
                  </svg>
                </button>
              </a>
            </div>
            {/* Button */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
