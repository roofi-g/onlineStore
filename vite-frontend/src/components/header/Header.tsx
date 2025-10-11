import {Link} from "react-router-dom";
import Account from "../../assets/icons/account.svg";
import Cart from "../../assets/icons/cart.svg";
import Search from "../../assets/icons/search.svg";
import Favorite from "../../assets/icons/favorite-heart.svg";
import Down from "../../assets/icons/small-down.svg";
import {useState} from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header className="font-medium h-16 flex items-center justify-between">
        <div
          // onClick={() => !showMenu ? setShowMenu(true) : setShowMenu(false)}
          onMouseEnter={() => setShowMenu(true)}
          onMouseLeave={() => setShowMenu(false)}
          className="flex w-34 border"
        >
          <p>Каталог</p>
          <img src={Down} alt="icon"/>
          {showMenu && (
            <nav>
              <div>
                <a href="">Одежда</a>
              </div>
              <div>
                <a href="">Аксессуары</a>
              </div>
              <div>
                <a href="">Обувь</a>
              </div>
            </nav>
          )
          }
        </div>

        <Link to={"/"} className="text-4xl tracking-widest">LOGO</Link>

        <nav className="flex gap-3">
          <img src={Search} alt="поиск"/>
          <Link to={"/favorite"}><img src={Favorite} alt="избранное"/></Link>
          <Link to={"/cart"}><img src={Cart} alt="корзина"/></Link>
          <Link to={"/account"}><img src={Account} alt="личный кабинет"/></Link>
        </nav>
      </header>
    </>
  )
}
