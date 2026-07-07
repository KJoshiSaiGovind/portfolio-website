"use client";

import { Code2, Terminal } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { profile } from "@/data/profile";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          KJSG
        </div>
        
        <div className={styles.socials}>
          <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="GitHub">
            <GithubIcon size={20} />
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
            <LinkedinIcon size={20} />
          </a>
          <a href={profile.socials.leetcode} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LeetCode">
            <Code2 size={20} />
          </a>
          <a href={profile.socials.hackerrank} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="HackerRank">
            <Terminal size={20} />
          </a>
        </div>

        <p className={styles.copyright}>
          © {new Date().getFullYear()} {profile.name}.
        </p>
      </div>
    </footer>
  );
}
