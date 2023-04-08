import Link from "next/link";

import styles from "@/styles/components/navbar.module.css";

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/products">Produtos</Link>
                </li>
                <li>
                    <Link href="/about">Sobre nós</Link>
                </li>
            </ul>
        </nav>
    );
}
