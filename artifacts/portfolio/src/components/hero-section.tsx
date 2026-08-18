import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, Terminal, ArrowDown, Phone, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const pills = ["React", "Node.js", "Kubernetes", "Docker", "LangChain", "Terraform", "CI/CD", "Azure"];

const floatingOrbs = [
  { size: "w-72 h-72",  pos: "top-[10%] left-[5%]",     color: "bg-primary/8",    delay: 0 },
  { size: "w-96 h-96",  pos: "bottom-[10%] right-[5%]",  color: "bg-indigo-500/8", delay: 1 },
  { size: "w-48 h-48",  pos: "top-[55%] left-[40%]",     color: "bg-cyan-500/5",   delay: 2 },
];

const socials = [
  { href: "https://github.com/shubham-5956",              icon: Github,   label: "GitHub",   testId: "link-github" },
  { href: "https://linkedin.com/in/shubhamkumaragarwal2", icon: Linkedin, label: "LinkedIn", testId: "link-linkedin" },
  { href: "mailto:shubhamkumaragarwal2@gmail.com",        icon: Mail,     label: "Email",    testId: "link-email" },
  { href: "tel:+917519915598",                             icon: Phone,    label: "Phone",    testId: "link-phone" },
];

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y       = useTransform(scrollY, [0, 600], [0, 100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section
      id="hero"
      className="min-h-[100dvh] flex items-center justify-center pt-24 pb-16 relative overflow-hidden"
      data-testid="section-hero"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {floatingOrbs.map((orb, i) => (
          <motion.div
            key={i}
            className={`absolute ${orb.size} ${orb.pos} ${orb.color} rounded-full blur-[100px]`}
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.85, 0.4] }}
            transition={{ duration: 6 + i * 1.5, repeat: Infinity, delay: orb.delay, ease: "easeInOut" }}
          />
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_40%,#000_20%,transparent_100%)] dark:block hidden" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_40%,#000_20%,transparent_100%)] dark:hidden" />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-5 md:px-12 relative z-10 w-full"
      >
        <div className="flex flex-col items-center justify-center">

          {/* ── text content ─────────────────────────────────────── */}
          <div className="max-w-2xl text-center">

            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-7 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm"
            >
              <Terminal className="w-3.5 h-3.5 text-primary" />
              <span className="font-mono text-primary text-xs font-medium tracking-wide">
                Available for new opportunities
              </span>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            </motion.div>

            {/* Name */}
            <div className="overflow-hidden mb-5">
              <motion.h1
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-foreground leading-[1.0]"
              >
                Shubham Kumar<br />Agarwal.
              </motion.h1>
            </div>

            {/* Static role title */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="text-xl md:text-2xl font-bold text-primary mb-5"
            >
              Full-Stack Developer
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-base text-muted-foreground max-w-xl mb-8 leading-relaxed mx-auto"
            >
              I build things that go to production — from pixel-perfect React UIs to
              containerised services on Kubernetes, with CI/CD pipelines that automate
              everything in between.
            </motion.p>

            {/* Tech pills */}
            <motion.div
              className="flex flex-wrap gap-2 mb-10 justify-center"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.06, delayChildren: 0.72 } } }}
            >
              {pills.map((pill) => (
                <motion.span
                  key={pill}
                  variants={{
                    hidden:  { opacity: 0, scale: 0.7, y: 8 },
                    visible: { opacity: 1, scale: 1,   y: 0 },
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="px-3 py-1 rounded-full text-xs font-mono border border-primary/25 text-primary/80 bg-primary/5 hover:bg-primary/10 hover:border-primary/50 transition-colors cursor-default"
                >
                  {pill}
                </motion.span>
              ))}
            </motion.div>

            {/* CTAs + socials */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.05 }}
              className="flex flex-wrap items-center gap-4 justify-center"
            >
              <Button asChild size="lg" className="font-mono h-12 px-8 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow">
                <a href="#projects" data-testid="button-view-work">View My Work</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-mono h-12 px-8 bg-background/50 backdrop-blur hover:bg-primary/5 gap-2">
                <a href="/resume.pdf" download="Shubham_Kumar_Agarwal_Resume.pdf" data-testid="button-resume">
                  <Download className="w-4 h-4" />
                  Resume
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-mono h-12 px-8 bg-background/50 backdrop-blur hover:bg-primary/5">
                <a href="#contact" data-testid="button-contact">Contact Me</a>
              </Button>
              <div className="flex items-center gap-1">
                {socials.map(({ href, icon: Icon, label, testId }) => (
                  <Button key={label} asChild variant="ghost" size="icon" className="rounded-full hover:text-primary hover:bg-primary/10 w-9 h-9">
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" data-testid={testId}>
                      <Icon className="w-4 h-4" />
                      <span className="sr-only">{label}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <span className="text-xs font-mono tracking-widest uppercase">scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
