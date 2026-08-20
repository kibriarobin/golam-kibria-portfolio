import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";
import { FaXTwitter, FaThreads } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";

const Footer = () => {
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/kibriarobin1",
      icon: <FaFacebookSquare />,
    },
    {
      name: "X",
      url: "https://twitter.com/KibriaRobin1",
      icon: <FaXTwitter />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/kibria.robin",
      icon: <FaInstagramSquare />,
    },
    {
      name: "Threads",
      url: "https://www.threads.com/@kibria.robin",
      icon: <FaThreads />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/golam-kibria97",
      icon: <FaLinkedin />,
    },
    {
      name: "GitHub",
      url: "https://github.com/kibriarobin",
      icon: <FaGithubSquare />,
    },
  ];

  const navLinks = [
    { name: "About", path: "/#about" },
    { name: "Skills", path: "/#skills" },
    { name: "Projects", path: "/#projects" },
    { name: "Education", path: "/#education" },
    { name: "Contact", path: "/#contact" },
  ];

  return (
    <Reveal>
      <footer className="relative mt-10 border-t border-white/10 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-32 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-5 py-10">

          {/* Main Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">

            {/* Brand */}
            <Reveal delay={0.05}>
              <div className="text-center md:text-left">
                <Link
                  to="/"
                  className="
                    text-2xl
                    font-bold
                    text-white
                    transition-colors
                    hover:text-blue-400
                  "
                >
                  Golam{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    Kibria
                  </span>
                </Link>

                <p className="mt-2 text-sm opacity-50">
                  Full Stack Developer
                </p>
              </div>
            </Reveal>

            {/* Navigation */}
            <Reveal delay={0.1}>
              <nav>
                <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="
                          text-sm
                          opacity-60
                          transition-all duration-300
                          hover:text-blue-400
                          hover:opacity-100
                        "
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </Reveal>

            {/* Social */}
            <Reveal delay={0.15}>
              <div className="text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-40 mb-4">
                  Connect With Me
                </p>

                <div className="flex items-center justify-center gap-2">
                  {socialLinks.map((social, index) => (
                    <Reveal key={social.name} delay={0.15 + index * 0.03}>
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={social.name}
                        aria-label={social.name}
                        className="
                          w-9 h-9
                          flex items-center justify-center
                          rounded-lg
                          border border-white/10
                          bg-white/[0.03]
                          text-lg
                          opacity-60
                          transition-all duration-300
                          hover:-translate-y-1
                          hover:border-blue-400/40
                          hover:bg-blue-400/10
                          hover:text-blue-400
                          hover:opacity-100
                        "
                      >
                        {social.icon}
                      </a>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Divider */}
          <Reveal delay={0.2}>
            <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </Reveal>

          {/* Bottom */}
          <Reveal delay={0.25}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs opacity-40">
              <p>
                © {new Date().getFullYear()} Golam Kibria. All rights reserved.
              </p>

              <p>
                Designed & Built with{" "}
                <span className="text-blue-400">React</span> &{" "}
                <span className="text-cyan-400">Tailwind CSS</span>
              </p>
            </div>
          </Reveal>

        </div>
      </footer>
    </Reveal>
  );
};

export default Footer;