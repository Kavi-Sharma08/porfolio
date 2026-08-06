export const profile = {
  name: 'Kavi Sharma',
  firstName: 'Kavi',
  title: 'Full Stack Software Engineer',
  tagline:
    'Building scalable web applications, backend systems, and real-world software products.',
  location: 'India',
  available: true,
  email: 'kavi.workspaceofficial@gmail.com',
  phone: '+91 7827428895',
  resume:
    'https://drive.google.com/file/d/1n_YFShAHIXNQykbHbBVRsCwHvfjskdUK/view?usp=sharing',
  github: 'https://github.com/Kavi-Sharma08',
  githubUser: 'Kavi-Sharma08',
  linkedin: 'https://www.linkedin.com/in/kavi-sharma-29b487284',
}

export const navLinks = [
  { href: '#journey', label: 'Journey' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export const stats = [
  { value: 9.1, decimals: 1, label: 'CGPA' },
  { value: 320, suffix: '+', label: 'LeetCode Problems' },
  { value: 1, label: 'Internship' },
  { text: 'Software Engineer', label: 'Full Stack Developer' },
]

export const timeline = [
  {
    year: "2025",
    entries: [
      {
        tag: "Internship",
        title: "Full Stack Developer • Agami Technologies",
        desc: "Worked on ReadySurvey, a MERN-based assessment platform used to create dynamic assessments and client-ready reports.",
        tech: ["React", "Node.js", "Express", "MongoDB"],
        detail: [
          "Developed dynamic assessment builder",
          "Integrated GrapeJS report editor",
          "Implemented PDF report generation",
        ],
      },
    ],
  },

  {
    year: "2026",
    entries: [
      {
        tag: "Flagship Project",
        title: "Built ClinicFlow",
        desc: "Designed and developed a scalable SaaS clinic management platform with secure authentication, appointment scheduling, and queue management.",
        tech: [
          "React",
          "TypeScript",
          "Node.js",
          "PostgreSQL",
          "Prisma",
        ],
        detail: [
          "Session-based authentication",
          "Queue & appointment management",
          "Reusable dashboard architecture",
        ],
      },

      {
        tag: "Achievement",
        title: "320+ LeetCode Problems",
        desc: "Consistently strengthened problem-solving and algorithmic thinking through competitive programming.",
        tech: ["DSA", "Algorithms", "C++"],
        detail: [
          "320+ problems solved",
        ],
      },

      {
        tag: "Hackathon",
        title: "Smart India Hackathon",
        desc: "Selected twice in the internal Smart India Hackathon, finishing among the Top 45 teams out of approximately 150.",
        tech: ["Problem Solving", "Teamwork"],
        detail: [
          "2× Internal SIH Selection",
          "Top 45 Teams",
          "Collaborative product development",
        ],
      },

      {
        tag: "Academics",
        title: "B.Tech • Information Technology",
        desc: "Maintaining a CGPA of 9.1",
        tech: ["GGSIPU", "BPIT"],
        detail: [
          "CGPA: 9.1",
          "Strong CS fundamentals",
          "Hands-on full-stack development",
        ],
      },

      {
        tag: "Present",
        title: "Open to Software Engineer Roles",
        desc: "Currently focused on building scalable full-stack applications and preparing for Software Engineer opportunities.",
        tech: ["React", "Node.js", "TypeScript" , "NextJs" , "Docker"],
        detail: [
          "Building production-grade application",
          "Open to Full-Time Opportunities",
        ],
      },
    ],
  },
];

export const projects = [
  {
    id: 'clinicflow',
    name: 'ClinicFlow',
    category: 'SaaS · Healthcare',
    tagline: 'A full-stack SaaS clinic management platform.',
    description:
      'A full-stack SaaS clinic management platform designed to streamline clinic operations through centralized management of doctors, patients, appointments, and queue scheduling.',
    problem:
      'Clinics juggle doctors, patients, appointments and walk-ins across scattered spreadsheets and tools. Queue state gets lost, staff waste time, and the front desk becomes the bottleneck.',
    solution:
      'A single platform where the entire clinic runs: schedules, queues, patient records and an analytics dashboard — with session authentication that keeps every role in its lane.',
    challenges: [
      'Keeping queue state consistent across concurrent users',
      'Session security that never compromises the dashboard UX',
      'Reporting that scales to thousands of visits',
      'Designing a reusable, layered feature architecture',
    ],
    architecture: [
      'React + TypeScript frontend with TanStack Query caching',
      'Express REST API with role-based middleware',
      'PostgreSQL schema modelling doctors, patients, appointments and queues',
      'Session-based authentication with rotating session identity',
    ],
    features: [
      'Doctor & patient management',
      'Appointment scheduling',
      'Queue management',
      'Analytics dashboard',
      'Session authentication',
      'Reusable dashboard UI',
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'TanStack Query'],
    demo: '',
    github: 'https://github.com/Kavi-Sharma08/clinicflow2.0',
    highlight: 'Reusable architecture · REST APIs · Scalable dashboard · Queue management',
    accent: '#8b8bf8',
    mock: 'clinic',
  },
  {
    id: 'justshare',
    name: 'JustShare',
    category: 'Product · Marketplace',
    tagline: 'A campus rental marketplace with real-time messaging.',
    description:
      'A rental marketplace that lets students list and rent items on campus — with JWT authentication, Cloudinary media and WebSocket real-time messaging.',
    problem:
      'On campus, useful items sit unused while others need them. Existing marketplaces ignore the trust and immediacy of a real campus community.',
    solution:
      'A peer-to-peer marketplace with verified users, rich listings, and instant real-time conversations between buyers and sellers.',
    challenges: [
      'JWT authentication across client and server',
      'Real-time messaging without message loss',
      'Cloudinary media pipeline for listings',
      'State management for a fast, live UI',
    ],
    architecture: [
      'React + Redux frontend',
      'JWT-secured Express API',
      'MongoDB for users, listings and messages',
      'WebSocket server for real-time chat',
      'Cloudinary for image storage',
    ],
    features: [
      'JWT authentication',
      'Cloudinary media uploads',
      'WebSockets real-time messaging',
      'Listing creation & search',
      'Conversation threads',
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'WebSockets', 'JWT', 'Cloudinary'],
    demo: '',
    github: 'https://github.com/Kavi-Sharma08/Rent-Project-2',
    highlight: 'JWT auth · WebSockets · Real-time messaging · Cloudinary',
    accent: '#7f7ff0',
    mock: 'rent',
  },
]

export const architecture = [
  {
    key: 'browser',
    name: 'Browser',
    role: 'Client shell',
    icon: 'browser',
    tech: ['React', 'TypeScript', 'TanStack Query'],
    responsibilities: [
      'Renders the product interface with 60fps animations',
      'Manages server state, caching and optimistic updates',
      'Handles routing, focus and accessibility',
    ],
    challenges: [
      'Keeping the UI responsive while data streams in',
      'Never showing stale or inconsistent state',
    ],
    implementation:
      'TanStack Query owns all server state — cache, invalidation and background refetch. Every mutation invalidates the right keys, so the UI always reflects the database.',
  },
  {
    key: 'frontend',
    name: 'Frontend',
    role: 'Component layer',
    icon: 'code',
    tech: ['React', 'Components', 'Design system'],
    responsibilities: [
      'Composes features from small, reusable components',
      'Separates UI state from server state',
      'Encodes the design system once, everywhere',
    ],
    challenges: [
      'Reuse without over-abstraction',
      'Prop-drilling versus global state',
    ],
    implementation:
      'A layered component tree — primitives, patterns, features. UI state stays local or in context; server state stays in TanStack Query. Each layer has one job.',
  },
  {
    key: 'api',
    name: 'API',
    role: 'Contract',
    icon: 'plug',
    tech: ['REST', 'HTTP', 'Validation'],
    responsibilities: [
      'Defines the contract between UI and server',
      'Validates every request before it touches logic',
      'Returns consistent, documented responses',
    ],
    challenges: [
      'Versioning endpoints without breaking clients',
      'Enforcing schemas on both sides',
    ],
    implementation:
      'Express routes follow resource-oriented REST. Middleware validates input early, and every response keeps a consistent envelope so the frontend stays predictable.',
  },
  {
    key: 'backend',
    name: 'Backend',
    role: 'Business logic',
    icon: 'server',
    tech: ['Node.js', 'Express', 'Sessions', 'Roles'],
    responsibilities: [
      'Implements business rules and workflows',
      'Enforces authentication and authorisation',
      'Orchestrates database transactions safely',
    ],
    challenges: [
      'Multi-user consistency (queues, bookings)',
      'Security without hurting the experience',
    ],
    implementation:
      'Services stay thin and testable. Auth uses server-side sessions with rotating identity, and role-based middleware guards every protected route at the edge.',
  },
  {
    key: 'database',
    name: 'Database',
    role: 'Source of truth',
    icon: 'database',
    tech: ['PostgreSQL', 'MongoDB', 'Indexing'],
    responsibilities: [
      'Stores data durably and transactionally',
      'Serves analytics queries without blocking writes',
      'Keeps referential integrity intact',
    ],
    challenges: [
      'Schema design that survives product growth',
      'Query performance at scale',
    ],
    implementation:
      'PostgreSQL for relational products with proper indexes and foreign keys; MongoDB where documents map naturally. Analytics use pre-aggregated views to stay instant.',
  },
]

export const galaxyTech = [
  { key: 'react', name: 'React', note: 'Component-driven UIs', radius: 1.5, speed: 0.5, phase: 0, tiltY: 0.35 },
  { key: 'node', name: 'Node.js', note: 'JavaScript runtime', radius: 1.9, speed: 0.35, phase: 1.3, tiltY: -0.3 },
  { key: 'ts', name: 'TypeScript', note: 'Types for scale', radius: 1.6, speed: 0.45, phase: 2.1, tiltY: 0.5 },
  { key: 'pg', name: 'PostgreSQL', note: 'Relational core', radius: 2.3, speed: 0.28, phase: 4.2, tiltY: 0.25 },
  { key: 'mongo', name: 'MongoDB', note: 'Flexible documents', radius: 1.8, speed: 0.4, phase: 5.0, tiltY: -0.5 },
  { key: 'docker', name: 'Docker', note: 'Ship it anywhere', radius: 2.0, speed: 0.32, phase: 0.7, tiltY: 0.4 },
  { key: 'git', name: 'Git', note: 'Version control', radius: 2.4, speed: 0.26, phase: 1.9, tiltY: -0.2 },
]

export const skillGroups = [
  {
    title: 'Languages',
    note: 'The core dialects I think in.',
    items: ['JavaScript', 'TypeScript', 'C++'],
  },
  {
    title: 'Frontend',
    note: 'Interfaces people love to use.',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Redux',],
  },
  {
    title: 'Backend',
    note: 'APIs and systems that never sleep.',
    items: ['Node.js', 'Express.js', 'REST APIs', 'WebSockets'],
  },
  {
    title: 'Databases',
    note: 'Where the truth lives.',
    items: ['PostgreSQL', 'MongoDB', 'SQL Server'],
  },
  {
    title: 'Developer Tools',
    note: 'The daily drivers.',
    items: ['Git', 'Docker', 'Postman'],
  },
  {
    title: 'Soft Skills',
    note: 'How I work with people and products.',
    items: ['Product Thinking', 'System Design', 'Communication', 'Ownership', 'Mentoring'],
  },
]

export const experience = [
  {
    company: 'Agami Technologies',
    role: 'Full Stack Developer Intern',
    period: 'Dec 2025 — May 2026',
    location: 'Remote',
    current: false,
    summary: 'Contributed to the development of a production-grade assessment platform by implementing key features, integrating GrapeJS, and building dynamic PDF reporting workflows.',
    highlights: [
      'ReadySurvey — assessment platform',
      'Dynamic assessment builder',
      'GrapeJS block-based editor integration',
      'Dynamic PDF report generation',
      'Production Node.js + Express APIs',
    ],
  },
]

export const achievements = [
  {
    icon: 'zap',
    value: '320+',
    label: 'LeetCode problems',
    note: 'Data structures, algorithms and clean problem-solving discipline.',
    featured: true,
  },
  {
    icon: 'layers',
    value: '9.1',
    label: 'CGPA',
    note: 'Academic discipline meets engineering curiosity.',
  },
  {
    icon: 'users',
    value: 'Tech Team',
    label: 'Namespace Society',
    note: 'Senior member building the developer community.',
  },
  {
    icon: 'sparkles',
    value: 'NSS',
    label: 'Social Impact',
    note: 'Community initiatives, content and volunteering.',
  },
]

export const githubData = {
  url: 'https://github.com/Kavi-Sharma08',
  pinned: [
    { name: 'ClinicFlow', desc: 'SaaS clinic management platform', lang: 'TypeScript', color: '#8b8bf8', url: 'https://github.com/Kavi-Sharma08' },
    { name: 'JustShare', desc: 'Campus rental marketplace', lang: 'JavaScript', color: '#a9a9ff', url: 'https://github.com/Kavi-Sharma08' },
  ],
  commits: [
    { repo: 'ClinicFlow', msg: 'feat: real-time queue management with session auth', hash: '3f8a12d', branch: 'main', date: 'Jul 2026' },
    { repo: 'ClinicFlow', msg: 'feat: analytics dashboard with appointment insights', hash: 'a17f33b', branch: 'main', date: 'Jun 2026' },
    { repo: 'JustShare', msg: 'feat: real-time messaging with WebSockets', hash: 'c42d01f', branch: 'main', date: 'Jan 2026' },
  ],
}

export const contributionLevels = ['bg-white/[0.04]', 'bg-white/[0.12]', 'bg-accent/25', 'bg-accent/60', 'bg-accent']
