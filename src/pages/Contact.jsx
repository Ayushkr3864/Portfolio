import React, { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://portfolio-201q.onrender.com/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert(data.message);

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Something went wrong!");
      console.error(error);
    }
  };

  return (
    <>
      <motion.section
        className="bg-transparent px-10 py-20 backdrop-blur-md"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="mb-10 text-center text-3xl font-semibold text-cyan-400">
          Get in Touch
        </h2>

        <motion.form
          onSubmit={handleSubmit}
          className="mx-auto grid max-w-3xl grid-cols-1 gap-6 rounded-3xl border border-[rgba(148,163,184,0.16)] bg-[rgba(15,23,42,0.72)] p-8 shadow-[0_18px_45px_rgba(8,17,31,0.35)]"
          variants={container}
        >
          <motion.input
            placeholder="Your Name"
            type="text"
            className="rounded-lg border border-slate-700 bg-[rgba(15,23,42,0.88)] p-3 text-white focus:border-cyan-400 focus:outline-none"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            variants={fadeUp}
          />

          <motion.input
            placeholder="Your Email"
            type="email"
            className="rounded-lg border border-slate-700 bg-[rgba(15,23,42,0.88)] p-3 text-white focus:border-cyan-400 focus:outline-none"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            variants={fadeUp}
          />

          <motion.textarea
            placeholder="Your Message"
            className="h-32 resize-none rounded-lg border border-slate-700 bg-[rgba(15,23,42,0.88)] p-3 text-white focus:border-cyan-400 focus:outline-none"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            variants={fadeUp}
          />

          <motion.button
            type="submit"
            className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 shadow-md shadow-cyan-900/30 hover:bg-cyan-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={fadeUp}
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.section>
    </>
  );
}

export default Contact;
