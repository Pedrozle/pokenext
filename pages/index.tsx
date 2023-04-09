import styles from "@/styles/pages/Home.module.css";
import Image from "next/image";

export default function Home() {
    return (
        <div className={styles.body}>
            <h1>
                <p>
                    <span>Poké</span>Next
                </p>
                <Image src="/pokeball.png" height={30} width={30} alt="" />
            </h1>
            <div className={styles.pokedex}>
                <p className={styles.pokedex_title}>PokéDex</p>
                <div className={styles.list}>
                    adasdasd
                </div>
            </div>
        </div>
    );
}
