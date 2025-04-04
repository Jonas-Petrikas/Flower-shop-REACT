import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import TopBanner from "./TopBanner";

export default function Layout() {

    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <>
            <TopBanner />
            <Header />

            <main>
                <Outlet />
            </main>
            <Footer isHomePage={isHomePage} />
        </>
    )
}