import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import {
  siGit,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPython,
  siReact,
  siSupabase,
  siTailwindcss,
  siTypescript,
} from "simple-icons";
import PortfolioEffects from "@/components/ui/portfolio-effects";
import SectionNav from "@/components/ui/section-nav";
import { projects } from "@/lib/projects";
import {
  CONTACT_EMAIL,
  HOME_DESCRIPTION,
  HOME_TITLE,
  PERSON_NAME,
  SITE_NAME,
  SITE_URL,
  SOCIAL_LINKS,
} from "@/lib/site";
import {
  ApiIcon,
  BoltIcon,
  CartIcon,
  ChartIcon,
  CleanCodeIcon,
  ClockIcon,
  DatabaseAtomIcon,
  DeployIcon,
  DumbbellIcon,
  EmailIcon,
  GithubIcon,
  LayersIcon,
  LinkedinIcon,
  MouseScrollIcon,
  PanelIcon,
  ShieldIcon,
  SunIcon,
  TelegramIcon,
} from "./portfolio-icons";

const homeStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      alternateName: PERSON_NAME,
      inLanguage: "en",
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: PERSON_NAME,
      url: SITE_URL,
      email: CONTACT_EMAIL,
      jobTitle: "Full Stack Developer",
      sameAs: SOCIAL_LINKS,
      knowsAbout: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "Python",
        "PostgreSQL",
        "Supabase",
        "SEO",
      ],
    },
  ],
};

export const metadata: Metadata = {
  title: {
    absolute: HOME_TITLE,
  },
  description: HOME_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: "/",
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeStructuredData),
        }}
      />
      <main className="portfolio-page">
        <PortfolioEffects />
        <canvas id="canvas" />
        <div className="spotlight" />
        <header id="hdr">
          <div className="wrap">
            <nav className="nav">
              <a href="#hero" className="nav-logo">
                <img src="/branding/demidovs-logo.svg" alt="demidovs" className="nav-logo-image" />
              </a>
              <SectionNav />
              <div className="nav-actions">
                <a href="#projects" className="n-ghost">Projects</a>
                <a href="#contact" className="n-solid">
                  Contact
                  <MessageCircle size={16} strokeWidth={2.1} aria-hidden="true" />
                </a>
              </div>
            </nav>
          </div>
        </header>

        <section id="hero">
          <div className="hero-badge"><div className="badge-dot" />Demidovs is currently open to new projects</div>
          <h1 className="hero-name"><span className="shimmer">Artyom Demidov</span></h1>
          <p className="hero-sub">
            Building under the <strong>Demidovs</strong> brand: web apps, REST APIs and dashboards with focus on
            <br />
            <strong>design, speed and stability.</strong> 2+ years of experience.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn-fill">
              View Projects
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" aria-hidden="true">
                <path d="M2 6.5h9M6.5 2l4.5 4.5-4.5 4.5" />
              </svg>
            </a>
            <a href="#contact" className="btn-line">Get in touch</a>
          </div>
          <a href="#about" className="scroll-hint" aria-label="Scroll to about">
            <div className="scroll-car"><MouseScrollIcon /></div>
            <div className="scroll-line" />
          </a>
        </section>

        <div className="divider" />

        <section id="about">
          <div className="wrap">
            <div className="about-layout">
              <div className="reveal">
                <div className="about-card">
                  <div className="about-av">AD</div>
                  <p className="about-txt">I&apos;m Artyom Demidov, the developer behind <strong>Demidovs</strong> - a personal full stack development brand focused on products that are fast, clear, and maintainable. My stack is centered around Next.js, TypeScript, and Python, but the goal stays the same: ship work that looks sharp, performs well, and holds up in production.</p>
                  <div className="about-stats">
                    <StatCard value="2+" label="Years exp" />
                    <StatCard value="20+" label="Projects" />
                    <StatCard value="8+" label="Technologies" />
                  </div>
                </div>
              </div>

              <div className="vals reveal" style={{ transitionDelay: "0.1s" }}>
                <ValueCard icon={<BoltIcon />} title="Performance First" desc="Every millisecond matters. I optimize at every layer of the stack." />
                <ValueCard icon={<CleanCodeIcon />} title="Clean Code" desc="Readable, testable, typed. Built to last, not just to ship." />
                <ValueCard icon={<ClockIcon />} title="On Time" desc="Deadlines matter. I deliver what I promise, when I promise it." />
                <ValueCard icon={<SunIcon />} title="Always Learning" desc="Tech moves fast. I stay sharp and curious every day." />
              </div>
            </div>
          </div>
        </section>

        <div className="divider" />

        <section id="brand">
          <div className="wrap">
            <div className="reveal">
              <div className="eyebrow">Demidovs</div>
              <h2 className="sec-title">A Personal Development Brand</h2>
              <p className="sec-desc">
                <strong>Demidovs</strong> is the portfolio brand of Artyom Demidov, focused on full stack development, product execution, and digital work that is built to last.
              </p>
            </div>
            <div className="project-detail-grid reveal" style={{ transitionDelay: "0.1s" }}>
              <section className="project-panel">
                <div className="project-panel-title">What Demidovs means</div>
                <p className="project-panel-text">
                  Demidovs stands for practical product work: clear interfaces, stable backend systems, clean code, and delivery that does not fall apart after launch.
                </p>
              </section>
              <section className="project-panel">
                <div className="project-panel-title">Who is behind it</div>
                <p className="project-panel-text">
                  Artyom Demidov leads the work personally, from frontend and backend implementation to architecture, integrations, SEO fundamentals, and production delivery.
                </p>
              </section>
            </div>
            <div className="hero-cta reveal" style={{ justifyContent: "flex-start", marginTop: "18px", animation: "none", opacity: 1 }}>
              <Link href="/demidovs" className="btn-fill">Open Demidovs Page</Link>
            </div>
          </div>
        </section>

        <div className="divider" />

        <section id="projects">
          <div className="wrap">
            <div className="reveal">
              <div className="eyebrow">Demidovs Portfolio</div>
              <h2 className="sec-title">Recent Projects</h2>
              <p className="sec-desc">Selected products designed and shipped under the Demidovs brand.</p>
            </div>
            <div className="projects-marquee reveal">
              <div className="projects-slider">
                <div className="projects-track">
                  {[...projects, ...projects].map((project, index) => (
                    <ProjectCard
                      key={`${project.slug}-${index}`}
                      slug={project.slug}
                      icon={getProjectIcon(project.icon, project.logoImage, project.name)}
                      name={project.name}
                      desc={project.cardDescription}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="divider" />

        <section id="services">
          <div className="wrap">
            <div className="services-intro reveal">
              <div className="eyebrow">What Demidovs builds</div>
              <h2 className="sec-title">Full Stack<br />Development</h2>
              <p className="sec-desc">Demidovs builds websites, admin panels, REST APIs, and backend systems with focus on speed, design, and stability.</p>
              <div className="tech-pills">
                <span className="tpill"><DatabaseAtomIcon />DB: PostgreSQL · Redis · Prisma</span>
                <span className="tpill"><DeployIcon />Deploy: PM2 · CI/CD · Nginx</span>
              </div>
            </div>

            <div className="services-grid reveal" style={{ transitionDelay: "0.1s" }}>
              <ServiceCard
                icon={<PanelIcon />}
                title="Web Apps & Dashboards"
                text="Landing pages, admin panels, SaaS UIs. Fast and pixel-perfect, built with Next.js + Tailwind."
                tags={["Next.js", "React", "TypeScript", "Tailwind CSS", "SEO"]}
                tone="violet"
              />
              <ServiceCard
                icon={<ApiIcon />}
                title="Backend & REST APIs"
                text="API design, auth systems, database architecture with Python & Node.js. Stable and well-documented."
                tags={["Python", "Node.js", "REST API", "PostgreSQL", "Supabase"]}
                tone="emerald"
              />
              <ServiceCard
                icon={<LayersIcon />}
                title="Infrastructure & DevOps"
                text="Git workflows, CI/CD pipelines, Docker deployments. Keeping everything running 24/7."
                tags={["Git", "Docker", "CI/CD", "Vercel", "Linux"]}
                tone="cobalt"
              />
            </div>
          </div>
        </section>

        <div className="divider" />

        <section id="skills">
          <div className="wrap">
            <div className="reveal">
              <div className="eyebrow">Expertise</div>
              <h2 className="sec-title">Tech Stack</h2>
              <p className="sec-desc">Tools and technologies I use every day.</p>
            </div>
            <div className="skills-grid reveal">
              <SkillCard icon={<BrandIcon icon={siNextdotjs} />} name="Next.js" desc="SSR, SSG, App Router, full-stack React" />
              <SkillCard icon={<BrandIcon icon={siTypescript} />} name="TypeScript" desc="Strict typing, generics, advanced patterns" />
              <SkillCard icon={<BrandIcon icon={siPython} />} name="Python" desc="Automation, APIs, scripting, data processing" />
              <SkillCard icon={<BrandIcon icon={siPostgresql} />} name="PostgreSQL" desc="Relational DB design, queries, migrations" />
              <SkillCard icon={<BrandIcon icon={siSupabase} />} name="Supabase" desc="Auth, realtime DB, storage, edge functions" />
              <SkillCard icon={<BrandIcon icon={siTailwindcss} />} name="Tailwind CSS" desc="Utility-first, responsive, custom design systems" />
              <SkillCard icon={<BrandIcon icon={siReact} />} name="React" desc="Component architecture, hooks, interactive interfaces" />
              <SkillCard icon={<BrandIcon icon={siNodedotjs} />} name="Node.js" desc="Backend services, scripts, APIs, server runtime" />
              <SkillCard icon={<BrandIcon icon={siGit} />} name="Git" desc="Version control, branching, code reviews, CI/CD" />
            </div>
          </div>
        </section>

        <div className="divider" />

        <section id="contact" className="contact-section">
          <div className="wrap">
            <div className="contact-center">
              <div className="reveal">
                <div className="eyebrow">Work with Demidovs</div>
                <h2 className="sec-title">Ready to Start<br />a Project?</h2>
                <p className="sec-desc contact-desc">Need a developer or want to work with Demidovs? Drop me a message - I read everything myself.</p>
              </div>
              <div className="ccard reveal">
                <div className="c-email">dev@demidovs.com</div>
                <div className="socials">
                  <a href="https://github.com/demidxvs" target="_blank" rel="noreferrer" className="soc"><GithubIcon />GitHub</a>
                  <a href="https://www.linkedin.com/in/artjoms-demidovs-30b3a032b/" target="_blank" rel="noreferrer" className="soc"><LinkedinIcon />LinkedIn</a>
                  <a href="https://t.me/demidxvs" target="_blank" rel="noreferrer" className="soc"><TelegramIcon />Telegram</a>
                  <a href="mailto:dev@demidovs.com" className="soc"><EmailIcon />Email</a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}

function ProjectCard({
  slug,
  icon,
  name,
  desc,
}: {
  slug: string;
  icon: React.ReactNode;
  name: string;
  desc: string;
}) {
  return (
    <Link href={`/projects/${slug}`} className="proj">
      <div className="proj-thumb">{icon}</div>
      <div className="proj-body">
        <div className="proj-name">{name}</div>
        <div className="proj-desc">{desc}</div>
      </div>
    </Link>
  );
}

function ServiceCard({
  icon,
  title,
  text,
  tags,
  tone,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  tags: string[];
  tone: "violet" | "emerald" | "cobalt";
}) {
  return (
    <div className={`srv srv--${tone}`}>
      <div className="srv-head"><div className="srv-ico">{icon}</div><div className="srv-ttl">{title}</div></div>
      <p className="srv-txt">{text}</p>
      <div className="srv-tags">{tags.map((tag) => <span key={tag} className="srv-tag">{tag}</span>)}</div>
    </div>
  );
}

function SkillCard({ icon, name, desc }: { icon: React.ReactNode; name: string; desc: string }) {
  return (
    <div className="sk">
      <div className="sk-ico">{icon}</div>
      <div className="sk-name">{name}</div>
      <div className="sk-desc">{desc}</div>
    </div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="astat">
      <div className="astat-v">{value}</div>
      <div className="astat-l">{label}</div>
    </div>
  );
}

function ValueCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="val">
      <div className="val-i">{icon}</div>
      <div><div className="val-t">{title}</div><div className="val-d">{desc}</div></div>
    </div>
  );
}

function BrandIcon({
  icon,
}: {
  icon: { title: string; hex: string; path: string };
}) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={icon.path} fill={`#${icon.hex}`} />
    </svg>
  );
}

function getProjectIcon(
  icon: "cart" | "chart" | "dumbbell" | "shield",
  logoImage?: string,
  name?: string,
) {
  if (logoImage) return <img className="project-logo-image" src={logoImage} alt={`${name ?? "Project"} logo`} />;
  if (icon === "cart") return <CartIcon />;
  if (icon === "chart") return <ChartIcon />;
  if (icon === "dumbbell") return <DumbbellIcon />;
  return <ShieldIcon />;
}
