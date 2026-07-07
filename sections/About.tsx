"use client";

import { motion } from "framer-motion";
import { Server, Database, Globe, Lock, Code2, Layers, Repeat } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import styles from "./About.module.css";

const ARCH_NODES = [
  { id: "frontend", icon: Globe, label: "Frontend", detail: "React.js" },
  { id: "auth", icon: Lock, label: "Auth", detail: "JWT Security" },
  { id: "api", icon: Server, label: "API Gateway", detail: "FastAPI REST" },
  { id: "service", icon: Code2, label: "Service Layer", detail: "Business Logic" },
  { id: "repo", icon: Layers, label: "Repository", detail: "Data Abstraction" },
  { id: "db", icon: Database, label: "Database", detail: "MySQL / SQLAlchemy" }
];

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <FadeIn delay={0.2} direction="up" fullWidth>
          <div className={styles.architectureWrapper}>
            <h2 className={styles.archTitle}>System Architecture Flow</h2>
            <div className={styles.flowContainer}>
              {ARCH_NODES.map((node, index) => (
                <div key={node.id} className={styles.nodeWrapper}>
                  <motion.div 
                    className={styles.archNode}
                    whileHover={{ scale: 1.05, borderColor: "rgba(59, 130, 246, 0.5)" }}
                  >
                    <node.icon size={24} className={styles.nodeIcon} />
                    <div className={styles.nodeInfo}>
                      <span className={styles.nodeLabel}>{node.label}</span>
                      <span className={styles.nodeDetail}>{node.detail}</span>
                    </div>
                  </motion.div>
                  
                  {index < ARCH_NODES.length - 1 && (
                    <div className={styles.connector}>
                      <div className={styles.connectorLine} />
                      <motion.div 
                        className={styles.packet}
                        animate={{ 
                          x: [0, 60],
                          opacity: [0, 1, 1, 0]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "linear",
                          delay: index * 0.4
                        }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
