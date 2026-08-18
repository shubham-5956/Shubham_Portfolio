import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const featuredProject = {
  title: "PDF-RAG: AI Chat Assistant for PDFs",
  description:
    "A production-grade AI application that lets users upload PDFs and ask context-aware questions. Under the hood: LangChain orchestrates the retrieval pipeline, Google Gemini handles generation, Qdrant stores and queries vector embeddings, and BullMQ with Valkey (Redis) offloads large PDF processing to background workers — so uploads never block the request thread.",
  highlights: [
    "Vector embedding pipeline with chunking, embedding, and semantic retrieval via Qdrant",
    "Background job queue (BullMQ + Redis/Valkey) for async large-file processing",
    "Containerized with Docker — consistent across dev and prod",
    "Secured file uploads via Multer with validation and size constraints",
  ],
  tags: ["Next.js", "LangChain", "Google Gemini", "Qdrant", "BullMQ", "Redis", "Docker", "Multer"],
  link: null,
  github: null,
};

const otherProjects = [
  {
    title: "End-to-End DevOps CI/CD Pipeline",
    description:
      "Full CI/CD + container orchestration pipeline from zero. React + Node.js app containerized with Docker Compose. Jenkins pipeline automates GitHub checkout, Docker image builds, and Kubernetes deployments — zero manual release steps. Deployed to Minikube with Argo CD GitOps flow and NGINX ingress on AWS EC2.",
    highlights: [
      "Jenkins pipeline: automated build → test → deploy",
      "Kubernetes: Deployments, Services, scaling, Argo CD GitOps",
      "NGINX ingress controller on AWS EC2",
    ],
    tags: ["Docker", "Kubernetes", "Jenkins", "Argo CD", "AWS EC2", "NGINX", "GitOps"],
    link: null,
    github: null,
  },
  {
    title: "X-CRYPT-O: Crypto Exchange App",
    description:
      "Real-time cryptocurrency exchange dashboard with live market data. Interactive price charts across multiple time ranges (1D to 1Y), customizable coin views, and a fully responsive layout that works cleanly on any device.",
    highlights: [
      "Live price data via REST API integration",
      "Interactive charts: daily, weekly, monthly, yearly ranges",
      "Deployed to Vercel — live and publicly accessible",
    ],
    tags: ["React.js", "Chakra UI", "REST APIs", "Chart.js"],
    link: "https://x-crypt-o.vercel.app/",
    github: null,
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative" data-testid="section-projects">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">03. Projects</h2>
            <div className="h-px bg-border flex-1 ml-4" />
          </div>

          {/* Featured project */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-colors relative overflow-hidden"
            data-testid="card-project-featured"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                <div>
                  <p className="font-mono text-xs text-primary uppercase tracking-widest mb-2">Featured Project</p>
                  <h3 className="text-2xl font-bold text-foreground">{featuredProject.title}</h3>
                </div>
                <div className="flex gap-3">
                  {featuredProject.github && (
                    <Button variant="ghost" size="icon" asChild>
                      <a href={featuredProject.github} target="_blank" rel="noreferrer" data-testid="link-project-featured-github">
                        <Github className="w-5 h-5" />
                      </a>
                    </Button>
                  )}
                  {featuredProject.link && (
                    <Button variant="ghost" size="icon" asChild>
                      <a href={featuredProject.link} target="_blank" rel="noreferrer" data-testid="link-project-featured-live">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                {featuredProject.description}
              </p>

              <ul className="space-y-2 mb-6">
                {featuredProject.highlights.map((h, i) => (
                  <li key={i} className="flex gap-2 items-start text-sm text-muted-foreground">
                    <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 font-mono">
                {featuredProject.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary/20 border-0 rounded-sm font-normal text-xs"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Other projects */}
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors flex flex-col"
                data-testid={`card-project-${index}`}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-foreground leading-tight">{project.title}</h3>
                  <div className="flex gap-2 flex-shrink-0 ml-2">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid={`link-project-${index}-github`}>
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid={`link-project-${index}-live`}>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>

                <ul className="space-y-1.5 mb-5">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex gap-2 items-start text-xs text-muted-foreground">
                      <ArrowRight className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mt-auto font-mono">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20 border-0 rounded-sm font-normal text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
