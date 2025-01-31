import React from "react";
import SuperheroCard from "./SuperheroCard";
import { motion } from "framer-motion"; // Import animation library
import "./SuperheroList.css"; // Import styles

const heroVariants = {
  hidden: { opacity: 0, y: -20, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { duration: 0.5, delay: 0.3 }
  }
};

const SuperheroList = ({ superheroes }) => {
  if (!superheroes.length) return <p>No superheroes yet!</p>;

  return (
    <div className="superhero-grid">
      {superheroes.map((hero) => (
        <motion.div 
          key={hero.name} 
          className="superhero-card-wrapper"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          <SuperheroCard superhero={hero} />
        </motion.div>
      ))}
    </div>
  );
};

export default SuperheroList;
