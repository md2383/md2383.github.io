import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section className="experience-section">
      {/* Decorative background shape */}
      <div className="experience-bg-shape" />

      {/* Outer container: aligns with Projects title */}
      <div className="experience-container">
        <h2>Professional Experience</h2>

        {/* Inner container: centers content like .container */}
        <div className="experience-inner">
          {experience.map((item) => (
            <div key={item.role} className="experience-item">
              <h3>{item.role}</h3>

              <p className="experience-meta">
                {item.company} · {item.location} · {item.period}
              </p>

              <p className="experience-summary">{item.summary}</p>

              <ul className="experience-bullets">
                {item.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>

              <p className="experience-tech">
                <strong>Technologies:</strong>{" "}
                {item.technologies.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}