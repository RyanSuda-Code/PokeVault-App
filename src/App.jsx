import "./App.css";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import PokemonCard from "./components/PokemonCard";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <SearchBar />
        <PokemonCard />
      </main>
    </>
  );
}
