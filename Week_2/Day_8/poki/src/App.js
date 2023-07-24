import './App.css';

import {useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
    const url = 'https://pokeapi.co/api/v2/'

    const [posts, setPosts] = useState([])

    async function fetchPosts() {
     
    const res = await fetch(url + '/posts', {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        
      }
      })

      const data = await res.json()
      setPosts(data);
      console.log(data)

    }

      // async function fetchOurPost() {
      //   const res = await fetch(url, 'posts', {
      //     method: 'GET',
      //     headers: {
      //       "Content-Type": "application/json"
          
      //   }
      //   })

      // const data = await res.json()
      // console.log(data)

      // }

      return (
      <div className=" container text-center mt-5">
        <div className='card bg-body-secondary pt-3 p-4 '>
        <h1 className='text-center pb-5'>Poki DataBase </h1>
        <div class="input-group mb-3 ">
          <input type="text" className="form-control" placeholder='Name of Pokimon goes here'/>
          <button className="btn btn-outline-primary" type="button" onClick={fetchPosts}>+</button>
          </div>
          <div>
          <input type="text" className="form-control" placeholder='Pokimons Ability...'/>
          <button className="btn btn-outline-primary" type="button" onClick={fetchPosts}>+</button>
          </div>
          <div>
              {
                posts.map((x) => {
                  return <div>
                    {x.name}
                    {x.ability}
                  </div>
                })}
             </div>
        </div>
      </div>
      )
    }

export default App; 
