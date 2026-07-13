function ProjectCard({ project }) {
  return (
    <div
      className="
        overflow-hidden
        rounded-xl
        border
        border-gray-200
        dark:border-slate-700
        bg-gray-100
        dark:bg-slate-800
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
      "
    >
      <img
        src={project.image}
        alt={project.title}
        className="h-52 w-full object-cover transition duration-300 hover:scale-105"
      />

      <div className="p-6">
        <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
          {project.title}
        </h3>

        <p className="mb-5 text-gray-600 dark:text-gray-400">
          {project.description}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-blue-600 px-3 py-1 text-sm text-white"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {/* GitHub Button */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
          >
            GitHub
          </a>

          {/* Live Demo Button */}
          {project.live && project.live.trim() !== "" ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-blue-600 px-4 py-2 text-blue-600 dark:text-white transition hover:bg-blue-600 hover:text-white"
            >
              Live Demo
            </a>
          ) : (
            <button
              disabled
              className="cursor-not-allowed rounded-lg border border-gray-400 px-4 py-2 text-gray-400"
            >
              Coming Soon
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;