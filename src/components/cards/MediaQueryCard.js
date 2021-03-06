import React, { Component } from 'react';
import SwipperCard from './Cards';
import CardsDesktop from './CardsDesktop';

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
        <div className='cards'>
            {this.state.matches && (<CardsDesktop></CardsDesktop>)}
            {!this.state.matches && (<SwipperCard></SwipperCard>)}
        </div>
        );
    }
}

export default MediaQueryCard;