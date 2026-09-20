import {
  GitHubIcon,
  ReactIcon,
  GCPIcon,
  JavaScriptIcon,
  PythonIcon,
  AirflowIcon,
  BigQueryIcon,
  SQLIcon,
  DotNetIcon,
  MongoDBIcon,
  PostgreSQLIcon,
  LangChainIcon,
  ADKIcon,
  AWSIcon,
} from "@/components/icons/TechIcons";

export const profile = {
  name: "Pranali Shinde",
  role: "Machine Learning Engineer",
  company: "General Mills",
  location: "Mumbai, IN",
  email: "pranali0809shinde@gmail.com",
  photo: "/images/woman-sits-at-a-laptop-vector-removebg-preview.png",
  resumeUrl:
    "https://drive.google.com/file/d/1TpbRdwW_lhj6qF5AvVTzYGBeWTtIpTqt/view?usp=sharing",
  bio: [
    "I’m a Machine Learning Engineer who enjoys solving messy, real-world problems and turning them into systems that actually run. I work at the intersection of software and machine learning, building optimization engines, forecasting pipelines, and exploring agent-driven AI systems that can think a little and act a little.",
    "What pulls me in isn’t just the model, but the design behind it — how everything connects, scales, and holds up over time. I’m especially curious about building intelligent systems that are practical, reliable, and thoughtfully engineered.",
    "My goal? Make AI less magical and more engineered. If that sounds interesting, let’s connect.",
  ],
  tagline: "Make AI less magical and more engineered.",
};

export const socials = [
  { label: "Email", url: `mailto:${profile.email}`, handle: profile.email },
  {
    label: "GitHub",
    url: "https://github.com/Pranali0809",
    handle: "Pranali0809",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/pranali-shinde-59804921b",
    handle: "pranali-shinde",
  },
  {
    label: "X",
    url: "https://x.com/PranaliShi56844",
    handle: "@PranaliShi56844",
  },
];

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  /** "#" means no public link, so the button is hidden. */
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  accent: string;
  /** Short state label shown beside the title in the work list. */
  status: string;
  details: {
    whatItDoes: string[];
    whatIWorkedOn: string[];
    challenges: string[];
  };
}

export const projects: Project[] = [
  {
    id: 1,
    title: "CloudOps",
    description:
      "An agentic cloud operations platform that analyzes live infrastructure data and converts it into actionable cost, security, and performance decisions.",
    image: "/images/CloudOps.png",
    tech: ["Python", "AWS", "Bedrock", "Dynamo DB", "OpenAI"],
    liveUrl: "https://www.youtube.com/watch?v=Y7J7wXuzpDU",
    githubUrl: "https://github.com/parth1504/cost-eco-vision",
    featured: true,
    accent: "vermilion",
    status: "Demo",
    details: {
      whatItDoes: [
        "Monitors AWS cloud resources and detects inefficiencies, misconfigurations, and security risks in real time.",
        "Provides a unified dashboard for resource insights, alerts, and operational visibility.",
      ],
      whatIWorkedOn: [
        "Integrated AWS services (EC2, S3, DynamoDB, Cost Explorer) using Boto3 for metrics and actions",
        "Designed and implemented agent-based reasoning workflows using AWS Bedrock and FastAPI.",
      ],
      challenges: [
        "Optimized query performance for handling large volumes of cloud cost data",
        "Implemented efficient caching strategies for real-time updates",
      ],
    },
  },
  {
    id: 2,
    title: "Vaidya.ai",
    description:
      "Vaidya.ai is an AI-powered healthcare platform that enables intelligent pre-appointment assessment and AI-assisted diagnosis with doctors as the human-in-the-loop.",
    image: "/images/Vaidyai.png",
    tech: [
      "GCP",
      "Firestore",
      "ReactJS",
      "Agent Development Kit",
      "Python Fast API",
    ],
    liveUrl: "https://www.youtube.com/watch?v=w5L2xGES9GQ",
    githubUrl: "https://github.com/Pranali0809/wellspring-dialogue",
    featured: true,
    accent: "rani",
    status: "Demo",
    details: {
      whatItDoes: [
        "Processes doctor–patient conversations using voice transcription and AI-assisted diagnostic reasoning.",
        "Provides personalized health recommendations based on user input",
        "Collects structured patient history via an AI pre-appointment agent and maintains a longitudinal medical timeline.",
      ],
      whatIWorkedOn: [
        "Designed and integrated agentic workflows using Med-LLMs, Whisper, VectorDB (RAG), and MCP-based tool calling.",
        "Built a full-stack system with FastAPI and Firestore to manage patients, appointments, and AI-generated outputs.",
      ],
      challenges: [
        "Ensured HIPAA-compliant data handling practices",
        "Fine-tuned the AI model for medical accuracy",
      ],
    },
  },
  {
    id: 3,
    title: "Smart Docs",
    description:
      "Built a real-time collaborative document editing platform with conflict-free editing and document-aware AI assistance.",
    image: "/images/SmartDocs.png",
    tech: [
      "GraphQL",
      "Apollo Server",
      "Websockets",
      "ShareDB",
      "MongoDB",
      "React JS",
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    accent: "bottle",
    status: "Personal project",
    details: {
      whatItDoes: [
        "Enables multiple users to edit the same document simultaneously with live cursor and content updates.",
        "Allows users to query and chat with the document to get context-aware answers based on its content.",
      ],
      whatIWorkedOn: [
        "Implemented real-time collaboration using ShareDB and Operational Transformation (OT) for conflict resolution.",
        "Designed GraphQL APIs and subscriptions (websockets) for document updates, user presence, and access control.",
        "Integrated a LangChain-based RAG pipeline with vector search to enable document-grounded conversational querying.",
      ],
      challenges: [
        "Handled complex document formats and edge cases",
        "Optimized WebSocket performance for large document sets",
      ],
    },
  },
  {
    id: 4,
    title: "Plan Squad",
    description:
      "A collaborative group decision-making app that helps friends vote, plan hangouts, and finalize outings seamlessly in real time.",
    image: "/images/base44.png",
    tech: ["Vibecoded", "Base44"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    accent: "turmeric",
    status: "Prototype",
    details: {
      whatItDoes: [
        "Enables groups to vote on restaurants, movies, or activities within shared sessions.",
        "Aggregates votes to show ranked results with clear visual cues (gold, silver, bronze)",
        "Converts finalized results into planned hangouts with invitations and memories.",
      ],
      whatIWorkedOn: ["[Vibecoded]"],
      challenges: [
        "Optimized TensorFlow models for mobile performance",
        "Implemented offline-first architecture for gym environments",
      ],
    },
  },
  {
    id: 5,
    title: "Hiring Automation Platform",
    description:
      "Built an automated pipeline using Zapier to extract hiring and internship opportunities from Instagram Reel transcripts and convert them into a structured, trackable dataset.",
    image: "/images/Zapier.png",
    tech: ["Automation", "Zapier", "Supadata", "OpenAI"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    accent: "saffron",
    status: "Automation",
    details: {
      whatItDoes: [
        "Automatically processes Instagram Reel transcripts to identify companies, roles, and hiring programs.",
        "Structures unorganized video content into tabular data with deadlines, links, and opportunity details.",
      ],
      whatIWorkedOn: [
        "Designed a multi-step Zapier workflow with AI-based information extraction using OpenAI API and indexed looping over results.",
        "Integrated third-party transcription output USING Supadata API with AI parsing and Google Sheets as a persistence layer.",
      ],
      challenges: [
        "Designed efficient data pipelines for large-scale datasets",
        "Implemented model versioning and A/B testing capabilities",
      ],
    },
  },
];

export type Experience = (typeof experiences)[number];

export const experiences = [
  {
    id: 1,
    title: "Machine Learning Engineer",
    company: "General Mills",
    location: "Mumbai, IN",
    duration: "2024 — Present",
    type: "Full-time",
    description:
      "Leading development of scalable web applications and mentoring junior developers in modern development practices.",
    responsibilities: [
      "Designed, implemented, and maintained Apache Airflow DAGs for end-to-end orchestration of MLOps.",
      "Owned pipeline reliability and observability, handling retries, backfills, SLA monitoring, failure analysis, and production incident debugging.",
      "Built a containerized optimizer execution framework using Kubeflow, enabling scalability",
      "Mentored interns and conducted code reviews",
    ],
    projects: [
      "Demand Forecasting — Worked on time series model to forecast demand volume",
      "Logistic Optimization — Worked on mathematical optimization models using Gurobi and ML-driven workflows to solve large-scale operational planning problems",
      "Infra AI — Led a POC for cloud infrastructure optimization on GCP, using agent-based analysis of resource metrics to generate cost, performance, and security recommendations.",
    ],
    tools: [
      "GCP",
      "Python",
      "SQL",
      "Airflow",
      "Github Actions",
      "Agent Development Kit",
      "Langchain",
    ],
  },
] as const;

export const achievements = [
  {
    id: 4,
    title: "IEEE Publication",
    organization: "IEEE",
    date: "2023",
    description:
      "The Quest for Fairness: A Comparative Study of Accuracy in AI Hiring Systems",
    kind: "publication",
  },
  {
    id: 5,
    title: "Hackathon Winner",
    organization: "Hackniche",
    date: "2023",
    description:
      "Secured the 1st Runner up prize in Hackniche hackathon with over 80+ Teams as participants",
    kind: "competition",
  },
] as const;

export const certification = {
  title: "Google Cloud ACE",
  image: "/images/associate-cloud-engineer-certification.png",
  url: "https://www.credly.com/badges/dd40c098-0937-48ed-89a2-1db0e69d1023/linked_in?t=ta2t3a",
};

export const library = [
  {
    id: 3,
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    type: "book",
    category: "System Architecture",
    description:
      "A comprehensive guide to building reliable, scalable, and maintainable modern data systems by understanding core principles, trade-offs, and internals of databases and distributed architectures.",
    rating: 5,
    favorite: true,
    url: "https://www.amazon.in/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/9352135245",
  },
  {
    id: 4,
    title: "Designing ML Systems",
    author: "Chip Huyen",
    type: "book",
    category: "Machine Learning",
    description:
      "A practical guide to designing and deploying production-ready machine learning systems with a holistic, iterative approach.",
    rating: 4,
    favorite: true,
    url: "https://www.amazon.in/Designing-Machine-Learning-Systems-Production-Ready/dp/9355422679",
  },
  {
    id: 5,
    title: "System Design Primer",
    author: "Donne Martin",
    type: "article",
    category: "System Design",
    description:
      "Comprehensive guide to system design principles and scalable architecture.",
    rating: 4,
    favorite: false,
    url: "https://github.com/donnemartin/system-design-primer",
  },
] as const;

export const disciplines = [
  "AI & agents",
  "Languages",
  "Data & pipelines",
  "Cloud",
  "Frontend",
] as const;

export type Discipline = (typeof disciplines)[number];

export const skills: {
  name: string;
  icon: () => JSX.Element;
  discipline: Discipline;
}[] = [
  { name: "LangChain", icon: LangChainIcon, discipline: "AI & agents" },
  { name: "ADK", icon: ADKIcon, discipline: "AI & agents" },
  { name: "Python", icon: PythonIcon, discipline: "Languages" },
  { name: "SQL", icon: SQLIcon, discipline: "Languages" },
  { name: "JavaScript", icon: JavaScriptIcon, discipline: "Languages" },
  { name: ".NET", icon: DotNetIcon, discipline: "Languages" },
  { name: "Apache Airflow", icon: AirflowIcon, discipline: "Data & pipelines" },
  { name: "BigQuery", icon: BigQueryIcon, discipline: "Data & pipelines" },
  { name: "PostgreSQL", icon: PostgreSQLIcon, discipline: "Data & pipelines" },
  { name: "MongoDB", icon: MongoDBIcon, discipline: "Data & pipelines" },
  { name: "Google Cloud", icon: GCPIcon, discipline: "Cloud" },
  { name: "AWS", icon: AWSIcon, discipline: "Cloud" },
  { name: "React", icon: ReactIcon, discipline: "Frontend" },
  { name: "GitHub", icon: GitHubIcon, discipline: "Frontend" },
];

/**
 * The five-step process shown in the Method section. Written from the
 * responsibilities on the General Mills role — no equivalent copy existed
 * on the old site.
 */
export const method = [
  {
    step: "1",
    title: "Frame",
    body: "Understand the problem, the data behind it, and what “working” has to mean in production.",
  },
  {
    step: "2",
    title: "Model",
    body: "Prototype the approach — a forecast, a mathematical optimiser, or an agent workflow.",
  },
  {
    step: "3",
    title: "Build",
    body: "Wrap it in orchestrated pipelines that run on a schedule, not on a laptop.",
  },
  {
    step: "4",
    title: "Observe",
    body: "Retries, backfills, SLA monitoring, failure analysis and incident debugging.",
  },
  {
    step: "5",
    title: "Ship",
    body: "Deploy, hand over, review the code, and keep it healthy once it is live.",
  },
];
