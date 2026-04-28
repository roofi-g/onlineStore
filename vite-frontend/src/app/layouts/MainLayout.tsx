import { Outlet } from "react-router-dom";
import Header from "../../widgets/header/ui/Header";
import Footer from "../../widgets/footer/Footer";

export default function MainLayout() {
    return (
        <>
            <Header></Header>
            <Outlet />
            {/*<Footer></Footer>*/}
        </>
    )
}
