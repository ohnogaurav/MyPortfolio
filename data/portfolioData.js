export const personal = {
  name: "Gaurav Kumar",
  role: "Aspiring Backend Engineer",
  tagline: "I build systems that scale and interfaces that matter.",
  bio: "Backend-focused developer with hands-on experience in automation, APIs, and data-driven applications. I enjoy building systems that reduce manual work, handle real-world data, and scale reliably. Currently strengthening my skills in backend architecture and machine learning-based applications.",
  focusAreas: ["Backend Development","Automation Systems","APIs & Data Workflows","Machine Learning Applications"
],
  careerDirection: "Building reliable backend systems and practical ML-powered applications that solve real problems and improve efficiency.",
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
  role: "Automation and Data Intern",
  company: "Automation Ace Inc.",
  duration: "Sep 2025 – Jan 2026",
  type: "Internship",
  points: [
    "Processed and cleaned operational datasets (nulls, duplicates, inconsistencies) to prepare them for analysis and reporting.",
    "Wrote SQL queries to extract insights and support business reporting workflows.",
    "Automated repetitive data handling tasks, reducing manual effort by ~30%.",
  ],
  tech: ["Python", "SQL", "Selenium", "PowerShell", "APIs"],
},
  {
    id: 2,
    role: "B.Tech in Computer Science and Engineering",
    company: "Lovely Professional University",
    duration: "Aug 2022 – July 2026",
    type: "Full-time",
    points: [
      "Strong foundation in Data Structures, Operating Systems, Computer Networks, and Database Management Systems.",
      "Academic exposure to distributed systems, big data processing, and cluster computing.",
      "Worked with machine learning concepts including predictive analytics and generative AI.",
    ],
    tech: [],
  },
  {
  id: 3,
  role: "12th Standard (PCM)",
  company: "Kendriya Vidyalaya NSG Manesar",
  duration: "2020 – 2021",
  points: [
    "Secured 89% with focus on Physics, Chemistry, and Mathematics.",
    "Built early foundation in analytical thinking and problem-solving.",
  ],
  tech: [],
},
{
  id: 4,
  role: "10th Standard",
  company: "Kendriya Vidyalaya Kankinara",
  duration: "2017 – 2018",
  points: [
    "Secured 86.6% with strong performance in mathematics and science.",
    "Developed early interest in logical reasoning and technical subjects.",
  ],
  tech: [],
},
];

export const skills = {
  languages: ["Python", "SQL (MySQL)", "C++"],
  frameworks: ["Flask (basic)", "FastAPI (basic)"],
  devops: ["Git", "GitHub","AWS","Docker"],
  databases: ["MySQL", "MongoDB (Atlas basics)"],
  tools: [
    "Selenium",
    "PyAutoGUI",
    "Pandas",
    "Matplotlib",
    "Hugging Face",
    "Transformers",
    "OpenCV",
    "YOLO"
  ],
};

export const research = [
  {
    id: 1,
    title: "Face Recognition Attendance System (Edge + Cloud)",
    description: "Built an automated attendance system using OpenCV-based facial recognition with location binding to prevent proxy marking, backed by cloud storage for real-time tracking.",
    tags: ["Computer Vision", "Cloud", "Automation"],
    link: "#",
    year: "In progress",
  },
  {
    id: 2,
    title: "Optimizing Chatbot Context for Accuracy & Cost",
    description: "Improving chatbot performance by reducing irrelevant context using embedding-based relevance pruning, balancing accuracy, latency, and token cost.",
    tags: ["LLM Systems", "RAG", "Optimization"],
    link: "#",
    year: "2025",
  },
  
];

export const blog = [
  {
    id: 1,
    title: "What If Consciousness Is a Quantum Process?",
    intro: "Are you just a bunch of neurons firing… or something far stranger, quietly shaping reality itself?",
    tags: ["Quantum Consciousness", "Neuroscience", "Philosophy"],
    date: "Mar 2024",
    link: "#",
    readTime: "8 min",
  },
  {
    id: 2,
    title: "We Might Be Living Inside a Simulation And AI Is the First Clue",
    intro: "From simulation theory to modern AI, exploring whether reality is more artificial than it seems.",
    tags: ["Simulation Theory", "Artificial Intelligence", "Philosophy"],
    date: "May 2025",
    link: "#",
    readTime: "8 min",
  },
  {
    id: 3,
    title: "Your Brain Is Not Designed for Truth It Is Designed for Survival",
    intro: "Why your perception of reality is shaped more by survival than truth.",
    tags: ["Psychology", "Cognitive Bias", "Philosophy"],
    date: "May 2026",
    link: "#",
    readTime: "8 min",
  },
];

export const lifeGallery = [
  { id: 1, caption: "Hiking the Lost Coast Trail", date: "Oct 2023", image: "/gallery/travel1.jpg", tag: "Travel" },
  { id: 2, caption: "Coffee crawl through Kyoto", date: "Mar 2023", image: "/gallery/travel2.jpg", tag: "Travel" },
  { id: 3, caption: "Half Dome summit", date: "Aug 2023", image: "/gallery/hobbies1.jpg", tag: "Hobbies" },
  { id: 4, caption: "Film photography in Oaxaca", date: "Jan 2024", image: "/gallery/photography1.jpg", tag: "Photography" },
  { id: 5, caption: "Building a mechanical keyboard", date: "Dec 2023", image: "/gallery/tech1.jpg", tag: "Tech" },
  { id: 6, caption: "Reading week in the Sierras", date: "Sep 2023", image: "/gallery/hobbies2.jpg", tag: "Hobbies" },
];

export const nonTechSkills = [
  "Technical Writing",
  "Chess",
  "Video Editing",
  "Public Speaking",
  "Curiosity-Driven Learning",
  "Fitness & Discipline",
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
