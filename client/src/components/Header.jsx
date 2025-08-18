import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { FiAlignLeft } from "react-icons/fi";

export default function Header() {
  const navigate = useNavigate();
  const [showDropdown, setShowDropDown] = useState(false);

  const toggleDropdown = () => {
    setShowDropDown(!showDropdown);
  };

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
      <h1 style={styles.h1Styling}>
        <em>FitnessTrackerX</em>
      </h1>

      <div style={styles.navContainer}>
        <Link to="/">Home</Link>

        <div style={{ position: "relative" }}>
          <FiAlignLeft
            onClick={toggleDropdown}
            style={{
              cursor: "pointer",
              fontSize: "24px",
              color: "black",
              marginTop: "0.5rem",
            }}
          />
          {showDropdown && (
            <div style={styles.dropdown}>
              <Link to="/about" style={styles.dropdownLink}>
                About
              </Link>
            </div>
          )}
        </div>
      </div>

      <button
        style={styles.rightStyling}
        onClick={() => console.log("Button Placeholder")}
      >
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
  h1Styling: {
    marginLeft: "1.5rem",
  },
  rightStyling: {
    marginRight: "7rem",
  },
  navContainer: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  dropdown: {
    position: "absolute",
    top: "36px",
    left: 0,
    backgroundColor: "#001BB7",
    padding: "5px 10px",
    borderRadius: "20px",
    zIndex: 10,
  },
  dropdownLink: {
    color: "#ffffffff",
    textDecoration: "none",
    fontSize: "16px",
  },
};
