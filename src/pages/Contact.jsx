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
      const res = await fetch(
        "https://portfolio-201q.onrender.com/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();
      alert(data.message);

      setFormData({ name: "", email: "", message: "" }); // clear form
    } catch (error) {
      alert("Something went wrong!");
      console.error(error);
    }
  };

  return (
    <>
      <motion.section
        className="py-20 px-10 bg-[#0d1b2a]/80 backdrop-blur-md"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold text-center mb-10 text-cyan-400">
          📩 Get in Touch
        </h2>

        <motion.form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto grid grid-cols-1 gap-6"
          variants={container}
        >
          {/* Name */}
          <motion.input
            placeholder="Your Name"
            type="text"
            className="p-3 rounded-lg bg-[#112240]/90 text-white border border-[#1d3557] focus:outline-none"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            variants={fadeUp}
          />

          {/* Email */}
          <motion.input
            placeholder="Your Email"
            type="email"
            className="p-3 rounded-lg bg-[#112240]/90 text-white border border-[#1d3557] focus:outline-none"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            variants={fadeUp}
          />

          {/* Message (textarea) */}
          <motion.textarea
            placeholder="Your Message"
            className="p-3 rounded-lg bg-[#112240]/90 text-white border border-[#1d3557] focus:outline-none h-32 resize-none"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            variants={fadeUp}
          />

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="bg-cyan-600 hover:bg-cyan-800 px-6 py-3 rounded-xl font-semibold shadow-md shadow-cyan-900"
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
