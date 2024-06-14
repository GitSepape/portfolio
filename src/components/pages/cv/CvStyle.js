import styled from "styled-components";

export const CvContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 80%;
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
`;

export const CvEducation = styled.div`

`;

export const CvExperience = styled.div`

`;

export const CvSkills = styled.div`

`;

export const CvDates = styled.div`

`;

export const CvLocation = styled.div`

`;
