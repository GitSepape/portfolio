import { Link } from "react-router-dom";
import { ButtonHome, CardHome, CardHomePrincipal, CardHomeText, ContentHome, ImageHome, SpanBgWhite, TitleHome } from "./HomeStyle";
import imagenmobile from './imagenmobile.png';

function HomeMobile() {
    return (
        <CardHomePrincipal>
            <CardHome>
                <CardHomeText>
                    <TitleHome className="animate__animated animate__slideInUp">Hola,</TitleHome>
                    <SpanBgWhite className="animate__animated animate__slideInUp">soy Sergio Pascual</SpanBgWhite>
                    <ContentHome className="animate__animated animate__slideInUp"> Desarrollador Front-End</ContentHome>
                </CardHomeText>
                <div class="projects">
                    <button class="button button--surtur">
                        <Link to="/proyectos">
                            <svg class="textcircle" viewBox="0 0 500 500">
                                <defs><path id="textcircle" d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                                /></defs>
                                <text><textPath class="rotext" href="#textcircle" textLength="900">ㅤMIS PROYECTOS & portfolio 2022</textPath></text>
                            </svg>  
                        </Link>
                    </button> 
                </div>
            </CardHome>
            {/* <ImageHome src={imagenmobile}></ImageHome> Imagen de la primera versión cutre*/} 
        </CardHomePrincipal>
    )




}

export default HomeMobile;