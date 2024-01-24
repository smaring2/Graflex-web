import Link from "next/link";

const MainMenu = () => {
    return ( <ul>
        <li>
                    <Link href="/">Inicio</Link>
                </li>
                <li>
                    <Link href="../pages/nosotros">Nosotros</Link>
                </li>
                <li>
                    <Link href="../pages/imasd">I+D</Link>
                </li>
                <li>
                    <Link href="../pages/soluciones">Soluciones</Link>
                </li>
                <li>
                    <Link href="../pages/contacto">Contacto</Link>
                </li>
    </ul>);
}

export default MainMenu