import React from "react";
import "./SuperheroCard.css"; // Import styles

const SuperheroCard = ({ superhero }) => {
  return (
    <div className="superhero-card">
      <h3 className="superhero-name">{superhero.name}</h3>
      <p className="superhero-info"><strong>Superpower:</strong> {superhero.superpower}</p>
      <p className="superhero-info"><strong>Humility Score:</strong> {superhero.humilityScore}</p>
    </div>
  );
};

export default SuperheroCard;
