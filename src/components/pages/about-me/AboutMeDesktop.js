import { Link } from "react-router-dom";
import { AboutMe, AboutMeSectionImage, AboutMeBoton, AboutMeCajaTexto, AboutMeContacto, AboutMeImage, AboutMeLista, AboutMeParrafo, AboutMeSection, AboutMeSkills, AboutMeSkillsList, AboutMeTexto, AboutMeTitulo, OverFlow } from "./AboutMeStyle";
import imagenperfil from './imagenperfil.jpg';
import axios from "axios";
import { useEffect, useState } from "react";

function AboutMeDesktop() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(`https://wordpress.sepape.com/database/wp-json/wp/v2/pages`)
            .then(response => setPosts(response.data));
    }, []);

    return posts.map((proyecto) =>
        <AboutMe>
            <AboutMeLista>
                <AboutMeSectionImage>
                    <AboutMeImage src={imagenperfil} alt="imagen de perfil"></AboutMeImage>
                    <AboutMeBoton>
                        <AboutMeContacto href="mailto:sepape.frontend@sepape.com">Contáctame</AboutMeContacto>
                    </AboutMeBoton>
                </AboutMeSectionImage>
                <AboutMeSection>
                    <AboutMeCajaTexto>
                        <AboutMeTexto>
                            <AboutMeTitulo className="animate__animated animate__slideInUp">Sobre mí</AboutMeTitulo> 
                        </AboutMeTexto>
                        <AboutMeTexto>
                            <AboutMeParrafo>{proyecto.acf.introduccionpagina}</AboutMeParrafo>
                        </AboutMeTexto>
                    </AboutMeCajaTexto>
                    <AboutMeSkills>
                        <OverFlow class="text">
                            <AboutMeTitulo className="animate__animated animate__slideInUp">Habilidades</AboutMeTitulo>  
                        </OverFlow>
                        <AboutMeSkillsList>
                            { proyecto.acf.herramientaspagina.map((tool) => 
                                <li>
                                    <AboutMeParrafo>{tool.nombre}</AboutMeParrafo>
                                </li>
                            ) }
                        </AboutMeSkillsList>
                    </AboutMeSkills>   
                </AboutMeSection>
            </AboutMeLista>
        </AboutMe>
    )
}

export default AboutMeDesktop;

