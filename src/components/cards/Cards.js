import { EffectCards } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import axios from "axios";
import CardsBucle from "./CardsBucle";
import { Link } from "react-router-dom";

import "./style.css"
import InfoCards from "./InfoCards";
import { useEffect, useState } from "react";
import { ImagePost } from "./CardsStyle";

function SwipperCard() {

    const [posts, setPosts] = useState([]);
    const [image, setImage] = useState([]);
    const [herramientas, setHerramientas] = useState([]);
    const [selectedPost, setSelectedPost] = useState([undefined]);

    useEffect(() => {
        axios.get(`https://wordpress.esatid3-2021.com/sergio/portfolio/wp-json/wp/v2/posts`)
            .then(response => setPosts(response.data));
    }, []);

    useEffect(() => {
        axios.get(`https://wordpress.esatid3-2021.com/sergio/portfolio/wp-json/wp/v2/media`)
            .then(response => setImage(response.data));
    }, []);

    return (
        <>
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                { posts.map((proyecto) =>
                    <SwiperSlide>
                        
                            <InfoCards>
                                <ImagePost src={proyecto.acf.imagen}></ImagePost>
                                    <div>
                                        <h2 className="cards__title">{proyecto.title.rendered}</h2>
                                        
                                        <p className="cards__herramientas">{proyecto.acf.herramientas.name}</p>
                                        <span className="cards__introduccion">{proyecto.acf.introduccion}</span>
                                    </div>
                                    <Link to={`/sergio/portfolio/proyectos/${proyecto.slug}`}>
                                        <button>Ver proyecto</button>
                                    </Link>
                            </InfoCards>
                    </SwiperSlide>
                ) }
            </Swiper>
        </>
    )
}

export default SwipperCard;