import "swiper/css";
import "swiper/css/effect-cards";
import axios from "axios";
import { Link } from "react-router-dom";

import "./style.css"
import InfoCards from "./InfoCards";
import { useEffect, useState } from "react";
import { ImagePost } from "./CardsStyle";

function CardsDesktop() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(`https://wordpress.esatid3-2021.com/sergio/portfolio/wp-json/wp/v2/posts`)
            .then(response => setPosts(response.data));
    }, []);

    return posts.map((proyecto) =>
            <InfoCards>
                <ImagePost src={proyecto.acf.imagen_profesiona}></ImagePost>
                    <div className="cards">
                        <div className="cards__contenedor">
                            <h2 className="cards__title">{proyecto.title.rendered}</h2>
                            <ul className="cards__info">
                                { proyecto.acf.herramientas.map((tool) => 
                                    <li className="cards__info--herramientas">
                                        <span className="cards__info--nombre">{tool.nombre}</span>
                                    </li>
                                ) }
                            </ul>
                            <span className="cards__introduccion">{proyecto.acf.introduccion}</span></div>
                        </div>
                    <Link to={`/proyectos/${proyecto.id}`}>
                        <button className="cards__button">VER PROYECTO</button>
                    </Link>
            </InfoCards>
    )
}

export default CardsDesktop;