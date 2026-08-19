import { Link } from "react-router-dom";
import { FaCode } from "react-icons/fa";

const NavBar = () => {
  const navLinks = [
    ["Home", "/#home"],
    ["About", "/#about"],
    ["Skills", "/#skills"],
    ["Projects", "/#projects"],
    ["Contact", "/#contact"],
  ];

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">

        {/* Logo */}
        <div>
          <Link
            to="/#home"
            className="group flex items-center gap-2"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-blue-400/20 bg-blue-400/10 text-blue-400 transition-all duration-300 group-hover:border-blue-400/40 group-hover:bg-blue-400/20">
              <FaCode />
            </div>

            <span className="text-lg font-bold text-white">
              Golam{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Kibria
              </span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex">
          <ul className="flex items-center gap-1">
            {navLinks.map(([label, path]) => (
              <li key={label}>
                <Link
                  to={path}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:bg-blue-400/10 hover:text-blue-400"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Navigation */}
        <div className="dropdown dropdown-end lg:hidden">

          <button
            tabIndex={0}
            className="btn btn-ghost btn-circle text-slate-300 hover:bg-white/10"
            aria-label="Open navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>

          <ul
            tabIndex={0}
            className="menu dropdown-content z-[1] mt-3 w-52 rounded-xl border border-white/10 bg-slate-900/95 p-2 shadow-2xl backdrop-blur-xl"
          >
            {navLinks.map(([label, path]) => (
              <li key={label}>
                <Link
                  to={path}
                  className="rounded-lg text-slate-300 transition-all duration-300 hover:bg-blue-400/10 hover:text-blue-400"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default NavBar;