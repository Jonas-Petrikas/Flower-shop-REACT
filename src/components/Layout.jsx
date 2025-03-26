import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import TopBanner from "./TopBanner";

export default function Layout() {
    return (
        <>
            <TopBanner />
            <Header />

            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}