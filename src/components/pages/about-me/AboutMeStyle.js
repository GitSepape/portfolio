import styled from "styled-components";

export const AboutMe = styled.div`
    color: var(--text);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    @media only screen and (max-width:750px) {
        align-items: center;
    }
`;

export const AboutMeLista = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

export const AboutMeSection = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    @media only screen and (max-width:750px) {
        width: 95vw;
        flex-direction: column;
    }
`;

export const AboutMeSectionDown = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    @media only screen and (max-width:750px) {
        width: 95vw;
        flex-direction: column-reverse;
    }
`;

export const AboutMeImage = styled.img`
    width: 20%;
    margin: 1rem;

    @media only screen and (max-width:750px) {
        width: 40%
    }
`;

export const AboutMeCajaTexto = styled.ol`
    padding: 8rem;
    text-align: justify;

    @media only screen and (max-width:750px) {
        padding: 2rem;
    }
`;

export const AboutMeTexto = styled.li`
    overflow: hidden;
`;

export const AboutMeTitulo = styled.h3`
padding: 0 4rem;
font-size: 5rem;

@media only screen and (max-width:340px) {
    font-size: 3rem;
}
`;

export const AboutMeBoton = styled.button`
    height: 10rem;
    width: 10rem;
    border-radius: 100%;
    border: none;
    background: var(--text);
    margin: 0rem 0rem 0rem 7rem;
    cursor: pointer;
    transition: 0.3s;
    font-weight: 600;

    @media only screen and (max-width:750px) {
        margin: 1rem 0;
    }
`;

export const AboutMeSkills = styled.article`
    padding: 0rem 6rem 0 6rem;

    @media only screen and (max-width:750px) {
        padding: 0;
    }
`;

export const AboutMeSkillsList = styled.ul`
    padding: 0rem 0rem 0 7rem;
    list-style: none;
`;


export const AboutMeContacto = styled.a`
    text-decoration: none;
    color: var(--col);
`;

export const AboutMeParrafo = styled.p`

`;

export const OverFlow = styled.div`
    overflow: hidden;
`;