"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { profile } from "@/data/profile";
import FadeIn from "@/components/animations/FadeIn";
import { Server, Database, Cloud } from "lucide-react";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <FadeIn>
          <h2 className={styles.sectionTitle}>
            Engineering <span>Philosophy.</span>
          </h2>
        </FadeIn>

        <div className={styles.content}>
          <div className={styles.storytelling}>
            <FadeIn delay={0.2}>
              <h3 className={styles.subheading}>Not just writing code. Building systems.</h3>
              <div className={styles.text}>
                {profile.about.split('\n').map((para, i) => (
                  <p key={i} style={{ marginBottom: "1.5rem" }}>{para}</p>
                ))}
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className={styles.stats}>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>10+</div>
                  <div className={styles.statLabel}>Pipelines Deployed</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statNumber}>99%</div>
                  <div className={styles.statLabel}>System Uptime</div>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.5} direction="up">
            <div className={styles.architectureWrapper}>
              <div className={styles.archTitle}>System Architecture Blueprint</div>
              <div className={styles.archDiagram}>
                <motion.div className={styles.node} whileHover={{ scale: 1.05 }}>
                  <Cloud size={24} /> API Gateway
                </motion.div>
                <motion.div className={styles.line} initial={{ height: 0 }} whileInView={{ height: 40 }} viewport={{ once: true }} transition={{ duration: 1 }} />
                <motion.div className={styles.node} whileHover={{ scale: 1.05 }}>
                  <Server size={24} /> Microservices
                </motion.div>
                <div className={styles.branch}>
                  <motion.div className={styles.branchLine} initial={{ width: 0 }} whileInView={{ width: 80 }} viewport={{ once: true }} transition={{ delay: 1, duration: 1 }} />
                  <motion.div className={styles.branchLine} initial={{ width: 0 }} whileInView={{ width: 80 }} viewport={{ once: true }} transition={{ delay: 1, duration: 1 }} />
                </div>
                <div className={styles.dbNodes}>
                  <motion.div className={styles.node} whileHover={{ scale: 1.05 }}>
                    <Database size={24} /> PostgreSQL
                  </motion.div>
                  <motion.div className={styles.node} whileHover={{ scale: 1.05 }}>
                    <Database size={24} /> Redis
                  </motion.div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
