import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CertificatesCard({
  certificates = [],
}) {
  const [active, setActive] = useState(null);

  return (
    <div className="max-w-6xl mx-auto p-4">
      

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-18">
        {certificates.map((cert) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.8, delay:1 }}
            className="bg-white/80 dark:bg-slate-800/70 backdrop-blur-md 
                       rounded-2xl p-6 shadow-md cursor-pointer
                       h-72 flex flex-col justify-between"
            onClick={() => setActive(cert.id)}
          >
            <img
              src={cert.thumbnailUrl}
              alt={cert.title}
              className="w-full h-40 object-cover rounded-xl shadow-sm"
            />

            <div>
              <h4 className="text-lg font-semibold">{cert.title}</h4>
              <p className="text-sm text-slate-500">{cert.issuer}</p>
              <p className="text-xs text-slate-400 mt-1">{cert.date}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-slate-900 rounded-2xl p-4 w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h4 className="text-lg font-semibold">
                    {certificates.find((c) => c.id === active)?.title}
                  </h4>
                  <p className="text-sm text-slate-500">
                    {certificates.find((c) => c.id === active)?.issuer}
                  </p>
                </div>

                <button
                  className="px-3 py-1 rounded-md border"
                  onClick={() => setActive(null)}
                >
                  Close
                </button>
              </div>

              <img
                src={certificates.find((c) => c.id === active)?.thumbnailUrl}
                className="w-full h-[500px] object-contain rounded-xl bg-slate-100 dark:bg-slate-800"
                alt=""
              />

              {certificates.find((c) => c.id === active)?.fileUrl && (
                <a
                  href={certificates.find((c) => c.id === active)?.fileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-4 px-4 py-2 rounded-md border font-medium"
                >
                  Open Certificate File
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
