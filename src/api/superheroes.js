const BASE_URL = "http://localhost:4000/superheroes";

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

    const data = await response.json(); // ✅ Parse response JSON

    if (!response.ok) {
      // ✅ Extract the error message from the backend response
      throw new Error(data.errorMessage || "Failed to add superhero");
    }

    return data; // ✅ Return the response JSON
  } catch (error) {
    console.error("❌ API Error:", error.message);
    throw error; // ✅ Ensure the calling function gets the correct error
  }
};