import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink, Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import { Home, User, Wrench, FolderKanban, Award, Phone } from "lucide-react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", icon: Home, path: "/" },
    { label: "About", icon: User, path: "/about" },
    { label: "Skills", icon: Wrench, path: "/skills" },
    { label: "Project", icon: FolderKanban, path: "/projects" },
    { label: "Certificates", icon: Award, path: "/certificates" },
    { label: "Contact", icon: Phone, path: "/contact" },
  ];

  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 * custom, duration: 0.6, ease: "easeInOut" },
    }),
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navShell = scrolled
    ? "border-b border-[rgba(148,163,184,0.16)] bg-[rgba(8,17,31,0.8)] shadow-[0_14px_45px_rgba(8,17,31,0.45)] backdrop-blur-xl"
    : "bg-transparent";

  return (
    <>
      <div
        className={`fixed left-0 top-0 z-[100] hidden w-full flex-wrap items-center justify-evenly p-4 transition-all duration-500 md:flex ${navShell}`}
      >
        <motion.div
          className="flex space-x-1"
          initial="hidden"
          animate="visible"
          variants={slideUp}
          custom={4}
        >
          <span className="text-3xl font-medium tracking-wide text-slate-100">
            Port
          </span>
          <span className="text-3xl font-medium tracking-wide text-cyan-400">
            folio
          </span>
        </motion.div>

        <div className="flex cursor-pointer flex-col items-center gap-5 text-2xl md:flex-row md:space-x-15">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="group flex items-center gap-1.5"
            >
              <item.icon
                size={24}
                className="text-slate-100 transition-all duration-300 group-hover:scale-110 group-hover:text-cyan-400"
              />

              <span
                tabIndex={0}
                className="relative inline-block text-xl font-semibold text-slate-100 outline-none transition-transform duration-500 hover:scale-105 hover:text-cyan-400 focus:scale-105 focus:text-cyan-400"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-amber-400 transition-all duration-500 group-hover:w-full group-focus:w-full" />
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div
        className={`fixed left-0 top-0 z-[100] flex w-full justify-between p-3 transition-all duration-500 md:hidden ${navShell}`}
      >
        <motion.div
          className="flex space-x-1"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <span className="text-3xl font-medium tracking-wide text-slate-100">
            Port
          </span>
          <span className="text-3xl font-medium tracking-wide text-cyan-400">
            folio
          </span>
        </motion.div>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Hamburger toggled={isOpen} toggle={setIsOpen} color="#e5eef8" />
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed left-0 top-20 z-[95] flex flex-col items-center space-y-3 rounded-r-3xl border border-[rgba(148,163,184,0.16)] bg-[rgba(13,23,40,0.96)] p-3 py-5 shadow-[0_18px_40px_rgba(8,17,31,0.48)] backdrop-blur-xl md:hidden"
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex cursor-pointer flex-col items-center gap-5 text-2xl">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-4 text-xl font-semibold transition-all duration-300 ${
                      isActive
                        ? "scale-110 text-cyan-400"
                        : "text-slate-100 hover:text-cyan-400"
                    }`
                  }
                >
                  <item.icon size={24} />
                  {item.label}
                </NavLink>
              ))}

              <a href="https://drive.google.com/file/d/1cm3N3o3H3nJkFUAOd9DkO6zjCKmEH_Zg/view?usp=drivesdk">
                <button className="mb-4 flex items-center gap-2 rounded border border-cyan-400/40 bg-cyan-400 px-4 py-1.5 font-semibold text-slate-950 shadow-[0_10px_25px_rgba(34,211,238,0.25)] transition hover:bg-cyan-300">
                  Download CV
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 fill-slate-950"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 16l4-5h-3V4h-2v7H8l4 5zm8 2H4v2h16v-2z" />
                  </svg>
                </button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
