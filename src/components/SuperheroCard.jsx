import React from "react";
import "./SuperheroCard.css";

const SuperheroCard = ({ superhero }) => {
  return (
    <div className="superhero-card">
       <div className="hero-icon">
        <img src="/god.png" alt="Superhero" className="hero-img" />
      </div>
      <h3 className="superhero-name">{superhero.name}</h3>
      <p className="superhero-info">Superpower: {superhero.superpower}</p>
      <p className="superhero-info">Humility Score: {superhero.humilityScore}</p>
    </div>
  );
};

export default SuperheroCard;
