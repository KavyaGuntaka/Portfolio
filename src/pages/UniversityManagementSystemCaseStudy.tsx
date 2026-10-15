import { useEffect } from "react";
import { Link } from "react-router";

const imagePath = "/images/university-management-system";

const finalScreens = [
  {
    src: "user-management-insights.png",
    title: "01 / User management",
    alt: "University Management System user management dashboard with analytics and user records",
    description:
      "User analytics and role-specific records bring students, faculty, staff, wardens, and parents into one searchable and actionable administrative view.",
  },
  {
    src: "department-management.png",
    title: "02 / Department management",
    alt: "University Management System department management dashboard",
    description:
      "Academic and extracurricular departments share one workspace for member totals, participation analysis, coordinators, categories, status, and administrative actions.",
  },
  {
    src: "admissions-enrollment.png",
    title: "03 / Admissions & enrollment",
    alt: "University Management System admissions and enrollment dashboard",
    description:
      "A complete admission workspace brings overview metrics, admission rounds, applications, document verification, fee tracking, enrollment, and reports together.",
  },
  {
    src: "timetable-scheduling.png",
    title: "04 / Timetable scheduling",
    alt: "University Management System timetable scheduling dashboard",
    description:
      "The weekly schedule combines program filters, faculty availability, room utilization, conflict visibility, and color-coded class states.",
  },
  {
    src: "examinations-results.png",
    title: "05 / Examinations & results",
    alt: "University Management System examinations and results dashboard",
    description:
      "Exam teams can monitor schedules, evaluations, GPA summaries, pass and fail distribution, revaluation requests, and recent examinations.",
  },
  {
    src: "library-elearning.png",
    title: "06 / Library & e-learning",
    alt: "University Management System library and e-learning dashboard",
    description:
      "Resources, borrowing activity, overdue items, requests, usage trends, digital content, and system status are organized in one operational view.",
  },
  {
    src: "graduation-alumni.png",
    title: "07 / Graduation & alumni",
    alt: "University Management System graduation and alumni dashboard",
    description:
      "Graduation progress, alumni records, events, mentorship, donations, engagement, and clearance activity form one connected post-study workflow.",
  },
  {
    src: "entrepreneurship-cell.png",
    title: "08 / Entrepreneurship cell",
    alt: "University Management System entrepreneurship cell dashboard",
    description:
      "Startup applications, mentor activity, funding, incubation progress, and recent actions give administrators a concise view of the E-Cell.",
  },
  {
    src: "research-publications.png",
    title: "09 / Research & publications",
    alt: "University Management System research and publications dashboard",
    description:
      "Research projects, innovation, patents, publications, collaborations, and reporting are separated into clear but related management areas.",
  },
  {
    src: "health-safety.png",
    title: "10 / Health & safety",
    alt: "University Management System health and safety dashboard",
    description:
      "Health services and anti-ragging operations are supported through recent activity, alerts, participation metrics, usage trends, and incident reporting.",
  },
  {
    src: "reports-analytics.png",
    title: "11 / Reports & analytics",
    alt: "University Management System reports and analytics dashboard",
    description:
      "Cross-department filters, key insights, institutional KPIs, comparative charts, and student-level details support data-led administration.",
  },
  {
    src: "fees-payments.png",
    title: "12 / Fees & payments",
    alt: "University Management System fees and payments dashboard",
    description:
      "Collection totals, outstanding balances, refunds, deadlines, payment methods, and defaulters make financial follow-up easier to manage.",
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

export default function UniversityManagementSystemCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="case-shell">
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
            <p className="case-kicker">
              University Management System · Admin dashboard
            </p>
            <h1 id="case-title">
              One system for
              <em> a whole university.</em>
            </h1>
            <p className="case-lede">
              The University Management System is a centralized, role-based
              platform designed to digitize university operations from admission
              through graduation. The admin dashboard connects academic,
              financial, student-support, research, and extracurricular modules
              within one consistent interface. Its User Management home gives
              administrators centralized control of students, faculty, staff,
              wardens, and parents.
            </p>
          </div>

          <figure className="case-hero-image ums-hero-image">
            <img
              src={`${imagePath}/user-management.png`}
              alt="University Management System user management home showing student records, filters, statuses, and actions"
            />
            <figcaption>
              The User Management home organizes role-based records, search,
              filters, bulk actions, parent-link status, account status, import,
              export, and user creation in one administrative workspace.
            </figcaption>
          </figure>
        </section>

        <section className="case-facts" aria-labelledby="facts-title">
          <SectionLabel number="02">My role, team & timeline</SectionLabel>
          <h2 id="facts-title">
            From requirements
            <br />
            to a modular system.
          </h2>
          <dl className="case-fact-grid">
            <div>
              <dt>Role</dt>
              <dd>UI/UX Designer</dd>
            </div>
            <div>
              <dt>Team</dt>
              <dd>2 members</dd>
            </div>
            <div>
              <dt>Timeline</dt>
              <dd>March–September 2025 · 7 months</dd>
            </div>
          </dl>
        </section>

        <section className="case-problem" aria-labelledby="problem-title">
          <SectionLabel number="03">The problem</SectionLabel>
          <div className="case-problem-layout">
            <h2 id="problem-title">
              Campus operations were
              <em> fragmented and manual.</em>
            </h2>
            <div className="case-problem-copy">
              <p>
                The project documentation describes university work spread across
                manual processes and disconnected systems. Administrators needed
                clearer oversight of users, admissions, schedules, examinations,
                fees, resources, support services, research, and graduation.
              </p>
              <ul>
                <li>
                  Admission and document-verification workflows required
                  centralized tracking.
                </li>
                <li>
                  Academic schedules needed faculty, room, and conflict
                  visibility.
                </li>
                <li>
                  Exams, payments, resources, and student services lacked one
                  consistent administrative model.
                </li>
                <li>
                  Decision-makers needed actionable metrics and exportable
                  reports.
                </li>
              </ul>
              <p className="case-boundary">
                The design needed to support specialized modules without making
                administrators learn a different interface for every task.
              </p>
            </div>
          </div>
        </section>

        <section className="case-process" id="process" aria-labelledby="process-title">
          <SectionLabel number="04">What I did</SectionLabel>
          <div className="case-process-heading">
            <h2 id="process-title">
              Turned complex requirements
              <br />
              <em>into repeatable workflows.</em>
            </h2>
            <p>
              I translated the documented requirements into a unified dashboard
              structure, then applied shared interaction and visual patterns
              across the selected administrative modules.
            </p>
          </div>

          <div className="case-contributions">
            <article>
              <span>01</span>
              <h3>Mapped the module architecture</h3>
              <p>
                I organized the admin experience around clear module navigation
                spanning users, departments, admissions, timetables, exams,
                resources, finance, research, student support, and graduation.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Created a reusable dashboard framework</h3>
              <p>
                Shared side navigation, page headers, KPI cards, filters, tables,
                charts, status treatments, and action patterns establish
                consistency across distinct workflows.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Designed data-heavy admin tasks</h3>
              <p>
                I structured search, filtering, record management, contextual
                actions, verification, scheduling, approvals, reporting, and
                progress states for efficient day-to-day use.
              </p>
            </article>
            <article>
              <span>04</span>
              <h3>Built high-fidelity prototypes</h3>
              <p>
                I developed detailed Figma screens and interaction-ready patterns
                that communicate hierarchy, feedback, status, and data
                relationships throughout the system.
              </p>
            </article>
          </div>
        </section>

        <section className="case-final" id="final-design" aria-labelledby="final-title">
          <SectionLabel number="05">The final design</SectionLabel>
          <div className="case-final-heading">
            <h2 id="final-title">
              Twelve selected modules.
              <br />
              <em>One administrative language.</em>
            </h2>
            <p>
              The selected screens demonstrate how the shared system adapts to
              operational, academic, financial, research, and student-support
              requirements without distorting each module&apos;s purpose.
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
            href="https://www.figma.com/design/Hq11xEScm8VPNtPgxFOUvR/University-Management-System"
            target="_blank"
            rel="noreferrer"
          >
            Explore Full Design in Figma <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>

      <footer className="case-footer">
        <p>University Management System · Admin dashboard</p>
        <Link to="/#work">
          Back to selected work <Arrow />
        </Link>
      </footer>
    </div>
  );
}
