/* eslint-disable no-unused-vars */
import React from "react";
import { delay, easeInOut, motion } from "framer-motion";
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

  return (
    <>
      <section className="bg-[#0f172a] text-white py-16 px-6">
        <motion.div
          className="flex justify-center mb-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h1
            // makes the h1 focusable
            className="text-white group inline-block relative hover:text-blue-400 focus:text-blue-400 transform transition-transform duration-500 hover:scale-105 focus:scale-105 outline-none text-4xl font-bold text-center"
          >
            My <span className="text-cyan-400"> Skills</span>
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-600 transition-all duration-500 group-hover:w-full group-focus:w-full"></span>
          </h1>
        </motion.div>

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
                <div className="w-full bg-gray-700 h-3 rounded-full">
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
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="gray"
                        strokeWidth="8"
                        fill="transparent"
                      />
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
      </section>
    </>
  );
}

export default Skills;
