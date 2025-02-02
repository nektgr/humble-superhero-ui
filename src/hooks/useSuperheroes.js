import { useState, useEffect } from "react";
import { fetchSuperheroes, addSuperhero } from "../api/superheroes";
export const useSuperheroes = () => {
  const [superheroes, setSuperheroes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSuperheroes()
      .then(setSuperheroes)
      .catch(() => setError("Failed to fetch superheroes. Please try again."));
  }, []);

  const addNewSuperhero = async (superhero) => {
    try {
      const newHero = await addSuperhero(superhero);
      setSuperheroes((prev) =>
        [...prev, newHero].sort((a, b) => b.humilityScore - a.humilityScore)
      );
      setError(null); // ✅ Clear error if request succeeds
    } catch (err) {
      console.error("🚨 Error adding superhero:", err);

      // ✅ Extract meaningful error message from backend
      let errorMessage = "Failed to add superhero. Please try again.";
      
      if (err.message) {
        errorMessage = err.message; // Use the backend error message
      }

      setError(errorMessage); // ✅ Display backend error message
    }
  };

  return { superheroes, addNewSuperhero, error };
};