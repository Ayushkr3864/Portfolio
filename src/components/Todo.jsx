import React from "react";
import { motion } from "framer-motion";
import sharenest from "../assets/sharenest.jpg";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";

const ProjectDetail = () => {
  const logoHover = {
    scale: 1.2,
    rotate: 10,

    transition: { duration: 0.3, type: "spring", stiffness: 200 },
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
    <div className="bg-[#0f172a] min-h-screen text-white px-4 md:px-16 py-16">
      {/* Project Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-16 group relative"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        TODO APP <span className="text-cyan-400">Using React</span>
        <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-600 transition-all duration-500 group-hover:w-full"></span>
      </motion.h1>
      {/* Project Image */}
      <motion.img
        src="./Todo.png"
        alt="Project"
        className="w-full max-w-4xl mx-auto rounded-lg mb-12 shadow-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />

      {/* Project Description */}
      <motion.div
        className="max-w-4xl mx-auto text-gray-300 space-y-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p>
          A simple and efficient Todo app built with React that helps users
          create, manage, and track daily tasks with a clean interface and
          smooth user experience.
        </p>

        <ul className="list-disc list-inside mt-2 space-y-1 text-gray-200">
          <li>Add, edit, and delete tasks easily.</li>
          <li>Mark tasks as completed or pending.</li>
          <li>Real-time UI updates using React state.</li>
          <li>Clean and responsive user interface.</li>
          <li>Lightweight and fast performance.</li>
        </ul>

        <p>This project helped me improve my understanding of Redux Toolkit.</p>

        {/* Tech Stack Section */}
        <div className="mt-10">
          <h2 className="text-3xl font-bold mb-6 text-center">Tech Stack</h2>
          <div className="flex justify-center items-center gap-10 flex-wrap">
            {/* MongoDB */}

            {/* React */}
            <motion.div
              whileHover={logoHover}
              className="flex flex-col items-center"
            >
              <FaReact size={100} />
              <p>React</p>
            </motion.div>
            <motion.div
              whileHover={logoHover}
              className="flex flex-col items-center"
            >
              <SiRedux size={100} />
              <p>Redux Toolkit</p>
            </motion.div>
          </div>
        </div>

        {/* Project Links */}
        <div className="flex gap-4 mt-10 justify-center">
          <a
            href="https://github.com/Ayushkr3864/Todo_UsingReact"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold transition"
          >
            GitHub
          </a>
          <a
            href="https://todo-using-react-sigma.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold transition"
          >
            Live Demo
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetail;
