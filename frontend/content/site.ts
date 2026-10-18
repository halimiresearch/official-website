export const SITE_URL = "https://halimiresearch.com";

export const site = {
  brand: {
    wordmark: "HalimiResearch",
    name: "Halimi Research",
    shortDescription:
      "Building practical, resilient technology through research and engineering.",
  },
  nav: [
    {
      label: "Research",
      children: [
        {
          label: "Research Notes",
          href: "/notes",
          description: "Write-ups from what we are reading, testing, and building.",
        },
        {
          label: "Focus Areas",
          href: "/about#focus",
          description: "The fields we work across.",
        },
      ],
    },
    {
      label: "Products",
      children: [
        {
          label: "HalimiSOC",
          href: "/products/halimisoc",
          description: "Security operations for small teams.",
        },
        {
          label: "All products",
          href: "/products",
          description: "Everything we are currently building.",
        },
      ],
    },
    {
      label: "Careers",
      children: [
        {
          label: "Work with us",
          href: "/careers",
          description: "How to join or collaborate with the team.",
        },
      ],
    },
    {
      label: "About HalimiResearch",
      children: [
        {
          label: "Corporate Info",
          href: "/about",
          description: "Who we are, how we work, and what we believe.",
        },
        {
          label: "Contact",
          href: "/contact",
          description: "Start a conversation with us.",
        },
      ],
    },
  ],
  home: {
    headline: "Building resilient technology through research.",
    description:
      "Halimi Research explores ideas and builds technology across software, artificial intelligence, cybersecurity, and digital infrastructure, with a focus on useful, resilient systems.",
    primaryCta: { label: "Talk to our team", href: "/contact" },
    secondaryCta: { label: "Explore our products", href: "/products" },
  },
  about: {
    title: "Independent by nature. Practical by design.",
    body: "Halimi Research is an independent research and innovation company. We study how software, AI, security, and infrastructure actually behave in practice, then build systems meant to be useful, secure, and reliable.",
    mission:
      "Our mission is to explore and build technology that is useful, safe, and dependable.",
    story: [
      "Halimi Research started from a simple observation: a lot of technology is shipped before it is understood. Systems go live without anyone asking how they fail, who they exclude, or what they cost to maintain five years later.",
      "We work differently. Every project starts as a research question. We read, we prototype, we break things on purpose, and we write down what we learn. Only then do we build the version meant to last.",
      "We are small by choice. Staying independent lets us pick problems worth solving instead of projects that merely pay, and it lets us publish what we learn along the way.",
    ],
    values: [
      {
        title: "Curiosity before code",
        description:
          "We do not start building until we understand the problem well enough to explain it simply.",
      },
      {
        title: "Evidence over opinion",
        description:
          "Decisions come from experiments, measurements, and evaluation, not from whoever argues loudest.",
      },
      {
        title: "Build for the long term",
        description:
          "We optimize for maintainability and reliability, because most of a system's life happens after launch day.",
      },
      {
        title: "Share what we learn",
        description:
          "Research that stays in a drawer helps no one. We publish notes, tools, and repositories whenever we can.",
      },
    ],
  },
  focus: [
    {
      title: "Software Engineering",
      description:
        "Applications, developer tools, and software systems, built with attention to maintainability.",
    },
    {
      title: "Artificial Intelligence",
      description:
        "AI systems, agents, and automation, applied carefully and evaluated before they are trusted.",
    },
    {
      title: "Cybersecurity",
      description:
        "Application security, secure-by-design practice, and systems that withstand failure.",
    },
    {
      title: "Digital Infrastructure",
      description:
        "Cloud, Linux, deployment, and networking fundamentals that keep services running.",
    },
  ],
  products: {
    title: "Technology the world can rely on",
    intro:
      "Every product starts as a research question and ships only when it holds up in practice. Nothing here is a mockup.",
    items: [
      {
        name: "HalimiSOC",
        slug: "halimisoc",
        status: "In Development",
        tagline:
          "Security operations for teams without a security department.",
        description:
          "A security operations project that asks what honest infrastructure visibility looks like for small teams, without the price tag or the operational overhead of enterprise tooling.",
        features: [
          {
            title: "Right-sized visibility",
            description:
              "The smallest set of capabilities that keeps a small team aware of what matters in their infrastructure.",
          },
          {
            title: "Operable without specialists",
            description:
              "Designed to be run by engineers, not by a dedicated security operations team.",
          },
          {
            title: "Built in the open",
            description:
              "Technical decisions and progress are documented in the public repository as the work happens.",
          },
        ],
        url: "https://github.com/halimiresearch/halimi-soc",
        urlLabel: "View repository",
        noteSlug: "why-we-are-building-halimisoc",
      },
    ],
  },
  careers: {
    title: "Build resilient technology with us",
    intro:
      "Halimi Research is a small, independent team. We do not hire often, but we are always interested in people who care about research-driven engineering.",
    body: [
      "We do not have open positions at the moment. When we do, they are announced on this page and through our channels.",
      "That said, some of the best collaborations start without a job posting. If you work on software, AI, security, or infrastructure and our research notes resonate with you, we want to hear from you.",
    ],
    lookingFor: [
      {
        title: "Research collaborators",
        description:
          "Researchers and students who want to explore a question together and publish what we learn.",
      },
      {
        title: "Open-source contributors",
        description:
          "Engineers who want to contribute to projects like HalimiSOC through the public repositories.",
      },
      {
        title: "Future team members",
        description:
          "People who want to be on our radar when a position does open up. Tell us what you are good at.",
      },
    ],
  },
  contact: {
    title: "Have a question or an idea worth exploring?",
    body: "We collaborate with engineers, researchers, universities, and organizations on software, AI, security, and infrastructure. Write to us and tell us what you are working on.",
    email: "hello@halimiresearch.com",
    socials: [
      { label: "GitHub", url: "https://github.com/halimiresearch" },
      {
        label: "LinkedIn",
        url: "https://linkedin.com/company/halimi-research",
      },
    ],
    expectations: [
      "A short description of what you are working on or trying to solve.",
      "Links to any relevant repositories, documents, or prototypes.",
      "What kind of collaboration you have in mind: research, engineering, or advisory.",
    ],
  },
  profile: [
    ["Entity", "Halimi Research"],
    ["Type", "Research and innovation company"],
    ["Fields", "Software, AI, Security, Infrastructure"],
    ["Status", "Early work in progress"],
  ] as [string, string][],
  seo: {
    title: "Halimi Research, Research and Innovation Company",
    description:
      "Halimi Research is an independent research and innovation company exploring software, artificial intelligence, cybersecurity, and digital infrastructure.",
  },
};
