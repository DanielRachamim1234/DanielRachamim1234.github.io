import React from "react";

const page = {
  background: "#0f172a",
  text: "#f8fafc",
  muted: "#cbd5e1",
  card: "#172554",
  border: "#334155",
  accent: "#6366f1",
  accent2: "#3b82f6",
  light: "#ffffff",
  maxWidth: 1240,
};

const projects = [
  {
    title: "Cloud Posture & Risk Correlator",
    tag: "Cloud Security · Python · AWS",
    description:
      "A security tool that scans AWS environments for misconfigurations, correlates findings, and turns them into clear, actionable risk reports.",
    github: "https://github.com/DanielRachamim1234/cloud-posture-risk-correlator",
    highlights: ["AWS scanning", "Risk correlation", "Actionable reporting"],
  },
  {
    title: "PlayIQ",
    tag: "React · Sports Tech · Product Thinking",
    description:
      "An interactive basketball whiteboard for building and presenting plays visually with movement paths, passes, and role-based interactions.",
    github: "https://github.com/DanielRachamim1234/PlayIQ/tree/main",
    highlights: ["Interactive court UI", "Visual play design", "Coaching workflow"],
  },
  {
    title: "Online Store Project",
    tag: "Full Stack · React · Node.js",
    description:
      "A complete e-commerce project with frontend and backend logic.",
    github: "https://github.com/DanielRachamim1234/Sport-Shop",
    highlights: ["Frontend + backend", "Real app flow"],
  },
  {
    title: "Mobile Threat Intelligence Automation",
    tag: "Python · MITRE ATT&CK · Threat Intel",
    description:
      "Automated pipeline that collects Android malware samples from MalwareBazaar, maps them to MITRE ATT&CK Mobile techniques, and generates PDF intelligence reports with visualizations.",
    github: "https://github.com/DanielRachamim1234/mobile-threat-intel",
    highlights: ["MalwareBazaar API integration", "MITRE ATT&CK Mobile mapping", "Automated PDF reporting"],
  },
];

const skills = [
  "Python",
  "Java",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "AWS",
  "Docker",
  "Linux",
  "SQL",
  "Security Analysis",
  "APIs",
  "Product Thinking",
];

function checkPortfolioData() {
  const errors = [];

  if (!projects.length) errors.push("At least one project is required.");

  projects.forEach((project, i) => {
    if (!project.title) errors.push(`Project ${i + 1} is missing a title.`);
    if (!project.tag) errors.push(`Project ${i + 1} is missing a tag.`);
    if (!project.description) errors.push(`Project ${i + 1} is missing a description.`);
    if (!project.github) errors.push(`Project ${i + 1} is missing a GitHub URL.`);
    if (!Array.isArray(project.highlights) || project.highlights.length === 0) {
      errors.push(`Project ${i + 1} should have at least one highlight.`);
    }
  });

  if (skills.length < 3) errors.push("Add at least three skills.");

  return errors;
}

const dataErrors = checkPortfolioData();
if (typeof window !== "undefined" && dataErrors.length > 0) {
  console.warn("Portfolio data issues:", dataErrors);
}

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <div
        style={{
          color: page.muted,
          textTransform: "uppercase",
          letterSpacing: 2,
          fontSize: 13,
          marginBottom: 10,
        }}
      >
        {eyebrow}
      </div>
      <h2 style={{ fontSize: 34, margin: "0 0 12px 0", lineHeight: 1.15 }}>{title}</h2>
      <p style={{ color: page.muted, fontSize: 17, lineHeight: 1.7, maxWidth: 760, margin: 0 }}>
        {description}
      </p>
    </div>
  );
}

function Card({ children, style = {} }) {
  return (
    <div
      style={{
        background: page.card,
        border: `1px solid ${page.border}`,
        borderRadius: 20,
        padding: 24,
        boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function LinkButton({ href, children, primary = false }) {
  const isExternal = typeof href === "string" && href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      style={{
        display: "inline-block",
        padding: "12px 18px",
        borderRadius: 12,
        textDecoration: "none",
        color: primary ? page.light : page.text,
        border: primary ? "none" : `1px solid ${page.border}`,
        background: primary
          ? `linear-gradient(135deg, ${page.accent}, ${page.accent2})`
          : "transparent",
        fontWeight: 600,
      }}
    >
      {children}
    </a>
  );
}

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #08101f 0%, #0b1020 100%)",
        color: page.text,
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <div style={{ maxWidth: page.maxWidth, margin: "0 auto", padding: "32px 20px 80px" }}>
        <header
          style={{
            position: "sticky",
            top: 12,
            zIndex: 10,
            background: "rgba(8, 16, 31, 0.78)",
            backdropFilter: "blur(10px)",
            border: `1px solid ${page.border}`,
            borderRadius: 18,
            padding: "16px 20px",
            marginBottom: 36,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <div>
              <div style={{ fontWeight: 700, fontSize: 18 }}>Daniel R.</div>
              <div style={{ color: page.muted, marginTop: 4 }}>
                Computer Science Student · Cyber Threat Intelligence Analyst · Builder
              </div>
            </div>

            <nav style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="#about" style={{ color: page.text, textDecoration: "none" }}>About</a>
              <a href="#projects" style={{ color: page.text, textDecoration: "none" }}>Projects</a>
              <a href="#skills" style={{ color: page.text, textDecoration: "none" }}>Skills</a>
              <a href="#contact" style={{ color: page.text, textDecoration: "none" }}>Contact</a>
            </nav>
          </div>
        </header>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1.35fr 0.85fr",
            gap: 24,
            alignItems: "center",
            marginBottom: 84,
          }}
        >
          <div>
            <div
              style={{
                display: "inline-block",
                padding: "8px 12px",
                border: `1px solid ${page.border}`,
                borderRadius: 999,
                color: page.muted,
                fontSize: 14,
                marginBottom: 18,
              }}
            >
              Open to software, product-minded, and security-focused roles
            </div>

            <h1 style={{ fontSize: 58, lineHeight: 1.05, margin: "0 0 18px 0" }}>
              I build software with a security mindset
            </h1>

            <p style={{ color: page.muted, fontSize: 19, lineHeight: 1.8, maxWidth: 760, margin: 0 }}>
              I’m a Computer Science student with hands-on experience in cyber threat intelligence,
              and I build practical projects across software, security, and product thinking.
              My goal is to create tools and experiences that are technically solid, useful, and clear.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 28 }}>
              <LinkButton href="#projects" primary>
                See my work
              </LinkButton>
              <LinkButton href="https://github.com/DanielRachamim1234">GitHub</LinkButton>
            </div>
          </div>

          <Card>
            <div style={{ display: "grid", gap: 14 }}>
              <Card style={{ padding: 18 }}>
                <div style={{ color: page.muted, fontSize: 14, marginBottom: 8 }}>Current focus</div>
                <div style={{ fontSize: 22, fontWeight: 700, lineHeight: 1.35 }}>
                  Software, security, and real-world problem solving
                </div>
              </Card>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <Card style={{ padding: 18 }}>
                  <div style={{ fontSize: 32, fontWeight: 800 }}>4+</div>
                  <div style={{ color: page.muted, marginTop: 8 }}>Featured projects</div>
                </Card>
                <Card style={{ padding: 18 }}>
                  <div style={{ fontSize: 32, fontWeight: 800 }}>3</div>
                  <div style={{ color: page.muted, marginTop: 8 }}>Core themes: software, security, product</div>
                </Card>
              </div>
            </div>
          </Card>
        </section>

        <section id="about" style={{ marginBottom: 84 }}>
          <SectionTitle
            eyebrow="About"
            title="CTI Analyst with a security background and a builder mindset"
          />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
            <Card>
              <h3 style={{ marginTop: 0 }}>Senior Cyber Threat Intelligence Analyst</h3>
              <div style={{ color: page.muted, marginBottom: 14 }}>Cyberint / Check Point Software Technologies</div>
              <p style={{ color: page.muted, lineHeight: 1.7, margin: 0 }}>
                Investigating threats, analyzing attacker behavior, and working close to real-world
                security workflows while thinking in a structured, evidence-based way.
              </p>
            </Card>

            <Card>
              <h3 style={{ marginTop: 0 }}>B.Sc. Computer Science Student</h3>
              <div style={{ color: page.muted, marginBottom: 14 }}>Reichman University</div>
              <p style={{ color: page.muted, lineHeight: 1.7, margin: 0 }}>
                Building strong foundations in software, systems, security, databases, and applied
                problem-solving while creating practical portfolio projects.
              </p>
            </Card>

            <Card>
              <h3 style={{ marginTop: 0 }}>Builder Mindset</h3>
              <div style={{ color: page.muted, marginBottom: 14 }}>Projects that show range</div>
              <p style={{ color: page.muted, lineHeight: 1.7, margin: 0 }}>
                Using projects to bridge analysis, engineering, UX, and product thinking.
              </p>
            </Card>
          </div>
        </section>

        <section id="projects" style={{ marginBottom: 84 }}>
          <SectionTitle
            eyebrow="Projects"
            title="Featured projects"
            description="The below projects reflect the areas I am most interested about: software development, security-oriented thinking, and building products that solve real problems."
          />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
            {projects.map((project) => (
              <Card key={project.title}>
                <div style={{ color: page.muted, fontSize: 14, marginBottom: 8 }}>{project.tag}</div>
                <h3 style={{ fontSize: 28, margin: "0 0 14px 0" }}>{project.title}</h3>
                <p style={{ color: page.muted, lineHeight: 1.75, margin: 0 }}>{project.description}</p>

                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 18 }}>
                  {project.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      style={{
                        border: `1px solid ${page.border}`,
                        borderRadius: 999,
                        padding: "6px 10px",
                        fontSize: 12,
                        color: page.muted,
                      }}
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 22 }}>
                  <LinkButton href={project.github}>GitHub</LinkButton>
                  {project.demo && (
                    <LinkButton href={project.demo} primary>
                      Live / Demo
                    </LinkButton>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="skills" style={{ marginBottom: 84 }}>
          <SectionTitle
            title="Tools & Skills"
          />

          <Card>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    border: `1px solid ${page.border}`,
                    borderRadius: 14,
                    padding: "10px 14px",
                    fontWeight: 600,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        </section>

        <section id="contact">
          <SectionTitle
            title="Contact Me"
          />

          <Card>
            <h3 style={{ marginTop: 0 }}>Let’s connect</h3>
            <p style={{ color: page.text, lineHeight: 1.7, marginBottom: 8 }}>
              Feel free to reach out by email, connect with me on LinkedIn, or explore more of my work on GitHub.
            </p>

            <p style={{ color: page.text, lineHeight: 1.7, marginTop: 0 }}>
              Email: danielr123439@gmail.com
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 18 }}>
              <LinkButton href="https://github.com/DanielRachamim1234">GitHub</LinkButton>
              <LinkButton href="https://www.linkedin.com/in/daniel-rachamim/">LinkedIn</LinkButton>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
