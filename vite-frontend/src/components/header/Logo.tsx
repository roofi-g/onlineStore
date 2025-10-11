import { Link } from "react-router-dom";
import {ROUTES} from "../../routes";

export default function Logo() {
    return <Link to={ROUTES.home} className="text-4xl tracking-widest">LOGO</Link>
}
