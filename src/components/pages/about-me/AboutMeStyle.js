import styled from "styled-components";

export const AboutMe = styled.section`
    color: var(--text);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 90%;
    margin: auto;

    @media only screen and (max-width:680px) {
        align-items: center;
    }
`;

export const AboutMeLista = styled.article`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 4.8rem;

    @media only screen and (max-width: 680px) {
        flex-direction: column;
        align-content: center;
        align-items: center;
    }
`;

export const AboutMeSection = styled.section`
    padding-right: 5rem;
    max-width: 60%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    @media only screen and (max-width: 680px) {
        padding: 0;
        max-width: 100%;
    }
`;

export const AboutMeSectionImage = styled.section`
    max-width: 500px; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const AboutMeSectionDown = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const AboutMeImage = styled.img`
    width: 100%;
    border-radius: 1.6rem;
    border: 1px solid black;
    box-shadow: grey 0px 0px 2px;
`;

export const AboutMeCajaTexto = styled.ol`
`;

export const AboutMeTexto = styled.li`
    overflow: hidden;
`;

export const AboutMeTitulo = styled.h3`
font-size: 5rem;

@media only screen and (max-width:340px) {
    font-size: 3rem;
}
`;

export const AboutMeBoton = styled.button`
    width: 100%;
    margin: auto;
    margin-top: 1.6rem;
    padding: 1.6rem 0;
    border: 1px solid black;
    border-radius: 8px;
`;

export const AboutMeSkills = styled.article`
`;

export const AboutMeSkillsList = styled.ul`
    list-style: none;
`;


export const AboutMeContacto = styled.a`
    text-decoration: none;
    font-size: 2rem;
    font-weight: black;
`;

export const AboutMeParrafo = styled.p`

`;

export const OverFlow = styled.div`
    overflow: hidden;
`;