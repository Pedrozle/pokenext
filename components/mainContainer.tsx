import Navbar from "./navbar";
import Footer from "./footer";

import styles from "@/styles/components/maincontainer.module.css";

export default function MainContainer({ children }: any) {
    return (
        <>
            <Navbar />
            <div className={styles.container}>{children}</div>
            <Footer />
        </>
    );
}
