import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CertificatesCard({ certificates = [] }) {
  const [active, setActive] = useState(null);

  return (
    <div className="mx-auto max-w-6xl p-4">
      <div className="grid grid-cols-1 gap-18 sm:grid-cols-2">
        {certificates.map((cert) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex h-72 cursor-pointer flex-col justify-between rounded-2xl border border-[rgba(148,163,184,0.16)] bg-[rgba(15,23,42,0.72)] p-6 shadow-[0_18px_45px_rgba(8,17,31,0.35)] backdrop-blur-md"
            onClick={() => setActive(cert.id)}
          >
            <img
              src={cert.thumbnailUrl}
              alt={cert.title}
              className="h-40 w-full rounded-xl object-cover shadow-sm"
            />

            <div>
              <h4 className="text-lg font-semibold text-slate-100">
                {cert.title}
              </h4>
              <p className="text-sm text-slate-300">{cert.issuer}</p>
              <p className="mt-1 text-xs text-slate-400">{cert.date}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-3xl rounded-2xl border border-[rgba(148,163,184,0.16)] bg-[rgba(8,17,31,0.96)] p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-slate-100">
                    {certificates.find((c) => c.id === active)?.title}
                  </h4>
                  <p className="text-sm text-slate-300">
                    {certificates.find((c) => c.id === active)?.issuer}
                  </p>
                </div>

                <button
                  className="rounded-md border border-slate-700 px-3 py-1 text-slate-200"
                  onClick={() => setActive(null)}
                >
                  Close
                </button>
              </div>

              <img
                src={certificates.find((c) => c.id === active)?.thumbnailUrl}
                className="h-[500px] w-full rounded-xl bg-slate-900 object-contain"
                alt=""
              />

              {certificates.find((c) => c.id === active)?.fileUrl && (
                <a
                  href={certificates.find((c) => c.id === active)?.fileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block rounded-md border border-cyan-400/40 bg-cyan-400 px-4 py-2 font-medium text-slate-950"
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
