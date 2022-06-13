import { Link } from "react-router-dom";
import { ButtonHome, CardHome, ContentHome, ImageHome, TitleHome } from "./HomeStyle";
import imagenordenador from './imagenordenador.jpg';

function HomeDesktop() {
    return (
        <div>
            <CardHome>
                <TitleHome>Hola, 
                    <br></br>
                    <span>soy Sergio Pascual</span>
                </TitleHome>
                <ContentHome>Desarrollador Front-End</ContentHome>
                <ButtonHome>
                    <Link className="home__description--buttontext" to="/sergio/portfolio/proyectos">Mis proyectos</Link>
                </ButtonHome>
            </CardHome>
            <ImageHome src={imagenordenador}></ImageHome>
        </div>
    )




}

export default HomeDesktop;