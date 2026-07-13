import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-slate-700 py-8 transition-colors duration-300">

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

        <h2 className="text-2xl font-bold text-blue-600">
          VT.
        </h2>

        <p className="text-gray-700 dark:text-gray-400 text-center">
          Made with{" "}
          <FaHeart className="inline text-red-500" /> by{" "}
          <span className="font-semibold">
            Vishwa Tandel
          </span>
        </p>

        <div className="flex gap-5 text-2xl">

          <a
            href="https://github.com/TandelVishwa"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="text-gray-800 dark:text-white hover:text-blue-600 transition" />
          </a>

          <a
            href="https://www.linkedin.com/in/vishwa-tandel"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="text-gray-800 dark:text-white hover:text-blue-600 transition" />
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;