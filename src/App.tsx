import { useEffect } from "react";
import { Link } from "react-router";

const projects = [
  {
    number: "01",
    title: "University Management System",
    kicker: "Admin dashboard",
    description:
      "Designed a university management system from scratch, creating a cohesive interface for academic administration.",
    role: "UI/UX Designer",
    team: "2 members",
    timeline: "March–September 2025",
    className: "project--mysa",
    preview: "university",
    path: "/work/university-management-system",
  },
  {
    number: "02",
    title: "Xtreme Coding Academy",
    kicker: "Website design",
    description:
      "Designed a responsive, multi-page website for a coding academy, bringing its courses and services together in a cohesive experience.",
    role: "Freelance UI/UX Designer",
    team: "Solo Designer",
    timeline: "September–November 2025",
    className: "project--wayfound",
    preview: "academy",
    path: "/work/xtreme-coding-academy",
  },
  {
    number: "03",
    title: "HealthMate",
    kicker: "AI health assistant",
    description:
      "Designed the user interface and developed the frontend for an AI-powered health awareness chatbot with conversational health queries and medication reminders.",
    role: "UI/UX Designer & Frontend Developer; Team Lead",
    team: "Solo Designer",
    timeline: "March–April 2026",
    className: "project--patchwork",
    preview: "healthmate",
    path: "/work/healthmate",
  },
];

const experiences = [
  {
    year: "February 2025 – November 2025",
    role: "UI/UX Design Intern",
    company: "SSIT Pvt. Ltd. · Remote",
    responsibilities: [
      "Designed a university management system admin dashboard.",
      "Created high-fidelity wireframes and interactive prototypes in Figma.",
      "Developed user flows and structured design systems.",
      "Collaborated with the engineering team on UI implementation and responsive layouts.",
    ],
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function ProjectPreview({ type }: { type: string }) {
  if (type === "university") {
    return (
      <div className="preview preview--mysa" aria-label="University management admin dashboard preview">
        <div className="ums-preview-copy">
          <span>University admin / dashboard system</span>
          <strong>Campus operations,<br /><em>in one view.</em></strong>
        </div>
        <div className="ums-dashboard-sheet">
          <div className="ums-sheet-head">
            <b>Admin overview</b>
            <span>2025 ↗</span>
          </div>
          <div className="ums-metrics">
            <div><small>Students</small><b>12,847</b><i>+6.2%</i></div>
            <div><small>Attendance</small><b>87.3%</b><i>live</i></div>
            <div><small>Departments</small><b>14</b><i>active</i></div>
          </div>
          <div className="ums-chart" aria-hidden="true">
            <i /><i /><i /><i /><i /><i /><i /><i />
          </div>
          <div className="ums-modules">
            <span>Admissions</span>
            <span>Exams</span>
            <span>Research</span>
            <span>Fees</span>
          </div>
        </div>
        <div className="ums-stamp">DESKTOP<br />SYSTEM</div>
      </div>
    );
  }

  if (type === "academy") {
    return (
      <div className="preview preview--wayfound" aria-label="Xtreme Coding Academy website preview">
        <div className="route-line">
          <i /><i /><i /><i />
        </div>
        <div className="route-copy">
          <span>XTREME CODING ACADEMY</span>
          <strong>Learn by<br />building.</strong>
        </div>
        <div className="route-card">
          <div className="route-head"><b>Explore courses</b><span>Start</span></div>
          <div className="station active"><i /> Frontend development <span>Course</span></div>
          <div className="station"><i /> Programming basics <span>Course</span></div>
          <div className="station"><i /> Project learning <span>Practice</span></div>
          <div className="station"><i /> Academy services <span>Explore</span></div>
        </div>
        <div className="route-pill">Courses and services, clearly connected.</div>
      </div>
    );
  }

  return (
    <div className="preview preview--patchwork" aria-label="HealthMate AI health assistant preview">
      <div className="book-spine">HEALTHMATE / AI HEALTH AWARENESS / ASSISTANT</div>
      <div className="paper paper--one">
        <span>CONVERSATIONAL HEALTH QUERY</span>
        <p>“Can you help me understand this symptom?”</p>
        <small>Health awareness · chatbot</small>
      </div>
      <div className="paper paper--two">
        <span>MEDICATION REMINDER</span>
        <strong>A clearer way to keep everyday care on track.</strong>
        <div className="paper-tags"><i>reminders</i><i>health</i></div>
      </div>
      <div className="scribble" aria-hidden="true">ask<br />HealthMate</div>
    </div>
  );
}

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <a className="wordmark" href="#top" aria-label="Kavya Guntaka, back to top">
          <b>Kavya Guntaka</b>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="availability"><i /> Open to opportunities</div>
      </header>

      <main>
        <section
          className="hero"
          id="top"
          aria-labelledby="hero-title"
        >
          <h1 id="hero-title">
            I make digital
            <span className="hero-line hero-line--offset">
              things feel <em>clear.</em>
            </span>
          </h1>

          <div className="hero-bottom">
            <p>
              I’m <span className="hero-name">Kavya</span>—a UI/UX designer
              learning to bring my own ideas to life in the browser. I care about
              useful details and honest simplicity.
            </p>
            <div className="hero-actions">
              <a className="button button--dark" href="#work">View work <span>↓</span></a>
              <a
                className="button button--line"
                href="https://drive.google.com/file/d/16dzug2vL_iJM56A7Ah59XkFE77CeN6Ba/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                title="Open Kavya’s résumé"
              >
                Résumé <Arrow />
              </a>
            </div>
          </div>

          <div className="hero-side-note" aria-hidden="true">
            <span>Curious mind</span><i /><span>Careful hands</span>
          </div>
        </section>

        <section className="work" id="work" aria-labelledby="work-title">
          <div className="section-intro" data-reveal>
            <span className="section-number">01 / Selected work</span>
            <h2 id="work-title">A few problems<br /><em>worth untangling.</em></h2>
            <p>Concept projects exploring how thoughtful design can make everyday moments easier to understand.</p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className={`project ${project.className}`} id={project.title.toLowerCase()} key={project.title} data-reveal>
                <div className="project-copy">
                  <div className="project-heading">
                    <span>{project.number}</span>
                    <p>{project.kicker}</p>
                    <h3>{project.title}</h3>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <dl id={`${project.title.toLowerCase()}-details`}>
                    <div><dt>Role</dt><dd>{project.role}</dd></div>
                    <div><dt>Team</dt><dd>{project.team}</dd></div>
                    <div><dt>Timeline</dt><dd>{project.timeline}</dd></div>
                  </dl>
                  <Link
                    className="project-explore"
                    to={project.path ?? `#${project.title.toLowerCase()}-details`}
                    aria-label={`Explore ${project.title} project`}
                  >
                    Explore <Arrow />
                  </Link>
                </div>
                <ProjectPreview type={project.preview} />
              </article>
            ))}
          </div>
        </section>

        <section className="experience" id="experience" aria-labelledby="experience-title">
          <div className="experience-title" data-reveal>
            <span className="section-number">02 / Along the way</span>
            <h2 id="experience-title">Where I’ve grown<br /><em>as a designer.</em></h2>
            <p>A space for the teams, lessons, and meaningful work shaping how I design.</p>
          </div>
          <div className="experience-list">
            {experiences.map((item, index) => (
              <article className="experience-row" key={index} data-reveal>
                <span className="experience-index">0{index + 1}</span>
                <div className="experience-role">
                  <h3>{item.role}</h3>
                  <p>{item.company}</p>
                </div>
                <ul className="experience-note">
                  {item.responsibilities.map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                  ))}
                </ul>
                <span className="experience-year">{item.year}</span>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact">
        <div className="footer-kicker">
          <span>03 / Say hello</span>
          <span className="availability availability--light"><i /> Open to good conversations</span>
        </div>
        <div className="footer-main">
          <h2>Have a thought<br />worth <em>making?</em></h2>
          <p>
            I’d love to hear about thoughtful products, early ideas, or the tiny
            detail everyone else keeps missing.
          </p>
        </div>
        <a
          className="email-link"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=kavyaguntaka1909%40gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          kavyaguntaka1909@gmail.com <Arrow />
        </a>
        <div className="footer-bottom">
          <p>Designed with care by Kavya Guntaka.</p>
          <div className="socials">
            <a href="https://www.linkedin.com/in/kavya-guntaka-213048331" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
          </div>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}
