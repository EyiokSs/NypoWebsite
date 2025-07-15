import React from 'react';
import FullscreenImage from './FullscreenImage';
import NypoButton from './NypoButton';
import SiteContent from './SiteContent';

const MainContainer = ({ 
  backgroundImage, 
  buttonImage, 
  siteOpen, 
  onOpenSite,
  siteTitle,
  siteDescription 
}) => {
  return (
    <div className="fullscreen-container">
      <FullscreenImage 
        src={backgroundImage.src}
        alt={backgroundImage.alt}
        isVisible={!siteOpen}
      />
      
      <NypoButton 
        src={buttonImage.src}
        alt={buttonImage.alt}
        onClick={onOpenSite}
        isMoved={siteOpen}
      />
      
      <SiteContent 
        isVisible={siteOpen}
      />
    </div>
  );
};

export default MainContainer;