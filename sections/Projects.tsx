"use client";

import { useRef, MouseEvent, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { FolderGit2, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { projects } from "@/data/projects";
import FadeIn from "@/components/animations/FadeIn";
import styles from "./Projects.module.css";

function ProjectCard({ project, idx }: { project: typeof projects[0], idx: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
    
    // 3D Tilt calculation
    const width = rect.width;
    const height = rect.height;
    const xPct = x / width - 0.5;
    const yPct = y / height - 0.5;
    tiltX.set(xPct);
    tiltY.set(yPct);
  };

  const handleMouseLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const springX = useSpring(tiltX, { stiffness: 300, damping: 30 });
  const springY = useSpring(tiltY, { stiffness: 300, damping: 30 });
  const rotateX = useTransform(springY, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-5deg", "5deg"]);

  const isFullWidth = idx % 3 === 0;

  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className={`${styles.card} ${isFullWidth ? styles.fullWidth : styles.stacked}`} 
      ref={cardRef} 
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        handleMouseLeave();
        setIsHovered(false);
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      <div className={styles.content}>
        <div className={styles.header}>
          <FolderGit2 size={40} className={styles.folder} strokeWidth={1} />
          <div className={styles.links}>
            {project.github !== "#" && (
              <a href={project.github} target="_blank" rel="noreferrer" className={styles.link} aria-label="GitHub Repository">
                <GithubIcon size={20} />
              </a>
            )}
            {project.live !== "#" && (
              <a href={project.live} target="_blank" rel="noreferrer" className={styles.link} aria-label="Live Demo">
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
        
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        
        <div className={styles.techList}>
          {project.tech.map(tech => (
            <span key={tech} className={styles.techItem}>{tech}</span>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            className={styles.apiVisualizer}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.apiHeader}>
              <span className={styles.method}>GET</span>
              <span className={styles.endpoint}>/api/v1/projects/{project.title.toLowerCase().replace(/\s+/g, '-')}</span>
            </div>
            <div className={styles.apiBody}>
              <span className={styles.jsonKey}>"status"</span>: <span className={styles.jsonString}>"success"</span>,<br/>
              <span className={styles.jsonKey}>"uptime"</span>: <span className={styles.jsonNumber}>99.99</span>,<br/>
              <span className={styles.jsonKey}>"latency"</span>: <span className={styles.jsonNumber}>12ms</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <FadeIn>
          <h2 className={styles.sectionTitle}>
            Featured <span>Work.</span>
          </h2>
        </FadeIn>

        <div className={styles.layoutContainer}>
          {projects.map((project, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <ProjectCard project={project} idx={idx} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
