import React from "react";

// Composant pour l'image avec animation d'aspiration
const AspirationImage = ({ isAnimating }) => {
    
    return (
        <div className={`relative h-full w-full transition-all duration-2000 ${isAnimating ? 'animate-spin' : ''}`}>
            <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop"
                alt="Image à aspirer"
                className={`fullscreen-image transition-all ease-in-out ${
                    isAnimating 
                        ? 'scale-0 opacity-0 blur-md' 
                        : 'scale-100 opacity-100 blur-0'
                }`}
                style={{
                    filter: isAnimating ? 'brightness(2) contrast(2)' : 'brightness(1) contrast(1)'
                }}
            />
            
            {/* Point d'aspiration au centre */}
            <div 
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 aspiration-point rounded-full ${
                    isAnimating 
                        ? 'w-8 h-8 bg-white active' 
                        : 'w-2 h-2 bg-transparent'
                }`}
            />
        </div>
    );
};

// Export du composant (pour la compatibilité)
export default AspirationImage;