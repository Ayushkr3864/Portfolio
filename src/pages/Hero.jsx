import React, { useEffect, useRef } from "react";
import AyushImg from "../assets/ayushimg.png";
import "../Stylesheets/hero.css";
import { delay, motion } from "framer-motion";

import Typed from "typed.js";
import { useNavigate } from "react-router";

function Hero() {
  const typedRef = useRef(null);
  const imagineRef = useRef(null)
  const typedInstance = useRef(null);
  const imagineInstance = useRef(null);
  const Navigate = useNavigate()
  useEffect(() => {
    // const slideDown = {
    //   hidden: { opacity: 0, y: -50 },
    //   visible: (time) => ({
    //     opacity: 1,
    //       y:0,
    //       transition:{delay:time*.1,ease:"easeInOut",duration:0.6}
    //   })
    // }
    typedInstance.current = new Typed(typedRef.current, {
      strings: [
        "Full Stack Developer",
        "MERN Enthusiast",
        "Open Source Contributor",
      ],
      typeSpeed: 80,
      backSpeed: 50,
      loop: false,
      backDelay: 1000,
      showCursor: true,
    });
    return () => {
      typedInstance.current.destroy();
    };
  }, []);
  useEffect(() => {
    imagineInstance.current = new Typed(imagineRef.current, {
      strings: ["I turned your imagination into code."],
      typeSpeed: 100,
      backSpeed: 300,
      loop: false,
      showCursor: 0,
    });
     return () => {
       imagineInstance.current.destroy();
     };
  },[])

  return (
    <div className="parent w-full flex flex-col mt-10 md:flex-row items-center justify-center gap-20 md:m-0 ">
      {/* Slide-in image from left */}
      <motion.div className="animate-[zoomIn_1.5s_ease-out_forwards] md:mt-0 backdrop-blur-md drop-shadow-[0_0_20px_rgba(135,206,250,0.5)] bg-[#00c0ff] border border-white/20 rounded-full shadow-xl text-white">
        <img
          className="rounded-full transition-transform duration-300 hover:scale-105 md:h-full w-3xl"
          src={AyushImg}
          alt="Ayush"
        />
      </motion.div>

      {/* Slide-in text from right */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 1 }}
        className="flex gap-3 flex-col w-full md:w-fit md:mt-20"
      >
        <h2 className="text-2xl">Hello, I'm</h2>
        <h1 className="text-5xl font-bold">Ayush Kumar Ray</h1>
        <h3 className="text-3xl">
          <span>And I'm a </span>
          <span className="text-[#3a8cb9]" ref={typedRef}></span>
        </h3>
        <h3 className="text-3xl">
          {" "}
          <span ref={imagineRef} className="text-3xl"></span>
        </h3>

        <motion.p className="mt-2 text-lg leading-relaxed">
          A passionate and results-driven Full Stack Developer specializing in
          building modern, responsive, and scalable web applications. With
          experience in both frontend and backend technologies, I craft seamless
          user experiences and robust backend systems. I love turning ideas into
          reality using the latest tools in web development.
        </motion.p>

        {/* Social Icons */}
        <div className="mt-4 flex gap-4">
          <motion.a
            href=""
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            <i className="fa-brands fa-square-facebook text-5xl text-[#2596be] hover:-translate-y-2 transition-transform duration-300"></i>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/ayush-kumar-ray-4247972b6/"
            target="_blank"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          >
            <i className="fa-brands fa-square-linkedin text-5xl text-[#2596be] hover:-translate-y-2 transition-transform duration-300"></i>
          </motion.a>
          <motion.a
            href="https://github.com/Ayushkr3864"
            target="_blank"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
          >
            <i className="fa-brands fa-square-github text-5xl text-[#2596be] hover:-translate-y-2 transition-transform duration-300"></i>
          </motion.a>
          <motion.a
            href="https://www.instagram.com/ayushkr_rai3864/"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 1.2 }}
          >
            <i className="fa-brands fa-square-instagram text-5xl text-[#2596be] hover:-translate-y-2 transition-transform duration-300"></i>
          </motion.a>
        </div>

        {/* Buttons */}
        <div className="flex gap-5 mt-5">
          <motion.button
            onClick={() => Navigate("/contact")}
            className="relative overflow-hidden border-2 border-blue-300 py-2 px-6 rounded group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 1.5 }}
          >
            <span className="absolute inset-0 bg-blue-300 scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Contact Me
            </span>
          </motion.button>
          <motion.button
            className="relative overflow-hidden border-2 border-blue-300 py-2 px-6 rounded group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 1.8 }}
          >
            <span className="absolute inset-0 bg-blue-300 scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              <a href="https://drive.google.com/file/d/1cm3N3o3H3nJkFUAOd9DkO6zjCKmEH_Zg/view?usp=drivesdk ">
                {" "}
                Download Resume
              </a>
            </span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
