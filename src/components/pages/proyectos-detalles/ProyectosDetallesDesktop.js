import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import "swiper/css";
import "swiper/css/effect-cards";


function DetallesDesktop() {

    const params = useParams();
    const parametros = params.id;
    const [paginas, setPaginas] = useState([]);

    useEffect(() => {
        axios.get(`https://wordpress.esatid3-2021.com/sergio/portfolio/wp-json/wp/v2/posts/${parametros}`)
            .then(response => setPaginas(response.data));
    }, [parametros]);

    return (
    <div>        
        <section>
            <article className="detalles">
                <div className="detalles__superior">
                    <div className="detalles__imagen--contenedor">
                        <img className="detalles__imagen" src={paginas.acf && paginas.acf.imagen}></img>
                    </div>
                    <div className="detalles__informacion ">
                        <h3 className="detalles__informacion--titulo">{paginas.title && paginas.title.rendered}</h3>
                        <div dangerouslySetInnerHTML={{ __html: paginas.content && paginas.content.rendered}}></div>
                        <ul className="detalles__informacion--herramientas">
                            <h4 className="detalles__informacion--tool">HERRAMIENTAS</h4>
                            { paginas.acf && paginas.acf.herramientas.map((tool) =>
                                <li className="detalles__informacion--tools">
                                    <img src={tool.icono} className="cards__info--icono"></img>
                                    <span className="detalles__informacion--span">{tool.nombre}</span>
                                </li>
                            ) }
                        </ul>
                    </div>
                </div>
                <ul className="detalles__enlaces">
                    { paginas.acf && paginas.acf.enlace_interes.map((interes) =>
                        <li>
                            <button className="boton__detalles">
                                <a className="detalles__boton" href={interes.url} target="_blank" rel="noreferrer">
                                    <img src={interes.icono} className="detalles__icono"></img>
                                    <span className="detalles__enlaces--texto">{interes.texto}</span>
                                </a>
                            </button>
                        </li>
                    ) }
                </ul>
            </article>
        </section>
    </div>
    )
}

export default DetallesDesktop;

