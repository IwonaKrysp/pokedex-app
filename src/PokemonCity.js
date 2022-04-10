import React, { useState } from "react";

function PokemonCity() {
  const [city, setCity] = useState("");

  function updateCity(evt) {
    setCity(evt.target.value);
  }

  return (
    <div>
      <input type="text" value={city} onChange={(evt) => updateCity(evt)} />
      <p>Welcome to the city of {city}</p>
    </div>
  );
}

export default PokemonCity;
