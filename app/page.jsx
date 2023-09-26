import "./global.css"
import Image from "next/image";
import ValoImage from "@/app/images/Valorant.jpg";
import War from "@/app/images/Warzone.jpg";
import Valo2Image from "@/app/images/Valo.jpg";
import Apex from "@/app/images/apex.jpg";
import Skull from "@/app/images/skullgils.jpg";
import Halo from "@/app/images/Halo.jpg";
import Cyber from "@/app/images/Cyberpunk.webp";


export default function HomePage() {
    return ( 
    <body>
        <div className="Descripcion">
        <h1 className="Titulo">Destacados</h1>
        <Image className="destacado" src={ValoImage} width={600} height={370} />
        <Image className="destacado2" src={War} width={300} height={370} />
        </div>
        <div className="Moretails">
        <h2 className="textMore">Mas Juegos</h2>
        </div>
        <div>
        <Image className="img1" src={Apex} width={200} height={110} />
        <Image className="img2" src={Valo2Image} width={200} height={110} />
        <Image className="img3" src={Skull} width={200} height={110} />
        <Image className="img4" src={Halo} width={200} height={110}/>
        <Image className="img5" src={Cyber} width={200} height={110}/>
        <Image className="img6" src={ValoImage} width={140} height={110}/>
        </div>
        
    </body>
    );
}