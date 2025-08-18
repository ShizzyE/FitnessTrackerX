import { useState, useEffect } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

export default function App() {
  const [workouts, setWorkouts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_BASE =
    process.env.NODE_ENV === "development"
      ? `http://localhost:8000`
      : process.env.REACT_APP_BASE_URL;

    useEffect(() => {
      let ignore = false;

      if(!ignore){
        getWorkouts();
      }

      return () => {
        ignore = true;
      }
    }, []);

  const getWorkouts = async () => {
    setLoading(true)
    try {
      await fetch(`${API_BASE}/workouts`)
        .then((res) => res.json())
        .then((data) => {
          console.log({data})
          setWorkouts(data);
        });
    } catch (error){
      setError(error.message || "Unexpected Error")
    } finally {
      setLoading(false)
    }
  };
  return (
    <div className="App">
      <Header />
      <hr />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
