import "./PokemonCard.css";

export default function PokemonCard({ pokemon }) {
  if (!pokemon) return null;

  return (
    <div className="poke-card">
      <img src={pokemon.sprites.front_default} className="pokeimg" />
      <p>
        <b>Pokemon ID: </b>
        {pokemon.id}
      </p>
      <h1 className="pokeName">{pokemon.name.toUpperCase()}</h1>
      <p>
        <b>Types:</b>
        <li>
          {pokemon.types.map((type) => (
            <li>
              <i>{type.type.name}</i>
            </li>
          ))}
        </li>
      </p>
      <p>
        <b>Height: </b>
        {pokemon.height / 10} meters
      </p>
      <p>
        <b>Weight: </b>
        {pokemon.weight / 10} KG
      </p>
    </div>
  );
}
