import React from "react";
import SuperheroCard from "../Superhero/SuperheroCard";
import { motion, AnimatePresence } from "framer-motion"; // ✅ Import AnimatePresence
import "./SuperheroList.css"; // Import styles

const heroVariants = {
  hidden: { opacity: 0, y: -10, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3 } }, // ✅ Smooth exit
};

const SuperheroList = ({ superheroes }) => {
  if (!superheroes.length) return <p>No superheroes yet!</p>;

  return (
    <div className="superhero-grid">
      <AnimatePresence mode="popLayout"> {/* ✅ Ensures smooth changes */}
        {superheroes.map((hero, index) => (
          <motion.div 
            key={hero.name} 
            className="superhero-card-wrapper"
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            exit="exit" // ✅ Smoothly removes items if needed
            layout // ✅ Keeps layout stable
          >
            <SuperheroCard superhero={hero} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default SuperheroList;
