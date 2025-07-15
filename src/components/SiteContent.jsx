import React from 'react';

const SiteContent = ({ isVisible }) => {
  return (
    <div className={`site-content ${isVisible ? 'visible' : ''}`}>
      <h1>Contenu du site</h1>
      <p>Ce contenu était caché sous l'image de fond.</p>
    </div>
  );
};

export default SiteContent;
