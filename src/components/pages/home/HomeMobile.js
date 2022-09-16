import { Link } from "react-router-dom";
import { ButtonHome, CardHome, ContentHome, ImageHome, SpanBgWhite, TitleHome } from "./HomeStyle";
import imagenmobile from './imagenmobile.png';

function HomeMobile() {
    return (
        <div>
            <CardHome>
                <TitleHome>Hola, 
                    <br></br>
                    <SpanBgWhite>soy Sergio Pascual</SpanBgWhite>
                </TitleHome>
                <ContentHome>Desarrollador Front-End</ContentHome>
                <ButtonHome className="home__description--button">
                    <Link className="home__description--buttontext" to="/proyectos">Mis proyectos</Link>
                </ButtonHome>
            </CardHome>
            <ImageHome src={imagenmobile}></ImageHome>
        </div>
    )




}

export default HomeMobile;