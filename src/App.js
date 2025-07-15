import React from "react";
import montagne from "./assets/montagne.avif";
import nypoVec from './assets/nypoVec.png';
import MainContainer from './components/MainContainer';
import { useAppState } from './hooks/useAppState';

const App = () => {  
  const { siteOpen, handleOpenSite } = useAppState();

  const backgroundImage = {
    src: montagne,
    alt: "montagne plein écran"
  };

  const buttonImage = {
    src: nypoVec,
    alt: "nypo"
  };

  return (
    <MainContainer 
      backgroundImage={backgroundImage}
      buttonImage={buttonImage}
      siteOpen={siteOpen}
      onOpenSite={handleOpenSite}
    />
  );
};

export default App;