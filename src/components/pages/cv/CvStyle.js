import styled from "styled-components";

export const CvContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 80%;
  max-width: 800px;
  margin: auto;
  border-width: 1px;
  border-color: black;
  border-style: solid;
  border-radius: 8px;
  box-shadow: grey 0px 5px 10px;

  @media only screen and (max-width:750px) {
  }
`;

export const CvPresentation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CvLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 2.6rem;
  gap: 0.3rem;
`;

export const CvEducation = styled.div`
  display: flex;
  flex-direction: column;

`;

export const CvExperience = styled.div`
  display: flex;
  flex-direction: column;
  align-item: flex-start;
`;

export const CvSkills = styled.div`
  display: flex;
  flex-direction: column;
  align-item: flex-start;
`;

