import React from 'react';
import NavMenu from './NavMenu';
import flute from "../assets/image1.png"
import moto from "../assets/image2.jpg"
import voiture from "../assets/image3.jpg"
import parapluie from "../assets/image4.jpg"
import hall from "../assets/image5.jpg"
/*import plage from "../assets/image6.jpg"*/
import shooting from "../assets/shooting.gif"

const SiteContent = ({ isVisible }) => {

  const images = [
    { src: flute, alt: "flute" },
    { src: moto, alt: "moto" },
    { src: voiture, alt: "voiture" },
    { src: parapluie, alt: "parapluie" },
    { src: hall, alt: "hall" },
    { src: shooting, alt: "shooting" }
  ];

  return (
    <div className={`site-content ${isVisible ? 'visible' : ''}`}>

      <NavMenu />

      <div className="horizontal-scroll-left">
        <div className="horizontal-scroll-track-left">
          {/* Images originales */}
          {images.map((image, index) => (
            <div key={`original-${index}`} className="horizontal-scroll-item-left">
              <img src={image.src} alt={image.alt} className="image" />
            </div>
          ))}
          {/* Images dupliquées pour la boucle infinie */}
          {images.map((image, index) => (
            <div key={`duplicate-${index}`} className="horizontal-scroll-item-left">
              <img src={image.src} alt={image.alt} className="image" />
            </div>
          ))}
        </div>
      </div>

      <div className="horizontal-scroll-right">
        <div className="horizontal-scroll-track-right">
          {/* Images originales */}
          {images.map((image, index) => (
            <div key={`original-right-${index}`} className="horizontal-scroll-item-right">
              <img src={image.src} alt={image.alt} className="image" />
            </div>
          ))}
          {/* Images dupliquées pour la boucle infinie */}
          {images.map((image, index) => (
            <div key={`duplicate-right-${index}`} className="horizontal-scroll-item-right">
              <img src={image.src} alt={image.alt} className="image" />
            </div>
          ))}
        </div>
      </div>

      
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>aaa</p>
    </div>
  );
};

export default SiteContent;
