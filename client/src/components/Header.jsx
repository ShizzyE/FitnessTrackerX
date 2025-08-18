import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";


export default function Header() {
  const navigate = useNavigate();

  return (
    <motion.header
      style={styles.headerSection}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
    <h1><em>FitnessTrackerX</em></h1>

    <div>
      <Link to="/" >
        Home
      </Link>
      <Link to="/about" >
        About
      </Link>
    </div>

    <button onClick={() => console.log("Button Placeholder")}>
      Placeholder
    </button>
    </motion.header>
  );
}

const styles = {
  headerSection: {
    width: "100%",
    height: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#001BB7",
  },
}