import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import "swiper/css";
import "swiper/css/effect-cards";


function DetallesMobile() {

    const params = useParams();
    const parametros = params.id;
    const [paginas, setPaginas] = useState([]);

    useEffect(() => {
        axios.get(`https://wordpress.sepape.com/database/wp-json/wp/v2/posts/${parametros}`)
            .then(response => setPaginas(response.data));
    }, [parametros]);

console.log(paginas);

    return (
        <article className="detalles">
            <h3 className="detalles__informacion--titulo">{paginas.title && paginas.title.rendered}</h3>
            <img className="detalles__imagen" src={paginas.acf && paginas.acf.imagen} alt={paginas.acf && 'Imagen de una ' + paginas.acf.introduccion}></img>
            <div dangerouslySetInnerHTML={{ __html: paginas.content && paginas.content.rendered }}></div>
            <ul className="detalles__informacion--herramientas">
                <h4 className="detalles__informacion--tool">HERRAMIENTAS</h4>
                {paginas.acf && paginas.acf.herramientas.map((tool) =>
                    <li className="detalles__informacion--tools">
                        <img src={tool.icono} className="cards__info--icono" alt={'Icono de ' + tool.nombre}></img>
                        <span className="detalles__informacion--span">{tool.nombre}</span>
                    </li>
                )}
            </ul>
            <ul className="detalles__enlaces">
                {paginas.acf && paginas.acf.enlace_interes.map((interes) =>
                    <li className="boton__lista">
                        <button className="boton__detalles">
                            <a className="detalles__boton" href={interes.url} target="_blank" rel="noreferrer">
                                <img src={interes.icono} className="detalles__icono" alt="Icono personalizado de mi logo personal SP"></img>
                                <span className="detalles__enlaces--texto">{interes.texto}</span>
                            </a>
                        </button>
                    </li>
                )}
            </ul>
        </article>
    )
}

export default DetallesMobile;