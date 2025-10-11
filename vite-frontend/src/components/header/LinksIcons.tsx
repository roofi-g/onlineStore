import { Link } from "react-router-dom";
import {ROUTES} from "../../routes";
import Account from "../../assets/icons/account.svg";
import Cart from "../../assets/icons/cart.svg";
import Search from "../../assets/icons/search.svg";
import Favorite from "../../assets/icons/favorite-heart.svg";

export default function LinksIcons() {
    return (
        <nav className="flex gap-3">
            <img src={Search} alt="поиск"/>
            <Link to={ROUTES.favorite}><img src={Favorite} alt="избранное"/></Link>
            <Link to={ROUTES.cart}><img src={Cart} alt="корзина"/></Link>
            <Link to={ROUTES.account}><img src={Account} alt="личный кабинет"/></Link>
        </nav>
    )
}
