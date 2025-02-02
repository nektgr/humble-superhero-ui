import React, { useState, useEffect } from "react";
import { getRandomSuperheroImage } from "../../utils/superheroImages";
import "./SuperheroCard.css";

const SuperheroCard = ({ superhero }) => {
  const [heroImage, setHeroImage] = useState(null); // Prevent empty src issues

  useEffect(() => {
    setHeroImage(getRandomSuperheroImage());
  }, []);

  return (
    <div className="superhero-card">
      {/* ✅ Only render the image when it exists */}
      {heroImage && <img src={heroImage} alt="Superhero" className="hero-img" />}
      <h3 className="superhero-name">{superhero.name}</h3>
      <p><strong>Superpower:</strong> {superhero.superpower}</p>
      <p><strong>Humility Score:</strong> {superhero.humilityScore}</p>
    </div>
  );
};

export default SuperheroCard;
