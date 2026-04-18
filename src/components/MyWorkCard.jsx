import React from "react";
import { motion } from "framer-motion";

function MyWorkCard({ Title, desc, img, link }) {
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
      boxShadow: "0px 15px 25px rgba(34, 211, 238, 0.18)",
    },
  };

  return (
    <motion.div
      className="flex cursor-pointer flex-col items-center rounded-2xl border border-[rgba(148,163,184,0.16)] bg-[rgba(15,23,42,0.72)] p-6 shadow-[0_18px_45px_rgba(8,17,31,0.35)] backdrop-blur-lg"
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
    >
      <motion.img
        src={img}
        alt={Title}
        className="mb-4 h-48 w-full rounded-lg object-cover shadow-lg"
        whileHover={{ scale: 1.05 }}
      />
      <h3 className="mb-2 text-center text-xl font-bold text-slate-100">
        {Title}
      </h3>
      <p className="mb-4 text-center text-slate-300">{desc}</p>
      <div className="flex gap-4">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-cyan-400 px-4 py-2 font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          Explore
        </a>
      </div>
    </motion.div>
  );
}

export default MyWorkCard;
