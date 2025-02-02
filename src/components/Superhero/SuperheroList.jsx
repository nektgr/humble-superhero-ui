import React from "react";
import PropTypes from "prop-types";
import SuperheroCard from "../Superhero/SuperheroCard";
import { motion, AnimatePresence } from "framer-motion";
import "./SuperheroList.css";

const heroVariants = {
  hidden: { opacity: 0, y: -10, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3 } },
};

const SuperheroList = ({ superheroes }) => {
  if (!superheroes.length) return <p>No superheroes yet!</p>;

  return (
    <div className="superhero-grid" role="list">
      <AnimatePresence mode="popLayout">
        {superheroes.map((hero) => (
          <motion.div 
            key={hero.name} // Consider using a unique ID if available.
            className="superhero-card-wrapper"
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            layout
            role="listitem"
          >
            <SuperheroCard superhero={hero} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

SuperheroList.propTypes = {
  superheroes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      superpower: PropTypes.string.isRequired,
      humilityScore: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default SuperheroList;
