import React from 'react';

const NypoButton = ({ src, alt, onClick, isMoved }) => {
  return (
    <img 
      src={src}
      alt={alt}
      className={`nypo-button ${isMoved ? 'moved' : ''}`}
      onClick={onClick}
    />
  );
};

export default NypoButton;