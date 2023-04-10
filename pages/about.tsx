import styles from "@/styles/pages/About.module.css";
import Image from "next/image";

export default function About() {
    return (
        <div className={styles.body}>
            <h1>Sobre o projeto</h1>
            <p>
                PokéNext é um projeto desenvolvido para o aprendizado da
                framework Next.js junto da biblioteca React
            </p>
            <Image src="/pokemon.webp" width={900} height={300} alt="" />
        </div>
    );
}
