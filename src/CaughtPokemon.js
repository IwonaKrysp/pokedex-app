import React, { useState } from "react";

const pokemonName = ["Butterfree", "Ditto", "Spearow", "Emolga", "Komala"];
const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState([]);

  function incrementCaught() {
    console.log("click");
    setCaught(
      caught.concat([
        pokemonName[Math.floor(Math.random() * pokemonName.length)],
      ])
    );
  }

  return (
    <div>
      <p>
        Caught {caught.length} Pokemon on {props.date}
      </p>

      <button onClick={incrementCaught}>Click me</button>
      <p>You clicked times {caught.length}</p>
      <ul>
        {caught.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};
export default CaughtPokemon;
