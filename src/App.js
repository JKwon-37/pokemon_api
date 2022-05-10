import './App.css';
import React, {useState} from 'react'


function App() {
  const [pokemon, setPokemon] = useState([]);

  const fetchPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=20&limit=807")
      .then(response => {
        return response.json();
      }).then(someResponse => {
        setPokemon(someResponse.results);
        console.log(setPokemon);
      }).catch (err => console.log(err));
    // console.log("click");
  }
  return (
    <div className="App">
      <h1>Names of 807 Pokemon</h1>
      <button onClick={fetchPokemon}>Fetch Pokemon</button>
      {/* {JSON.stringify(pokemon)} */}
      {pokemon.map((poke, i) => (<li key={i}>{poke.name}</li>))}
    </div>
  );
}

export default App;
