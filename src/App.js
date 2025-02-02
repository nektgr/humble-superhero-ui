import { ThemeProvider } from "./components/Theme/ThemeContext";
import ThemeToggle from "./components/Theme/ThemeToggle"; // ✅ Correct Import

import { useSuperheroes } from "./hooks/useSuperheroes";
import SuperheroList from "./components/Superhero/SuperheroList";
import SuperheroForm from "./components/Form/SuperheroForm";
import "./App.css";
import "./styles/theme.css"; // Ensure theme styles are loaded

function App() {
  const { superheroes, addNewSuperhero, error } = useSuperheroes();

  return (
    <ThemeProvider>
      <div className="app-container">
        <ThemeToggle /> {/* ✅ Theme toggle button */}
        <h1 className="app-title"> 🦸 Humble Superheroes</h1>
        {error && <p className="error-message">{error}</p>}
        <SuperheroForm onAdd={addNewSuperhero} />
        <SuperheroList superheroes={superheroes} />
      </div>
    </ThemeProvider>
  );
}

export default App;
