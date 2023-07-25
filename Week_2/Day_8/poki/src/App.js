import React, { useState } from "react";
import InputField from "./components/InputField";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const url = "https://pokeapi.co/api/v2/";

  const [pokemonData, setPokemonData] = useState(null);

  async function fetchPokemonData(pokemonName) {
    try {
      const res = await fetch(url + "pokemon/" + pokemonName.toLowerCase());
      const data = await res.json();
      setPokemonData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div className="container text-center mt-5">
      <div className="card bg-body-secondary pt-3 p-4">
        <InputField fetchPokemonData={fetchPokemonData} />
        {pokemonData && (
          <div>
           <h3>
              {"The Pokémon you entered is: "}
              <strong>{pokemonData.name}</strong>
            </h3>
            <div className="text-start fs-5">
              <p>Your Pokemons abilities are listed below: </p>
              <ul>
                {pokemonData.abilities.map((ability, idx) => (
                  <li className="text-start" key={idx}>{ability.ability.name}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;



// import {React, useState} from 'react';
// import InputField from './components/InputField';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   const url = "https://pokeapi.co/api/v2/"

  
//   const [pokemonNames, setPokemonNames] = useState([]);
//   // const [pokemonAbility, setPokemonAbility] = useState([]);


//     async function fetchPokemonNames(pokemonNames) {
     
//     const res = await fetch(url + 'pokemon', {
//         method: 'GET',
//         headers: {
//           "Content-Type": "application/json"
        
//       }
//       })

//       const data = await res.json()
//       setPokemonNames([data.name]);
//       // setPokemonAbility(data.abilities.map(ability => ability.ability.name));
//     }

//       return (
//       <div className=" container text-center mt-5">
//         <div className='card bg-body-secondary pt-3 p-4 '>
//             <InputField fetchPokemonNames={fetchPokemonNames}/>
//         <div>
//         {pokemonNames.map((pokemonName, index) => (
//           <div key = {index}>
//             {pokemonName}
      
//         </div>
//         ))}
//       </div>
//     </div>
//     </div>
//   );
// }

// export default App; 



 