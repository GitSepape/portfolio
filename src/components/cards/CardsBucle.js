import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { Link } from "react-router-dom";
import axios from "axios";

import "./style.css"
import InfoCards from "./InfoCards";
import { useState } from "react";
import { useEffect } from "react";

export default function CardsBucle() {

    const [posts, setPosts] = useState([]);
    const [image, setImage] = useState([]);
    const [selectedPost, setSelectedPost] = useState([undefined]);

    useEffect(() => {
        axios.get(`https://wordpress.esatid3-2021.com/sergio/portfolio/wp-json/wp/v2/posts`)
            .then(response => setPosts(response.data));
    }, []);

    useEffect(() => {
        axios.get(`https://wordpress.esatid3-2021.com/sergio/portfolio/wp-json/wp/v2/posts/id/acf/imagenes/link`)
            .then(response => setImage(response.data));
    }, [selectedPost]);

    return posts.map((proyecto) => 
        <SwiperSlide> 
            <Link to={`/proyectos/${proyecto.slug}`}>
                <InfoCards
                    image={proyecto.image}
                    
                    >
                </InfoCards>
            </Link>
        </SwiperSlide>
    );
}