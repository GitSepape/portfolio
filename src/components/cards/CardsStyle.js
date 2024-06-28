import styled from "styled-components";


export const Container = styled.section`
    height: 550px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: inherit;
    max-width: 400px;
    padding: 3.0rem;
    margin-top: 2.4rem;
    justify-content: space-between;
    margin-right: 12px;
    margin-left: 12px;
    box-shadow: 0px 0px 24px 0px rgb(0 0 0 / 25%);
    border-radius: 16px;
    border: 1px solid black;
    background-color: white;

    @media (max-width:681px) {
        max-width: 320px;
        height: 450px;
    }

    @media (min-width:1024px) {
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