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
        className="px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-sm focus:outline-none focus:border-white"
      />
      <button
        type="submit"
        className="bg-white text-gray-900 text-sm font-medium py-2 rounded-lg hover:bg-gray-200 transition"
      >
        Subscribe
      </button>

      {status === "success" && (
        <span className="text-green-400 text-xs">Subscribed successfully!</span>
      )}
      {status === "error" && (
        <span className="text-red-400 text-xs">Something went wrong.</span>
      )}
    </form>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            Ayush Kumar Ray
          </h2>
          <p className="text-sm leading-relaxed">
            Full‑stack developer passionate about building scalable web
            applications using React, Node.js, MongoDB, and modern UI
            frameworks.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-medium text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/home" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="/About" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="/Project" className="hover:text-white transition">
                Projects
              </a>
            </li>
            <li>
              <a href="/Contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
            <li>
              <a href="/Certificates" className="hover:text-white transition">
                Certificates
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-medium text-white mb-3">Connect</h3>

          {/* Newsletter */}
          <h3 className="text-lg font-medium text-white mb-3">Newsletter</h3>
          <p className="text-sm mb-3">
            Subscribe to get updates on new projects and blogs.
          </p>
          <NewsletterForm />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-4 text-center text-sm">
        <p>
          © {new Date().getFullYear()} Ayush Kumar Ray ❤️. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
