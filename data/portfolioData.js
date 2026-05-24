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
    name: "DineIQ",
    description: "AI-powered food waste reduction system using behavioral incentives to promote sustainable consumption patterns.",
    tech: ["Flutter", "Backend Logic", "Data Tracking", "System Design"],
    live: "https://huggingface.co/spaces/ohnogaurav/DineIQ",
    github: "https://github.com/ohnogaurav/DineIQ",
    category: "Backend",
    featured: true,
    image: "/project/DineIQ.png",
    stats: "Behavior System",
  },
  {
    id: 2,
    name: "EduTrack",
    description: "Geolocation and liveness-based attendance system preventing proxy marking with real-time tracking and validation.",
    tech: ["Flutter", "APIs", "Geolocation", "Liveness Detection"],
    live: "https://ohnogaurav.github.io/EduTrack/",
    github: "https://github.com/ohnogaurav/EduTrackCapstone",
    category: "Mobile",
    featured: true,
    image: "/project/EduTrack.png",
    stats: "Anti-Proxy System",
  },
  {
    id: 3,
    name: "Anubodh",
    description: "Context-aware AI chatbot with persistent memory, retrieval pipelines, and personalized responses via Gemini API.",
    tech: ["Python", "MongoDB", "Google Gemini API", "Gradio", "RAG"],
    live: "https://huggingface.co/spaces/ohnogaurav/Anubodh_AI",
    github: "https://github.com/ohnogaurav/Personalised-RAG-LLM-ChatBot",
    category: "ML",
    featured: true,
    image: "/project/Chatbot.png",
    stats: "RAG + Memory System",
  },
  {
    id: 4,
    name: "Argus",
    description: "A lightweight Security Operations Center (SOC) dashboard for real-world threat hunting, packet analysis, and intrusion detection. Features network telemetry, forensic investigation, and automated threat intelligence correlation.",
    tech: ["Flask", "Python 3", "Scapy", "BeautifulSoup", "Plotly", "Docker"],
    live: "https://huggingface.co/spaces/ohnogaurav/Argus",
    github: "https://github.com/ohnogaurav/Argus",
    category: "Security",
    featured: false,
    image: "/project/Argus.png",
    stats: "SOC Dashboard",
  }
];

export const experience = [
  {
  id: 1,
  role: "Independent Software Developer",
  company: "Self",
  duration: "Jan 2023 – Present",
  type: "Experience",
  points: [
    "Built backend systems and data-driven applications focusing on reliability and scalability",
    "Designed modular and reusable components to improve development efficiency",
    "Optimized system performance through debugging, profiling, and iterative improvements",
    "Developed and maintained end-to-end projects across APIs, automation, and data processing"
  ],
  tech: ["Python", "SQL", "APIs", "System Design", "Debugging"],
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
  type: "School",
  points: [
    "Secured 89% with focus on Physics, Chemistry, and Mathematics.",
    "Built early foundation in analytical thinking and problem-solving.",
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
    tags: ["Computer Vision", "Security", "Automation"],
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
  resume: "/resume.pdf",
  spotify: "#",
};

export const githubFallback = {
  username: "ohnogaurav",
  repos: 42,
  stars: 318,
  followers: 127,
  featuredRepos: [
    {
      name: "DineIQ",
      description: "AI-powered food waste reduction system using behavioral incentives to promote sustainable consumption patterns.",
      stars: 28,
      forks: 5,
      language: "Flutter",
      link: "https://github.com/ohnogaurav/DineIQ",
    },
    {
      name: "EduTrack",
      description: "Geolocation and liveness-based attendance system preventing proxy marking with real-time tracking and validation.",
      stars: 42,
      forks: 8,
      language: "Flutter",
      link: "https://github.com/ohnogaurav/EduTrackCapstone",
    },
    {
      name: "Anubodh",
      description: "Context-aware AI chatbot with persistent memory, retrieval pipelines, and personalized responses via Gemini API.",
      stars: 35,
      forks: 7,
      language: "Python",
      link: "https://github.com/ohnogaurav/Personalised-RAG-LLM-ChatBot",
    },
  ],
};
