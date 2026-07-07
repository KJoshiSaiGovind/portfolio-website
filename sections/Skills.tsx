"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import FadeIn from "@/components/animations/FadeIn";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section className={styles.skills} id="skills">
      <div className={styles.container}>
        <FadeIn>
          <h2 className={styles.sectionTitle}>
            Technical <span>Cloud.</span>
          </h2>
        </FadeIn>

        <div className={styles.cloudWrapper}>
          {skillCategories.map((category, idx) => (
            <FadeIn key={category.title} delay={idx * 0.1}>
              <div className={styles.categoryCluster}>
                <h3 className={styles.categoryTitle}>{category.title}</h3>
                <div className={styles.skillNodes}>
                  {category.skills.map((skill, sIdx) => {
                    const randomDuration = 3 + Math.random() * 2;
                    const randomY = Math.random() * 15;
                    return (
                      <motion.div
                        key={skill}
                        className={styles.node}
                        drag
                        dragConstraints={{ left: -10, right: 10, top: -10, bottom: 10 }}
                        dragElastic={0.2}
                        whileHover={{ scale: 1.15, zIndex: 10 }}
                        whileTap={{ scale: 0.95 }}
                        animate={{ 
                          y: [0, -randomY, 0], 
                          rotate: [0, Math.random() > 0.5 ? 2 : -2, 0] 
                        }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: randomDuration,
                          ease: "easeInOut",
                          delay: sIdx * 0.2
                        }}
                      >
                        <div className={styles.nodeInner}>
                          <div className={styles.nodeRing} />
                          <span>{skill}</span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
