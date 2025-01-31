import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./SuperheroForm.css";

const SuperheroForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [superpower, setSuperpower] = useState("");
  const [humilityScore, setHumilityScore] = useState(5);
  const [error, setError] = useState("");

  const validateInput = () => {
    if (!name.trim()) return "Name cannot be empty!";
    if (!superpower.trim()) return "Superpower cannot be empty!";
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateInput();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError(""); // Clear any previous errors
    const audio = new Audio("/whoosh.mp3"); // Play whoosh sound effect
    audio.play();

    onAdd({ name, superpower, humilityScore });
    setName("");
    setSuperpower("");
    setHumilityScore(5);
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Add a Superhero</h2>
      <form onSubmit={handleSubmit} className="superhero-form">
        {error && <p className="error-message">{error}</p>}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-input"
        />
        <input
          type="text"
          placeholder="Superpower"
          value={superpower}
          onChange={(e) => setSuperpower(e.target.value)}
          className="form-input"
        />
        
        <div className="slider-container">
          <label className="slider-label">Humility Score: {humilityScore}</label>
          <Slider
            min={1}
            max={10}
            step={1}
            value={humilityScore}
            onChange={(value) => setHumilityScore(value)}
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

        <button type="submit" className="form-button">Add Superhero</button>
      </form>
    </div>
  );
};

export default SuperheroForm;
