import React, { useEffect, useRef } from "react";
import "../Stylesheets/hero.css";
import { motion } from "framer-motion";
import Typed from "typed.js";
import { useNavigate } from "react-router";
import Navbar from "../components/navbar";

function Hero() {
  const typedRef = useRef(null);
  const imagineRef = useRef(null);
  const typedInstance = useRef(null);
  const imagineInstance = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
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
      strings: ["I turn ideas into reliable products."],
      typeSpeed: 80,
      backSpeed: 50,
      loop: false,
      showCursor: false,
    });

    return () => {
      imagineInstance.current.destroy();
    };
  }, []);

  return (
    <div
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-x-hidden"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(8,17,31,0.94), rgba(13,23,40,0.82)), url('/bgimage.webp')",
        backgroundSize: "cover, cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.14),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.12),transparent_24%)]"></div>
      <div className="w-full">
        <Navbar />
      </div>

      <div className="z-10 flex w-full max-w-7xl flex-col items-center justify-center gap-12 px-4 md:flex-row md:gap-20">
        <motion.div className="mt-35 md:mt-0">
          <motion.img
            className="mb-5 rounded-full transition-transform duration-600 animate-[zoomIn_2s_ease-out_forwards] scale-200 md:h-96 md:w-4xl md:scale-150"
            src="/gif2.gif"
            alt="Animated developer illustration"
          />
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1 }}
          className="mt-10 flex w-full flex-col gap-3 rounded-[28px] border border-[rgba(148,163,184,0.16)] bg-[rgba(8,17,31,0.6)] p-8 shadow-[0_25px_80px_rgba(8,17,31,0.42)] backdrop-blur md:w-fit"
        >
          <h1 className="text-2xl font-cairo font-semibold tracking-wide text-slate-200">
            Hello World!{" "}
            <span className="emoji-wave" role="img" aria-label="waving hand">
              👋
            </span>{" "}
            I am
          </h1>

          <h1 className="glow font-cairo text-5xl font-bold text-slate-50">
            Ayush Kumar Ray
          </h1>

          <h3 className="text-3xl text-slate-100">
            <span>And I&apos;m a </span>
            <span className="font-bold text-cyan-400" ref={typedRef}></span>
          </h3>

          <h3 className="text-3xl text-slate-200">
            <span ref={imagineRef} className="text-3xl text-amber-300"></span>
          </h3>

          <motion.p className="mt-2 max-w-2xl text-lg leading-relaxed text-slate-300">
            A passionate and results-driven Full Stack Developer specializing in
            building modern, responsive, and scalable web applications. With
            experience in both frontend and backend technologies, I craft
            seamless user experiences and robust backend systems.
          </motion.p>

          <div className="mt-4 flex gap-4">
            <motion.a
              href=""
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
              <i className="fa-brands fa-square-facebook text-5xl text-cyan-400 transition-transform duration-300 hover:-translate-y-2 hover:text-amber-300"></i>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/ayush-kumar-ray-4247972b6/"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            >
              <i className="fa-brands fa-square-linkedin text-5xl text-cyan-400 transition-transform duration-300 hover:-translate-y-2 hover:text-amber-300"></i>
            </motion.a>
            <motion.a
              href="https://github.com/Ayushkr3864"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
            >
              <i className="fa-brands fa-square-github text-5xl text-cyan-400 transition-transform duration-300 hover:-translate-y-2 hover:text-amber-300"></i>
            </motion.a>
            <motion.a
              href="https://www.instagram.com/ayushkr_rai3864/"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 1.2 }}
            >
              <i className="fa-brands fa-square-instagram text-5xl text-cyan-400 transition-transform duration-300 hover:-translate-y-2 hover:text-amber-300"></i>
            </motion.a>
          </div>

          <div className="mb-10 mt-5 flex gap-5">
            <motion.button
              onClick={() => navigate("/contact")}
              className="group relative overflow-hidden rounded border border-cyan-400/40 bg-cyan-400 px-6 py-2 font-semibold text-slate-950 shadow-[0_12px_25px_rgba(34,211,238,0.22)]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 1.5 }}
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-amber-300 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
              <span className="relative z-10 transition-colors duration-300 group-hover:text-slate-950">
                Contact Me
              </span>
            </motion.button>

            <motion.a
              href="https://drive.google.com/file/d/1cm3N3o3H3nJkFUAOd9DkO6zjCKmEH_Zg/view?usp=drivesdk"
              className="group relative overflow-hidden rounded border border-slate-600 bg-transparent px-6 py-2 font-semibold text-slate-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 1.8 }}
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-cyan-400 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
              <span className="relative z-10 transition-colors duration-300 group-hover:text-slate-950">
                Download Resume
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
