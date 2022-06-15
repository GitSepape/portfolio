import React, { Component } from 'react';
import HomeDesktop from './HomeDesktop';
import HomeMobile from './HomeMobile';

class MediaQueryHome extends Component {
    constructor(props) {
        super(props)
        this.state = { matches: window.matchMedia("(min-width: 1024px)").matches };
    }

    componentDidMount() {
        const handler = e => this.setState({matches: e.matches});
        window.matchMedia("(min-width: 1024px)").addEventListener('change', handler);
    }
    render() {
        return (
        <div>
            {this.state.matches && (<HomeDesktop></HomeDesktop>)}
            {!this.state.matches && (<HomeMobile></HomeMobile>)}
        </div>
        );
    }
}

export default MediaQueryHome;