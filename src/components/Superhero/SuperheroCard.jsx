import React, { useState, useEffect, memo } from "react";
import PropTypes from "prop-types";
import { getRandomSuperheroImage } from "../../utils/superheroImages";
import "./SuperheroCard.css";

const SuperheroCard = ({ superhero }) => {
  const [heroImage, setHeroImage] = useState(null);

  useEffect(() => {
    setHeroImage(getRandomSuperheroImage());
  }, []);

  return (
    <div className="superhero-card">
      {heroImage && <img src={heroImage} alt="Superhero" className="hero-img" />}
      <h3 className="superhero-name">{superhero.name}</h3>
      <p><strong>Superpower:</strong> {superhero.superpower}</p>
      <p><strong>Humility Score:</strong> {superhero.humilityScore}</p>
    </div>
  );
};

SuperheroCard.propTypes = {
  superhero: PropTypes.shape({
    name: PropTypes.string.isRequired,
    superpower: PropTypes.string.isRequired,
    humilityScore: PropTypes.number.isRequired,
  }).isRequired,
};

export default memo(SuperheroCard);
