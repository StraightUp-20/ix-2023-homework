import React, { useState } from "react";

export default function InputField(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function onFormSubmit(e) {
    e.preventDefault();

    if (!isValid()) {
      return;
    }

    props.fetchPokemonData(name);
    clearInputs();
  }

  function isValid() {
    return description !== "" && name !== "";
  }

  function clearInputs() {
    setName("");
    setDescription("");
  }

  return (
    <form id="form" onSubmit={onFormSubmit}>
      <h1 className="text-center pb-3">Poki DataBase </h1>
      <div className="form-group mb-3 text-start">
        <label htmlFor="poki" className="mb-2">
          Type your Pokemon's Name
        </label>
        <input
          type="text"
          id="poki"
          className="form-control"
          placeholder="Name of Pokemon goes here"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="text-start form-group mb-3">
        <label htmlFor="poki2" className="mb-2">
          Type below one of your Pokemons abilities
        </label>
        <input
          type="text"
          id="poki2"
          className="form-control"
          placeholder="One Ability"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button
        id="submit-btn"
        className="btn btn-outline-primary form-control mb-3"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}





// import { React, useState } from "react";

// export default function InputField(props) {
//     const [name, setName] = useState('')
//     const [description, setDescription] = useState('')

//     function onFormSubmit(e) {
//         e.preventDefault();

//         if(!isValid) {
//             return;
//         }
//         props.fetchPokemonNames()
//         clearInputs();

//      }

//      function isValid() {
//         return description !== '' && name !== ''
//     }

//      function clearInputs() {
//         setName('');
//         setDescription('');
        
//      }

//     return ( 
//         <form id="form" onSubmit={onFormSubmit}>
//             <h1 className='text-center pb-3'>Poki DataBase </h1>
//             <div className="form-group mb-3 text-start">
//                 <label for="poki" className='mb-2'>Type your Pokemon's Name</label>
//                 <input type="text" id="poki" className="form-control" placeholder='Name of Pokimon goes here' value={name} onChange={(e) => setName(e.target.value)} />
//             </div>
//             <div className='text-start form-group mb-3'>
//                 <label for="poki2" className='mb-2'>Type below one of your Pokemons abilities</label>
//                 <input type="text" id="poki2"className="form-control" placeholder='One Ability' value={description} onChange={(e) => setDescription(e.target.value)} />
//              </div>
//              <button id="submit-btn" className="btn btn-outline-primary form-control" type="submit">Submit</button>
//         </form>
//     )
//   }


          