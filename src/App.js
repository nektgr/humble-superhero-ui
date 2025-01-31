import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import { useSuperheroes } from "./hooks/useSuperheroes";
import SuperheroForm from "./components/SuperheroForm";
import SuperheroList from "./components/SuperheroList";
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
