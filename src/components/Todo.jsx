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
    <div className="min-h-screen bg-transparent px-4 py-16 text-white md:px-16">
      {/* Project Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-16 group relative"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
            TODO APP <span className="text-cyan-400">Using React</span>
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-amber-400 transition-all duration-500 group-hover:w-full"></span>
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
          className="mx-auto max-w-4xl space-y-6 text-slate-300"
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
          className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            GitHub
          </a>
          <a
            href="https://todo-using-react-sigma.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          className="rounded-lg border border-slate-600 px-6 py-3 font-semibold text-slate-100 transition hover:border-cyan-400 hover:text-cyan-400"
          >
            Live Demo
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetail;
