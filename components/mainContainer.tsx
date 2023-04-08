import { AppProps } from "next/app";
import Navbar from "./navbar";
import Footer from "./footer";

export default function MainContainer({ children }: any) {
    return (
        <>
            <Navbar />
            <div>{children}</div>
            <Footer />
        </>
    );
}
