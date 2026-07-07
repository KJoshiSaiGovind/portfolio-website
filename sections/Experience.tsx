"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/data/experience";
import FadeIn from "@/components/animations/FadeIn";
import styles from "./Experience.module.css";

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className={styles.experience} id="experience" ref={containerRef}>
      <div className={styles.container}>
        <FadeIn>
          <h2 className={styles.sectionTitle}>
            Professional <span>Journey.</span>
          </h2>
        </FadeIn>

        <div className={styles.timeline}>
          <motion.div 
            className={styles.animatedLine}
            style={{ height: lineHeight }}
          />
          {experience.map((exp, idx) => (
            <ExperienceCard key={idx} exp={exp} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ exp, idx }: { exp: any, idx: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className={styles.timelineItem}>
      <motion.div 
        className={styles.dot} 
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, type: "spring" }}
      >
        <div className={styles.dotPulse} />
      </motion.div>
      <FadeIn delay={0.2} direction="left">
        <motion.div 
          className={styles.card}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className={styles.header}>
            <div>
              <h3 className={styles.role}>{exp.role}</h3>
              <div className={styles.company}>{exp.company}</div>
            </div>
            <div className={styles.duration}>{exp.duration}</div>
          </div>
          <p className={styles.description}>{exp.description}</p>
          <ul className={styles.achievements}>
            {exp.achievements.map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </motion.div>
      </FadeIn>
    </div>
  );
}
