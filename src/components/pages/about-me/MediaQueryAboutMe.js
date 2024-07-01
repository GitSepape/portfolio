import React, { Component } from 'react';
import AboutMeDesktop from './AboutMeDesktop';
import AboutMeMobile from './AboutMeMobile';

class MediaQueryAboutMe extends Component {
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
            {this.state.matches && (<AboutMeDesktop></AboutMeDesktop>)}
            {!this.state.matches && (<AboutMeMobile></AboutMeMobile>)}
        </div>
        );
    }
}

export default MediaQueryAboutMe;