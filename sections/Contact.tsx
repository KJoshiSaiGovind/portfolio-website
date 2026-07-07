"use client";

import { Send, MapPin, Mail, Calendar, Clock, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import styles from "./Contact.module.css";
import { useState, FormEvent } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus("sent");
        form.reset();
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        alert("Something went wrong. Please try again.");
        setStatus("idle");
      }
    } catch (error) {
      alert("Failed to send message.");
      setStatus("idle");
    }
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className={styles.splitLayout}>
          <div className={styles.leftPanel}>
            <FadeIn>
              <h2 className={styles.sectionTitle}>
                Let's Build <span>Together.</span>
              </h2>
              <p className={styles.subtitle}>
                Currently available for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className={styles.contactInfo}>
                <div className={styles.infoItem}>
                  <MapPin className={styles.infoIcon} size={24} />
                  <div>
                    <h4>Location</h4>
                    <p>Visakhapatnam, India</p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <Mail className={styles.infoIcon} size={24} />
                  <div>
                    <h4>Email</h4>
                    <p>karrisaigovind33@gmail.com</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className={styles.rightPanel}>
            <FadeIn delay={0.4} direction="left">
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                  <input type="text" id="name" name="name" required className={styles.input} placeholder=" " />
                  <label htmlFor="name" className={styles.label}>Full Name</label>
                  <div className={styles.inputGlow} />
                </div>
                
                <div className={styles.inputGroup}>
                  <input type="email" id="email" name="email" required className={styles.input} placeholder=" " />
                  <label htmlFor="email" className={styles.label}>Email Address</label>
                  <div className={styles.inputGlow} />
                </div>
                
                <div className={styles.inputGroup}>
                  <textarea id="message" name="message" required className={styles.textarea} placeholder=" "></textarea>
                  <label htmlFor="message" className={styles.label}>Your Message</label>
                  <div className={styles.inputGlow} />
                </div>
                
                <button type="submit" className={styles.submitBtn} disabled={status !== "idle"}>
                  {status === "idle" ? (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  ) : status === "sending" ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    >
                      <Send size={18} />
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className={styles.successMsg}
                    >
                      Message Sent <CheckCircle size={18} />
                    </motion.div>
                  )}
                </button>
              </form>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
