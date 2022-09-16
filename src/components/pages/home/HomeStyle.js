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
        width: 32rem;
        top: 10%;
    }

    @media only screen and (max-width:340px) {
        width: 28rem;
        top: 10%;
    }
`;

export const TitleHome = styled.h1`
    font-size: 6rem;

    @media only screen and (max-width:680px) {
        font-size: 3.6rem;
    }

    @media only screen and (max-width:340px) {
        font-size: 2.8rem;
    }
`;

export const ContentHome = styled.span`
    font-size: 2.4rem;
    padding-top: 2.4rem;
    background: white;
    width: fit-content;

    @media only screen and (max-width:680px) {
        font-size: 1.6rem;
        padding-top: 1.8rem;
    }

    @media only screen and (max-width:340px) {
        font-size: 1.4rem;
        padding-top: 1.8rem;
    }
`;

export const ButtonHome = styled.button`
    padding: 1.2rem 0rem;
    margin-top: 6rem;
    width: max-content;
    font-size: 2.4rem;
    border-radius: 16px;
    background: white;
    transition: all 0.3s;

    @media only screen and (max-width:680px) {
        font-size: 1.6rem;
        margin-top:2.4rem;
    }

    @media only screen and (max-width:340px) {
        font-size: 1.4rem;
        margin-top: 2rem;
    }
`;

export const ImageHome = styled.img`
    height: 80vh;
    position: absolute;
    right: 0%;
    bottom: 0%;
    z-index: 1;
`;

export const SpanBgWhite = styled.span`
    background: white;
`;