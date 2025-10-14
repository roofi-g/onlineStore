import Header from "../components/header/Header";
import {useParams} from "react-router-dom";

export default function CatalogPage() {
    const { id } = useParams();
    return (
        <>
            <Header/>
            <h1>catalogPage { id }</h1>
        </>
    )
}
