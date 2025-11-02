import React, { useEffect, useMemo, useState } from "react";
import "./App.css";

/** ======= BASIC SETTINGS YOU CAN EDIT ======= */
const NAME = "Loknath Roy";
const TITLE = "Full-Stack Developer • React | Java | Spring Boot";
const PHOTO = "/profile.jpg"; // keep your current image path or use "/profile.jpg" in public/
const GITHUB = "https://github.com/Me-loknath-Roy";
const LINKEDIN = "https://www.linkedin.com/in/meloknathroy/";
const EMAIL = "me.loknathroy@gmail.com";
const RESUME_FILE = "/Loknath_Roy_Resume.pdf"; // put the file inside /public
/** ========================================== */

const SKILLS = [
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Java",
  "Spring Boot",
  "REST APIs",
  "Python",
  "SQLite/MySQL",
  "Git & GitHub",
  "OpenCV",
  "IoT",
];

const PROJECTS = [
  {
    title: "Face Attendance System",
    desc:
      "Real-time face recognition (OpenCV) + auto-training + attendance logging. Clean UI and robust pipeline.",
    tags: ["OpenCV", "Python", "SQLite"],
    repo: `${GITHUB}/face_attendance_system`,
    demo: "", // add if deployed
    image:
      "https://images.unsplash.com/photo-1555421689-43cad7100751?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Online Voting System",
    desc:
      "Secure online voting with role-based access and verifiable results. Built for coursework with clean REST APIs.",
    tags: ["Spring Boot", "REST", "JWT"],
    repo: `${GITHUB}/online-voting-system`,
    demo: "", // add if deployed
    image:
      "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "IoT Monitoring Project",
    desc:
      "Sensor data ingestion + dashboard. Lightweight backend with real-time insights and alerting.",
    tags: ["IoT", "Node/Express", "Charts"],
    repo: `${GITHUB}/iot-project`,
    demo: "", // add if deployed
    image:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1400&auto=format&fit=crop",
  },
];

function Section({ id, children, className }) {
  return (
    <section id={id} className={`section ${className || ""}`}>
      {children}
    </section>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const sendMail = () => {
    const subject = encodeURIComponent("Portfolio Contact: Hello Loknath 👋");
    const body = encodeURIComponent(
      `Hi ${NAME},\n\nI saw your portfolio and would like to connect.\n\nThanks,\n`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const navItems = useMemo(
    () => [
      { href: "#skills", label: "Skills" },
      { href: "#projects", label: "Projects" },
      { href: "#contact", label: "Contact" },
      { href: GITHUB, label: "GitHub", external: true },
    ],
    []
  );

  return (
    <div className="wrap">
      {/* NAVBAR */}
      <header className="navbar glass">
        <a href="#top" className="logo">loknath.dev</a>
        <nav>
          {navItems.map((n) =>
            n.external ? (
              <a key={n.label} href={n.href} target="_blank" rel="noreferrer">
                {n.label}
              </a>
            ) : (
              <a key={n.label} href={n.href}>
                {n.label}
              </a>
            )
          )}
          <button
            className="toggle"
            title="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
        </nav>
      </header>

      {/* HERO */}
      <Section id="top" className="hero fade-up">
        <div className="photo-shell">
          <img src={PHOTO} alt={NAME} className="photo" />
        </div>
        <h1 className="title">{NAME}</h1>
        <p className="subtitle">{TITLE}</p>

        <div className="cta-row">
          <a className="btn primary" href={LINKEDIN} target="_blank" rel="noreferrer">
            Connect on LinkedIn
          </a>
          <button className="btn ghost" onClick={sendMail}>
            Email Me
          </button>
          <a className="btn outline" href={RESUME_FILE} download>
            Download Resume
          </a>
        </div>

        <div className="chip-row">
          {["React", "Spring", "REST", "OpenCV", "SQLite", "Git"].map((c) => (
            <span key={c} className="chip">
              {c}
            </span>
          ))}
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" className="fade-up">
        <h2 className="h2">Skills</h2>
        <div className="skills-grid">
          {SKILLS.map((s) => (
            <div key={s} className="skill-pill pop">
              {s}
            </div>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" className="fade-up">
        <h2 className="h2">Projects</h2>
        <div className="grid">
          {PROJECTS.map((p) => (
            <article key={p.title} className="card lift">
              <div className="card-img" style={{ backgroundImage: `url(${p.image})` }} />
              <div className="card-body">
                <h3 className="h3">{p.title}</h3>
                <p className="muted">{p.desc}</p>
                <div className="tag-row">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="card-actions">
                  <a className="btn small" href={p.repo} target="_blank" rel="noreferrer">
                    Code ↗
                  </a>
                  {p.demo ? (
                    <a className="btn small ghost" href={p.demo} target="_blank" rel="noreferrer">
                      Live Demo ↗
                    </a>
                  ) : (
                    <button className="btn small ghost" disabled title="Demo coming soon">
                      Live Demo ⏳
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" className="fade-up">
        <h2 className="h2">Contact</h2>
        <p className="muted center">
          Want to build something awesome together? Drop me a message.
        </p>
        <form
          className="contact glass"
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            const name = fd.get("name");
            const msg = fd.get("message");
            const subject = encodeURIComponent(`Hello from ${name}`);
            const body = encodeURIComponent(msg);
            window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
          }}
        >
          <input name="name" placeholder="Your name" required />
          <input name="email" placeholder="Your email (optional)" />
          <textarea name="message" rows={4} placeholder="Message..." required />
          <button className="btn primary wide" type="submit">
            Send Email
          </button>
        </form>
        <footer className="footer">
          <a href={GITHUB} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <span>•</span>
          <a href={LINKEDIN} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <span>•</span>
          <a href={`mailto:${EMAIL}`}>Email</a>
        </footer>
      </Section>
    </div>
  );
}
