"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import styles from "./Skills.module.css";
import { Server, Database, Code2, Globe, Cpu, Workflow } from "lucide-react";

const NETWORK = [
  { id: "python", icon: Code2, label: "Python", col: 1, row: 2 },
  { id: "fastapi", icon: Server, label: "FastAPI", col: 2, row: 2 },
  { id: "sqlalchemy", icon: Workflow, label: "SQLAlchemy", col: 3, row: 2 },
  { id: "mysql", icon: Database, label: "MySQL", col: 4, row: 2 },
  { id: "git", icon: Globe, label: "Git", col: 2, row: 1 },
  { id: "cicd", icon: Cpu, label: "CI/CD", col: 3, row: 1 }
];

const CONNECTIONS = [
  { from: "python", to: "fastapi", path: "M 0 0 L 100 0" },
  { from: "fastapi", to: "sqlalchemy", path: "M 0 0 L 100 0" },
  { from: "sqlalchemy", to: "mysql", path: "M 0 0 L 100 0" },
  { from: "git", to: "cicd", path: "M 0 0 L 100 0" },
  { from: "git", to: "fastapi", path: "M 0 0 L 0 100" }
];

export default function Skills() {
  return (
    <section className={styles.skills} id="skills">
      <div className={styles.container}>
        <FadeIn>
          <h2 className={styles.sectionTitle}>
            Live <span>Topology.</span>
          </h2>
        </FadeIn>

        <div className={styles.networkWrapper}>
          {NETWORK.map((node, i) => (
            <motion.div
              key={node.id}
              className={`${styles.networkNode} ${styles[node.id]}`}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, type: "spring", stiffness: 200, damping: 20 }}
            >
              <div className={styles.pulseRing} />
              <node.icon size={24} className={styles.nodeIcon} />
              <span>{node.label}</span>
            </motion.div>
          ))}
          
          <svg className={styles.svgConnections}>
            {CONNECTIONS.map((conn, i) => (
              <g key={i} className={styles[`conn-${conn.from}-${conn.to}`]}>
                <path d={conn.path} className={styles.lineBase} />
                <motion.path
                  d={conn.path}
                  className={styles.lineAnimated}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "linear",
                    delay: i * 0.5 
                  }}
                />
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}
