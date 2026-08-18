import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const highlights = [
  {
    text: "Built and owned Node.js backend services and React frontends for enterprise HRMS and fintech products — onboarding, payroll, and transaction workflows used in production.",
    tags: ["Node.js", "React", "Full-Stack"],
  },
  {
    text: "Designed and implemented REST APIs with Keycloak and Azure OAuth2 for secure, role-based access control across multi-tenant enterprise applications.",
    tags: ["REST APIs", "Keycloak", "Azure OAuth2", "Auth"],
  },
  {
    text: "Improved application performance through SQL query optimization and Memcached caching — reducing latency on data-heavy payroll and reporting endpoints.",
    tags: ["SQL Optimization", "Memcached", "Performance"],
  },
  {
    text: "Containerized applications with Docker and deployed to Azure Kubernetes Service (AKS), managing pods, services, and rolling updates across dev/QA/prod.",
    tags: ["Docker", "Kubernetes", "AKS", "Azure"],
  },
  {
    text: "Built CI/CD pipelines with Jenkins and GitHub Actions, integrating Git repositories with Azure Container Registry (ACR) and automated Kubernetes deployments — reducing manual release steps to zero.",
    tags: ["Jenkins", "GitHub Actions", "CI/CD", "ACR"],
  },
  {
    text: "Provisioned and maintained Azure cloud infrastructure using Terraform across three environments — consistent, repeatable, code-reviewed infra.",
    tags: ["Terraform", "IaC", "Azure"],
  },
  {
    text: "Led cloud cost optimization initiatives and participated in production support rotations — reserved instances, monitoring, and incident response.",
    tags: ["Cost Optimization", "Production Support"],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative bg-card/30" data-testid="section-experience">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">02. Experience</h2>
            <div className="h-px bg-border flex-1 ml-4" />
          </div>

          <div className="relative pl-8 border-l border-primary/30" data-testid="card-experience-0">
            <div className="absolute w-4 h-4 bg-background border-2 border-primary rounded-full -left-[9px] top-1" />

            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  Associate Consultant{" "}
                  <span className="text-primary">@ Cubastion Consulting Pvt. Ltd.</span>
                </h3>
                <p className="text-muted-foreground font-mono text-sm mt-1">Gurugram, Haryana</p>
              </div>
              <div className="font-mono text-sm text-primary/80 mt-2 md:mt-0 flex-shrink-0">
                Jan 2024 – Present
              </div>
            </div>

            <p className="text-muted-foreground text-sm mt-2 mb-8 leading-relaxed max-w-2xl">
              Enterprise software consulting — shipping full-stack features and owning DevOps 
              infrastructure for HRMS and fintech clients. One role, full ownership from UI to cluster.
            </p>

            <div className="space-y-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="p-4 rounded-lg bg-background/60 border border-border/60 hover:border-primary/30 transition-colors"
                  data-testid={`highlight-exp-${i}`}
                >
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">{item.text}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-0 rounded-sm font-mono font-normal text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
