import Link from "next/link";
import "./Navbar.css"

export default function Navbar() {
    return(
        <nav className="Navbar">
            <h1>Navbar</h1>
            <ul>
                <li>
                    <Link className="text" href="/">Home</Link>
                </li>
                <li>
                    <Link className="text" href="/juego">Populares</Link>
                </li>
                <li>
                    <Link className="text" href="/juego">Mas recientes</Link>
                </li>
                <li>
                    <Link className="text" href="/juego">Generos</Link>
                </li>
                <li>
                <input type="text" className="search-input buscador" placeholder="Buscar..."/>
                <button className="search-button styleb">Buscar</button>
              
                </li>
            </ul>
        </nav>
    )
}


