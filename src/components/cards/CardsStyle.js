import styled from "styled-components";


export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: inherit;
    padding: 1.2rem 1.2rem;

    @media (min-width:681px) {
        justify-content: space-between;
        margin-right: 12px;
        margin-left: 12px;
        margin-bottom: 3rem;
        box-shadow: 0px 0px 24px 0px rgb(0 0 0 / 25%);
        border-radius: 16px;
        width: 300px;
    }

    @media (min-width:949px) {
        width: 450px;
    }
`;

export const ImagePost = styled.img`
    min-width: 180px;
    min-height: 180px;
    max-width: -webkit-fill-available;
    width: inherit;
    height: inherit;
    box-shadow: grey 0px 0px 2px;
    border-radius: 12px;
`;