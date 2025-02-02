import { useState, useEffect } from "react";
import { fetchSuperheroes, addSuperhero } from "../api/superheroes";

/**
 * Custom hook to manage the superheroes state.
 * Fetches the list of superheroes on mount and provides a function to add a new superhero.
 *
 * @returns {Object} An object containing:
 *   - {Object[]} superheroes: The current list of superheroes.
 *   - {Function} addNewSuperhero: Function to add a new superhero.
 *   - {string|null} error: Error message if any operation fails.
 */
export const useSuperheroes = () => {
  const [superheroes, setSuperheroes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSuperheroes()
      .then(setSuperheroes)
      .catch(() => setError("Failed to fetch superheroes. Please try again."));
  }, []);

  /**
   * Adds a new superhero and updates the superheroes state.
   *
   * @param {Object} superhero - The superhero object to add.
   */
  const addNewSuperhero = async (superhero) => {
    try {
      const newHero = await addSuperhero(superhero);
      setSuperheroes((prev) =>
        [...prev, newHero].sort((a, b) => b.humilityScore - a.humilityScore)
      );
      setError(null); // Clear error if the request succeeds
    } catch (err) {
      console.error("🚨 Error adding superhero:", err);
      let errorMessage = "Failed to add superhero. Please try again.";
      if (err.message) {
        errorMessage = err.message;
      }
      setError(errorMessage);
    }
  };

  return { superheroes, addNewSuperhero, error };
};
