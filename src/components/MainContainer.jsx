import React from 'react';
import FullscreenImage from './FullscreenImage';
import NypoButton from './NypoButton';
import SiteContent from './SiteContent';

const MainContainer = ({ 
  backgroundImage, 
  buttonImage, 
  siteOpen, 
  onOpenSite,
}) => {
  return (
    <div className={`fullscreen-container ${siteOpen ? 'visible' : ''}`}>
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