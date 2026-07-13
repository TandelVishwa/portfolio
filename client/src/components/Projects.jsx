import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-3 text-center text-4xl font-bold text-gray-900 dark:text-white">
          Projects
        </h2>

        <p className="mb-12 text-center text-gray-600 dark:text-gray-400">
          Some of my recent work.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;