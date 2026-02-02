import { Link } from "react-router-dom";
import Account from "../../app/assets/icons/account.svg";
import Cart from "../../app/assets/icons/cart.svg";
import Search from "../../app/assets/icons/search.svg";
import Favorite from "../../app/assets/icons/favorite-heart.svg";

export default function LinksIcons() {
    return (
        <nav className="flex gap-3">
            <img src={Search} alt="поиск"/>
            <Link to="wishlists"><img src={Favorite} alt="избранное"/></Link>
            <Link to="cart"><img src={Cart} alt="корзина"/></Link>
            <Link to="account"><img src={Account} alt="личный кабинет"/></Link>
        </nav>
    )
}
