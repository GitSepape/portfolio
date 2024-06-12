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
        axios.get(`https://wordpress.sepape.com/database/wp-json/wp/v2/posts`)
            .then(response => setPosts(response.data));
    }, []);
    console.log(setPosts);

    return posts.map((proyecto) =>
        <Link to={`/proyectos/${proyecto.id}`}>
            <InfoCards>
                <div className="cards__contenedor">
                    <ImagePost src={proyecto.acf.imagen_profesiona}></ImagePost>
                    <ul className="cards__info">
                        {proyecto.acf.herramientas.map((tool) =>
                            <li className="cards__info--herramientas">
                                <span className="cards__info--nombre">{tool.nombre}</span>
                            </li>
                        )}
                    </ul>
                </div>
                <div className="card">
                    <div className="cards__contenedor">
                        <h2 className="cards__title">{proyecto.title.rendered}</h2>
                        <span className="cards__introduccion">{proyecto.acf.introduccion}</span>
                    </div>
                </div>
            </InfoCards>
        </Link>
    )
}

export default CardsDesktop;