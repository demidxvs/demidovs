import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProjectBySlug, projects } from "@/lib/projects";
import { SITE_NAME } from "@/lib/site";
import { CartIcon, ChartIcon, DumbbellIcon, ShieldIcon } from "@/app/portfolio-icons";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const description = project.overview ?? project.cardDescription;
  const title = `${project.name} Case Study`;

  return {
    title,
    description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: `/projects/${project.slug}`,
      siteName: SITE_NAME,
      type: "article",
      images: [
        {
          url: project.previewImage,
          alt: `${project.name} preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [project.previewImage],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <main className="project-page">
      <div className="spotlight" />
      <section className="project-shell">
        <div className="project-wrap">
          <div className="project-topbar">
            <Link href="/#projects" className="project-back">
              <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                <path d="M12 7H2M2 7l4.5-4.5M2 7l4.5 4.5" />
              </svg>
              Back to projects
            </Link>
            {project.liveUrl ? (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="project-visit">
                Visit live
                <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                  <path d="M1 11 11 1M4 1h7v7" />
                </svg>
              </a>
            ) : null}
          </div>

          <div className="project-hero-card">
            <div className="project-hero-icon">{getProjectIcon(project.icon, project.logoImage, project.name)}</div>
            <div className="project-hero-copy">
              <div className="project-kicker">Project Case</div>
              <h1 className="project-title">{project.name}</h1>
              <p className="project-intro">{project.intro}</p>
              <div className="project-meta">
                <div className="project-meta-card">
                  <span className="project-meta-label">Role</span>
                  <span className="project-meta-value">{project.role}</span>
                </div>
                {project.status ? (
                  <div className="project-meta-card">
                    <span className="project-meta-label">Status</span>
                    <span className="project-meta-value">{project.status}</span>
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          <a
            href={project.liveUrl ?? "#"}
            target={project.liveUrl ? "_blank" : undefined}
            rel={project.liveUrl ? "noreferrer" : undefined}
            className={`project-shot ${project.liveUrl ? "" : "project-shot--static"}`}
          >
            <img src={project.previewImage} alt={`${project.name} screenshot`} />
          </a>

          <div className="project-detail-grid">
            <section className="project-panel">
              <div className="project-panel-title">Overview</div>
              <p className="project-panel-text">{project.overview ?? project.cardDescription}</p>
            </section>

            <section className="project-panel">
              <div className="project-panel-title">Highlights</div>
              <ul className="project-list">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </div>

          <section className="project-panel project-stack-panel">
            <div className="project-panel-title">Stack</div>
            {project.stackGroups ? (
              <div className="project-stack-grid">
                {project.stackGroups.map((group) => (
                  <div key={group.title} className={`project-stack-card project-stack-card--${group.tone}`}>
                    <div className="project-stack-card-title">{group.title}</div>
                    <div className="project-stack">
                      {group.items.map((item) => (
                        <span key={item} className="project-chip">{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="project-stack">
                {project.stack.map((item) => (
                  <span key={item} className="project-chip">{item}</span>
                ))}
              </div>
            )}
          </section>
        </div>
      </section>
    </main>
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
