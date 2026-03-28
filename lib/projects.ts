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
  },
  {
    slug: "mdb-light",
    name: "MDB Light",
    icon: "shield",
    logoImage: "/project-previews/mdb-light-logo.svg",
    previewImage: "/project-previews/mdb-light.png",
    cardDescription:
      "Multilingual LED lighting marketplace concept with premium storefront, admin workflows, and Stripe-ready ecommerce structure.",
    intro:
      "A commercial marketplace concept for the LED lighting industry, designed as a scalable storefront that can grow into a full ecommerce product.",
    overview:
      "MDB Light is a multilingual marketplace concept focused on LED lighting products. I built it as a premium storefront with category-driven product discovery, a structured catalog, and a hidden admin area prepared for real operational workflows. The architecture is meant to support further growth into a complete ecommerce system with order processing, payment integration, multilingual content management, and scalable backend logic.",
    role: "Marketplace frontend, multilingual UX, admin architecture, ecommerce-ready product design",
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
    ],
    highlights: [
      "Designed as a multilingual marketplace for a real commercial niche.",
      "Built around category-based product discovery and premium product presentation.",
      "Prepared for admin workflows covering products, descriptions, orders, and pricing.",
      "Structured to evolve from a storefront into a full ecommerce platform.",
      "Planned with Stripe payments and Supabase-backed operations from the start.",
    ],
    status: "In Progress",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
