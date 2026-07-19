import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import PokemonCard from "./components/PokemonCard";

export default function App() {
  const [pokemon, setPokemon] = useState(null); //null means absence of value.

  function resetSearch() {
    setPokemon(null);
  }

  async function fetchPokemon(name) {
    if (!name.trim()) return;

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      if (!response.ok) {
        throw new Error("Pokemon not found");
      }
      const pokeData = await response.json();
      console.log(pokeData);
      setPokemon(pokeData);
    } catch (error) {
      console.log("Error fetching Pokemon", error);
    }
  }

  return (
    <>
      <Header />
      <main>
        <SearchBar onSearch={fetchPokemon} onReset={resetSearch} />
        <PokemonCard pokemon={pokemon} />
      </main>
    </>
  );
}
