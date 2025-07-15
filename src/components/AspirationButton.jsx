import React from "react";

// Composant pour le bouton "nypo."
const AspirationButton = ({ onClick, isAnimating }) => {
    return (
        <button
            onClick={onClick}
            disabled={isAnimating}
            className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 text-4xl font-bold nypo-button z-10 ${
                isAnimating 
                    ? 'text-gray-500 cursor-not-allowed' 
                    : 'text-white hover:text-gray-300'
            }`}
        >
            nypo.
        </button>
    );
};

// Export du composant (pour la compatibilité)
export default AspirationButton;