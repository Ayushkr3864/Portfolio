import React from "react";
import { motion } from "framer-motion";
import vendorLocatorImage from "../assets/vendorLocator.png";

const VendorLocator = () => {
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
      <motion.h1
        className="group relative mb-16 text-center text-4xl font-bold md:text-5xl"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Vendor <span className="text-cyan-400">Locator</span>
        <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-amber-400 transition-all duration-500 group-hover:w-full"></span>
      </motion.h1>

      <motion.img
        src={vendorLocatorImage}
        alt="Vendor Locator project preview"
        className="mx-auto mb-12 w-full max-w-4xl rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />

      <motion.div
        className="mx-auto max-w-4xl space-y-6 text-slate-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p>
          Vendor Locator is a location-based web application that helps users
          discover nearby vendors such as food stalls, service providers, and
          local shops with real-time details like availability, ratings, and
          navigation support.
        </p>

        <div className="space-y-4">
          <div>
            <h2 className="mb-2 text-2xl font-semibold text-slate-100">
              Key Features
            </h2>
            <ul className="list-inside list-disc space-y-2 text-slate-200">
              <li>
                Search vendors by category including food, electronics, and
                services with keyword-based discovery.
              </li>
              <li>
                Filter listings by distance, rating, and live availability for
                faster local search.
              </li>
              <li>
                Detect user location with the Geolocation API and calculate
                distance between users and vendors.
              </li>
              <li>
                Show nearby vendors on an interactive map with clickable
                markers and Google Maps redirection for directions.
              </li>
              <li>
                Secure login and signup flow with JWT-based authentication and
                protected routes.
              </li>
              <li>
                Vendor management tools for registering businesses, updating
                shop details, uploading images, and saving location
                coordinates.
              </li>
              <li>
                Ratings, reviews, favorites, saved vendors, recent searches,
                and vendor-side dashboard analytics.
              </li>
              <li>
                Mobile-first responsive interface designed to work smoothly
                across devices.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-slate-100">
              Portfolio Highlights
            </h2>
            <ul className="list-inside list-disc space-y-2 text-slate-200">
              <li>Clean and scalable MERN architecture.</li>
              <li>Modular component-based frontend design.</li>
              <li>REST API integration with real-time style data flows.</li>
              <li>Optimized performance using Vite.</li>
              <li>Secure authentication and protected routes.</li>
            </ul>
          </div>
        </div>

        <p>
          This project helped me improve my ability to build map-based user
          experiences, architect modular MERN applications, and connect secure
          authentication with location-aware discovery features.
        </p>

        <div className="mt-10">
          <h2 className="mb-6 text-center text-3xl font-bold">Tech Stack</h2>
          <div className="flex flex-wrap items-center justify-center gap-10">
            <motion.div whileHover={logoHover} className="flex flex-col items-center">
              <img
                src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
                alt="React"
                className="mb-2 h-20 w-20"
              />
              <p>React.js</p>
            </motion.div>
            <motion.div whileHover={logoHover} className="flex flex-col items-center">
              <img src="/vite.svg" alt="Vite" className="mb-2 h-20 w-20" />
              <p>Vite</p>
            </motion.div>
            <motion.div whileHover={logoHover} className="flex flex-col items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                alt="Tailwind CSS"
                className="mb-2 h-20 w-20"
              />
              <p>Tailwind CSS</p>
            </motion.div>
            <motion.div whileHover={logoHover} className="flex flex-col items-center">
              <img
                src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
                alt="Node.js"
                className="mb-2 h-20 w-20"
              />
              <p>Node.js</p>
            </motion.div>
            <motion.div whileHover={logoHover} className="flex flex-col items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
                alt="Express.js"
                className="mb-2 h-20 w-20"
              />
              <p>Express.js</p>
            </motion.div>
            <motion.div whileHover={logoHover} className="flex flex-col items-center">
              <img
                src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"
                alt="MongoDB"
                className="mb-2 h-20 w-20"
              />
              <p>MongoDB</p>
            </motion.div>
            <motion.div whileHover={logoHover} className="flex flex-col items-center">
              <img
                src="https://mongoosejs.com/docs/images/mongoose5_62x30_transparent.png"
                alt="Mongoose"
                className="mb-2 h-20 w-20 object-contain"
              />
              <p>Mongoose</p>
            </motion.div>
            <motion.div whileHover={logoHover} className="flex flex-col items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/5968/5968315.png"
                alt="JWT"
                className="mb-2 h-20 w-20"
              />
              <p>JWT</p>
            </motion.div>
            <motion.div whileHover={logoHover} className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlemaps/googlemaps-original.svg"
                alt="Google Maps"
                className="mb-2 h-20 w-20"
              />
              <p>Google Maps API</p>
            </motion.div>
            <motion.div whileHover={logoHover} className="flex flex-col items-center">
              <img
                src="https://www.svgrepo.com/show/303670/firebase-1-logo.svg"
                alt="Firebase"
                className="mb-2 h-20 w-20"
              />
              <p>Firebase</p>
            </motion.div>
          </div>
        </div>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="https://github.com/Ayushkr3864/Vendor_Locator"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            GitHub
          </a>
          <a
            href="https://vendor-locator.vercel.app/"
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

export default VendorLocator;
