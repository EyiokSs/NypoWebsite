import React, { useState } from "react";
import montagne from "./montagne.avif"
import nypoVec from './nypoVec.png';


const App = () => {  
  const [fadeOut, setFadeOut] = useState(false);

  const handleClick = () => {
    setFadeOut(true);
  };


  return (
    // image de départ avec le bouton "nypo."
    <div className="fullscreen-container" >
      <img 
        src={montagne}
        alt="montagne  plein écran"
        className={`fullscreen-image ${fadeOut ? 'fade-out' : ''}`}
      />
      <img 
      src={nypoVec}
      alt="nypo"
      className="nypo-button"
      onClick={handleClick}
      />
    </div>
  );
}

export default App;

