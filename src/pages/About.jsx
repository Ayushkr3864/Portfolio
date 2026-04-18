import React from "react";
import profileImg from "../assets/ayushimg.png";
import universityLogo from "../assets/imagecollege.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import Navbar from "../components/navbar";

const About = () => {
  const navigate = useNavigate();

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardHover = {
    hover: {
      scale: 1.05,
      y: -10,
      boxShadow: "0px 20px 30px rgba(34, 211, 238, 0.14)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      <div className="w-full">
        <Navbar />
      </div>
      <div className="bg-transparent px-4 py-16 text-white md:px-16">
        <motion.h1
          className="group relative mb-16 mt-8 text-center text-4xl font-bold md:text-5xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          About <span className="text-cyan-400">Me</span>
          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-amber-400 transition-all duration-500 group-hover:w-full"></span>
        </motion.h1>

        <motion.div
          className="flex flex-col items-center justify-center gap-10 lg:flex-row"
          variants={container}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="h-60 w-60 rounded-full border border-cyan-400/25 text-white shadow-xl shadow-cyan-500/10 backdrop-blur-md md:mt-0"
            whileHover={{
              scale: 1.15,
              y: -5,
              boxShadow: "0px 5px 20px rgba(34, 211, 238, 0.35)",
              transition: { type: "spring", stiffness: 120 },
            }}
            whileTap={{
              scale: 1.08,
              y: -5,
              boxShadow: "0px 15px 30px rgba(34, 211, 238, 0.32)",
              transition: { type: "spring", stiffness: 120 },
            }}
          >
            <motion.img
              className="w-3xl rounded-full transition-transform duration-600 animate-[zoomIn_2s_ease-out_forwards] hover:scale-105 md:h-full"
              src={profileImg}
              alt="Ayush"
            />
          </motion.div>

          <motion.div
            className="glass-card flex-1 rounded-2xl border border-[rgba(148,163,184,0.16)] bg-[rgba(15,23,42,0.72)] p-6 shadow-[0_18px_45px_rgba(8,17,31,0.35)] backdrop-blur-md"
            variants={fadeUp}
            whileHover="hover"
            initial="hidden"
            whileInView="visible"
          >
            <motion.h2
              className="mb-4 text-2xl font-bold md:text-3xl"
              variants={fadeUp}
            >
              I am looking for{" "}
              <span className="text-amber-300">New Opportunities</span> &
              projects
            </motion.h2>
            <motion.p
              className="mb-6 leading-relaxed text-slate-300"
              variants={fadeUp}
            >
              I&apos;m an undergraduate and aspiring Full Stack Developer with
              practical experience in building full-stack web applications using
              React, Node.js, Express, and MongoDB. I love learning,
              problem-solving, and writing clean, scalable code.
            </motion.p>

            <motion.div className="mb-6 flex flex-wrap gap-6" variants={fadeUp}>
              {[
                { num: "8", label: "CGPA" },
                { num: "Fresher", label: "Currently in 3rd Year" },
                { num: "2+", label: "Hackathons" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                >
                  <h2 className="text-2xl font-bold">{stat.num}</h2>
                  <p className="text-sm text-slate-400">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:bg-cyan-300"
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                navigate("/Contact");
              }}
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.h1
          className="group relative mb-10 mt-24 text-center text-4xl font-bold md:text-5xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Education
          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-amber-400 transition-all duration-500 group-hover:w-full"></span>
        </motion.h1>

        <motion.div
          className="flex flex-col items-center justify-center gap-6 md:flex-row"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="w-72 rounded-2xl border border-[rgba(148,163,184,0.16)] bg-[rgba(15,23,42,0.72)] p-6 text-white shadow-[0_18px_45px_rgba(8,17,31,0.35)] backdrop-blur-md"
            whileHover="hover"
            variants={{ ...fadeUp, hover: cardHover.hover }}
          >
            <div className="mb-4 flex items-center gap-4">
              <motion.img
                src={universityLogo}
                alt="University Logo"
                className="h-12 w-12 rounded-full"
                whileHover={{ scale: 1.2, rotate: 10 }}
              />
              <h3 className="text-xl font-semibold">
                Greater Noida Institute of Technology
              </h3>
            </div>
            <p className="mb-2 text-sm text-slate-300">
              <b className="text-[20px]">University:</b> Dr. A. P. J. Abdul
              Kalam Technical University, Lucknow
            </p>
            <p className="mb-2 text-sm text-slate-300">
              B.Tech in Computer Science
            </p>
            <p className="text-sm text-slate-400">
              CGPA: <span className="font-bold text-white">8</span>
            </p>
          </motion.div>

          <motion.div
            className="w-72 rounded-2xl border border-[rgba(148,163,184,0.16)] bg-[rgba(15,23,42,0.72)] p-6 text-white shadow-[0_18px_45px_rgba(8,17,31,0.35)] backdrop-blur-md"
            whileHover="hover"
            variants={{ ...fadeUp, hover: cardHover.hover }}
          >
            <div className="mb-4 flex items-center gap-4">
              <img alt="College Logo" className="h-12 w-12 rounded-full" />
              <h3 className="text-xl font-semibold">Rao Kasal Public School</h3>
            </div>
            <p className="mb-2 text-sm text-slate-300">
              <b className="text-[20px]">Board:</b> Central Board of Secondary
              Education, Greater Noida
            </p>
            <p className="mb-2 text-sm text-slate-300">Intermediate (10+2)</p>
            <p className="text-sm text-slate-400">
              Percentage: <span className="font-bold text-white">84.6</span>
            </p>
            <p className="mb-2 text-sm text-slate-300">Secondary Education</p>
            <p className="text-sm text-slate-400">
              Percentage: <span className="font-bold text-white">80</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default About;
