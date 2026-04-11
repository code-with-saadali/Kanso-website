export type Project = {
  id: number;
  slug: string;
  title: string;
  category: string;
  year: string;
  tag: string;
  image: string;
  overview: string;
  details: {
    client: string;
    services: string;
    year: string;
  };
  sections: {
    heading: string;
    // pehla paragraph = bada hero heading, baaki = small subtext
    paragraphs: string[];
  }[];
  gallery: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "lune",
    title: "Lune",
    category: "App Visual Direction",
    year: "2025",
    tag: "Art Direction",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1200&q=80",
    overview:
      "We provided visual direction, iconography, and UI refinement to create a soothing, focused experience.",
    details: {
      client: "Lune",
      services: "Art Direction, UI Design, Motion",
      year: "2025",
    },
    sections: [
      {
        heading: "Challenge",
        paragraphs: [
          "Lune was building a mental wellness app but lacked a clear visual direction.",
          "The early interface felt clinical and didn't evoke the calming experience they were aiming to create.",
        ],
      },
      {
        heading: "Solution",
        paragraphs: [
          "We developed a soft, serene visual system with a warm palette, rounded iconography, and a clean layout framework.",
          "Subtle motion and sound cues were introduced to enhance emotional connection without distraction.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "Lune's reimagined interface improved onboarding and daily use engagement.",
        ],
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80",
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800&q=80",
    ],
  },
  {
    id: 2,
    slug: "aren",
    title: "Aren",
    category: "Fashion Brand Launch",
    year: "2025",
    tag: "Brand Identity",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    overview:
      "A fashion label that needed an identity as considered as its garments — grounded in craft, elevated by restraint.",
    details: {
      client: "Aren Studio",
      services: "Brand Identity, Typography, Art Direction",
      year: "2025",
    },
    sections: [
      {
        heading: "Challenge",
        paragraphs: [
          "Aren needed a brand that didn't shout — the clothes speak for themselves.",
          "The challenge was creating something memorable without being loud — presence, not volume.",
        ],
      },
      {
        heading: "Solution",
        paragraphs: [
          "We chose a custom-refined wordmark with a strictly limited palette: off-white, warm black, and one structural tone.",
          "The typographic system was built for longevity — classical proportions, contemporary spacing.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "The brand launched to strong editorial coverage — the identity enhanced the product rather than competing with it.",
        ],
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    ],
  },
  {
    id: 3,
    slug: "forma",
    title: "Forma",
    category: "Brand Identity Design",
    year: "2024",
    tag: "Digital Design",
    image: "https://ik.imagekit.io/msmrd69gi/knos%20website/pPk4LzlQQcnV8kGuwN1eECaNjU.avif?updatedAt=1775552518098",
    overview:
      "An architecture studio with a body of work that deserved a stronger visual presence — rebuilt from the ground up.",
    details: {
      client: "Forma Studio",
      services: "Brand Identity, Digital Design, Web",
      year: "2024",
    },
    sections: [
      {
        heading: "Challenge",
        paragraphs: [
          "Forma had outgrown their identity — their portfolio matured but their brand still felt early-stage.",
          "They needed a visual presence that matched where they were, not where they started.",
        ],
      },
      {
        heading: "Solution",
        paragraphs: [
          "A grid-based logo system, precise typographic rules, and a palette drawn from the materials they work with.",
          "Every touchpoint was designed with the same level of intention as their built work.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "The new identity helped Forma win two major pitches within the first quarter.",
        ],
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80",
      "https://ik.imagekit.io/msmrd69gi/knos%20website/pPk4LzlQQcnV8kGuwN1eECaNjU.avif?updatedAt=1775552518098",
    ],
  },
  {
    id: 4,
    slug: "norda",
    title: "Nørda",
    category: "Product Campaign",
    year: "2024",
    tag: "Strategy",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=80",
    overview:
      "A Scandinavian audio brand positioned as the quiet alternative in an overcrowded market.",
    details: {
      client: "Nørda Audio",
      services: "Strategy, Campaign Direction, Copywriting",
      year: "2024",
    },
    sections: [
      {
        heading: "Challenge",
        paragraphs: [
          "The audio market is saturated with brands competing on specs and noise.",
          "Nørda's advantage was different — exceptional sound, minimal design, and a philosophy of less.",
        ],
      },
      {
        heading: "Solution",
        paragraphs: [
          "We built the campaign around one idea: silence is a sound too.",
          "Sparse visuals, product photography with no distractions, and copy that said more by saying less.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "The campaign exceeded projected reach by 40% in the first month — Nørda became associated with a feeling, not just a product.",
        ],
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80",
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=800&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    ],
  },
  {
    id: 5,
    slug: "velin",
    title: "Velin",
    category: "Web Experience",
    year: "2023",
    tag: "Web design",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80",
    overview:
      "A developer tools company that needed a web presence as sharp as their product — credible without sacrificing warmth.",
    details: {
      client: "Velin Technologies",
      services: "Web Design, Interaction Design, Prototyping",
      year: "2023",
    },
    sections: [
      {
        heading: "Challenge",
        paragraphs: [
          "Velin wanted something different — a site developers respected but anyone could understand.",
          "Most developer-facing products default to dark mode and dense layouts. That wasn't their story.",
        ],
      },
      {
        heading: "Solution",
        paragraphs: [
          "We designed around progressive disclosure — the homepage communicates core value in under five seconds.",
          "Micro-interactions were used deliberately: every hover state and transition confirms something is happening.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "Bounce rates dropped significantly — prospects arrived already understanding the product.",
        ],
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    ],
  },
  {
    id: 6,
    slug: "studio-oko",
    title: "Studio Oko",
    category: "Visual Strategy",
    year: "2023",
    tag: "Strategy",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80",
    overview:
      "A creative consultancy that needed a brand flexible enough to stretch across every context — always unmistakably theirs.",
    details: {
      client: "Studio Oko",
      services: "Visual Strategy, Brand System, Guidelines",
      year: "2023",
    },
    sections: [
      {
        heading: "Challenge",
        paragraphs: [
          "Consultancies need to be credible across very different industries without feeling generic.",
          "Studio Oko needed a visual strategy that was both adaptable and distinctive.",
        ],
      },
      {
        heading: "Solution",
        paragraphs: [
          "A modular brand system — a small set of core elements that could be recombined across formats.",
          "The result was a brand that felt consistent without being rigid — it could dress for any room without losing itself.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "Brand guidelines were adopted across all touchpoints with minimal deviation — intuitive enough for the whole team.",
        ],
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
    ],
  },
];