import React, { useState } from 'react';
import enFlag from "./en-flag.png";
import esFlag from "./es-flag.png";

function TranslateButton({ language, onChangeLanguage }) {
  const [slide, setSlide] = useState(language === 'english' ? '-50%' : '50%');

  const handleToggleLanguage = () => {
    if (language === 'english') {
      onChangeLanguage('spanish');
      setSlide('50%');
    } else {
      onChangeLanguage('english');
      setSlide('-50%');
    }
  };

  return (
    <nav className="cv__language">
      <button
        className={`translate-button ${language === 'english' ? 'en' : 'es'}`}
        onClick={handleToggleLanguage}
      >
        <span>{language === 'english' ? 'Seleccionar idioma' : 'Select language'}</span>
        <div className="translate-box">
          <span
            className="flag"
            style={{
              transform: `translateX(${slide})`,
              transition: 'transform 0.5s ease',
            }}
          >
            {language === 'english' ? (
              <img src={esFlag} alt="Spanish flag" />
            ) : (
              <img src={enFlag} alt="English flag" />
            )}
          </span>
        </div>
      </button>
    </nav>
  );
}

export default TranslateButton;