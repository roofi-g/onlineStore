import { Outlet } from "react-router-dom";
import BreadCrumbs from "./components/BreadCrumbs";

export default function CatalogLayout() {
    return (
        <>
            <BreadCrumbs />
            <Outlet />
        </>
    )
}
