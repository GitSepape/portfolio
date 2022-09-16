import React, { Component } from 'react';
import DetallesMobile from './ProyectoDetallesMobile';
import DetallesDesktop from './ProyectosDetallesDesktop';

class MediaQueryDetalles extends Component {
    constructor(props) {
        super(props)
        this.state = { matches: window.matchMedia("(min-width: 681px)").matches };
    }

    componentDidMount() {
        const handler = e => this.setState({matches: e.matches});
        window.matchMedia("(min-width: 681px)").addEventListener('change', handler);
    }
    render() {
        return (
        <div className='cards'>
            {this.state.matches && (<DetallesDesktop></DetallesDesktop>)}
            {!this.state.matches && (<DetallesMobile></DetallesMobile>)}
        </div>
        );
    }
}

export default MediaQueryDetalles;
