import "./juego.css"
import Image from "next/image";
import ValoImage from "@/app/images/Valorant.jpg";

function Descripciongame() {
    return (
        <body>
        <div className="Conteiner">
        <Image className="img" src={ValoImage} width={500} height={300} />
           <div className="descripcion">
            <h2 className="titulo">Valorant</h2>
            <h4 className="texto">Valorant es un hero shooter en primera persona ambientado en un futuro próximo.En que los jugadores asumen el control de agentes, personajes que provienen de una gran cantidad de países y culturas de todo el mundo. En el modo de juego principal, los jugadores se unen al equipo atacante o defensor con cada equipo que tiene cinco jugadores. Los agentes tienen habilidades únicas y usan un sistema económico para comprar sus habilidades y armas. </h4>
            <button className="boton">
            Comprar
        </button>
        <button className="boton2">
            Agregar a la lista de deseos
        </button>
        </div>
        </div >

        <div>

        </div>
        </body>
       
    );
}

export default Descripciongame;