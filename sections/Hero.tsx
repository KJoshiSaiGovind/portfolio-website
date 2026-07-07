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
              Sai Joshi <br />
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
            <svg className={styles.blobBorder} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="none" stroke="var(--accent)" strokeWidth="2" d="M42.7,-62.9C50.9,-52.8,49.8,-32.1,51.8,-15.5C53.8,1.2,59,13.7,55,24.8C51,35.9,37.8,45.5,23.3,51.9C8.8,58.3,-7.1,61.4,-22,57.5C-37,53.7,-50.9,42.9,-58.5,28.8C-66.2,14.6,-67.7,-2.9,-61.7,-17.1C-55.7,-31.3,-42.2,-42.3,-29,-50.2C-15.8,-58.1,-2.9,-63,14,-65.4C30.9,-67.9,47.8,-67.9,42.7,-62.9Z" transform="translate(100 100)" />
            </svg>
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
