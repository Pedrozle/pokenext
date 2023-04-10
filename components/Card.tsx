import Image from "next/image";

import styles from "@/styles/components/Card.module.css";
import Link from "next/link";

export default function Card({ pokemon }: any) {
    return (
        <div className={styles.card}>
            <Image
                key={pokemon.id}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                height={100}
                width={100}
                alt={`pokemons ${pokemon.name}`}
            />
            <p key={pokemon.id} className={styles.card_id}>
                #{pokemon.id}
            </p>
            <p className={styles.card_title} key={pokemon.id}>
                {pokemon.name}
            </p>
            <Link key={pokemon.id} className={styles.card_button} href={`/pokemon/${pokemon.id}`}>
                Detalhes
            </Link>
        </div>
    );
}
