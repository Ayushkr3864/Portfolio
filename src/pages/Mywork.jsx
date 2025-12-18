import React from "react";
import { motion } from "framer-motion";
import libraryImg from "../assets/library.jpg";
import Sharenest from "../assets/sharenest.jpg";
import helping from "../assets/helping.png"
import MyWorkCard from "../components/MyWorkCard";
const projects = [
  {
    title: "Helping Hand Foundation(NGO)",
    description:
      "Build a full-stack platform for an NGO named Helping Hand Foundation",
    image: helping,
    Explore: "/helpingHand",
  },
  {
    title: "Resource Sharing Platform",
    description:
      "A full-stack platform to share resources among students. Built using Ejs, Node.js, Express, and MongoDB.",
    image: Sharenest,
    Explore: "/shareNest",
  },
  {
    title: "E-Library Management System",
    description:
      "MERN stack portal for managing attendance, events, and notices. Role-based access for students, professors, and admin.",
    image: libraryImg,
    Explore: "/Library",
  },
  {
    title: "Todo Using React",
    description:
      "A simple and efficient Todo app built with React that helps users create, manage, and track daily tasks with a clean interface and smooth user experience.",
    image: "./Todo.png",
    Explore: "/Todo",
  },
];

const Mywork = () => {
  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      y: -5,
      boxShadow: "0px 15px 25px rgba(0, 255, 255, 0.2)",
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

  return (
    <div className="bg-[#0f172a] min-h-screen px-4 md:px-16 py-16 text-white">
      {/* Heading */}
        
              <motion.h1
                className="text-4xl md:text-5xl font-bold text-center mb-16   group relative"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                My <span className="text-cyan-400">Projects</span>
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-600 transition-all duration-500 group-hover:w-full"></span>
              </motion.h1>
          

      {/* Projects Grid */}
     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {" "}
        {projects.map((project, index) => (
          <MyWorkCard
            key={index}
            desc={project.description}
            img={project.image}
            Title={project.title}
            link={project.Explore}
          />
        ))}
      </div>
    </div>
  );
};

export default Mywork;
