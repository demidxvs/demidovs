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

export default function Home() {
  return (
    <>
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
          <div className="hero-badge"><div className="badge-dot" />Currently open to new projects</div>
          <h1 className="hero-name"><span className="shimmer">Artyom Demidov</span></h1>
          <p className="hero-sub">
            Building web apps, REST APIs and dashboards with focus on
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
                  <p className="about-txt">I&apos;m a Full Stack Developer who cares about both code quality and the end result. I build things that work fast, look clean and are easy to maintain. My stack is centered around Next.js, TypeScript and Python - but I adapt to what the project needs.</p>
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

        <section id="projects">
          <div className="wrap">
            <div className="reveal">
              <div className="eyebrow">Portfolio</div>
              <h2 className="sec-title">Recent Projects</h2>
              <p className="sec-desc">A few products I designed and shipped.</p>
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
              <div className="eyebrow">What I do</div>
              <h2 className="sec-title">Full Stack<br />Development</h2>
              <p className="sec-desc">I build websites and panels, REST APIs and backend - with focus on speed, design and stability.</p>
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
                <div className="eyebrow">Let&apos;s work</div>
                <h2 className="sec-title">Ready to Start<br />a Project?</h2>
                <p className="sec-desc contact-desc">Have an idea or need a developer? Drop me a message - I read everything.</p>
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
