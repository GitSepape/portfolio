import { useState } from "react";
import React from "react";
import curriculum from "./curriculum";
import { CvContainer, CvEducation, CvExperience, CvLinks, CvPresentation, CvSkills } from "./CvStyle";
import TranslateButton from "../../buttons/TranslateButton";

function Cv() {
  const [language, setLanguage] = useState('spanish');

  const cv = curriculum[language];

  return (
    <section className="cv">
      <CvContainer>
        <TranslateButton language={language} onChangeLanguage={setLanguage} />
        <article className="cv__content">
          <CvPresentation>
            <h1 className="cv__presentation--title">{cv.title.name}</h1>
            <h2 className="cv__presentation--profession">{cv.title.profession}</h2>
          </CvPresentation>
          <CvLinks>
            <ul className="cv__socials">
              <li><a className="cv__socials--link" href={`mailto:${cv.socials.email.link}`}>{cv.socials.email.title}</a></li>
              <li><a className="cv__socials--link" href={cv.socials.portfolio.link}>{cv.socials.portfolio.title}</a></li>
              <li><a className="cv__socials--link" href={cv.socials.linkedin.link}>{cv.socials.linkedin.title}</a></li>
              <li><p className="cv__socials--text">{cv.socials.tlf}</p></li>
              <li><p className="cv__socials--text">{cv.socials.city}</p></li>
            </ul>
          </CvLinks>
          <CvEducation>
            <h2 className="cv__title">{cv.education.title}</h2>
            <div className="cv__separator"></div>
            <ol className="cv__education">
              {Object.values(cv.education.school).map((education, index) => (
                <li className="cv__education--list" key={index}>
                  <section className="cv__education--location">
                    <h3 className="cv__education--title">{education.title}</h3>
                    <p className="cv__education--text">{education.place}</p>
                  </section>
                  <section className="cv__education--date">
                    <p className="cv__education--text">{education.date}</p>
                    <p className="cv__education--text">{education.location}</p>
                  </section>
                </li>
              ))}
            </ol>
          </CvEducation>
          <CvExperience>
            <h2 className="cv__title">{cv.experience.title}</h2>
            <div className="cv__separator"></div>
            <section className="cv__experience">
              <h3 className="cv__experience--title">{cv.experience.wakkos.title}</h3>
              <section className="cv__experience--location">
                <p className="cv__experience--text">{cv.experience.wakkos.date}</p>
                <p className="cv__experience--text">{cv.experience.wakkos.location}</p>
              </section>
            </section>
            <ol className="cv__experience--content">
              {Object.values(cv.experience.wakkos.works).map((experience, index) => (
                <li className="cv__experience--list" key={index}>
                  <h4 className="cv__experience--list-title">{experience.title}</h4>
                  <ul className="cv__experience--list-content">
                    {Object.values(experience.information).map((information, idx) => (
                      <li className="cv__experience--list-text" key={idx}>{information.title}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </CvExperience>
          <CvSkills>
            <h2 className="cv__title">{cv.skills.title}</h2>
            <div className="cv__separator"></div>
            <ul className="cv__skills">
              {Object.values(cv.skills).map((skills, index) => (
                <li className="cv__skills--list" key={index}>
                  <p className="cv__skills--text"><strong>{skills.title}</strong> {skills.content}</p>
                </li>
              ))}
            </ul>
          </CvSkills>
        </article>
      </CvContainer>
      <button className="cv__download">
        <a href={cv.download.href} target="_blank" rel="noopener noreferrer" download={cv.download.name} className="cv__download--text">{cv.download.title}</a>
      </button>
    </section>
  );
}

export default Cv;