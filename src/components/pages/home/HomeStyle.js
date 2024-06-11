import styled from "styled-components";

export const CardHomePrincipal = styled.ol`
    height: 80vh;
    margin: auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CardHome = styled.li`
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    position: absolute;
    top: 25%;
    z-index: 2;
    margin: auto;

`;

export const CardHomeText = styled.div`
    overflow: hidden;
    padding: 0 2rem;
`;

export const TitleHome = styled.h1`
    font-size: 9rem;

    @media only screen and (max-width:600px) {
        font-size: 5rem;
    }
`;

export const ContentHome = styled.h4`
    padding-left: 2rem;
    font-size: 4rem;
    width: fit-content;

    @media only screen and (max-width:600px) {
        font-size: 2.5rem;
        padding-left: 0;
    }
`;

export const ButtonHome = styled.button`
    padding: 1.2rem 0rem;
    margin-top: 6rem;
    width: max-content;
    font-size: 2.4rem;
    border-radius: 16px;
    transition: all 0.3s;

    @media only screen and (max-width:600px) {
        font-size: 1.6rem;
        margin-top:2.4rem;
    }

    @media only screen and (max-width:600px) {
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

export const SpanBgWhite = styled.h2`
    font-size: 8rem;

    @media only screen and (max-width:600px) {
        font-size: 5rem;
    }
`;