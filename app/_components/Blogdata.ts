export type Blog = {
  id: number;
  slug: string;
  date: string;
  title: string;
  desc: string;
  category: string;
  writer: string;
  img: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      paragraphs: string[];
    }[];
  };
};

export const blogs: Blog[] = [
  {
    id: 1,
    slug: "the-power-of-restraint-in-design",
    date: "May 30, 2025",
    title: "The Power of Restraint in Design",
    desc: "A look at how simplicity can sharpen communication, increase impact, and build longer-lasting brands.",
    category: "Insights",
    writer: "Hana Mori",
    img: "https://ik.imagekit.io/msmrd69gi/knos%20website/nFFMNvNEwawVJslX5P3JgXi3X14.avif",
    content: {
      intro:
        "At Kanso, we believe that the most powerful brands are the ones that speak with clarity, not volume. Restraint isn't about withholding creativity—it's about applying it with intent. When everything is shouting, quiet confidence is what stands out.",
      sections: [
        {
          heading: "Clarity Over Complexity",
          paragraphs: [
            "Modern branding often falls into the trap of trying to be everything at once. The result is visual clutter, mixed messages, and diluted meaning. Restraint brings focus. It allows a brand to express one clear idea—and express it well.",
            "This doesn't mean your brand has to be plain. It means every element—color, typography, layout, tone—is chosen with purpose. Not because it's trendy, but because it's right.",
          ],
        },
        {
          heading: "Designing with Intention",
          paragraphs: [
            "Minimalist branding doesn't start with aesthetics. It starts with understanding: who you are, what you stand for, and what matters to your audience. From there, design becomes a process of refinement—removing what's unnecessary until only the essential remains.",
            "In this way, restraint becomes a form of respect: for the message, for the audience, and for the brand's own voice.",
          ],
        },
        {
          heading: "Emotional Impact Through Simplicity",
          paragraphs: [
            "Some of the most iconic brands—think Apple, Muji, or Aesop—aren't just recognized for their products, but for how they feel. Their restraint creates space: space for emotion, trust, and recognition. There's room to breathe. And that space becomes part of the experience.",
            "Simplicity, when done well, doesn't feel empty. It feels calm. It feels intentional.",
          ],
        },
        {
          heading: "A Lasting Impression",
          paragraphs: [
            "Trends move fast. Clutter fades. But clarity lasts.",
            "By embracing restraint, brands position themselves not just to look good—but to endure. In an age of overexposure, the brands that know when to hold back often go the furthest forward.",
            "Because saying less, when done right, says everything.",
          ],
        },
      ],
    },
  },
  {
    id: 2,
    slug: "designing-for-calm-ux-beyond-the-screen",
    date: "May 23, 2025",
    title: "Designing for Calm: UX Beyond the Screen",
    desc: "An exploration of how subtle interaction, whitespace, and visual pacing shape user emotion.",
    category: "Digital Design",
    writer: "Lena Park",
    img: "https://ik.imagekit.io/msmrd69gi/knos%20website/7NCgExUfktOfpVeWQDFDsDJXcM.avif",
    content: {
      intro:
        "Great UX isn't just about usability—it's about how an experience makes you feel. Calm design reduces friction not only in flow, but in the emotional weight a user carries while navigating it.",
      sections: [
        {
          heading: "The Role of Whitespace",
          paragraphs: [
            "Whitespace is not empty space—it's breathing room. It gives the eye a place to rest and the mind a moment to process. Dense interfaces overwhelm; spacious ones invite.",
            "When used deliberately, whitespace signals confidence. It says: we don't need to fill every pixel to prove our value.",
          ],
        },
        {
          heading: "Micro-interactions That Matter",
          paragraphs: [
            "A subtle fade, a gentle slide, a soft haptic tap—these are the details that tell users they're in good hands. Micro-interactions humanize digital experiences and build an emotional language between product and person.",
            "The best ones go unnoticed consciously but are felt deeply.",
          ],
        },
        {
          heading: "Visual Pacing",
          paragraphs: [
            "Pace is as important in design as it is in music. A well-paced interface leads the user through a journey—not a race. It knows when to accelerate and when to let a moment land.",
            "Designers who understand rhythm create products that feel effortless, even when the underlying complexity is significant.",
          ],
        },
      ],
    },
  },
  {
    id: 3,
    slug: "building-a-timeless-identity",
    date: "May 16, 2025",
    title: "Building a Timeless Identity",
    desc: "A guide to creating brands that transcend trends, focusing on core values instead.",
    category: "Strategy",
    writer: "James Osei",
    img: "https://ik.imagekit.io/msmrd69gi/knos%20website/wzvqfJrBym57z3jVoVkRodw.avif",
    content: {
      intro:
        "Trends are tempting. They promise relevance and visibility. But brands built on trends are only as strong as the trend itself. The ones that last are built on something deeper: identity.",
      sections: [
        {
          heading: "Values Before Visuals",
          paragraphs: [
            "Before choosing a typeface or color palette, a brand needs to know what it stands for. Values are the foundation. Everything visual is just an expression of those values made tangible.",
            "Ask: what do we believe? What do we refuse to compromise on? The answers shape every design decision that follows.",
          ],
        },
        {
          heading: "Consistency as a Strategy",
          paragraphs: [
            "Timeless brands are relentlessly consistent. Not rigid—but grounded. They evolve without losing themselves. Their core remains stable while their expression adapts to context.",
            "This consistency builds trust. And trust, over time, becomes recognition.",
          ],
        },
        {
          heading: "Designing for Longevity",
          paragraphs: [
            "Longevity requires restraint in trend-chasing and courage in simplicity. It means making decisions that might feel quiet now but will age gracefully.",
            "The goal isn't to look like today. The goal is to still feel right ten years from now.",
          ],
        },
      ],
    },
  },
  {
    id: 4,
    slug: "the-beauty-of-typography-in-modern-interfaces",
    date: "May 9, 2025",
    title: "The Beauty of Typography in Modern Interfaces",
    desc: "A deep dive into how type hierarchy and contrast shape user experience.",
    category: "UI/UX",
    writer: "Sara Kim",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&q=80",
    content: {
      intro:
        "Typography is the voice of an interface. It doesn't just carry words—it sets tone, establishes hierarchy, and guides attention. When type is done well, users don't notice it. They just feel it.",
      sections: [
        {
          heading: "Hierarchy is Everything",
          paragraphs: [
            "Without hierarchy, everything competes. With it, the eye knows exactly where to go. Size, weight, spacing, and color all work together to create a visual order that feels natural.",
            "Good hierarchy doesn't shout—it guides.",
          ],
        },
        {
          heading: "Contrast and Legibility",
          paragraphs: [
            "Legibility is a baseline requirement. But contrast—between type and background, between sizes, between weights—is what makes typography expressive.",
            "High contrast demands attention. Low contrast creates calm. Knowing when to deploy each is the craft.",
          ],
        },
        {
          heading: "Type as Brand Voice",
          paragraphs: [
            "A brand's typeface choices say something about its personality before a single word is read. Serif typefaces feel considered and traditional. Sans-serifs feel modern and clean. Custom typefaces signal investment and uniqueness.",
            "Choose type that sounds like you.",
          ],
        },
      ],
    },
  },
  {
    id: 5,
    slug: "when-to-evolve-your-brand-and-when-to-let-go",
    date: "May 2, 2025",
    title: "When to Evolve Your Brand And When to Let Go",
    desc: "How to know if your brand needs a quiet refresh or a bold reinvention.",
    category: "Branding",
    writer: "Marco Reyes",
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    content: {
      intro:
        "Every brand reaches a moment where it must ask: do we evolve, or do we reinvent? The answer depends on what's actually broken—and what's worth keeping.",
      sections: [
        {
          heading: "Signs It's Time to Refresh",
          paragraphs: [
            "A refresh makes sense when the core identity is strong but the expression feels dated. Maybe the logo feels heavy, the colors feel dull, or the tone doesn't match who you've become.",
            "A refresh preserves equity while updating relevance. It's an evolution, not a revolution.",
          ],
        },
        {
          heading: "When Reinvention is Necessary",
          paragraphs: [
            "Sometimes the brand itself is the problem—not just how it looks. If the values, positioning, or audience has fundamentally shifted, a surface-level refresh won't fix it.",
            "Reinvention is riskier. But done right, it signals growth, confidence, and a brand that isn't afraid of itself.",
          ],
        },
        {
          heading: "The In-Between",
          paragraphs: [
            "Most brands live in the grey area. Not broken enough to rebuild, not fresh enough to ignore. The key is honest diagnosis: separate what serves you from what holds you back.",
            "Then move with intention.",
          ],
        },
      ],
    },
  },
  {
    id: 6,
    slug: "why-we-keep-our-studio-small",
    date: "Apr 28, 2025",
    title: "Why We Keep Our Studio Small",
    desc: "A personal look at why Kanso values staying lean, how it helps us focus.",
    category: "Culture",
    writer: "Hana Mori",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    content: {
      intro:
        "When people ask why Kanso doesn't scale up, the answer is simple: because size isn't the goal. Quality is. And quality requires focus, not headcount.",
      sections: [
        {
          heading: "Small Teams, Deep Work",
          paragraphs: [
            "Big teams create coordination overhead. Small teams create flow. When everyone knows the project deeply, decisions happen faster, work is more cohesive, and the outcome reflects a singular vision.",
            "At Kanso, we don't split focus. We go deep.",
          ],
        },
        {
          heading: "Fewer Clients, Better Work",
          paragraphs: [
            "We deliberately limit how many projects we take on. Not because we can't handle more—but because handling more would mean giving less. And giving less is not something we're willing to do.",
            "Every client deserves our full attention. So we protect that.",
          ],
        },
        {
          heading: "The Value of Constraints",
          paragraphs: [
            "Constraints force creativity. They demand prioritization. When you can't do everything, you have to choose what matters most—and that clarity produces better work.",
            "Staying small is a creative decision as much as a business one.",
          ],
        },
      ],
    },
  },
];