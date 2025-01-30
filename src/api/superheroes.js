const BASE_URL = "http://localhost:3000/superheroes";

export const fetchSuperheroes = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error("Failed to fetch superheroes");
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const addSuperhero = async (superhero) => {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(superhero),
    });

    if (!response.ok) throw new Error("Failed to add superhero");
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
