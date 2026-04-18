import React from "react";
import { motion } from "framer-motion";
import ajnabeeTripImage from "../assets/ajnabee.png";

const AjnabeeTrip = () => {
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
        Ajnabee <span className="text-cyan-400">Trip</span>
        <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-amber-400 transition-all duration-500 group-hover:w-full"></span>
      </motion.h1>

      <motion.img
        src={ajnabeeTripImage}
        alt="Ajnabee Trip project preview"
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
          AjnabeeTrip is a full-stack travel booking platform where users can
          explore, book, and manage trips while vendors and organizers can
          create and manage travel packages through a structured dashboard.
        </p>

        <div className="space-y-4">
          <div>
            <h2 className="mb-2 text-2xl font-semibold text-slate-100">
              Key Features
            </h2>
            <ul className="list-inside list-disc space-y-2 text-slate-200">
              <li>
                Browse trips with detailed itineraries, highlights, pricing,
                and travel categories like solo, group, couple, and trekking.
              </li>
              <li>
                Select travel dates, check seat availability, and complete
                bookings with dynamic pricing calculation.
              </li>
              <li>
                Multi-step vendor trip creation workflow covering basic info,
                batch dates, pricing, seat management, itinerary, highlights,
                and trip policies.
              </li>
              <li>
                User dashboard for booked trips, booking history, and saved
                trips.
              </li>
              <li>
                Vendor dashboard for managing packages, bookings, revenue, and
                seat availability.
              </li>
              <li>
                Booking form with personal details, travel date selection,
                sharing type, and automated price breakdown.
              </li>
              <li>
                JWT-based authentication with role-based access for user,
                vendor, and admin workflows.
              </li>
              <li>
                Email notifications using dynamic templates for booking details,
                pricing, and trip information.
              </li>
              <li>
                Rich UI with hero-style trip pages, cover images, seat progress
                indicators, accordions, and responsive layouts.
              </li>
              <li>
                Firebase-powered real-time seat and booking availability
                updates.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 text-2xl font-semibold text-slate-100">
              Recruiter Highlights
            </h2>
            <ul className="list-inside list-disc space-y-2 text-slate-200">
              <li>Full-stack MERN + Firebase hybrid architecture.</li>
              <li>Complex multi-step form handling with state management.</li>
              <li>Real-world booking system with dynamic pricing logic.</li>
              <li>Role-based dashboards for User, Vendor, and Admin.</li>
              <li>Scalable and modular project structure.</li>
            </ul>
          </div>
        </div>

        <p>
          This project helped me deepen my understanding of booking flows,
          multi-role dashboard design, dynamic pricing systems, and building
          structured real-world travel products with scalable frontend and
          backend architecture.
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
                src="https://cdn.worldvectorlogo.com/logos/framer-motion.svg"
                alt="Framer Motion"
                className="mb-2 h-20 w-20"
              />
              <p>Framer Motion</p>
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
                src="https://www.svgrepo.com/show/303670/firebase-1-logo.svg"
                alt="Firebase"
                className="mb-2 h-20 w-20"
              />
              <p>Firebase</p>
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
                src="https://avatars.githubusercontent.com/u/67109815?s=200&v=4"
                alt="bcrypt"
                className="mb-2 h-20 w-20 rounded-full"
              />
              <p>bcrypt</p>
            </motion.div>
            <motion.div whileHover={logoHover} className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg"
                alt="Vercel"
                className="mb-2 h-20 w-20"
              />
              <p>Vercel</p>
            </motion.div>
          </div>
        </div>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="https://github.com/Ayushkr3864/AjnebeeTrip"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            GitHub
          </a>
          <a
            href="https://ajnabeetrip.com/"
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

export default AjnabeeTrip;
