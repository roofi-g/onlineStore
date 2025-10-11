import LinksIcons from "./LinksIcons.tsx";
import Logo from "./Logo.tsx";
import Dropdown from "./Dropdown";

export default function Header() {
  return (
    <header className="font-medium h-16 flex items-center justify-between">
      <Dropdown />
      <Logo/>
      <LinksIcons />
    </header>
  )
}
