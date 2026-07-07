"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Loader.module.css";

const BOOT_SEQUENCE = [
  "System Boot Sequence Initiated...",
  "Initializing Portfolio Engine...",
  "Loading Volumetric Assets...",
  "Connecting Secure APIs...",
  "Database Connected [Node-01]...",
  "Authentication Successful...",
  "Launching Interface..."
];

export default function Loader() {
  const [currentLine, setCurrentLine] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (currentLine < BOOT_SEQUENCE.length) {
      timeout = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
      }, currentLine === 0 ? 800 : Math.random() * 300 + 200); // Random typing speed
    } else {
      timeout = setTimeout(() => {
        setIsVisible(false);
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, [currentLine]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={styles.loaderContainer}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className={styles.terminal}>
            {BOOT_SEQUENCE.slice(0, currentLine + 1).map((line, index) => (
              <motion.div 
                key={index} 
                className={styles.terminalLine}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              >
                <span className={styles.prompt}>{">"}</span> {line}
              </motion.div>
            ))}
            {currentLine < BOOT_SEQUENCE.length && (
              <motion.div 
                className={styles.cursor}
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
              />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
