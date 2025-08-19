import React from "react";
import { motion } from "framer-motion";
import WorkoutForm from "../components/WorkoutForm";
import { useOutletContext } from "react-router-dom";

export default function HomePage() {
  const { workouts, addWorkout, loading, error } = useOutletContext();
  
  return (
    <motion.section
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
    >
      <hr style={styles.hrStyling} />

    {/* Main Content */}
    <h1>Track Your Workout!</h1>
     <WorkoutForm onNewWorkout={addWorkout} />

      {loading && <p>Loading workouts...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <h2>Logged Workouts</h2>
      <ul>
        {workouts.map((w, i) => (
          <li key={i}>
            <strong>{w.name}</strong> – {w.sets} sets × {w.reps} reps @ {w.weight} lbs
          </li>
        ))}
      </ul>

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
