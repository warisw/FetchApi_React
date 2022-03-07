import React, { useState, useEffect, Component } from "react";
import Card from "./components/Card.js";
import "./App.css";
function App() {
  const [pokemons, setPokemons] = useState([]);
  const [id, setId] = useState(1);
  const [buttonId, setButtonId] = useState(1);

  useEffect(async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${id}`
    );
    const data = await response.json();
    getPokObj(data.results);
  }, [buttonId]);

  function getPokObj(result) {
    result.forEach(async (pok) => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pok.name}`);
      const data = await res.json();
      setPokemons((lst) => [...lst, data]);
      console.log(data);
    });
  }
  const handleClick = () => {
    setPokemons([]);
    setButtonId(id);
  };

  // useEffect(() => {
  //   fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
  //     .then((response) =>
  //       response.json()
  //     )
  //     .then((data) => setPokemons(data.results))
  //     .catch((err) => console.log(err));
  // // }, []);

  return (
    <main>
      <div className="search">
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>
        Update
      </button>
      </div>
      <ul>
        {pokemons.map(({ name, sprites: { front_default } }, url) => (
          <li key={url}>
            <Card name={name} front_default={front_default} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
