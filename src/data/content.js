export const profile = {
  name: 'Kavi Sharma',
  firstName: 'Kavi',
  title: 'Full Stack Software Engineer',
  tagline:
    'Building scalable web applications, backend systems, and real-world software projects.',
  location: 'India',
  available: true,
  email: 'kavi.workspaceofficial@gmail.com',
  phone: '+91 7827428895',
  resume:
    'https://drive.google.com/file/d/1AVjXYwQXFh46UxK_muJ_cipqoYHUiM8K/view?usp=sharing',
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
  { value: 350, suffix: '+', label: 'Coding Problems' },
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
        tag: "Featured Project",
        title: "Built ClinicFlow",
        desc: "Designed and developed a full-stack clinic management platform with secure authentication, appointment scheduling, and live queue management.",
        tech: [
          "React",
          "TypeScript",
          "Node.js",
          "PostgreSQL",
          "Prisma",
        ],
        detail: [
          "Role-based access & secure authentication",
          "Queue & appointment management",
          "Reusable React architecture with TanStack Query",
        ],
      },

      {
        tag: "Coding Practice",
        title: "350+ Coding Problems",
        desc: "Consistently strengthened problem-solving and algorithmic thinking through competitive programming on LeetCode.",
        tech: ["DSA", "Algorithms", "C++"],
        detail: [
          "350+ problems solved",
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
          "Building scalable web applications",
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
    category: 'Full Stack · Healthcare',
    tagline: 'A full-stack clinic management platform supporting Admin, Doctor, and Patient workflows.',
    description:
      'Built a full-stack clinic management platform supporting Admin, Doctor, and Patient workflows, including doctor management, patient registration, appointment booking, availability, and live queue management. Developed REST APIs using Node.js/Express.js with PostgreSQL and Prisma, implementing role-based access and secure authentication for protected application workflows. Used TanStack Query for server-state management and caching, and built reusable React components for a responsive and scalable frontend.',
    problem:
      'Clinics juggle doctors, patients, appointments, and walk-ins across scattered tools and manual workflows. Queue state gets lost, staff lose time, and the front desk becomes an operational bottleneck.',
    solution:
      'A centralized platform streamlining clinic operations: schedules, live queues, patient records, and doctor availability with role-based access control and secure authentication.',
    challenges: [
      'Role-based access control and session authentication across multiple user roles',
      'Maintaining consistent live queue states and appointment bookings',
      'Optimizing server-state caching and invalidation using TanStack Query',
      'Designing a reusable, modular component architecture for clinic dashboards',
    ],
    architecture: [
      'React + TypeScript frontend with TanStack Query caching and server-state sync',
      'Express REST API with role-based authorization middleware',
      'PostgreSQL database modeled with Prisma ORM for relational workflows',
      'Secure authentication workflows for Admin, Doctor, and Patient roles',
    ],
    features: [
      'Admin, Doctor & Patient workflows',
      'Doctor management & availability',
      'Patient registration & booking',
      'Live queue management',
      'Role-based authentication & authorization',
      'TanStack Query caching & state management',
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma', 'TanStack Query'],
    demo: 'https://clinicflow2-0.vercel.app',
    github: 'https://github.com/Kavi-Sharma08/clinicflow2.0',
    highlight: 'Full-stack · Role-based access · REST APIs · Prisma ORM · Queue management',
    accent: '#8b8bf8',
    mock: 'clinic',
  },
  {
    id: 'billgst',
    name: 'BillGST',
    category: 'Local-First · FinTech',
    tagline: 'A local-first GST invoicing application for Indian businesses.',
    description:
      'Built a local-first GST invoicing application for Indian businesses to create professional invoices, manage customers and products/services, calculate GST, and generate downloadable PDF invoices. Implemented customer, product/service, business profile, and invoice management with persistent local storage using IndexedDB and Dexie.js. Developed invoice workflows including GSTIN, HSN/SAC, CGST, SGST, IGST, invoice numbering, tax calculations, invoice totals, PDF generation, and local backup/restore.',
    problem:
      'Indian small businesses, freelancers, and service providers often struggle with cumbersome or subscription-heavy invoicing software when they need a fast, private, and compliant way to generate GST invoices.',
    solution:
      'A local-first invoicing app that operates directly in the browser with persistent offline storage, instant GST calculations (CGST, SGST, IGST), and downloadable PDF invoices.',
    challenges: [
      'Managing client-side persistent storage and reactive schemas with IndexedDB and Dexie.js',
      'Accurate tax calculation workflows supporting GSTIN, HSN/SAC codes, CGST, SGST, and IGST',
      'Client-side dynamic invoice PDF layout and generation using jsPDF',
      'Seamless local backup and restore mechanisms for business data',
    ],
    architecture: [
      'React and Vite frontend styled with Tailwind CSS for high responsiveness',
      'Zustand for lightweight and predictable application state management',
      'IndexedDB persistence layer accessed through Dexie.js for offline reliability',
      'jsPDF generation engine for formatting and exporting official tax invoices',
    ],
    features: [
      'Professional GST invoice generation',
      'Customer & product/service management',
      'Business profile setup',
      'Automated CGST, SGST & IGST tax calculations',
      'HSN/SAC & GSTIN compliance',
      'Downloadable PDF invoices via jsPDF',
      'IndexedDB storage & local backup/restore',
    ],
    stack: ['React', 'JavaScript', 'Vite', 'Tailwind CSS', 'IndexedDB', 'Dexie.js', 'Zustand', 'jsPDF'],
    demo: 'https://gst-invoice-brown.vercel.app/',
    github: '',
    highlight: 'Local-first · Dexie.js & IndexedDB · GST tax calculations · jsPDF export',
    accent: '#38bdf8',
    mock: 'billgst',
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
    value: '350+',
    label: 'Coding Problems',
    sublabel: 'LeetCode',
    note: 'Data structures, algorithms and algorithmic problem-solving practice on LeetCode.',
    featured: true,
  },
  {
    icon: 'layers',
    value: '9.1 GPA',
    label: 'B.Tech Information Technology',
    sublabel: 'Academic Foundation',
    note: 'Consistent academic discipline and strong fundamentals in Information Technology.',
    featured: false,
  },
]

export const githubData = {
  url: 'https://github.com/Kavi-Sharma08',
  pinned: [
    { name: 'ClinicFlow', desc: 'Full-stack clinic management platform', lang: 'TypeScript', color: '#8b8bf8', url: 'https://github.com/Kavi-Sharma08/clinicflow2.0' },
  ],
  commits: [
    { repo: 'ClinicFlow', msg: 'feat: live queue management with session auth', hash: '3f8a12d', branch: 'main', date: 'Jul 2026' },
    { repo: 'ClinicFlow', msg: 'feat: role-based access control and appointments', hash: 'a17f33b', branch: 'main', date: 'Jun 2026' },
  ],
}

export const contributionLevels = ['bg-white/[0.04]', 'bg-white/[0.12]', 'bg-accent/25', 'bg-accent/60', 'bg-accent']
