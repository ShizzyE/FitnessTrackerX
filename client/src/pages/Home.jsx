import React, { useState } from "react";
import { motion } from "framer-motion";
import WorkoutForm from "../components/WorkoutForm";
import { useOutletContext } from "react-router-dom";
import axios from "axios";

export default function HomePage() {
  const { workouts, addWorkout, loading, error } = useOutletContext();
  const [editingWorkoutId, setEditingWorkoutId] = useState(null);
  const [editData, setEditData] = useState({ name: "", sets: "", reps: "", weight: "" });

  const API_BASE = "http://localhost:8000/workouts";

  // Delete workout
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE}/${id}`);
      addWorkout((prev) => prev.filter((w) => w._id !== id)); // remove from state
    } catch (err) {
      console.error("Error deleting workout:", err.message);
    }
  };

  // Start editing
  const startEdit = (workout) => {
    setEditingWorkoutId(workout._id);
    setEditData({ name: workout.name, sets: workout.sets, reps: workout.reps, weight: workout.weight });
  };

  // Save edited workout
  const saveEdit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.patch(`${API_BASE}/${editingWorkoutId}`, editData);
      addWorkout((prev) =>
        prev.map((w) => (w._id === editingWorkoutId ? res.data : w))
      );
      setEditingWorkoutId(null);
    } catch (err) {
      console.error("Error updating workout:", err.message);
    }
  };

  return (
    <motion.section
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
    >
      <hr style={styles.hrStyling} />

      <h1>Track Your Workout!</h1>
      <WorkoutForm onNewWorkout={addWorkout} />

      {loading && <p>Loading workouts...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <h2>Logged Workouts</h2>
      <div style={styles.workoutsContainer}>
    {workouts.map((w) => (
      <div key={w._id} style={styles.workoutCard}>
        {editingWorkoutId === w._id ? (
          <form onSubmit={saveEdit}>
            <input
              value={editData.name}
              onChange={(e) => setEditData({ ...editData, name: e.target.value })}
              required
            />
            <input
              type="number"
              value={editData.sets}
              onChange={(e) => setEditData({ ...editData, sets: e.target.value })}
              required
            />
            <input
              type="number"
              value={editData.reps}
              onChange={(e) => setEditData({ ...editData, reps: e.target.value })}
              required
            />
            <input
              type="number"
              value={editData.weight}
              onChange={(e) => setEditData({ ...editData, weight: e.target.value })}
            />
            <button type="submit">Save</button>
            <button type="button" onClick={() => setEditingWorkoutId(null)}>Cancel</button>
          </form>
        ) : (
          <>
            <h3>{w.name}</h3>
            <p>{w.sets} sets × {w.reps} reps @ {w.weight} lbs</p>
            <button onClick={() => startEdit(w)}>Edit</button>
            <button onClick={() => handleDelete(w._id)}>Delete</button>
          </>
        )}
      </div>
    ))}
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
  workoutsContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
  },
  workoutCard: {
    backgroundColor: "#FF8040",
    padding: "1rem",
    borderRadius: "8px",
    color: "#fff",
    width: "200px",
  },
};