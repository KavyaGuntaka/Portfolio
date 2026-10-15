import { useEffect } from "react";
import { Link } from "react-router";

const imagePath = "/images/xtreme-coding-academy";

const finalScreens = [
  {
    src: "home.png",
    title: "01 / Homepage",
    alt: "Xtreme Coding Academy homepage",
    description:
      "A clear entry point introduces the academy, featured courses, learning paths, outcomes, and the next enrollment step.",
  },
  {
    src: "courses.png",
    title: "02 / Course discovery",
    alt: "Xtreme Coding Academy course listing page",
    description:
      "The course catalogue helps prospective students compare programs, formats, skills, and fees before committing.",
  },
  {
    src: "full-stack-course.png",
    title: "03 / Course detail",
    alt: "Full-Stack Web Development Bootcamp detail page",
    description:
      "A dedicated program page brings the curriculum, mentor, outcomes, student feedback, and related learning into one journey.",
  },
  {
    src: "career-services.png",
    title: "04 / Services overview",
    alt: "Xtreme Coding Academy services overview page",
    description:
      "The services page connects technical learning with portfolio building, real projects, and career guidance.",
  },
  {
    src: "career-launchpad.png",
    title: "05 / Career launchpad",
    alt: "Xtreme Career Launchpad page",
    description:
      "A four-step placement story explains how profile building, interview preparation, placement, and onboarding work together.",
  },
  {
    src: "corporate-training.png",
    title: "06 / Corporate training",
    alt: "Xtreme Coding Academy corporate training page",
    description:
      "The partner experience frames tailored technical training and talent access around measurable business outcomes.",
  },
  {
    src: "institutional-solutions.png",
    title: "07 / Institutional solutions",
    alt: "Xtreme Coding Academy institutional solutions page",
    description:
      "A structured solution page translates educator challenges into modular, outcome-led programs for institutions.",
  },
  {
    src: "about.png",
    title: "08 / About the academy",
    alt: "Xtreme Coding Academy about page",
    description:
      "The academy story combines its timeline, learning philosophy, values, tools, and impact into a credible brand narrative.",
  },
  {
    src: "testimonials.png",
    title: "09 / Student outcomes",
    alt: "Xtreme Coding Academy student testimonials page",
    description:
      "Student voices, proof points, and success stories turn broad outcome claims into specific, human evidence.",
  },
  {
    src: "success-stories.png",
    title: "10 / Business outcomes",
    alt: "Xtreme Coding Academy business success stories page",
    description:
      "Partner case studies pair concise performance metrics with deeper stories for teams evaluating a collaboration.",
  },
  {
    src: "contact.png",
    title: "11 / Contact",
    alt: "Xtreme Coding Academy contact page",
    description:
      "A focused form and direct contact options create a simple final step for students, institutions, and business partners.",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function SectionLabel({ number, children }: { number: string; children: string }) {
  return (
    <span className="case-section-label">
      {number} / {children}
    </span>
  );
}

export default function XtremeCodingAcademyCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="case-shell xca-case">
      <header className="nav-wrap case-nav">
        <Link
          className="wordmark"
          to="/"
          aria-label="Kavya Guntaka, return to portfolio"
        >
          <b>Kavya Guntaka</b>
        </Link>
        <nav aria-label="Case study navigation">
          <a href="#context">Context</a>
          <a href="#process">Process</a>
          <a href="#final-design">Final design</a>
        </nav>
        <Link className="case-back-link" to="/#work">
          Back to portfolio <span aria-hidden="true">↙</span>
        </Link>
      </header>

      <main className="case-main">
        <section className="case-context" id="context" aria-labelledby="case-title">
          <SectionLabel number="01">Context</SectionLabel>
          <div className="case-context-copy">
            <p className="case-kicker">Xtreme Coding Academy · Website design</p>
            <h1 id="case-title">
              One academy,
              <em> many paths into tech.</em>
            </h1>
            <p className="case-lede">
              Xtreme Coding Academy is a responsive, multi-page website designed
              to help students, institutions, and business partners understand
              the academy&apos;s programs, services, and outcomes. The experience
              turns a broad offering into clear paths for learning, career
              support, and collaboration.
            </p>
          </div>

          <figure className="case-hero-image xca-hero-image">
            <img
              src={`${imagePath}/home.png`}
              alt="Xtreme Coding Academy homepage showing its hero, courses, learning paths, and student outcomes"
            />
            <figcaption>
              The homepage establishes the academy&apos;s value, then guides
              visitors toward courses, services, proof, and enrollment.
            </figcaption>
          </figure>
        </section>

        <section className="case-facts" aria-labelledby="facts-title">
          <SectionLabel number="02">My role, team & timeline</SectionLabel>
          <h2 id="facts-title">
            From early structure
            <br />
            to a complete website.
          </h2>
          <dl className="case-fact-grid">
            <div>
              <dt>Role</dt>
              <dd>Freelance UI/UX Designer</dd>
            </div>
            <div>
              <dt>Team</dt>
              <dd>Solo Designer</dd>
            </div>
            <div>
              <dt>Timeline</dt>
              <dd>September–November 2025 · 3 months</dd>
            </div>
          </dl>
        </section>

        <section className="case-problem" aria-labelledby="problem-title">
          <SectionLabel number="03">The challenge</SectionLabel>
          <div className="case-problem-layout">
            <h2 id="problem-title">
              A broad offering needed
              <em> a clear digital story.</em>
            </h2>
            <div className="case-problem-copy">
              <p>
                The academy serves people at different stages and with different
                goals. The website needed to explain courses in enough detail for
                students while also giving career, institutional, and corporate
                services their own credible space.
              </p>
              <ul>
                <li>Make a large course and service offering easy to scan.</li>
                <li>Give each audience a direct route to relevant information.</li>
                <li>Balance promotional content with outcomes and social proof.</li>
                <li>Keep repeated actions and page patterns consistent.</li>
              </ul>
              <p className="case-boundary">
                The goal was not simply to add more pages, but to make every page
                feel like part of one understandable system.
              </p>
            </div>
          </div>
        </section>

        <section className="case-process" id="process" aria-labelledby="process-title">
          <SectionLabel number="04">What I did</SectionLabel>
          <div className="case-process-heading">
            <h2 id="process-title">
              Built the system
              <br />
              <em>from the routes up.</em>
            </h2>
            <p>
              I moved from page-level wireframes to a reusable visual language,
              then applied it across 11 responsive screens without losing each
              page&apos;s specific purpose.
            </p>
          </div>

          <div className="case-contributions">
            <article>
              <span>01</span>
              <h3>Structured the information</h3>
              <p>
                I separated course discovery, individual programs, career support,
                partner services, proof, and contact into focused routes with
                clear next steps.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Explored the pages in wireframes</h3>
              <p>
                Early sketches helped establish hierarchy, section order, card
                patterns, and the rhythm of long-form pages before visual detail
                was introduced.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Created a reusable visual system</h3>
              <p>
                A deep blue and warm orange palette, bold display typography,
                modular cards, metrics, FAQs, calls to action, and a shared footer
                keep the experience cohesive.
              </p>
            </article>
            <article>
              <span>04</span>
              <h3>Designed the complete responsive flow</h3>
              <p>
                I carried the system across the homepage, catalog, course detail,
                services, company story, outcomes, case studies, and contact
                experience.
              </p>
            </article>
          </div>

          <div className="xca-wireframes" aria-label="Early wireframe explorations">
            {[1, 2, 3, 4].map((number) => (
              <figure key={number}>
                <img
                  src={`${imagePath}/wireframe-${number}.jpeg`}
                  alt={`Early hand-drawn Xtreme Coding Academy wireframe ${number}`}
                  loading="lazy"
                />
                <figcaption>Wireframe exploration {number}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="case-final" id="final-design" aria-labelledby="final-title">
          <SectionLabel number="05">The final design</SectionLabel>
          <div className="case-final-heading">
            <h2 id="final-title">
              Eleven pages.
              <br />
              <em>One connected experience.</em>
            </h2>
            <p>
              Each frame below is scrollable, preserving the complete long-form
              page while keeping the overall case study easy to navigate.
            </p>
          </div>

          <div className="case-gallery xca-gallery">
            {finalScreens.map((screen) => (
              <figure className="case-shot xca-screen" key={screen.src}>
                <div className="case-image-frame" tabIndex={0}>
                  <img
                    src={`${imagePath}/${screen.src}`}
                    alt={screen.alt}
                    loading="lazy"
                  />
                </div>
                <figcaption>
                  <span>{screen.title}</span>
                  {screen.description}
                </figcaption>
              </figure>
            ))}
          </div>
          <a
            className="case-design-link"
            href="https://www.figma.com/design/wLXAzAXGAbCMTjBveJBf0H/Xtreme-Coding-Academy?node-id=0-1&p=f&t=k5YZ5SsxaBufmmDr-0"
            target="_blank"
            rel="noreferrer"
          >
            Explore Full Design in Figma <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>

      <footer className="case-footer">
        <p>Xtreme Coding Academy · Website design</p>
        <Link to="/#work">
          Back to selected work <Arrow />
        </Link>
      </footer>
    </div>
  );
}
