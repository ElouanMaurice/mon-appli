import { useEffect, useState } from 'react'
import Pokemon from './Pokemon'
import styles from '../styles/Home.module.css'
import Head from 'next/head';

function Home() {
	const [startIndex, setStartIndex] = useState(1)
	const [pokemonsNumber, setPokemonsNumber] = useState(15)
	const [pokemonsData, setPokemonsData] = useState([])

	const fetchPokemons = async () => {
		const newPokemons = []

		for (let i = startIndex; i <= pokemonsNumber; i++) {
			const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
			const data = await response.json()

			const newPokemon = {
				id: data.id,
				name: data.name[0].toUpperCase() + data.name.slice(1),
				type: data.types[0].type.name,
			}

			newPokemons.push(newPokemon)
		}

		setPokemonsData([...pokemonsData, ...newPokemons])
		setStartIndex(startIndex + pokemonsNumber)
		setPokemonsNumber(pokemonsNumber + pokemonsNumber)
	}

	useEffect(() => {
		fetchPokemons()
	}, [])

	const pokemons = pokemonsData.map(data => {
		return <Pokemon id={data.id} name={data.name} type={data.type} />
	})

	return (
		<>
			<Head>
				<title>Pokedex</title>
				<link href="favicon.ico"  />
				<meta name="description" content="Pokedex est le meilleur jeu de tout les temps..."/>
				<meta name="viewport" content="width=device-width, initial-scale=1"></meta>
			</Head>
			<div className={styles.container}>
				<h1 className={styles.title}>Pokedex</h1>
				<div className={styles.pokemonContainer}>{pokemons}</div>
				<button type='button' value='Next' onClick={() => fetchPokemons()} className={styles.next}></button>
			</div>
		</>
	)
}

export default Home
