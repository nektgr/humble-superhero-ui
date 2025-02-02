import { useState, useCallback, useRef } from "react";
import PropTypes from "prop-types";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./SuperheroForm.css";

const SuperheroForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [superpower, setSuperpower] = useState("");
  const [humilityScore, setHumilityScore] = useState(5);
  const [error, setError] = useState("");
  const nameInputRef = useRef(null);

  // Validate inputs using useCallback for memoization.
  const validateInput = useCallback(() => {
    if (!name.trim()) return "Name cannot be empty!";
    if (!superpower.trim()) return "Superpower cannot be empty!";
    return "";
  }, [name, superpower]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const validationError = validateInput();
      if (validationError) {
        setError(validationError);
        return;
      }
      setError("");

      try {
        await onAdd({ name, superpower, humilityScore });
        const audio = new Audio("/whoosh.mp3");
        audio.play();
        // Reset form fields
        setName("");
        setSuperpower("");
        setHumilityScore(5);
        // Move focus back to the name input for accessibility.
        if (nameInputRef.current) {
          nameInputRef.current.focus();
        }
      } catch (err) {
        console.error("🚨 Error from backend:", err.message);
        setError(err.message);
      }
    },
    [name, superpower, humilityScore, onAdd, validateInput]
  );

  const handleSliderChange = useCallback((value, event) => {
    event?.preventDefault();
    event?.stopPropagation();
    setHumilityScore(value);
  }, []);

  return (
    <div className="form-container">
      <h2 className="form-title">Add a Superhero</h2>
      <form onSubmit={handleSubmit} className="superhero-form" aria-label="Add superhero form">
        {error && <p className="error-message" role="alert">{error}</p>}
        <input
          ref={nameInputRef}
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-input"
          aria-label="Superhero Name"
        />
        <input
          type="text"
          placeholder="Superpower"
          value={superpower}
          onChange={(e) => setSuperpower(e.target.value)}
          className="form-input"
          aria-label="Superhero Superpower"
        />
        <div className="slider-container">
          <label className="slider-label" htmlFor="humility-slider">
            Humility Score: {humilityScore}
          </label>
          <Slider
            id="humility-slider"
            min={1}
            max={10}
            step={1}
            value={humilityScore}
            onChange={handleSliderChange}
            trackStyle={{ backgroundColor: "#007bff", height: 6 }}
            handleStyle={{
              borderColor: "#007bff",
              height: 20,
              width: 20,
              marginTop: -7,
              backgroundColor: "#007bff",
            }}
            railStyle={{ backgroundColor: "#ddd", height: 6 }}
          />
        </div>
        <button type="submit" className="form-button" aria-label="Add Superhero">
          Add Superhero
        </button>
      </form>
    </div>
  );
};

SuperheroForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default SuperheroForm;
