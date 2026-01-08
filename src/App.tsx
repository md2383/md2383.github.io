import "./App.css";
import profile from "./assets/profile.jpg";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import GitHubIcon from "./components/icons/GitHubIcon";
import LinkedInIcon from "./components/icons/LinkedInIcon";


// Main App Component
function App() {
  return (
    <main>
      <section className="hero">
        <div className="hero-inner">

          {/* Top Row: Pic + Name */}
          <div className="hero-header">
            <img src={profile} alt="Miguel Dias Pinto" className="profile-pic"/>
    
          <h1>Miguel Dias Pinto</h1>
          </div>

          {/* Scrollable Roles */}
          <div className="roles-wrapper">
            <div className="roles-scroll">
              <span>Computer Science Engineer</span>
              <span>Software Engineer</span>
              <span>Machine Learning & AI</span>
              <span>Data Analysis</span>
              <span>Research & Development</span>
            </div>
          </div>

          {/* Links */}
          <div className="links">
            <a
              href="https://github.com/md2383"
              target="_blank"
              className="link-button"
            >
              <GitHubIcon />
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/md2383"
              target="_blank"
              className="link-button"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <Projects />

      {/* Experience Section */}
      <Experience />

      {/* Footer */}
      <section className="resume-section">
        <div className="resume-container">
          <h2>Resume & Contact</h2>

          <a
            href="/Resume.pdf"
            download
            className="resume-button-large"
          >
            Download Resume
          </a>

          <div className="resume-contact">
            <p>
              <span>Email:</span>{" "}
              <a href="mailto:md2383@rit.edu">md2383@rit.edu</a>
            </p>
            <p>
              <span>Phone:</span>{" "}
              <a href="tel:+18478526136">+1 (847) 852-6136</a>
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}

export default App;
