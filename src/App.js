import React from "react";
import "./App.css";

export default function App() {
  const name = "Loknath Roy";
  const title = "Full-Stack Developer • React | Java | Spring Boot";
  const email = "me.loknathroy@gmail.com";
  const github = "https://github.com/Me-loknath-Roy";
  const linkedin = "https://www.linkedin.com/in/meloknathroy/";

  // change this to /profile.jpg if you put your photo in public/profile.jpg
  const photo =
    "/profile.jpg";

  const skills = [
    "React", "JavaScript", "HTML", "CSS",
    "Java", "Spring Boot", "REST APIs",
    "Python", "SQLite/MySQL", "Git & GitHub"
  ];

  const projects = [
    {
      title: "Face Attendance System",
      desc: "Real-time face recognition with login, auto-training & attendance logs.",
      stack: ["Python", "OpenCV", "scikit-learn", "SQLite"],
      link: "#"
    },
    {
      title: "Blockchain Online Voting",
      desc: "Decentralized, tamper-proof e-voting with transparent counting.",
      stack: ["Solidity", "Web3", "Ether.js"],
      link: "#"
    },
    {
      title: "Smart Health Prediction",
      desc: "Predicts conditions from symptoms with a simple responsive UI.",
      stack: ["Python", "Flask", "ML"],
      link: "#"
    },
    {
      title: "College Q&A Chatbot",
      desc: "Answers student FAQs using classic NLP + TF-IDF ranking.",
      stack: ["Python", "Flask", "NLP"],
      link: "#"
    }
  ];

  return (
    <div className="site">
      {/* Aurora gradient background */}
      <div className="bg-aurora" aria-hidden />

      {/* NAV */}
      <header className="nav">
        <div className="brand">loknath.dev</div>
        <nav className="nav-links">
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a className="btn btn-ghost" href={github} target="_blank" rel="noreferrer">GitHub</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="pfp-wrap">
          <img src={photo} alt="Loknath" className="pfp" />
          <span className="pfp-glow" />
        </div>

        <h1 className="title fade-up">{name}</h1>
        <p className="subtitle fade-up delay-1">{title}</p>

        <div className="cta fade-up delay-2">
          <a className="btn" href={linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn</a>
          <a className="btn btn-ghost" href={`mailto:${email}`}>Email Me</a>
        </div>

        {/* floating chips */}
        <ul className="float-chips" aria-hidden>
          {["React", "Spring", "REST", "OpenCV", "SQLite", "Git"].map((c, i) => (
            <li key={i} style={{ animationDelay: `${i * 0.3}s` }}>{c}</li>
          ))}
        </ul>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <h2 className="section-title">Skills</h2>
        <div className="grid chips">
          {skills.map((s) => (
            <span key={s} className="chip">{s}</span>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <div className="section-head">
          <h2 className="section-title">Projects</h2>
          <a className="link" href={github} target="_blank" rel="noreferrer">View all on GitHub →</a>
        </div>

        <div className="grid cards">
          {projects.map((p) => (
            <article key={p.title} className="card hover-pop">
              <div className="card-glass" aria-hidden />
              <h3 className="card-title">{p.title}</h3>
              <p className="card-desc">{p.desc}</p>
              <div className="card-tags">
                {p.stack.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
              <div className="card-actions">
                <a className="btn btn-ghost" href={p.link} target="_blank" rel="noreferrer">Preview</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact">
        <h2 className="section-title">Contact</h2>
        <p className="contact-line">Email: <a href={`mailto:${email}`}>{email}</a></p>
        <div className="cta">
          <a className="btn" href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="btn" href={github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} {name}. Built with React.
      </footer>
    </div>
  );
}
