import React, { Component } from 'react';
import SwipperCard from './Cards';

class MediaQueryCard extends Component {
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
        <div>
            {this.state.matches && (<h1>Proyectos en grande uwu</h1>)}
            {!this.state.matches && (<SwipperCard></SwipperCard>)}
        </div>
        );
    }
}

export default MediaQueryCard;