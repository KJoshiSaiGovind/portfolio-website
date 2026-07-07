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
            My <span>Introduction.</span>
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
              <div className={styles.treeDiagram}>
                <div className={styles.treeSection}>
                  <h4 className={styles.treeRoot}>Frontend</h4>
                  <ul className={styles.treeList}>
                    <li>React.js</li>
                    <li>Next.js</li>
                    <li className={styles.lastNode}>Responsive UI</li>
                  </ul>
                </div>
                
                <div className={styles.treeSection}>
                  <h4 className={styles.treeRoot}>Communication</h4>
                  <ul className={styles.treeList}>
                    <li>REST API</li>
                    <li>HTTPS</li>
                    <li className={styles.lastNode}>JSON</li>
                  </ul>
                </div>

                <div className={styles.treeSection}>
                  <h4 className={styles.treeRoot}>Backend</h4>
                  <ul className={styles.treeList}>
                    <li>FastAPI</li>
                    <li>Python</li>
                    <li>JWT Authentication</li>
                    <li className={styles.lastNode}>Pydantic Validation</li>
                  </ul>
                </div>

                <div className={styles.treeSection}>
                  <h4 className={styles.treeRoot}>Architecture</h4>
                  <ul className={styles.treeList}>
                    <li>Layered Architecture</li>
                    <li>Service Layer</li>
                    <li>Repository Pattern</li>
                    <li className={styles.lastNode}>Modular Design</li>
                  </ul>
                </div>

                <div className={styles.treeSection}>
                  <h4 className={styles.treeRoot}>Data Layer</h4>
                  <ul className={styles.treeList}>
                    <li>SQLAlchemy ORM</li>
                    <li className={styles.lastNode}>MySQL</li>
                  </ul>
                </div>

                <div className={styles.treeSection}>
                  <h4 className={styles.treeRoot}>Development</h4>
                  <ul className={styles.treeList}>
                    <li>Docker</li>
                    <li>Git</li>
                    <li className={styles.lastNode}>GitHub</li>
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
