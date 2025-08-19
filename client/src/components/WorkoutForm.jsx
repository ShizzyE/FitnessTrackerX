import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const API_URL = "http://localhost:8000/workouts";

export default function WorkoutForm({ onNewWorkout }) {
  const [formData, setFormData] = useState({
    name: "",
    sets: "",
    reps: "",
    weight: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(API_URL, formData);
      onNewWorkout(res.data);
      setFormData({ name: "", sets: "", reps: "", weight: "" });
    } catch (error) {
      console.log("Error adding workout:",error.message);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Workout name"
        required
      />
      <input
        name="sets"
        value={formData.sets}
        onChange={handleChange}
        placeholder="Sets"
        type="number"
      />
      <input
        name="reps"
        value={formData.reps}
        onChange={handleChange}
        placeholder="Reps"
        type="number"
      />
      <input
        name="weight"
        value={formData.weight}
        onChange={handleChange}
        placeholder="Weight (lbs)"
        type="number"
      />
      <button type="submit">Log Workout</button>
    </form>
  );
}
