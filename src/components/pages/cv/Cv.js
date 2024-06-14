import { useState } from "react";
import React from "react";
import curriculum from "./curriculum";
import { CvContainer, CvEducation, CvLinks, CvPresentation } from "./CvStyle";

function Cv() {
  const [language, setLanguage] = useState('spanish');

  // console.log(curriculum);

  const changeLanguage = (lang) => {
    setLanguage(lang);
  }

  const cv = curriculum[language];
  

  return (
    <CvContainer>
      <div className="cv__language">
        <button onClick={() => changeLanguage('english')}>English</button>
        <button onClick={() => changeLanguage('spanish')}>Español</button>
      </div>
      <div className="cv__content">
        <CvPresentation>
          <h2>{cv.title.name}</h2>
          <h3>{cv.title.profession}</h3>
        </CvPresentation>
        <CvLinks>
          <a href={`mailto:${cv.socials.email.link}`}>{cv.socials.email.title}</a>
          <a href={cv.socials.portfolio.link}>{cv.socials.portfolio.title}</a>
          <a href={cv.socials.linkedin.link}>{cv.socials.linkedin.title}</a>
          <p>{cv.socials.tlf}</p>
          <p>{cv.socials.city}</p>
        </CvLinks>
        <CvEducation>
          <h2>{cv.education.title}</h2>
          <div className="cv__separator"></div>
          <ol>
            {Object.values(cv.education.school).map((education, index) => (
              <li key={index}>
                <h1>{education.title}</h1>
                <p>{education.place}</p>
                <p>{education.date}</p>
                <p>{education.location}</p>
              </li>
            ))}
          </ol>
        </CvEducation>
      </div>
    </CvContainer>
  );
};

export default Cv;