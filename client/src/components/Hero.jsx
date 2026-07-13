import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profile from "../assets/images/profile.jpeg";

function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center px-6 transition-colors duration-300"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">

        {/* Left */}
        <div>
          <p className="mb-3 text-lg font-medium text-blue-600 dark:text-blue-400">
            👋 Hello, I'm
          </p>

          <h1 className="mb-4 text-5xl font-bold text-gray-900 dark:text-white md:text-6xl">
            Vishwa Tandel
          </h1>

          <h2 className="mb-6 text-2xl font-semibold text-gray-700 dark:text-gray-300">
            Frontend Developer <br />
            Cloud & DevOps Enthusiast
          </h2>

          <p className="mb-8 max-w-lg leading-8 text-gray-600 dark:text-gray-400">
            I'm an MCA student passionate about building responsive web
            applications with React and exploring Cloud & DevOps technologies
            like Docker, Linux, CI/CD, and Cloud Computing.
          </p>

          <div className="flex gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-blue-600 px-6 py-3 font-medium text-blue-600 dark:text-white transition hover:bg-blue-600 hover:text-white"
            >
              Resume
            </a>
          </div>

          <div className="mt-8 flex gap-6 text-3xl">

            {/* GitHub */}
            <a
              href="https://github.com/TandelVishwa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-gray-800 transition hover:text-blue-600 dark:text-white" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/vishwa-tandel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-gray-800 transition hover:text-blue-600 dark:text-white" />
            </a>

            {/* Gmail */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=tandelvishwa398@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="text-gray-800 transition hover:text-blue-600 dark:text-white" />
            </a>

          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center">
          <img
            src={profile}
            alt="Profile"
            className="h-80 w-80 rounded-full border-4 border-blue-500 object-cover shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;