import Link from "next/link";
import "./Navbar.css"

export default function Navbar() {
    return(
        <nav className="Navbar">
            <h1>Navbar</h1>
            <ul>
                <li>
                    <Link className="text" href="/">Inicio</Link>
                </li>
                <li>
                    <Link className="text" href="/juego">Juegos</Link>
                </li>
                <li>
                    <Link className="text" href="/juego">Generos</Link>
                </li>
                <li>
                    <Link className="text" href="/juego">Biblioteca</Link>
                </li>
                <li>
                <input type="text" className="search-input buscador" placeholder="Buscar..."/>
                <button className="search-button styleb">Buscar</button>
              
                </li>
            </ul>
        </nav>
    )
}


