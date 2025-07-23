import React, { useState, useRef, useEffect } from 'react';
import NypoHeadVideo from "../assets/navMenu.mp4" // Changez l'extension selon votre fichier

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const videoRef = useRef(null);


  // Initialiser la vidéo au chargement
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleLoadedData = () => {
        video.currentTime = 0;
        video.pause();
      };
      
      video.addEventListener('loadeddata', handleLoadedData);
      
      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
      };
    }
  }, []);

  const toggleMenu = () => {
    if (isAnimating) return;
    
    const newIsOpen = !isOpen;
    
    if (newIsOpen) {
      // Menu s'ouvre
      setIsOpen(true);
      setIsAnimating(true);
      
      if (videoRef.current) {
        const video = videoRef.current;
        video.currentTime = 0;
        video.play().catch(console.log);
        
        // Quand la vidéo se termine, rester sur la dernière frame
        const handleEnded = () => {
          video.pause();
          // NE PAS remettre currentTime à 0 ici !
          setIsAnimating(false);
          video.removeEventListener('ended', handleEnded);
        };
        
        video.addEventListener('ended', handleEnded);
      }
    } else {
      // Menu se ferme
      setIsOpen(false);
      setIsAnimating(false);
      
      // Remettre la vidéo au début seulement à la fermeture
      if (videoRef.current) {
        const video = videoRef.current;
        video.pause();
        video.currentTime = 0;
      }
    }
  };

  const menuItems = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'À propos', href: '#apropos' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <div className="hamburger-container">
      {/* Bouton hamburger - Vidéo statique qui s'anime au clic */}
      <button
        onClick={toggleMenu}
        className="hamburger-button"
        aria-expanded={isOpen}
        aria-label="Menu"
        disabled={isAnimating}
      >
        <div className="hamburger-icon-wrapper">
          <video
            ref={videoRef}
            src={NypoHeadVideo}
            className="hamburger-video"
            muted
            playsInline
            preload="auto"
            loop={false}
            controls={false}
          />
        </div>
      </button>

      {/* Menu déroulant */}
      <div className={`hamburger-menu ${isOpen ? 'hamburger-menu--open' : ''}`}>
        <div className="hamburger-menu-content">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="hamburger-menu-item"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* Overlay pour fermer le menu en cliquant à côté */}
      {isOpen && (
        <div
          className="hamburger-overlay"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default NavMenu;