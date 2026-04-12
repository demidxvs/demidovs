export type Project = {
  slug: string;
  name: string;
  icon: "cart" | "chart" | "dumbbell" | "shield";
  logoImage?: string;
  previewImage: string;
  cardDescription: string;
  intro: string;
  overview?: string;
  role: string;
  stack: string[];
  stackGroups?: Array<{
    title: string;
    tone: "violet" | "emerald" | "cobalt" | "amber" | "neutral";
    items: string[];
  }>;
  highlights: string[];
  status?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "eurodizains",
    name: "Eurodizains",
    icon: "cart",
    logoImage: "/project-previews/eurodizains_logo.svg",
    previewImage: "/project-previews/eurodizains.png",
    cardDescription:
      "Multilingual promo website for EuroDizains with responsive UI, SPA routing, motion, and SEO-focused landing pages.",
    intro:
      "A multilingual promo website for EuroDizains, built as a fast React SPA for interior design, renovation, and stretch ceiling services.",
    overview:
      "I developed EuroDizains as a responsive single-page application with a clean service structure, localized content, and SEO-ready landing pages. The project focused on usability across mobile devices, clear navigation through many service pages, and a solid SEO setup with metadata, Open Graph, canonical, hreflang, structured data, and Apache routing support.",
    role: "Frontend development, localization, mobile optimization, SEO implementation",
    stack: [
      "React 18",
      "React Router",
      "Tailwind CSS",
      "Framer Motion",
      "i18next",
      "react-i18next",
      "lucide-react",
      "Open Graph",
      "Schema.org",
      ".htaccess",
    ],
    stackGroups: [
      {
        title: "Frontend",
        tone: "violet",
        items: ["React 18", "Tailwind CSS", "lucide-react"],
      },
      {
        title: "Routing & UX",
        tone: "amber",
        items: ["React Router", "SPA structure", "Responsive UI"],
      },
      {
        title: "Localization",
        tone: "emerald",
        items: ["i18next", "react-i18next", "Multilingual pages"],
      },
      {
        title: "SEO & Delivery",
        tone: "cobalt",
        items: ["Open Graph", "Schema.org", ".htaccess", "Canonical / hreflang"],
      },
    ],
    highlights: [
      "Built the project as a multilingual SPA with React and client-side routing.",
      "Created an adaptive UI optimized for phones, tablets, and desktop screens.",
      "Implemented Framer Motion transitions to make the landing flow feel smoother.",
      "Prepared a full SEO layer: meta tags, Open Graph, canonical, hreflang, and structured data.",
      "Configured Apache .htaccess support for correct SPA routing on production hosting.",
    ],
    liveUrl: "https://eurodizains.com/?language=lv",
  },
  {
    slug: "drivefora",
    name: "DriveFora",
    icon: "chart",
    logoImage: "/project-previews/drivefora-logo.svg",
    previewImage: "/project-previews/drivefora.png",
    cardDescription:
      "Full-stack vehicle marketplace with listings, messaging, reviews, admin tools, and multilingual user flows.",
    intro:
      "A full-stack marketplace platform for cars, motorcycles, trucks, and auto parts with buyer-seller flows, moderation, and multilingual UX.",
    overview:
      "DriveFora was built as a full-stack marketplace product where users can register, publish listings, browse vehicles, save favorites, exchange messages, leave post-deal reviews, and manage public profiles. The application uses Next.js App Router on the frontend, Route Handlers for server logic, and Supabase for authentication, Postgres data storage, and media uploads. It also includes multilingual support, VIN decoding through an external API, role-based admin access, and server-side business validation.",
    role: "Full-stack development, product architecture, admin workflows, backend integrations",
    stack: [
      "Next.js 15",
      "React 18",
      "TypeScript",
      "Tailwind CSS 4",
      "Next.js Route Handlers",
      "Supabase Auth",
      "Supabase Postgres",
      "Supabase Storage",
      "next-intl",
      "Vincario API",
    ],
    stackGroups: [
      {
        title: "Frontend",
        tone: "violet",
        items: ["Next.js 15", "React 18", "TypeScript", "Tailwind CSS 4"],
      },
      {
        title: "Backend",
        tone: "emerald",
        items: ["Route Handlers", "Supabase Auth", "Postgres", "Storage"],
      },
      {
        title: "Marketplace Logic",
        tone: "amber",
        items: ["Listings CRUD", "Messaging", "Favorites", "Reviews"],
      },
      {
        title: "Integrations & Access",
        tone: "cobalt",
        items: ["next-intl", "Vincario API", "Role-based access", "Server validation"],
      },
    ],
    highlights: [
      "Implemented registration, login, profiles, listings, favorites, and buyer-seller messaging.",
      "Built review flows and public profiles to support post-deal trust.",
      "Integrated VIN decoding through Vincario for vehicle data enrichment.",
      "Added an admin dashboard for moderating users, listings, and marketplace content.",
      "Structured the app with clear client/server separation and server-side validation.",
    ],
    liveUrl: "https://drivefora.vercel.app/en",
  },
  {
    slug: "benchpress-calculator",
    name: "BenchPress Calculator",
    icon: "dumbbell",
    previewImage: "/project-previews/bench-press.png",
    cardDescription:
      "Minimal gym calculator based on Inol and Prilepin tables for load, volume, and working weight planning.",
    intro:
      "A focused training calculator that helps athletes estimate working weights and session load using proven strength tables.",
    overview:
      "BenchPress Calculator is a focused training tool built around Inol and Prilepin methods. The goal of the project is to make strength planning faster and more practical for real gym usage: quick working weight estimation, better control over volume and intensity, and a cleaner way to structure bench sessions without spreadsheet friction.",
    role: "Product idea, logic design, calculator UX, training formulas",
    stack: ["JavaScript", "Calculator Logic", "Sports UX", "Training Tables"],
    stackGroups: [
      {
        title: "Product",
        tone: "amber",
        items: ["Gym calculator", "Fast input", "Focused workflow"],
      },
      {
        title: "Logic",
        tone: "violet",
        items: ["Inol method", "Prilepin table", "Load calculation"],
      },
      {
        title: "Experience",
        tone: "emerald",
        items: ["Simple UI", "Quick planning", "Training usability"],
      },
      {
        title: "Use Case",
        tone: "cobalt",
        items: ["Bench press", "Volume", "Intensity", "Working weights"],
      },
    ],
    highlights: [
      "Built around Inol and Prilepin methods.",
      "Keeps the interface simple and fast to use in the gym.",
      "Helps estimate volume and intensity for strength sessions.",
    ],
    liveUrl: "https://benchpress-calculator.vercel.app/",
  },
  {
    slug: "mdb-light",
    name: "MDB Light",
    icon: "shield",
    logoImage: "/project-previews/mdb-light-logo.svg",
    previewImage: "/project-previews/mdb-light.png",
    cardDescription:
      "Full-stack multilingual LED marketplace with product catalog, admin workflows, SEO architecture, and Stripe/Supabase-ready commerce foundation.",
    intro:
      "A production-oriented multilingual marketplace for LED lighting, built with a structured catalog, operational admin area, and ecommerce architecture prepared for real business workflows.",
    overview:
      "MDB Light is not just a visual showcase. I built it as a full product architecture for a real niche marketplace: multilingual storefront pages, category-based product discovery, SEO-ready structure, and admin-focused operational flows. The project includes a practical foundation for product management, pricing updates, and content maintenance across multiple languages, plus backend and payment direction aligned with Supabase and Stripe. The result is a business-ready base that can move from portfolio case to fully deployed ecommerce operations without rewriting the core platform model.",
    role: "Full-stack product architecture, multilingual marketplace UX, catalog modeling, admin system planning, SEO foundation",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Framer Motion",
      "Lucide React",
      "Supabase",
      "Stripe",
    ],
    stackGroups: [
      {
        title: "Frontend",
        tone: "violet",
        items: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4"],
      },
      {
        title: "Interface",
        tone: "amber",
        items: ["Framer Motion", "Lucide React", "Premium UI", "Catalog UX"],
      },
      {
        title: "Platform",
        tone: "emerald",
        items: ["Supabase", "Auth", "Admin Panel", "Multilingual content"],
      },
      {
        title: "Commerce",
        tone: "cobalt",
        items: ["Stripe", "Orders", "Pricing", "Product management"],
      },
      {
        title: "Delivery & Quality",
        tone: "neutral",
        items: ["SEO metadata", "Schema-ready structure", "Scalable architecture", "Production-minded UX"],
      },
    ],
    highlights: [
      "Designed and implemented as a multilingual marketplace for a real commercial LED lighting domain.",
      "Built a structured product catalog model with category-driven browsing and scalable listing hierarchy.",
      "Prepared operational admin flows for product data, descriptions, pricing updates, and order-related management.",
      "Set up a technical direction for secure authentication and backend workflows using Supabase architecture.",
      "Aligned commerce layer with Stripe-based payment integration strategy for online checkout expansion.",
      "Shaped the project as a production-minded platform, not a one-page promo or static demo.",
      "Defined the platform to support future business growth without rebuilding the information architecture.",
      "Combined premium UI direction with practical maintainability for long-term product development.",
    ],
    liveUrl: "https://www.mdblight.com/en",
  },
  {
    slug: "atmos",
    name: "Atmos",
    icon: "shield",
    logoImage: "/project-previews/atmos-wordmark.svg",
    previewImage: "/project-previews/atmos.png",
    cardDescription:
      "Modern web experience with strong visual identity, clear interaction flow, and production-ready frontend delivery.",
    intro:
      "Atmos is a polished product website focused on visual clarity, fast navigation, and a clean conversion-oriented layout.",
    overview:
      "Atmos was built as a frontend-first product site with emphasis on branding consistency, responsive behavior, and user flow quality. The project focuses on premium presentation, smooth interaction states, and scalable structure so new sections and marketing pages can be added without redesigning the foundation.",
    role: "Frontend development, UI implementation, responsive behavior, visual system execution",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    stackGroups: [
      {
        title: "Frontend",
        tone: "violet",
        items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      },
      {
        title: "Experience",
        tone: "amber",
        items: ["Responsive layout", "Interaction states", "Visual consistency"],
      },
      {
        title: "Delivery",
        tone: "cobalt",
        items: ["Production build", "SEO-ready structure", "Scalable page architecture"],
      },
    ],
    highlights: [
      "Built and shipped a clean branded interface with consistent visual language.",
      "Implemented responsive behavior across desktop and mobile breakpoints.",
      "Structured page sections for easy future expansion of product and marketing content.",
      "Focused on fast UI rendering and smooth interaction patterns.",
    ],
    liveUrl: "https://atmos-temp.vercel.app/",
    status: "Completed",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
