import styled from "styled-components";

export const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @media only screen and (max-width:681px) {
        padding-top: 1.2rem;
        padding-left: 1.2rem;
        padding-right: 1.2rem;
    }
`;

export const NavbarWrapper = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: black;
    position: fixed;
    top: 0vh;
    right: ${props => (props.open ? "0" : "-100%")};
    width: 100%;
    height: 100vh;
    transition: right 0.4s linear;
    padding-top: 1.2rem;
    z-index: 10;

@media only screen and (min-width: 681px) {
    flex-direction: row;
    position: initial;
    height: auto;
    justify-content: center;
    background: white;
    padding-top: 1.2rem;
}

`;

export const MenuButtonWrapper = styled.button`
    border: none;
    background: none;
    z-index: 11;

    @media only screen and (min-width:681px) {
        display: none;
    }

`;

export const LogoTopbar = styled.div`
    @media only screen and (min-width:681px) {
        display: none;
    }
    
`;