import styled from "styled-components";


export const Container = styled.section`
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: inherit;
    padding: 3.0rem;
    margin-top: 2.4rem;

    @media (min-width:681px) {
        justify-content: space-between;
        margin-right: 12px;
        margin-left: 12px;
        box-shadow: 0px 0px 24px 0px rgb(0 0 0 / 25%);
        border-radius: 16px;
        width: 300px;
        background-color: white;
        border-color: black;
        border: black;
    }

    @media (min-width:949px) {
        min-width: 400px;
    }
`;

export const ImagePost = styled.img`
    min-width: 180px;
    min-height: 180px;
    max-width: -webkit-fill-available;
    width: 100%;
    height: inherit;
    box-shadow: grey 0px 0px 2px;
    border-radius: 12px;
`;