import { useState } from "react";
import Down from "../../../app/assets/icons/small-down.svg";
import Up from "../../../app/assets/icons/small-up.svg";
import DropdownMenu from "./DropdownMenu";

export default function Dropdown() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div
            className="relative flex w-34 "
            onMouseEnter={() => setShowMenu(true)}
            onMouseLeave={() => setShowMenu(false)}
        >
            <p>Каталог</p>
            <img src={!showMenu ? Down : Up} alt="icon" />

            {showMenu && <DropdownMenu />}
        </div>
    )
}
