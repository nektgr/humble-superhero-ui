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
 * Retrieves a random superhero image, ensuring that no image is repeated until all images have been used.
 *
 * @returns {string} The path to the selected superhero image.
 */
export function getRandomSuperheroImage() {
  if (availableImages.length === 0) {
    availableImages = [...superheroImages]; // Reset the list when all images have been used
    shuffleArray(availableImages);
  }
  return availableImages.pop(); // Remove and return the last image in the list
}

/**
 * Shuffles an array in place using the Fisher-Yates algorithm.
 *
 * @param {Array} array - The array to shuffle.
 */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
