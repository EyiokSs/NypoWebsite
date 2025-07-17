import React from 'react';
import flute from "../assets/image1.png"
import moto from "../assets/image2.jpg"
import voiture from "../assets/image3.jpg"
import parapluie from "../assets/image4.jpg"
import hall from "../assets/image5.jpg"
import plage from "../assets/image6.jpg"

const SiteContent = ({ isVisible }) => {

  const images = [
    { src: flute, alt: "flute" },
    { src: moto, alt: "moto" },
    { src: voiture, alt: "voiture" },
    { src: parapluie, alt: "parapluie" },
    { src: hall, alt: "hall" },
    { src: plage, alt: "plage" }
  ];

  return (
    <div className={`site-content ${isVisible ? 'visible' : ''}`}>
      <h1>Contenu du site</h1>
      <p>Ce contenu était caché sous l'image de fond.</p>
      
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
      <p>a</p>
    </div>
  );
};

export default SiteContent;
