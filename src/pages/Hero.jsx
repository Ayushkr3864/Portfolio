import React, { useEffect, useRef } from "react";
import "../Stylesheets/hero.css";
import { motion } from "framer-motion";
import Typed from "typed.js";
import { useNavigate } from "react-router";
import Navbar from "../components/navbar";

const achievements = [
  {
    id: "webathon-helping-hand",
    title: "WEBATHON - Rank 1",
    subtitle: "Selected as 1st among 80 teams",
    accent: "Helping Hand - NGO Donor Connecting Platform",
    summary:
      "Built Helping Hand, a full-stack donor connecting platform designed to create a transparent and seamless bridge between NGOs and donors.",
    details: [
      "Developed NGO registration, profile management, campaign creation, and a secure donation workflow.",
      "Designed donor-focused features like contribution tracking and real-time fundraising progress updates.",
      "Built the platform with React.js, Tailwind CSS, Node.js, Express.js, MongoDB, and JWT authentication.",
      "Focused on solving trust and accessibility gaps in donation systems with a scalable, user-friendly product.",
    ],
  },
  {
    id: "sih-myopia",
    title: "Smart India Hackathon - College Selection",
    subtitle: "Selected among 110+ teams to represent the college",
    accent: "Myopia Detection using Machine Learning",
    summary:
      "Worked on a healthcare-focused SIH problem statement centered on early myopia detection through data-driven analysis.",
    details: [
      "Contributed to backend development and system architecture for the solution.",
      "Designed APIs for data flow between the frontend and machine learning models.",
      "Implemented data processing pipelines and managed prediction data storage and retrieval.",
      "Integrated machine learning outputs into the backend and strengthened collaboration on a real competitive build.",
    ],
  },
];

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
      className="relative min-h-screen w-full overflow-x-hidden"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(8,17,31,0.94), rgba(13,23,40,0.82)), url('/bgimage.webp')",
        backgroundSize: "cover, cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.14),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.12),transparent_24%)]"></div>
      <div className="relative z-10 w-full">
        <Navbar />
      </div>

      <section className="relative z-10 flex min-h-screen w-full items-center justify-center px-4 pt-28 pb-16">
        <div className="flex w-full max-w-7xl flex-col items-center justify-center gap-12 md:flex-row md:gap-20">
          <motion.div className="mt-12 md:mt-0">
            <motion.img
              className="mb-5 rounded-full transition-transform duration-600 animate-[zoomIn_2s_ease-out_forwards] scale-150 md:h-96 md:w-4xl md:scale-150"
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

            <div className="mb-4 mt-5 flex gap-5">
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
      </section>

      <section className="relative z-10 w-full px-4 pb-24">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-[rgba(148,163,184,0.16)] bg-[rgba(8,17,31,0.58)] px-6 py-10 shadow-[0_25px_80px_rgba(8,17,31,0.42)] backdrop-blur md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-12 text-center"
          >
            <p className="mb-3 inline-flex rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Achievements
            </p>
            <h2 className="text-4xl font-bold text-slate-50 md:text-5xl">
              Milestones That Shaped My Journey
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
              A quick look at the competitions and problem-solving experiences
              that pushed my technical growth forward.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cyan-400/70 via-cyan-400/25 to-transparent md:left-1/2 md:-translate-x-1/2"></div>

            <div className="space-y-10">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative grid gap-6 md:grid-cols-2 md:gap-10"
                >
                  <div
                    className={`hidden md:block ${
                      index % 2 === 0 ? "" : "md:order-2"
                    }`}
                  />

                  <div
                    className={`relative ml-12 rounded-3xl border border-[rgba(148,163,184,0.16)] bg-[rgba(15,23,42,0.8)] p-6 shadow-[0_18px_45px_rgba(8,17,31,0.35)] md:ml-0 ${
                      index % 2 === 0 ? "" : "md:order-1"
                    }`}
                  >
                    <div className="absolute -left-10 top-8 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400/40 bg-[rgba(8,17,31,0.95)] text-sm font-bold text-cyan-300 md:left-auto md:right-[-56px]">
                      {index + 1}
                    </div>
                    {index % 2 === 1 && (
                      <div className="hidden md:absolute md:left-[-56px] md:top-8 md:flex md:h-8 md:w-8 md:items-center md:justify-center md:rounded-full md:border md:border-cyan-400/40 md:bg-[rgba(8,17,31,0.95)] md:text-sm md:font-bold md:text-cyan-300">
                        {index + 1}
                      </div>
                    )}

                    <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                      {achievement.subtitle}
                    </p>
                    <h3 className="text-2xl font-bold text-slate-50">
                      {achievement.title}
                    </h3>
                    <p className="mt-2 text-lg font-semibold text-cyan-300">
                      {achievement.accent}
                    </p>
                    <p className="mt-4 leading-relaxed text-slate-300">
                      {achievement.summary}
                    </p>

                    <div className="mt-5 space-y-3">
                      {achievement.details.map((detail) => (
                        <div
                          key={detail}
                          className="flex items-start gap-3 rounded-2xl bg-white/[0.03] px-4 py-3"
                        >
                          <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-400"></span>
                          <p className="text-sm leading-relaxed text-slate-300 md:text-base">
                            {detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
