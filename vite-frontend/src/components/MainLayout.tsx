import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./Footer";

export default function MainLayout() {
    return (
        <>
            <Header></Header>
            <Outlet />
            {/*<Footer></Footer>*/}
        </>
    )
}
