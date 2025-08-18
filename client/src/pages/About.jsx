import React from "react";
import { color, motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <motion.section
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
    >
      <hr style={styles.hrStyling} />
      <h1>About</h1>

      <div style={styles.contentStyling}>
        <p><span style={styles.logoStyling}>FitnessTrackerX</span> is an app that helps you track your workouts seamlessly. Offering a free plan for basic usage and a <strong>low budget plan</strong> which offers <b>unlimited fitness progress tracking, unlimited workout tracking, and access to our weekly workout plans</b>, that cater to your personal needs! </p>
      </div>
    </motion.section>
  );
}

const styles = {
  hrStyling: {
    width: "85%",
    height: "0.1rem",
    backgroundColor: "grey",
  },
  logoStyling: {
    fontWeight: 'bolder',
    color: "#001BB7",
    textDecoration: "underline",
  },
  contentStyling: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    width: "75%",

  }
};
