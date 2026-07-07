"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import styles from "./Skills.module.css";
import { Globe, Layout, Server, Lock, FileText, Briefcase, User, Settings, Code2, Layers, Database } from "lucide-react";
import { ReactNode } from "react";

const Node = ({ icon: Icon, label, delay = 0, small = false }: { icon: any, label: string, delay?: number, small?: boolean }) => (
  <motion.div
    className={`${styles.node} ${small ? styles.nodeSmall : ""}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
  >
    <div className={styles.nodeGlow} />
    <Icon size={small ? 20 : 28} className={styles.nodeIcon} />
    <span>{label}</span>
  </motion.div>
);

const Arrow = ({ label, height = 50 }: { label?: string, height?: number }) => (
  <div className={styles.arrowContainer} style={{ height: `${height}px` }}>
    {label && <span className={styles.arrowLabel}>{label}</span>}
    <div className={styles.arrowLine}>
      <motion.div 
        className={styles.arrowPacket}
        animate={{ y: [0, height], opacity: [0, 1, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
      />
    </div>
  </div>
);

export default function Skills() {
  return (
    <section className={styles.skills} id="skills">
      <div className={styles.container}>
        <FadeIn>
          <h2 className={styles.sectionTitle}>
            Live <span>Topology.</span>
          </h2>
        </FadeIn>

        <div className={styles.topologyWrapper}>
          
          <Node icon={Globe} label="User / Recruiter" delay={0.1} />
          <Arrow label="HTTPS" />
          
          <Node icon={Layout} label="React.js UI" delay={0.2} />
          <Arrow label="REST API Requests" />
          
          <Node icon={Server} label="FastAPI Backend" delay={0.3} />
          
          {/* Microservices Branch */}
          <div className={styles.branchContainer}>
            <div className={styles.branchLineTop} />
            <div className={styles.microservices}>
              <div className={styles.msCol}>
                <div className={styles.verticalDrop} />
                <Node icon={Lock} label="Auth" small delay={0.4} />
                <div className={styles.verticalDrop} />
              </div>
              <div className={styles.msCol}>
                <div className={styles.verticalDrop} />
                <Node icon={FileText} label="Resume" small delay={0.5} />
                <div className={styles.verticalDrop} />
              </div>
              <div className={styles.msCol}>
                <div className={styles.verticalDrop} />
                <Node icon={Briefcase} label="Job" small delay={0.6} />
                <div className={styles.verticalDrop} />
              </div>
              <div className={styles.msCol}>
                <div className={styles.verticalDrop} />
                <Node icon={User} label="User" small delay={0.7} />
                <div className={styles.verticalDrop} />
              </div>
              <div className={styles.msCol}>
                <div className={styles.verticalDrop} />
                <Node icon={Settings} label="Admin" small delay={0.8} />
                <div className={styles.verticalDrop} />
              </div>
            </div>
            <div className={styles.branchLineBottom} />
          </div>

          <Arrow height={30} />
          <Node icon={Code2} label="Service Layer" delay={0.9} />
          <Arrow height={40} />
          
          <Node icon={Layers} label="Repository Pattern" delay={1.0} />
          <Arrow height={40} />
          
          <Node icon={Database} label="SQLAlchemy ORM" delay={1.1} />
          <Arrow height={40} />
          
          <Node icon={Database} label="MySQL Database" delay={1.2} />

        </div>
      </div>
    </section>
  );
}
