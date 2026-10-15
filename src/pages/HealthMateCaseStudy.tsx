import { useEffect } from "react";
import { Link } from "react-router";

const imagePath = "/images/healthmate";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function SectionLabel({ number, children }: { number: string; children: string }) {
  return <span className="case-section-label">{number} / {children}</span>;
}

export default function HealthMateCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="case-shell">
      <header className="nav-wrap case-nav">
        <Link className="wordmark" to="/" aria-label="Kavya Guntaka, return to portfolio">
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
            <p className="case-kicker">HealthMate · AI Health Assistant</p>
            <h1 id="case-title">
              Basic health support,
              <em> without the search spiral.</em>
            </h1>
            <p className="case-lede">
              HealthMate is an academic project for people who need simple,
              accessible health information and help keeping up with medication
              or wellness routines. It combines a conversational assistant with
              scheduled reminders across a web interface and WhatsApp.
            </p>
          </div>

          <figure className="case-hero-image">
            <img
              src={`${imagePath}/landing.png`}
              alt="HealthMate landing page introducing health guidance, symptom insights, and reminders"
            />
            <figcaption>
              The landing page introduces HealthMate as a personal health
              assistant for guidance, symptom insights, and reminders.
            </figcaption>
          </figure>
        </section>

        <section className="case-facts" aria-labelledby="facts-title">
          <SectionLabel number="02">My role, team & timeline</SectionLabel>
          <h2 id="facts-title">From interface decisions<br />to frontend delivery.</h2>
          <dl className="case-fact-grid">
            <div>
              <dt>Role</dt>
              <dd>UI/UX Designer, Frontend Developer & Team Lead</dd>
            </div>
            <div>
              <dt>Team</dt>
              <dd>Solo designer within a four-person academic project team</dd>
            </div>
            <div>
              <dt>Timeline</dt>
              <dd>March–April 2026 · 2 months</dd>
            </div>
          </dl>
        </section>

        <section className="case-problem" aria-labelledby="problem-title">
          <SectionLabel number="03">The problem</SectionLabel>
          <div className="case-problem-layout">
            <h2 id="problem-title">
              Everyday questions were meeting
              <em> complicated answers.</em>
            </h2>
            <div className="case-problem-copy">
              <p>
                The project documentation identifies a gap between everyday
                health needs and the tools available to support them. Existing
                applications can feel complex, websites can create information
                overload, and reminder tools often sit apart from health guidance.
              </p>
              <ul>
                <li>People struggle to find basic, reliable information quickly.</li>
                <li>Busy and elderly users can find complicated systems difficult to use.</li>
                <li>Medication and daily health routines are easy to forget.</li>
                <li>Guidance and reminders are rarely combined in one simple flow.</li>
              </ul>
              <p className="case-boundary">
                HealthMate provides basic, non-diagnostic guidance. It is not a
                replacement for professional medical advice.
              </p>
            </div>
          </div>
        </section>

        <section className="case-process" id="process" aria-labelledby="process-title">
          <SectionLabel number="04">What I did</SectionLabel>
          <div className="case-process-heading">
            <h2 id="process-title">One simple system,<br /><em>two core jobs.</em></h2>
            <p>
              I designed the product interface and developed its frontend around
              the two documented priorities: conversational health awareness and
              routine reminders.
            </p>
          </div>

          <div className="case-contributions">
            <article>
              <span>01</span>
              <h3>Structured the web experience</h3>
              <p>
                I organized the product into a focused sign-in flow, a primary
                chat workspace, and a dedicated reminders area so users could
                move between asking a question and managing a routine.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Designed conversational guidance</h3>
              <p>
                The chat interface pairs a clear conversation area with history,
                a text input, and shortcuts for common topics such as fever,
                headache, cold, stress, and stomach pain.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Mapped the reminder workflow</h3>
              <p>
                I designed the empty, creation, and active reminder states,
                including fields for title, type, time, and frequency as well as
                controls to edit, pause, or remove a reminder.
              </p>
            </article>
            <article>
              <span>04</span>
              <h3>Developed the frontend</h3>
              <p>
                I built the web interface using the documented frontend stack:
                React with Vite, Tailwind CSS, and JavaScript. The broader system
                uses Flask, Supabase, AI-based NLP, and scheduled reminders.
              </p>
            </article>
          </div>

          <div className="case-process-visuals">
            <figure>
              <img
                src={`${imagePath}/sign-in.png`}
                alt="HealthMate sign-in screen with email and password fields"
                loading="lazy"
              />
              <figcaption>
                A contained sign-in flow keeps the first step focused and familiar.
              </figcaption>
            </figure>
            <figure>
              <img
                src={`${imagePath}/reminder-create.png`}
                alt="HealthMate create reminder dialog with title, type, time, and frequency fields"
                loading="lazy"
              />
              <figcaption>
                The reminder form collects only the information needed to schedule a routine.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="case-final" id="final-design" aria-labelledby="final-title">
          <SectionLabel number="05">The final design</SectionLabel>
          <div className="case-final-heading">
            <h2 id="final-title">The complete<br /><em>HealthMate flow.</em></h2>
            <p>
              The final interface brings chat, common symptom prompts, reminder
              creation, and WhatsApp access into one health-awareness system.
            </p>
          </div>

          <div className="case-gallery">
            <figure className="case-shot case-shot--wide">
              <div className="case-image-frame">
                <img
                  src={`${imagePath}/chat-welcome.png`}
                  alt="HealthMate chat dashboard showing the welcome message and common symptom shortcuts"
                  loading="lazy"
                />
              </div>
              <figcaption>
                <span>01 / Start a conversation</span>
                The dashboard opens with a plain-language introduction and quick
                prompts for common health questions.
              </figcaption>
            </figure>

            <figure className="case-shot case-shot--wide">
              <div className="case-image-frame">
                <img
                  src={`${imagePath}/chat-response.png`}
                  alt="HealthMate responding to a fever query with general non-diagnostic guidance"
                  loading="lazy"
                />
              </div>
              <figcaption>
                <span>02 / Read clear guidance</span>
                Responses stay inside the conversation and present general,
                non-diagnostic guidance in a scannable format.
              </figcaption>
            </figure>

            <div className="case-shot-pair">
              <figure className="case-shot">
                <div className="case-image-frame">
                  <img
                    src={`${imagePath}/reminders-empty.png`}
                    alt="HealthMate reminders page before a reminder has been added"
                    loading="lazy"
                  />
                </div>
                <figcaption>
                  <span>03 / Begin with a clear state</span>
                  The empty state points directly to the first reminder action.
                </figcaption>
              </figure>
              <figure className="case-shot">
                <div className="case-image-frame">
                  <img
                    src={`${imagePath}/reminder-created.png`}
                    alt="HealthMate active medication reminder with edit, pause, and delete controls"
                    loading="lazy"
                  />
                </div>
                <figcaption>
                  <span>04 / Manage the routine</span>
                  The active state confirms creation and keeps reminder controls close at hand.
                </figcaption>
              </figure>
            </div>

            <figure className="case-shot case-shot--whatsapp">
              <div className="case-image-frame">
                <img
                  src={`${imagePath}/whatsapp-twilio.png`}
                  alt="HealthMate health guidance delivered in WhatsApp through Twilio"
                  loading="lazy"
                />
              </div>
              <figcaption>
                <span>05 / Meet users on a familiar platform</span>
                The documented Twilio integration extends conversational guidance to WhatsApp.
              </figcaption>
            </figure>
          </div>
        </section>
      </main>

      <footer className="case-footer">
        <p>HealthMate · AI Health Assistant</p>
        <Link to="/#work">Back to selected work <Arrow /></Link>
      </footer>
    </div>
  );
}
