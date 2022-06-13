import styled from "styled-components";

export const CardHome = styled.div`
    display: flex;
    flex-direction: column;
    width: 55rem;
    position: absolute;
    left: 5%;
    top: 25%;
    z-index: 2;

    @media only screen and (max-width:680px) {
        width: 28rem;
        top: 10%;
    }
`;

export const TitleHome = styled.h1`
    font-size: 6rem;

    @media only screen and (max-width:680px) {
        font-size: 3.6rem;
    }
`;

export const ContentHome = styled.span`
    font-size: 2.4rem;
    padding-top: 2.4rem;

    @media only screen and (max-width:680px) {
        font-size: 1.6rem;
    }
`;

export const ButtonHome = styled.button`
    padding: 1.2rem 1.8rem;
    margin-top: 6rem;
    width: max-content;
    font-size: 2.4rem;
    border-radius: 16px;
    background: none;

    @media only screen and (max-width:680px) {
        font-size: 1.6rem;
        margin-top:2.4rem;
    }
`;

export const ImageHome = styled.img`
    height: 90%;
    position: absolute;
    right: 0%;
    bottom: 0%;
    z-index: -1;
`;