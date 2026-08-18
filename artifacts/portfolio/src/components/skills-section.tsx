import { motion } from "framer-motion";
import {
  SiReact, SiNodedotjs, SiDocker, SiKubernetes,
  SiPostgresql, SiMongodb, SiRedis, SiJenkins,
  SiGithubactions, SiTerraform, SiTypescript,
  SiPython, SiGit, SiLinux, SiNginx, SiExpress,
  SiRedux, SiFirebase,
} from "react-icons/si";
import { Code2, Database, Server, Layers, Wrench, Globe } from "lucide-react";

type Skill = { name: string; icon: React.ElementType | null };

const skillCategories: {
  title: string;
  categoryIcon: React.ElementType;
  color: string;
  skills: Skill[];
}[] = [
  {
    title: "Languages",
    categoryIcon: Code2,
    color: "from-violet-500/15 to-transparent",
    skills: [
      { name: "JavaScript", icon: null },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Python",     icon: SiPython },
      { name: "Java",       icon: null },
      { name: "C / C++",   icon: null },
      { name: "SQL",        icon: null },
    ],
  },
  {
    title: "Frontend & Backend",
    categoryIcon: Layers,
    color: "from-blue-500/15 to-transparent",
    skills: [
      { name: "React.js",      icon: SiReact },
      { name: "Node.js",       icon: SiNodedotjs },
      { name: "Express.js",    icon: SiExpress },
      { name: "Redux Toolkit", icon: SiRedux },
      { name: "REST APIs",     icon: Globe },
      { name: "WebSockets",    icon: null },
      { name: "Firebase",      icon: SiFirebase },
      { name: "LangChain",     icon: null },
    ],
  },
  {
    title: "Databases",
    categoryIcon: Database,
    color: "from-emerald-500/15 to-transparent",
    skills: [
      { name: "PostgreSQL",      icon: SiPostgresql },
      { name: "MongoDB",         icon: SiMongodb },
      { name: "MySQL",           icon: null },
      { name: "Redis",           icon: SiRedis },
      { name: "Qdrant (Vector)", icon: null },
    ],
  },
  {
    title: "DevOps & Cloud",
    categoryIcon: Server,
    color: "from-orange-500/15 to-transparent",
    skills: [
      { name: "Docker",         icon: SiDocker },
      { name: "Kubernetes",     icon: SiKubernetes },
      { name: "Jenkins",        icon: SiJenkins },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Terraform",      icon: SiTerraform },
      { name: "AWS EC2",        icon: null },
      { name: "NGINX",          icon: SiNginx },
      { name: "Argo CD",        icon: null },
      { name: "Linux",          icon: SiLinux },
      { name: "CI/CD",          icon: null },
    ],
  },
  {
    title: "Tools & Libraries",
    categoryIcon: Wrench,
    color: "from-pink-500/15 to-transparent",
    skills: [
      { name: "Git / GitHub",  icon: SiGit },
      { name: "BullMQ",        icon: null },
      { name: "JWT / bcrypt",  icon: null },
      { name: "Chart.js / D3", icon: null },
      { name: "Postman",       icon: null },
      { name: "Docker CLI",    icon: null },
      { name: "kubectl",       icon: null },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};
const itemVariants = {
  hidden:  { opacity: 0, scale: 0.8, y: 8 },
  visible: { opacity: 1, scale: 1,   y: 0, transition: { type: "spring" as const, stiffness: 280, damping: 20 } },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative" data-testid="section-skills">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60rem] h-[30rem] bg-primary/3 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-5 md:px-12 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="flex items-center gap-4 mb-14">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight whitespace-nowrap">04. Skills</h2>
            <motion.div
              className="h-px bg-gradient-to-r from-primary/60 to-transparent flex-1 ml-4"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat, catIdx) => {
              const CatIcon = cat.categoryIcon;
              return (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: catIdx * 0.08 }}
                  whileHover={{ y: -3 }}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all shadow-sm overflow-hidden relative"
                  data-testid={`card-skills-${catIdx}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} pointer-events-none`} />

                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-5">
                      <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
                        <CatIcon className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <h3 className="text-xs font-mono text-primary uppercase tracking-widest font-semibold">
                        {cat.title}
                      </h3>
                    </div>

                    <motion.div
                      className="flex flex-wrap gap-2"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {cat.skills.map((skill) => {
                        const Icon = skill.icon;
                        return (
                          <motion.span
                            key={skill.name}
                            variants={itemVariants}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-mono bg-background/70 border border-border/80 text-foreground/80 hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-colors cursor-default"
                            data-testid={`badge-skill-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                          >
                            {Icon
                              ? <Icon className="w-3.5 h-3.5 text-primary/70 flex-shrink-0" />
                              : <Code2 className="w-3.5 h-3.5 text-primary/40 flex-shrink-0" />
                            }
                            {skill.name}
                          </motion.span>
                        );
                      })}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
