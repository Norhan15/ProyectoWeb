import "./juego.css"
import Image from "next/image";
import ValoImage from "@/app/images/Valorant.jpg";
import Valo2Image from "@/app/images/Valo.jpg";
import GameV from "@/app/images/GameValo.jpg";
import Habilidades from "@/app/images/Fade.jpg";
import Logo from "@/public/sports_esports.svg";
import Group from "@/public/groups_.svg";
import Verif from "@/public/verified.svg";
import Date from "@/public/event.svg";
import Pla from "@/app/images/Playeras.webp";
import Gora from "@/app/images/Gorra.jpg";


function Descripciongame() {
    return (
        <body>
        <div className="Conteiner">
        <Image className="img" src={ValoImage} width={500} height={340} />
           <div className="descripcion">
            <h2 className="titulo">Valorant</h2>
            <h4 className="texto">Valorant es un hero shooter en primera persona ambientado en un futuro próximo.En que los jugadores asumen el control de agentes, personajes que provienen de una gran cantidad de países y culturas de todo el mundo. En el modo de juego principal, los jugadores se unen al equipo atacante o defensor con cada equipo que tiene cinco jugadores. Los agentes tienen habilidades únicas y usan un sistema económico para comprar sus habilidades y armas. </h4>
            <button className="boton">
            Descargar
        </button>

        </div>
        <div>
        <Image className="img2" src={ValoImage} width={150} height={88} />
        <Image className="img3" src={Valo2Image} width={150} height={88} />
        <Image className="img4" src={GameV} width={150} height={88} />
        <Image className="img5" src={Habilidades} width={150} height={88} />
        </div>
        </div >

        <div className="Moretails">
        <h2 className="textMore">Mas detalles</h2>
        </div>
        <div className="Moretext">
            <h4 className="textReview"> <Image className="icon" src={Logo} />--Hero shooter</h4>
            <h4 className="textReview"> <Image className="icon" src={Group} />--Multijugador</h4>
            <h4 className="textReview"> <Image className="icon" src={Verif} />--Gratuito</h4>
            <h4 className="textReview3"> <Image className="icon" src={Date} />--2 de junio de 2020</h4>
        </div>

        <div className="Moretails3">
        <h2 className="textMore">Fan gear</h2>
        <div className="imagenes">
        <Image className="imagen" src={Pla} width={280} height={150} />
        <Image className="imagen2" src={Gora} width={280} height={150} />
        </div>
        </div>
        

        <div className="Moretails2">
        <h2 className="textMore" >Reviews</h2>
        </div>
        <div className="Moretext2">
            <div>
            <Image className="imgen6" src={ValoImage} width={50} height={45} />
            </div>
            <h4 className="textReview2">Holaaaaa</h4>
            <div>
            <Image className="imgen6" src={ValoImage} width={50} height={45} />
            </div>
            <h4 className="textReview2"> I hate this game so much</h4>
        </div>
        </body>
       
    );
}

export default Descripciongame;