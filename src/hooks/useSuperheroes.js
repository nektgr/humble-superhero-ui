  import { useState, useEffect } from "react";
  import { fetchSuperheroes, addSuperhero } from "../api/superheroes";

  export const useSuperheroes = () => {
    const [superheroes, setSuperheroes] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
      fetchSuperheroes()
        .then(setSuperheroes)
        .catch(setError);
    }, []);

    const addNewSuperhero = async (superhero) => {
      try {
        const newHero = await addSuperhero(superhero);
        setSuperheroes((prev) => 
          [...prev, newHero].sort((a, b) => b.humilityScore - a.humilityScore)
        );
      } catch (err) {
        setError(err.message);
      }
    };

    return { superheroes, addNewSuperhero, error };
  };
