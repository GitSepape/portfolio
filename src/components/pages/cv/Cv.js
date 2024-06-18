import { useState } from "react";
import React from "react";
import curriculum from "./curriculum";
import { CvContainer, CvEducation, CvExperience, CvLinks, CvPresentation, CvSkills } from "./CvStyle";

function Cv() {
  const [language, setLanguage] = useState('spanish');

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
          <h2 className="cv__presentation--title">{cv.title.name}</h2>
          <h3 className="cv__presentation--profession">{cv.title.profession}</h3>
        </CvPresentation>
        <CvLinks>
          <a className="cv__socials--link" href={`mailto:${cv.socials.email.link}`}>{cv.socials.email.title}</a>
          <span className="cv__socials--separator">|</span>
          <a className="cv__socials--link" href={cv.socials.portfolio.link}>{cv.socials.portfolio.title}</a>
          <span className="cv__socials--separator">|</span>
          <a className="cv__socials--link" href={cv.socials.linkedin.link}>{cv.socials.linkedin.title}</a>
          <span className="cv__socials--separator">|</span>
          <p className="cv__socials--text">{cv.socials.tlf}</p>
          <span className="cv__socials--separator">|</span>
          <p className="cv__socials--text">{cv.socials.city}</p>
        </CvLinks>
        <CvEducation>
          <h2 className="cv__title">{cv.education.title}</h2>
          <div className="cv__separator"></div>
          <ol className="cv__education">
            {Object.values(cv.education.school).map((education, index) => (
              <li className="cv__education--list" key={index}>
                <div className="cv__education--location">
                  <h3 className="cv__education--title">{education.title}</h3>
                  <p className="cv__education--text">{education.place}</p>
                </div>
                <div className="cv__education--date">
                  <p className="cv__education--text">{education.date}</p>
                  <span className="cv__education--separator">|</span>
                  <p className="cv__education--text">{education.location}</p>
                </div>
              </li>
            ))}
          </ol>
        </CvEducation>
        <CvExperience>
          <h2 className="cv__title">{cv.experience.title}</h2>
          <div className="cv__separator"></div>
          <div className="cv__experience">
            <h3 className="cv__experience--title">{cv.experience.wakkos.title}</h3>
            <div className="cv__experience--location">
              <p className="cv__experience--text">{cv.experience.wakkos.date}</p>
              <span className="cv__experience--separator">|</span>
              <p className="cv__experience--text">{cv.experience.wakkos.location}</p>
            </div>
          </div>
          <ol className="cv__experience--content">
            {Object.values(cv.experience.wakkos.works).map((experience, index) => (
              <li className="cv__experience--list" key={index}>
                <h3 className="cv__experience--list-title">{experience.title}</h3>
                {Object.values(experience.information).map((information, index) => (
                  <ul className="cv__experience--list-content" key={index}>
                    <li className="cv__experience--list-text">{information.title}</li>
                  </ul>
                ))}
              </li>
            ))}
          </ol>
        </CvExperience>
        <CvSkills>
          <h2 className="cv__title">{cv.skills.title}</h2>
          <div className="cv__separator"></div>
          <ol className="cv__skills">
            {Object.values(cv.skills).map((skills, index) => (
              <li className="cv__skills--list" key={index}>
                <p className="cv__skills--text"><strong>{skills.title}</strong> {skills.content}</p>
              </li>
            ))}
          </ol>
        </CvSkills>
      </div>
    </CvContainer>
  );
};

export default Cv;