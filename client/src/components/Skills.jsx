import skills from "../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Skills
          </h2>

          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Technologies I work with.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                rounded-xl
                p-6
                text-center
                font-semibold
                shadow-md
                transition
                duration-300
                hover:scale-105
                hover:shadow-xl
                border
                border-gray-200
                dark:border-slate-700
                bg-gray-100
                dark:bg-slate-800
                text-gray-800
                dark:text-white
              "
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;