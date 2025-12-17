import React from 'react'
import { motion } from 'framer-motion'
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
         boxShadow: "0px 15px 25px rgba(0, 255, 255, 0.2)",
       },
     };
  return (
      <>
      
          <motion.div
            className="bg-white/5 backdrop-blur-lg rounded-xl p-6 flex flex-col items-center hover:cursor-pointer"
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
          >
            <motion.img
              src={img}
              alt={Title}
              className="w-full h-48 object-cover rounded-lg mb-4 shadow-lg"
              whileHover={{ scale: 1.05 }}
            />
            <h3 className="text-xl font-bold mb-2 text-gray-100">
              {desc}
            </h3>
            <p className="text-gray-300 mb-4 text-center">
              {}
            </p>
            <div className="flex gap-4">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg font-semibold transition"
              >
                Explore
              </a>
            </div>
          </motion.div>
        
     
      </>
  )
}

export default MyWorkCard