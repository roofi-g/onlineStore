import { Link } from "react-router-dom";
import Logo from "../../../shared/ui/Logo.tsx";
import Dropdown from "./Dropdown.tsx";
import AccountIcon from "../../../app/assets/icons/account.svg";
import CartIcon from "../../../app/assets/icons/cart.svg";
import SearchIcon from "../../../app/assets/icons/search.svg";
import FavoriteIcon from "../../../app/assets/icons/favorite-heart.svg";

export default function Header() {
  return (
    <header className="font-medium h-16 flex items-center justify-between">
      <Dropdown />
      <Logo />
      <nav className="flex gap-3">
        <img src={SearchIcon} alt="поиск" />
        <Link to="wishlists"><img src={FavoriteIcon} alt="wishlists" /></Link>
        <Link to="cart"><img src={CartIcon} alt="cart" /></Link>
        <Link to="account"><img src={AccountIcon} alt="account" /></Link>
      </nav>
    </header>
  )
}
