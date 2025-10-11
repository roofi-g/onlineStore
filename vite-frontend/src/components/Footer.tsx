import Logo from "./header/Logo";

export default function Footer() {
    return (
        <footer className="flex items-center justify-between">
            <Logo />
            <p>© 2025 - { new Date().getFullYear() } г. Все права защищены.</p>
        </footer>
    )
}
