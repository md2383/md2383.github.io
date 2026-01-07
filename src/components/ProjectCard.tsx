type ProjectProps = {
  title: string;
  description: string;
  tech: string[];
  link: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  link,
}: ProjectProps) {
  return (
    <article className="project-card">
      <h3>{title}</h3>
      <p className="project-description">{description}</p>

      <ul className="project-tech">
        {tech.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <a href={link} className="project-link">
        View Project →
      </a>
    </article>
  );
}
