import React from 'react'
import CertificatesCard from '../components/CertificatesCard'
import { motion } from 'framer-motion';
function Certificates() {
  // const fadeInUp = {
  //   hidden: { opacity: 0, y: 50 },
  //   visible: (i = 1) => ({
  //     opacity: 1,
  //     y: 0,
  //     transition: { delay: 0.1 * i, duration: 0.6, ease: "easeOut" },
  //   }),
  // };
   const fadeUp = {
     hidden: { opacity: 0, y: 30 },
     visible: {
       opacity: 1,
       y: 0,
       transition: { duration: 0.6, ease: "easeOut" },
     },
   };
    const Certificates = [
      {
        id: "c1",
        title: "JavaScript Certificate",
        issuer: "Scaler",
        date: "30 October 2025",
        thumbnailUrl: "/scaler.png",
        fileUrl: "https://tinyurl.com/8ued49ft",
      },
      {
        id: "c3",
        title: "GenAI Powered Data Analytics Job Simulation Certificate",
        issuer: "Tata",
        date: "01 September 2025",
        thumbnailUrl: "/tata.png",
        fileUrl: "https://tinyurl.com/366hy77r",
      },
      {
        id: "c4",
        title: "React Bootcamp Certificate",
        issuer: "LetsUpgrade",
        date: "26 June 2025",
        thumbnailUrl: "/React.png",
        fileUrl: "https://verify.letsupgrade.in/certificate/LUERJSJUN125254",
      },
      {
        id: "c5",
        title: "AWS Basics Certificate",
        issuer: "Amazon",
        date: "30 October 2025",
        thumbnailUrl: "/image.png",
        fileUrl: "https://tinyurl.com/8ued49ft",
      },
    ];
  return (
    <>
      <div className="px-4 md:px-16 py-16">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center   group relative"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          My <span className="text-cyan-400">Certificates</span>
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-600 transition-all duration-500 group-hover:w-full"></span>
        </motion.h1>
      </div>
      <CertificatesCard certificates={Certificates} />
    </>
  );
}

export default Certificates