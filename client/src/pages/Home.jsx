import React from "react";
import { motion } from "framer-motion";


export default function HomePage() {
  return (
    <motion.section
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
    >
      <hr style={styles.hrStyling} />

    {/* Main Content */}
    <h1>Track Your Workout!</h1>
    

    </motion.section>
  );
}

const styles = {
  hrStyling: {
    width: "85%",
    height: "0.1rem",
    backgroundColor: "grey",
  },
};
