// src/utils/superheroImages.js
const superheroImages = [
    "/superheroes/hero1.png",
    "/superheroes/hero2.png",
    "/superheroes/hero3.png",
    "/superheroes/hero4.png",
    "/superheroes/hero5.png",
    "/superheroes/hero6.png",
    "/superheroes/hero7.png",
    "/superheroes/hero8.png",
  ];
  
  let availableImages = [...superheroImages];
  
  /**
   * Retrieves a random superhero image, ensuring no repeats until all are used.
   * @returns {string} Path to the selected superhero image.
   */
  export function getRandomSuperheroImage() {
    if (availableImages.length === 0) {
      availableImages = [...superheroImages]; // Reset the list
      shuffleArray(availableImages);
    }
    return availableImages.pop(); // Get and remove the last image
  }
  
  /**
   * Shuffles an array using Fisher-Yates algorithm.
   * @param {Array} array - The array to shuffle.
   */
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  