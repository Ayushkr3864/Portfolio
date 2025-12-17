import React from "react";
import { motion } from "framer-motion";
import sharenest from "../assets/sharenest.jpg";
import Helping from "../assets/helping.png"

const HelpingHand = () => {
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
        Helping Hand <span className="text-cyan-400">Foundation</span>
        <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-600 transition-all duration-500 group-hover:w-full"></span>
      </motion.h1>

      {/* Project Image */}
      <motion.img
        src={Helping}
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
          A community-driven initiative dedicated to supporting underprivileged
          individuals and families. Focuses on improving lives through
          education, healthcare assistance, and social welfare programs. Works
          with volunteers and partners to deliver meaningful, long-lasting
          impact. Built on the belief that small acts of kindness can create big
          changes.
        </p>

        <ul className="list-disc list-inside mt-2 space-y-1 text-gray-200">
          <li>User registration and authentication with JWT.</li>
          <li>
            Backend REST APIs built with Node.js and Express to manage users,
            volunteers, donations, and community programs.
          </li>
          <li>
            <b>Admin dashboard</b> for managing programs, monitoring activities,
            and generating reports.
          </li>
          <li>Responsive UI built with React.</li>
          <li>Backend REST APIs using Node.js and Express.</li>
          <li>Secure data handling with password hashing (bcrypt)</li>
          <li>Database powered by MongoDB.</li>
        </ul>

        <p>
          This project helped me improve my understanding of full-stack
          development, REST API design, authentication, real-time communication,
          and cloud storage integration.
        </p>

        {/* Tech Stack Section */}
        <div className="mt-10">
          <h2 className="text-3xl font-bold mb-6 text-center">Tech Stack</h2>
          <div className="flex justify-center items-center gap-10 flex-wrap">
            {/* MongoDB */}
            <motion.div
              whileHover={logoHover}
              className="flex flex-col items-center"
            >
              <img
                src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"
                alt="MongoDB"
                className="w-20 h-20 mb-2"
              />
              <p>MongoDB</p>
            </motion.div>

            {/* Express */}
            <motion.div
              whileHover={logoHover}
              className="flex flex-col items-center"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
                alt="Express.js"
                className="w-20 h-20 mb-2"
              />
              <p>Express.js</p>
            </motion.div>

            {/* React */}
            <motion.div
              whileHover={logoHover}
              className="flex flex-col items-center"
            >
              <img
                src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
                alt="React"
                className="w-20 h-20 mb-2"
              />
              <p>React</p>
            </motion.div>

            {/* Node.js */}
            <motion.div
              whileHover={logoHover}
              className="flex flex-col items-center"
            >
              <img
                src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
                alt="Node.js"
                className="w-20 h-20 mb-2"
              />
              <p>Node.js</p>
            </motion.div>

            {/* Cloudinary */}
            <motion.div
              whileHover={logoHover}
              className="flex flex-col items-center"
            >
              <img
                src="/stacked_logo_box.png"
                alt="Cloudinary"
                className="w-20 h-20 mb-2"
              />
              <p>Cloudinary</p>
            </motion.div>

            {/* Socket.io */}
            <motion.div
              whileHover={logoHover}
              className="flex flex-col items-center"
            >
              <img
                src="https://d6xcmfyh68wv8.cloudfront.net/newsroom-content/uploads/2021/02/white.png"
                className="w-20 h-20 mb-2"
              />
              <p>RazorPay</p>
            </motion.div>

            {/* JWT */}
            <motion.div
              whileHover={logoHover}
              className="flex flex-col items-center"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/5968/5968315.png"
                alt="JWT"
                className="w-20 h-20 mb-2"
              />
              <p>JWT</p>
            </motion.div>
          </div>
        </div>

        {/* Project Links */}
        <div className="flex gap-4 mt-10 justify-center">
          <a
            href="https://github.com/Ayushkr3864/Helping_Hand"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold transition"
          >
            GitHub
          </a>
          <a
            href="https://helping-hand-inky.vercel.app/"
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

export default HelpingHand;
