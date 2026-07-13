import { FaGraduationCap, FaLaptopCode, FaCloud } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="py-24 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            About Me
          </h2>

          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Get to know me.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left */}

          <div>
            <h3 className="text-3xl font-bold text-blue-600 mb-6">
              Who am I?
            </h3>

            <p className="text-gray-700 dark:text-gray-300 leading-8 mb-6">
              I'm <strong>Vishwa Tandel</strong>, currently pursuing MCA.
              I enjoy building responsive web applications using React
              and exploring Cloud & DevOps technologies.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-8">
              My goal is to become a skilled Frontend Developer and
              DevOps Engineer while learning Docker, Linux,
              GitHub Actions, Kubernetes and Cloud Computing.
            </p>
          </div>

          {/* Right */}

          <div className="space-y-6">

            <div className="rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-100 dark:bg-slate-800 p-6 shadow-lg">

              <div className="flex items-center gap-3 text-blue-600 mb-3">
                <FaGraduationCap className="text-xl" />

                <h4 className="font-bold text-lg">
                  Education
                </h4>
              </div>

              <p className="text-gray-700 dark:text-gray-300">
                Master of Computer Applications (MCA)
              </p>

            </div>

            <div className="rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-100 dark:bg-slate-800 p-6 shadow-lg">

              <div className="flex items-center gap-3 text-blue-600 mb-3">
                <FaLaptopCode className="text-xl" />

                <h4 className="font-bold text-lg">
                  Frontend
                </h4>
              </div>

              <p className="text-gray-700 dark:text-gray-300">
                React, JavaScript, HTML, CSS, Tailwind CSS
              </p>

            </div>

            <div className="rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-100 dark:bg-slate-800 p-6 shadow-lg">

              <div className="flex items-center gap-3 text-blue-600 mb-3">
                <FaCloud className="text-xl" />

                <h4 className="font-bold text-lg">
                  DevOps
                </h4>
              </div>

              <p className="text-gray-700 dark:text-gray-300">
                Docker, Linux, Git, GitHub, CI/CD
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;