import { EffectCards } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import axios from "axios";
import CardsBucle from "./CardsBucle";
import { Link, useParams } from "react-router-dom";

import "./style.css"
import InfoCards from "./InfoCards";
import { useEffect, useState } from "react";
import { ImagePost } from "./CardsStyle";

function CartasInfinitas() {

    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        axios.get(`https://wordpress.esatid3-2021.com/sergio/portfolio/wp-json/wp/v2/posts`)
            .then(response => setPosts(response.data));
    }, []);

    return posts.map((proyecto) => 
    <SwiperSlide>
        <div>
            <Link to={`/sergio/portfolio/proyectos/${proyecto.slug}`}>
                <InfoCards
                    image={proyecto.image}
                    
                    >
                </InfoCards>
            </Link>
        </div>
    </SwiperSlide>
);
}

function SwipperCard() {

    const params = useParams();
    const [posts, setPosts] = useState([]);
    const [image, setImage] = useState([]);
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
                        <Link to={`/sergio/portfolio/proyectos/${proyecto.slug}`}>
                            <InfoCards>
                                <ImagePost src={proyecto.acf.imagenes}></ImagePost>
                                <h2 className="hola">{proyecto.title.rendered}</h2>
                                <span>{proyecto.acf.introduccion}</span>
                                <button>Ver proyecto</button>
                            </InfoCards>
                        </Link>
                    </SwiperSlide>
                ) }
            </Swiper>
        </>
    )
}

export default SwipperCard;