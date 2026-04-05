import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/projects";
import {
  CONTACT_EMAIL,
  PERSON_NAME,
  SITE_NAME,
  SITE_URL,
  SOCIAL_LINKS,
} from "@/lib/site";

const pageTitle = "Demidovs";
const pageDescription =
  "Demidovs is the personal development brand of Artyom Demidov, focused on full stack development, websites, dashboards, APIs, admin panels, and production-ready digital products.";

const brandStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/demidovs#webpage`,
      url: `${SITE_URL}/demidovs`,
      name: pageTitle,
      description: pageDescription,
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
      about: {
        "@id": `${SITE_URL}/#person`,
      },
    },
    {
      "@type": "Brand",
      "@id": `${SITE_URL}/demidovs#brand`,
      name: SITE_NAME,
      description: pageDescription,
      url: `${SITE_URL}/demidovs`,
      email: CONTACT_EMAIL,
      sameAs: SOCIAL_LINKS,
    },
  ],
};

export const metadata: Metadata = {
  title: {
    absolute: "Demidovs | Brand, Portfolio, and Full Stack Development",
  },
  description: pageDescription,
  alternates: {
    canonical: "/demidovs",
  },
  openGraph: {
    title: "Demidovs | Brand, Portfolio, and Full Stack Development",
    description: pageDescription,
    url: "/demidovs",
    siteName: SITE_NAME,
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: "Demidovs | Brand, Portfolio, and Full Stack Development",
    description: pageDescription,
  },
};

export default function DemidovsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(brandStructuredData),
        }}
      />
      <main className="project-page">
        <div className="spotlight" />
        <section className="project-shell">
          <div className="project-wrap">
            <div className="project-topbar">
              <Link href="/" className="project-back">
                <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                  <path d="M12 7H2M2 7l4.5-4.5M2 7l4.5 4.5" />
                </svg>
                Back to homepage
              </Link>
              <a href={`mailto:${CONTACT_EMAIL}`} className="project-visit">
                Contact Demidovs
                <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                  <path d="M1 11 11 1M4 1h7v7" />
                </svg>
              </a>
            </div>

            <div className="project-hero-card">
              <div className="project-hero-copy" style={{ gridColumn: "1 / -1" }}>
                <div className="project-kicker">Brand Page</div>
                <h1 className="project-title">Demidovs</h1>
                <p className="project-intro">
                  Demidovs is the personal development brand of {PERSON_NAME}, focused on full stack development, websites, admin panels, REST APIs, and digital products that are built to perform in production.
                </p>
                <div className="project-meta">
                  <div className="project-meta-card">
                    <span className="project-meta-label">Founder</span>
                    <span className="project-meta-value">{PERSON_NAME}</span>
                  </div>
                  <div className="project-meta-card">
                    <span className="project-meta-label">Focus</span>
                    <span className="project-meta-value">Full stack development, product execution, and delivery</span>
                  </div>
                  <div className="project-meta-card">
                    <span className="project-meta-label">Brand site</span>
                    <span className="project-meta-value">www.demidovs.com</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="project-detail-grid">
              <section className="project-panel">
                <div className="project-panel-title">What Demidovs is</div>
                <p className="project-panel-text">
                  Demidovs is a portfolio and professional identity built around practical software work: fast user interfaces, stable backend logic, clean code, maintainable architecture, and execution that keeps quality high after launch.
                </p>
              </section>
              <section className="project-panel">
                <div className="project-panel-title">Who is behind the brand</div>
                <p className="project-panel-text">
                  Artyom Demidov handles the work directly. That includes frontend implementation, backend systems, product architecture, integrations, deployment, and the SEO fundamentals needed to make shipped work discoverable.
                </p>
              </section>
            </div>

            <section className="project-panel project-stack-panel">
              <div className="project-panel-title">What Demidovs builds</div>
              <div className="project-stack-grid">
                <div className="project-stack-card project-stack-card--violet">
                  <div className="project-stack-card-title">Frontend & Product</div>
                  <div className="project-stack">
                    {["Next.js", "React", "TypeScript", "Tailwind CSS", "UI systems"].map((item) => (
                      <span key={item} className="project-chip">{item}</span>
                    ))}
                  </div>
                </div>
                <div className="project-stack-card project-stack-card--emerald">
                  <div className="project-stack-card-title">Backend & Data</div>
                  <div className="project-stack">
                    {["Node.js", "Python", "REST APIs", "PostgreSQL", "Supabase"].map((item) => (
                      <span key={item} className="project-chip">{item}</span>
                    ))}
                  </div>
                </div>
                <div className="project-stack-card project-stack-card--amber">
                  <div className="project-stack-card-title">Delivery</div>
                  <div className="project-stack">
                    {["Architecture", "Admin panels", "Integrations", "SEO basics", "Production launch"].map((item) => (
                      <span key={item} className="project-chip">{item}</span>
                    ))}
                  </div>
                </div>
                <div className="project-stack-card project-stack-card--cobalt">
                  <div className="project-stack-card-title">Brand Signals</div>
                  <div className="project-stack">
                    {["Demidovs", "Portfolio", "Case studies", "Founder-led work", "Direct contact"].map((item) => (
                      <span key={item} className="project-chip">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <div className="project-detail-grid">
              <section className="project-panel">
                <div className="project-panel-title">Selected projects</div>
                <ul className="project-list">
                  {projects.map((project) => (
                    <li key={project.slug}>
                      <Link href={`/projects/${project.slug}`}>{project.name}</Link>
                    </li>
                  ))}
                </ul>
              </section>
              <section className="project-panel">
                <div className="project-panel-title">Profiles and contact</div>
                <ul className="project-list">
                  <li><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
                  <li><a href={SOCIAL_LINKS[0]} target="_blank" rel="noreferrer">GitHub</a></li>
                  <li><a href={SOCIAL_LINKS[1]} target="_blank" rel="noreferrer">LinkedIn</a></li>
                  <li><a href={SOCIAL_LINKS[2]} target="_blank" rel="noreferrer">Telegram</a></li>
                </ul>
              </section>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
