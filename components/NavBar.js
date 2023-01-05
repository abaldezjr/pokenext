
import styles from '../styles/NavBar.module.css';

import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
    return (<>
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image src="/images/pokeball.png" width="30" height="30" alt="Pokenext"/>
                <h1>PokeNext</h1>
            </div>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/about'>Sobre</Link>
                </li>
            </ul>
        </nav>
    </>);
}