import "./PokemonCard.css";

export default function PokemonCard({ pokemon }) {
  if (!pokemon) return null;

  return (
    <div className="poke-card">
      <img src={pokemon.sprites.front_default} className="pokeimg" />
      <h1>{pokemon.name}</h1>
    </div>
  );
}
