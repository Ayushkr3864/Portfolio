/* eslint-disable no-unused-vars */
import React from "react";
import { delay, easeInOut, motion } from "framer-motion";
import Navbar from "../components/navbar";
import {
  FaJs,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiMysql } from "react-icons/si";
const technicalSkills = [
  { name: "HTML and CSS", icon: FaHtml5, percent: 90 },
  { name: "Node JS", icon: FaNodeJs, percent: 85 },
  { name: "JavaScript", icon: FaJs, percent: 85 },
  { name: "Python", icon: FaPython, percent: 60 },
  { name: "Java", icon: FaJava, percent: 80 },
  { name: "React JS", icon: FaReact, percent: 60 },
  { name: "MongoDB", icon: SiMongodb, percent: 80 },
  { name: "MySql", icon: SiMysql, percent: 70 },
  { name: "Express", icon: SiExpress, percent: 80 },
];

const professionalSkills = [
  { name: "Creativity", percent: 90 },
  { name: "Communication", percent: 85 },
  { name: "Problem Solving", percent: 75 },
  { name: "Teamwork", percent: 80 },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.6, ease: "easeOut" },
  }),
};

function Skills() {
 const fadeUp = {
   hidden: { opacity: 0, y: 30 },
   visible: {
     opacity: 1,
     y: 0,
     transition: { duration: 0.6, ease: "easeOut" },
   },
 };
  return (
    <>
      <div className="w-full ">
        <Navbar />
      </div>
      <section className="bg-transparent px-6 py-16 text-white">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-16 group relative"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          My <span className="text-cyan-400">Skills</span>
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-amber-400 transition-all duration-500 group-hover:w-full"></span>
        </motion.h1>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
          {/* Technical Skills */}
          <motion.div
            className="flex-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={1}
          >
            <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
            {technicalSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                className="mb-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={i + 2}
              >
                <div className="flex justify-between mb-1">
                  <div className="flex items-center gap-2">
                    {skill.icon && (
                      <skill.icon className="text-cyan-400 text-xl" />
                    )}
                    <span>{skill.name}</span>
                  </div>
                  <span>{skill.percent}%</span>
                </div>
                <div className="h-3 w-full rounded-full bg-slate-800">
                  <motion.div
                    className="h-full bg-cyan-400 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Professional Skills */}
          <motion.div
            className="flex-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={2}
          >
            <h3 className="text-2xl font-semibold mb-6">Professional Skills</h3>
            <div className="grid mt-20 grid-cols-2 gap-6">
              {professionalSkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  className="flex flex-col items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                >
                  <div className="relative w-24 h-24">
                    <svg className="w-full h-full rotate-[-90deg]">
                      <circle cx="48" cy="48" r="40" stroke="#334155" strokeWidth="8" fill="transparent" />
                      <motion.circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="#22d3ee"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={2 * Math.PI * 40}
                        strokeDashoffset={2 * Math.PI * 40}
                        animate={{
                          strokeDashoffset:
                            (1 - skill.percent / 100) * 2 * Math.PI * 40,
                        }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-lg font-bold">
                      {skill.percent}%
                    </span>
                  </div>
                  <p className="mt-2 text-center">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        {/* Floating Skills Visual */}
        <div className="w-full flex justify-center mt-15 ">
          <div className="relative h-[450px] w-[100%] rounded-3xl border border-[rgba(148,163,184,0.16)] bg-[rgba(15,23,42,0.72)] shadow-[0_24px_55px_rgba(8,17,31,0.36)] backdrop-blur-xl md:h-[450px] md:w-[700px]">
            <h2 className="absolute top-3 left-1/2 -translate-x-1/2 text-xl md:text-2xl text-cyan-400 font-bold">
              Tech I Use
            </h2>

            {/* React */}
            <motion.div
              className="absolute top-16 left-8 md:left-20 text-4xl md:text-5xl text-cyan-400"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaReact />
            </motion.div>
            <motion.div
              className="absolute top-30  md:left-20 text-4xl md:text-5xl text-cyan-400"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <img src="/java.png" className="md:h-20 h-15" alt="" />
            </motion.div>
            {/* Node */}
            <motion.div
              className="absolute top-16 right-8 md:right-20 text-4xl md:text-5xl text-cyan-400"
              animate={{ y: [0, 18, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <img src="/Node.js_logo.svg.png" alt="" className="h-20" />
            </motion.div>
            <motion.div
              className="absolute bottom-45 md:top-60 left-8 md:left- text-4xl md:text-5xl text-cyan-400"
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg"
                alt=""
                className="md:h-20 h-10"
              />
            </motion.div>
            {/* Mongo */}
            <motion.div
              className="absolute md:bottom-15 left-8 md:left-32 text-4xl md:text-5xl text-cyan-400"
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img src="/MongoDB.png" alt="" className="h-10" />
            </motion.div>
            <motion.div
              className="absolute md:bottom-10 bottom-44 left-50 md:left-80 text-4xl md:text-5xl text-cyan-400"
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img
                src="https://res.cloudinary.com/demo/image/upload/cloudinary_icon.png"
                alt=""
                className="md:h-20 h-10"
              />
            </motion.div>
            <motion.div
              className="absolute top-25 ml-20 right md:left-20 text-4xl md:text-5xl text-cyan-400"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <img src="/HTML5.png" alt="" className="md:h-20 h-10" />
            </motion.div>
            {/* JS */}
            <motion.div
              className="absolute bottom-16 right-8 md:right-32 text-4xl md:text-5xl text-cyan-400"
              animate={{ y: [0, 14, 0] }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img src="/javascript_480.jpg" className="md:h-20 h-10 " alt="" />
            </motion.div>

            {/* Center Git */}
            <motion.div
              className="absolute top-50 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl md:text-6xl text-cyan-400"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <img src="/Github.png" alt="" className="md:h-20 h-10" />
            </motion.div>
            <motion.div
              className="absolute top-80 md:top-30 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl md:text-6xl text-cyan-400"
              animate={{ y: [0, -10, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <img src="/css.png" alt="" className="md:h-20 h-10" />
            </motion.div>

            {/* Express */}
            <motion.div
              className="absolute top-30 md:top-1/2 left-50 -translate-x-1/2 text-4xl md:text-5xl text-cyan-400"
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <SiExpress />
            </motion.div>
            <motion.div
              className="absolute top-40   left-20 md:left-120 text-4xl md:text-5xl text-cyan-400"
              animate={{ y: [0, 18, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg"
                alt=""
                className="md:h-20 h-10"
              />
            </motion.div>
            <motion.div
              className="absolute md:top-85 top-70 left-5 md:right-65 text-4xl md:text-5xl text-cyan-400"
              animate={{ y: [0, 18, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                alt=""
                className="md:h-20 h-10"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
