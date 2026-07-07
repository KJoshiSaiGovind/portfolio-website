"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Download, Terminal } from "lucide-react";
import Image from "next/image";
import { profile } from "@/data/profile";
import FadeIn from "@/components/animations/FadeIn";
import styles from "./Hero.module.css";

const ROLES = ["Backend Engineer", "Data Engineer", "Python Developer", "System Builder"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  
  const parallaxX = useTransform(springX, [-500, 500], [20, -20]);
  const parallaxY = useTransform(springY, [-500, 500], [20, -20]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    mouseX.set(e.clientX - innerWidth / 2);
    mouseY.set(e.clientY - innerHeight / 2);
  };
  return (
    <section className={styles.hero} id="home" onMouseMove={handleMouseMove}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <FadeIn delay={0.1}>
            <div className={styles.badge}>
              <Terminal size={16} />
              <span>Available for new opportunities</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className={styles.title}>
              Karri Joshi Sai Govind <br />
              <div className={styles.roleWrapper}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    className="text-gradient-accent"
                    initial={{ y: 40, opacity: 0, rotateX: -90 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    exit={{ y: -40, opacity: 0, rotateX: 90 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    style={{ display: "inline-block", transformOrigin: "50% 50% -20px" }}
                  >
                    {ROLES[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <h2 className={styles.subtitle}>Building Scalable Systems.</h2>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className={styles.description}>
              I engineer high-performance backend architectures, design intelligent data pipelines, and develop robust machine learning solutions. Passionate about solving complex problems with elegant code.
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className={styles.actions}>
              <a href="#projects" className={styles.primaryBtn}>
                View My Work
                <ArrowRight size={20} />
              </a>
              <a href="/resume.pdf" target="_blank" className={styles.secondaryBtn}>
                <Download size={20} />
                Download Resume
              </a>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.3} direction="left">
          <motion.div 
            className={styles.profileWrapper}
            style={{ x: parallaxX, y: parallaxY }}
          >
            <div className={styles.imageGlow} />
            {[...Array(5)].map((_, i) => (
              <motion.div 
                key={i} 
                className={styles.particle}
                animate={{ 
                  y: [0, -30, 0], 
                  x: [0, (i%2===0?20:-20), 0],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 3 + i, 
                  repeat: Infinity, 
                  ease: "linear",
                  delay: i * 0.5
                }}
              />
            ))}
            <Image 
              src="/profile.jpg" 
              alt="Sai" 
              width={350} 
              height={350} 
              className={styles.profilePic} 
              priority
            />
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
