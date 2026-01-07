import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2>Standout Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        <div className="projects-footer">
          <a
            href="https://github.com/md2383"
            target="_blank"
            className="projects-more"
          >
            See more projects on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}