import NavBar from "./components/NavBar";
import { Navigate, Routes, Route } from "react-router-dom";
import Pokemon from "./views/Pokemon";
import { Home } from "./views/Home";
import "./App.css";
import PokemonDetails from "./views/PokemonDetails";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:name" element={<PokemonDetails />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
