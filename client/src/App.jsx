import { useState, useEffect } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

export default function App() {
  const [workouts, setWorkoutsState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_BASE =
    process.env.NODE_ENV === "development"
      ? `http://localhost:8000`
      : process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    getWorkouts();
  }, []);

  const getWorkouts = async () => {
  setLoading(true);
  try {
    const res = await fetch(`${API_BASE}/workouts`);
    const data = await res.json();
    console.log({ data });
    setWorkoutsState(data);
  } catch (error) {
    setError(error.message || "Unexpected Error");
  } finally {
    setLoading(false);
  }
};

  const addWorkout = (newWorkout) => {
    setWorkoutsState((prev) => [...prev, newWorkout]);
  };

  return (
    <div className="App">
      <Header />
      <hr />
      <main style={{ flex: 1 }}>
        {/* Pass workouts + updater into Outlet (HomePage) */}
        <Outlet context={{ workouts, addWorkout, loading, error }} />
      </main>
      <Footer />
    </div>
  );
}
