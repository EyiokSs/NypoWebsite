import React from 'react';

const FullscreenImage = ({ src, alt, isVisible }) => {
  return (
    <img 
      src={src}
      alt={alt}
      className={`fullscreen-image ${!isVisible ? 'fade-out' : ''}`}
    />
  );
};

export default FullscreenImage;