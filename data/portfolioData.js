export const personal = {
  name: "Gaurav Kumar",
  role: "Aspiring Backend Engineer",
  tagline: "I build systems that scale and interfaces that matter.",
  bio: "Engineer with a deep interest in distributed systems, machine learning infrastructure, and developer tooling. I care about code that is correct, fast, and maintainable. Currently focused on backend architecture and ML pipelines.",
  focusAreas: ["Distributed Systems", "ML Infrastructure", "Developer Tooling", "Cloud Architecture"],
  careerDirection: "Building production-grade ML platforms and contributing to open-source tooling that makes developers faster.",
  currentlyBuilding: "A distributed task queue with adaptive rate limiting in Go",
  location: "Jalandhar, India",
  available: true,
};

export const projects = [
  {
    id: 1,
    name: "VectorFlow",
    description: "High-throughput vector embedding pipeline supporting 10M+ daily operations. Built with async processing, auto-scaling workers, and a Redis-backed job queue.",
    tech: ["Python", "FastAPI", "Redis", "PostgreSQL", "Docker", "Kubernetes"],
    live: "#",
    github: "#",
    category: "ML",
    featured: true,
    image: null,
    stats: "10M+ daily ops",
  },
  {
    id: 2,
    name: "ChronoAPI",
    description: "REST + GraphQL API gateway with request deduplication, distributed tracing, and adaptive circuit breakers. Handles 50k RPS in production.",
    tech: ["Go", "gRPC", "PostgreSQL", "Prometheus", "Jaeger"],
    live: "#",
    github: "#",
    category: "Backend",
    featured: true,
    image: null,
    stats: "50k RPS",
  },
  {
    id: 3,
    name: "NativeSync",
    description: "Cross-platform React Native app for real-time collaborative task management. Offline-first architecture with conflict-free replicated data types.",
    tech: ["React Native", "TypeScript", "SQLite", "WebSockets", "Expo"],
    live: "#",
    github: "#",
    category: "Mobile",
    featured: false,
    image: null,
    stats: "2k+ users",
  },
  {
    id: 4,
    name: "CloudBench",
    description: "Multi-cloud cost analytics and optimization tool. Parses billing exports from AWS, GCP, and Azure to surface anomalies and savings opportunities.",
    tech: ["Python", "Terraform", "AWS", "GCP", "BigQuery", "Airflow"],
    live: "#",
    github: "#",
    category: "Cloud",
    featured: false,
    image: null,
    stats: "30% avg cost reduction",
  },
  {
    id: 5,
    name: "InferKit",
    description: "Model inference serving framework with dynamic batching, quantization support, and A/B routing. Drop-in replacement for TorchServe.",
    tech: ["Python", "PyTorch", "ONNX", "FastAPI", "Triton"],
    live: "#",
    github: "#",
    category: "ML",
    featured: true,
    image: null,
    stats: "3x latency improvement",
  },
  {
    id: 6,
    name: "StreamLedger",
    description: "Real-time financial event streaming platform with exactly-once delivery guarantees, idempotency keys, and audit log generation.",
    tech: ["Java", "Kafka", "Flink", "Cassandra", "Spring Boot"],
    live: "#",
    github: "#",
    category: "Backend",
    featured: false,
    image: null,
    stats: "99.99% uptime",
  },
];

export const experience = [
  {
    id: 1,
    role: "Senior Software Engineer",
    company: "Meridian Systems",
    duration: "Jan 2023 – Present",
    type: "Full-time",
    points: [
      "Led the rewrite of the data ingestion pipeline, reducing p99 latency from 4s to 320ms across 15M daily events.",
      "Designed and shipped a multi-tenant ML serving infrastructure handling 8 model variants with zero-downtime deploys.",
      "Mentored 3 junior engineers through code reviews, system design sessions, and pair programming.",
      "Established the team's internal RFC process, improving cross-team alignment on architectural decisions.",
    ],
    tech: ["Go", "Python", "Kubernetes", "Kafka", "PostgreSQL", "Prometheus"],
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "Halo Labs",
    duration: "Jun 2021 – Dec 2022",
    type: "Full-time",
    points: [
      "Built the core recommendation engine processing 2M+ user interactions daily using collaborative filtering.",
      "Migrated monolith to microservices, decomposing 6 bounded contexts with zero data loss.",
      "Reduced cloud infrastructure cost by 28% through right-sizing, spot instance adoption, and query optimization.",
      "Shipped a React Native app from 0 to production in 4 months as the sole mobile engineer.",
    ],
    tech: ["Python", "React Native", "AWS", "DynamoDB", "Redis", "Terraform"],
  },
  {
    id: 3,
    role: "Backend Engineering Intern",
    company: "Orb Technologies",
    duration: "May 2020 – Aug 2020",
    type: "Internship",
    points: [
      "Developed REST API endpoints consumed by 3 frontend teams, with full OpenAPI documentation.",
      "Implemented background job processing with retry logic and dead-letter queuing.",
      "Wrote integration tests achieving 87% coverage on the payments module.",
    ],
    tech: ["Node.js", "PostgreSQL", "RabbitMQ", "Docker"],
  },
];

export const skills = {
  languages: ["Go", "Python", "TypeScript", "Java", "Rust", "SQL", "Bash"],
  frameworks: ["FastAPI", "Spring Boot", "React", "React Native", "Next.js", "gRPC", "GraphQL"],
  devops: ["Kubernetes", "Docker", "Terraform", "GitHub Actions", "AWS", "GCP", "Prometheus", "Grafana"],
  databases: ["PostgreSQL", "Redis", "Cassandra", "DynamoDB", "BigQuery", "Elasticsearch"],
  tools: ["Kafka", "Airflow", "Jaeger", "ONNX", "PyTorch", "Flink", "Triton"],
};

export const research = [
  {
    id: 1,
    title: "Adaptive Batching Strategies for Low-Latency ML Inference",
    description: "An empirical study of dynamic batching configurations across transformer model sizes, evaluating throughput-latency tradeoffs under varying QPS.",
    tags: ["ML Systems", "Inference", "Performance"],
    link: "#",
    year: "2024",
  },
  {
    id: 2,
    title: "Consistency Models in Distributed Task Queues",
    description: "Analysis of consensus algorithms (Raft vs Paxos) applied to task scheduling, with focus on failure recovery and at-least-once delivery guarantees.",
    tags: ["Distributed Systems", "Consensus", "Queuing"],
    link: "#",
    year: "2023",
  },
];

export const blog = [
  {
    id: 1,
    title: "Why Your Microservices Are Probably Too Small",
    intro: "The industry overcorrected on service decomposition. Here's a framework for finding the right boundaries.",
    tags: ["Architecture", "Microservices", "Opinion"],
    date: "Mar 2024",
    link: "#",
    readTime: "8 min",
  },
  {
    id: 2,
    title: "Go's Concurrency Model Is Not What You Think",
    intro: "A deep dive into goroutine scheduling, the GOMAXPROCS setting, and common misunderstandings about parallelism in Go.",
    tags: ["Go", "Concurrency", "Deep Dive"],
    date: "Jan 2024",
    link: "#",
    readTime: "12 min",
  },
  {
    id: 3,
    title: "Building a Vector Database from Scratch",
    intro: "Walking through the core data structures and algorithms needed to build an approximate nearest-neighbor search engine.",
    tags: ["ML", "Algorithms", "Tutorial"],
    date: "Nov 2023",
    link: "#",
    readTime: "15 min",
  },
];

export const lifeGallery = [
  { id: 1, caption: "Hiking the Lost Coast Trail", date: "Oct 2023", emoji: "🏔️" },
  { id: 2, caption: "Coffee crawl through Kyoto", date: "Mar 2023", emoji: "☕" },
  { id: 3, caption: "Half Dome summit", date: "Aug 2023", emoji: "🧗" },
  { id: 4, caption: "Film photography in Oaxaca", date: "Jan 2024", emoji: "📷" },
  { id: 5, caption: "Building a mechanical keyboard", date: "Dec 2023", emoji: "⌨️" },
  { id: 6, caption: "Reading week in the Sierras", date: "Sep 2023", emoji: "📚" },
];

export const nonTechSkills = [
  "Technical Writing",
  "System Design Facilitation",
  "RFC Authoring",
  "Engineering Mentorship",
  "Public Speaking",
  "Film Photography",
  "Video Editing",
  "Guitar",
  "Rock Climbing",
  "Espresso Dialing",
];

export const beme = [
  "I optimize for depth over breadth — I'd rather understand one system fully than skim ten.",
  "I believe the best code is code that doesn't need a comment to explain itself.",
  "I read engineering blogs like some people read news. Consistency over intensity.",
  "I think most meetings could be a well-written document.",
  "I'm drawn to problems where performance and correctness are genuinely at odds.",
  "Outside of work, I'm usually hiking, shooting film, or pulling espresso shots.",
];

export const links = {
  github: "https://github.com/ohnogaurav",
  linkedin: "https://www.linkedin.com/in/gauravconnects/",
  twitter: "#",
  email: "gauravatwork17@gmail.com",
  phone: "+91 9007979492",
  resume: "#",
  spotify: "#",
};

export const githubFallback = {
  username: "ohnogaurav",
  repos: 42,
  stars: 318,
  followers: 127,
  featuredRepos: [
    {
      name: "vectorflow",
      description: "High-throughput vector embedding pipeline",
      stars: 142,
      forks: 28,
      language: "Python",
      link: "#",
    },
    {
      name: "chronoapi",
      description: "REST + GraphQL gateway with circuit breakers",
      stars: 97,
      forks: 19,
      language: "Go",
      link: "#",
    },
    {
      name: "inferkit",
      description: "Model inference serving framework",
      stars: 79,
      forks: 14,
      language: "Python",
      link: "#",
    },
  ],
};
