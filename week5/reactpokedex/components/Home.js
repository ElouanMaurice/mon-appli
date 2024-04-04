import styles from '../styles/Home.module.css';
import Pokemon from './Pokemon';
import { useState } from 'react';
import { useEffect } from 'react';

function Home() {

  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    const getPokemons = async () => {
      const newPokemon = [];
      for(let i=1; i <= 15; i++){
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await response.json();
        newPokemon.push(data)
      }
      setPokemon(newPokemon)
    } 
    getPokemons()
  }, []);

  const definirPokemon = pokemon.map((test, i) => { 
    console.log("test:", test.name)
    return <Pokemon key={i} name={test.name} id={test.id} type={test.type} />
  })
    console.log("c'estbon", definirPokemon)

     
  

  return (
    <div className={styles.background}>
      <h1 className={styles.pokedex}>Pokedex</h1>
      <div className={styles.pokemoncontainer}>{definirPokemon}</div>
        
      <button className={styles.next} onClick={() => setPokemon(pokemon)}>Next</button>
     
    </div>
  );
}

export default Home;
