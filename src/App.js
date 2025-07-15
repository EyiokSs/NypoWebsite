import React from "react";
import AspirationImage from "./components/AspirationImage"
import ParticleEffect from "./components/ParticleEffect"
import AspirationButton from "./components/AspirationButton"


/*

const App = () => {
  return (
    <div >
    </div>
  );
}

export default App;

*/

// Composant principal de l'application
const App = () => {
    const { useState, useEffect } = React;
    const [isAnimating, setIsAnimating] = useState(false);

    const handleAspiration = () => {
        setIsAnimating(true);
        // Réinitialiser l'animation après qu'elle soit terminée
        setTimeout(() => {
            setIsAnimating(false);
        }, 2000);
    };

    // Gérer le défilement de la page
    useEffect(() => {
        if (isAnimating) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
        
        // Nettoyage lors du démontage du composant
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isAnimating]);

    return React.createElement('div', {
        className: `main-container ${isAnimating ? 'overflow-hidden' : 'overflow-auto'}`
    }, [
        // Image avec animation d'aspiration
        React.createElement(AspirationImage, {
            key: 'image',
            isAnimating: isAnimating
        }),
        
        // Effet de particules
        React.createElement(ParticleEffect, {
            key: 'particles',
            isAnimating: isAnimating
        }),
        
        // Bouton d'aspiration
        React.createElement(AspirationButton, {
            key: 'button',
            onClick: handleAspiration,
            isAnimating: isAnimating
        })
    ]);
};

// Export du composant (pour la compatibilité)
//window.App = App;

export default App;