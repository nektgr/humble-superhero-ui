const BASE_URL = "http://localhost:4000/superheroes";

/**
 * Fetches the list of superheroes from the API.
 *
 * @returns {Promise<Object[]>} A promise that resolves to an array of superhero objects.
 * @throws {Error} If the fetch fails.
 */
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

/**
 * Adds a new superhero by sending a POST request to the API.
 *
 * @param {Object} superhero - The superhero object containing properties such as name, superpower, and humilityScore.
 * @returns {Promise<Object>} A promise that resolves to the newly created superhero object.
 * @throws {Error} If the API responds with an error message.
 */
export const addSuperhero = async (superhero) => {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(superhero),
    });

    const data = await response.json(); // Parse response JSON

    if (!response.ok) {
      // Extract the error message from the backend response if available
      throw new Error(data.errorMessage || "Failed to add superhero");
    }

    return data; // Return the parsed JSON data
  } catch (error) {
    console.error("❌ API Error:", error.message);
    throw error; // Propagate the error to the caller
  }
};
