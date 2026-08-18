import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Briefcase, GraduationCap, Zap } from "lucide-react";

const strengths = [
  { label: "Full-Stack",         detail: "React frontends to Node.js microservices — I own the full delivery chain." },
  { label: "DevOps",             detail: "Docker, Kubernetes, Jenkins, Argo CD — I containerize and ship what I build." },
  { label: "Cloud & IaC",        detail: "Azure (AKS, ACR) and AWS — Terraform-provisioned infra across environments." },
  { label: "AI Integration",     detail: "LangChain, vector databases, and async job queues for real AI pipelines." },
];

const stats = [
  { number: 3,  suffix: "+", label: "Production\nDeployments" },
  { number: 2,  suffix: "",  label: "Cloud\nPlatforms" },
  { number: 5,  suffix: "+", label: "DevOps\nTools" },
  { number: 3,  suffix: "",  label: "Personal\nProjects" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="text-3xl font-bold text-primary font-mono tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative" data-testid="section-about">
      <div className="container mx-auto px-5 md:px-12 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight whitespace-nowrap">01. About Me</h2>
            <motion.div
              className="h-px bg-gradient-to-r from-primary/60 to-transparent flex-1 ml-4"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left — bio + strengths */}
            <div className="space-y-7">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {[
                  "I'm a software engineer with professional experience building enterprise-grade applications at the intersection of full-stack development and DevOps. While most engineers specialise in one layer, I operate across all of them.",
                  "I've shipped production features for HRMS and fintech platforms, containerized and deployed them to Kubernetes clusters on Azure, and built AI pipelines with vector databases on the side — because staying ahead of the curve matters.",
                  "I care about systems that are maintainable, observable, and built to scale — not just systems that work.",
                ].map((para, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.1 }}
                  >
                    {para}
                  </motion.p>
                ))}
              </div>

              <div>
                <p className="font-mono text-xs text-primary uppercase tracking-widest mb-4">
                  What I bring to the table
                </p>
                <div className="space-y-3">
                  {strengths.map((s, i) => (
                    <motion.div
                      key={s.label}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="flex gap-3 items-start group"
                    >
                      <div className="mt-0.5 flex-shrink-0 p-1 rounded bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Zap className="w-3 h-3 text-primary" />
                      </div>
                      <div>
                        <span className="font-semibold text-foreground text-sm">{s.label} — </span>
                        <span className="text-muted-foreground text-sm">{s.detail}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — info card + animated stats */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-6 rounded-2xl bg-card border border-border shadow-sm"
              >
                <ul className="space-y-5 font-mono text-sm">
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <span>Gurugram, Haryana, India</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Briefcase className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-foreground">2+ Years Professional Experience</div>
                      <div className="text-muted-foreground text-xs mt-0.5">Full-Stack + DevOps — enterprise scale</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <GraduationCap className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div>B.E. Computer Science — GPA 8.10/10</div>
                      <div className="text-muted-foreground text-xs mt-0.5">Chandigarh University (2020–2024)</div>
                    </div>
                  </li>
                </ul>
              </motion.div>

              {/* Animated stat counters */}
              <div className="grid grid-cols-2 gap-3">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    whileHover={{ scale: 1.04 }}
                    className="p-4 rounded-xl bg-card border border-border text-center group hover:border-primary/40 transition-colors shadow-sm"
                    data-testid={`stat-${i}`}
                  >
                    <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                    <div className="text-xs text-muted-foreground mt-1.5 leading-tight whitespace-pre-line font-mono">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
