import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 dark:border-slate-700 bg-white/90 dark:bg-slate-900/90 backdrop-blur transition-colors duration-300">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          VT.
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden gap-8 font-medium md:flex">

          <li>
            <a
              href="#home"
              className="text-gray-800 dark:text-white hover:text-blue-600 transition"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="text-gray-800 dark:text-white hover:text-blue-600 transition"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="text-gray-800 dark:text-white hover:text-blue-600 transition"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="text-gray-800 dark:text-white hover:text-blue-600 transition"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="text-gray-800 dark:text-white hover:text-blue-600 transition"
            >
              Contact
            </a>
          </li>

        </ul>

        {/* Right Side */}
        <div className="hidden items-center gap-4 md:flex">

          <button
            onClick={toggleTheme}
            className="rounded-lg border border-gray-300 dark:border-slate-600 p-2 hover:bg-gray-100 dark:hover:bg-slate-800 transition"
          >
            {darkMode ? (
              <FiSun size={20} className="text-yellow-400" />
            ) : (
              <FiMoon size={20} className="text-slate-700" />
            )}
          </button>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
          >
            Resume
          </a>

        </div>

        {/* Mobile Button */}
        <button
          className="text-3xl text-gray-800 dark:text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="space-y-4 border-t border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-6 py-6 md:hidden">

          <a
            href="#home"
            className="block text-gray-800 dark:text-white"
          >
            Home
          </a>

          <a
            href="#about"
            className="block text-gray-800 dark:text-white"
          >
            About
          </a>

          <a
            href="#skills"
            className="block text-gray-800 dark:text-white"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="block text-gray-800 dark:text-white"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="block text-gray-800 dark:text-white"
          >
            Contact
          </a>

          <button
            onClick={toggleTheme}
            className="rounded-lg border border-gray-300 dark:border-slate-600 p-2 hover:bg-gray-100 dark:hover:bg-slate-800 transition"
          >
            {darkMode ? (
              <FiSun size={20} className="text-yellow-400" />
            ) : (
              <FiMoon size={20} className="text-slate-700" />
            )}
          </button>

        </div>
      )}
    </nav>
  );
}

export default Navbar;