import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import PokemonCard from "./components/PokemonCard";

export default function App() {
  const [pokemon, setPokemon] = useState(null); //null means absence of value.
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  function resetSearch() {
    setPokemon(null);
    setError("");
  }

  async function fetchPokemon(name) {
    if (!name.trim()) return;

    try {
      setLoading(true);
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      if (!response.ok) {
        throw new Error("Pokemon not found");
      }
      const pokeData = await response.json();
      setPokemon(pokeData);
      setError("");
    } catch (error) {
      setPokemon(null);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Header />
      <main>
        <SearchBar onSearch={fetchPokemon} onReset={resetSearch} />
        {loading && <p>Fetching Pokemon</p>}
        {error && <p>{error}</p>}
        {pokemon && <PokemonCard pokemon={pokemon} />}
      </main>
    </>
  );
}
