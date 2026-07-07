"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, MapPin, Terminal, Code2, Database, Globe } from "lucide-react";
import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import styles from "./Hero.module.css";
import { profile } from "@/data/profile";

const ROLES = ["Backend Engineer", "Data Engineer", "Python Developer", "System Builder"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero} id="home">
      <div className={styles.container}>
        
        {/* Left Column: Intro, Bio, Core Stack */}
        <div className={styles.contentLeft}>
          <FadeIn delay={0.1}>
            <div className={styles.badge}>
              <Terminal size={14} />
              <span>Available for new opportunities</span>
            </div>
            
            <div className={styles.titleWrapper}>
              <h1 className={styles.title}>
                Karri Joshi <br />
                Sai Govind
              </h1>
              <div className={styles.roleWrapper}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    className="text-gradient-accent"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    style={{ display: "inline-block" }}
                  >
                    {ROLES[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            <p className={styles.description}>
              I engineer high-performance backend architectures, design intelligent data pipelines, and develop robust machine learning solutions. Passionate about solving complex problems with elegant code.
            </p>

            <div className={styles.actions}>
              <a href="#projects" className={styles.primaryBtn}>
                View Work <ArrowRight size={18} />
              </a>
              <a href="/resume.pdf" target="_blank" className={styles.secondaryBtn}>
                Resume <Download size={18} />
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className={styles.coreStack}>
              <div className={styles.stackTitle}>Core Stack</div>
              <div className={styles.techGrid}>
                <div className={styles.techItem}><Code2 size={24} /> <span>Python</span></div>
                <div className={styles.techItem}><Database size={24} /> <span>SQL</span></div>
                <div className={styles.techItem}><Globe size={24} /> <span>Next.js</span></div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Right Column: Cinematic Portrait */}
        <div className={styles.contentRight}>
          <FadeIn delay={0.2} style={{ width: "100%", height: "100%" }}>
            <motion.div
              className={styles.profileImageWrapper}
              animate={{ 
                scale: [1, 1.02, 1],
                y: [0, -5, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Image 
                src="/cinematic-profile.png" 
                alt="Profile" 
                fill
                className={styles.profilePic} 
                priority
              />
            </motion.div>
            
            <motion.div 
              className={styles.locationBadge}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <MapPin size={24} className={styles.iconAccent} />
              <div className={styles.locationInfo}>
                <h3>Visakhapatnam</h3>
                <p>India</p>
              </div>
              <div className={styles.statusDot}>
                <div className={styles.dotPulse} />
                <span>Online</span>
              </div>
            </motion.div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
