import React from "react";

function NewsletterForm() {
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
      <input
        type="email"
        required
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="rounded-lg border border-slate-700 bg-[rgba(15,23,42,0.9)] px-3 py-2 text-sm text-slate-100 focus:border-cyan-400 focus:outline-none"
      />
      <button
        type="submit"
        className="rounded-lg bg-cyan-400 py-2 text-sm font-medium text-slate-950 transition hover:bg-cyan-300"
      >
        Subscribe
      </button>

      {status === "success" && (
        <span className="text-xs text-green-400">Subscribed successfully!</span>
      )}
      {status === "error" && (
        <span className="text-xs text-red-400">Something went wrong.</span>
      )}
    </form>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(148,163,184,0.16)] bg-[rgba(8,17,31,0.98)] text-slate-300 md:mt-0">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <h2 className="mb-3 text-xl font-semibold text-slate-50">
            Ayush Kumar Ray
          </h2>
          <p className="text-sm leading-relaxed">
            Full-stack developer passionate about building scalable web
            applications using React, Node.js, MongoDB, and modern UI
            frameworks.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-lg font-medium text-slate-50">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/home" className="transition hover:text-cyan-400">
                Home
              </a>
            </li>
            <li>
              <a href="/About" className="transition hover:text-cyan-400">
                About
              </a>
            </li>
            <li>
              <a href="/Project" className="transition hover:text-cyan-400">
                Projects
              </a>
            </li>
            <li>
              <a href="/Contact" className="transition hover:text-cyan-400">
                Contact
              </a>
            </li>
            <li>
              <a href="/Certificates" className="transition hover:text-cyan-400">
                Certificates
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-lg font-medium text-slate-50">Connect</h3>
          <h3 className="mb-3 text-lg font-medium text-slate-50">Newsletter</h3>
          <p className="mb-3 text-sm">
            Subscribe to get updates on new projects and blogs.
          </p>
          <NewsletterForm />
        </div>
      </div>

      <div className="border-t border-[rgba(148,163,184,0.12)] py-4 text-center text-sm text-slate-400">
        <p>© {new Date().getFullYear()} Ayush Kumar Ray. All rights reserved.</p>
      </div>
    </footer>
  );
}
