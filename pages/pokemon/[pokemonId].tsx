import styles from "@/styles/pages/pokemonId.module.css";
import Image from "next/image";

export const getStaticPaths = async () => {
    const maxPokemons = 50;
    const api = `https://pokeapi.co/api/v2/pokemon/`;

    const response = await fetch(`${api}/?limit=${maxPokemons}`);
    const data = await response.json();

    const paths = data.results.map((pokemon: any, index: number) => {
        return {
            params: { pokemonId: (index + 1).toString() },
        };
    });

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (context: any) => {
    const id = context.params.pokemonId;

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();

    return {
        props: {
            pokemon: data,
        },
    };
};

export default function PokemonId({ pokemon }: any) {
    return (
        <div className={styles.body}>
            <h1>
                <p>
                    <span>Poké</span>Next
                </p>
                <Image src="/pokeball.png" height={30} width={30} alt="" />
            </h1>
            <p className={styles.pokedex_title}>PokéDex</p>
            <div className={styles.pokedex}>
                <p>{pokemon.name}</p>
            </div>
        </div>
    );
}
