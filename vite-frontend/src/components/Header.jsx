import Account from "../assets/icons/account.svg";
import Cart from "../assets/icons/cart.svg";
import Search from "../assets/icons/search.svg";
import Favorite from "../assets/icons/favorite-heart.svg";
import Down from "../assets/icons/small-down.svg";

export default function Header() {


  return (
    <header className="font-medium h-16 flex items-center justify-between">
      <div className="flex">
        <p>Каталог</p>
        <img src={Down}/>
      </div>
      <p className="text-4xl tracking-widest">LOGO</p>
      <nav className="flex gap-3">
        <img src={Search} alt="поиск"/>
        <img src={Favorite} alt="избранное"/>
        <img src={Cart} alt="корзина"/>
        <img src={Account} alt="личный кабинет"/>
      </nav>
    </header>
  )
}
