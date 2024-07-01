import { Link } from "react-router-dom";
import { AboutMe, AboutMeBoton, AboutMeCajaTexto, AboutMeContacto, AboutMeImage, AboutMeLista, AboutMeParrafo, AboutMeSection, AboutMeSectionDown, AboutMeSkills, AboutMeSkillsList, AboutMeTexto, AboutMeTitulo, OverFlow } from "./AboutMeStyle";
import imagenperfil from './imagenperfil.jpg';
import axios from "axios";
import { useEffect, useState } from "react";

function AboutMeMobile() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(`https://wordpress.sepape.com/database/wp-json/wp/v2/pages`)
            .then(response => setPosts(response.data));
    }, []);
    console.log(posts);

    return posts.map((proyecto) =>
        <AboutMe>
            <AboutMeLista>
                <AboutMeSection>
                    <AboutMeTexto>
                        <AboutMeTitulo className="animate__animated animate__slideInUp">Sobre mí</AboutMeTitulo>
                    </AboutMeTexto>
                    <AboutMeCajaTexto>
                        <AboutMeTexto>
                            <AboutMeParrafo>{proyecto.acf.introduccionpagina}</AboutMeParrafo>
                        </AboutMeTexto>
                    </AboutMeCajaTexto>
                    <AboutMeImage src={imagenperfil} alt="imagen de perfil"></AboutMeImage>
                    <AboutMeSkills>
                        <OverFlow class="text">
                            <AboutMeTitulo className="animate__animated animate__slideInUp">Habilidades</AboutMeTitulo>
                        </OverFlow>
                        <AboutMeSkillsList>
                            {proyecto.acf.herramientaspagina.map((tool) =>
                                <li>
                                    <AboutMeParrafo>{tool.nombre}</AboutMeParrafo>
                                </li>
                            )}
                        </AboutMeSkillsList>
                    </AboutMeSkills>
                    <AboutMeBoton>
                        <AboutMeContacto href="mailto:sepape.frontend@sepape.com">Contáctame</AboutMeContacto>
                    </AboutMeBoton>
                </AboutMeSection>
            </AboutMeLista>
        </AboutMe>
    )
}

export default AboutMeMobile;

