import { Outlet } from "react-router-dom";
import BreadCrumbs from "./BreadCrumbs";

export default function CatalogLayout() {
    return (
        <>
            <BreadCrumbs />
            <Outlet />
        </>
    )
}
