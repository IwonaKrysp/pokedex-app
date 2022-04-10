//import React from "react"; not compulsory
import Logo from "./Logo";
import CaughtPokemon from "./CaughtPokemon";
import BestPokemon from "./BestPokemon";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";


const App = () => {
  function logWhenClicked() {
    console.log("Button was clicked!");
  }

  return (
    <div>
      <Logo appName={"Iwona's Pokedex"} handleClick={logWhenClicked} />
      <BestPokemon abilities={["Anticipation", "Adaptability", "Run-Away"]} />
      <CaughtPokemon date={new Date().toLocaleDateString()} />
      <PokemonMovesSelector />
      <PokemonCity />
    </div>
  );
};

export default App;
