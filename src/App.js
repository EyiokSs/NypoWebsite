import React, { useState } from "react";
import montagne from "./montagne.avif"
import nypoVec from './nypoVec.png';


const App = () => {  
  const [imageVisible, setImageVisible] = useState(true);

  const handleClick = () => {
    setImageVisible(false);
  };


  return (
    // image de départ avec le bouton "nypo."
    <div className="fullscreen-container" >
      {imageVisible && (
        <img 
          src={montagne}
          alt="montagne plein écran"
          className="fullscreen-image"
        />
      )}
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

