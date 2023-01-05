
import styles from '../styles/Card.module.css';

import Image from 'next/image';
import Link from 'next/link';

export default function Card({ pokemon }) {
    return (<>
        <div className={styles.card}>
            <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                width='160'
                height='160'
                alt='pokemon'
            />
            <p className={styles.id}>#{pokemon.id}</p>
            <h3 className={styles.title}>{pokemon.name}</h3>
            <Link href={`/pokemon/${pokemon.id}`} className={styles.btn}>Detalhes </Link>
        </div>

    </>);
}