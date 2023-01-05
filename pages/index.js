import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

import Card from '../components/Card';

const inter = Inter({ subsets: ['latin'] });

export async function getStaticProps() {

  const maxPokemons = 151;
  const api = 'https://pokeapi.co/api/v2/pokemon/';

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  data.results.forEach((item, index) => {
    item.id = index + 1
  });

  return (
    {
      props: {
        pokemons: data.results
      }
    }
  );
}

export default function Home({ pokemons }) {
  return (
    <>
      <div className={styles.titleContainer}>
        <h1>Poke<span>Next</span></h1>
        <Image src='/images/pokeball.png' width='50' height='50' alt='pokeball' />
      </div>
      <div className={styles.pokemonContainer}>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  )
}
